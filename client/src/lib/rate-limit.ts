/**
 * Simple in-memory sliding-window rate limiter for Next.js API routes.
 *
 * Each instance tracks requests per IP within a configurable window.
 * Stale entries are automatically purged to prevent memory leaks on
 * long-lived serverless containers.
 *
 * Usage:
 *   const limiter = createRateLimiter({ limit: 20, windowMs: 60_000 });
 *   // In route handler:
 *   const { allowed, remaining } = limiter.check(ip);
 */

interface RateLimitEntry {
  timestamps: number[];
}

interface RateLimiterOptions {
  /** Max requests allowed per window. */
  limit: number;
  /** Window size in milliseconds. */
  windowMs: number;
}

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  limit: number;
  resetMs: number;
}

export function createRateLimiter({ limit, windowMs }: RateLimiterOptions) {
  const store = new Map<string, RateLimitEntry>();

  // Purge stale entries every 5 minutes to prevent unbounded growth
  const CLEANUP_INTERVAL = 5 * 60 * 1000;
  let lastCleanup = Date.now();

  function cleanup() {
    const now = Date.now();
    if (now - lastCleanup < CLEANUP_INTERVAL) return;
    lastCleanup = now;

    for (const [key, entry] of store) {
      entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);
      if (entry.timestamps.length === 0) {
        store.delete(key);
      }
    }
  }

  function check(identifier: string): RateLimitResult {
    cleanup();

    const now = Date.now();
    const entry = store.get(identifier) || { timestamps: [] };

    // Remove timestamps outside the current window
    entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);

    if (entry.timestamps.length >= limit) {
      const oldestInWindow = entry.timestamps[0];
      return {
        allowed: false,
        remaining: 0,
        limit,
        resetMs: oldestInWindow + windowMs - now,
      };
    }

    entry.timestamps.push(now);
    store.set(identifier, entry);

    return {
      allowed: true,
      remaining: limit - entry.timestamps.length,
      limit,
      resetMs: windowMs,
    };
  }

  return { check };
}

/**
 * Extract client IP from a Request in Next.js (Vercel-compatible).
 * Falls back through common headers used by proxies and CDNs.
 */
export function getClientIp(req: Request): string {
  const headers = req.headers;
  return (
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    headers.get('cf-connecting-ip') ||
    'unknown'
  );
}

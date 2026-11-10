import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware: Pass through requests cleanly.
 * Canonical domain redirects (www vs non-www) and HTTPS enforcement
 * are handled at the Vercel Edge layer under Project Settings > Domains.
 */
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // Run on all routes except static files and internal Next.js paths
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logos|banners|cities|images|socialicons).*)",
  ],
};

import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware to enforce canonical domain.
 *
 * Redirects www → non-www with a 308 Permanent Redirect.
 * HTTP → HTTPS is already handled at the Vercel edge layer
 * via the strict-transport-security header.
 */
export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // Redirect www.eevsgroup.com → eevsgroup.com
  if (hostname.startsWith("www.")) {
    const newUrl = new URL(request.url);
    newUrl.host = hostname.replace(/^www\./, "");
    return NextResponse.redirect(newUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except static files and internal Next.js paths
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logos|banners|cities|images|socialicons).*)",
  ],
};

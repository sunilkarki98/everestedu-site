// src/lib/seo.ts
// Centralized SEO utilities to avoid hardcoded URLs across the codebase

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eevsgroup.com";

/**
 * Returns the canonical base URL for the site.
 * Uses NEXT_PUBLIC_SITE_URL env variable with fallback.
 */
export function getBaseUrl(): string {
  return SITE_URL;
}

/**
 * Constructs a full canonical URL from a path.
 * @param path - Route path (e.g., "/about", "/blog/my-post")
 */
export function getCanonicalUrl(path: string = ""): string {
  return `${SITE_URL}${path}`;
}

/**
 * Default OG image configuration for pages without a custom image.
 */
export const defaultOgImage = {
  url: "/logos/og-default.png",
  width: 1200,
  height: 630,
  alt: "Everest Education & Visa Services — Study, Work & Migrate to Australia",
};

/**
 * Generates standard OpenGraph metadata for a page.
 */
export function createOgMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  image?: { url: string; width?: number; height?: number; alt?: string };
  type?: "website" | "article";
}) {
  return {
    title,
    description,
    url: getCanonicalUrl(path),
    siteName: "Everest Education & Visa Services",
    images: [image || defaultOgImage],
    locale: "en_AU",
    type,
  };
}

/**
 * Generates standard Twitter card metadata for a page.
 */
export function createTwitterMetadata({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [image || defaultOgImage.url],
  };
}

/**
 * Generates FAQPage JSON-LD structured data.
 * Must be paired with a visible FAQ section on the page.
 */
export function createFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };
}

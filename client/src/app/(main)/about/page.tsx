import { Metadata } from "next";
import AboutContent from "@/components/page-clients/AboutContent";
import { getCanonicalUrl, getBaseUrl, createOgMetadata, createTwitterMetadata, createFaqJsonLd } from "@/lib/seo";
import { aboutFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "About Us | Everest Education & Visa Services",
  description: "Learn about our journey, our team of expert counselors, and our mission to provide the best education and migration services.",
  keywords: ["about Everest Education", "education consultants Australia", "visa agents Australia", "study abroad consultants"],
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
  openGraph: createOgMetadata({
    title: "About Us | Everest Education & Visa Services",
    description: "Learn about our journey, our team of expert counselors, and our mission to provide the best education and migration services.",
    path: "/about",
  }),
  twitter: createTwitterMetadata({
    title: "About Us | Everest Education & Visa Services",
    description: "Learn about our journey, our team of expert counselors, and our mission to provide the best education and migration services.",
  }),
};

export default function AboutPage() {
  const baseUrl = getBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Everest Education & Visa Services",
    "description": "Learn about our journey, our team of expert counselors, and our mission to provide the best education and migration services.",
    "url": `${baseUrl}/about`,
    "mainEntity": {
      "@type": "Organization",
      "name": "Everest Education & Visa Services",
      "url": baseUrl,
      "foundingDate": "2011",
      "description": "Trusted education & visa services in Australia. Family-owned, student-first.",
      "areaServed": "Australia",
      "serviceType": ["Education Consultancy", "Visa Services", "Migration Services"],
    },
  };

  const faqJsonLd = createFaqJsonLd(aboutFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AboutContent />
    </>
  );
}

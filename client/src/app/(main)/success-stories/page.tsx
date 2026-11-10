import { Metadata } from "next";
import { SuccessStoriesClient } from "@/components/page-clients/SuccessStoriesClient";
import { getCanonicalUrl, getBaseUrl, createOgMetadata, createTwitterMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Student Success Stories | Everest Education",
  description: "Read the inspiring journeys of our students who successfully reached their education and migration goals with Everest Education.",
  alternates: {
    canonical: getCanonicalUrl("/success-stories"),
  },
  keywords: ["student success stories Australia", "migration success stories", "education consultancy reviews", "study abroad testimonials"],
  openGraph: createOgMetadata({
    title: "Student Success Stories | Everest Education",
    description: "Read the inspiring journeys of our students who successfully reached their education and migration goals.",
    path: "/success-stories",
  }),
  twitter: createTwitterMetadata({
    title: "Student Success Stories | Everest Education",
    description: "Read the inspiring journeys of our students who successfully reached their education and migration goals.",
  }),
};

export default function SuccessStoriesPage() {
  const baseUrl = getBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Student Success Stories — Everest Education",
    "description": "Inspiring journeys of students who achieved their education and migration goals.",
    "url": `${baseUrl}/success-stories`,
    "provider": {
      "@type": "Organization",
      "name": "Everest Education & Visa Services",
      "url": baseUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SuccessStoriesClient />
    </>
  );
}


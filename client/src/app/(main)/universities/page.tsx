import { Metadata } from "next";
import { UniversitiesClient } from "@/components/page-clients/UniversitiesClient";
import { getCanonicalUrl, getBaseUrl, createOgMetadata, createTwitterMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Global Partner Universities | Everest Education",
  description: "Explore our extensive network of top-ranked global institutions. We provide end-to-end admission guidance for your dream university in Australia, Canada, UK, and more.",
  alternates: {
    canonical: getCanonicalUrl("/universities"),
  },
  keywords: ["partner universities Australia", "top universities for international students", "university admissions guidance", "study in Australia universities"],
  openGraph: createOgMetadata({
    title: "Global Partner Universities | Everest Education",
    description: "Explore our extensive network of top-ranked global institutions. End-to-end admission guidance for your dream university.",
    path: "/universities",
  }),
  twitter: createTwitterMetadata({
    title: "Global Partner Universities | Everest Education",
    description: "Explore our extensive network of top-ranked global institutions. End-to-end admission guidance for your dream university.",
  }),
};

export default function UniversitiesPage() {
  const baseUrl = getBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Global Partner Universities — Everest Education",
    "description": "Explore our extensive network of top-ranked global institutions.",
    "url": `${baseUrl}/universities`,
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
      <UniversitiesClient />
    </>
  );
}


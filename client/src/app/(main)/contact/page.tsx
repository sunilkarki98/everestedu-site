import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import GlobalContactSection from "@/components/sections/GlobalContactSection";
import { Metadata } from "next";
import { getCanonicalUrl, getBaseUrl, createOgMetadata, createTwitterMetadata, createFaqJsonLd } from "@/lib/seo";
import { contactFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact Us | Everest Education & Visa Services",
  description: "Get in touch with Everest Education & Visa Services. We are here to help you with your study and migration needs.",
  keywords: ["contact Everest Education", "education consultancy near me", "migration agent Belconnen", "study in Australia contact"],
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
  openGraph: createOgMetadata({
    title: "Contact Us | Everest Education & Visa Services",
    description: "Get in touch with Everest Education & Visa Services. We are here to help you with your study and migration needs.",
    path: "/contact",
  }),
  twitter: createTwitterMetadata({
    title: "Contact Us | Everest Education & Visa Services",
    description: "Get in touch with Everest Education & Visa Services. We are here to help you with your study and migration needs.",
  }),
};

export default function ContactPage() {
  const baseUrl = getBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Everest Education & Visa Services",
    "url": `${baseUrl}/contact`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Everest Education & Visa Services",
      "url": baseUrl,
      "telephone": "+61 406 000 815",
      "email": "info@eevsgroup.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Level 1, Suite 7, 2-10 Oatley Court",
        "addressLocality": "Belconnen",
        "addressRegion": "ACT",
        "postalCode": "2617",
        "addressCountry": "AU",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-35.2407",
        "longitude": "149.0664"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00",
      },
    },
  };

  const faqJsonLd = createFaqJsonLd(contactFaqs);

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
      <main>
        <PageHeader 
          title="Get in Touch" 
          subtitle="We are here to answer your questions and guide you on your journey to global exposure."
          breadcrumbs={[{ label: "Contact Us" }]}
        />
        
        {/* We reuse the comprehensive Contact Us form from the homepage */}
        <div className="pt-10">
          <GlobalContactSection />
        </div>
      </main>
    </>
  );
}

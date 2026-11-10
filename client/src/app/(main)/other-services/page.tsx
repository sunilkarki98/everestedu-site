import { Metadata } from "next";
import { ServiceDetailClient } from "@/components/page-clients/ServiceDetailClient";
import { otherServices } from "@/data/services";
import { getCanonicalUrl } from "@/lib/seo";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ service?: string }> }): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const serviceId = resolvedParams.service;
  const activeService = otherServices.find(s => s.id === serviceId);

  if (activeService) {
    return {
      title: `${activeService.title} | Support Services | Everest Education`,
      description: activeService.overview || activeService.description,
      keywords: ["OSHC Australia", "international student tax Australia", "skill assessment Australia", "VETASSESS", "business setup Australia", "TFN registration"],
      alternates: {
        canonical: getCanonicalUrl("/other-services"),
      },
      openGraph: {
        title: `${activeService.title} | Additional Support Services | Everest Education`,
        description: activeService.overview || activeService.description,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${activeService.title} | Additional Support Services | Everest Education`,
        description: activeService.overview || activeService.description,
      },
    };
  }

  return {
    title: "Additional Support Services | Health Insurance, Tax, Skill Assessment | Everest Education",
    description: "Comprehensive support services for international students and migrants in Australia. OSHC health insurance, taxation & accounting, professional skill assessments, and business setup advisory.",
    keywords: ["OSHC Australia", "international student tax Australia", "skill assessment Australia", "VETASSESS", "business setup Australia", "TFN registration"],
    alternates: {
      canonical: getCanonicalUrl("/other-services"),
    },
    openGraph: {
      title: "Additional Support Services | Everest Education",
      description: "Comprehensive support beyond education and migration to ensure your life in Australia is smooth and compliant.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Additional Support Services | Everest Education",
      description: "Comprehensive support beyond education and migration to ensure your life in Australia is smooth and compliant.",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Additional Support Services — Everest Education",
  "description": "Comprehensive support beyond education and migration.",
  "itemListElement": otherServices.map((service, index) => ({
    "@type": "Service",
    "position": index + 1,
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Everest Education & Visa Services",
      "url": "https://eevsgroup.com"
    },
    "areaServed": "Australia"
  }))
};

export default async function OtherServicesPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const resolvedParams = await searchParams;
  const serviceId = resolvedParams.service;
  const activeService = otherServices.find(s => s.id === serviceId);

  const faqJsonLd = activeService?.faqs && activeService.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": activeService.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ServiceDetailClient
        title="Additional Support Services"
        subtitle="Comprehensive support beyond education and migration to ensure your life in Australia is smooth and compliant."
        breadcrumbLabel="Other Services"
        services={otherServices}
        contactId="contact-us"
      />
    </>
  );
}

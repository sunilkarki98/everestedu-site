import { Metadata } from "next";
import { ServiceDetailClient } from "@/components/page-clients/ServiceDetailClient";
import { migrationServices } from "@/data/services";
import { getCanonicalUrl } from "@/lib/seo";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ service?: string }> }): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const serviceId = resolvedParams.service;
  const activeService = migrationServices.find(s => s.id === serviceId);

  if (activeService) {
    return {
      title: `${activeService.title} | Visa & Migration Services Australia | Everest Education`,
      description: activeService.overview || activeService.description,
      keywords: ["Australian student visa", "skilled migration Australia", "PR pathway Australia", "partner visa Australia", "migration agent Australia", "485 visa", "ART appeal"],
      alternates: {
        canonical: getCanonicalUrl("/migration"),
      },
      openGraph: {
        title: `${activeService.title} | Visa & Migration Services | Everest Education`,
        description: activeService.overview || activeService.description,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${activeService.title} | Visa & Migration Services | Everest Education`,
        description: activeService.overview || activeService.description,
      },
    };
  }

  return {
    title: "Visa & Migration Services Australia | Student Visa, PR, Partner Visa | Everest Education",
    description: "Professional Australian visa and migration services by Registered Migration Agents. Expert support for Student Visa (500), Skilled Migration (189/190/491), Partner Visas, 485 Graduate Visa, ART Appeals, and Citizenship applications.",
    keywords: ["Australian student visa", "skilled migration Australia", "PR pathway Australia", "partner visa Australia", "migration agent Australia", "485 visa", "ART appeal"],
    alternates: {
      canonical: getCanonicalUrl("/migration"),
    },
    openGraph: {
      title: "Visa & Migration Services | Everest Education",
      description: "Professional Australian visa and migration services by Registered Migration Agents.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Visa & Migration Services | Everest Education",
      description: "Professional Australian visa and migration services by Registered Migration Agents.",
    },
  };
}

// JSON-LD for Service page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Visa & Migration Services — Everest Education",
  "description": "Professional Australian visa and migration services by Registered Migration Agents.",
  "itemListElement": migrationServices.map((service, index) => ({
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

export default async function MigrationPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const resolvedParams = await searchParams;
  const serviceId = resolvedParams.service;
  const activeService = migrationServices.find(s => s.id === serviceId);

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
        title="Visa & Migration Services"
        subtitle="Professional migration support tailored to your individual circumstances by Registered Migration Agents."
        breadcrumbLabel="Visa & Migration"
        services={migrationServices}
        contactId="contact-us"
      />
    </>
  );
}

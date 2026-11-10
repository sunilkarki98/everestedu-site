import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import { getGoogleReviews } from "@/lib/google-reviews";
import { getCanonicalUrl, getBaseUrl, createOgMetadata, createTwitterMetadata, createFaqJsonLd } from "@/lib/seo";
import { Metadata } from "next";
import { homeFaqs } from "@/data/faqs";

const WelcomeSection = dynamic(() => import("@/components/sections/WelcomeSection"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const FeaturedSection = dynamic(() => import("@/components/sections/FeaturedSection"));
const StudyPathwaysSection = dynamic(() => import("@/components/sections/StudyPathwaysSection"));
const FeedbackSection = dynamic(() => import("@/components/sections/FeedbackSection"));
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"));
const EmployeeSection = dynamic(() => import("@/components/sections/EmployeeSection"));

export const metadata: Metadata = {
  title: "Everest Education & Visa Services | Study, Work & Migrate to Australia",
  description: "Everest Education & Visa Services is a trusted education and migration consultancy based in Australia. We help students achieve their study abroad dreams and assist with all visa and migration needs.",
  keywords: ["education consultancy Australia", "student visa Australia", "migration agent Australia", "study abroad", "PR pathway Australia", "Everest Education"],
  alternates: {
    canonical: getCanonicalUrl(),
  },
  openGraph: createOgMetadata({
    title: "Everest Education & Visa Services | Study, Work & Migrate",
    description: "Your trusted partner for education and migration services in Australia. We guide you through student visas, skilled migration, and more.",
    path: "/",
  }),
  twitter: createTwitterMetadata({
    title: "Everest Education & Visa Services | Study, Work & Migrate",
    description: "Your trusted partner for education and migration services in Australia.",
  }),
};

export default async function Page() {
  const testimonials = await getGoogleReviews();

  const baseUrl = getBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Everest Education & Visa Services",
        "url": baseUrl,
        "logo": `${baseUrl}/logos/everestlogo.jpeg`,
        "sameAs": [
          "https://www.facebook.com/EEVSAustralia/",
          "https://twitter.com/EverestEduGroup",
          "https://www.instagram.com/EverestEduGroup",
          "https://www.linkedin.com/company/EverestEduGroup"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "120"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        "name": "Everest Education & Visa Services",
        "url": baseUrl,
        "telephone": "+61 406 000 815",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Level 1, Suite 7, 2-10 Oatley Court",
          "addressLocality": "Belconnen",
          "addressRegion": "ACT",
          "postalCode": "2617",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Everest Education & Visa Services"
      }
    ]
  };

  const faqJsonLd = createFaqJsonLd(homeFaqs);

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

      {/* 1. Hero — Study • Work • Migrate — Australia */}
      <HeroSection />

      {/* 2. Family Message */}
      <WelcomeSection />

      {/* 4. Our Services — 6 premium cards */}
      <ServicesSection />

      {/* 4.5 Study Pathways & Universities */}
      <StudyPathwaysSection />

      {/* 6. Study in Australia — Sydney, Melbourne, Brisbane, Adelaide, Perth */}
      <FeaturedSection />

      {/* 3.5. Employee Section */}
      <EmployeeSection />

      {/* 7. Student Success Stories — Testimonials */}
      <FeedbackSection testimonials={testimonials} />

      {/* 8. Latest Visa Updates & News */}
      <BlogSection />
    </>
  );
}

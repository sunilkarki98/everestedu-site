import { Metadata } from "next";
import { CoursesClient } from "@/components/page-clients/CoursesClient";
import { detailedCourses } from "@/data/courses";
import { getCanonicalUrl, getBaseUrl, createOgMetadata, createTwitterMetadata, createFaqJsonLd } from "@/lib/seo";
import { coursesFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Premium Study Pathways | Everest Education",
  description: "Detailed insights into popular courses, top teaching institutions, career outcomes, and migration pathways.",
  alternates: {
    canonical: getCanonicalUrl("/courses"),
  },
  keywords: ["study courses Australia", "international student courses", "IT courses Australia", "nursing courses Australia", "engineering courses Australia"],
  openGraph: createOgMetadata({
    title: "Premium Study Pathways | Everest Education",
    description: "Detailed insights into popular courses, top teaching institutions, career outcomes, and migration pathways.",
    path: "/courses",
  }),
  twitter: createTwitterMetadata({
    title: "Premium Study Pathways | Everest Education",
    description: "Detailed insights into popular courses, top teaching institutions, career outcomes, and migration pathways.",
  }),
};

export default function CoursesPage() {
  const baseUrl = getBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Study Pathways — Everest Education",
    "description": "Explore popular study pathways for international students in Australia.",
    "url": `${baseUrl}/courses`,
    "itemListElement": detailedCourses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": course.title,
      "url": `${baseUrl}/courses/${course.id}`,
    })),
  };

  const faqJsonLd = createFaqJsonLd(coursesFaqs);

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
      <CoursesClient />
    </>
  );
}

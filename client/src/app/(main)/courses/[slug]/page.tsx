import { Metadata } from "next";
import { detailedCourses } from "@/data/courses";
import { CourseDetailClient } from "@/components/page-clients/CourseDetailClient";
import { getCanonicalUrl, getBaseUrl, createOgMetadata, createTwitterMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return detailedCourses.map((course) => ({
    slug: course.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = detailedCourses.find((c) => c.id === slug);

  if (!course) {
    return { title: "Course Not Found | Everest Education" };
  }

  const programNames = course.programs.map(p => p.title).join(", ");

  return {
    title: `Study ${course.title} Abroad | Programs, Fees & PR Pathways | Everest Education`,
    description: `Explore top ${course.title} programs for international students including ${programNames}. Compare tuition fees, entry requirements, career outcomes, and migration pathways.`,
    keywords: course.seoKeywords,
    alternates: {
      canonical: getCanonicalUrl(`/courses/${course.id}`),
    },
    openGraph: createOgMetadata({
      title: `Study ${course.title} Abroad | Everest Education`,
      description: course.description,
      path: `/courses/${course.id}`,
      image: { url: course.image, width: 1200, height: 630 },
    }),
    twitter: createTwitterMetadata({
      title: `Study ${course.title} Abroad | Everest Education`,
      description: course.description,
      image: course.image,
    }),
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const baseUrl = getBaseUrl();

  // JSON-LD Structured Data
  const course = detailedCourses.find((c) => c.id === slug);
  const jsonLd = course ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${course.title} Programs — Everest Education`,
    "description": course.longDescription,
    "itemListElement": course.programs.map((program, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": program.title,
      "description": program.description,
      "provider": {
        "@type": "Organization",
        "name": "Everest Education & Visa Services",
        "url": baseUrl
      },
      "timeRequired": program.duration,
      "offers": {
        "@type": "Offer",
        "category": "Tuition Fee",
        "description": program.avgFee
      }
    }))
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CourseDetailClient slug={slug} />
    </>
  );
}

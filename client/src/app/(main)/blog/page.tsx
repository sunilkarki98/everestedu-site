import { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import BlogPageClient from "@/components/page-clients/BlogPageClient";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Latest News & Migration Updates | Everest Education",
  description:
    "Stay informed with the latest updates on Australian student visas, skilled migration, PR pathways, and university scholarships.",
  alternates: {
    canonical: getCanonicalUrl("/blog"),
  },
  keywords: [
    "Australia immigration news",
    "Student visa updates",
    "PR pathway tips",
    "Study abroad blog",
    "Migration news Australia",
  ],
  openGraph: {
    title: "Blog & Insights | Everest Education & Visa Services",
    description:
      "Expert insights on Australian immigration, education, and visa pathways.",
    type: "website",
  },
};

export default function BlogPage() {
  // JSON-LD structured data for the Blog page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Everest Education Blog & Insights",
    description:
      "Expert insights on Australian immigration, education, and visa pathways.",
    publisher: {
      "@type": "Organization",
      name: "Everest Education & Visa Services",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
      },
      url: `https://eevsgroup.com/blog/${post.id}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPageClient posts={blogPosts} />
    </>
  );
}

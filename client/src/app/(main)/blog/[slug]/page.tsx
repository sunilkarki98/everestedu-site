import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Calendar, Clock, ChevronLeft, Share2, User } from "lucide-react";
import { Container } from "@/components/layout/Container";
import CallToAction from "@/components/sections/CallToAction";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog";
import { getCanonicalUrl } from "@/lib/seo";

// Generate static paths for build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.slug);

  if (!post) {
    return { title: "Article Not Found | Everest Education" };
  }

  return {
    title: `${post.title} | Everest Education Blog`,
    description: post.excerpt,
    keywords: post.seoKeywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: getCanonicalUrl(`/blog/${post.id}`),
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: getCanonicalUrl(`/blog/${post.id}`),
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Format date for display
function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Related articles (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // JSON-LD for this article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getCanonicalUrl(`/blog/${post.id}`)
    },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Everest Education & Visa Services",
    },
    image: post.image,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-slate-50 min-h-screen pt-24 pb-0">
        <article className="pt-8 md:pt-16 pb-20 border-b border-slate-200 bg-white">
          <Container className="max-w-7xl">
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/blog"
                className="inline-flex items-center text-accent font-semibold mb-6 hover:-translate-x-2 transition-transform duration-300"
              >
                <ChevronLeft size={20} className="mr-1" /> Back to Articles
              </Link>

              <div className="mb-6 flex">
                <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-none px-4 py-1 text-sm">
                  {post.category}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight max-w-4xl">
                {post.title}
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Left Column (Sticky Image & Meta) */}
              <div className="lg:w-5/12 w-full shrink-0 lg:sticky lg:top-32">
                <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <User size={16} className="text-accent" />
                    </div>
                    <span className="text-slate-800 font-bold">
                      {post.author}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <Calendar size={18} /> {formatDate(post.date)}
                  </div>
                </div>

                <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-xl shadow-slate-900/10 border-4 border-white bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Share Section */}
                <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col gap-4">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-widest flex items-center gap-2">
                    <Share2 size={16} /> Share Article
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://eevsgroup.com/blog/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-50 shadow-sm border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=https://eevsgroup.com/blog/${post.id}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-50 shadow-sm border border-[#1DA1F2]/20 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=https://eevsgroup.com/blog/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-50 shadow-sm border border-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column (Article Content) */}
              <div className="lg:w-7/12 w-full lg:pb-32">
                <div className="flex items-center gap-2 text-slate-500 font-medium mb-10 pb-10 border-b border-slate-200">
                  <Clock size={18} className="text-accent" />{" "}
                  <span className="text-slate-800">{post.readTime}</span>
                </div>

                <div
                  className="prose prose-lg md:prose-xl prose-slate max-w-none 
                    prose-headings:font-extrabold prose-headings:text-slate-900 prose-headings:tracking-tight
                    prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:leading-tight
                    prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-10
                    prose-p:text-slate-600 prose-p:text-[1.125rem] prose-p:leading-[1.85] prose-p:mb-8
                    prose-a:text-accent prose-a:font-semibold prose-a:underline-offset-4 hover:prose-a:text-accent/80
                    prose-strong:text-slate-900 prose-strong:font-bold
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-ul:space-y-3
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8 prose-ol:space-y-3
                    prose-li:text-slate-600 prose-li:text-[1.125rem] prose-li:leading-relaxed
                    marker:text-accent marker:font-bold marker:text-xl
                    [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:text-6xl [&>p:first-of-type]:first-letter:font-extrabold [&>p:first-of-type]:first-letter:text-slate-900 [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:mt-1 [&>p:first-of-type]:first-letter:leading-[0.8]
                  "
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </Container>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="bg-white py-20 border-t border-slate-100">
            <Container>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-primary">
                  Related Articles
                </h2>
                <Link
                  href="/blog"
                  className="hidden sm:flex items-center text-accent font-bold hover:translate-x-1 transition-transform"
                >
                  View All{" "}
                  <ChevronLeft size={20} className="ml-1 rotate-180" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relPost) => (
                  <Link
                    key={relPost.id}
                    href={`/blog/${relPost.id}`}
                    className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
                        {relPost.category}
                      </div>
                      <h3 className="font-bold text-primary text-lg mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                        {relPost.title}
                      </h3>
                      <div className="text-slate-500 text-sm flex items-center gap-2">
                        <Calendar size={14} /> {formatDate(relPost.date)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-10 text-center sm:hidden">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full font-bold bg-slate-100 text-primary w-full"
                >
                  View All Articles
                </Link>
              </div>
            </Container>
          </section>
        )}

        <CallToAction />
      </main>
    </>
  );
}

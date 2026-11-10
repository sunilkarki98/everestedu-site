"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, Clock, ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import CallToAction from "@/components/sections/CallToAction";
import { Badge } from "@/components/ui/Badge";
import { BlogPost } from "@/data/blog";

interface BlogPageClientProps {
  posts: BlogPost[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = posts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

  const featuredPost = posts[0]; // First post is featured

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Insights & Updates"
        subtitle="The latest news, guides, and expert advice on international education and migration."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-12 md:py-20">
        <Container>
          {/* Featured Article */}
          {activeCategory === "All" && (
            <div className="mb-16 md:mb-24">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-accent rounded-full inline-block"></span>
                Featured Insight
              </h2>
              <Link href={`/blog/${featuredPost.id}`} className="block group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row transition-all duration-300 hover:shadow-2xl">
                  <div className="w-full lg:w-3/5 h-[300px] lg:h-[450px] relative overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute top-6 left-6 flex gap-3">
                      <Badge className="bg-accent text-primary border-none text-sm font-bold shadow-lg">
                        Featured
                      </Badge>
                      <Badge className="bg-white/90 text-primary border-none shadow-lg">
                        {featuredPost.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-slate-500 text-sm font-medium mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} /> {formatDate(featuredPost.date)}
                      </div>
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      <div className="flex items-center gap-1.5">
                        <Clock size={16} /> {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-accent font-bold mt-auto group-hover:translate-x-2 transition-transform">
                      Read Full Article{" "}
                      <ArrowRight size={20} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <h2 className="text-3xl font-bold text-primary">
              Latest Articles
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <m.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/95 text-primary border-none shadow-md backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-slate-500 text-xs font-semibold mb-3 uppercase tracking-wider">
                      <span>{formatDate(post.date)}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {post.author}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-colors">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </m.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
              <Tag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                No articles found
              </h3>
              <p className="text-slate-500">
                Check back later for more updates in this category.
              </p>
            </div>
          )}
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}

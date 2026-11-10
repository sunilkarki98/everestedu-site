import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "./BlogCard";
import { Section } from "@/components/layout/Section";

export default function BlogSection() {
  // Take only the first 3 posts for the homepage
  const articles = blogPosts.slice(0, 3);

  return (
    <Section padding="md" className="relative w-full bg-surface overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="Latest Insights"
            title={
              <>
                Expert <span className="text-accent">Migration</span> & Education News
              </>
            }
            align="left"
            className="mb-4"
          />
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <p className="text-ui-lead text-muted-foreground leading-relaxed max-w-2xl">
              Stay updated with the latest Australian visa changes, university scholarships, and success stories from our community.
            </p>
            <Link
              href="/blog"
              className="group flex items-center gap-3 font-bold text-primary hover:text-accent transition-colors duration-300 shrink-0 bg-white px-5 py-2.5 rounded-full shadow-sm border border-surface-border hover:border-accent/30"
            >
              <span>View All Articles</span>
              <span className="w-8 h-8 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

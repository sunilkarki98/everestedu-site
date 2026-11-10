"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../layout/Container";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { detailedCourses } from "@/data/courses";
import { Section } from "@/components/layout/Section";
import { universities } from "@/data/universities";
import { SectionHeading } from "@/components/ui/SectionHeading";

const getFlagEmoji = (country: string) => {
  if (!country) return '🎓';
  if (country.includes('Australia')) return '🇦🇺';
  if (country.includes('Canada')) return '🇨🇦';
  if (country.includes('New Zealand')) return '🇳🇿';
  if (country.includes('Kingdom') || country === 'UK') return '🇬🇧';
  if (country.includes('USA') || country.includes('United States')) return '🇺🇸';
  return '🎓';
};

export default function StudyPathwaysSection() {
  // Handle scroll for universities
  const unisRef = useRef<HTMLDivElement>(null);
  const scrollUnisLeft = () => {
    if (unisRef.current) {
      unisRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollUnisRight = () => {
    if (unisRef.current) {
      unisRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Section padding="md" className="relative bg-slate-50 border-b border-border/40">
      {/* Background decorative elements - Safely clipped to prevent horizontal scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      </div>

      <Container>
        {/* TOP SPLIT SECTION: Text + Courses Grid */}
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-16 mb-16 lg:mb-24 items-center">
          
          {/* Left Content (Text) */}
          <div className="xl:w-5/12 relative z-10 flex flex-col justify-center xl:pr-8">
            <SectionHeading
              eyebrow={
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Your Academic Future
                </span>
              }
              title={
                <>
                  Study Pathways &<br />
                  <span className="text-accent-text">Partner Universities</span>
                </>
              }
              description="Explore our core study disciplines and discover the world-class Australian institutions where you can launch your career. We provide comprehensive study support across all major academic fields."
              align="left"
            />
            <Link href="/courses" className="inline-flex items-center self-start gap-2 font-bold text-primary hover:text-accent transition-colors duration-300 group">
              View All Courses
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Content (Courses Grid) */}
          <div className="xl:w-7/12 relative z-10 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {detailedCourses.map((course) => {
                const Icon = course.icon || CheckCircle2;
                  return (
                    <Link href={`/courses/${course.id}`} key={course.id} className="group block relative">
                      <div className="rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 h-[200px] flex flex-col relative overflow-hidden group/card border border-white/10">
                        {/* Background Image */}
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                        />
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-0 transition-all duration-300 group-hover:from-black group-hover:via-black/60 group-hover:to-black/30" />
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-xl ${course.bgLight} ${course.borderLight} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0 shadow-md`}>
                              <Icon size={24} className={course.iconColor} strokeWidth={2.5} />
                            </div>
                            <h4 className="text-ui-card-title font-extrabold text-white transition-all leading-tight antialiased tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                              {course.title}
                            </h4>
                          </div>
                          <p className="text-white/90 font-medium text-ui-body leading-relaxed mb-4 flex-grow antialiased drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                            {course.tagline || course.description.substring(0, 80) + '...'}
                          </p>

                          {/* Hover Arrow Icon */}
                          <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center opacity-0 scale-75 -translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
                            <ArrowRight size={18} strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Universities & CTA */}
        <div className="relative z-20">

          {/* Partner Institutions Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <h3 className="text-ui-card-title text-primary">Study at Our <span className="text-accent">300+</span> Global Partner Institutions</h3>
              <div className="flex items-center gap-4">
                <Link href="/about" className="hidden md:flex items-center gap-2 text-ui-small font-semibold text-muted-foreground hover:text-accent transition-colors">
                  View All Partners <ArrowRight size={16} />
                </Link>
                <div className="flex items-center gap-2">
                  <button onClick={scrollUnisLeft} className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors bg-white shadow-sm" aria-label="Scroll left">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={scrollUnisRight} className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors bg-white shadow-sm" aria-label="Scroll right">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={unisRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 md:mx-0 md:px-0"
            >
              {universities.map((uni, index) => (
                <a
                  key={`${uni.name}-${index}`}
                  href={uni.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap-start shrink-0 w-[280px] flex items-center gap-4 p-4 rounded-xl border border-surface-border bg-white hover:border-accent/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-surface border border-surface-border flex items-center justify-center shrink-0 overflow-hidden p-2">
                    {uni.logo ? (
                      <Image src={uni.logo} alt={uni.name} width={40} height={40} className="w-full h-full object-contain" />
                    ) : (
                      <span className="font-bold text-primary">{uni.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-ui-body font-bold text-primary group-hover:text-accent transition-colors truncate leading-snug mb-1">
                      {uni.name}
                    </h4>
                    <span className="text-ui-small text-muted-foreground font-medium flex items-center gap-1.5 truncate">
                      <span className="text-ui-small leading-none shrink-0" title={uni.country}>{getFlagEmoji(uni.country)}</span>
                      <span className="truncate">{uni.location.split(',')[0]}, {uni.country}</span>
                    </span>
                  </div>
                </a>
              ))}

              {/* "And 300+ More" Card */}
              <Link href="/about" className="snap-start shrink-0 w-[280px] flex items-center gap-4 p-4 rounded-xl border-2 border-dashed border-surface-border bg-transparent hover:bg-surface hover:border-accent/40 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center shrink-0 text-muted-foreground group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  <ArrowRight size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-ui-body font-bold text-foreground mb-0.5 truncate">Explore More</h4>
                  <span className="text-ui-small text-muted-foreground font-medium truncate block">300+ Partners</span>
                </div>
              </Link>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="w-full bg-gradient-to-r from-primary to-navy-dark rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute right-20 top-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-accent backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-ui-card-title mb-1">Not sure where to start?</h4>
                <p className="text-white/70 text-ui-body">Get personalized guidance from our experienced education consultants.</p>
              </div>
            </div>

            <a
              href="https://calendly.com/samir-dreamtrip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-accent text-primary font-bold px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all relative z-10"
            >
              Book a Free Consultation <ExternalLink size={18} />
            </a>
          </div>

        </div>
      </Container>
    </Section>
  );
}

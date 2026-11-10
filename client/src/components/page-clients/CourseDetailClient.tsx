"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import CallToAction from "@/components/sections/CallToAction";
import { detailedCourses } from "@/data/courses";
import { CheckCircle2, ChevronRight, GraduationCap, Landmark, CircleDollarSign, TrendingUp, BookOpen } from "lucide-react";

export function CourseDetailClient({ slug }: { slug: string }) {
  const currentCourse = detailedCourses.find((c) => c.id === slug);

  if (!currentCourse) {
    notFound();
  }

  // State to track the currently selected sub-course (program)
  const [activeProgramIndex, setActiveProgramIndex] = useState(0);
  const activeProgram = currentCourse.programs[activeProgramIndex];

  const activeTabRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current && activeTabRef.current) {
      const nav = navRef.current;
      const tab = activeTabRef.current;
      
      const scrollLeft = tab.offsetLeft - (nav.offsetWidth / 2) + (tab.offsetWidth / 2);
      
      // Using requestAnimationFrame ensures it fires in sync with the browser's paint cycle
      requestAnimationFrame(() => {
        nav.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      });
    }
  }, [slug]);

  const Icon = currentCourse.icon;

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title={currentCourse.title} 
        subtitle="Explore specific programs, career outcomes, and university pathways."
        breadcrumbs={[
          { label: "Courses", href: "/courses" },
          { label: currentCourse.title }
        ]}
      />

      {/* Course Categories Navigation */}
      <div className="bg-white border-b border-slate-200 py-4">
        <Container>
          <nav ref={navRef} className="flex overflow-x-auto scrollbar-hide gap-3 pb-2 relative">
            {detailedCourses.map((course) => {
              const NavIcon = course.icon;
              const isActive = course.id === slug;
              return (
                <Link 
                  key={course.id} 
                  href={`/courses/${course.id}`}
                  ref={isActive ? activeTabRef : null}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-colors duration-300 ${
                    isActive 
                      ? "text-primary font-bold" 
                      : "text-slate-600 hover:text-primary font-medium bg-slate-50 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {isActive && (
                    <m.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-accent rounded-full shadow-md shadow-accent/20 border border-accent z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <NavIcon size={18} className={`relative z-10 transition-colors duration-300 ${isActive ? "text-primary" : course.iconColor}`} />
                  <span className="relative z-10">{course.title}</span>
                </Link>
              );
            })}
          </nav>
        </Container>
      </div>

      <Container className="py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT SIDEBAR: Program Navigation */}
          <aside className="w-full lg:w-1/3 shrink-0">
            <div className="sticky top-32 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-3">
                <Icon size={24} className="text-accent" />
                {currentCourse.title} Programs
              </h3>
              <p className="text-sm text-slate-500 mb-6 pb-4 border-b border-slate-100">
                Select a specific program to view details
              </p>
              
              <nav className="flex flex-col gap-2">
                {currentCourse.programs.map((program, index) => {
                  const isActive = index === activeProgramIndex;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveProgramIndex(index)}
                      className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                        isActive 
                          ? "bg-accent text-primary shadow-md font-bold ring-2 ring-accent/20" 
                          : "hover:bg-slate-50 text-slate-600 hover:text-primary font-medium"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        isActive ? "bg-white/90 shadow-sm" : "bg-slate-100"
                      }`}>
                        <BookOpen size={18} className={isActive ? "text-accent" : "text-slate-400"} />
                      </div>
                      <span className="flex-1 text-sm leading-tight">{program.title}</span>
                      {isActive && <ChevronRight size={18} className="text-primary/70 shrink-0" />}
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar CTA */}
              <div className="mt-8 p-6 bg-gradient-to-br from-[#2a4f8f] to-[#1a365d] rounded-2xl text-white text-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2">Need Guidance?</h4>
                  <p className="text-sm text-white/80 mb-5 leading-relaxed">
                    Unsure if {activeProgram.title} is right for you? Talk to our counselors.
                  </p>
                  <a href="https://calendly.com/samir-dreamtrip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full bg-accent text-primary font-bold py-3 rounded-xl hover:bg-white transition-colors duration-300">
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT: Program Details */}
          <div className="w-full lg:w-2/3">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm overflow-hidden"
            >
              {/* Header Image */}
              <div className="relative w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden mb-10 shadow-inner">
                <Image 
                  src={currentCourse.image} 
                  alt={currentCourse.title} 
                  fill 
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold mb-3 border border-white/30 uppercase tracking-wider">
                    {currentCourse.title} Sector
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    {currentCourse.title}
                  </h2>
                </div>
              </div>

              {/* Dynamic Program Content */}
              <AnimatePresence mode="wait">
                <m.div
                  key={activeProgramIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-12 relative bg-slate-50/50 rounded-3xl p-6 md:p-8 border border-slate-100"
                >
                  <div className="absolute top-8 left-0 w-1.5 h-12 bg-accent rounded-r-full" />
                  <div className="pl-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight tracking-tight">
                      {activeProgram.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-slate-600">
                      {activeProgram.description}
                    </p>
                  </div>
                </m.div>
              </AnimatePresence>

              {/* Unified Key Information Block */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
                <h4 className="text-lg font-bold text-primary mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                  <div className="w-1.5 h-5 bg-accent rounded-full" />
                  Key Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-primary font-bold tracking-wide mb-1 flex items-center gap-2">
                      <CircleDollarSign size={16} className="text-accent" /> Average Fee
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{activeProgram.avgFee}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-primary font-bold tracking-wide mb-1 flex items-center gap-2">
                      <BookOpen size={16} className="text-accent" /> Standard Duration
                    </span>
                    <div className="flex flex-col gap-1">
                      {activeProgram.duration.split('|').map((dur: string, i: number) => (
                        <span key={i} className="text-sm font-semibold text-slate-700 block">{dur.trim()}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-primary font-bold tracking-wide mb-1 flex items-center gap-2">
                      <TrendingUp size={16} className="text-accent" /> {activeProgram.stats.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{activeProgram.stats.value}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-primary font-bold tracking-wide mb-1 flex items-center gap-2">
                      <ChevronRight size={16} className="text-accent" /> Main Intakes
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{activeProgram.intakes}</span>
                  </div>
                  <div className="flex flex-col sm:col-span-2 pt-4 border-t border-slate-100">
                    <span className="text-sm text-primary font-bold tracking-wide mb-2 flex items-center gap-2">
                      <GraduationCap size={16} className="text-accent" /> Career Outcomes
                    </span>
                    <span className="text-sm font-semibold text-slate-700 leading-relaxed">{activeProgram.outcomes}</span>
                  </div>
                  <div className="flex flex-col sm:col-span-2 pt-4 border-t border-slate-100">
                    <span className="text-sm text-primary font-bold tracking-wide mb-2 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent" /> Minimum Entry Requirements
                    </span>
                    <span className="text-sm font-semibold text-slate-700 leading-relaxed">{activeProgram.requirements}</span>
                  </div>
                </div>
              </div>

              {/* General Industry Context */}
              <div className="mb-12 p-8 bg-gradient-to-br from-primary/[0.03] to-transparent rounded-3xl border border-primary/5">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <BookOpen size={14} />
                  </div>
                  Why study {currentCourse.title}?
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {currentCourse.longDescription}
                </p>
              </div>

              {/* Migration Pathway Callout */}
              <div className="mb-12 p-6 md:p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <TrendingUp size={20} className="text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-bold text-emerald-800">Migration Pathway</h4>
                  </div>
                  <p className="text-emerald-700 leading-relaxed">
                    Many {currentCourse.title} occupations are listed on Australia&apos;s Skilled Occupation List, providing graduates with a direct pathway to Permanent Residency through skilled migration (Subclass 189, 190, or 491). Combined with a Temporary Graduate Visa (Subclass 485) and a Professional Year Program where applicable, international students can build a complete study-to-PR strategy.
                  </p>
                </div>
              </div>

              {/* Top Universities */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Landmark size={18} />
                  </div>
                  Top Teaching Institutions
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentCourse.universities.map((uni, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-secondary/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
                        {uni.logo ? (
                          <Image src={uni.logo} alt={uni.name} width={30} height={30} className="object-contain" />
                        ) : (
                          <Landmark size={16} className="text-slate-400" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-800 font-bold leading-tight">{uni.name}</span>
                        {uni.location && <span className="text-[13px] text-slate-600 font-semibold mt-0.5">{uni.location}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content Disclaimer */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Information on this page is indicative and subject to change. Tuition fees, entry requirements, and intake dates may vary by institution and are updated periodically. <a href="https://calendly.com/samir-dreamtrip" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-semibold underline">Contact our counsellors</a> for the latest confirmed details.
                </p>
              </div>

            </m.div>
          </div>
        </div>
      </Container>
      
      <div id="contact">
        <CallToAction />
      </div>
    </main>
  );
}

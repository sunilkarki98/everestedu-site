"use client";

import React, { useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import CallToAction from "@/components/sections/CallToAction";
import { MapPin, Trophy, Banknote, Calendar, BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import { universities } from "@/data/universities";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const getFlagEmoji = (country: string) => {
  if (!country) return '🎓';
  if (country.includes('Australia')) return '🇦🇺';
  if (country.includes('Canada')) return '🇨🇦';
  if (country.includes('New Zealand')) return '🇳🇿';
  if (country.includes('Kingdom') || country === 'UK') return '🇬🇧';
  if (country.includes('USA') || country.includes('United States')) return '🇺🇸';
  return '🎓';
};

const getCourseSlug = (programName: string) => {
  const lower = programName.toLowerCase();
  if (lower.includes('health') || lower.includes('medicine')) return 'health';
  if (lower.includes('information technology') || lower.includes('it')) return 'it';
  if (lower.includes('business') || lower.includes('management') || lower.includes('commerce')) return 'business';
  if (lower.includes('engineering')) return 'engineering';
  if (lower.includes('cookery') || lower.includes('hospitality')) return 'cookery';
  if (lower.includes('trade') || lower.includes('carpentry') || lower.includes('mechanic')) return 'trade';
  return ''; // fallback to /courses if no match
};

export function UniversitiesClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredUniversities = activeFilter === "All" 
    ? universities 
    : universities.filter(uni => uni.country === activeFilter || uni.country.includes(activeFilter));

  return (
    <main>
      <PageHeader
        title="Global Partner Universities"
        subtitle="Explore our extensive network of top-ranked global institutions. We provide end-to-end admission guidance for your dream university."
        breadcrumbs={[{ label: "Universities" }]}
      />

      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/5 rounded-bl-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 rounded-tr-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight tracking-tight"
            >
              World-Class Institutions at <span className="text-accent">Your Fingertips</span>
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              As official representatives of over 300+ leading universities globally, we simplify the complex admission process. Compare tuition fees, rankings, and programs to find the perfect fit for your academic and career goals.
            </m.p>
          </div>

          {/* Country Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {["All", "Australia", "New Zealand", "UK", "Canada", "USA"].map((country) => (
              <button
                key={country}
                onClick={() => setActiveFilter(country)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === country
                    ? "bg-accent text-primary shadow-lg shadow-accent/20"
                    : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-100 hover:text-primary"
                }`}
              >
                {country !== "All" && <span className="mr-2">{getFlagEmoji(country)}</span>}
                {country}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {filteredUniversities.map((uni, index) => (
              <m.div
                key={uni.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
              >
                {/* Cover Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={uni.coverImage}
                    alt={uni.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-90" />

                  {/* University Name & Location overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 flex items-end gap-4">
                    <div className="w-16 h-16 rounded-xl bg-white border-2 border-white/20 flex items-center justify-center shrink-0 overflow-hidden shadow-lg">
                      {uni.logo ? (
                        <Image src={uni.logo} alt={uni.name} width={50} height={50} className="w-full h-full object-contain p-2" />
                      ) : (
                        <span className="font-extrabold text-2xl text-primary">{uni.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md leading-tight">
                        {uni.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
                        <MapPin size={14} className="text-accent" />
                        <span>{uni.location}</span>
                        <span className="ml-1 text-base leading-none">{getFlagEmoji(uni.country)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 line-clamp-2 mb-6 text-sm leading-relaxed">
                    {uni.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-2 mb-6">
                    <div className="flex items-start gap-2.5 text-sm">
                      <Trophy size={16} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-slate-400 text-xs font-semibold uppercase mb-0.5">Ranking</span>
                        <span className="font-medium text-primary">{uni.ranking}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm">
                      <Banknote size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-slate-400 text-xs font-semibold uppercase mb-0.5">Avg. Tuition</span>
                        <span className="font-medium text-primary">{uni.avgTuition}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm">
                      <Calendar size={16} className="text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-slate-400 text-xs font-semibold uppercase mb-0.5">Intakes</span>
                        <span className="font-medium text-primary">{uni.intakes.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Programs List */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={16} className="text-purple-500 shrink-0" />
                      <span className="text-slate-700 text-sm font-bold uppercase tracking-wider">Top Courses Provided</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {uni.programs.map((program) => (
                        <Link href={`/courses/${getCourseSlug(program)}`} key={program} className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-accent/10 hover:text-primary hover:border-accent/30 text-slate-600 text-xs font-semibold border border-slate-200 transition-colors">
                          {program}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <Button className="w-full sm:w-1/2 bg-accent text-primary hover:bg-accent/90 font-bold" onClick={() => window.dispatchEvent(new Event("open-eligibility-modal"))}>
                      Check Eligibility
                    </Button>
                    <a
                      href={uni.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-slate-200 bg-transparent text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Visit Website <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* Expertise Banner */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-navy rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10 md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need help choosing the right university?</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Our education counselors have successfully placed thousands of students in their dream institutions. We analyze your academic background, budget, and career aspirations to match you with the perfect university and course.
              </p>
            </div>
            <div className="relative z-10 md:w-1/3 flex justify-end w-full">
              <Link
                href="https://calendly.com/samir-dreamtrip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-primary font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all"
              >
                Book Free Counseling
                <ArrowRight size={20} />
              </Link>
            </div>
          </m.div>

        </Container>
      </section>

      <CallToAction />
    </main>
  );
}

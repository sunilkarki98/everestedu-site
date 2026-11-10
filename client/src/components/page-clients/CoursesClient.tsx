"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import CallToAction from "@/components/sections/CallToAction";
import { ArrowRight } from "lucide-react";
import { detailedCourses } from "@/data/courses";

export function CoursesClient() {
  return (
    <main>
      <PageHeader 
        title="Premium Study Pathways" 
        subtitle="Detailed insights into popular courses, top teaching institutions, career outcomes, and migration pathways."
        breadcrumbs={[{ label: "Courses" }]}
      />
      
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/5 rounded-bl-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 rounded-tr-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <m.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight tracking-tight"
            >
              Find Your Perfect <span className="text-accent">Academic Pathway</span>
            </m.h2>
            <m.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Choosing the right course is the most critical step in your international education journey. We partner with top universities, colleges, and institutes globally to provide you with tailored options that align with your career goals.
            </m.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedCourses.map((course, index) => {
              const Icon = course.icon;
              return (
                <m.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={course.image} 
                      alt={course.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30 text-white transition-all duration-300 group-hover:bg-white group-hover:text-accent group-hover:border-white shadow-sm">
                      <Icon size={24} />
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-500 line-clamp-3 leading-relaxed mb-6">
                      {course.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        {course.programs.length} Programs
                      </div>
                      <Link 
                        href={`/courses/${course.id}`}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300"
                      >
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Entire card clickable overlay */}
                  <Link href={`/courses/${course.id}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View {course.title} details</span>
                  </Link>
                </m.div>
              );
            })}
          </div>
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}

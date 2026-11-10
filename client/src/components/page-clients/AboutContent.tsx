"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import EmployeeSection from "@/components/sections/EmployeeSection";
import CallToAction from "@/components/sections/CallToAction";
import { Target, Eye, Flag, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";



export default function AboutContent() {
  return (
    <main>
      <PageHeader 
        title="Who We Are" 
        subtitle="Everest Education & Visa Services (EEVS) is a premium consultancy dedicated to architecting your global future."
        breadcrumbs={[{ label: "About Us" }]}
      />
      
      {/* Introduction Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 text-left">
                <div className="flex items-center gap-3 mb-4 justify-start">
                  <div className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm font-extrabold tracking-[0.15em] uppercase shadow-sm text-accent">
                    Everest Since 2011
                  </div>
                </div>
                <p className="text-xl sm:text-2xl font-[family-name:var(--font-caveat)] font-semibold text-accent-text tracking-wide mb-6 leading-relaxed">
                  🌸 For Ahilya & Amulya and for all who seek a better future. 🌸
                </p>
                <h2 className="text-ui-section-title drop-shadow-sm text-primary">
                  Your Trusted Partner in Global Education
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Everest Education & Visa Services (EEVS) is a premier education and migration consultancy. We specialize in transforming international aspirations into tangible realities through expert, ethical, and personalized guidance.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Founded on the principles of integrity and excellence, we operate across Australia and Nepal as a dedicated family-owned business. We understand the profound emotional and financial investment involved in moving abroad, and we are committed to providing transparent, end-to-end support for every step of your journey.
              </p>
              
              <div className="flex items-start sm:items-center gap-5 p-6 bg-secondary/5 rounded-2xl border border-secondary/20 shadow-sm">
                <ShieldCheck size={48} className="text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-primary text-xl mb-1">15+ Years of Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Empowering over 10,000 students to successfully achieve their global education and migration goals with an unmatched 98% success rate.
                  </p>
                </div>
              </div>
            </m.div>
            
            {/* Premium Image Showcase */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <Image 
                  src="/images/contact.jpg" 
                  alt="Everest Education Consultants" 
                  fill 
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[280px] hidden sm:block animate-bounce-slow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-primary text-2xl">98%</div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Success Rate</div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 font-medium">Trusted by thousands of students globally.</p>
              </div>
            </m.div>
          </div>
        </Container>
      </section>

      {/* Editorial Mission, Vision, Goal */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute -right-60 top-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-60 bottom-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <SectionHeading 
              eyebrow="Our Core Principles" 
              title="Driven by Purpose" 
            />
            <p className="text-muted-foreground text-lg mt-4">
              Our foundation is built on a steadfast commitment to your success. Discover the principles that guide every consultation and decision we make.
            </p>
          </div>

          <div className="space-y-24">
            {/* 1. Mission (Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 shadow-sm border border-secondary/20">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To empower students and skilled migrants by delivering highly professional, ethical, and deeply reliable education and migration services. 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that navigating international borders should not be an obstacle course. Our mission is to demystify the process, providing clear, actionable roadmaps that turn global ambitions into everyday realities. We dedicate ourselves to fostering an environment where every client feels supported, understood, and confident in their future.
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl order-1 lg:order-2"
              >
                <Image src="/images/education.jpg" alt="Our Mission" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </m.div>
            </div>

            {/* 2. Vision (Image Left) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl"
              >
                <Image src="/images/business.jpg" alt="Our Vision" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 shadow-sm border border-accent/20">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To establish Everest Education as the most globally recognized and trusted education and migration consultancy, distinguished by our unwavering integrity, exceptional service quality, and the profound success of our clients.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a world where geographical borders do not limit human potential. By continuously elevating our expertise and expanding our global network, we strive to be the definitive bridge connecting ambitious individuals to world-class educational institutions and thriving international economies.
                </p>
              </m.div>
            </div>

            {/* 3. Goal (Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 shadow-sm border border-primary/10">
                  <Flag size={32} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">Our Goal</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To systematically help individuals unlock life-changing opportunities through access to premium global education and seamless, successful migration pathways.
                </p>
                <ul className="space-y-4">
                  {[
                    "Maintain a 100% ethical transparency standard in all visa and admission processing.",
                    "Provide continuous, holistic support from initial consultation to post-arrival settlement.",
                    "Foster lifelong relationships with our students, alumni, and institutional partners."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl order-1 lg:order-2"
              >
                <Image src="/images/eng.jpg" alt="Our Goal" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </m.div>
            </div>

          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <div className="py-12 bg-background">
         <EmployeeSection />
      </div>

      {/* Partner With Us CTA */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        
        <Container className="relative z-10 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/5 p-6 sm:p-8 lg:p-12 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="text-left">
              <SectionHeading 
                eyebrow="Collaborate With EEVS" 
                title="Partner With Us" 
                titleColor="text-white"
                className="mb-4"
                align="left"
              />
              <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
                We are always looking to build successful international partnerships. Collaborate with EEVS to create new educational opportunities and expand global reach together.
              </p>
              <a 
                href="https://calendly.com/samir-dreamtrip" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center h-14 px-8 rounded-full font-bold text-base bg-accent text-primary hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] group"
              >
                Get In Touch Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white p-6 rounded-[2rem] shadow-2xl max-w-xs w-full border border-slate-200">
                <div className="w-full aspect-square relative rounded-xl overflow-hidden mb-5 shadow-inner bg-slate-50 border border-slate-100">
                  <Image src="/contactUsQR.jpeg" alt="Contact QR Code" width={250} height={250} className="object-contain p-2 w-full h-full" />
                </div>
                <div className="text-center">
                  <div className="text-primary font-black text-xl tracking-tight mb-1">Scan to Connect</div>
                  <div className="text-slate-500 text-sm font-medium">Chat instantly on WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>



      <CallToAction />
    </main>
  );
}

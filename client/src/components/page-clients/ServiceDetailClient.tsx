"use client";

import React, { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import CallToAction from "@/components/sections/CallToAction";
import { ServiceDetail, iconMap } from "@/data/services";
import { ChevronRight } from "lucide-react";

import { ServiceOverview } from "./ServiceOverview";
import { ServiceBenefits } from "./ServiceBenefits";
import { ServiceProcess } from "./ServiceProcess";
import { ServiceFaqs } from "./ServiceFaqs";

interface ServiceDetailClientProps {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  services: ServiceDetail[];
  contactId?: string;
}

export function ServiceDetailClient({
  title,
  subtitle,
  breadcrumbLabel,
  services,
  contactId = "contact",
}: ServiceDetailClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeSection, setActiveSection] = useState("overview");
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // On mount, check if there's a ?service=id in the URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceId = params.get("service");
      if (serviceId) {
        const index = services.findIndex((s) => s.id === serviceId);
        if (index !== -1) {
          setActiveIndex(index);
        }
      }
    }
  }, [services]);

  useEffect(() => {
    if (navRef.current && activeTabRef.current) {
      const nav = navRef.current;
      const tab = activeTabRef.current;

      const scrollLeft =
        tab.offsetLeft - nav.offsetWidth / 2 + tab.offsetWidth / 2;

      requestAnimationFrame(() => {
        nav.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      });
    }
  }, [activeIndex]);

  const handleServiceClick = (index: number) => {
    setActiveIndex(index);
    setActiveStep(0); // Reset step when service changes
    if (typeof window !== "undefined") {
      const serviceId = services[index].id;
      const url = new URL(window.location.href);
      url.searchParams.set("service", serviceId);
      window.history.pushState({}, "", url.toString());
    }
  };

  // Intersection Observer for active section in TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = document.querySelectorAll("div[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeIndex]);

  const activeService = services[activeIndex];
  const ActiveIcon = iconMap[activeService.icon] || ChevronRight;

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: breadcrumbLabel }]}
      />

      {/* Services Categories Navigation */}
      <div className="bg-white border-b border-slate-200 py-4">
        <Container>
          <nav
            ref={navRef}
            className="flex overflow-x-auto scrollbar-hide gap-3 pb-2 relative"
          >
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              const NavIcon = iconMap[service.icon] || ChevronRight;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(index)}
                  ref={isActive ? activeTabRef : null}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-colors duration-300 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-slate-600 hover:text-primary font-medium bg-slate-50 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {isActive && (
                    <m.div
                      layoutId="activeServicePill"
                      className="absolute inset-0 bg-accent rounded-full shadow-md shadow-accent/20 border border-accent z-0"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <NavIcon
                    size={18}
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-accent"
                    }`}
                  />
                  <span className="relative z-10">{service.title}</span>
                </button>
              );
            })}
          </nav>
        </Container>
      </div>

      <Container className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          {/* Sticky Table of Contents Sidebar */}
          <div className="w-full lg:w-64 shrink-0 lg:sticky lg:top-32 hidden lg:block">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h4 className="font-bold text-primary mb-4 text-ui-card-title border-b border-slate-100 pb-2">
                On this page
              </h4>
              <nav className="flex flex-col gap-3 relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100" />
                {[
                  { id: "overview", label: "Overview" },
                  { id: "benefits", label: "Benefits & Eligibility" },
                  { id: "process", label: "Journey Process" },
                  { id: "faqs", label: "FAQs" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative pl-4 text-ui-body font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-accent font-bold"
                        : "text-slate-500 hover:text-primary"
                    }`}
                  >
                    {activeSection === item.id && (
                      <m.div
                        layoutId="activeToc"
                        className="absolute left-[-1px] top-0 bottom-0 w-[3px] bg-accent rounded-full"
                      />
                    )}
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0 w-full">
            <AnimatePresence mode="wait">
              <m.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-slate-100 shadow-sm"
              >
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 pb-10 border-b border-slate-100">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <ActiveIcon size={40} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="text-ui-section-title font-bold text-primary mb-3 leading-tight tracking-tight">
                      {activeService.title}
                    </h2>
                    <p className="text-ui-lead text-slate-500 font-medium leading-relaxed max-w-3xl">
                      {activeService.description}
                    </p>
                  </div>
                </div>

                <ServiceOverview activeService={activeService} />
                <ServiceBenefits activeService={activeService} />
                <ServiceProcess
                  activeService={activeService}
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                />
                <ServiceFaqs activeService={activeService} />

                {/* Bottom CTA */}
                <div className="mt-10 p-6 md:p-8 bg-gradient-to-br from-[#2a4f8f] to-[#1a365d] rounded-2xl text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                  <div className="relative z-10 flex-1 text-center md:text-left">
                    <h4 className="font-bold text-ui-card-title mb-2">
                      Need Professional Guidance?
                    </h4>
                    <p className="text-white/80 text-ui-body leading-relaxed">
                      Have questions about {activeService.title}? Speak directly
                      to our Everest Migration Experts to explore your options.
                    </p>
                  </div>
                  <div className="relative z-10 shrink-0 w-full md:w-auto">
                    <a
                      href={`#${contactId}`}
                      className="flex items-center justify-center bg-accent text-primary font-bold py-3.5 px-6 rounded-xl hover:bg-white transition-colors duration-300 shadow-lg shadow-accent/20 whitespace-nowrap"
                    >
                      Book Your Free Consultation
                    </a>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

      <div id={contactId}>
        <CallToAction />
      </div>
    </main>
  );
}

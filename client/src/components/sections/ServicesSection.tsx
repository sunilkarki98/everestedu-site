"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { m, AnimatePresence } from "framer-motion";
import { migrationServices, studyServices, otherServices, iconMap } from "@/data/services";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";

const getHref = (tab: "education" | "migration" | "other", id: string) => {
  if (tab === "education") return `/abroad-study?service=${id}`;
  if (tab === "migration") return `/migration?service=${id}`;
  return `/other-services?service=${id}`;
};

const serviceData = {
  education: studyServices,
  migration: migrationServices,
  other: otherServices,
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"education" | "migration" | "other">("education");

  const tabs = [
    { id: "education", label: "Education Services" },
    { id: "migration", label: "Migration Services" },
    { id: "other", label: "Other Services" },
  ] as const;

  return (
    <Section id="services" padding="md" className="relative overflow-hidden bg-surface">
      <Container className="relative z-10">
        
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Solutions for Your Future"
        />

        {/* Custom Tabs */}
        <div role="tablist" aria-label="Services tabs" className="flex justify-start sm:justify-center gap-2 mb-12 overflow-x-auto scrollbar-hide pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-ui-body font-semibold transition-all duration-300 whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? "bg-accent text-primary shadow-lg shadow-accent/20"
                  : "bg-white text-muted-foreground border border-surface-border hover:bg-surface-hover"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <m.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            >
              {serviceData[activeTab].map((service, index) => {
                const Icon = iconMap[service.icon] || ChevronRight;
                return (
                  <Link href={getHref(activeTab, service.id)} key={service.id} passHref>
                    <m.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="group bg-white border border-surface-border p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-accent hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col text-left relative overflow-hidden h-full"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="flex items-start gap-3 mb-3 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold flex items-center justify-center shrink-0 shadow-sm shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={24} className="text-primary" strokeWidth={2} />
                        </div>
                        <h3 className="text-ui-card-title text-primary group-hover:text-accent transition-colors duration-300 leading-tight pt-1">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-ui-body text-muted-foreground leading-relaxed relative z-10 flex-grow">
                        {service.description}
                      </p>

                      {/* Hover Arrow Icon */}
                      <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent opacity-0 scale-75 -translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 shadow-sm z-10">
                        <ArrowRight size={14} strokeWidth={3} />
                      </div>
                    </m.div>
                  </Link>
                );
              })}
            </m.div>
          </AnimatePresence>
        </div>

      </Container>
    </Section>
  );
}

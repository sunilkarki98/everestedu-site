"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe2, Map, X, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { activeBranches, futureBranches } from "@/data/home";
import { Section } from "@/components/layout/Section";

export default function GlobalContactSection() {
  const [expandedMapId, setExpandedMapId] = useState<number | null>(null);

  const toggleMap = (id: number) => {
    setExpandedMapId(prev => (prev === id ? null : id));
  };

  return (
    <Section id="contact" padding="md" className="bg-surface relative overflow-hidden border-t border-border/40">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] bg-accent/5" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full blur-[150px] bg-primary/5 translate-y-1/2 translate-x-1/3" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Global Network"
            title="Get in Touch & Visit Our Offices"
            description="Speak with our experienced consultants or visit one of our dedicated branches for personalized guidance."
            className="mb-0"
          />
        </div>

        {/* 1. MAIN CONTACT CARD (Head Office & Inquiries) */}
        <Card className="overflow-hidden shadow-2xl border-white/10 max-w-[1100px] mx-auto mb-16 bg-primary text-white relative">

          {/* Decorative bg */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="flex flex-col xl:flex-row items-center xl:items-stretch relative z-10">

            {/* 1. Logo & Address */}
            <div className="flex flex-col items-start gap-3 p-5 xl:py-5 xl:pl-6 xl:pr-0 xl:w-[21%] shrink-0">
              <div className="w-[72px] h-[72px] relative shrink-0 rounded-xl overflow-hidden bg-white shadow-lg">
                <Image src="/logos/everestlogo.jpeg" alt="Everest Education Logo" fill sizes="72px" className="object-contain p-1" />
              </div>
              <div>
                <h3 className="text-ui-card-title font-bold text-white tracking-tight leading-tight">Main Office</h3>
                <p className="text-white/70 text-sm font-medium leading-snug mt-1">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="hidden xl:block w-px self-stretch my-4 bg-white/10" />

            {/* 2. Contact Details (Phones & Emails) */}
            <div className="flex flex-col sm:flex-row gap-5 xl:gap-10 p-5 xl:px-5 xl:py-5 flex-1 min-w-0 justify-between">
              {/* Phones */}
              <div className="flex flex-col gap-1 shrink-0 w-auto">
                <div className="flex items-center gap-1.5 text-accent mb-1">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-sm uppercase tracking-widest font-bold">Phone</span>
                </div>
                <a href={`tel:+61${siteConfig.contact.phones.main.replace(/[^\d]/g, "").replace(/^0/, "")}`} className="font-semibold text-base text-white hover:text-accent transition-colors whitespace-nowrap">
                  {siteConfig.contact.phones.main}
                </a>
                <a href={`tel:+61${siteConfig.contact.phones.landline.replace(/[^\d]/g, "").replace(/^0/, "")}`} className="font-semibold text-base text-white hover:text-accent transition-colors whitespace-nowrap">
                  {siteConfig.contact.phones.landline}
                </a>
                <a href={`tel:${siteConfig.contact.phones.nepal.replace(/[^\d+]/g, "")}`} className="font-semibold text-base text-white hover:text-accent transition-colors whitespace-nowrap">
                  {siteConfig.contact.phones.nepal}
                </a>
              </div>

              {/* Divider between Phone and Email */}
              <div className="hidden sm:block w-px self-stretch my-2 bg-white/10" />

              {/* Emails */}
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-accent mb-1">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-sm uppercase tracking-widest font-bold">Email</span>
                </div>
                <a href={`mailto:${siteConfig.contact.emails.main}`} className="font-semibold text-base text-white hover:text-accent transition-colors truncate">
                  {siteConfig.contact.emails.main}
                </a>
                <a href={`mailto:${siteConfig.contact.emails.secondary}`} className="font-semibold text-base text-white hover:text-accent transition-colors truncate">
                  {siteConfig.contact.emails.secondary}
                </a>
              </div>
            </div>

            <div className="hidden xl:block w-px self-stretch my-4 bg-white/10" />

            {/* 3. WhatsApp (QR + Button) */}
            <div className="flex flex-col items-center gap-3 p-5 xl:px-4 xl:py-5 shrink-0 xl:w-auto xl:justify-start">
              <div className="hidden sm:flex flex-col items-center gap-2">
                <span className="text-sm text-accent font-bold uppercase tracking-widest text-center">WhatsApp</span>
                <div className="w-28 h-28 bg-white rounded-xl overflow-hidden shrink-0 shadow-lg p-1">
                  <div className="relative w-full h-full">
                    <Image src="/contactUsQR.jpeg" alt="WhatsApp QR Code" fill sizes="100px" className="object-contain rounded-md" />
                  </div>
                </div>
              </div>
              <a
                href={`https://wa.me/${siteConfig.contact.phones.main.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex sm:hidden items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-bold text-sm rounded-xl shadow-md hover:bg-[#128C7E] hover:shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Chat Now
              </a>
            </div>

            <div className="hidden xl:block w-px self-stretch my-4 bg-white/10" />

            {/* 4. CTA Buttons */}
            <div className="shrink-0 flex flex-col justify-center gap-3 p-5 xl:px-5 xl:w-auto xl:min-w-[200px]">
              <a
                href="https://condat.com.au/condat/318/customer?method=website"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-primary font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg hover:bg-accent/90 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap w-full"
              >
                Enquire Now
                <ExternalLink className="w-5 h-5 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
              <a
                href={siteConfig.links.bookConsultation}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 text-white border border-white/20 font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap w-full"
              >
                Book Now
                <ExternalLink className="w-5 h-5 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>

          </div>
        </Card>

        {/* 2. BRANCHES SECTION */}
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">Our Global Branches</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {activeBranches.map((branch) => {
              const isExpanded = expandedMapId === branch.id;

              return (
                <div
                  key={branch.id}
                  className={`bg-white border ${isExpanded ? 'border-accent shadow-md' : 'border-surface-border shadow-sm'} rounded-2xl overflow-hidden transition-all duration-300 flex flex-col`}
                >
                  <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${isExpanded ? 'bg-accent text-primary' : 'bg-surface text-accent border border-surface-border shadow-sm'}`}>
                        <MapPin size={22} />
                      </div>
                      <div>
                        <h5 className="text-ui-card-title font-bold text-primary leading-tight">{branch.name}</h5>
                        <p className="text-ui-small font-bold text-accent-text uppercase tracking-widest mt-1">{branch.country}</p>
                        <p className="text-ui-body font-medium text-surface-foreground mt-1 antialiased">{branch.address}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleMap(branch.id)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-ui-small font-semibold transition-colors bg-surface hover:bg-surface-hover text-surface-foreground border border-surface-border shrink-0"
                    >
                      {isExpanded ? (
                        <>Close Map <X size={16} /></>
                      ) : (
                        <>View Map <Map size={16} /></>
                      )}
                    </button>
                  </div>

                  {/* Expandable Map */}
                  <AnimatePresence>
                    {isExpanded && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 250, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full border-t border-surface-border bg-surface"
                      >
                        <iframe
                          title={`Google Map for ${branch.name}`}
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.query)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Future Expansion Banner */}
          <div className="bg-white border border-surface-border rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-lg text-center lg:text-left">
              <h4 className="text-ui-card-title font-bold text-primary mb-2 flex items-center justify-center lg:justify-start gap-2.5">
                <Globe2 className="text-accent" size={20} />
                Future Expansion
              </h4>
              <p className="text-muted-foreground text-ui-body leading-relaxed">
                We are constantly growing to better serve our international students. We are excited to announce new EEVS branches opening soon.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center lg:justify-end gap-3 w-full lg:w-auto">
              {futureBranches.map((branch) => (
                <div key={branch.id} className="bg-surface border border-surface-border rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="flex flex-col items-start">
                    <span className="text-ui-body font-bold text-primary">{branch.name}</span>
                    <span className="text-ui-small text-muted-foreground font-medium">{branch.region}</span>
                  </div>
                  <span className="text-ui-small font-bold uppercase tracking-widest text-accent-text bg-accent/10 border border-accent/20 px-2 py-1 rounded">
                    Soon
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}

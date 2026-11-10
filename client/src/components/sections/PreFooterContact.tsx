"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock, ArrowRight, Globe2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
export default function PreFooterContact() {
  return (
    <Section padding="md" className="bg-white border-t border-slate-100">
      <Container>
        {/* Header */}
        <div className="relative flex items-center justify-center mb-6 md:mb-10">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-accent/60 w-12 md:w-32" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-dark tracking-tight">
              Get in Touch
            </h2>
            <div className="h-px bg-accent/60 w-12 md:w-32" />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors bg-accent/5 hover:bg-accent/10 px-4 py-2 rounded-lg border border-accent/20">
              <Globe2 className="w-4 h-4" />
              View all Branches
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Mobile Branches Link */}
        <div className="md:hidden flex justify-center mb-8">
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors bg-accent/5 hover:bg-accent/10 px-4 py-2 rounded-lg border border-accent/20">
            <Globe2 className="w-4 h-4" />
            View all Branches
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
          
          {/* Column 1: Contact Info (approx 3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-start space-y-6 lg:pr-4 pt-2">
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0 p-2 rounded-full bg-slate-50 border border-slate-100 text-navy-dark">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-navy-dark text-sm mb-1">Australia Office</h3>
                <p className="text-sm text-slate-600 leading-snug">
                  Level 1, Suite 7, 2-10 Oatley Court,<br />
                  Belconnen ACT 2617, Australia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0 p-2 rounded-full bg-slate-50 border border-slate-100 text-navy-dark">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-navy-dark text-sm mb-1">Phone</h3>
                <p className="text-sm text-slate-600">
                  {siteConfig.contact.phones.main}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0 p-2 rounded-full bg-slate-50 border border-slate-100 text-navy-dark">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-navy-dark text-sm mb-1">Email</h3>
                <p className="text-sm text-slate-600 break-all">
                  {siteConfig.contact.emails.main}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0 p-2 rounded-full bg-slate-50 border border-slate-100 text-navy-dark">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-navy-dark text-sm mb-1">Hours</h3>
                <p className="text-sm text-slate-600">
                  Mon - Sat : 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Map & Form (approx 6 cols) */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4 bg-slate-50/50 p-2 rounded-2xl border border-slate-100">
            {/* Map Box */}
            <div className="w-full sm:w-1/2 h-[250px] sm:h-[320px] rounded-xl overflow-hidden bg-slate-200 shrink-0 border border-slate-200/60">
              <iframe
                title="Google Map for Everest Education Head Office"
                src={`https://maps.google.com/maps?q=${encodeURIComponent("Level 1, Suite 7, 2-10 Oatley Court, Belconnen, ACT 2617")}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* WhatsApp Box */}
            <div className="w-full sm:w-1/2 p-2 sm:p-4 flex flex-col justify-between items-center text-center">
              <div className="flex flex-col items-center justify-center flex-1 space-y-3">
                <h4 className="font-bold text-navy-dark text-sm">Have a quick question?</h4>
                <div className="w-32 h-32 bg-white rounded-2xl overflow-hidden shadow-sm p-3 border border-slate-200">
                  <div className="relative w-full h-full">
                    <Image src="/contactUsQR.jpeg" alt="WhatsApp QR Code" fill sizes="120px" className="object-contain" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium">Scan to chat on WhatsApp</p>
              </div>

              <div className="pt-2 w-full space-y-3">
                  <a 
                    href={`https://wa.me/${siteConfig.contact.phones.main.replace(/[^\d]/g, "")}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <a 
                    href="https://condat.com.au/condat/318/customer?method=website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-navy-dark font-bold py-3 px-4 rounded-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
                  >
                    Enquire Now 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
              </div>
            </div>
          </div>

          {/* Column 3: CTA Card (approx 3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-[#eef5fa] rounded-2xl p-6 h-full flex flex-col relative overflow-hidden border border-[#d6e8f6]">
              {/* Light gradient effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/60 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 text-center flex-1 flex flex-col justify-center items-center">
                <h3 className="text-xl font-serif font-bold text-navy-dark mb-3 leading-tight">
                  Book Your Free Consultation Today!
                </h3>
                <p className="text-sm text-slate-600 mb-6 px-2">
                  Let our experts help you plan your future in Australia.
                </p>
                
                <div className="w-full flex flex-col items-center mb-2">
                  <p className="text-xs font-medium text-slate-600 mb-3 leading-relaxed">
                    Trusted by 10,000+ students and families worldwide.
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="flex -space-x-3">
                      {/* Placeholder Avatars */}
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                          <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                            <span className="text-[10px] text-slate-500 font-medium">👤</span>
                          </div>
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 text-white flex items-center justify-center shadow-sm z-10">
                        <span className="text-[10px] font-bold">10K+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-black/5 pt-5 w-full">
                  <a 
                    href="https://calendly.com/samir-dreamtrip" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#d4af37] hover:bg-[#c19b2e] text-navy-dark font-bold py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    Book Now 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}

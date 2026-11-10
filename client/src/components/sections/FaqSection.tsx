"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown, HelpCircle } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Reusable FAQ section.
 * The entire section of questions is hidden behind a main toggle.
 * Each question also has its own dropdown accordion.
 */
export function FaqSection({ 
  faqs, 
  title = "Frequently Asked Questions", 
  description = "Find answers to common questions about our services, processes, and how we can help you achieve your goals.",
  className = "" 
}: FaqSectionProps) {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className={`scroll-mt-32 ${className}`}>
      <div className="max-w-[1100px] mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        
        {/* Main Section Header */}
        <div 
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer group"
          onClick={() => setIsSectionOpen(!isSectionOpen)}
        >
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 flex items-center gap-3">
              <HelpCircle className="text-accent shrink-0" size={28} />
              {title}
            </h2>
            {description && (
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </div>
          
          <button 
            className="shrink-0 flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-primary font-semibold py-2.5 px-5 rounded-xl transition-colors focus:outline-none"
          >
            {isSectionOpen ? "Hide FAQs" : "View FAQs"}
            <span className={`transition-transform duration-300 ${isSectionOpen ? 'rotate-180' : ''}`}>
              <ChevronDown size={18} />
            </span>
          </button>
        </div>

        {/* Collapsible List of FAQs */}
        <AnimatePresence>
          {isSectionOpen && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 space-y-3 border-t border-slate-100 mt-8">
                {faqs.map((faq, i) => {
                  const isOpen = openIndex === i;
                  
                  return (
                    <div
                      key={i}
                      className="bg-slate-50 border border-slate-200 rounded-2xl transition-colors overflow-hidden"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleOpen(i);
                        }}
                        className="w-full flex items-center justify-between p-5 text-left font-bold text-primary text-base focus:outline-none"
                      >
                        <span className="pr-4">{faq.q}</span>
                        <span
                          className={`transition-transform duration-300 w-7 h-7 flex items-center justify-center rounded-full shrink-0 ${
                            isOpen ? "bg-accent/10 text-accent rotate-90" : "bg-white text-slate-400 border border-slate-200"
                          }`}
                        >
                          <ChevronRight size={16} />
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <m.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                              {faq.a}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </m.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

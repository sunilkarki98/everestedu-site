"use client";

import React from "react";
import { ChevronRight, HelpCircle } from "lucide-react";
import { ServiceDetail } from "@/data/services";

interface ServiceFaqsProps {
  activeService: ServiceDetail;
}

export function ServiceFaqs({ activeService }: ServiceFaqsProps) {
  if (!activeService.faqs || activeService.faqs.length === 0) return null;

  return (
    <div id="faqs" className="border-t border-slate-100 pt-14 scroll-mt-32">
      <h3 className="text-ui-card-title font-bold text-primary mb-6 flex items-center gap-2">
        <HelpCircle className="text-slate-400" size={24} />
        Frequently Asked Questions
      </h3>
      <div className="space-y-3">
        {activeService.faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-300 transition-colors [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-primary text-ui-body">
              <span>{faq.q}</span>
              <span className="transition-transform group-open:rotate-180 w-6 h-6 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 shrink-0">
                <ChevronRight size={16} className="group-open:hidden" />
                <ChevronRight
                  size={16}
                  className="hidden group-open:block rotate-90"
                />
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600 text-ui-small leading-relaxed border-t border-slate-100 pt-4 mt-2 hidden group-open:block animate-in fade-in slide-in-from-top-2">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

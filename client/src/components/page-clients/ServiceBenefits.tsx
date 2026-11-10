"use client";

import React from "react";
import { CheckCircle2, ListChecks } from "lucide-react";
import { ServiceDetail } from "@/data/services";

interface ServiceBenefitsProps {
  activeService: ServiceDetail;
}

export function ServiceBenefits({ activeService }: ServiceBenefitsProps) {
  return (
    <div id="benefits" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 scroll-mt-32">
      {/* Key Benefits Grid */}
      <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full">
        <h3 className="text-ui-card-title font-bold text-primary mb-6 flex items-center gap-2">
          <CheckCircle2 className="text-accent" size={20} />
          Key Benefits & Features
        </h3>
        <div className="flex flex-col gap-3">
          {activeService.keyBenefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"
            >
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={14} className="text-accent" />
              </div>
              <span className="text-ui-small font-semibold text-slate-700 leading-snug">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility / Who Is This For? */}
      {activeService.eligibility && (
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
          <h3 className="text-ui-card-title font-bold text-primary mb-6 flex items-center gap-2">
            <ListChecks className="text-emerald-500" size={20} />
            Eligibility Criteria
          </h3>
          <ul className="space-y-4">
            {activeService.eligibility.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                </div>
                <span className="text-slate-600 text-ui-small leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

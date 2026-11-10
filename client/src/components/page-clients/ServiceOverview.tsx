"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { ServiceDetail } from "@/data/services";

interface ServiceOverviewProps {
  activeService: ServiceDetail;
}

export function ServiceOverview({ activeService }: ServiceOverviewProps) {
  return (
    <>
      <div id="overview" className="mb-14 scroll-mt-32">
        <h3 className="text-ui-card-title font-bold text-primary mb-4">Overview</h3>
        <p className="text-slate-600 leading-relaxed text-ui-body">
          {activeService.overview}
        </p>
      </div>

      {/* Important Notice Callout */}
      {activeService.importantNote && (
        <div className="mb-12 p-6 bg-accent/5 rounded-2xl border-l-4 border-accent shadow-sm relative overflow-hidden">
          <div className="flex gap-4 relative z-10">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <HelpCircle size={18} className="text-accent-text" />
            </div>
            <div>
              <h4 className="font-bold text-accent-text mb-2 text-ui-card-title">
                Important Notice
              </h4>
              <p className="text-accent-text/80 leading-relaxed text-ui-small">
                {activeService.importantNote}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

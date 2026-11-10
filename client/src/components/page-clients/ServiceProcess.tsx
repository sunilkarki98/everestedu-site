"use client";

import React from "react";
import { m, AnimatePresence } from "framer-motion";
import { ListChecks } from "lucide-react";
import { ServiceDetail } from "@/data/services";

interface ServiceProcessProps {
  activeService: ServiceDetail;
  activeStep: number;
  setActiveStep: (step: number) => void;
}

export function ServiceProcess({
  activeService,
  activeStep,
  setActiveStep,
}: ServiceProcessProps) {
  return (
    <div id="process" className="mb-14 scroll-mt-32">
      <h3 className="text-ui-card-title font-bold text-primary mb-8 flex items-center gap-2">
        <ListChecks className="text-secondary" size={24} />
        Interactive Journey
      </h3>

      <div className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-100">
        <div className="flex justify-between relative mb-12">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1.5 bg-slate-200 -translate-y-1/2 z-0 rounded-full" />
          <div
            className="absolute top-1/2 left-0 h-1.5 bg-accent -translate-y-1/2 z-0 transition-all duration-500 ease-out rounded-full"
            style={{
              width: `${
                (activeStep / (activeService.processSteps.length - 1)) * 100
              }%`,
            }}
          />

          {activeService.processSteps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 focus:outline-none ${
                activeStep >= i
                  ? "bg-accent text-primary scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)] border-2 border-white"
                  : "bg-white text-slate-400 border-2 border-slate-200 hover:border-accent/50 hover:text-accent"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <m.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
            <span className="text-accent text-ui-small font-bold uppercase tracking-wider mb-2 block">
              Step {activeStep + 1}
            </span>
            <h4 className="text-ui-card-title font-bold text-primary mb-3">
              {activeService.processSteps[activeStep].title}
            </h4>
            <p className="text-slate-600 text-ui-body max-w-2xl mx-auto">
              {activeService.processSteps[activeStep].desc}
            </p>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

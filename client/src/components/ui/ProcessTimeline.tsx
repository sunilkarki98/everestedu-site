"use client";

import React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical Line */}
      <div className="absolute left-6 md:left-8 top-8 bottom-8 w-0.5 bg-surface-border" />

      <div className="flex flex-col gap-10">
        {steps.map((step, index) => (
          <m.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start gap-6 md:gap-8 group"
          >
            {/* Step Node */}
            <div className="relative z-10 flex flex-col items-center shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border-2 border-surface-border shadow-sm flex items-center justify-center text-primary group-hover:border-accent group-hover:bg-accent/10 transition-colors duration-300">
                {step.icon ? step.icon : <span className="font-bold text-lg md:text-xl">{index + 1}</span>}
              </div>
            </div>

            {/* Step Content */}
            <div className="flex-1 pt-2 md:pt-4 pb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-surface-foreground leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { m, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { headingVariants } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  animationVariants?: Variants;
  eyebrowColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  descriptionClassName?: string;
}


export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  animationVariants = headingVariants,
  eyebrowColor,
  titleColor,
  descriptionColor,
  descriptionClassName,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  
  return (
    <m.div
      className={cn(
        "mb-10 lg:mb-12 will-change-transform",
        isCenter ? "text-center mx-auto" : "text-left",
        className
      )}
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {eyebrow && (
        <div className={cn("flex items-center gap-3 mb-5", isCenter ? "justify-center" : "justify-start")}>
          <div className={cn("px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm font-extrabold tracking-[0.15em] uppercase shadow-sm", eyebrowColor || "text-accent")}>
            {eyebrow}
          </div>
        </div>
      )}
      <h2 className={cn("text-ui-section-title drop-shadow-sm", titleColor || "text-primary")}>
        {title}
      </h2>
      
      {description && (
        <p className={cn(
          "mt-4 text-ui-lead leading-relaxed", 
          isCenter ? "mx-auto max-w-2xl" : "max-w-xl",
          descriptionColor || "text-muted-foreground",
          descriptionClassName
        )}>
          {description}
        </p>
      )}

      {isCenter && !description && (
        <div className="w-16 h-0.5 mx-auto mt-4 bg-accent" />
      )}
    </m.div>
  );
}

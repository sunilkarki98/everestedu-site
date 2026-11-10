"use client";

import React from "react";
import { m, Variants, MotionProps } from "framer-motion";

interface MotionCardProps {
  children: React.ReactNode;
  variants?: Variants;
  initial?: string;
  whileInView?: string;
  viewport?: MotionProps["viewport"];
  custom?: number;
}

export function MotionCard({
  children,
  variants,
  initial,
  whileInView,
  viewport,
  custom,
}: MotionCardProps) {
  return (
    <m.div
      custom={custom}
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      viewport={viewport}
    >
      {children}
    </m.div>
  );
}

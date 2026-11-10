"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

/**
 * Animated counter that counts up to a target number when scrolled into view.
 * Uses requestAnimationFrame-style timing via setInterval at ~60fps.
 */
const Counter: React.FC<CounterProps> = ({ target, suffix = "", className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, target]);

  return (
    <div ref={ref} className={cn("text-2xl font-extrabold text-primary tracking-tight", className)}>
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export { Counter };
export type { CounterProps };

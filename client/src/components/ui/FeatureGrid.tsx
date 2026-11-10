"use client";

import React from "react";
import { m } from "framer-motion";
import { Card } from "./Card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface FeatureItem {
  id: string | number;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  href?: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  items,
  columns = 3,
  className = "",
}) => {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-6 lg:gap-8 ${gridCols[columns]} ${className}`}>
      {items.map((item, index) => {
        const CardContent = (
          <Card className="h-full p-6 flex flex-col group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border-slate-200 hover:border-accent bg-white relative overflow-hidden">
            {/* Optional premium background sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center gap-4 mb-4 relative z-10">
              {/* Icon */}
              {item.icon && (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold text-primary flex items-center justify-center shrink-0 shadow-md shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              )}
              
              {/* Title */}
              <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                {item.title}
              </h3>
            </div>
            
            {/* Description */}
            {item.description && (
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {item.description}
              </p>
            )}

            {/* Link Arrow (if href exists) */}
            {item.href && (
              <div className="mt-6 flex items-center text-sm font-bold text-accent uppercase tracking-wider group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={16} className="ml-1" />
              </div>
            )}
          </Card>
        );

        return (
          <m.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            {item.href ? (
              <Link href={item.href} className="block h-full">
                {CardContent}
              </Link>
            ) : (
              CardContent
            )}
          </m.div>
        );
      })}
    </div>
  );
};

"use client";

import React from "react";
import { m } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  className = "",
}) => {
  const breadcrumbJsonLd = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://eevsgroup.com/"
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.label,
        ...(crumb.href ? { item: `https://eevsgroup.com${crumb.href.startsWith('/') ? crumb.href : `/${crumb.href}`}` } : {})
      }))
    ]
  } : null;

  return (
    <div className={`relative pt-28 pb-10 lg:pt-32 lg:pb-12 bg-gradient-to-br from-slate-50 via-primary/5 to-primary/10 text-primary overflow-hidden ${className}`}>
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[120px] bg-accent/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-[120px] bg-secondary/5" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-3xl">
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <m.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-ui-body font-medium text-muted-foreground mb-4"
              >
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                {breadcrumbs.map((crumb) => (
                  <React.Fragment key={crumb.label}>
                    <ChevronRight size={14} className="text-slate-400" />
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-accent transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-primary font-semibold">{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </m.nav>
            )}

            {/* Title */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-ui-section-title font-medium tracking-tight mb-4 text-primary"
            >
              {title}
            </m.h1>

            {/* Subtitle */}
            {subtitle && (
              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-ui-lead text-muted-foreground leading-relaxed max-w-2xl"
              >
                {subtitle}
              </m.p>
            )}
          </div>

          {/* Persistent QR Code Contact */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center shrink-0"
          >
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 w-40 h-40 relative overflow-hidden mb-3">
              <Image src="/contactUsQR.jpeg" alt="Contact QR Code" fill sizes="160px" className="object-cover" priority />
            </div>
            <div className="font-extrabold text-primary text-ui-small uppercase tracking-widest tracking-[0.2em]">Contact Us</div>
          </m.div>
        </div>
      </Container>
    </div>
  );
};


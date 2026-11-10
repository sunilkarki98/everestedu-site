"use client";

import { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, X, QrCode } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { heroDestinations as destinations, trustStats } from "@/data/home";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const rightContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % destinations.length;
        const img = new window.Image();
        img.src = destinations[(next + 1) % destinations.length].image;
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pt-24 pb-16 sm:pb-16 lg:pt-40 lg:pb-24 bg-black">

      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <m.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={destinations[currentIndex].image}
              alt={destinations[currentIndex].name}
              fill
              sizes="100vw"
              className="object-cover brightness-105 contrast-105"
              priority
            />
          </m.div>
        </AnimatePresence>

        {/* Dark Gradient Overlay for text readability (Left side only on desktop) */}
        {/* On mobile, covers everything. On desktop, smoothly fades to transparent and leaves right side completely bright */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-navy/30 lg:bg-transparent lg:bg-gradient-to-r lg:from-primary/80 lg:via-primary/50 lg:to-transparent z-10 pointer-events-none" />
      </div>

      <Container className="relative z-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 h-full">

        {/* LEFT SIDE - Content */}
        <div className="w-full lg:w-3/5 flex flex-col items-start text-left">

          {/* Eyebrow & Trust Badge */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-colors cursor-default">
              <span className="text-lg leading-none">🏆</span>
              <span className="text-ui-small font-bold text-white tracking-wide uppercase">The Most Trusted Agency</span>
            </div>

            <a
              href="https://share.google/Bp8LPnaFi9wzvzr3a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--color-accent)" className="w-4 h-4 group-hover:scale-110 transition-transform">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 group-hover:scale-110 transition-transform">
                  <defs>
                    <linearGradient id="halfStar" x1="0" x2="100%" y1="0" y2="0">
                      <stop offset="50%" stopColor="var(--color-accent)" />
                      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#halfStar)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-ui-small font-bold text-white tracking-wide uppercase group-hover:text-accent transition-colors">4.8 Google Rating</span>
            </a>
          </m.div>

          {/* Main Headline */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-caveat)] font-medium text-accent tracking-wide mb-2 drop-shadow-md"
          >
            Your Journey Starts Here
          </m.div>
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-ui-hero font-medium text-white leading-[1.1] tracking-tight mb-4 sm:mb-6"
          >
            Migrate <span className="text-accent text-ui-hero font-bold align-middle">·</span> Study <span className="text-accent text-ui-hero font-bold align-middle">·</span> Work
            <br />
            <span className="text-accent inline-flex relative min-w-[12rem] sm:min-w-[20rem] font-[family-name:var(--font-caveat)] font-medium text-ui-hero leading-none tracking-normal mt-2">
              <AnimatePresence mode="wait">
                <m.span
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block will-change-transform"
                >
                  {destinations[currentIndex].name}
                </m.span>
              </AnimatePresence>
            </span>
          </m.h1>

          {/* Supporting Text */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ui-lead text-white/90 mb-5 sm:mb-8 max-w-xl drop-shadow-md font-medium"
          >
            Helping students and migrants build a brighter future with <span className="font-bold text-accent">honesty</span>, <span className="font-bold text-accent">care</span> & <span className="font-bold text-accent">professional</span> guidance.
          </m.p>

          {/* CTAs */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-row gap-2 sm:gap-4 w-full sm:w-auto items-center"
          >
            {/* Primary CTA */}
            <Button
              variant="accent"
              className="h-11 sm:h-14 flex-1 sm:flex-none px-4 sm:px-8 text-sm sm:text-ui-body font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 rounded-xl"
              asChild
            >
              <a
                href="https://calendly.com/samir-dreamtrip"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Consultation
              </a>
            </Button>

            <Button
              variant="outline"
              className="h-11 sm:h-14 px-4 sm:px-6 text-sm sm:text-ui-body font-bold bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary flex-1 sm:flex-none transition-all shadow-lg rounded-xl"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore
            </Button>
          </m.div>


          {/* SVG Definitions for 3D Gold Gradient */}
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <linearGradient id="gold-3d" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-gold-light)" />
                <stop offset="45%" stopColor="var(--color-gold)" />
                <stop offset="50%" stopColor="var(--color-gold-light)" />
                <stop offset="51%" stopColor="var(--color-gold-dark)" />
                <stop offset="100%" stopColor="var(--color-accent)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Trust Row */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-nowrap items-start md:items-center gap-3 md:gap-8 lg:gap-6 xl:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 w-full lg:min-w-[110%]"
          >
            {trustStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="relative shrink-0">
                    <Icon
                      size={28}
                      className="sm:w-9 sm:h-9"
                      style={{ stroke: "url(#gold-3d)", strokeWidth: 2, fill: "none", filter: "drop-shadow(1px 2px 1px rgba(0,0,0,0.8))" }}
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-base sm:text-xl text-white leading-tight" style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.6), 2px 2px 0 rgba(0,0,0,0.4), 3px 3px 0 rgba(0,0,0,0.2)' }}>
                      {stat.value}
                    </p>
                    <p className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-wider drop-shadow-md mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </m.div>
        </div>

        {/* RIGHT SIDE - Useful Links & QR Button */}
        <div
          ref={rightContainerRef}
          className="hidden lg:flex w-full lg:w-2/5 relative min-h-[500px] flex-col justify-end items-end"
        >
          <div className="absolute -bottom-12 right-0 z-30 flex flex-col items-end gap-6">

            {/* Useful Links */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-2.5 w-[280px] relative transition-all"
            >
              {/* Heading styled as a mini-capsule to match */}

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 w-fit mb-1 shadow-[0_4px_12px_rgba(0,0,0,0.2)] ml-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--color-accent)]" />
                <span className="text-[11px] font-bold text-white/90 uppercase tracking-[0.2em] leading-none mt-px">Quick Links</span>
              </div>

              {[
                { label: "VEVO Visa Check", href: "https://online.immi.gov.au/evo/firstParty?actionType=query" },
                { label: "Create USI (Student ID)", href: "https://www.usi.gov.au/students/get-a-usi" },
                { label: "Apply for TFN (Tax)", href: "https://www.ato.gov.au/Individuals/Tax-file-number/Apply-for-a-TFN/" },
                { label: "Book PTE Academic", href: "https://www.pearsonpte.com/" },
                { label: "Tax Return Form", href: "/tax-return" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-sm font-semibold text-white/90 bg-black/40 backdrop-blur-md border border-white/10 hover:border-accent/40 hover:bg-black/60 rounded-full px-5 py-3 transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                >
                  <span className="drop-shadow-sm">{link.label}</span>
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowRight className="w-3 h-3 text-accent" />
                  </div>
                </a>
              ))}
            </m.div>

            {/* QR Popup Trigger */}
            <m.button
              onClick={() => setIsQrOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-accent/10 to-black/40 backdrop-blur-md py-4 px-6 rounded-3xl shadow-[0_8px_32px_rgba(212,175,55,0.15)] flex items-center gap-4 border border-accent/20 hover:border-accent/40 hover:from-accent/20 transition-colors w-[280px]"
            >
              <div className="bg-white/80 p-2 rounded-xl shrink-0">
                <QrCode className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-white text-ui-body tracking-tight drop-shadow-md leading-none mb-1">
                  Got Questions?
                </p>
                <p className="text-ui-small font-bold uppercase tracking-[0.15em] text-accent drop-shadow-md leading-none">
                  Scan to WhatsApp
                </p>
              </div>
            </m.button>
          </div>
        </div>
      </Container>
      {/* Pathway Finder - Half in hero, half below on ALL screens */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-40 w-full max-w-3xl px-4">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-1.5 sm:p-2.5 rounded-2xl shadow-2xl flex flex-row items-center gap-1.5 sm:gap-2 w-full"
        >
          <div className="relative flex-1 min-w-0">
            <label htmlFor="pathway-type" className="sr-only">Select your pathway type</label>
            <select id="pathway-type" className="appearance-none bg-white/95 border border-white/20 text-primary px-2.5 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-accent w-full cursor-pointer hover:bg-white transition-colors text-xs sm:text-base shadow-sm">
              <option value="study">Study</option>
              <option value="migrate">Migrate</option>
              <option value="work">Work</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 sm:px-4 text-primary">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="relative flex-1 min-w-0">
            <label htmlFor="pathway-country" className="sr-only">Select your destination country</label>
            <select id="pathway-country" className="appearance-none bg-white/95 border border-white/20 text-primary px-2.5 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-accent w-full cursor-pointer hover:bg-white transition-colors text-xs sm:text-base shadow-sm">
              <option value="au">Australia</option>
              <option value="ca">Canada</option>
              <option value="uk">UK</option>
              <option value="us">USA</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 sm:px-4 text-primary">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <Button
            className="bg-accent text-primary hover:bg-white flex-1 min-w-0 sm:w-[30%] h-auto py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            onClick={() => {
              const country = (document.getElementById("pathway-country") as HTMLSelectElement)?.value;
              window.dispatchEvent(new CustomEvent("open-eligibility-modal", { detail: { country } }));
            }}
          >
            Find Pathway
          </Button>
        </m.div>
      </div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {isQrOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQrOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white p-8 pb-10 rounded-3xl shadow-2xl flex flex-col items-center justify-center max-w-sm w-full"
            >
              <button
                onClick={() => setIsQrOpen(false)}
                className="absolute top-4 right-4 p-2 bg-muted text-muted-foreground hover:bg-muted/80 hover:text-primary rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-ui-card-title text-primary mb-2 mt-2 text-center">Scan to Connect</h3>
              <p className="text-muted-foreground text-ui-body text-center mb-8">
                Open your camera and scan the QR code to chat with us on WhatsApp instantly.
              </p>

              <div className="relative w-48 h-48 bg-white p-2 shadow-inner border border-border/50 rounded-xl overflow-hidden">
                <Image
                  src="/contactUsQR.jpeg"
                  alt="Contact QR Code"
                  width={192}
                  height={192}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

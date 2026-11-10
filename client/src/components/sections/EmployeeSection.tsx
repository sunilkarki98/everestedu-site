"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { Phone } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUpCard } from "@/lib/animations";
import { siteConfig } from "@/config/site";
import { teamMembers as team } from "@/data/home";
import { Section } from "@/components/layout/Section";

type EmployeeCardProps = {
  name: string;
  phone: string;
  role: string;
  description: string;
  image: string;
  priority?: boolean;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  phone,
  role,
  description,
  image,
  priority,
}) => {
  return (
    <m.div
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-border/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-accent/30 w-full"
      variants={fadeUpCard}
    >
      {/* Image Container */}
      <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[300px] overflow-hidden bg-surface">
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Designation Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[10px] sm:text-xs font-bold text-primary shadow-[0_4px_30px_rgba(0,0,0,0.1)] tracking-wider uppercase">
            {role}
          </span>
        </div>
        
        {/* Soft gradient overlay for social icons */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Social Icons on Hover - Sliding up slightly */}
        <div className="absolute bottom-6 inset-x-0 flex items-center justify-center gap-3.5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} LinkedIn`}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} Twitter`}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} Facebook`}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </div>

      {/* Content Box */}
      <div className="relative p-5 sm:p-6 flex flex-col flex-grow bg-white">
        <div className="mb-4">
           <h3 className="text-ui-card-title font-bold text-primary leading-tight group-hover:text-accent transition-colors duration-300">
             {name}
           </h3>
           <p className="text-ui-small font-semibold text-foreground mt-2 flex items-center gap-1.5 antialiased">
             <Phone className="w-3.5 h-3.5 text-accent" />
             {phone}
           </p>
        </div>
        
        <p className="text-ui-body leading-relaxed text-foreground font-medium flex-grow antialiased">
          {description}
        </p>
      </div>
    </m.div>
  );
};

export default function EmployeeSection() {
  const autoplayRef = React.useRef(Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplayRef.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <Section padding="md" className="bg-surface relative overflow-hidden" id="team">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      {/* Heading */}
      <div className="max-w-[var(--container-max-w)] mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10 flex flex-col items-center justify-center">
        <SectionHeading 
          eyebrow="Our Team" 
          title="Meet The Experts At EEVS" 
          align="center"
          eyebrowColor="text-accent" 
          titleColor="text-primary"
          className="mb-0"
        />
      </div>

      {/* Embla Carousel */}
      <div className="max-w-[var(--container-max-w)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="overflow-hidden -mx-4 px-4 pb-8" ref={emblaRef}>
          <div className="flex">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_360px] lg:flex-[0_0_400px] px-3 lg:px-4"
              >
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="h-full pb-2"
                >
                  <EmployeeCard {...member} priority={index < 2} />
                </m.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        {scrollSnaps.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 h-2.5 bg-accent"
                    : "w-2.5 h-2.5 bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

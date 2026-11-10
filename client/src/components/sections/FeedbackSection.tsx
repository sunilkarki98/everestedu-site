"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { m } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";

import { Testimonial } from "@/lib/google-reviews";

/* ── Testimonial Card ── */
function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <Card className="relative group h-full flex flex-col justify-between p-5 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-border/40">
      {/* Top Section with Outcome */}
      <div className="flex justify-between items-start mb-6">
        <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary transition-colors" />
        {item.outcome && (
          <div className="bg-green-100 text-green-700 text-ui-small font-bold px-3 py-1 rounded-full">
            {item.outcome}
          </div>
        )}
      </div>

      {/* Feedback */}
      <p className="text-ui-body leading-relaxed mb-8 flex-1 text-foreground italic">
        &ldquo;{item.feedback}&rdquo;
      </p>

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Footer */}
      <div className="pt-5 border-t border-border flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center font-bold text-primary relative overflow-hidden shrink-0 border-[3px] border-white shadow-sm">
          {item.image ? (
            <Image src={item.image} alt={item.name} fill className="object-cover object-top" sizes="64px" />
          ) : (
            <span className="text-ui-card-title">{item.name.charAt(0)}</span>
          )}
          {item.flag && <div className="absolute -bottom-1 -right-1 text-ui-small bg-white rounded-full leading-none shadow-sm z-10">{item.flag}</div>}
        </div>
        <div>
          <p className="font-bold text-primary text-ui-body">{item.name}</p>
          {item.course && <p className="text-ui-small text-muted-foreground mt-0.5 font-medium">{item.course}</p>}
        </div>
      </div>
    </Card>
  );
}

/* ── Main Section ── */
export default function FeedbackSection({ testimonials }: { testimonials: Testimonial[] }) {
  const autoplayRef = React.useRef(Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: "auto" },
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
    <Section padding="md" className="bg-primary overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Student Success Stories"
            title="Hear From Our Successful Students"
            titleColor="text-primary-foreground"
            align="left"
            className="mb-4"
          />
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <p className="text-white/80 text-ui-lead leading-relaxed max-w-2xl">
              Real experiences from students who achieved their study and migration goals with {siteConfig.shortName}.
            </p>
            <a
              href="https://share.google/Bp8LPnaFi9wzvzr3a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-surface-hover hover:-translate-y-0.5 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-bold shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 group whitespace-nowrap shrink-0"
            >
              <Star className="w-5 h-5 text-accent fill-accent group-hover:scale-110 transition-transform shrink-0" /> Leave a Review
            </a>
          </div>
        </div>

      {/* Embla Carousel */}
      <div className="mt-8 lg:mt-12">
          {/* Viewport — negative mx to allow cards to bleed into the outer padding */}
          <div className="overflow-hidden -mx-2" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex-[0_0_100%]
                    min-w-0
                    md:flex-[0_0_50%]
                    lg:flex-[0_0_33.333%]
                    px-3
                  "
                >
                  <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="h-full pb-2"
                  >
                    <TestimonialCard item={item} />
                  </m.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          {scrollSnaps.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${index === selectedIndex
                      ? "w-8 h-2.5 bg-accent"
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                />
              ))}
            </div>
          )}
          {/* View All Button */}
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 text-white text-sm font-extrabold hover:bg-white/10 hover:text-white group transition-all duration-300"
              asChild
            >
              <Link href="/success-stories">
                Read All Success Stories
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

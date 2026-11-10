"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { MapPin, GraduationCap, ArrowRight, Users, Coffee } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";

import { featuredDestinations as destinations } from "@/data/home";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function FeaturedSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeDest = destinations[activeIndex];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    let nextIndex = activeIndex + newDirection;
    if (nextIndex < 0) nextIndex = destinations.length - 1;
    if (nextIndex >= destinations.length) nextIndex = 0;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <Section id="popular-destinations" padding="md" className="bg-background overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

          {/* Left Column */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center items-start relative z-10 py-4 lg:py-8 lg:pr-6">
            {/* Header Content */}
              <SectionHeading
                eyebrow="Popular Destinations"
                title="Study Abroad, Explore the World"
                description="Discover top cities around the world and begin a life-changing academic journey & career."
                align="left"
              />

            {/* Changing Content */}
            <div className="relative min-h-[360px] w-full flex flex-col mt-2">
              <div className="mb-2">
                <h3 className="text-3xl sm:text-4xl font-medium font-serif text-primary tracking-tight leading-none">
                  {activeDest.country !== 'Europe' ? activeDest.country : activeDest.name}
                </h3>
              </div>

              <p className="text-muted-foreground text-ui-lead leading-relaxed mb-8 sm:mb-10 max-w-[480px] min-h-[100px] sm:min-h-[80px]">
                Experience world-class education and a vibrant lifestyle in {activeDest.country}. {activeDest.name} offers top universities, diverse culture, and {activeDest.opportunities.toLowerCase()}
              </p>

              <div className="flex items-center justify-between gap-2 sm:gap-6 mb-8 sm:mb-10 w-full max-w-[460px]">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border border-border/80 bg-background flex items-center justify-center shadow-sm">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-ui-small font-semibold text-center uppercase tracking-wider text-muted-foreground">Top Universities</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border border-border/80 bg-background flex items-center justify-center shadow-sm">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-ui-small font-semibold text-center uppercase tracking-wider text-muted-foreground">Diverse Culture</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border border-border/80 bg-background flex items-center justify-center shadow-sm">
                    <Coffee className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-ui-small font-semibold text-center uppercase tracking-wider text-muted-foreground">Great Lifestyle</span>
                </div>
              </div>

              <Button className="rounded-full w-fit bg-primary text-primary-foreground hover:bg-primary/90 group pl-6 sm:pl-8 pr-4 sm:pr-6 h-11 sm:h-14 text-sm sm:text-lg shadow-md">
                Explore {activeDest.country !== 'Europe' ? activeDest.country : activeDest.name}
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
            </div>

          </div>

          {/* Right Column - Image Carousel */}
          <div className="w-full lg:w-[50%] min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] relative rounded-3xl sm:rounded-[40px] overflow-hidden shadow-2xl flex-grow">
            <AnimatePresence initial={false} custom={direction}>
              <m.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 250, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeDest.image}
                  alt={`${activeDest.name}, ${activeDest.country}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={activeIndex === 0}
                />

                {/* Subtle gradient overlay for better text contrast on the glass card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Glassmorphism Details Card (Small, Top Right) */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 backdrop-blur-xl bg-black/20 border border-white/20 p-2.5 sm:p-3 rounded-xl shadow-xl flex items-center gap-2.5 w-auto">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase text-ui-small mb-0.5">{activeDest.name}, {activeDest.country}</h4>
                    <p className="text-white/80 text-ui-small font-medium tracking-wide">Study. Grow. Succeed.</p>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </Section>
  );
}

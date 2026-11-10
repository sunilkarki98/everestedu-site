"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { Quote, Star, Target, Lightbulb, Trophy } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import CallToAction from "@/components/sections/CallToAction";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

// Detailed case study data
const caseStudies = [
  {
    id: 1,
    name: "Rajan Sharma",
    course: "MBA — University of Melbourne",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    outcome: "Visa Granted in 14 Days",
    rating: 5,
    quote: "EEVS didn't just help me apply; they built a roadmap for my entire career.",
    details: {
      goal: "Rajan wanted to pursue an MBA at a Group of Eight university to accelerate his career in corporate finance, but was concerned about the complex GTE (Genuine Temporary Entrant) requirements.",
      solution: "Our expert counsellors audited his financial background, structured a comprehensive GTE statement, and secured a conditional offer from the University of Melbourne within 2 weeks.",
      result: "Rajan's Subclass 500 visa was granted in a record 14 days without any further requests for information (RFI). He is now in his second semester."
    }
  },
  {
    id: 2,
    name: "Kajal Shahi",
    course: "MSc Data Science — University of Toronto",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop",
    outcome: "Admitted with 20% Scholarship",
    rating: 5,
    quote: "The scholarship assistance was incredible. I never thought studying in Canada could be this affordable.",
    details: {
      goal: "Kajal had an excellent academic record but needed financial assistance to afford a top-tier Data Science program in Canada.",
      solution: "We mapped her profile against 50+ university scholarships and guided her in writing a compelling Statement of Purpose that highlighted her unique technical background.",
      result: "She was accepted into the University of Toronto with a 20% international student scholarship, saving her thousands in tuition fees."
    }
  },
  {
    id: 3,
    name: "Nisha Baniya",
    course: "Master of IT — Deakin University",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    outcome: "Visa Granted & PR Pathway",
    rating: 5,
    quote: "The welcoming office environment and immediate responses made all the difference.",
    details: {
      goal: "Nisha wanted a course that not only matched her tech skills but also offered strong regional migration pathways in Australia.",
      solution: "We recommended Deakin University's regional campus, which provided her with extra points for permanent residency. We handled her admission, health insurance (OSHC), and visa lodgement.",
      result: "Nisha is thriving at Deakin and has already secured a part-time job as a Junior Developer, putting her perfectly on track for her graduate visa."
    }
  },
  {
    id: 4,
    name: "Sanjeet Parajuli",
    course: "BSc Business — King's College London",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    outcome: "Accepted to Top 40 Global Uni",
    rating: 5,
    quote: "Their knowledge of the UK UCAS system saved me from making critical application errors.",
    details: {
      goal: "Sanjeet dreamt of studying in London but was overwhelmed by the rigorous UK application process and strict timeline.",
      solution: "Our UK education experts curated a list of top business schools, refined his personal statement to UCAS standards, and prepared him for the university interviews.",
      result: "He received multiple offers and ultimately accepted a spot at King's College London, securing his Student Route visa well before the intake."
    }
  }
];

export function SuccessStoriesClient() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Student Success Stories" 
        subtitle="Read the inspiring journeys of our students who successfully reached their education and migration goals."
        breadcrumbs={[{ label: "Success Stories" }]}
      />
      
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <SectionHeading 
              eyebrow="Real Experiences" 
              title="Don't Just Take Our Word For It" 
              className="mb-6"
            />
            <p className="text-lg text-muted-foreground">
              Behind every visa grant and university admission is a unique story of ambition, hard work, and expert guidance. Here are a few of our proudest moments.
            </p>
          </div>

          {/* Case Studies Stack */}
          <div className="space-y-12 lg:space-y-20 max-w-5xl mx-auto">
            {caseStudies.map((story, index) => (
              <m.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col md:flex-row group"
              >
                {/* Image Side (Left) */}
                <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full overflow-hidden">
                  <Image 
                    src={story.image} 
                    alt={story.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  
                  {/* Floating Identity Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <Quote className="w-10 h-10 text-accent/80 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{story.name}</h3>
                    <p className="text-white/90 font-medium text-sm flex items-center gap-2">
                      <span className="text-xl">{story.flag}</span>
                      {story.course}
                    </p>
                  </div>
                </div>

                {/* Content Side (Right) */}
                <div className="w-full md:w-3/5 p-8 lg:p-12 flex flex-col">
                  {/* Top Bar: Outcome & Rating */}
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                    <div className="bg-green-100 text-green-800 text-sm font-bold px-4 py-1.5 rounded-full border border-green-200 shadow-sm">
                      {story.outcome}
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: story.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>

                  {/* Highlight Quote */}
                  <h4 className="text-xl md:text-2xl font-[family-name:var(--font-caveat)] text-primary leading-snug mb-8">
                    &quot;{story.quote}&quot;
                  </h4>

                  {/* Detailed Breakdown */}
                  <div className="space-y-6 flex-grow">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <Target className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">The Goal</h5>
                        <p className="text-slate-600 leading-relaxed text-base">{story.details.goal}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0 border border-accent/20">
                        <Lightbulb className="w-5 h-5 text-accent-text" />
                      </div>
                      <div>
                        <h5 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">The EEVS Solution</h5>
                        <p className="text-slate-600 leading-relaxed text-base">{story.details.solution}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 border border-green-200">
                        <Trophy className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-green-700 text-sm uppercase tracking-wider mb-1">The Outcome</h5>
                        <p className="text-slate-700 font-medium leading-relaxed text-base">{story.details.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction 
        eyebrowText="Your Story Starts Here"
        title={
          <>
            Be Our Next <span className="text-accent">Success Story</span>
          </>
        }
        description={`Join thousands of students who have successfully achieved their education and migration goals with ${siteConfig.shortName}. Book a free consultation today and take the first step towards your future.`}
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        showSecondaryIcon={false}
      />

    </main>
  );
}

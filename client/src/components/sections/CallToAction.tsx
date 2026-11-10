"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { ExternalLink, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface CallToActionProps {
  eyebrowText?: string;
  title?: React.ReactNode;
  description?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showSecondaryIcon?: boolean;
}

const CallToAction = ({
  eyebrowText = "Ready to Start Your Journey?",
  title,
  description = "Book a free consultation with our experienced education and migration advisors. Get personalized guidance tailored to your goals.",
  secondaryButtonText = "Chat on WhatsApp",
  secondaryButtonLink = "https://wa.me/61406000815",
  showSecondaryIcon = true,
}: CallToActionProps = {}) => {
  return (
    <Section padding="md" className="bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Left — Text Content */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-3">
              <MessageCircle size={14} />
              {eyebrowText}
            </div>

            <h2 className="text-ui-section-title text-white mb-2 leading-tight tracking-tight">
              {title || (
                <>
                  Let&apos;s Build Your{" "}
                  <span className="text-accent">Future Together</span>
                </>
              )}
            </h2>

            <p className="text-white/70 text-ui-lead leading-relaxed max-w-lg mb-6">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <a
                href="https://calendly.com/samir-dreamtrip"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-accent text-primary font-bold text-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex-1 sm:flex-none"
              >
                <span className="relative z-10">Book Free Consultation</span>
                <ExternalLink className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-700 ease-out group-hover:left-[200%] z-0" />
              </a>

              <a
                href={secondaryButtonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white font-bold text-sm rounded-xl border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 flex-1 sm:flex-none"
              >
                {showSecondaryIcon && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                )}
                {secondaryButtonText}
              </a>
            </div>
          </m.div>

          {/* Right — QR Code (standalone) */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="shrink-0 hidden sm:flex flex-col items-center gap-3"
          >
            <div className="w-40 h-40 bg-white rounded-2xl overflow-hidden relative shadow-xl">
              <Image
                src="/contactUsQR.jpeg"
                alt="Scan to connect on WhatsApp"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h4 className="text-white font-bold text-ui-card-title">Scan to Connect</h4>
              <p className="text-white/50 text-ui-small font-medium">
                Chat instantly via WhatsApp
              </p>
            </div>
          </m.div>
        </div>
      </Container>
    </Section>
  );
};

export default CallToAction;

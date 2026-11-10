import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/Container";

const FooterSection = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground pt-10 border-t border-white/10 shadow-[0_-4px_30px_rgba(0,0,0,0.15)] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8 lg:gap-8">
          {/* Logo & About */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <div className="flex flex-col items-start space-y-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-sm shadow-md border border-white/20 inline-flex items-center justify-center overflow-hidden">
                <Image
                  src="/logos/everestlogo.jpeg"
                  alt="Everest Education Logo"
                  width={140}
                  height={48}
                  className="object-contain w-36 h-auto"
                />
              </div>
              <p className="text-ui-body text-white/80">Since <span className="text-accent font-bold text-ui-body">{siteConfig.foundedYear}</span></p>
              <p className="text-ui-body opacity-60">{siteConfig.description}</p>
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-white mb-3 text-ui-small tracking-wider uppercase">Follow Us On</h3>
              <div className="flex gap-5 items-center">
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors text-white hover:text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors text-white hover:text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><path d="M16.11 7.91h.01" /><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors text-white hover:text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors text-white hover:text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </a>
                <a href="https://wa.me/61406000815" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition-colors text-white hover:text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white mb-3 pb-1 border-b-2 border-accent inline-block">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-2 opacity-70">
            <li><Link href="/" className="transition-colors hover:text-secondary">Home</Link></li>
            <li><Link href="/about" className="transition-colors hover:text-secondary">About Us</Link></li>
            <li><Link href="/courses" className="transition-colors hover:text-secondary">Courses</Link></li>
            <li><Link href="/universities" className="transition-colors hover:text-secondary">Universities</Link></li>
            <li><Link href="/migration" className="transition-colors hover:text-secondary">Visa & Migration</Link></li>
            <li className="pt-4">
              <a
                href="https://condat.com.au/condat/318/all-clients"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md group w-fit"
              >
                Client Portal (CRM) <ExternalLink className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold text-white mb-3 pb-1 border-b-2 border-accent inline-block">
            Explore
          </h3>
          <ul className="mt-2 space-y-2 opacity-70">
            <li><Link href="/abroad-study" className="transition-colors hover:text-secondary">Abroad Study</Link></li>
            <li><Link href="/other-services" className="transition-colors hover:text-secondary">Other Services</Link></li>
            <li><Link href="/success-stories" className="transition-colors hover:text-secondary">Student Success Stories</Link></li>
            <li><Link href="/blog" className="transition-colors hover:text-secondary">Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold text-white mb-3 pb-1 border-b-2 border-accent inline-block">
            Support
          </h3>
          <ul className="mt-2 space-y-2 opacity-70">
            <li><a href="https://calendly.com/samir-dreamtrip" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-secondary">Book Consultation</a></li>
            <li><Link href="/contact" className="transition-colors hover:text-secondary">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-white mb-3 pb-1 border-b-2 border-accent inline-block">
            Contact
          </h3>
          <ul className="mt-4 space-y-4 opacity-80">
            <li>
              <a href={`tel:${siteConfig.contact.phones.main.replace(/[^\d+]/g, "")}`} className="flex items-start gap-3 transition-colors hover:text-secondary">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                <div className="flex flex-col">
                  <span>{siteConfig.contact.phones.main}</span>
                  <span>{siteConfig.contact.phones.landline}</span>
                </div>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.emails.main}`} className="flex items-start gap-3 transition-colors hover:text-secondary">
                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                <div className="flex flex-col">
                  <span>{siteConfig.contact.emails.main}</span>
                  <span>{siteConfig.contact.emails.secondary}</span>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
              <span className="leading-snug">{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="mt-8">
        {/* Tagline */}
        <div className="text-center py-2.5">
          <p className="opacity-80 text-ui-small font-medium">
            Trusted Education & Visa Services Worldwide
          </p>
        </div>

        {/* Gold Divider */}
        <Container>
          <div className="h-px bg-accent/80" />
        </Container>

        {/* Copyright */}
        <div className="py-3 text-center opacity-60 text-ui-small">
          © {new Date().getFullYear()} Everest Education & Visa Services (EEVS). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

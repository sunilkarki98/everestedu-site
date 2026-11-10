import { Mail, Smartphone, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground text-ui-small py-2">
      <Container className="flex justify-between items-center overflow-hidden">
        {/* Left side: Phone + Email */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Australia Mobile Phone */}
          <a
            href={`tel:+61${siteConfig.contact.phones.main.replace(/[^\d]/g, "").replace(/^0/, "")}`}
            className="flex items-center gap-1.5 font-medium hover:text-secondary transition-colors"
            title="Call Australia Mobile"
          >
            <Smartphone className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
            <span className="text-[11px] sm:text-sm">{siteConfig.contact.phones.main}</span>
            <span className="text-sm sm:text-base leading-none drop-shadow-sm ml-0.5" aria-label="Australia Flag">🇦🇺</span>
          </a>

          {/* Australia Landline */}
          <a
            href={`tel:+61${siteConfig.contact.phones.landline.replace(/[^\d]/g, "").replace(/^0/, "")}`}
            className="flex items-center gap-1.5 font-medium hover:text-secondary transition-colors hidden sm:flex"
            title="Call Australia Landline"
          >
            <Phone className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
            <span className="text-[11px] sm:text-sm">{siteConfig.contact.phones.landline}</span>
            <span className="text-sm sm:text-base leading-none drop-shadow-sm ml-0.5" aria-label="Australia Flag">🇦🇺</span>
          </a>

          {/* Nepal Phone */}
          <a
            href={`tel:${siteConfig.contact.phones.nepal.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-1.5 font-medium hover:text-secondary transition-colors"
            title="Call Nepal Office"
          >
            <Phone className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
            <span className="text-[11px] sm:text-sm">{siteConfig.contact.phones.nepal}</span>
            <span className="text-sm sm:text-base leading-none drop-shadow-sm ml-0.5" aria-label="Nepal Flag">🇳🇵</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteConfig.contact.emails.main}`}
            className="hidden md:flex items-center gap-1.5 font-medium hover:text-secondary transition-colors"
            title="Email Us"
          >
            <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
            <span className="hidden lg:inline">{siteConfig.contact.emails.main}</span>
          </a>
        </div>

        {/* Right side: Social icons */}
        <div className="flex gap-2 xl:gap-4">
          {[
            { bg: "bg-blue-700", link: siteConfig.social.facebook, path: "M22 12a10 10 0 1 0-11 9.95v-7.05h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.87 0 1.8.15 1.8.15v2h-1c-1 0-1.3.63-1.3 1.28v1.87h2.2l-.35 2.9h-1.85v7.05A10 10 0 0 0 22 12", label: "Facebook" },
            { bg: "bg-sky-500", link: siteConfig.social.twitter, path: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.12 9.12 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 0c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.1 1.03A12.94 12.94 0 0 1 1.64 1.1a4.5 4.5 0 0 0-.61 2.27c0 1.57.8 2.95 2 3.76a4.47 4.47 0 0 1-2-.55v.06c0 2.18 1.55 4 3.61 4.43a4.52 4.52 0 0 1-2 .08c.57 1.8 2.24 3.1 4.2 3.14A9 9 0 0 1 0 19.54 12.78 12.78 0 0 0 6.92 21c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z", label: "Twitter" },
            { bg: "bg-gradient-to-tr from-accent via-pink-500 to-purple-600", link: siteConfig.social.instagram, path: "M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z", label: "Instagram" },
            { bg: "bg-blue-600", link: siteConfig.social.linkedin, path: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.3h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.35c.89-1.16 2.42-1.85 4-1.85 2.76 0 5 2.24 5 5v5.5z", label: "LinkedIn" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`${item.bg} w-7 h-7 flex items-center justify-center rounded-full text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d={item.path} />
              </svg>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}

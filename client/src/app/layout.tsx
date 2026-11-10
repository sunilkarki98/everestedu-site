import type { Metadata } from "next";
import { getBaseUrl, defaultOgImage } from "@/lib/seo";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import MotionProvider from "@/components/providers/MotionProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Chatbot } from "@/components/chat/Chatbot";

// Load Plus Jakarta Sans font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const SITE_URL = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Everest Education & Visa Services | Study, Work & Migrate to Australia",
  description:
    "Trusted education & visa services in Australia. Family-owned, student-first. Study, work & migrate with confidence.",
  keywords: [
    "Education Consultancy",
    "Study in Australia",
    "Visa Services",
    "Student Visa Australia",
    "Skilled Migration",
    "Partner Visa",
    "Graduate Visa",
    "Everest Education",
    "PTE IELTS",
  ],
  openGraph: {
    title: "Everest Education & Visa Services",
    description: "Trusted education & visa services in Australia. Family-owned, student-first. Study, work & migrate with confidence.",
    url: SITE_URL,
    siteName: "Everest Education & Visa Services",
    images: [defaultOgImage],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everest Education & Visa Services | Study, Work & Migrate to Australia",
    description: "Trusted education & visa services in Australia. Family-owned, student-first.",
    images: [defaultOgImage.url],
  },
  icons: {
    icon: "/logos/everestlogo.jpeg",
    apple: "/logos/everestlogo.jpeg",
  },
};

/*
🌸 BLESSING FOR THIS WEBSITE 🌸
By the grace of Ahilya (born on Ram Navami) and Amulya (priceless),
this website carries the energy of Number 2 (trust), Number 4 (stability), and Number 6 (care).
May every visitor feel peace. May every student find their path.
Colors: White (#FFFFFF), Navy (#1A2A5E), Light Blue (#89CFF0), Silver (#C0C0C0).
For Ahilya & Amulya — and for all who seek a better future.
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${jakarta.variable} ${caveat.variable} font-sans antialiased`}

      >
        <SmoothScrollProvider>
          <MotionProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-primary">
              Skip to main content
            </a>
            <main id="main-content">{children}</main>
            <Chatbot />
            <Analytics />
            <SpeedInsights />
          </MotionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

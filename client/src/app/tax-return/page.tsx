import { Metadata } from "next";
import TaxForm from "./TaxForm";
import { Container } from "@/components/layout/Container";
import { getCanonicalUrl, getBaseUrl, createOgMetadata, createTwitterMetadata, createFaqJsonLd } from "@/lib/seo";
import { taxReturnFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Tax Return Form | Everest Education & Visa Services",
  description: "Complete your Tax Return securely online with Everest Education & Visa Services.",
  keywords: ["online tax return Australia", "tax agent Belconnen", "student tax return", "Everest tax services"],
  alternates: {
    canonical: getCanonicalUrl("/tax-return"),
  },
  openGraph: createOgMetadata({
    title: "Tax Return Form | Everest Education & Visa Services",
    description: "Complete your Tax Return securely online with Everest Education & Visa Services.",
    path: "/tax-return",
  }),
  twitter: createTwitterMetadata({
    title: "Tax Return Form | Everest Education & Visa Services",
    description: "Complete your Tax Return securely online with Everest Education & Visa Services.",
  }),
};

export default function TaxReturnPage() {
  const baseUrl = getBaseUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tax Return Form - Everest Education",
    "url": `${baseUrl}/tax-return`,
    "description": "Secure online tax return form for Everest Education clients.",
    "provider": {
      "@type": "AccountingService",
      "name": "Everest.Tax",
      "url": baseUrl
    }
  };

  const faqJsonLd = createFaqJsonLd(taxReturnFaqs);

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Custom Header Area matching the old HTML form */}
          <div className="mb-8">
            
            {/* Top row: Logo and Contact Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-border pb-6">
              {/* Left: Logo block */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-accent text-accent font-bold text-xl flex items-center justify-center bg-white shadow-sm font-[family-name:var(--font-caveat)] sm:font-sans">
                  E
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary leading-tight">Everest.Tax</h1>
                  <p className="text-sm text-slate-500">Registered Tax Agents</p>
                </div>
              </div>
              
              {/* Right: Contact block */}
              <div className="text-sm text-slate-600 sm:text-right space-y-1">
                <p>7/2–10 Oatley Court, Belconnen, ACT 2617</p>
                <p>Mob: 0466 117 512 / 0406 000 815</p>
                <a href={`mailto:${process.env.NEXT_PUBLIC_TAX_EMAIL || 'tax.everest@yahoo.com'}`} className="hover:text-accent transition-colors underline underline-offset-2">
                  {process.env.NEXT_PUBLIC_TAX_EMAIL || 'tax.everest@yahoo.com'}
                </a>
              </div>
            </div>

            {/* Headline and Instructions */}
            <div className="mt-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-sans)]">
                Tax Return Form
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                Please complete every section that applies to you. Fields marked with an asterisk (*) are required, including your signature at the end. Fields marked Y/N help us scope your return quickly — tick Y and add details wherever it applies.
              </p>
            </div>

            {/* Alert Box */}
            <div className="mt-6 bg-amber-50 border-l-4 border-accent p-5 rounded-r-xl shadow-sm text-sm text-slate-700 leading-relaxed">
              <strong>What counts as a record?</strong> Anything — paper or electronic — that provides evidence of income or expenses: receipts and invoices, spreadsheets or timesheets, logbooks, diary entries, or employment contracts and pay-related letters from your employer.
            </div>

          </div>

          <TaxForm />
          
        </div>
      </Container>
    </div>
  );
}

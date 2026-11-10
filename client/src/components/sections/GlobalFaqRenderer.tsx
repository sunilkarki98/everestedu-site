"use client";

import { usePathname } from "next/navigation";
import { FaqSection } from "@/components/sections/FaqSection";
import { homeFaqs, aboutFaqs, contactFaqs, coursesFaqs, taxReturnFaqs } from "@/data/faqs";

export function GlobalFaqRenderer() {
  const pathname = usePathname();
  
  let faqs = null;
  if (pathname === "/") faqs = homeFaqs;
  else if (pathname === "/about") faqs = aboutFaqs;
  else if (pathname === "/contact") faqs = contactFaqs;
  else if (pathname === "/courses") faqs = coursesFaqs;
  else if (pathname === "/tax-return") faqs = taxReturnFaqs;

  if (!faqs) return null;

  return (
    <div className="bg-slate-50 section-py-md section-py-md-lg px-4 border-t border-slate-200">
      <FaqSection faqs={faqs} />
    </div>
  );
}

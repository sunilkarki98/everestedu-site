// src/config/site.ts
import { migrationServices, studyServices, otherServices } from "@/data/services";

export type MenuKey = "courses" | "visaMigration" | "abroadStudy" | "otherServices";

export type SubLink = {
  label: string;
  href: string;
  description?: string;
};

export type MenuItem = {
  key: MenuKey;
  label: string;
  href: string | null;
  links: SubLink[];
};

export const siteConfig = {
  name: "Everest Education & Visa Services",
  shortName: "Everest Education",
  description: "Trusted education & visa services in Australia. Family-owned, student-first.",
  foundedYear: 2011,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://eevsgroup.com",

  contact: {
    emails: {
      main: "everesteduaustralia@gmail.com",
      secondary: "info@eevsgroup.com",
    },
    phones: {
      main: "0466 117 512",
      landline: "02 6179 6307",
      nepal: "+977 9749453158",
    },
    address: "Level 1, Suite 7, 2-10 Oatley Court, Belconnen, ACT 2617",
  },

  social: {
    facebook: "https://www.facebook.com/EEVSAustralia/",
    twitter: "https://twitter.com/EverestEduGroup",
    instagram: "https://www.instagram.com/EverestEduGroup",
    linkedin: "https://www.linkedin.com/company/EverestEduGroup",
  },

  links: {
    bookConsultation: "https://calendly.com/samir-dreamtrip",
  },

  stats: {
    universities: 300,
    students: 10000,
    yearsExp: 15,
    satisfaction: 98,
  },

  nav: [
    {
      key: "courses",
      label: "Courses",
      href: "/courses",
      links: [
        { label: "Health & Science", href: "/courses/health" },
        { label: "Information Technology (IT)", href: "/courses/it" },
        { label: "Engineering", href: "/courses/engineering" },
        { label: "Business & Management Studies", href: "/courses/business" },
        { label: "Cookery & Hospitality", href: "/courses/cookery" },
        { label: "Trade Courses", href: "/courses/trade" },
      ],
    },
    {
      key: "visaMigration",
      label: "Visa & Migration",
      href: "/migration",
      links: migrationServices.map(service => ({
        label: service.title,
        href: `/migration?service=${service.id}`
      })),
    },
    {
      key: "abroadStudy",
      label: "Abroad Study",
      href: "/abroad-study",
      links: studyServices.map(service => ({
        label: service.title,
        href: `/abroad-study?service=${service.id}`
      })),
    },
    {
      key: "otherServices",
      label: "Other Services",
      href: "/other-services",
      links: otherServices.map(service => ({
        label: service.title,
        href: `/other-services?service=${service.id}`
      })),
    },
  ] as MenuItem[],
};

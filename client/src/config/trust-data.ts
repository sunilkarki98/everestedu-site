// src/config/trust-data.ts
// Shared data for trust stats and accreditation badges used across multiple sections.

import { Award, Users, Building2, ThumbsUp, FileSignature, Globe, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "./site";

export interface TrustItem {
  icon: LucideIcon;
  number: number;
  suffix: string;
  label: string;
}

export interface AccreditationItem {
  name: string;
  desc: string;
  icon: LucideIcon;
  gradientId: string;
  stroke: string;
}

export const trustItems: TrustItem[] = [
  { icon: Award, number: siteConfig.stats.yearsExp, suffix: "+", label: "Years Exp." },
  { icon: Users, number: siteConfig.stats.students, suffix: "+", label: "Students" },
  { icon: Building2, number: siteConfig.stats.universities, suffix: "+", label: "Institutions" },
  { icon: ThumbsUp, number: siteConfig.stats.satisfaction, suffix: "%", label: "Satisfaction" },
];

export const accreditations: AccreditationItem[] = [
  { name: "MARA Registered", desc: "Migration Agents", icon: FileSignature, gradientId: "grad-mara-light", stroke: "#B45309" },
  { name: "QEAC Certified", desc: "Education Counsellors", icon: Award, gradientId: "grad-qeac-light", stroke: "#1D4ED8" },
  { name: "PIER Agency", desc: "Professional Resources", icon: Globe, gradientId: "grad-pier-light", stroke: "#047857" },
  { name: "Gov. Approved", desc: "Ministry of Education", icon: Landmark, gradientId: "grad-gov-light", stroke: "#5B21B6" },
];

/**
 * SVG gradient definitions used by accreditation icons.
 * Render this once at the top of any section that uses accreditation badges.
 */
export const accreditationGradientDefs = [
  { id: "grad-mara-light", stops: [{ offset: "0%", color: "#FDE68A" }, { offset: "50%", color: "#F59E0B" }, { offset: "100%", color: "#B45309" }] },
  { id: "grad-qeac-light", stops: [{ offset: "0%", color: "#BFDBFE" }, { offset: "50%", color: "#3B82F6" }, { offset: "100%", color: "#1D4ED8" }] },
  { id: "grad-pier-light", stops: [{ offset: "0%", color: "#A7F3D0" }, { offset: "50%", color: "#10B981" }, { offset: "100%", color: "#047857" }] },
  { id: "grad-gov-light", stops: [{ offset: "0%", color: "#DDD6FE" }, { offset: "50%", color: "#8B5CF6" }, { offset: "100%", color: "#5B21B6" }] },
];

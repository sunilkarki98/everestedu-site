import { 
  BriefcaseBusiness, Heart, Scale, GraduationCap, 
  Landmark, BookOpen, UserCheck, ShieldCheck, HeartPulse, 
  Calculator, ClipboardCheck, Building2, FileText, Handshake, Wrench
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Icon lookup map for Server→Client serialization
export const iconMap: Record<string, LucideIcon> = {
  FileText, BriefcaseBusiness, Heart, Scale, GraduationCap,
  Landmark, BookOpen, UserCheck, ShieldCheck, HeartPulse,
  Calculator, ClipboardCheck, Building2, Handshake, Wrench,
};

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string; // Name of the Lucide icon (resolved via iconMap in client)
  overview: string;
  eligibility?: string[];
  importantNote?: string;
  keyBenefits: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const migrationServices: ServiceDetail[] = [
  {
    id: "student-visa",
    title: "Student Visa (Subclass 500)",
    description: "Expert assistance with applying for, renewing, or transitioning your Australian Student Visa.",
    icon: "FileText",
    overview: "The Student Visa (Subclass 500) is your gateway to studying in Australia. Navigating this process requires meticulous attention to detail, particularly regarding the Genuine Student (GS) requirement — a written assessment that demonstrates your genuine intention to study in Australia temporarily. Our Registered Migration Agents have lodged hundreds of successful Student Visa applications and understand exactly what the Department of Home Affairs is looking for. We handle everything from GS statement drafting and Confirmation of Enrolment (CoE) processing to health cover arrangement and biometrics scheduling, ensuring your application is decision-ready from day one.",
    eligibility: [
      "Enrolled in or accepted to a CRICOS-registered course",
      "Adequate financial capacity to cover tuition, living costs, and travel",
      "Meet the Genuine Student (GS) requirement",
      "Hold adequate Overseas Student Health Cover (OSHC)",
      "Meet English language requirements for your course"
    ],
    importantNote: "Currently, the Genuine Student (GS) test has replaced the former Genuine Temporary Entrant (GTE) requirement. Applicants must now respond to targeted questions about their study intentions rather than submitting a general statement.",
    keyBenefits: [
      "Comprehensive GS statement drafting and review",
      "Assistance with CoE (Confirmation of Enrolment) processing",
      "Adding dependents or spouses to your visa application",
      "Health cover (OSHC) arrangement at competitive rates"
    ],
    processSteps: [
      { title: "Consultation & Document Checklist", desc: "We review your specific situation, assess risk factors, and provide a tailored list of required documents." },
      { title: "GS Statement Preparation", desc: "We draft and refine a compelling Genuine Student statement addressing all required questions." },
      { title: "Application Lodgement", desc: "We submit the complete visa application and liaise directly with the Department of Home Affairs on your behalf." },
      { title: "Post-Lodgement Support", desc: "We respond to any requests for additional information (s56 notices) and keep you updated on progress." }
    ],
    faqs: [
      { q: "Can I work on a Student Visa in Australia?", a: "Yes. Student visa holders can currently work up to 48 hours per fortnight during the academic semester and unlimited hours during scheduled course breaks. Your employer must verify your work rights." },
      { q: "What is the Genuine Student (GS) requirement?", a: "The GS requirement recently replaced the former GTE test. You must answer specific questions about why you chose Australia, your selected course and provider, your current circumstances, and the value of the course to your future. Our agents help you craft strong, authentic responses." },
      { q: "How long does a Student Visa application take?", a: "Processing times vary by nationality and risk level. Most applications are processed within 4-6 weeks, but some can take up to 3-4 months. We ensure your application is complete to avoid unnecessary delays." },
      { q: "Can I bring my family on a Student Visa?", a: "Yes, you can include your spouse/partner and dependent children under 18 in your Student Visa application. Your partner will receive full work rights, and your children can attend Australian schools." },
      { q: "What happens if my visa is refused?", a: "If your Student Visa is refused, you may have the right to appeal to the Administrative Review Tribunal (ART) within 21 days. Our team can assess your prospects and represent you through the appeal process." }
    ]
  },
  {
    id: "skilled-migration",
    title: "Skilled Migration (PR)",
    description: "Pathways for skilled workers to live and work in Australia permanently (Subclass 189, 190, 491).",
    icon: "BriefcaseBusiness",
    overview: "Australia's General Skilled Migration (GSM) program is the primary pathway for qualified professionals to obtain Permanent Residency. The program is points-tested and highly competitive, with your score determined by factors including age, English proficiency, work experience, and qualifications. We calculate your points accurately, identify the optimal visa subclass (189 Independent, 190 State Nominated, or 491 Skilled Regional), and navigate the complex SkillSelect Expression of Interest system to maximise your chances. Our senior migration agents have deep expertise in the evolving occupation lists and state nomination criteria, ensuring your application targets the most viable pathway.",
    eligibility: [
      "Occupation must be on the relevant Skilled Occupation List (SOL/CSOL)",
      "Positive skills assessment from the relevant Australian authority",
      "Minimum 65 points on the Points Test (competitive scores typically 80-90+)",
      "Under 45 years of age at time of invitation",
      "Competent English (IELTS 6.0+ or equivalent)"
    ],
    importantNote: "Points thresholds change with every SkillSelect invitation round. As of 2026, most occupations require 80-95+ points to receive an invitation. State nomination (190/491) can add 5-15 bonus points and significantly improve your chances.",
    keyBenefits: [
      "Accurate Points Test calculation and gap analysis",
      "State Sponsorship (190/491) application support",
      "Expression of Interest (EOI) strategic lodgement",
      "Skills assessment coordination with relevant authorities"
    ],
    processSteps: [
      { title: "Skills Assessment", desc: "We identify the correct assessing authority for your occupation and manage the entire documentation process to obtain a positive assessment." },
      { title: "EOI Lodgement", desc: "We submit your strategically optimised Expression of Interest via SkillSelect, targeting the best possible invitation outcome." },
      { title: "Invitation & Visa Application", desc: "Once you receive an Invitation to Apply (ITA), we prepare and lodge the complete visa application within the strict 60-day deadline." },
      { title: "Decision & Grant", desc: "We manage all correspondence with the Department and prepare you for the grant of your Permanent Residency." }
    ],
    faqs: [
      { q: "How many points do I need for Australian PR?", a: "The minimum pass mark is 65 points, but in practice, the competitive threshold for most occupations is 80-95+ points depending on your occupation and the current invitation round. We conduct a detailed points assessment to determine your competitiveness." },
      { q: "What is the difference between 189, 190, and 491 visas?", a: "Subclass 189 is fully independent (no sponsor required, live anywhere). Subclass 190 requires state nomination (+5 points, must live in nominating state for 2 years). Subclass 491 is a regional provisional visa (+15 points, must live and work in regional Australia for 3 years before applying for PR via 191)." },
      { q: "How long does the skilled migration process take?", a: "The entire process typically takes 6-18 months from skills assessment to visa grant, depending on your occupation, processing times, and whether you are onshore or offshore." },
      { q: "Do I need a job offer for skilled migration?", a: "No job offer is required for Subclass 189 or 190. However, having Australian work experience can significantly boost your points. Subclass 491 may require employer sponsorship in some streams." },
      { q: "Can my family be included in my PR application?", a: "Yes, your spouse/partner and dependent children can be included. Your partner's skills and English proficiency can also contribute additional points to your application." }
    ]
  },
  {
    id: "partner-visa",
    title: "Family & Partner Visas",
    description: "Reunite with your family members or bring your spouse to Australia with expert guidance.",
    icon: "Heart",
    overview: "Partner and family visas are among the most heavily scrutinised applications by the Department of Home Affairs. The Department requires comprehensive evidence proving the genuine and continuing nature of your relationship across four key pillars: financial, social, household, and commitment. Our experienced migration agents help you build an undeniable portfolio of evidence, draft compelling statutory declarations, and present your relationship in the strongest possible light. We handle both onshore (820/801) and offshore (309/100) partner visa applications, as well as Parent and Child visa streams.",
    eligibility: [
      "In a genuine and ongoing relationship with an Australian citizen, PR holder, or eligible NZ citizen",
      "Married or in a de facto relationship (minimum 12 months cohabitation, unless relationship is registered)",
      "Meet health and character requirements",
      "Sponsor must be approved and meet income/character criteria"
    ],
    importantNote: "Partner visa applications require extensive evidence across four relationship pillars: financial (joint accounts, shared expenses), social (photos, statements from friends/family), household (shared living arrangements), and commitment (future plans, joint property). Weak evidence in any pillar can lead to refusal.",
    keyBenefits: [
      "Subclass 820/801 and 309/100 applications",
      "Comprehensive evidence compilation and formatting",
      "Parent and Child visa processing",
      "De facto relationship registration advice"
    ],
    processSteps: [
      { title: "Relationship Evidence Audit", desc: "We thoroughly audit your financial, social, household, and commitment evidence to identify gaps before lodgement." },
      { title: "Statutory Declarations", desc: "We draft robust applicant, sponsor, and third-party statutory declarations that tell your relationship story compellingly." },
      { title: "Two-Stage Lodgement", desc: "We lodge the temporary and permanent stages concurrently, ensuring all documents are correctly certified and formatted." },
      { title: "Ongoing Management", desc: "We manage all Department correspondence and prepare you for any potential interview or additional evidence requests." }
    ],
    faqs: [
      { q: "Do we need to be married to apply for a Partner Visa?", a: "No. De facto couples are fully eligible for Partner Visas. However, you generally need to prove at least 12 months of living together, unless your relationship is officially registered with a state/territory registry." },
      { q: "How long does a Partner Visa take to process?", a: "Onshore Partner Visa (820/801) processing typically takes 12-24 months for the temporary stage. Applicants receive a Bridging Visa with full work and study rights while waiting. The permanent stage (801) is assessed approximately 2 years after the temporary grant." },
      { q: "What if we have been in a long-distance relationship?", a: "Long-distance relationships face additional scrutiny. We help you compile strong evidence of ongoing communication, visits, future plans, and financial interdependence to overcome the challenge of not living together continuously." },
      { q: "Can my partner work while the visa is being processed?", a: "Yes. If you apply onshore, your partner will be granted a Bridging Visa A with full work rights while the application is being processed." },
      { q: "What is the visa application charge?", a: "The Partner Visa application charge is currently approximately AUD $8,850 (2026 rates). Additional charges apply for any secondary applicants included in the application." }
    ]
  },
  {
    id: "visa-extensions",
    title: "PSW/TR (485)",
    description: "Transition from a Student Visa to a Temporary Graduate Visa (Subclass 485).",
    icon: "ShieldCheck",
    overview: "The Temporary Graduate Visa (Subclass 485) is one of the most valuable visas for international students who have completed their studies in Australia. It allows you to live, study, and work in Australia full-time after finishing your course, giving you time to gain professional experience, pursue skilled migration, or complete a Professional Year Program. The visa has two streams: the Post-Study Work (PSW) stream for Bachelor's degree holders and above, and the Graduate Work (GW) stream for VET and trade graduates. Duration ranges from 2 to 6 years depending on your qualification level and study location.",
    eligibility: [
      "Held a Student Visa (Subclass 500) within the last 6 months",
      "Completed an eligible Australian qualification (minimum 2 academic years)",
      "Under 50 years of age at time of application",
      "Meet English language requirements (IELTS 6.0 overall or equivalent)",
      "Hold valid health insurance and meet character requirements"
    ],
    importantNote: "You must apply for the 485 visa within 6 months of the date on your course completion letter — NOT your graduation ceremony date. Missing this deadline means losing your eligibility entirely. Contact us immediately upon receiving your completion letter.",
    keyBenefits: [
      "Post-Study Work stream applications (2-4 years)",
      "Graduate Work stream processing for VET graduates",
      "Extended stay for regional study graduates (up to 6 years)",
      "Migration pathway planning post-485"
    ],
    processSteps: [
      { title: "Eligibility Check", desc: "We verify your course meets the Australian Study Requirement (minimum 92 weeks of study over at least 16 calendar months)." },
      { title: "English & AFP Checks", desc: "We organise your English test scores (IELTS/PTE), Australian Federal Police (AFP) clearance, and health examination." },
      { title: "Application Lodgement", desc: "We prepare and lodge the complete application within the strict 6-month deadline from your course completion date." },
      { title: "Bridging Visa", desc: "Once lodged, you receive a Bridging Visa with full work rights while your 485 is being processed." }
    ],
    faqs: [
      { q: "When must I apply for the 485 visa?", a: "You must apply within 6 months of the date on your course completion letter (NOT your graduation ceremony date). If you miss this deadline, you permanently lose eligibility. We recommend starting the process as soon as you receive your completion letter." },
      { q: "Do I need a skills assessment for the 485?", a: "The Post-Study Work (PSW) stream does NOT require a skills assessment. However, the Graduate Work (GW) stream — typically for VET/trade graduates — does require a positive skills assessment from the relevant authority." },
      { q: "How long is the 485 visa valid for?", a: "PSW stream: 2 years for Bachelor's, 3 years for Master's, 4 years for Doctoral graduates. Regional study graduates may receive an additional 1-2 years (up to 6 years total). Graduate Work stream: 18 months." },
      { q: "Can I use the 485 to apply for PR?", a: "Yes, the 485 visa is a critical stepping stone. You can use the time to gain Australian work experience (extra migration points), complete a Professional Year (+5 points), and improve your English scores while lodging a skilled migration application." },
      { q: "Can I include my partner on the 485?", a: "Yes, your spouse/partner and dependent children can be included as subsequent entrants on your 485 visa application." }
    ]
  },
  {
    id: "appeals",
    title: "ART Appeals",
    description: "Professional representation for visa refusals and cancellations at the Tribunal.",
    icon: "Scale",
    overview: "Has your visa been refused or cancelled? You may have the right to appeal to the Administrative Review Tribunal (ART). Visa refusals are incredibly stressful and can jeopardize your entire future in Australia. Our senior migration agents specialize in complex appeals and provide aggressive representation to overturn negative decisions. We meticulously analyze the Department's decision record, identify legal and factual errors, prepare comprehensive submissions, and represent you at the hearing to fight for your right to remain in Australia.",
    eligibility: [
      "Must have received a formal visa refusal or cancellation notice",
      "Must be within the strict statutory time limit (usually 21 days for onshore applicants)",
      "The decision must be merits-reviewable under the Migration Act"
    ],
    importantNote: "Time is of the essence. You strictly have 21 days (for most onshore decisions) from the date of the refusal notice to lodge an appeal with the ART. If you miss this deadline, you permanently lose your right to appeal and may become unlawful.",
    keyBenefits: [
      "Immediate assessment of appeal prospects and strategy",
      "Preparation of comprehensive legal submissions and witness statements",
      "Expert representation at the ART hearing",
      "Bridging visa reinstatement and work rights management"
    ],
    processSteps: [
      { title: "Decision Review", desc: "We urgently analyze the refusal/cancellation letter and the Department's file to identify legal errors and formulate an appeal strategy." },
      { title: "Tribunal Lodgement", desc: "We lodge the appeal within the strict 21-day timeframe, securing your Bridging Visa to ensure you remain lawful." },
      { title: "Evidence Gathering", desc: "We work with you to compile compelling new evidence, statutory declarations, and expert reports to address the reasons for refusal." },
      { title: "Hearing Representation", desc: "We conduct mock hearings to prepare you, draft detailed legal submissions, and advocate for you before the Tribunal Member." }
    ],
    faqs: [
      { q: "How long do I have to appeal?", a: "Strictly 21 days for most onshore refusals, and sometimes as little as 7 days for cancellations. Miss this deadline, and you lose your right to appeal. Contact us immediately." },
      { q: "Can I stay in Australia during the appeal?", a: "Yes, you will generally be granted a Bridging Visa (usually with the same conditions as your previous visa) that allows you to remain lawfully in Australia until the ART makes a decision." },
      { q: "How long does the ART process take?", a: "Processing times vary significantly depending on the visa subclass. Some appeals take 6-12 months, while others (like Partner Visas) can take 2-3 years. You remain lawful during this entire period." },
      { q: "Can I work while waiting for the ART hearing?", a: "Usually, yes. Your Bridging Visa will typically carry over the work rights of the visa you held before applying. If you don't have work rights, we can often apply for them based on financial hardship." }
    ]
  },
  {
    id: "citizenship",
    title: "Citizenship Applications",
    description: "Complete support for acquiring Australian Citizenship.",
    icon: "Landmark",
    overview: "Becoming an Australian citizen is the final and most rewarding step in your migration journey. It grants you the right to vote, hold an Australian passport, and live in Australia permanently without visa conditions. While the process may seem straightforward, miscalculating residency periods or failing to provide sufficient character evidence can lead to delays or refusal. We assist eligible permanent residents with their citizenship applications, ensuring all residency, character, and identity requirements are perfectly documented.",
    eligibility: [
      "Hold Australian Permanent Residency",
      "Meet the general residence requirement (4 years lawful residence, including 12 months as a PR)",
      "Be of good character (no serious criminal convictions)",
      "Intend to reside in or maintain a close and continuing association with Australia",
      "Pass the Australian Citizenship Test (unless exempt)"
    ],
    importantNote: "The residency calculator can be complex if you have travelled outside Australia frequently. You must not have been absent for more than 12 months in the past 4 years, and no more than 90 days in the 12 months immediately before applying.",
    keyBenefits: [
      "Accurate residency requirement calculation",
      "Complex character requirement review and submissions",
      "Complete application compilation and lodgement",
      "Citizenship test and interview preparation guidance"
    ],
    processSteps: [
      { title: "Eligibility & Residency Check", desc: "We carefully calculate your travel history to confirm you meet the strict 4-year residency requirement." },
      { title: "Document Compilation", desc: "We compile your identity, character (overseas police clearances), and supporting documents." },
      { title: "Lodgement", desc: "We submit the application and liaise with the Department regarding your interview date." },
      { title: "Citizenship Test", desc: "We provide resources to help you pass the citizenship test and attend the ceremony." }
    ],
    faqs: [
      { q: "When can I apply for Australian citizenship?", a: "You must have lived in Australia on a valid visa for 4 years immediately before applying, including the last 12 months as a Permanent Resident." },
      { q: "Can I leave Australia while waiting for my citizenship?", a: "Yes, but you must have a valid travel facility (Resident Return Visa) on your permanent visa to return to Australia. Citizenship processing can take 6-12 months." },
      { q: "What happens if I fail the citizenship test?", a: "You can retake the test on the same day if time permits, or you can book another appointment. There is no penalty for failing, and you can try again." },
      { q: "Do I need to renounce my current citizenship?", a: "Australia allows dual citizenship. However, you must check if your home country allows it, as some countries automatically revoke your citizenship when you acquire another." }
    ]
  },
  {
    id: "gte-compliance",
    title: "GTE & Visa Compliance",
    description: "Expert guidance in preparing GTE statements and adhering to visa conditions.",
    icon: "ShieldCheck",
    overview: "Maintaining your visa status is just as important as obtaining it. The Department of Home Affairs strictly monitors visa conditions, particularly regarding work hours, course progression, and maintaining enrolment. We provide proactive compliance advice to help you avoid breaches, and if you are facing a potential visa cancellation (such as a Notice of Intention to Cancel), our agents offer rapid response representation to protect your status.",
    eligibility: [
      "Current visa holders subject to specific conditions (e.g., 8105, 8202)",
      "Students facing 'Show Cause' notices from education providers",
      "Individuals issued a 'Notice of Intention to Cancel' (NOIC) by the Department"
    ],
    importantNote: "If you receive a Notice of Intention to Cancel (NOIC) from the Department, you typically have only 5 to 28 days to respond. Do not ignore these notices. Immediate legal intervention is required to avoid cancellation and a subsequent 3-year ban on returning to Australia.",
    keyBenefits: [
      "Custom GTE/GS statement drafting for complex cases",
      "Urgent response to s56 (Request for Information) notices",
      "Strategic defense against Notice of Intention to Cancel (NOIC)",
      "Course change (Standard 7) compliance and release letters"
    ],
    processSteps: [
      { title: "Situation Analysis", desc: "We immediately review your visa conditions, academic progression, or the specific compliance issue raised by the Department." },
      { title: "Document Drafting", desc: "We draft legally sound responses, statutory declarations, or 'Show Cause' submissions on your behalf." },
      { title: "Submission & Liaison", desc: "We submit the response directly to the Department or your education provider and handle all subsequent communication." },
      { title: "Resolution Strategy", desc: "We map out a clear strategy to return you to full compliance and secure your ongoing stay in Australia." }
    ],
    faqs: [
      { q: "What happens if I breach a visa condition?", a: "Your visa may be subject to cancellation. This can lead to detention, removal from Australia, and a 3-year exclusion period. It is critical to seek professional advice immediately rather than attempting to hide the breach." },
      { q: "Can I change my course without breaching my visa?", a: "It depends on your specific visa conditions (such as Condition 8202). Generally, if you have not completed 6 months of your principal course, you need a 'Release Letter' from your current provider. We can assist with this process." },
      { q: "What is a 'Show Cause' notice?", a: "A 'Show Cause' notice is usually issued by your university/college if you fail to meet academic progress or attendance requirements. We help you draft a compelling response with supporting evidence to avoid being reported to the Department." }
    ]
  },
  {
    id: "skill-assessment-migration",
    title: "Skill Assessment",
    description: "Assistance with obtaining positive skill assessments for migration purposes.",
    icon: "ClipboardCheck",
    overview: "A positive skill assessment is the mandatory first step for all points-tested skilled migration visas (189, 190, 491) and employer-sponsored visas. Each occupation is assessed by a specific authority (e.g., VETASSESS, TRA, ACS, Engineers Australia, CPA), and each has entirely different rules, evidentiary requirements, and processing times. We manage the entire complex documentation process, ensuring your qualifications and work experience perfectly align with Australian ANZSCO standards.",
    eligibility: [
      "Hold a qualification relevant to your nominated occupation",
      "Possess verifiable post-qualification work experience (requirements vary by authority)",
      "Meet English language requirements specific to the assessing body",
      "Ability to provide detailed tax, superannuation, and employment records"
    ],
    importantNote: "Assessing bodies are extremely strict regarding work experience evidence. Cash-in-hand employment or work experience without corresponding tax/bank records is almost never accepted. We conduct a rigorous audit of your documents before submission.",
    keyBenefits: [
      "Comprehensive document auditing and formatting to authority standards",
      "RPL (Recognition of Prior Learning) and CDR report guidance",
      "Direct liaison with assessing bodies to resolve complex queries",
      "Fast-track processing requests where available"
    ],
    processSteps: [
      { title: "Authority & ANZSCO Identification", desc: "We map your specific background to the correct ANZSCO occupation code and identify the corresponding assessing authority." },
      { title: "Evidence Compilation", desc: "We gather and audit your qualifications, payslips, tax returns, bank statements, and draft detailed employment reference letters." },
      { title: "Submission & Management", desc: "We lodge the assessment and handle any requests for further information (RFI) from the assessor." },
      { title: "Outcome & Next Steps", desc: "Upon receiving a positive assessment, we immediately integrate it into your SkillSelect Expression of Interest." }
    ],
    faqs: [
      { q: "How long does a skills assessment take?", a: "Standard processing ranges from 8 to 16 weeks depending on the authority. Some bodies, like VETASSESS and Engineers Australia, offer fast-track options (10-20 days) for an additional fee." },
      { q: "Do I need a skills assessment for an employer-sponsored visa?", a: "Often, yes. While the 482 visa only requires it for certain trade occupations or specific passports, the permanent 186 visa (Direct Entry) strictly requires a positive skills assessment." },
      { q: "What if my degree is not directly related to my work?", a: "For some authorities (like VETASSESS), a highly relevant degree is required. For others (like ACS), extensive work experience or an RPL report can substitute for a formal IT qualification. We advise you on the best path." }
    ]
  },
  {
    id: "skills-in-demand-482",
    title: "Skills in Demand (482)",
    description: "Employer-sponsored pathway for skilled workers to live and work in Australia temporarily with a route to PR.",
    icon: "Handshake",
    overview: "The Skills in Demand visa (Subclass 482), formerly the Temporary Skill Shortage (TSS) visa, is Australia's primary employer-sponsored temporary work visa. It allows businesses to address genuine skill shortages by sponsoring qualified overseas workers for up to 4 years. Crucially, recent reforms mean that ALL streams of the 482 visa now offer a clear, accessible pathway to Permanent Residency (via the Subclass 186 TRT stream) after working for your sponsor for a specified period. We assist both employers with their sponsorship/nomination applications and employees with their visa applications.",
    eligibility: [
      "Must have an approved Australian employer willing to sponsor you",
      "Occupation must be on the relevant consolidated skilled occupation list",
      "Minimum 2 years of relevant post-qualification work experience",
      "Salary must meet the Temporary Skilled Migration Income Threshold (TSMIT)",
      "Meet English language, health, and character requirements"
    ],
    importantNote: "The employer MUST be approved as a Standard Business Sponsor before they can nominate you. The salary offered must meet both the Annual Market Salary Rate (AMSR) for the occupation and the TSMIT (currently $73,150 AUD as of 2026, subject to indexation).",
    keyBenefits: [
      "Clear pathway to Permanent Residency (186 TRT) from all streams",
      "Up to 4 years stay with full work rights for you and your family",
      "180 days to find a new sponsor if you leave your current employer",
      "No age limit for the 482 visa itself (though limits apply for the PR transition)"
    ],
    processSteps: [
      { title: "Standard Business Sponsorship (SBS)", desc: "We assist the employer in applying for SBS approval to legally sponsor overseas workers." },
      { title: "Nomination Lodgement", desc: "We prepare the nomination, proving genuine need, Labour Market Testing (if applicable), and salary compliance." },
      { title: "Visa Application", desc: "We lodge the applicant's visa, managing skills assessments (if required), English tests, and police checks." },
      { title: "PR Transition Planning", desc: "Upon grant, we map out the exact timeline and requirements for your eventual transition to Permanent Residency." }
    ],
    faqs: [
      { q: "What are the visa streams for the 482?", a: "There are three main streams: Specialist Skills (high-income earners ≥$135K), Core Skills (occupations in shortage, income ≥TSMIT), and Labour Agreement (for specific industries like meat processing or aged care)." },
      { q: "Is there an age limit?", a: "No, there is no age limit to apply for the 482 visa. However, when you transition to PR (Subclass 186), you generally must be under 45 years of age, unless a specific exemption applies." },
      { q: "Can I change employers on a 482 visa?", a: "Yes. Under recent reforms, if you leave your sponsoring employer, you have 180 days to find a new approved sponsor, apply for a different visa, or depart Australia. You can work during this 180-day period." },
      { q: "Do I need a skills assessment for the 482?", a: "It depends. A formal skills assessment is only mandatory for specific trade occupations and certain passport holders. However, you must always prove you have the skills and at least 2 years of relevant experience." }
    ]
  },
  {
    id: "skilled-regional-191",
    title: "Skilled Regional PR (191)",
    description: "Permanent Residency for provisional visa holders who have lived and worked in regional Australia.",
    icon: "Landmark",
    overview: "The Subclass 191 Permanent Residence (Skilled Regional) visa is the highly anticipated PR pathway for holders of a Subclass 491 or 494 provisional visa. If you have committed to living, working, and studying in a designated regional area of Australia for at least 3 years, this visa grants you full permanent residency. Unlike the initial provisional visas, the 191 visa is not points-tested, does not require an employer sponsor, and no longer has a minimum income threshold requirement, making the transition to PR smoother than ever.",
    eligibility: [
      "Hold an eligible visa (Subclass 491 or 494) for at least 3 years",
      "Have lived, worked, and studied in a designated regional area for at least 3 years",
      "Have complied with all conditions on your provisional visa (especially Condition 8579)",
      "Provide Notices of Assessment (NOAs) from the ATO for 3 eligible income years"
    ],
    importantNote: "A massive recent change to the 191 visa is the removal of the minimum income threshold. There is no longer a requirement to earn above $53,900 or $73,150. You simply need to provide ATO Notices of Assessment for 3 years to prove you were working, regardless of the income amount.",
    keyBenefits: [
      "Full Permanent Residency — you can now live and work anywhere in Australia",
      "No points test required for the 191 stage",
      "No employer sponsorship required",
      "Direct pathway to Australian Citizenship after meeting residency requirements"
    ],
    processSteps: [
      { title: "Compliance Audit", desc: "We review your residential and employment history to ensure you have strictly adhered to regional visa conditions." },
      { title: "Document Preparation", desc: "We gather your 3 years of ATO Notices of Assessment, regional evidence (leases, utility bills, payslips), and updated health/character documents." },
      { title: "Visa Lodgement", desc: "We lodge the 191 visa application ensuring a decision-ready submission for faster processing." },
      { title: "Grant & Freedom", desc: "Once granted, your regional restrictions are lifted, granting you unrestricted permanent residency." }
    ],
    faqs: [
      { q: "Do I have to stay in my nominating state?", a: "While on the 491, you must live in a designated regional area. However, Department policy generally allows you to move to a different designated regional area in a different state, provided you update your details. Once the 191 is granted, you can live anywhere." },
      { q: "What is the minimum income requirement for the 191?", a: "As of recent legislative changes, there is NO minimum income requirement. You must simply provide 3 years of ATO Notices of Assessment to show you have been economically active." },
      { q: "Can I include a partner who wasn't on my original 491?", a: "Yes, you can add a spouse or de facto partner to your 191 application, provided you can prove the relationship is genuine and continuing." }
    ]
  },
  {
    id: "training-visa-407",
    title: "Training Visa (407)",
    description: "Temporary visa for workplace-based occupational training and professional development in Australia.",
    icon: "Wrench",
    overview: "The Subclass 407 Training Visa allows individuals to undertake structured, workplace-based occupational training in Australia for up to 2 years. It is designed to enhance your skills for your current occupation, area of study, or field of expertise. Note: as of March 2026, sponsorship and nomination must be approved before the visa application can be lodged.",
    keyBenefits: [
      "Up to 2 years of structured workplace training",
      "Enhance skills in your current occupation or field of study",
      "Include immediate family members in your application",
      "Gain valuable Australian workplace experience"
    ],
    processSteps: [
      { title: "Sponsorship Approval", desc: "Your employer/organisation must first be approved as a Temporary Activities Sponsor." },
      { title: "Nomination Approval", desc: "Your sponsor lodges and receives approval for a Training Visa nomination." },
      { title: "Visa Application", desc: "Lodge your visa application after both sponsorship and nomination are approved." }
    ],
    faqs: [
      { q: "Can I work outside my training?", a: "No. Condition 8102 strictly limits you to work that is directly related to your approved training program." },
      { q: "Is this a pathway to PR?", a: "No, the 407 is a temporary training visa. However, the skills and experience gained can support future skilled migration applications." },
      { q: "Do I need health insurance?", a: "Yes, you must maintain adequate private health insurance for the entire duration of your stay." }
    ]
  }
];

export const studyServices: ServiceDetail[] = [
  {
    id: "university-admissions",
    title: "University & College Admissions",
    description: "End-to-end support for applying to Australia's top universities and vocational colleges.",
    icon: "Landmark",
    overview: "Choosing the right institution is the foundation of your Australian journey. We partner with over 400 universities, vocational education and training (VET) colleges, and English language schools across Australia. Because we are an authorized representative, we offer priority application processing, waived application fees, and direct lines of communication with admission teams to secure your Offer Letter faster. Whether you're aiming for a prestigious Group of Eight (Go8) university or an affordable regional college for migration purposes, we manage the entire enrollment process from application to Confirmation of Enrolment (CoE).",
    eligibility: [
      "Completed high school (Year 12 equivalent) or previous tertiary study",
      "Meet the academic entry requirements for your chosen course",
      "Meet English language requirements (IELTS/PTE)",
      "Provide a valid passport and academic transcripts"
    ],
    importantNote: "Our university admission services are 100% free for international students. We do not charge processing fees to lodge your applications, as we are officially funded by our partner education institutions.",
    keyBenefits: [
      "Free admission processing and application fee waivers (save $100-$150 per application)",
      "Priority processing and direct university liaison",
      "RPL (Recognition of Prior Learning) and credit transfer negotiation",
      "Concurrent CoE packaging (e.g., ELICOS + Bachelor)"
    ],
    processSteps: [
      { title: "Course Matching & Selection", desc: "We align your academic background, budget, and long-term goals with 3-5 suitable institutions." },
      { title: "Document Certification", desc: "We verify and certify your academic transcripts, English scores, and passport." },
      { title: "Direct Lodgement", desc: "We submit your applications directly through our agent portals for priority assessment." },
      { title: "Offer & CoE Issuance", desc: "We guide you through accepting your offer, arranging payment, and securing your CoE for visa lodgement." }
    ],
    faqs: [
      { q: "Is there a fee for your admission services?", a: "No, our admission services are completely free for international students. We are officially appointed representatives funded by the universities." },
      { q: "How long does it take to get an Offer Letter?", a: "Typically 1-2 weeks, but our priority partnerships often result in 48-hour turnarounds for complete applications." },
      { q: "Can I apply to multiple universities at once?", a: "Yes, we usually recommend applying to 2-3 universities to give you options regarding scholarships and campus locations." },
      { q: "What if my English score is too low?", a: "We can package your main course with an ELICOS (English Language Intensive Courses for Overseas Students) program, allowing you to study English first before starting your degree." }
    ]
  },
  {
    id: "scholarship",
    title: "Scholarship Assistance",
    description: "Identify and apply for merit-based and regional scholarships to reduce your tuition fees.",
    icon: "GraduationCap",
    overview: "Australian education is a significant investment. We help international students access millions of dollars in available scholarships, grants, and bursaries to significantly reduce tuition costs. Our team maintains an active database of university-specific, government, and regional scholarships. We don't just find the scholarships; we help you craft compelling Statements of Purpose (SOP) and build strong applications to maximize your chances of success.",
    eligibility: [
      "Applied for or holding an offer for an Australian institution",
      "Strong academic record (for merit-based scholarships)",
      "Willingness to study in designated areas (for regional scholarships)",
      "Meet specific nationality or diversity criteria (where applicable)"
    ],
    importantNote: "Many regional universities offer automatic 15% to 30% international student bursaries simply for applying. You do not necessarily need a perfect GPA to receive substantial financial assistance.",
    keyBenefits: [
      "Access to up to 50% tuition fee reductions and full-ride options",
      "Destination Australia and regional scholarship profiling",
      "Vice-Chancellor merit scholarship applications",
      "Automated scholarship matching based on your profile"
    ],
    processSteps: [
      { title: "Profile Analysis", desc: "We comprehensively assess your GPA, extracurriculars, and background against available scholarship criteria." },
      { title: "Opportunity Mapping", desc: "We present a curated list of scholarships you are highly likely to secure." },
      { title: "Statement of Purpose Drafting", desc: "We help you draft, review, and refine compelling scholarship essays and SOPs." },
      { title: "Application Lodgement", desc: "We submit concurrent scholarship applications alongside your university admissions." }
    ],
    faqs: [
      { q: "Do I need top grades to get a scholarship?", a: "Not always. While Vice-Chancellor merit scholarships require high GPAs, many universities offer automatic 'International Student Bursaries' or 'Regional Scholarships' that grant 15-25% off tuition to all eligible applicants from specific countries." },
      { q: "When should I apply for scholarships?", a: "Scholarship applications should usually be submitted simultaneously with your course application. Some highly competitive government scholarships close 6-9 months before the semester begins." },
      { q: "Can I get a full scholarship (100%)?", a: "Full scholarships for international students (like the Australia Awards) are highly competitive and usually require government sponsorship. Most university scholarships cover 15% to 50% of tuition fees." },
      { q: "Do scholarships cover living expenses?", a: "Most university scholarships only cover tuition fees. However, some specific grants (like the Destination Australia scholarship) provide a cash stipend of $15,000 per year to help with living costs." }
    ]
  },
  {
    id: "counselling",
    title: "Career & Study Counselling",
    description: "Unsure what to study? Let our expert counselors map your education to your career goals.",
    icon: "UserCheck",
    overview: "Your choice of course often dictates your Permanent Residency (PR) eligibility down the line. Our counselors are uniquely trained in both education admissions and migration pathways, ensuring your study plan perfectly aligns with Australia's skilled occupation lists. We take the time to understand your passions, budget, and long-term goals, providing data-driven advice on future job demand, salary expectations, and state-specific migration trends.",
    eligibility: [
      "Open to prospective international students (offshore)",
      "Current international students looking to change courses or providers",
      "Graduates seeking further studies for migration points"
    ],
    importantNote: "Never choose a course solely because it's cheap. We ensure your selected course is CRICOS registered, meets the Australian Study Requirement (ASR) for the 485 visa, and leads to a relevant skills assessment.",
    keyBenefits: [
      "Strategic PR pathway mapping from Day 1",
      "Course-to-career alignment based on current skilled occupation lists",
      "Comprehensive budget planning and cost-of-living analysis",
      "City and campus selection based on state sponsorship (190/491) trends"
    ],
    processSteps: [
      { title: "Discovery Session", desc: "A detailed 1-on-1 consultation to understand your academic history, passions, and long-term migration goals." },
      { title: "Pathway Mapping", desc: "We present 2-3 tailored study-to-migration pathways, highlighting the pros, cons, and costs of each." },
      { title: "Institution Selection", desc: "We shortlist the best universities or colleges that fit your chosen pathway and budget." },
      { title: "Action Plan", desc: "We provide a concrete timeline for English tests, admissions, and visa lodgement to execute the plan." }
    ],
    faqs: [
      { q: "Can I change my course after I arrive in Australia?", a: "Yes, but there are strict visa rules (Standard 7). If you want to change providers within the first 6 months of your principal course, you must obtain a 'Release Letter' from your current university. We can guide you through this." },
      { q: "What courses offer the best PR pathways?", a: "Currently, occupations in Healthcare (Nursing, Social Work), IT, Engineering, Education (Teaching), and specific Trades (Chef, Automotive) have strong PR pathways. We match these trends to your interests." },
      { q: "Do I have to study a degree, or can I do a trade course?", a: "Trade courses (like Commercial Cookery or Carpentry) are highly popular and offer excellent PR pathways. They are often cheaper than university degrees but require a specific Job Ready Program (JRP) for the skills assessment." },
      { q: "Should I study in a regional area?", a: "Studying in a designated regional area (like Adelaide, Perth, or Hobart) provides significant migration benefits, including 5 extra PR points and access to longer post-study work visas (Subclass 485) and State Sponsorship (Subclass 491)." }
    ]
  },
  {
    id: "pte-preparation",
    title: "PTE Preparation",
    description: "Comprehensive coaching for Pearson Test of English (PTE) success.",
    icon: "BookOpen",
    overview: "Achieving a high score in the Pearson Test of English (PTE) is often the fastest way to secure crucial migration points (up to 20 points for Superior English). Our structured PTE preparation classes are designed by certified Pearson trainers to help you achieve your target score efficiently. Unlike IELTS, PTE is fully computer-scored, meaning success relies heavily on understanding the algorithm's scoring criteria. We focus heavily on test strategies, time management, algorithmic templates, and extensive AI-scored practice.",
    eligibility: [
      "Open to all international students and migrants",
      "Basic understanding of English required before commencing intensive modules"
    ],
    importantNote: "The PTE algorithm heavily rewards oral fluency and pronunciation in the Speaking module. Hesitation or self-correction can severely impact your score. Our classes utilize specialized software to analyze and correct your pitch and pacing.",
    keyBenefits: [
      "Small class sizes (max 10) for highly personalized attention",
      "Unlimited mock tests with instantaneous AI scoring feedback",
      "Flexible timetable (morning, evening, and weekend batches)",
      "Targeted templates for writing and speaking modules"
    ],
    processSteps: [
      { title: "Diagnostic Test", desc: "You complete a full mock test on day one to assess your baseline score and identify specific weaknesses." },
      { title: "Intensive Coaching", desc: "We focus on mastering the 20 different question types, prioritizing high-yield sections like Read Aloud and Write from Dictation." },
      { title: "Template Mastery", desc: "You learn and practice our proven, algorithm-friendly templates for the Essay and Describe Image tasks." },
      { title: "Mock Exams", desc: "You complete timed mock exams under exact test conditions to build stamina and confidence." }
    ],
    faqs: [
      { q: "Is PTE easier than IELTS?", a: "Many students find it easier to achieve a high score (equivalent to IELTS 7.0 or 8.0) in PTE because the marking is objective and relies on a computer algorithm rather than a human examiner. Writing and Speaking scores are generally easier to maximize in PTE." },
      { q: "How long does the preparation course take?", a: "Most students achieve their target scores within 4-6 weeks of intensive coaching. However, if you are aiming for 79+ (Superior English), you may need 8-12 weeks depending on your baseline." },
      { q: "How is the PTE scored?", a: "PTE uses an automated scoring system ranging from 10 to 90. Your overall score is based on your performance across all test items. Crucially, tasks are integrated—for example, Reading Aloud affects both your Reading and Speaking scores." }
    ]
  },
  {
    id: "ielts-preparation",
    title: "IELTS Preparation",
    description: "Targeted training to achieve your desired IELTS band score.",
    icon: "BookOpen",
    overview: "Whether you need IELTS for university admission, professional registration (like Nursing or Teaching), or skilled migration, our expert tutors provide the strategies needed to conquer all four test components. We offer tailored streams for both Academic IELTS (required for university and specific skill assessments) and General Training IELTS (often sufficient for PR or trade-based migration). Our curriculum focuses on breaking down the complex grading rubric so you know exactly what the examiners are looking for.",
    eligibility: [
      "Open to all international students and migrants",
      "Intermediate English proficiency recommended before starting"
    ],
    importantNote: "Certain professional bodies (like AHPRA for nurses or AITSL for teachers) strictly require Academic IELTS and generally do not accept PTE. Always check your specific skills assessing authority's requirements before choosing your test.",
    keyBenefits: [
      "Classes taught by former IELTS examiners and certified TESOL trainers",
      "Distinct focus streams for Academic vs. General Training",
      "Weekly timed writing assessments with detailed, line-by-line feedback",
      "Extensive library of official Cambridge past papers"
    ],
    processSteps: [
      { title: "Initial Assessment", desc: "We conduct a speaking and writing assessment to identify your weak areas across the four bands." },
      { title: "Skill Development", desc: "We teach specific techniques for the IELTS format, such as skimming/scanning for Reading and structured paragraphing for Writing." },
      { title: "Speaking Practice", desc: "You participate in weekly 1-on-1 mock speaking interviews focusing on lexical resource and grammatical range." },
      { title: "Final Review", desc: "You complete full-length practice tests under timed conditions to simulate test-day pressure." }
    ],
    faqs: [
      { q: "What band score do I need?", a: "It depends heavily on your goal. Student visas usually require 5.5-6.0. University admissions generally require 6.5. Skilled migration often requires 'Proficient' (7.0 in all bands) or 'Superior' (8.0 in all bands)." },
      { q: "Why is IELTS Writing so difficult?", a: "IELTS Writing requires strict adherence to task achievement, coherence, lexical resource, and grammatical accuracy. Many students fail to score 7.0 because they do not directly answer the prompt or fail to structure their essay logically. Our classes focus heavily on this." },
      { q: "Can I combine scores from two different tests?", a: "No. For migration purposes, you must achieve the required score in a single sitting. However, for certain professional registrations (like Nursing), you may be able to combine scores from two tests taken within 6 months, under strict conditions." }
    ]
  },
  {
    id: "professional-year",
    title: "Professional Year (PY)",
    description: "Enhance your employability and earn extra migration points with PY programs.",
    icon: "BriefcaseBusiness",
    overview: "The Professional Year (PY) Program is a highly sought-after 44-week course designed to bridge the gap between full-time study and professional employment in Australia. Approved by the Department of Home Affairs, it is specifically designed for international graduates in IT (ACS), Engineering (Engineers Australia), and Accounting (CPA/CA). Completing a PY not only provides you with a guaranteed 12-week internship in an Australian workplace but also awards you 5 crucial points towards your skilled migration (PR) points test.",
    eligibility: [
      "Graduated with a related degree in Accounting, IT, or Engineering from an Australian institution",
      "Hold or have applied for a Temporary Graduate Visa (Subclass 485)",
      "Possess a valid positive skills assessment for your occupation",
      "Minimum IELTS score of 6.0 (with no band less than 6.0)"
    ],
    importantNote: "The 5 migration points awarded for completing a PY are only valid for 4 years from the course start date. It is critical to time your enrollment strategically to ensure the points are valid when you submit your Expression of Interest (EOI).",
    keyBenefits: [
      "Earn 5 extra points for Skilled Migration (Subclass 189/190/491)",
      "Guaranteed 12-week internship placement in an Australian company",
      "Fulfills the skills assessment requirement for Accounting graduates",
      "Extensive resume building, interview preparation, and networking"
    ],
    processSteps: [
      { title: "Eligibility & Provider Selection", desc: "We confirm your eligibility and help you choose from top-tier PY providers (e.g., Navitas, Performance Education, Monash Professional Pathways) based on your budget and location." },
      { title: "Enrollment & Visa Linkage", desc: "We handle the enrollment paperwork and ensure your 485 visa status aligns with the course requirements." },
      { title: "Coursework Phase", desc: "You complete 32 weeks of classroom learning focused on Australian workplace culture, business communication, and WHS." },
      { title: "Internship Phase", desc: "You complete a 12-week, full-time internship in your specific field, gaining invaluable local experience." }
    ],
    faqs: [
      { q: "Who is eligible for a Professional Year?", a: "Only international graduates who have completed an Australian degree in Accounting, IT, or Engineering and hold a subclass 485 visa are eligible. Other disciplines do not have an approved PY program." },
      { q: "Is an internship guaranteed?", a: "Yes. All approved PY providers guarantee a 12-week internship placement related to your field of study. In many cases, these internships lead to offers of full-time employment." },
      { q: "Can I do a PY on a Student Visa?", a: "No. You must have applied for, or currently hold, a Temporary Graduate Visa (Subclass 485) to commence a Professional Year program." },
      { q: "How much does it cost?", a: "Costs vary significantly by provider and discipline, ranging from $7,000 to $13,000. We often have access to provider scholarships or promotional pricing to reduce this cost." }
    ]
  }
];

export const otherServices: ServiceDetail[] = [
  {
    id: "oshc",
    title: "Health Insurance (OSHC & OVHC)",
    description: "Mandatory health cover secured at competitive rates from major Australian providers.",
    icon: "HeartPulse",
    overview: "Overseas Student Health Cover (OSHC) is a strict mandatory requirement for all Student Visa (Subclass 500) applicants, and Overseas Visitor Health Cover (OVHC) is required for most other temporary visas (like the 485 or 482). Without valid health insurance covering the exact dates of your intended stay, your visa application will be refused. We partner directly with Australia's leading health funds—Bupa, Medibank, NIB, and Allianz—to generate your policy certificate instantly at no extra cost to you.",
    eligibility: [
      "International students applying for or renewing a Student Visa (OSHC)",
      "Temporary workers and graduates on 485, 482, or 407 visas (OVHC)",
      "Couples and families requiring joint policies"
    ],
    importantNote: "Your OSHC policy must strictly align with your visa dates. For students, the policy must generally cover you from the date you arrive in Australia until 1-2 months after your course end date, depending on the course length.",
    keyBenefits: [
      "Instant policy certificate generation for immediate visa lodgement",
      "Couples and Family cover options correctly structured for DIBP requirements",
      "Easy upgrades, extensions, and refunds if your visa is refused",
      "We guarantee the lowest retail price—no hidden agency fees"
    ],
    processSteps: [
      { title: "Needs Assessment", desc: "We determine the exact start and end dates required based on your course CoE and visa type." },
      { title: "Quote Generation", desc: "We provide comparative quotes across Bupa, Medibank, NIB, and Allianz so you can choose the best value." },
      { title: "Purchase & Issuance", desc: "You securely pay the premium, and we generate the official policy certificate instantly." },
      { title: "Visa Integration", desc: "We attach the active policy number directly to your ImmiAccount visa application." }
    ],
    faqs: [
      { q: "Is it cheaper to buy through you than directly from the provider?", a: "We offer the exact same retail price as the providers, guaranteed. We do not charge processing fees; we simply save you the administrative hassle and ensure the dates perfectly match immigration requirements." },
      { q: "What does OSHC actually cover?", a: "OSHC covers out-of-hospital medical treatment (visiting a GP), in-hospital medical treatment, public hospital shared ward accommodation, some prescription medicines, and emergency ambulance services." },
      { q: "Can I get a refund if my visa is refused?", a: "Yes. If your visa is refused or if you decide not to travel to Australia, you are entitled to a full refund of your premium. We process this refund on your behalf." },
      { q: "Do I have to pay the whole amount upfront?", a: "Yes. For Student Visas (OSHC), the Department requires the entire premium for the full duration of your visa to be paid upfront before the visa is lodged. For OVHC (e.g., 485 visa), monthly payments are usually allowed." }
    ]
  },
  {
    id: "taxation",
    title: "Taxation & Accounting",
    description: "Tax File Number (TFN), ABN setup, and annual tax return filing for international students.",
    icon: "Calculator",
    overview: "Working in Australia means dealing with the Australian Taxation Office (ATO). Whether you are working part-time at a café or launching your own freelance business, strict compliance is required. Our partnered registered tax agents ensure you are legally compliant while maximizing your legal tax refunds. From setting up your initial Tax File Number (TFN) to filing your annual returns and claiming your superannuation when you leave, we handle the financial bureaucracy so you don't have to.",
    eligibility: [
      "All international students and temporary visa holders working in Australia",
      "Individuals starting a sole trader business (Uber, food delivery, freelancing)"
    ],
    importantNote: "The Australian financial year runs from July 1st to June 30th. You must lodge a tax return (or a 'non-lodgment advice' if you didn't work) between July 1st and October 31st every year to avoid heavy ATO fines.",
    keyBenefits: [
      "Free initial TFN (Tax File Number) Registration upon arrival",
      "ABN (Australian Business Number) setup for freelancers and contractors",
      "Maximum legal annual tax return filing by registered tax agents",
      "Departing Australia Superannuation Payment (DASP) claims"
    ],
    processSteps: [
      { title: "TFN/ABN Setup", desc: "We apply for your tax identifiers immediately upon your arrival in Australia." },
      { title: "Record Keeping Advice", desc: "We provide a simple guide on what work-related expenses (uniforms, courses, tools) you can legally claim." },
      { title: "Annual Filing", desc: "Between July and October, our accountants calculate your income, apply deductions, and lodge your return." },
      { title: "Refund Processing", desc: "Your tax refund is deposited directly into your Australian bank account by the ATO." }
    ],
    faqs: [
      { q: "Do international students have to pay tax?", a: "Yes. If you stay in Australia for more than 6 months, you are generally considered an 'Australian resident for tax purposes'. This is good news, as it means you get the tax-free threshold (currently $18,200), meaning you pay 0% tax on the first $18,200 you earn." },
      { q: "Do I need a TFN or an ABN?", a: "If you are an employee (e.g., working in a restaurant or office), you only need a TFN. If you are an independent contractor (e.g., driving for Uber, freelance design, sub-contracting), you need both a TFN and an ABN." },
      { q: "What happens to my superannuation when I leave Australia?", a: "Employers must pay superannuation (retirement fund) on top of your wages. When your visa expires and you leave Australia permanently, we can help you claim this money back through a DASP application." }
    ]
  },
  {
    id: "skill-assessment",
    title: "Professional Skill Assessments",
    description: "Guidance through the rigorous documentation process for VETASSESS, TRA, ACS, etc.",
    icon: "ClipboardCheck",
    overview: "Before applying for skilled migration, you must prove your qualifications and experience meet Australian standards. This is often the most difficult, document-heavy part of the migration journey. We manage the entire process across all major assessing authorities, ensuring your portfolio is bulletproof before submission.",
    eligibility: [
      "Graduates seeking post-study migration pathways",
      "Offshore professionals applying for skilled migration"
    ],
    importantNote: "Even a minor discrepancy in employment dates between your reference letters and your tax documents can lead to a refusal. We audit every single document against authority guidelines.",
    keyBenefits: [
      "RPL (Recognition of Prior Learning) guidance for IT professionals",
      "Document auditing, formatting, and statutory declaration drafting",
      "Direct liaison with assessing bodies (VETASSESS, TRA, ACS, CPA)",
      "Fast-track processing requests to beat invitation round deadlines"
    ],
    processSteps: [
      { title: "Authority Identification", desc: "Identify the correct assessing body for your specific ANZSCO code." },
      { title: "Evidence Compilation", desc: "Gather and audit payslips, tax returns, and draft precise reference letters." },
      { title: "Submission & RFI", desc: "Lodge the assessment and rapidly handle any requests for further information (RFI)." },
      { title: "Outcome Verification", desc: "Receive the positive assessment and update your SkillSelect EOI." }
    ],
    faqs: [
      { q: "How long does a skill assessment take?", a: "Standard processing ranges from 4 to 16 weeks depending on the authority. Fast-track options (where available) can reduce this to 10-20 days." },
      { q: "Can I use overseas work experience?", a: "Yes, provided it was completed post-qualification, at the appropriate skill level, and can be fully verified with tax and bank records." }
    ]
  },
  {
    id: "business-setup",
    title: "Business Setup & Advisory",
    description: "Strategic guidance on corporate structures and ASIC compliance for entrepreneurial migrants.",
    icon: "Building2",
    overview: "Looking to start your own business, work as an independent contractor, or invest in Australia? Our business advisory team provides end-to-end setup for international entrepreneurs, ensuring full legal, tax, and visa compliance. Setting up a business in Australia involves strict regulations governed by ASIC (Australian Securities and Investments Commission) and the ATO. We guide you through choosing the right corporate structure—whether a Sole Trader for your freelance work, or a registered Pty Ltd Company to sponsor yourself or others down the line.",
    eligibility: [
      "International students looking to freelance or start a small business",
      "Graduates on a 485 visa seeking self-employment",
      "Migrants looking to establish a Pty Ltd company for sponsorship purposes"
    ],
    importantNote: "While you can legally register a business on a Student Visa, you are still strictly bound by Condition 8105 (the 48-hour per fortnight work limitation). This includes time spent managing your own business. Breaching this condition can lead to visa cancellation.",
    keyBenefits: [
      "Company registration (ASIC) and structuring advice",
      "Business plan drafting for State Sponsorship (Subclass 491 SBO) pathways",
      "ABN, TFN, GST, and PAYG registration",
      "Ongoing corporate secretarial and BAS support"
    ],
    processSteps: [
      { title: "Consultation & Structuring", desc: "We discuss your business model, expected revenue, and visa implications to choose the right structure (Sole Trader vs. Company)." },
      { title: "Registration & Licensing", desc: "We register your company with ASIC, secure your ABN/TFN, and advise on any industry-specific licenses required." },
      { title: "Financial Setup", desc: "We help you set up compliant bookkeeping software (like Xero) and open corporate bank accounts." },
      { title: "Ongoing Compliance", desc: "We provide quarterly BAS (Business Activity Statement) support and annual corporate tax filings." }
    ],
    faqs: [
      { q: "Can I start a business on a student visa?", a: "Yes, you can register an ABN, operate as a sole trader, or even register a company. However, the time you spend working in or managing the business counts towards your 48-hour per fortnight visa restriction during semester." },
      { q: "Can I sponsor myself for a visa if I start a company?", a: "Self-sponsorship (e.g., via a 482 visa) is possible but highly complex. The business must be actively operating, genuinely need the position, and meet strict financial thresholds. We provide specialized advice on this pathway." },
      { q: "Do I need to register for GST?", a: "You only need to register for Goods and Services Tax (GST) if your business's gross income (turnover) reaches or is expected to reach $75,000 per year. If you are an Uber/Rideshare driver, you must register for GST immediately, regardless of your income." }
    ]
  }
];

import { 
  Stethoscope, Monitor, HardHat, Briefcase, ChefHat, Wrench, LucideIcon
} from "lucide-react";

export interface Program {
  title: string;
  description: string;
  avgFee: string;
  duration: string;
  intakes: string;
  requirements: string;
  outcomes: string;
  stats: { label: string; value: string };
}

export interface CourseData {
  id: string;
  title: string;
  icon: LucideIcon; // Lucide Icon component
  image: string;
  description: string;
  longDescription: string;
  seoKeywords: string[];
  tagline: string;
  programs: Program[];
  universities: { name: string; logo: string; location: string }[];
  color: string;
  bgLight: string;
  borderLight: string;
  iconColor: string;
}

export const detailedCourses: CourseData[] = [
  {
    id: "health",
    title: "Health & Science",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    description: "Australia's healthcare system is world-renowned. Studying health and medical sciences opens doors to globally recognized qualifications with excellent employment prospects and clear migration pathways.",
    longDescription: "Australia is home to some of the world's most advanced healthcare and biomedical research institutions. International students who choose to study Health & Science gain access to cutting-edge facilities, world-class clinical placements, and qualifications recognised by employers and health authorities globally. With an ageing population and chronic workforce shortages across nursing, allied health, and aged care, graduates in this sector enjoy some of the strongest Permanent Residency (PR) pathways available through Australia's Skilled Occupation List. Whether you aspire to become a Registered Nurse, a public health leader, or a medical researcher, an Australian health qualification positions you for a high-demand, high-salary career both in Australia and internationally.",
    seoKeywords: ["study nursing in Australia", "health science courses for international students", "nursing PR pathway Australia", "medical science degree Australia", "public health masters Australia"],
    tagline: "Build a career in health, medicine and life sciences.",
    programs: [
      {
        title: "Bachelor of Nursing (Registered Nurse)",
        description: "The Bachelor of Nursing is one of the most popular and strategically important courses for international students in Australia. This comprehensive three-year program prepares you for registration with the Australian Health Practitioner Regulation Agency (AHPRA) as a Registered Nurse. The curriculum combines rigorous academic study in anatomy, pharmacology, and patient assessment with extensive supervised clinical placements in hospitals, aged care facilities, and community health centres. Nursing remains on Australia's Critical Skills List, meaning graduates face virtually zero unemployment and have a direct pathway to Permanent Residency through skilled migration.",
        avgFee: "$35,000 - $40,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 7.0 (No band less than 7.0) or PTE Academic 65 (No score less than 65). Completion of Year 12 or equivalent with strong results in English and Sciences. Some universities accept foundation or diploma pathways.",
        outcomes: "Registered Nurse (Hospitals, Aged Care, Community Health), Clinical Nurse Specialist, Nurse Educator, Midwifery Pathway.",
        stats: { label: "PR Demand", value: "Critical Shortage — Priority List" }
      },
      {
        title: "Master of Public Health",
        description: "The Master of Public Health (MPH) equips graduates with the analytical and leadership skills to address major global health challenges including infectious disease outbreaks, chronic illness prevention, and health system reform. You will study epidemiology, biostatistics, health policy, and program evaluation. Australian MPH programs are highly regarded internationally, and graduates are sought after by the World Health Organization (WHO), government health departments, NGOs, and private health consultancies. This degree is ideal for health professionals looking to transition from clinical roles into strategic, policy-level leadership positions.",
        avgFee: "$38,000 - $45,000 / year",
        duration: "1.5 - 2 Years Full-Time",
        intakes: "February, July, November",
        requirements: "IELTS 6.5 (No band less than 6.0) or PTE Academic 58. Bachelor's degree in a health-related field. Some universities accept applicants with relevant professional experience in lieu of a health degree.",
        outcomes: "Public Health Officer, Epidemiologist, Health Promotion Manager, Policy Advisor, Research Coordinator.",
        stats: { label: "Graduate Salary", value: "$90k - $120k AUD" }
      },
      {
        title: "Bachelor of Medical Science",
        description: "The Bachelor of Medical Science provides a deep foundation in human biology, molecular medicine, and laboratory science. This degree is ideal for students who are passionate about understanding disease at a cellular and molecular level. Graduates can pursue careers directly in pathology laboratories, pharmaceutical companies, and medical research institutes, or use the degree as a competitive pathway into postgraduate medicine (MD/MBBS). The program includes hands-on laboratory work from Year 1 and often offers research placements in university-affiliated hospitals and research centres.",
        avgFee: "$32,000 - $38,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February",
        requirements: "IELTS 6.5 (No band less than 6.0) or PTE Academic 58. Year 12 or equivalent with strong results in Biology, Chemistry, and Mathematics. Some universities require prerequisite science subjects.",
        outcomes: "Medical Researcher, Pathology Technician, Pharmaceutical Scientist, Pathway to Graduate Medicine (MD).",
        stats: { label: "Further Study", value: "Direct Pathway to MD" }
      },
      {
        title: "Diploma of Healthcare",
        description: "The Diploma of Healthcare is an excellent entry-level qualification for students who want to begin their health career quickly or who need a structured academic pathway into a full Bachelor's degree. The program provides foundational knowledge in health sciences, anatomy, basic clinical care, and professional communication. Many Australian universities guarantee credit transfer from their Diploma programs directly into Year 2 of the Bachelor of Nursing or Bachelor of Health Science, making it a cost-effective and lower-risk entry point for international students.",
        avgFee: "$22,000 - $28,000 / year",
        duration: "1 Year Full-Time",
        intakes: "February, June, October",
        requirements: "IELTS 6.0 (No band less than 5.5) or PTE Academic 50. Year 11 or 12 completion or equivalent.",
        outcomes: "Healthcare Assistant, Aged Care Worker, Pathway to Bachelor of Nursing or Health Science.",
        stats: { label: "Pathway Success", value: "95% Progress to Bachelor" }
      }
    ],
    universities: [
      { name: "University of Sydney", logo: "", location: "🇦🇺 Sydney, Australia" },
      { name: "Deakin University", logo: "", location: "🇦🇺 Melbourne, Australia" },
      { name: "King's College London", logo: "", location: "🇬🇧 London, UK" }
    ],
    color: "from-rose-400 to-red-600",
    bgLight: "bg-rose-50",
    borderLight: "border-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: "it",
    title: "Information Technology (IT)",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    description: "The tech industry is booming globally. From cybersecurity to artificial intelligence, studying IT equips you with future-proof skills that are in critical shortage worldwide.",
    longDescription: "Information Technology is the backbone of the modern global economy, and Australia has positioned itself as a regional leader in cybersecurity, artificial intelligence, and cloud computing. International students who pursue IT qualifications in Australia benefit from industry-integrated curricula developed in partnership with tech giants like Microsoft, Google, and AWS. With IT occupations consistently appearing on Australia's Critical Skills List, graduates enjoy exceptional employment rates, competitive starting salaries exceeding $100,000 AUD, and clear pathways to Permanent Residency. Whether you are starting fresh or pivoting from another career, Australian IT programs offer flexible entry points from Diplomas through to Masters degrees — many of which do not require a prior IT background.",
    seoKeywords: ["study IT in Australia", "cyber security courses Australia", "software engineering degree", "data science masters Australia", "ACS skill assessment"],
    tagline: "Lead the future with tech, data & innovation.",
    programs: [
      {
        title: "Master of Data Science",
        description: "The Master of Data Science is one of the most sought-after postgraduate qualifications globally. This program provides advanced training in machine learning, statistical modelling, big data analytics, and data visualisation using industry-standard tools like Python, R, TensorFlow, and Spark. Australian universities partner with major corporations to offer real-world capstone projects, ensuring graduates are job-ready from day one. Data Scientists are among the highest-paid professionals in Australia, with starting salaries regularly exceeding $100,000 AUD. This degree is ideal for graduates with a background in mathematics, statistics, or computer science.",
        avgFee: "$36,000 - $48,000 / year",
        duration: "2 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.5 (No band less than 6.0) or PTE Academic 58. Bachelor's degree with a quantitative component (programming, mathematics, or statistics background preferred). Some universities offer bridging courses for career changers.",
        outcomes: "Data Scientist, Machine Learning Engineer, Business Intelligence Analyst, Data Engineer, AI Research Associate.",
        stats: { label: "Avg Starting Salary", value: "$100k - $140k AUD" }
      },
      {
        title: "Bachelor of Cyber Security",
        description: "With cyber attacks costing the global economy over $10 trillion annually, cybersecurity professionals are in unprecedented demand. The Bachelor of Cyber Security teaches you to defend networks, systems, and data from sophisticated digital threats. The curriculum covers network security, ethical hacking, digital forensics, cryptography, and incident response. Many Australian programs include mandatory industry placements with government agencies, banks, and tech firms. Graduates face near-zero unemployment rates and can expect lucrative starting salaries, making this one of the most strategically valuable degrees for international students seeking both employment and migration outcomes.",
        avgFee: "$34,000 - $42,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February, July, November",
        requirements: "IELTS 6.0 - 6.5 (No band less than 6.0) or PTE Academic 50-58. Year 12 completion or equivalent. No prior IT experience required.",
        outcomes: "Cyber Security Analyst, Penetration Tester, Security Consultant, SOC Analyst, Digital Forensics Investigator.",
        stats: { label: "Job Placement", value: "Near-Zero Unemployment" }
      },
      {
        title: "Bachelor of Software Engineering",
        description: "The Bachelor of Software Engineering focuses on the systematic design, development, testing, and maintenance of large-scale software systems. You will learn modern programming languages (Python, Java, C++), algorithms, data structures, and agile development methodologies. Australian programs are professionally accredited by Engineers Australia under the Washington Accord, meaning your degree is recognised in over 20 countries worldwide. The program typically includes a mandatory industry placement in Year 3 or 4, giving you real-world experience before graduation. Software Engineers are consistently among the highest-demand occupations globally.",
        avgFee: "$35,000 - $45,000 / year",
        duration: "4 Years Full-Time (with Honours)",
        intakes: "February, July",
        requirements: "IELTS 6.5 (No band less than 6.0) or PTE Academic 58. Year 12 or equivalent with strong results in Mathematics. Some universities require prerequisite maths subjects.",
        outcomes: "Software Engineer, Full Stack Developer, DevOps Engineer, Mobile App Developer, Systems Architect.",
        stats: { label: "Global Demand", value: "Extremely High — All Countries" }
      },
      {
        title: "Master of Information Technology",
        description: "The Master of Information Technology is a flexible postgraduate degree specifically designed for career changers and professionals looking to upskill. Many Australian universities offer a 2-year stream that does not require any prior IT background, making it an ideal pivot for graduates from business, science, or arts disciplines. Specialisations typically include artificial intelligence, cloud computing, enterprise systems, and UX design. The 2-year duration also satisfies the Australian Study Requirement for the Temporary Graduate Visa (Subclass 485), providing a clear post-study work pathway.",
        avgFee: "$32,000 - $40,000 / year",
        duration: "1.5 - 2 Years Full-Time",
        intakes: "February, July, November",
        requirements: "IELTS 6.5 (No band less than 6.0) or PTE Academic 58. Any Bachelor's degree (for the 2-year stream). IT graduates may be eligible for the accelerated 1.5-year stream.",
        outcomes: "IT Consultant, Systems Analyst, Cloud Engineer, Project Manager, Business Analyst.",
        stats: { label: "Career Pivot", value: "No Prior IT Background Needed" }
      }
    ],
    universities: [
      { name: "University of Melbourne", logo: "", location: "🇦🇺 Melbourne, Australia" },
      { name: "University of Toronto", logo: "", location: "🇨🇦 Toronto, Canada" },
      { name: "Deakin University", logo: "", location: "🇦🇺 Melbourne, Australia" }
    ],
    color: "from-blue-400 to-indigo-600",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "engineering",
    title: "Engineering",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    description: "Engineering degrees in our partner countries are globally accredited. Massive infrastructure and renewable energy projects constantly demand qualified engineers across all major disciplines.",
    longDescription: "Engineering is one of the most respected and highest-paid professions worldwide, and Australia offers some of the best engineering education available. Australian engineering programs are accredited under the Washington Accord through Engineers Australia, meaning your qualification is recognised in over 20 countries including the USA, UK, Canada, and New Zealand. Australia's booming infrastructure sector — driven by billions of dollars in road, rail, renewable energy, and mining projects — creates persistent demand for civil, mechanical, electrical, and environmental engineers. International graduates benefit from generous post-study work visas (up to 6 years in regional areas) and multiple Permanent Residency pathways, as engineering occupations consistently appear on Australia's Skilled Occupation List.",
    seoKeywords: ["study engineering in Australia", "civil engineering degree", "mechanical engineering masters", "Engineers Australia skill assessment", "engineering PR pathways"],
    tagline: "Design, build and solve real-world challenges.",
    programs: [
      {
        title: "Bachelor of Civil Engineering",
        description: "The Bachelor of Civil Engineering prepares you to design, build, and maintain the critical infrastructure that modern societies depend on — bridges, highways, water systems, and buildings. The curriculum covers structural analysis, geotechnical engineering, fluid mechanics, and sustainable construction practices. Australian civil engineering programs include mandatory industry placements, and graduates are eligible for professional accreditation with Engineers Australia. Civil Engineers are consistently listed on Australia's Skilled Occupation List, providing a direct pathway to Permanent Residency for international graduates.",
        avgFee: "$38,000 - $48,000 / year",
        duration: "4 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.5 (No band less than 6.0) or PTE Academic 58. Year 12 or equivalent with strong results in Physics and advanced Mathematics (Calculus preferred).",
        outcomes: "Civil Engineer, Structural Engineer, Transport Engineer, Environmental Engineer, Project Manager.",
        stats: { label: "Accreditation", value: "Washington Accord — 20+ Countries" }
      },
      {
        title: "Master of Engineering (Mechanical)",
        description: "The Master of Mechanical Engineering provides advanced study in thermodynamics, robotics, materials science, and manufacturing systems. This postgraduate program is designed for engineering graduates seeking to specialise or achieve professional accreditation. Australian mechanical engineering programs emphasise hands-on design projects and industry collaboration, with many universities offering placements in the automotive, aerospace, defence, and energy sectors. Graduates are highly sought after in Australia's rapidly growing renewable energy and advanced manufacturing industries.",
        avgFee: "$40,000 - $50,000 / year",
        duration: "2 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.5 (No band less than 6.0) or PTE Academic 58. Bachelor of Mechanical Engineering or closely related discipline from a recognised institution.",
        outcomes: "Mechanical Engineer, Production Manager, Design Engineer, Robotics Engineer, Energy Systems Engineer.",
        stats: { label: "Industry Growth", value: "Strong Demand — Renewables Boom" }
      },
      {
        title: "Bachelor of Electrical Engineering",
        description: "The Bachelor of Electrical Engineering focuses on electronics, power systems, telecommunications, and control systems. This degree is essential for the ongoing global transition to renewable energy, smart grid technology, and electric vehicles. Australian programs provide access to state-of-the-art laboratories and research facilities, with industry placements available at major utilities, telecommunications firms, and technology companies. Electrical Engineers are among the most versatile professionals, with career opportunities spanning energy, telecommunications, mining, and defence.",
        avgFee: "$36,000 - $45,000 / year",
        duration: "4 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.5 (No band less than 6.0) or PTE Academic 58. Year 12 or equivalent with strong results in Physics and Mathematics.",
        outcomes: "Electrical Engineer, Power Systems Engineer, Telecommunications Engineer, Network Engineer, Renewable Energy Specialist.",
        stats: { label: "Renewable Sector", value: "Massive Growth — Net Zero Push" }
      },
      {
        title: "Master of Professional Engineering",
        description: "The Master of Professional Engineering (MPE) is specifically designed for engineering graduates to achieve full professional accreditation with Engineers Australia. The program includes advanced coursework in your chosen specialisation along with a mandatory 12-week industry placement that provides real-world Australian work experience. This degree satisfies the academic requirements for Chartered Engineer status and is ideal for international graduates who want to practice as accredited engineers in Australia and globally under the Washington Accord.",
        avgFee: "$42,000 - $52,000 / year",
        duration: "2 - 3 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.5 (No band less than 6.0) or PTE Academic 58. Relevant Engineering or Science Bachelor's degree from a recognised institution.",
        outcomes: "Accredited Professional Engineer (CPEng), Engineering Manager, Technical Director, Consulting Engineer.",
        stats: { label: "Industry Placement", value: "Mandatory 12-Week Placement" }
      }
    ],
    universities: [
      { name: "University of Auckland", logo: "", location: "🇳🇿 Auckland, New Zealand" },
      { name: "University of Melbourne", logo: "", location: "🇦🇺 Melbourne, Australia" },
      { name: "University of Sydney", logo: "", location: "🇦🇺 Sydney, Australia" }
    ],
    color: "from-amber-400 to-amber-600",
    bgLight: "bg-amber-50",
    borderLight: "border-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: "business",
    title: "Business & Management",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "Equip yourself with versatile skills that apply to any industry. Business programs focus on practical experience, networking, and modern management techniques for the global market.",
    longDescription: "A business qualification from an Australian university opens doors to virtually every industry worldwide. Australia's business schools are consistently ranked among the top 50 globally, with programs accredited by prestigious bodies such as AACSB, EQUIS, and AMBA. International students benefit from curricula that emphasise real-world case studies, industry guest lectures, and mandatory internship components. For students interested in migration, Accounting remains on Australia's Skilled Occupation List with a clear pathway to CPA/CA accreditation and Permanent Residency. MBA graduates report an average salary increase of 40% or more within two years of completing their degree, making it one of the highest-ROI investments in education.",
    seoKeywords: ["study business in Australia", "MBA Australia", "accounting courses for international students", "marketing degree Australia", "CPA Australia skill assessment"],
    tagline: "Develop leadership & business expertise.",
    programs: [
      {
        title: "Master of Business Administration (MBA)",
        description: "The MBA is the premier business qualification for aspiring executives and entrepreneurs. Australian MBA programs focus on strategic leadership, corporate finance, global business strategy, and innovation management. Many programs include international study tours, executive mentoring, and capstone consulting projects with real companies. Australian MBAs are recognised globally by employers and are particularly valued in the Asia-Pacific region. Graduates typically report a 40%+ salary increase within two years of completing the program, making it one of the highest-return investments in postgraduate education.",
        avgFee: "$45,000 - $80,000 / year",
        duration: "1.5 - 2 Years Full-Time",
        intakes: "Quarterly or Trimester Intakes",
        requirements: "IELTS 6.5 - 7.0 (No band less than 6.0) or PTE Academic 58-65. Bachelor's degree from a recognised institution plus a minimum of 2-3 years of professional work experience. GMAT may be required by some top-tier programs.",
        outcomes: "C-Suite Executive, Management Consultant, Business Development Director, Entrepreneur, Strategy Manager.",
        stats: { label: "Salary Bump", value: "+40% Post-Graduation Average" }
      },
      {
        title: "Bachelor of Commerce (Accounting)",
        description: "The Bachelor of Commerce with an Accounting major teaches the language of business — financial reporting, taxation law, auditing, and management accounting. Australian accounting programs are specifically designed to meet the accreditation requirements of CPA Australia and Chartered Accountants Australia & New Zealand (CA ANZ), providing graduates with a direct pathway to professional registration. Accounting consistently appears on Australia's Skilled Occupation List, making it one of the most reliable pathways to Permanent Residency for international students. Graduates are employed across every sector of the economy.",
        avgFee: "$30,000 - $40,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February, July, November",
        requirements: "IELTS 6.0 (No band less than 5.5) or PTE Academic 50. Year 12 completion or equivalent. No prior business knowledge required.",
        outcomes: "Certified Accountant (CPA/CA), Financial Auditor, Tax Consultant, Management Accountant, Financial Controller.",
        stats: { label: "Career Stability", value: "Very High — Every Industry" }
      },
      {
        title: "Master of Professional Accounting",
        description: "The Master of Professional Accounting (MPA) is specifically designed for graduates from non-accounting backgrounds who want to enter the accounting profession. This program fulfils the academic requirements for membership with CPA Australia and CA ANZ, allowing career changers to become fully qualified accountants. The 2-year duration satisfies the Australian Study Requirement for the Temporary Graduate Visa (Subclass 485). Combined with a Professional Year Program, accounting graduates can maximise their points for skilled migration.",
        avgFee: "$35,000 - $45,000 / year",
        duration: "1.5 - 2 Years Full-Time",
        intakes: "February, July, November",
        requirements: "IELTS 6.5 (No band less than 6.0) or PTE Academic 58. Any Bachelor's degree from a recognised institution. No prior accounting study required.",
        outcomes: "Public Accountant, Tax Specialist, Financial Analyst, Forensic Accountant, Compliance Officer.",
        stats: { label: "Accreditation", value: "CPA/CA Direct Pathway" }
      },
      {
        title: "Bachelor of Marketing",
        description: "The Bachelor of Marketing prepares you for a career in one of the most dynamic and fast-evolving fields in business. You will study consumer behaviour, digital marketing strategy, brand management, social media analytics, and marketing research. Australian marketing programs are heavily project-based, with students working on real campaigns for actual brands. In today's digital-first economy, marketing professionals with data analytics skills are in extremely high demand across Australia and globally.",
        avgFee: "$28,000 - $38,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.0 (No band less than 5.5) or PTE Academic 50. Year 12 completion or equivalent.",
        outcomes: "Marketing Manager, Digital Marketing Specialist, Brand Strategist, Social Media Manager, Content Director.",
        stats: { label: "Industry Demand", value: "Rapid Growth — Digital Economy" }
      }
    ],
    universities: [
      { name: "King's College London", logo: "", location: "🇬🇧 London, UK" },
      { name: "University of Toronto", logo: "", location: "🇨🇦 Toronto, Canada" },
      { name: "University of Auckland", logo: "", location: "🇳🇿 Auckland, New Zealand" }
    ],
    color: "from-emerald-400 to-green-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: "cookery",
    title: "Cookery & Hospitality",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    description: "The vibrant tourism and hospitality sector is constantly looking for skilled chefs and managers. These courses offer hands-on training and excellent employment opportunities upon graduation.",
    longDescription: "Australia's tourism and hospitality industry contributes over $60 billion annually to the economy and employs hundreds of thousands of workers. International students who pursue cookery and hospitality qualifications gain hands-on, industry-integrated training in some of the world's most vibrant food and tourism destinations — Sydney, Melbourne, Brisbane, and the Gold Coast. Commercial Cookery (Chef) qualifications are listed on Australia's Medium and Long-term Strategic Skills List (MLTSSL), providing a direct pathway to Permanent Residency through the trades migration stream. Hospitality management graduates are also well-positioned for sponsored employment opportunities. With relatively lower tuition fees compared to university degrees and immediate employment outcomes, cookery and hospitality courses offer exceptional value for international students.",
    seoKeywords: ["study commercial cookery Australia", "hospitality management courses", "chef PR pathway Australia", "cookery diploma for international students"],
    tagline: "Turn your passion into a global career.",
    programs: [
      {
        title: "Certificate IV in Commercial Cookery",
        description: "The Certificate IV in Commercial Cookery is the industry-standard qualification for becoming a qualified chef in Australia. This intensive, hands-on program teaches foundational and advanced culinary skills including menu planning, kitchen management, food safety (HACCP), cost control, and cuisine from around the world. All programs include mandatory industry placements in commercial kitchens — restaurants, hotels, and catering companies. Chef (Cook) is listed on Australia's Medium and Long-term Strategic Skills List, making this one of the most direct and affordable pathways to Permanent Residency for international students.",
        avgFee: "$12,000 - $18,000 / year",
        duration: "1.5 - 2 Years Full-Time",
        intakes: "Monthly or Quarterly",
        requirements: "IELTS 5.5 (No band less than 5.0) or PTE Academic 42. Year 11 completion or equivalent. No prior cooking experience required.",
        outcomes: "Qualified Chef (Cook), Sous Chef, Pastry Chef, Kitchen Manager, Catering Coordinator.",
        stats: { label: "PR Pathway", value: "MLTSSL — Direct Trade Route" }
      },
      {
        title: "Diploma of Hospitality Management",
        description: "The Diploma of Hospitality Management focuses on the operational and managerial aspects of the hospitality industry — customer service excellence, budgeting and financial management, staff leadership, and event coordination. This qualification prepares you for supervisory and management roles in hotels, restaurants, resorts, and event companies. Many providers offer pathway arrangements into Bachelor's degrees in tourism or business management, allowing you to gain credit for completed units and fast-track your university education.",
        avgFee: "$14,000 - $20,000 / year",
        duration: "1 - 1.5 Years Full-Time",
        intakes: "Quarterly",
        requirements: "IELTS 5.5 (No band less than 5.0) or PTE Academic 42. Certificate IV completion preferred but not mandatory for some providers.",
        outcomes: "Restaurant Manager, Hotel Front Office Manager, Events Coordinator, Food & Beverage Supervisor, Resort Operations Manager.",
        stats: { label: "Industry Placement", value: "Hands-on Practical Training" }
      },
      {
        title: "Bachelor of Tourism and Event Management",
        description: "The Bachelor of Tourism and Event Management prepares you for a career managing large-scale events, festivals, conferences, and tourism operations. The program covers sustainable tourism development, destination marketing, event logistics, and cultural tourism. Australian universities located in major tourist destinations offer unparalleled access to industry contacts and internship opportunities with international hotel chains, event companies, and tourism boards. Graduates are well-positioned for management roles in one of the world's fastest-growing economic sectors.",
        avgFee: "$22,000 - $28,000 / year",
        duration: "3 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 6.0 (No band less than 5.5) or PTE Academic 50. Year 12 completion or equivalent.",
        outcomes: "Event Manager, Tourism Development Officer, Conference Coordinator, Destination Marketing Manager, Hotel General Manager.",
        stats: { label: "Global Opportunities", value: "High Mobility — Work Anywhere" }
      },
      {
        title: "Advanced Diploma of Hospitality",
        description: "The Advanced Diploma of Hospitality provides high-level management and entrepreneurship skills for those aiming to run their own restaurant, café, or hotel. The curriculum covers advanced business planning, marketing strategy, human resource management, and financial analysis specific to the hospitality sector. This qualification is ideal for experienced hospitality professionals looking to move into senior management or start their own hospitality business in Australia.",
        avgFee: "$15,000 - $22,000 / year",
        duration: "2 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 5.5 - 6.0 (No band less than 5.0) or PTE Academic 42-50. Relevant Diploma or significant industry experience.",
        outcomes: "Operations Manager, Venue Manager, Hospitality Entrepreneur, Area Manager, Business Owner.",
        stats: { label: "Entrepreneurship", value: "Business Ownership Focus" }
      }
    ],
    universities: [
      { name: "Le Cordon Bleu", logo: "", location: "🇦🇺 Sydney, Australia" },
      { name: "William Angliss Institute", logo: "", location: "🇦🇺 Melbourne, Australia" },
      { name: "TAFE NSW", logo: "", location: "🇦🇺 Sydney, Australia" }
    ],
    color: "from-purple-400 to-fuchsia-600",
    bgLight: "bg-purple-50",
    borderLight: "border-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "trade",
    title: "Trade Courses",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    description: "Trade professions are highly respected and well-paid. Due to massive skill shortages globally, studying a trade offers one of the most direct and reliable pathways to permanent residency.",
    longDescription: "Australia is experiencing a critical and growing shortage of skilled tradespeople across construction, automotive, electrical, and plumbing sectors. Trade qualifications (Certificate III and IV) are among the most affordable study options for international students and offer some of the fastest and most reliable pathways to Permanent Residency. Skilled tradespeople in Australia earn competitive salaries — often exceeding those of university graduates — with electricians, plumbers, and carpenters regularly earning over $80,000–$120,000 AUD per year. Trade courses are delivered through hands-on, workshop-based training at TAFEs and registered training organisations (RTOs), with mandatory industry placements that provide real Australian work experience. Many trade occupations appear on Australia's Priority Migration Skilled Occupation List, meaning graduates receive priority processing for skilled migration visas.",
    seoKeywords: ["trade courses Australia", "carpentry courses for international students", "automotive mechanic courses", "plumbing courses Australia", "TRA skill assessment"],
    tagline: "Hands-on skills for high-demand careers.",
    programs: [
      {
        title: "Certificate III in Carpentry",
        description: "The Certificate III in Carpentry teaches the practical skills of residential and commercial building construction. You will learn framing, formwork, roofing, flooring, and finishing to Australian building standards. This is a highly physical and rewarding trade that is currently listed as a critical priority on Australia's Skilled Occupation List. Carpentry programs include extensive workshop training and mandatory on-site industry placements. Qualified carpenters in Australia earn excellent wages and have near-guaranteed employment prospects due to the ongoing construction boom driven by population growth and infrastructure spending.",
        avgFee: "$14,000 - $18,000 / year",
        duration: "2 Years Full-Time",
        intakes: "Monthly or Quarterly",
        requirements: "IELTS 5.5 (No band less than 5.0) or PTE Academic 42. Year 11 equivalent. Physical fitness for construction environments.",
        outcomes: "Qualified Carpenter, Formworker, Builder, Construction Supervisor, Self-Employed Contractor.",
        stats: { label: "Skill Shortage", value: "Critical Priority — Fast PR" }
      },
      {
        title: "Certificate III in Light Vehicle Mechanical Technology",
        description: "The Certificate III in Light Vehicle Mechanical Technology trains you to diagnose, repair, and service modern motor vehicles. The program covers both traditional mechanical systems (engines, transmissions, brakes) and modern computer-controlled vehicle systems (OBD diagnostics, electronic fuel injection, hybrid/EV components). Automotive mechanics are in consistent demand across Australia, and the transition to electric vehicles is creating entirely new specialisation opportunities. Graduates enjoy near-100% employment rates and the option to work for dealerships, independent workshops, or start their own automotive business.",
        avgFee: "$12,000 - $16,000 / year",
        duration: "2 Years Full-Time",
        intakes: "Quarterly",
        requirements: "IELTS 5.5 (No band less than 5.0) or PTE Academic 42. Year 11 equivalent. Interest in automotive technology.",
        outcomes: "Automotive Mechanic, Diagnostic Technician, Workshop Manager, Fleet Maintenance Coordinator, Self-Employed Mechanic.",
        stats: { label: "Employment Rate", value: "Near 100% — Guaranteed Work" }
      },
      {
        title: "Certificate III in Electrotechnology Electrician",
        description: "The Certificate III in Electrotechnology Electrician is one of the most technically demanding and highest-paying trade qualifications in Australia. You will learn electrical wiring, circuit design, safety testing, and compliance with Australian Standards (AS/NZS 3000). This trade is essential for modern infrastructure, renewable energy installations (solar panels, battery systems), and smart building technology. Licensed electricians consistently earn among the highest wages in the trades sector, and the occupation is listed on Australia's Priority Migration Skilled Occupation List with fast-track processing for skilled migration.",
        avgFee: "$15,000 - $20,000 / year",
        duration: "2 Years Full-Time",
        intakes: "February, July",
        requirements: "IELTS 5.5 (No band less than 5.0) or PTE Academic 42. Strong basic Mathematics. Colour vision test may be required.",
        outcomes: "Licensed Electrician, Solar Installation Technician, Industrial Electrician, Electrical Contractor, Building Services Technician.",
        stats: { label: "Income Potential", value: "Highest in Trades — $100k+" }
      },
      {
        title: "Certificate III in Plumbing",
        description: "The Certificate III in Plumbing teaches vital sanitation, drainage, water supply, gas fitting, and roofing skills. Plumbers are consistently among the highest-paid and most in-demand trades professionals in Australia, with experienced plumbers regularly earning over $100,000 AUD per year. The program combines classroom theory with hands-on practical training in plumbing workshops and real construction sites. Plumbing is listed on Australia's Priority Migration Skilled Occupation List, and graduates have excellent prospects for both employment and Permanent Residency. Many qualified plumbers go on to start their own successful businesses.",
        avgFee: "$14,000 - $19,000 / year",
        duration: "2 Years Full-Time",
        intakes: "Quarterly",
        requirements: "IELTS 5.5 (No band less than 5.0) or PTE Academic 42. Year 11 equivalent. Physical fitness for construction environments.",
        outcomes: "Licensed Plumber, Gas Fitter, Drainage Specialist, Plumbing Contractor, Self-Employed Business Owner.",
        stats: { label: "Business Opportunity", value: "High Self-Employment Rate" }
      }
    ],
    universities: [
      { name: "TAFE Institutes", logo: "", location: "🇦🇺 Various, Australia" },
      { name: "Victoria University", logo: "", location: "🇦🇺 Melbourne, Australia" },
      { name: "SkillsTech", logo: "", location: "🇦🇺 Brisbane, Australia" }
    ],
    color: "from-slate-500 to-slate-700",
    bgLight: "bg-slate-50",
    borderLight: "border-slate-200",
    iconColor: "text-slate-600",
  },
];

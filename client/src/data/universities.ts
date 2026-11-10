export interface University {
  id: string;
  name: string;
  slug: string;
  country: string;
  location: string;
  logo: string;
  coverImage: string;
  ranking: string;
  founded: string;
  studentPopulation: string;
  description: string;
  strengths: string[];
  programs: string[];
  avgTuition: string;
  intakes: string[];
  website: string;
}

export const universities: University[] = [
  {
    id: "uni-sydney",
    name: "University of Sydney",
    slug: "university-of-sydney",
    country: "Australia",
    location: "Sydney, NSW, Australia",
    logo: "", // Text placeholder
    coverImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    ranking: "QS World #19 (2026)",
    founded: "1850",
    studentPopulation: "74,000+",
    description: "The University of Sydney is one of Australia's leading research-intensive universities, known for its academic excellence and beautiful campus. It consistently ranks among the top 20 universities globally.",
    strengths: ["Group of Eight Member", "Leading Medical Research", "Global Employability"],
    programs: ["Health & Science", "Engineering", "Business & Management", "Information Technology"],
    avgTuition: "AUD $38,000 - $55,000 / year",
    intakes: ["February", "July"],
    website: "https://www.sydney.edu.au"
  },
  {
    id: "uni-melbourne",
    name: "University of Melbourne",
    slug: "university-of-melbourne",
    country: "Australia",
    location: "Melbourne, VIC, Australia",
    logo: "",
    coverImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    ranking: "QS World #14 (2026)",
    founded: "1853",
    studentPopulation: "65,000+",
    description: "Australia's leading university and #1 ranked institution. Renowned for its distinctive Melbourne Curriculum, which allows students to explore various subjects before choosing a major.",
    strengths: ["Group of Eight Member", "#1 in Australia", "Strong Industry Connections"],
    programs: ["Business & Management", "Information Technology", "Health & Science", "Engineering"],
    avgTuition: "AUD $40,000 - $60,000 / year",
    intakes: ["February", "July"],
    website: "https://www.unimelb.edu.au"
  },
  {
    id: "uni-toronto",
    name: "University of Toronto",
    slug: "university-of-toronto",
    country: "Canada",
    location: "Toronto, ON, Canada",
    logo: "",
    coverImage: "https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=2070&auto=format&fit=crop",
    ranking: "QS World #21 (2026)",
    founded: "1827",
    studentPopulation: "97,000+",
    description: "Canada's top university, located in the heart of one of the world's most dynamic and diverse cities. A global leader in research and teaching with a massive international student community.",
    strengths: ["#1 in Canada", "Top-tier AI & Tech Programs", "Vibrant Downtown Campus"],
    programs: ["Information Technology", "Health & Science", "Business & Management"],
    avgTuition: "CAD $40,000 - $65,000 / year",
    intakes: ["September", "January"],
    website: "https://www.utoronto.ca"
  },
  {
    id: "ucl",
    name: "University College London",
    slug: "university-college-london",
    country: "United Kingdom",
    location: "London, England, UK",
    logo: "",
    coverImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    ranking: "QS World #9 (2026)",
    founded: "1826",
    studentPopulation: "42,000+",
    description: "UCL is London's global university, a diverse intellectual community, engaged with the wider world and committed to changing it for the better. Ranked among the top 10 in the world.",
    strengths: ["Russell Group Member", "Global Top 10", "Central London Location"],
    programs: ["Health & Science", "Engineering", "Business & Management"],
    avgTuition: "GBP £25,000 - £35,000 / year",
    intakes: ["September"],
    website: "https://www.ucl.ac.uk"
  },
  {
    id: "uni-auckland",
    name: "University of Auckland",
    slug: "university-of-auckland",
    country: "New Zealand",
    location: "Auckland, New Zealand",
    logo: "",
    coverImage: "https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=2070&auto=format&fit=crop",
    ranking: "QS World #68 (2026)",
    founded: "1883",
    studentPopulation: "40,000+",
    description: "New Zealand's leading and largest university, uniquely situated in the heart of Auckland. It is the only New Zealand university ranked in the top 100 globally.",
    strengths: ["#1 in New Zealand", "High Sustainability Ranking", "Strong Pacific Focus"],
    programs: ["Engineering", "Health & Science", "Business & Management"],
    avgTuition: "NZD $35,000 - $48,000 / year",
    intakes: ["February", "July"],
    website: "https://www.auckland.ac.nz"
  },
  {
    id: "kings-college",
    name: "King's College London",
    slug: "kings-college-london",
    country: "United Kingdom",
    location: "London, England, UK",
    logo: "",
    coverImage: "https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=2070&auto=format&fit=crop",
    ranking: "QS World #40 (2026)",
    founded: "1829",
    studentPopulation: "33,000+",
    description: "One of England's oldest and most prestigious universities. Located across five campuses in the heart of London, offering world-class teaching and research.",
    strengths: ["Russell Group Member", "Excellent Medical & Law Schools", "Historical Prestige"],
    programs: ["Health & Science", "Business & Management"],
    avgTuition: "GBP £23,000 - £32,000 / year",
    intakes: ["September"],
    website: "https://www.kcl.ac.uk"
  },
  {
    id: "deakin",
    name: "Deakin University",
    slug: "deakin-university",
    country: "Australia",
    location: "Melbourne & Geelong, VIC",
    logo: "",
    coverImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    ranking: "QS World #233 (2026)",
    founded: "1974",
    studentPopulation: "60,000+",
    description: "A progressive, forward-thinking university known for excellent student satisfaction, practical learning, and state-of-the-art facilities across Victoria.",
    strengths: ["High Student Satisfaction", "Modern Facilities", "Practical Industry Focus"],
    programs: ["Information Technology", "Health & Science", "Business & Management"],
    avgTuition: "AUD $32,000 - $42,000 / year",
    intakes: ["March", "July", "November"],
    website: "https://www.deakin.edu.au"
  }
];

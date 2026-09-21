export type Project = {
  slug: string;
  name: string;
  type: string;
  location: string;
  description: string;
  hero: string;
  square: string;
  brochure: string;
  accent: string;
  detail: string;
};

export const projects: Project[] = [
  {
    slug: "prarambh-51",
    name: "Prarambh 51",
    type: "3 BHK Lavish Duplex",
    location: "Waghodia Main Road, Vadodara",
    description: "A residential community shaped around generous homes, landscaped edges and a distinctive brick gateway.",
    hero: "/assets/build1.png",
    square: "/assets/buildsquare1.jpeg",
    brochure: "/assets/Brochure-1.pdf",
    accent: "01",
    detail: "Brick, shade and landscape come together in a calm arrival sequence that gives the community its identity.",
  },
  {
    slug: "prarambh-pride",
    name: "Prarambh Pride",
    type: "3 BHK Lavish Duplex",
    location: "Alva Road, Waghodia, Vadodara",
    description: "A considered duplex community with clean contemporary geometry, warm brick surfaces and landscaped open spaces.",
    hero: "/assets/build2.png",
    square: "/assets/buildsquare2.jpeg",
    brochure: "/assets/brochure-2.pdf",
    accent: "02",
    detail: "A measured architectural rhythm creates privacy, openness and a strong sense of neighbourhood.",
  },
  {
    slug: "prarambh-plaza",
    name: "Prarambh Plaza",
    type: "Mixed-use Development",
    location: "Alva Road, Waghodia, Vadodara",
    description: "A mixed-use address bringing everyday commerce and compact residences into one clear architectural composition.",
    hero: "/assets/build4.png",
    square: "/assets/buildsquare4.jpeg",
    brochure: "/assets/brochure-4.pdf",
    accent: "03",
    detail: "A street-facing commercial base anchors a disciplined residential facade above.",
  },
];

export const galleryImages = [
  { src: "/assets/build3.png", project: "Prarambh 51", category: "Architecture" },
  { src: "/assets/buildsquare2.jpeg", project: "Prarambh Pride", category: "Arrival" },
  { src: "/assets/build4.png", project: "Prarambh Plaza", category: "Architecture" },
  { src: "/assets/build2.png", project: "Prarambh Pride", category: "Landscape" },
  { src: "/assets/buildsquare1.jpeg", project: "Prarambh 51", category: "Arrival" },
  { src: "/assets/buildsquare4.jpeg", project: "Prarambh Plaza", category: "Architecture" },
];

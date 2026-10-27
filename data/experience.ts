export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    role: "Full-Stack Developer",
    company: "Mediio",
    type: "Full-time",
    location: "Work from Home",
    period: "2025 Mar - 2025 June",
    description: [
      "Architected and delivered high-performance SaaS web applications using Next.js and TypeScript.",
      "Optimized core web vitals and database query speeds, reducing page load times by 40%.",
      "Mentored junior developers and instituted code review standards and CI/CD pipelines."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"]
  },
  {
    id: "2",
    role: "Frontend Engineer",
    company: "Hasthiya IT",
    type: "Full-time",
    location: "Work from Home",
    period: "2023 Oct - 2025 Feb",
    description: [
      "Developed responsive, accessible component design systems used across multiple products.",
      "Collaborated closely with UX designers to translate complex wireframes into smooth interfaces."
    ],
    technologies: ["React", "JavaScript", "CSS Modules", "Redux", "Jest"]
  }
];
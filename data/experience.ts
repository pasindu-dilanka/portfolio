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
    role: "Software Engineer",
    company: "Mediio",
    type: "Full-time",
    location: "Remote",
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
    role: "Associate Software Engineer",
    company: "Hasthiya IT",
    type: "Full-time",
    location: "Remote",
    period: "2024 Apr - 2025 Jan",
    description: [
      "Developed responsive, accessible component design systems used across multiple products.",
      "Collaborated closely with UX designers to translate complex wireframes into smooth interfaces."
    ],
    technologies: ["React", "JavaScript", "CSS Modules", "Redux", "Jest"]
  },
  {
    id: "3",
    role: "Software Engineer",
    company: "Unicent Apex",
    type: "Freelance",
    location: "Remote",
    period: "2024 Jan - 2025 Jun",
    description: [
      "Developed responsive, accessible component design systems used across multiple products.",
      "Collaborated closely with UX designers to translate complex wireframes into smooth interfaces."
    ],
    technologies: ["Next", "TypeScript", "Tailwind CSS", "MongoDb", "Docker"]
  },
  {
    id: "4",
    role: "Trainee Software Engineer",
    company: "Hasthiya IT",
    type: "Full-time",
    location: "Remote",
    period: "2023 Oct - 2024 Apr",
    description: [
      "Developed responsive, accessible component design systems used across multiple products.",
      "Collaborated closely with UX designers to translate complex wireframes into smooth interfaces."
    ],
    technologies: ["React", "JavaScript", "CSS Modules", "Redux", "Jest"]
  }
];
export interface ProjectItem {
  id: string;
  title: string;
  category: "Full-Stack" | "Frontend" | "Open Source";
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "project-1",
    title: "Enterprise SaaS Analytics Dashboard",
    category: "Full-Stack",
    description: "A real-time financial and user metrics analytics dashboard with complex data visualization.",
    problem: "Clients struggled to parse raw CSV data logs quickly enough to make critical operational decisions.",
    features: [
      "Real-time interactive charts and custom date filters",
      "Secure role-based user authentication and access controls",
      "Exportable PDF and CSV reporting modules"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: "/images/project-placeholder-1.jpg",
    githubUrl: "[YOUR GITHUB URL]",
    liveUrl: "https://example.com"
  },
  {
    id: "project-2",
    title: "AI-Powered Content Management Studio",
    category: "Frontend",
    description: "An intuitive web-based block editor integrated with generative text and image capabilities.",
    problem: "Writers wasted hours jumping between markdown editors and separate AI prompt generators.",
    features: [
      "Distraction-free rich text block editing",
      "Instant inline AI copy refinement and continuation",
      "Auto-saving local and cloud drafts"
    ],
    technologies: ["React", "Next.js App Router", "Tailwind CSS", "OpenAI API"],
    image: "/images/project-placeholder-2.jpg",
    githubUrl: "[YOUR GITHUB URL]",
    liveUrl: "https://example.com"
  },
  {
    id: "project-3",
    title: "Developer CLI & Component Toolkit",
    category: "Open Source",
    description: "An open-source library of accessible UI components styled seamlessly for developer portfolios.",
    problem: "Standard component libraries are often overly heavy and difficult to customize for niche portfolio aesthetics.",
    features: [
      "Zero runtime bloat with modular copy-paste architecture",
      "Full WCAG compliance and keyboard navigation support",
      "Comprehensive TypeScript definitions"
    ],
    technologies: ["TypeScript", "React", "Tailwind CSS", "NPM"],
    image: "/images/project-placeholder-3.jpg",
    githubUrl: "[YOUR GITHUB URL]",
    liveUrl: "https://example.com"
  }
];
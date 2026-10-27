export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    title: "Full-Stack Web Development",
    description: "End-to-end development of robust web applications using Next.js, Node.js, and modern databases.",
    iconName: "Code"
  },
  {
    id: "2",
    title: "UI/UX Design Systems",
    description: "Creating clean, scalable component systems and intuitive user interfaces with Tailwind CSS.",
    iconName: "Layout"
  },
  {
    id: "3",
    title: "Technical Consulting",
    description: "Codebase reviews, architecture consulting, and performance optimization for growing teams.",
    iconName: "Cpu"
  }
];
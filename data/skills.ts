export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "HTML5", "CSS3/SCSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Databases & ORMs",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Supabase"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "Vercel", "AWS (S3, EC2)", "Jest", "Postman"]
  }
];
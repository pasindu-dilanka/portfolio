export interface PersonalData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  languages: string[];
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    website?: string;
  };
}

export const personalData: PersonalData = {
  name: "Pasindu Dilanka",
  title: "Software Engineer",
  tagline: "Building high-performance, elegant, and user-centric web applications with modern technologies.",
  location: "Ingiriya",
  email: "pasindu.dilanka98@gmail.com",
  phone: "+94771751899",
  languages: ["Sinhala (Native)", "English (Conversational)"],
  socials: {
    github: "https://github.com/pasindu-dilanka",
    linkedin: "https://www.linkedin.com/in/pasindu-dilanka-673a30217/",
    twitter: "https://twitter.com",
    website: "https://yourwebsite.com"
  }
};
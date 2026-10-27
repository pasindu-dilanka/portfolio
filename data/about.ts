export interface AboutData {
  bio: string;
  interests: string[];
  careerGoals: string[];
  strengths: string[];
  approach: string;
  hobbies: string[];
}

export const aboutData: AboutData = {
  bio: "I am a dedicated software engineer with a strong foundation in full-stack web development. I love turning complex problems into intuitive, scalable, and high-performance digital products.",
  interests: ["Full-Stack Architecture", "UI/UX Design Systems", "Cloud Infrastructure", "Performance Optimization"],
  careerGoals: [
    "Lead engineering teams on ambitious web products",
    "Contribute deeply to open-source ecosystems",
    "Master advanced cloud-native architectures"
  ],
  strengths: ["Clean Code Advocate", "Detail-Oriented Problem Solver", "Cross-Functional Communicator"],
  approach: "I believe in iterative development, robust testing, user-first design principles, and keeping code maintainable and clean.",
  hobbies: ["Open-Source Contributions", "Technical Writing", "Photography", "Hiking"]
};
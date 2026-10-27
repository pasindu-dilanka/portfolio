export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  coursework: string[];
  achievements: string[];
}

export const educations: EducationItem[] = [
  {
    id: "1",
    institution: "Univercity of Colombo School of Computing",
    degree: "Bachelor of Science",
    field: "Computer Science",
    period: "2019 - 2022",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Engineering"
    ],
    achievements: [
      "Graduated with Honors",
      "President of University Coding Club"
    ]
  }
];
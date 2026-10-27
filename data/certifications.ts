export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com"
  },
  {
    id: "2",
    title: "Advanced TypeScript & React Patterns",
    issuer: "Frontend Masters",
    date: "2023"
  }
];
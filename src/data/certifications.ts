interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Android 14 & Kotlin Masterclass",
    issuer: "Udemy",
    date: "Ongoing"
  },
  {
    id: 2,
    title: "Alpha DSA",
    issuer: "Apna College",
    date: "February 2025"
  },
  {
    id: 3,
    title: "Dynamic Programming",
    issuer: "University of Colorado",
    date: "April 2024"
  },
  {
    id: 4,
    title: "Intro to LLMs",
    issuer: "Google Cloud",
    date: "January 2024"
  }
];

export default certifications;
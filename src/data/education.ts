interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  description?: string;
}

const education: Education[] = [
  {
    id: 1,
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science",
    duration: "2022 - Present",
    grade: "CGPA: 7.94",
    description: "Focusing on app development, machine learning, and data structures & algorithms."
  },
  {
    id: 2,
    institution: "St. Joseph Inter College",
    degree: "Intermediate",
    duration: "2020 - 2022",
    grade: "Percentage: 82%"
  },
  {
    id: 3,
    institution: "St. Joseph Inter College",
    degree: "Matriculation",
    duration: "2018 - 2020",
    grade: "Percentage: 88%"
  }
];

export default education;
interface Achievement {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Dean's Top 10% at University",
    description: "Consistently maintained academic excellence, placing in the top 10% of students."
  },
  {
    id: 2,
    title: "Winner – Helios Cup (Valorant)",
    description: "Led team to victory at the IIT Guwahati Valorant tournament, showcasing strategic thinking and teamwork."
  },
  {
    id: 3,
    title: "Hackathon 1.0 (AIESEC) Participant",
    description: "Participated in a 24-hour coding marathon developing innovative solutions to real-world problems."
  }
];

export default achievements;
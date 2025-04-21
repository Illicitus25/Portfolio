interface Skill {
  name: string;
  type: 'language' | 'framework' | 'tool' | 'soft';
  level: number; // 1-5
  icon?: string;
}

const skills: Skill[] = [
  // Languages
  { name: 'Java', type: 'language', level: 4 },
  { name: 'Kotlin', type: 'language', level: 4 },
  { name: 'Python', type: 'language', level: 4 },
  
  // Frameworks
  { name: 'Jetpack Compose', type: 'framework', level: 4 },
  { name: 'XML', type: 'framework', level: 4 },
  { name: 'Machine Learning', type: 'framework', level: 3 },
  
  // Tools
  { name: 'Android Studio', type: 'tool', level: 4 },
  { name: 'Jupyter', type: 'tool', level: 4 },
  { name: 'GitHub', type: 'tool', level: 3 },
  
  // Soft Skills
  { name: 'Problem Solving', type: 'soft', level: 5 },
  { name: 'Critical Thinking', type: 'soft', level: 4 },
  { name: 'Creativity', type: 'soft', level: 4 },
  { name: 'Adaptability', type: 'soft', level: 4 }
];

export default skills;
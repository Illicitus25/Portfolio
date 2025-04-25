interface Project {
  id: number;
  title: string;
  description: string;
  category: 'ml' | 'android';
  technologies: string[];
  image: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fashion Recommendation System",
    description: "Image-based clothing recommender using CLIP embeddings, cosine similarity, and HDBSCAN clustering. Built for style personalization based on visual inputs.",
    category: "ml",
    technologies: ["Python", "CLIP", "HDBSCAN", "Computer Vision"],
    image: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "#"
  },
  {
    id: 2,
    title: "Cardiotocography Classifier",
    description: "Fetal health classifier trained on CTG signals using Scikit-learn. Improves diagnosis by analyzing accelerations, variability, and baselines.",
    category: "ml",
    technologies: ["Python", "Scikit-learn", "ML Classification", "Healthcare"],
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "#"
  },
  {
    id: 3,
    title: "Named Entity Recognition (NER)",
    description: "Custom BERT-based NLP model for transaction categorization integrated into PennyTrail. Automatically labels expenses like food, rent, etc.",
    category: "ml",
    technologies: ["Python", "BERT", "NLP", "Hugging Face"],
    image: "https://images.pexels.com/photos/7565003/pexels-photo-7565003.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "#"
  },
  {
    id: 4,
    title: "PennyTrail",
    description: "Expense tracker app built in Android Studio using MVVM, Jetpack Compose, and Room DB. Features integrated AI/NLP for real-time expense categorization.",
    category: "android",
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Room DB"],
    image: "https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "#"
  },
  {
    id: 5,
    title: "ZooExplorer",
    description: "Interactive zoo map app with scrollable map, event schedule, animal spotlights, and visitor tips. Built using Jetpack Compose with a custom light/dark theme.",
    category: "android",
    technologies: ["Kotlin", "Jetpack Compose", "Google Maps API", "Material Design"],
    image: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Illicitus25/Zoo-Explorer"
  }
];

export default projects;
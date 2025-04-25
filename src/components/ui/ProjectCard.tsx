import { useState } from 'react';
import { Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'ml' | 'android';
  technologies: string[];
  image: string;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-light dark:bg-primary-light rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4`}>
          <div>
            <span className="text-xs uppercase tracking-wider text-light font-semibold bg-accent dark:bg-highlight px-2 py-1 rounded">
              {project.category === 'ml' ? 'Machine Learning' : 'Android'}
            </span>
          </div>
          
          <div className="flex space-x-3">
            <a 
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-light/20 hover:bg-light/40 rounded-full backdrop-blur-sm transition-colors"
              aria-label="View Code"
            >
              <Github size={18} className="text-light" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl mb-2 text-primary dark:text-light">
          {project.title}
        </h3>
        
        <p className="text-primary/70 dark:text-light/70 text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 bg-accent/10 dark:bg-highlight/10 text-accent dark:text-highlight rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
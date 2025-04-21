import { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import projects from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

type ProjectCategory = 'ml' | 'android' | 'all';

const Projects = () => {
  const [category, setCategory] = useState<ProjectCategory>('all');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);

  return (
    <section 
      id="projects" 
      className="py-20"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            <span className="text-accent dark:text-highlight">Featured</span> Projects
          </h2>
          
          <p className="text-center text-primary/70 dark:text-light/70 max-w-2xl mx-auto mb-12">
            A showcase of my work in Android Development and Machine Learning.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-light dark:bg-primary-light rounded-lg">
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  category === 'all' 
                    ? 'bg-accent dark:bg-highlight text-light' 
                    : 'hover:bg-accent/10 dark:hover:bg-highlight/10'
                }`}
                onClick={() => setCategory('all')}
              >
                All Projects
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  category === 'ml' 
                    ? 'bg-accent dark:bg-highlight text-light' 
                    : 'hover:bg-accent/10 dark:hover:bg-highlight/10'
                }`}
                onClick={() => setCategory('ml')}
              >
                Machine Learning
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  category === 'android' 
                    ? 'bg-accent dark:bg-highlight text-light' 
                    : 'hover:bg-accent/10 dark:hover:bg-highlight/10'
                }`}
                onClick={() => setCategory('android')}
              >
                Android Dev
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
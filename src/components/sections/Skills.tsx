import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import skills from '../../data/skills';

type SkillType = 'all' | 'language' | 'framework' | 'tool' | 'soft';

const Skills = () => {
  const [filter, setFilter] = useState<SkillType>('all');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.type === filter);
    
  const getSkillColor = (type: string) => {
    switch(type) {
      case 'language':
        return 'bg-accent/10 dark:bg-accent/20 text-accent';
      case 'framework':
        return 'bg-secondary/10 dark:bg-secondary/20 text-secondary';
      case 'tool':
        return 'bg-highlight/10 dark:bg-highlight/20 text-highlight-dark dark:text-highlight';
      case 'soft':
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
      default:
        return 'bg-accent/10 dark:bg-accent/20 text-accent';
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            <span className="text-accent dark:text-highlight">My</span> Skills
          </h2>
          
          <p className="text-center text-primary/70 dark:text-light/70 max-w-2xl mx-auto mb-12">
            The technologies and skills I've worked with.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-light dark:bg-primary-light rounded-lg flex-wrap justify-center">
              {(['all', 'language', 'framework', 'tool', 'soft'] as SkillType[]).map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 m-1 rounded-md font-medium transition-colors ${
                    filter === type 
                      ? 'bg-accent dark:bg-highlight text-light' 
                      : 'hover:bg-accent/10 dark:hover:bg-highlight/10'
                  }`}
                  onClick={() => setFilter(type)}
                >
                  {type === 'all' ? 'All Skills' : (
                    type.charAt(0).toUpperCase() + type.slice(1) + (type !== 'soft' ? 's' : ' Skills')
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl ${getSkillColor(skill.type)} transition-transform duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center`}
              >
                <div className="mb-2">
                  {/* Placeholder for skill icon - would use actual icons in production */}
                  <div className="w-12 h-12 rounded-full bg-light dark:bg-primary flex items-center justify-center">
                    <span className="text-xl font-bold">{skill.name.charAt(0)}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-center mb-1">{skill.name}</h3>
                
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 mx-0.5 rounded-full ${
                        i < skill.level ? 'bg-current' : 'bg-current opacity-30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
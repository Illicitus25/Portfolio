import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import achievements from '../../data/achievements';
import { Trophy, Medal, Code } from 'lucide-react';

const Achievements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  const getAchievementIcon = (id: number) => {
    switch(id) {
      case 1:
        return <Medal size={40} className="text-highlight" />;
      case 2:
        return <Trophy size={40} className="text-highlight" />;
      case 3:
        return <Code size={40} className="text-highlight" />;
      default:
        return <Trophy size={40} className="text-highlight" />;
    }
  };
  
  return (
    <section 
      id="achievements" 
      className="py-20 bg-light/30 dark:bg-primary-light"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            <span className="text-accent dark:text-highlight">Achievements</span> & Honors
          </h2>
          
          <p className="text-center text-primary/70 dark:text-light/70 max-w-2xl mx-auto mb-12">
            Recognition and accolades for my work and contributions.
          </p>
          
          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className="mb-8 flex flex-col md:flex-row items-center bg-light dark:bg-primary rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="p-8 bg-accent dark:bg-highlight/30 flex items-center justify-center h-full md:w-48">
                  {getAchievementIcon(achievement.id)}
                </div>
                
                <div className="p-6 md:p-8 w-full">
                  <h3 className="font-display font-semibold text-xl mb-2">{achievement.title}</h3>
                  <p className="text-primary/70 dark:text-light/70">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
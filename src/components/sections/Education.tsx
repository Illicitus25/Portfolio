import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import education from '../../data/education';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  return (
    <section 
      id="education" 
      className="py-20 bg-light/30 dark:bg-primary-light"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            <span className="text-accent dark:text-highlight">Education</span> Journey
          </h2>
          
          <p className="text-center text-primary/70 dark:text-light/70 max-w-2xl mx-auto mb-12">
            My academic qualifications and educational background.
          </p>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 dark:bg-highlight/20 transform md:translate-x-px"></div>
            
            {education.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-0' : 'md:pl-12'
                } md:w-1/2 ml-10 md:ml-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 transform -translate-x-1/2 md:translate-x-1/2 -translate-y-1/3 w-5 h-5 rounded-full bg-accent dark:bg-highlight"></div>
                
                <div className={`p-6 rounded-xl bg-light dark:bg-primary shadow-md transition-transform duration-300 hover:-translate-y-1 ${
                  index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                }`}>
                  <div className="flex items-center mb-3 md:justify-start justify-start">
                    <GraduationCap size={20} className="text-accent dark:text-highlight mr-2" />
                    <h3 className="font-display font-semibold text-xl">{item.institution}</h3>
                  </div>
                  
                  <p className="text-primary/90 dark:text-light/90 font-medium mb-2">{item.degree}</p>
                  
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-primary/70 dark:text-light/70">
                      <Calendar size={16} className="mr-2 flex-shrink-0" />
                      <span>{item.duration}</span>
                    </div>
                    
                    <div className="flex items-center text-primary/70 dark:text-light/70">
                      <Award size={16} className="mr-2 flex-shrink-0" />
                      <span>{item.grade}</span>
                    </div>
                  </div>
                  
                  {item.description && (
                    <p className="mt-3 text-primary/70 dark:text-light/70 text-sm">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
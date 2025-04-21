import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import certifications from '../../data/certifications';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  return (
    <section 
      id="certifications" 
      className="py-20"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            <span className="text-accent dark:text-highlight">Certifications</span> & Courses
          </h2>
          
          <p className="text-center text-primary/70 dark:text-light/70 max-w-2xl mx-auto mb-12">
            Continuous learning and skill enhancement through courses and certifications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="p-6 bg-light dark:bg-primary-light rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 dark:bg-highlight/10 flex items-center justify-center">
                    <Award size={24} className="text-accent dark:text-highlight" />
                  </div>
                </div>
                
                <h3 className="font-display font-semibold text-lg mb-2">{cert.title}</h3>
                
                <p className="text-primary/70 dark:text-light/70 mb-4">{cert.issuer}</p>
                
                <div className="flex items-center text-primary/60 dark:text-light/60 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span>{cert.date}</span>
                </div>
                
                {cert.url && (
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-accent dark:text-highlight hover:underline"
                  >
                    <span className="mr-1">View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
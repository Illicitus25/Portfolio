import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const VideoResume = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  return (
    <section 
      id="video-resume" 
      className="py-20 bg-light/30 dark:bg-primary-light"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            <span className="text-accent dark:text-highlight">Video</span> Résumé
          </h2>
          
          <p className="text-center text-primary/70 dark:text-light/70 max-w-2xl mx-auto mb-12">
            Get to know me better through my video presentation.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-xl bg-light dark:bg-primary">
              <div className="aspect-w-16 aspect-h-9 relative">
                <iframe
                  src="https://www.youtube.com/embed/GQ0oj_LnzLc"
                  title="Video Resume"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-3 text-primary dark:text-light">
                  Prakhyat Singh - Android & ML Developer
                </h3>
                
                <p className="text-primary/70 dark:text-light/70 mb-6">
                  In this video, I talk about my journey in tech, showcase my projects, and share my vision 
                  for creating impactful applications through Android development and machine learning.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/Prakhyat_Singh_Resume.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light dark:bg-highlight dark:hover:bg-highlight-light text-light font-medium rounded-lg transition-colors"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                  
                  <div className="flex gap-3">
                    <a 
                      href="https://github.com/Illicitus25" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-primary/80 dark:text-light/80 bg-accent/10 dark:bg-highlight/10 hover:bg-accent/20 dark:hover:bg-highlight/20 rounded-lg transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/prakhyat25" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-primary/80 dark:text-light/80 bg-accent/10 dark:bg-highlight/10 hover:bg-accent/20 dark:hover:bg-highlight/20 rounded-lg transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="mailto:prakhyatsingh0777@gmail.com" 
                      className="p-2 text-primary/80 dark:text-light/80 bg-accent/10 dark:bg-highlight/10 hover:bg-accent/20 dark:hover:bg-highlight/20 rounded-lg transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoResume;
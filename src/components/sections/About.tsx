import { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { User, Award, Code, Brain } from 'lucide-react';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  return (
    <section 
      id="about" 
      className="py-20 bg-light/30 dark:bg-primary-light"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            <span className="text-accent dark:text-highlight">About</span> Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-light dark:bg-primary shadow-lg rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8473941/pexels-photo-8473941.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Prakhyat Singh" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <p className="text-lg leading-relaxed mb-6">
                I'm Prakhyat Singh, a Computer Science undergrad passionate about building intelligent, user-friendly tech.
                <br /><br />
                Whether it's Android apps that simplify daily life or machine learning models that solve real-world problems — I enjoy working at the intersection of creativity and logic.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                I specialize in Android development with Kotlin and Jetpack Compose, and have hands-on experience in machine learning using Python, BERT, and Scikit-learn. I love exploring how AI                 can enhance user experiences — from smart expense tracking to personalized fashion recommendations.
                <br /><br />
                Currently pursuing my B.Tech at Lovely Professional University, I’m always looking to collaborate on innovative ideas, hackathons, or internships where I can learn, contribute,                    and grow.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="p-3 bg-accent/10 dark:bg-highlight/10 rounded-lg mr-4">
                    <User size={24} className="text-accent dark:text-highlight" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Student</h3>
                    <p className="text-primary/70 dark:text-light/70">B.Tech at LPU</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-accent/10 dark:bg-highlight/10 rounded-lg mr-4">
                    <Code size={24} className="text-accent dark:text-highlight" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Developer</h3>
                    <p className="text-primary/70 dark:text-light/70">Android & ML</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-accent/10 dark:bg-highlight/10 rounded-lg mr-4">
                    <Award size={24} className="text-accent dark:text-highlight" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Excellence</h3>
                    <p className="text-primary/70 dark:text-light/70">Dean's Top 10%</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-accent/10 dark:bg-highlight/10 rounded-lg mr-4">
                    <Brain size={24} className="text-accent dark:text-highlight" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Problem Solver</h3>
                    <p className="text-primary/70 dark:text-light/70">Critical Thinker</p>
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

export default About;
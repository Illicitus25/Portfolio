import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/5 dark:bg-accent/10 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-secondary/5 dark:bg-secondary/10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-highlight/5 dark:bg-highlight/10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className={`max-w-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            <span className="text-accent dark:text-highlight">Hi, I'm Prakhyat Singh</span> 
            <span className="block mt-2">— building smart Android apps and AI-powered solutions.</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-primary/80 dark:text-light/80">
            B.Tech Computer Science student passionate about creating elegant, 
            intelligent applications that solve real-world problems.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-accent hover:bg-accent-light dark:bg-highlight dark:hover:bg-highlight-light text-light font-medium rounded-lg transition-colors duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-accent dark:border-highlight text-accent dark:text-highlight hover:bg-accent/10 dark:hover:bg-highlight/10 font-medium rounded-lg transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-full border-2 border-accent/30 dark:border-highlight/30 hover:border-accent dark:hover:border-highlight animate-bounce transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={24} className="text-accent dark:text-highlight" />
      </a>
    </section>
  );
};

export default Hero;
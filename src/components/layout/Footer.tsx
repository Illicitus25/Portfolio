import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light/80 dark:bg-primary-light py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-2xl font-display font-bold text-accent dark:text-highlight"
            >
              PS<span className="text-secondary">.dev</span>
            </a>
            <p className="mt-2 text-sm text-primary/70 dark:text-light/70">
              &copy; {currentYear} Prakhyat Singh. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Illicitus25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-primary/80 dark:text-light/80 hover:text-accent dark:hover:text-highlight transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/prakhyat25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-primary/80 dark:text-light/80 hover:text-accent dark:hover:text-highlight transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:prakhyatsingh0777@gmail.com" 
              className="p-2 text-primary/80 dark:text-light/80 hover:text-accent dark:hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+917054611559" 
              className="p-2 text-primary/80 dark:text-light/80 hover:text-accent dark:hover:text-highlight transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
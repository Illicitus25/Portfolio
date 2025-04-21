import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import Download from '../ui/Download';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo form - in a real portfolio, this would send an email.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <section 
      id="contact" 
      className="py-20"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            <span className="text-accent dark:text-highlight">Get In</span> Touch
          </h2>
          
          <p className="text-center text-primary/70 dark:text-light/70 max-w-2xl mx-auto mb-12">
            Have a question or want to work together? Feel free to contact me!
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <form onSubmit={handleSubmit} className="bg-light dark:bg-primary-light p-8 rounded-xl shadow-md">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-primary border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-highlight"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-primary border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-highlight"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-primary border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-highlight"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-primary border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-highlight resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent hover:bg-accent-light dark:bg-highlight dark:hover:bg-highlight-light text-light font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-display font-semibold text-2xl mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-accent/10 dark:bg-highlight/10 rounded-lg mr-4">
                      <Mail size={24} className="text-accent dark:text-highlight" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a 
                        href="mailto:prakhyatsingh0777@gmail.com" 
                        className="text-primary/70 dark:text-light/70 hover:text-accent dark:hover:text-highlight transition-colors"
                      >
                        prakhyatsingh0777@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-accent/10 dark:bg-highlight/10 rounded-lg mr-4">
                      <Phone size={24} className="text-accent dark:text-highlight" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a 
                        href="tel:+917054611559" 
                        className="text-primary/70 dark:text-light/70 hover:text-accent dark:hover:text-highlight transition-colors"
                      >
                        +91 7054 611 559
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-accent/10 dark:bg-highlight/10 rounded-lg mr-4">
                      <MapPin size={24} className="text-accent dark:text-highlight" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-primary/70 dark:text-light/70">
                        Lovely Professional University, Punjab, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-display font-semibold text-xl mb-4">Connect With Me</h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Illicitus25" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-accent/10 dark:bg-highlight/10 hover:bg-accent/20 dark:hover:bg-highlight/20 rounded-lg transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} className="text-accent dark:text-highlight" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/prakhyat25" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-accent/10 dark:bg-highlight/10 hover:bg-accent/20 dark:hover:bg-highlight/20 rounded-lg transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} className="text-accent dark:text-highlight" />
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
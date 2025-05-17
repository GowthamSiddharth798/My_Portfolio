import React from 'react';
import { Link } from 'react-scroll';
import { FileText, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-accent-50/30 dark:from-primary-950/30 dark:to-gray-900"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-primary-500 dark:text-primary-400">Kaza Gowtham</span> Siddharth
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-300 font-medium mb-6">
              Electrical Engineer | Frontend Developer | Innovator
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              Final-year B.Tech student passionate about Electrical Systems and Frontend Development. 
              Interested in working on smart systems, renewable energy, and user interface development.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="/Kaza_gowtham_siddharth.pdf" 
                download
                className="px-6 py-3 rounded-md bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200 flex items-center"
              >
                <FileText size={18} className="mr-2" /> View Resume
              </a>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 rounded-md bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center cursor-pointer"
              >
                <Mail size={18} className="mr-2" /> Contact Me
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
           <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="/profile.png" 
                alt="Kaza Gowtham Siddharth"
                className="w-full h-full object-cover"
              />
            </div>

          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</p>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="animate-bounce cursor-pointer"
          >
            <ChevronDown size={24} className="text-primary-500 dark:text-primary-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
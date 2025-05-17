import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-primary-500 dark:text-primary-400">
              Kaza Gowtham Siddharth
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Electrical Engineer | Web Developer | Innovator
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/GowthamSiddharth798" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/kazagowthamsiddharth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kazagowtham@gmail.com" 
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+917989094014" 
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Kaza Gowtham Siddharth. All rights reserved.
          </p>
          <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-1">
            IEEE Active Member since 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
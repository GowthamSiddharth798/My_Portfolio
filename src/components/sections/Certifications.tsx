import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../../data';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary-500 dark:text-primary-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications that enhance my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((certification, index) => (
            <motion.div 
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 h-full"
            >
              <div className="bg-primary-50 dark:bg-primary-900/30 p-4 flex items-center justify-center">
                <Award size={40} className="text-primary-500 dark:text-primary-400" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {certification.title}
                  </h3>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  {certification.date}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {certification.provider}
                  </h4>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {certification.description}
                </p>
                
                {certification.link && (
                  <a 
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    View Certificate <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
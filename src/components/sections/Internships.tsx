import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { internships } from '../../data';

const Internships: React.FC = () => {
  return (
    <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-primary-500 dark:text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey through various internships and work experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <motion.div 
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800 last:border-transparent last:pb-0"
            >
              <div className="absolute left-[-10px] top-0 w-5 h-5 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0">
                    {internship.role}
                  </h3>
                  <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {internship.timeline}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Briefcase size={16} className="mr-1 text-primary-500 dark:text-primary-400" />
                    <span>{internship.company}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <MapPin size={16} className="mr-1 text-primary-500 dark:text-primary-400" />
                    <span>{internship.location}</span>
                    <span className="ml-2 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      {internship.type}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {internship.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                {internship.technologies && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
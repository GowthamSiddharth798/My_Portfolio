import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, School } from 'lucide-react';
import { education } from '../../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary-500 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Dedicated and enthusiastic Electrical and Electronics Engineering student with a passion for innovation and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Objective
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A passionate Electrical and Electronics Engineering student seeking to leverage my technical skills and knowledge in electrical systems design, power electronics, and web development to contribute to innovative projects in the field of energy systems and smart technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I aim to combine my understanding of electrical engineering concepts with programming skills to develop efficient, sustainable, and user-friendly solutions that address real-world challenges. My focus areas include renewable energy integration, IoT applications, and intelligent control systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Looking for opportunities where I can apply both my theoretical knowledge and practical skills to innovative projects while continuing to learn and grow as a professional engineer.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Memberships
              </h4>
              <div className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen size={20} className="text-primary-500 dark:text-primary-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    IEEE Active Member
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Active member since 2023, participating in technical workshops and conferences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l-2 border-primary-200 dark:border-primary-800 last:border-transparent last:pb-0"
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        {edu.timeline}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <School size={16} className="mr-2 text-primary-500 dark:text-primary-400" />
                      <p className="text-gray-700 dark:text-gray-300">
                        {edu.institution}
                      </p>
                    </div>
                    <p className="text-primary-600 dark:text-primary-300 font-medium">
                      {edu.score}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
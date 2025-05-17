import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Building, Calendar } from 'lucide-react';
import { achievements } from '../../data';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Honors & <span className="text-primary-500 dark:text-primary-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition and accomplishments throughout my academic and professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex"
            >
              <div className="w-16 sm:w-24 bg-primary-500 dark:bg-primary-600 flex items-center justify-center p-4">
                <Trophy size={32} className="text-white" />
              </div>
              
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Building size={14} className="mr-1 text-primary-500 dark:text-primary-400" />
                    {achievement.organization}
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1 text-primary-500 dark:text-primary-400" />
                    {achievement.date}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
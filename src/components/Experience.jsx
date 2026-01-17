import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Award, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            My career journey through various roles in software engineering, machine learning, and AI development.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-300 to-primary-600"></div>

          <motion.div
            variants={containerVariants}
            className="space-y-12"
          >
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                }`}>
                  <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-lg p-6 card-hover"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4 md:justify-end">
                      <div className={`flex items-center gap-2 text-sm text-gray-600 ${
                        index % 2 === 0 ? 'flex-row-reverse' : ''
                      }`}>
                        <Calendar size={16} />
                        <span>{job.duration}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm text-gray-600 ${
                        index % 2 === 0 ? 'flex-row-reverse' : ''
                      }`}>
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-primary-600 font-medium mb-4">{job.company}</p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Briefcase size={16} />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Award size={16} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Years Experience', count: '5+', icon: '💼' },
            { label: 'Companies', count: portfolioData.experience.length, icon: '🏢' },
            { label: 'Projects Led', count: '20+', icon: '🚀' },
            { label: 'Team Size', count: '5-15', icon: '👥' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 text-center card-hover"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text mb-1">{stat.count}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

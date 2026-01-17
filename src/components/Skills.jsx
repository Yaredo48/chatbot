import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    if (inView && !animatedSkills) {
      setAnimatedSkills(true);
    }
  }, [inView, animatedSkills]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Group skills by category
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getCategoryColor = (category) => {
    const colors = {
      'Programming': 'from-blue-500 to-blue-600',
      'Frontend': 'from-green-500 to-green-600',
      'Backend': 'from-purple-500 to-purple-600',
      'ML/AI': 'from-red-500 to-red-600',
      'Cloud': 'from-yellow-500 to-yellow-600',
      'DevOps': 'from-indigo-500 to-indigo-600',
      'Database': 'from-pink-500 to-pink-600',
      'Tools': 'from-gray-500 to-gray-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains in software engineering and artificial intelligence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 card-hover"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className={`skill-progress bg-gradient-to-r ${getCategoryColor(category)}`}
                        initial={{ width: 0 }}
                        animate={{ width: animatedSkills ? `${skill.level}%` : 0 }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Overview Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { label: 'Programming', count: 2, icon: '💻' },
            { label: 'ML/AI', count: 2, icon: '🤖' },
            { label: 'Cloud/DevOps', count: 2, icon: '☁️' },
            { label: 'Total Skills', count: portfolioData.skills.length, icon: '📊' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 text-center card-hover"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary-600 mb-1">{stat.count}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

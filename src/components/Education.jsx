import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
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
        staggerChildren: 0.2
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

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Education</span> & Certifications
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic background and specialized training in computer science, artificial intelligence, and machine learning.
          </motion.p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl shadow-lg p-8 card-hover border border-primary-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary-600 rounded-lg">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-primary-600 font-medium">{edu.institution}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar size={14} />
                    <span>{edu.graduation}</span>
                  </div>
                </div>
              </div>

              {/* GPA */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={16} className="text-primary-600" />
                  <span className="text-sm font-semibold text-gray-700">GPA</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 inline-block">
                  <span className="text-lg font-bold text-primary-600">{edu.gpa}</span>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={16} className="text-primary-600" />
                  <span className="text-sm font-semibold text-gray-700">Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.relevant.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-primary-700 text-sm rounded-md border border-primary-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Degrees', count: portfolioData.education.length, icon: '🎓' },
            { label: 'Institutions', count: 2, icon: '🏫' },
            { label: 'Courses', count: portfolioData.education.reduce((acc, edu) => acc + edu.relevant.length, 0), icon: '📚' },
            { label: 'Avg GPA', count: '3.85', icon: '⭐' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text mb-1">{stat.count}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Online Courses & Certifications Section */}
        <motion.div
          variants={containerVariants}
          className="mt-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Online <span className="gradient-text">Certifications</span>
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Machine Learning Engineering for Production (MLOps) Specialization",
                provider: "DeepLearning.AI",
                year: "2023",
                icon: "🤖"
              },
              {
                name: "Advanced React and Redux",
                provider: "Udemy",
                year: "2022",
                icon: "⚛️"
              },
              {
                name: "AWS Certified Machine Learning - Specialty",
                provider: "Amazon Web Services",
                year: "2023",
                icon: "☁️"
              },
              {
                name: "Natural Language Processing Specialization",
                provider: "DeepLearning.AI",
                year: "2022",
                icon: "📝"
              },
              {
                name: "Kubernetes Application Developer",
                provider: "Cloud Native Computing Foundation",
                year: "2023",
                icon: "☸️"
              },
              {
                name: "TensorFlow Developer Certificate",
                provider: "Google",
                year: "2022",
                icon: "🧠"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 card-hover border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{cert.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{cert.name}</h4>
                    <p className="text-xs text-gray-600">{cert.provider}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">{cert.year}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

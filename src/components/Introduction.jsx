import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';

const Introduction = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="gradient-text">{portfolioData.personal.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6">
              {portfolioData.personal.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {portfolioData.personal.statement}
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={18} />
                <span className="text-sm">{portfolioData.personal.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={18} />
                <span className="text-sm">{portfolioData.personal.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} />
                <span className="text-sm">{portfolioData.personal.location}</span>
              </div>
            </div>

            {/* Social Links & CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex gap-3">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-primary-600"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-primary-600"
                >
                  <Github size={20} />
                </a>
                <a
                  href={portfolioData.personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-primary-600"
                >
                  <Twitter size={20} />
                </a>
              </div>
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center gap-2 justify-center">
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;

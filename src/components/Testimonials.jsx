import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioData.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioData.testimonials.length) % portfolioData.testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            What colleagues, mentors, and clients have to say about working with me and my professional contributions.
          </motion.p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary-200 opacity-50">
              <Quote size={60} />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <img
                  src={portfolioData.testimonials[currentIndex].avatar}
                  alt={portfolioData.testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                />
              </div>

              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 text-center leading-relaxed italic">
                "{portfolioData.testimonials[currentIndex].content}"
              </blockquote>

              <div className="text-center">
                <cite className="text-lg font-semibold text-gray-900 not-italic">
                  {portfolioData.testimonials[currentIndex].name}
                </cite>
                <p className="text-primary-600 font-medium">
                  {portfolioData.testimonials[currentIndex].position}
                </p>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-primary-600"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {portfolioData.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-primary-600"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className={`bg-white rounded-xl shadow-lg p-6 card-hover border ${
                index === currentIndex ? 'border-primary-300' : 'border-gray-100'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary-600 font-medium">{testimonial.position}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Total Reviews', count: portfolioData.testimonials.length, icon: '💬' },
            { label: 'Average Rating', count: '5.0', icon: '⭐' },
            { label: 'Client Satisfaction', count: '100%', icon: '😊' },
            { label: 'Repeat Clients', count: '85%', icon: '🔄' }
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
      </div>
    </section>
  );
};

export default Testimonials;

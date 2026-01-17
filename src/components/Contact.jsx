import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities, exciting projects, or collaborations. Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                Whether you have a project in mind, want to discuss potential collaborations, or just want to say hello, I'd love to hear from you. I'm committed to responding to all inquiries within 24-48 hours.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Mail size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-900 font-medium hover:text-primary-600 transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Phone size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href={`tel:${portfolioData.personal.phone}`} className="text-gray-900 font-medium hover:text-primary-600 transition-colors">
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <MapPin size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-gray-900 font-medium">{portfolioData.personal.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-3">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-primary-600"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-primary-600"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href={portfolioData.personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-primary-600"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-3">Ready to Start a Project?</h4>
              <p className="mb-4 opacity-90">
                I'm available for freelance work, consulting, and full-time opportunities. Let's discuss how I can help bring your ideas to life.
              </p>
              <button className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                Schedule a Call
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

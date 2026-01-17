import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Calendar, Users, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Publications = () => {
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

  // Separate publications by type
  const academicPapers = portfolioData.publications.filter(pub => 
    pub.journal.includes('ACL') || pub.journal.includes('IEEE') || pub.journal.includes('ACM')
  );
  
  const blogPosts = portfolioData.publications.filter(pub => 
    pub.journal.includes('Medium') || pub.journal.includes('Blog')
  );

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Publications & <span className="gradient-text">Contributions</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            My research papers, technical articles, and contributions to the developer community through open-source and knowledge sharing.
          </motion.p>
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {portfolioData.publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100"
            >
              {/* Publication Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-primary-600" />
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {pub.journal.includes('ACL') || pub.journal.includes('IEEE') || pub.journal.includes('ACM') ? 'Academic Paper' :
                     pub.journal.includes('Medium') || pub.journal.includes('Blog') ? 'Blog Post' : 'Book'}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar size={12} />
                  <span>{pub.year}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                {pub.title}
              </h3>

              {/* Authors */}
              <div className="flex items-center gap-2 mb-3">
                <Users size={14} className="text-gray-500" />
                <p className="text-sm text-gray-600 line-clamp-1">{pub.authors}</p>
              </div>

              {/* Journal/Venue */}
              <div className="mb-4">
                <p className="text-sm text-primary-600 font-medium">{pub.journal}</p>
              </div>

              {/* Link */}
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                Read Publication
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Source Contributions */}
        <motion.div
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Open Source <span className="gradient-text">Contributions</span>
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                name: "TensorFlow Models",
                description: "Contributed to official TensorFlow models repository with new NLP architectures and optimization techniques.",
                stars: "2.5k+",
                forks: "800+",
                link: "https://github.com/tensorflow/models"
              },
              {
                name: "Scikit-learn",
                description: "Added new preprocessing utilities and improved documentation for machine learning algorithms.",
                stars: "56k+",
                forks: "25k+",
                link: "https://github.com/scikit-learn/scikit-learn"
              },
              {
                name: "Hugging Face Transformers",
                description: "Contributed to transformer models and added support for new model architectures.",
                stars: "120k+",
                forks: "24k+",
                link: "https://github.com/huggingface/transformers"
              },
              {
                name: "MLflow",
                description: "Enhanced experiment tracking capabilities and added new integrations with popular ML frameworks.",
                stars: "14k+",
                forks: "3.2k+",
                link: "https://github.com/mlflow/mlflow"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 card-hover border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                  <div className="flex gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      ⭐ {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      🍴 {project.forks}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Publications Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Publications', count: portfolioData.publications.length, icon: '📄' },
            { label: 'Academic Papers', count: academicPapers.length, icon: '🎓' },
            { label: 'Blog Posts', count: blogPosts.length, icon: '📝' },
            { label: 'OSS Contributions', count: '4+', icon: '🌟' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 text-center"
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

export default Publications;

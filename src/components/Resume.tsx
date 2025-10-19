import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="resume"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-64 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-lg flex items-center justify-center shadow-2xl">
                  <FileText className="w-24 h-24 text-white" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Yuvi Goyal's Resume
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Download my comprehensive resume to learn more about my education, technical
                  skills, work experience, projects, and achievements. The document includes
                  detailed information about my journey as a developer and my contributions to
                  various projects.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Education:</span> B.Tech CSE
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Experience:</span> 3+ Years
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Projects:</span> 15+ Completed
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Certifications:</span> 5+
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="btn-primary flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      Download PDF
                    </button>
                    <button className="btn-secondary flex items-center justify-center gap-2">
                      <ExternalLink className="w-5 h-5" />
                      View Online
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <div className="card text-center">
              <div className="text-4xl font-bold text-gradient mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-gradient mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-gradient mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Looking for a dedicated developer for your team?
            </p>
            <a href="#contact" className="text-primary-500 hover:text-primary-600 font-semibold">
              Let's get in touch →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

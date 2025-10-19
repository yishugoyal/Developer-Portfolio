import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'MediScan AI',
      description:
        'AI-powered medical diagnosis system using computer vision to analyze medical images and provide preliminary diagnosis with 92% accuracy.',
      fullDescription:
        'MediScan AI leverages deep learning models to assist healthcare professionals in diagnosing various conditions from medical imaging. The system includes features like image preprocessing, model inference, and detailed reporting with confidence scores.',
      tech: ['Python', 'TensorFlow', 'Flask', 'React', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://mediscan-demo.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Chatbot Assistant',
      description:
        'Intelligent conversational AI chatbot with NLP capabilities for customer support, built using modern frameworks.',
      fullDescription:
        'A sophisticated chatbot that understands context, handles multi-turn conversations, and integrates with various APIs for providing real-time information. Features include sentiment analysis, intent recognition, and multilingual support.',
      tech: ['Node.js', 'Python', 'OpenAI API', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://chatbot-demo.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern, responsive developer portfolio with dark mode, animations, and interactive components built with React.',
      fullDescription:
        'A fully responsive portfolio website showcasing projects, skills, and achievements. Features include smooth animations, dark mode toggle, contact form integration, and optimized performance.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://portfolio-demo.com',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'College Management System',
      description:
        'Comprehensive web application for managing student records, attendance, grades, and administrative tasks.',
      fullDescription:
        'A complete solution for educational institutions featuring role-based access control, real-time notifications, grade management, attendance tracking, and parent-teacher communication portal.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery'],
      github: 'https://github.com',
      demo: 'https://cms-demo.com',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      fullDescription:
        'A scalable e-commerce platform with features like product catalog, shopping cart, secure payment processing, order tracking, and comprehensive admin panel for inventory and order management.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://ecommerce-demo.com',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Weather Forecast App',
      description:
        'Real-time weather application with location-based forecasting, interactive maps, and weather alerts.',
      fullDescription:
        'A beautiful weather application that provides current conditions, hourly and weekly forecasts, radar maps, and severe weather alerts. Features include location search, geolocation support, and favorite locations.',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://weather-demo.com',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section
      id="projects"
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div
                className={`h-48 rounded-lg bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-white text-6xl font-bold opacity-20">
                  {project.title.substring(0, 2)}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gradient transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className={`h-64 rounded-lg bg-gradient-to-br ${projects[selectedProject].gradient} mb-6 flex items-center justify-center`}
            >
              <div className="text-white text-8xl font-bold opacity-20">
                {projects[selectedProject].title.substring(0, 2)}
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {projects[selectedProject].title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {projects[selectedProject].fullDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={projects[selectedProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              <a
                href={projects[selectedProject].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;

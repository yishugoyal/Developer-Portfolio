import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Trophy, Target, X } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);

  const achievements = [
    {
      title: 'Smart India Hackathon 2024',
      category: 'Hackathon',
      description: 'Winner - Built an AI-powered solution for smart city management',
      date: 'March 2024',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      details:
        'Led a team of 6 to develop a comprehensive smart city management system using IoT sensors, machine learning for traffic prediction, and a real-time dashboard for city administrators. Our solution was recognized for its scalability and practical implementation approach.',
    },
    {
      title: 'HackerRank Gold Badge',
      category: 'Certification',
      description: 'Problem Solving & Algorithms - Top 5% globally',
      date: 'January 2024',
      icon: Award,
      color: 'from-blue-400 to-cyan-500',
      details:
        'Achieved Gold Badge by solving 100+ algorithmic challenges across data structures, dynamic programming, and graph theory. Ranked in the top 5% of participants globally with a focus on optimized and efficient solutions.',
    },
    {
      title: 'Google Cloud Certified',
      category: 'Certification',
      description: 'Associate Cloud Engineer certification',
      date: 'December 2023',
      icon: Target,
      color: 'from-green-400 to-teal-500',
      details:
        'Demonstrated proficiency in deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud Platform. Completed hands-on labs covering compute, storage, networking, and security services.',
    },
    {
      title: 'MLH Fellowship',
      category: 'Fellowship',
      description: 'Open Source Contributor - Fall 2023 Batch',
      date: 'October 2023',
      icon: Award,
      color: 'from-purple-400 to-pink-500',
      details:
        'Selected among 2000+ applicants to participate in a 12-week remote fellowship program. Contributed to major open-source projects, collaborated with developers worldwide, and learned industry-standard development practices.',
    },
    {
      title: 'College Tech Fest Winner',
      category: 'Competition',
      description: 'First Prize - Web Development Challenge',
      date: 'September 2023',
      icon: Trophy,
      color: 'from-red-400 to-orange-500',
      details:
        'Won the inter-college web development competition by creating a fully functional e-learning platform in 24 hours. The project featured real-time collaboration, video conferencing, and an intelligent recommendation system.',
    },
    {
      title: 'AWS Certified Developer',
      category: 'Certification',
      description: 'AWS Certified Developer - Associate',
      date: 'August 2023',
      icon: Target,
      color: 'from-indigo-400 to-blue-500',
      details:
        'Validated expertise in developing and maintaining applications on AWS. Demonstrated knowledge of core AWS services, security best practices, and deployment strategies for scalable cloud applications.',
    },
  ];

  const categories = ['All', 'Hackathon', 'Certification', 'Fellowship', 'Competition'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAchievements =
    activeCategory === 'All'
      ? achievements
      : achievements.filter((a) => a.category === activeCategory);

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group cursor-pointer hover:scale-105"
              onClick={() => setSelectedAchievement(index)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`p-4 bg-gradient-to-br ${achievement.color} rounded-xl transform group-hover:rotate-12 transition-transform duration-300`}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {achievement.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1 line-clamp-2">
                    {achievement.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {achievement.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">{achievement.date}</span>
                <span className="text-xs text-primary-500 font-medium group-hover:text-gradient">
                  View Details →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedAchievement !== null && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAchievement(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <div
                className={`p-6 bg-gradient-to-br ${filteredAchievements[selectedAchievement].color} rounded-2xl`}
              >
                {(() => {
                  const Icon = filteredAchievements[selectedAchievement].icon;
                  return <Icon className="w-12 h-12 text-white" />;
                })()}
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {filteredAchievements[selectedAchievement].category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {filteredAchievements[selectedAchievement].title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {filteredAchievements[selectedAchievement].date}
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {filteredAchievements[selectedAchievement].details}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Achievements;

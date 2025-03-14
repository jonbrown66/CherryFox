import React from 'react';
import { motion } from 'framer-motion';

const featuresList = [
  {
    icon: 'fa-rocket',
    title: '快速响应',
    description: '我们的系统提供快速响应，确保您的业务不会因为技术问题而停滞。'
  },
  {
    icon: 'fa-shield-alt',
    title: '安全保障',
    description: '安全是我们的首要任务，采用最新的安全技术保护您的数据。'
  },
  {
    icon: 'fa-cogs',
    title: '自动化工作流',
    description: '通过自动化工作流程，减少人为错误，提高工作效率。'
  },
  {
    icon: 'fa-chart-line',
    title: '数据分析',
    description: '强大的数据分析工具，帮助您做出更明智的业务决策。'
  },
  {
    icon: 'fa-mobile-alt',
    title: '响应式设计',
    description: '在任何设备上都能提供完美的用户体验，无论是桌面还是移动设备。'
  },
  {
    icon: 'fa-cloud',
    title: '云端部署',
    description: '利用云技术，让您随时随地访问和管理您的业务。'
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <section id="features" className="py-20 dark:bg-gray-900">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">我们的功能</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">探索我们平台的强大功能</p>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-gray-700/30 rounded-full flex items-center justify-center mb-6">
                <i className={`fas ${feature.icon} text-primary dark:text-secondary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 
import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    title: '网站开发',
    description: '创建现代化、响应式网站，提供卓越的用户体验。',
    features: ['定制设计', '响应式布局', 'SEO优化', '内容管理系统'],
    icon: 'fa-laptop-code'
  },
  {
    title: '移动应用',
    description: '开发跨平台移动应用，满足您的业务需求。',
    features: ['iOS和Android平台', '原生性能', '离线功能', '推送通知'],
    icon: 'fa-mobile-alt'
  },
  {
    title: 'UI/UX设计',
    description: '创造引人入胜的用户界面和卓越的用户体验。',
    features: ['用户研究', '原型设计', '视觉设计', '可用性测试'],
    icon: 'fa-pencil-ruler'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">我们的服务</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">我们提供专业服务，满足您的各种需求</p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-primary dark:bg-gray-900 p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className={`fas ${service.icon} text-white`}></i>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <i className="fas fa-check text-secondary mr-2"></i>
                      <span className="dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-8 w-full py-3 bg-primary dark:bg-gray-900 text-white font-medium rounded-md hover:bg-secondary dark:hover:bg-purple-700 transition-colors duration-300">
                  了解更多
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
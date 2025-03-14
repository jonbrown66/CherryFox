import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: '你们的服务适合什么规模的企业？',
    answer: '我们的服务适合各种规模的企业，从初创公司到大型企业。我们提供可扩展的解决方案，可以根据您的业务需求进行定制。'
  },
  {
    question: '服务的定价是如何计算的？',
    answer: '我们的定价基于您选择的计划和所需的功能。我们提供月付和年付选项，年付可享受更多优惠。详细的定价信息可以在我们的价格页面上找到。'
  },
  {
    question: '可以随时升级或降级我的计划吗？',
    answer: '是的，您可以随时升级到更高级的计划以获取更多功能。降级也是可能的，但建议在结算周期结束时进行，以获得最大的价值。'
  },
  {
    question: '你们提供哪些支持选项？',
    answer: '我们提供多种支持选项，包括电子邮件支持、在线聊天和电话支持。高级计划用户可获得优先支持和专属客户经理。'
  },
  {
    question: '数据安全性如何保障？',
    answer: '数据安全是我们的首要任务。我们使用最新的加密技术和安全协议来保护您的数据。我们的系统定期进行安全审计，以确保最高级别的保护。'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">常见问题</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">对我们服务的一些常见疑问解答</p>
        </motion.div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button 
                className={`w-full p-4 text-left text-lg font-medium rounded-lg flex justify-between items-center ${
                  activeIndex === index 
                    ? 'bg-secondary/10 dark:bg-secondary/20 text-secondary' 
                    : 'bg-white dark:bg-gray-700 text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
                onClick={() => toggleItem(index)}
              >
                {item.question}
                <span className="flex-shrink-0 ml-2">
                  {activeIndex === index ? (
                    <i className="fas fa-minus text-secondary"></i>
                  ) : (
                    <i className="fas fa-plus text-primary dark:text-gray-400"></i>
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white dark:bg-gray-700 rounded-b-lg border-t-0 border border-gray-100 dark:border-gray-600 text-gray-600 dark:text-gray-300">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-6">还有其他问题？请直接联系我们</p>
          <button className="btn bg-primary hover:bg-secondary">联系我们</button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 
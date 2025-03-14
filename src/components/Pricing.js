import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: '基础版',
    monthlyPrice: '99',
    yearlyPrice: '990',
    description: '适合小型企业和个人的基础选择',
    features: [
      { text: '5个项目', included: true },
      { text: '20GB存储空间', included: true },
      { text: '基础支持', included: true },
      { text: '高级功能', included: false },
      { text: '自定义域名', included: false },
      { text: '优先支持', included: false },
    ],
    buttonText: '选择基础版',
    highlighted: false
  },
  {
    name: '专业版',
    monthlyPrice: '199',
    yearlyPrice: '1990',
    description: '适合中小企业的专业解决方案',
    features: [
      { text: '15个项目', included: true },
      { text: '50GB存储空间', included: true },
      { text: '高级支持', included: true },
      { text: '高级功能', included: true },
      { text: '自定义域名', included: true },
      { text: '优先支持', included: false },
    ],
    buttonText: '选择专业版',
    highlighted: true
  },
  {
    name: '企业版',
    monthlyPrice: '399',
    yearlyPrice: '3990',
    description: '适合大型企业的全方位解决方案',
    features: [
      { text: '无限项目', included: true },
      { text: '200GB存储空间', included: true },
      { text: '高级支持', included: true },
      { text: '高级功能', included: true },
      { text: '自定义域名', included: true },
      { text: '优先支持', included: true },
    ],
    buttonText: '联系我们',
    highlighted: false
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section id="pricing" className="py-20 dark:bg-gray-900">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">价格方案</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">选择最适合您需求的方案</p>
          
          <div className="mt-8 inline-flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            <button 
              className={`py-2 px-6 rounded-full ${!isYearly ? 'bg-white dark:bg-gray-700 shadow-md text-primary dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}
              onClick={() => setIsYearly(false)}
            >
              月付
            </button>
            <button 
              className={`py-2 px-6 rounded-full ${isYearly ? 'bg-white dark:bg-gray-700 shadow-md text-primary dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}
              onClick={() => setIsYearly(true)}
            >
              年付 <span className="text-xs ml-1 text-secondary">省20%</span>
            </button>
          </div>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`${plan.highlighted ? 'relative lg:-mt-8' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-0 right-0">
                  <div className="bg-secondary text-white text-center py-1 px-4 rounded-full max-w-max mx-auto text-sm">
                    推荐方案
                  </div>
                </div>
              )}
              
              <div className={`bg-primary dark:bg-gray-800 text-white p-8 rounded-t-lg ${plan.highlighted ? 'bg-secondary' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-200 dark:text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">¥{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-300 dark:text-gray-400 ml-2">/{isYearly ? '年' : '月'}</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-b-lg border-t-0 border border-gray-200 dark:border-gray-600">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <i className={`fas ${feature.included ? 'fa-check text-green-500' : 'fa-times text-red-500'} mr-3`}></i>
                      <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`mt-8 w-full py-3 font-medium rounded-md transition-colors duration-300 ${
                  plan.highlighted ? 'bg-secondary text-white hover:bg-secondary/90' : 'bg-primary dark:bg-gray-800 text-white hover:bg-primary/90 dark:hover:bg-gray-700'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 
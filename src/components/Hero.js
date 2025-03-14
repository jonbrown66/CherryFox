import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-light dark:bg-gray-800 min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* 背景动画元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 dark:bg-gray-700/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-primary dark:text-white mb-6">
              现代解决方案<br />满足您的业务需求
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              我们提供创新的技术解决方案，帮助您的企业在数字时代中蓬勃发展。立即开始您的转型之旅。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn">了解更多</button>
              <button className="btn btn-outline dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">联系我们</button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* 图片背景光晕 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-primary/30 dark:from-secondary/20 dark:to-gray-700/30 rounded-2xl blur-lg"></div>
            
            {/* 用卡片替换主图片 */}
            <motion.div
              className="relative w-full h-[400px] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              {/* 卡片内的装饰元素 */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-gray-700/20 dark:to-secondary/10"></div>
              <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-primary/10 to-secondary/10 dark:from-gray-700/20 dark:to-secondary/10"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <i className="fas fa-rocket text-secondary text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">数字化转型</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">为您的企业打造数字化解决方案，提升效率与竞争力</p>
                
                <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-xs">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-primary dark:text-white">500+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">成功案例</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-primary dark:text-white">98%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">客户满意度</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* 浮动元素 */}
            <motion.div 
              className="absolute -right-4 -bottom-4 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600"
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 dark:bg-gray-700/40 rounded-full">
                <i className="fas fa-chart-line text-2xl text-primary dark:text-secondary"></i>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -left-4 top-1/4 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600"
              animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-secondary/10 dark:bg-purple-500/20 rounded-full">
                <i className="fas fa-lightbulb text-2xl text-secondary dark:text-purple-400"></i>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
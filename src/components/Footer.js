import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Cherry</span>
              <span className="text-secondary">Fox</span>
            </h3>
            <p className="text-gray-300 mb-6">我们致力于为客户提供最佳解决方案，帮助企业实现数字化转型。</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary transition-colors duration-300 flex items-center justify-center">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary transition-colors duration-300 flex items-center justify-center">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary transition-colors duration-300 flex items-center justify-center">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary transition-colors duration-300 flex items-center justify-center">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">公司</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-secondary transition-colors">关于我们</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">团队</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">职业机会</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">新闻</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">联系我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">服务</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-secondary transition-colors">网站开发</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-secondary transition-colors">移动应用</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-secondary transition-colors">UI/UX设计</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">咨询服务</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">维护支持</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                <span className="text-gray-300">北京市朝阳区XX大厦100号</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-secondary"></i>
                <span className="text-gray-300">+86 123 4567 8910</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-secondary"></i>
                <span className="text-gray-300">info@example.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 CherryFox. 保留所有权利。</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">隐私政策</a>
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">服务条款</a>
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Cookie 设置</a>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div
        className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary mt-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </footer>
  );
};

export default Footer; 
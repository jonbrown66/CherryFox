import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-primary dark:text-white">Cherry</span>
            <span className="text-secondary">Fox</span>
          </h1>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors">关于我们</a>
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors">功能</a>
          <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors">服务</a>
          <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors">价格</a>
          <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors">常见问题</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <div className="hidden lg:block">
            <button className="btn">立即开始</button>
          </div>
          
          <button 
            className="lg:hidden text-primary dark:text-white" 
            onClick={toggle}
            aria-label="菜单"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 
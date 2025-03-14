import React, { createContext, useState, useEffect } from 'react';

// 创建主题上下文
export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {}
});

// 主题提供者组件
export const ThemeProvider = ({ children }) => {
  // 从localStorage读取主题设置或使用默认值
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
          (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // 切换主题函数
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // 当主题变化时，更新HTML的class和localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // 提供主题上下文给子组件
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    
    // Detectar preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Actualizar clases de Tailwind
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const themeClasses = {
    dark: {
      bg: 'bg-black',
      bgSecondary: 'bg-gray-900/50',
      bgTertiary: 'bg-gray-800/30',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      textMuted: 'text-gray-400',
      border: 'border-gray-800/50',
      accent: 'from-blue-500 to-cyan-400',
      card: 'bg-gray-900/20 border-gray-800/30',
      cardHover: 'hover:bg-gray-900/40 hover:border-blue-500/30',
      glass: 'bg-black/60 backdrop-blur-md border-gray-800/20',
      glow: 'shadow-blue-500/20'
    },
    light: {
      bg: 'bg-gray-800',
      bgSecondary: 'bg-gray-700/70',
      bgTertiary: 'bg-gray-600/50',
      text: 'text-gray-100',
      textSecondary: 'text-gray-200',
      textMuted: 'text-gray-300',
      border: 'border-gray-600/50',
      accent: 'from-blue-500 to-cyan-400',
      card: 'bg-gray-700/30 border-gray-600/30',
      cardHover: 'hover:bg-gray-700/50 hover:border-blue-400/50',
      glass: 'bg-gray-800/60 backdrop-blur-md border-gray-600/20',
      glow: 'shadow-blue-400/30'
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      themeClasses: themeClasses[theme] 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { theme, toggleTheme, themeClasses } = useTheme();
  
  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative h-8 w-16 rounded-full p-1 transition-all duration-300 ${themeClasses.bgTertiary} ${themeClasses.border} border flex items-center justify-between`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Fondo del track */}
      <div className={`absolute inset-1 rounded-full bg-gradient-to-r ${themeClasses.accent} opacity-10`} />
      
      {/* Iconos fijos en posiciones */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-2">
        <FaSun className={`text-xs transition-colors duration-300 ${theme === 'light' ? 'text-yellow-500' : themeClasses.textMuted.replace('text-', 'text-')}`} />
        <FaMoon className={`text-xs transition-colors duration-300 ${theme === 'dark' ? 'text-blue-400' : themeClasses.textMuted.replace('text-', 'text-')}`} />
      </div>
      
      {/* Indicador deslizante */}
      <motion.div
        className={`absolute h-6 w-6 rounded-full ${themeClasses.card} shadow-lg border ${themeClasses.border} flex items-center justify-center z-20`}
        animate={{
          x: theme === 'dark' ? 24 : 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {theme === 'dark' ? (
          <FaMoon className="text-blue-400 text-xs" />
        ) : (
          <FaSun className="text-yellow-500 text-xs" />
        )}
      </motion.div>
    </motion.button>
  );
};
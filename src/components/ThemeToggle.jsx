import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { theme, toggleTheme, themeClasses } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative h-10 w-20 rounded-full p-1
        transition-all duration-300
        ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-slate-200 border border-slate-300'}
        flex items-center
        shadow-inner
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Iconos de fondo */}
      <div className="absolute inset-0 flex items-center justify-between px-2.5">
        <FaSun className={`text-sm transition-all duration-300 ${theme === 'light' ? 'text-amber-500' : 'text-gray-600'}`} />
        <FaMoon className={`text-sm transition-all duration-300 ${theme === 'dark' ? 'text-blue-400' : 'text-slate-400'}`} />
      </div>

      {/* Indicador deslizante */}
      <motion.div
        className={`
          absolute h-8 w-8 rounded-full
          flex items-center justify-center
          shadow-lg
          ${theme === 'dark'
            ? 'bg-gradient-to-br from-blue-500 to-cyan-400'
            : 'bg-gradient-to-br from-amber-400 to-orange-500'
          }
        `}
        animate={{
          x: theme === 'dark' ? 42 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {theme === 'dark' ? (
          <FaMoon className="text-white text-sm" />
        ) : (
          <FaSun className="text-white text-sm" />
        )}
      </motion.div>
    </motion.button>
  );
};

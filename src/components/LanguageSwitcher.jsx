import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useTheme } from '../hooks/useTheme';

export const LanguageSwitcher = () => {
  const { language, changeLanguage, t } = useTranslation();
  const { theme, themeClasses } = useTheme();

  const toggleLanguage = () => {
    changeLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`
        relative h-10 w-20 rounded-full p-1
        transition-all duration-300
        ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-slate-200 border border-slate-300'}
        flex items-center
        shadow-inner
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={t.accessibility?.toggleLanguage || 'Toggle language'}
    >
      {/* Labels de fondo */}
      <div className="absolute inset-0 flex items-center justify-between px-2.5">
        <span className={`text-xs font-bold transition-all duration-300 ${language === 'es' ? 'text-transparent' : theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>
          ES
        </span>
        <span className={`text-xs font-bold transition-all duration-300 ${language === 'en' ? 'text-transparent' : theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>
          EN
        </span>
      </div>

      {/* Indicador deslizante */}
      <motion.div
        className={`
          absolute h-8 w-8 rounded-full
          flex items-center justify-center
          shadow-lg
          bg-gradient-to-br ${themeClasses.accent}
        `}
        animate={{
          x: language === 'es' ? 2 : 42,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <span className="text-white text-xs font-bold">
          {language.toUpperCase()}
        </span>
      </motion.div>
    </motion.button>
  );
};

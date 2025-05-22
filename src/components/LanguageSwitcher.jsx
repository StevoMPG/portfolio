import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useTheme } from '../hooks/useTheme';

export const LanguageSwitcher = () => {
  const { language, changeLanguage, t } = useTranslation();
  const { themeClasses } = useTheme();
  
  const languages = [
    { code: 'es', label: 'ES', fullName: t.language?.spanish || 'Español' },
    { code: 'en', label: 'EN', fullName: t.language?.english || 'English' }
  ];

  return (
    <div className={`relative flex rounded-lg p-1 ${themeClasses.bgTertiary} ${themeClasses.border} border h-8 w-16`}>
      {/* Indicador de fondo activo */}
      <motion.div
        className={`absolute h-6 w-6 bg-gradient-to-r ${themeClasses.accent} rounded-md`}
        animate={{
          x: language === 'es' ? 4 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
      
      {/* Botones */}
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`relative py-1 px-1.5 text-xs font-medium rounded-md transition-all duration-300 flex-1 flex items-center justify-center z-10 ${
            language === lang.code
              ? 'text-white font-bold'
              : `${themeClasses.textMuted} hover:${themeClasses.textSecondary.replace('text-', '')}`
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`${t.accessibility?.toggleLanguage || 'Toggle language'}: ${lang.fullName}`}
        >
          <span>{lang.label}</span>
        </motion.button>
      ))}
    </div>
  );
};
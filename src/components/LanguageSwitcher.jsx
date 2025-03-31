import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useTranslation();
  
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('es')}
        className={`text-sm px-2 py-1 rounded transition-colors ${
          language === 'es' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-300 hover:text-white'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`text-sm px-2 py-1 rounded transition-colors ${
          language === 'en' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-300 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};
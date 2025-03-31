import React, { createContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { es } from '../translations/es';


export const LanguageContext = createContext();

const translations = {
  en,
  es
};

export const LanguageProvider = ({ children }) => {

  const getBrowserLanguage = () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }
    
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'es'; };

  const [language, setLanguage] = useState(getBrowserLanguage());
  const [texts, setTexts] = useState(translations[language]);

  // Update texts when language changes
  useEffect(() => {
    setTexts(translations[language]);
    localStorage.setItem('language', language);
    document.documentElement.lang = language; 
  }, [language]);

  
  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ texts, language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
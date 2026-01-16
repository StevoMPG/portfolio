import React, { createContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { es } from '../translations/es';

export const LanguageContext = createContext();

const translations = { en, es };

/**
 * Proveedor de idioma global (ES/EN).
 * Detecta automáticamente el idioma del navegador en la primera visita
 * y persiste la preferencia del usuario en localStorage.
 */
export const LanguageProvider = ({ children }) => {
  const getBrowserLanguage = () => {
    // Prioridad: 1) localStorage  2) idioma del navegador  3) español por defecto
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }

    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'es';
  };

  const [language, setLanguage] = useState(getBrowserLanguage());
  const [texts, setTexts] = useState(translations[language]);

  // Actualiza textos y atributo lang del documento
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
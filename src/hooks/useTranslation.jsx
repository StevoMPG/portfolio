import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export const useTranslation = () => {
  const { texts, language, changeLanguage } = useContext(LanguageContext);
  
  return {
    t: texts,
    language,
    changeLanguage
  };
};
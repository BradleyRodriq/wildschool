import { useLanguage } from '../contexts/LanguageContext';
import { enTranslations } from '../translations/en';
import { esTranslations } from '../translations/es';

export const useTranslations = () => {
  const { language } = useLanguage();
  
  const translations = language === 'es' ? esTranslations : enTranslations;
  
  return translations;
};

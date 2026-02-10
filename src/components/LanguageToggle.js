import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="min-h-[44px] min-w-[44px] flex items-center justify-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none"
      aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
    >
      <Globe className="w-5 h-5" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;

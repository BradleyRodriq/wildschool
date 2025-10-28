import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
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

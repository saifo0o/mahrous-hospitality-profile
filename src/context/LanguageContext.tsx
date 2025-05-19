
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define available languages
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    dir: 'ltr',
    translations: {
      'about': 'About Me',
      'contact': 'Contact',
      'media': 'In the Media',
      'email': 'Email',
      'home': 'Home',
      'career': 'Career',
      'projects': 'Projects',
      'awards': 'Awards',
      'inTheMedia': 'In the Media'
    }
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl',
    translations: {
      'about': 'عنّي',
      'contact': 'تواصل', 
      'media': 'في وسائل الإعلام',
      'email': 'البريد الإلكتروني',
      'home': 'الرئيسية',
      'career': 'المسار المهني',
      'projects': 'المشاريع',
      'awards': 'الجوائز',
      'inTheMedia': 'في وسائل الإعلام'
    }
  }
};

type LanguageContextType = {
  language: typeof languages.en | typeof languages.ar;
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check localStorage or default to 'en'
  const getInitialLanguage = () => {
    const savedLang = localStorage.getItem('language');
    return savedLang === 'ar' ? languages.ar : languages.en;
  };

  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = (langCode: 'en' | 'ar') => {
    const newLang = languages[langCode];
    setLanguageState(newLang);
    localStorage.setItem('language', langCode);
    document.documentElement.lang = langCode;
    document.documentElement.dir = newLang.dir;
  };

  // Translation function
  const t = (key: string) => {
    return language.translations[key as keyof typeof language.translations] || key;
  };

  // Set initial direction on mount
  useEffect(() => {
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.dir;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

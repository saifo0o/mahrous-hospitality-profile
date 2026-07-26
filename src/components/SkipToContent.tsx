import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function SkipToContent() {
  const { language } = useLanguage();
  return (
    <a href="#main" className="skip-link">
      {language.code === 'ar' ? 'تجاوز إلى المحتوى الرئيسي' : 'Skip to main content'}
    </a>
  );
}

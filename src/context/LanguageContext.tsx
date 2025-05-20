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
      'aboutIslam': 'About Islam Mahrous',
      'contact': 'Contact',
      'media': 'In the Media',
      'email': 'Email',
      'home': 'Home',
      'career': 'Career',
      'projects': 'Projects',
      'awards': 'Awards',
      'inTheMedia': 'In the Media',
      'getInTouch': 'Get In Touch',
      'viewAllAwards': 'View All Awards',
      'awardsAndRecognition': 'Awards & Recognition',
      'caseStudies': 'Case Studies',
      'viewMoreCaseStudies': 'View More Case Studies',
      'careerHighlights': 'Career Highlights',
      'viewFullCareerJourney': 'View Full Career Journey',
      'contactInformation': 'Contact Information',
      'location': 'Location',
      'phone': 'Phone',
      'learnMoreAboutMe': 'Learn More About Me',
      'sendMessage': 'Send Message',
      'fullName': 'Full Name',
      'emailAddress': 'Email Address',
      'subject': 'Subject',
      'message': 'Message',
      'yourName': 'Your Name',
      'yourEmail': 'Your Email',
      'subjectPlaceholder': 'Subject of your message',
      'messagePlaceholder': 'Your message',
      'sending': 'Sending...',
      'viewArticle': 'View Article',
      'visitLink': 'Visit Link',
      'quickLinks': 'Quick Links',
      'signatureProjects': 'Signature Projects',
      'hospitalityExecutive': 'Hospitality Executive',
      'viewMyStory': 'View My Story',
      'downloadCV': 'Download CV',
      'seeMyWork': 'See My Work',
      'viewAllProjects': 'View All Projects',
      'results': 'Results:',
      'yearsOfExperience': 'Years of Experience',
      'employeesTrained': 'Employees Trained & Mentored',
      'averageRevPARIncrease': 'Average RevPAR Increase',
      'managedRenovationBudgets': 'Managed in Renovation Budgets',
      'challenge': 'Challenge:',
      'solution': 'Solution:',
      'keyResults': 'Key Results:',
      'serviceExcellence': 'Service Excellence',
      'preOpeningExpert': 'Pre-Opening Expert',
      'revenueGrowth': 'Revenue Growth',
      'viewDetails': 'View Details',
      'rooms': 'Rooms',
      'keyAchievements': 'Key Achievements',
      'professionalBio': 'Professional Bio',
      'careerJourney': 'Career Journey',
      'messageOnWhatsApp': 'Message me on WhatsApp'
    }
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl',
    translations: {
      'about': 'عنّي',
      'aboutIslam': 'عن إسلام محروس',
      'contact': 'تواصل', 
      'media': 'في وسائل الإعلام',
      'email': 'البريد الإلكتروني',
      'home': 'الرئيسية',
      'career': 'المسار المهني',
      'projects': 'المشاريع',
      'awards': 'الجوائز',
      'inTheMedia': 'في وسائل الإعلام',
      'getInTouch': 'تواصل معنا',
      'viewAllAwards': 'عرض كل الجوائز',
      'awardsAndRecognition': 'الجوائز والتقدير',
      'caseStudies': 'دراسات الحالة',
      'viewMoreCaseStudies': 'عرض المزيد من دراسات الحالة',
      'careerHighlights': 'أهم الإنجازات المهنية',
      'viewFullCareerJourney': 'عرض المسار المهني الكامل',
      'contactInformation': 'معلومات التواصل',
      'location': 'الموقع',
      'phone': 'الهاتف',
      'learnMoreAboutMe': 'اعرف المزيد عني',
      'sendMessage': 'إرسال رسالة',
      'fullName': 'الاسم الكامل',
      'emailAddress': 'البريد ��لإلكتروني',
      'subject': 'الموضوع',
      'message': 'الرسالة',
      'yourName': 'اسمك',
      'yourEmail': 'بريدك الإلكتروني',
      'subjectPlaceholder': 'موضوع رسالتك',
      'messagePlaceholder': 'رسالتك',
      'sending': 'جاري الإرسال...',
      'viewArticle': 'عرض المقال',
      'visitLink': 'زيارة الرابط',
      'quickLinks': 'روابط سريعة',
      'signatureProjects': 'المشاريع المميزة',
      'hospitalityExecutive': 'مدير تنفيذي في الضيافة',
      'viewMyStory': 'عرض قصتي',
      'downloadCV': 'تحميل السيرة الذاتية',
      'seeMyWork': 'استعرض أعمالي',
      'viewAllProjects': 'عرض جميع المشاريع',
      'results': 'النتائج:',
      'yearsOfExperience': 'سنوات الخبرة',
      'employeesTrained': 'الموظفين المدربين والموجهين',
      'averageRevPARIncrease': 'متوسط زيادة عائد الغرفة المتاحة',
      'managedRenovationBudgets': 'ميزانيات التجديد المدارة',
      'challenge': 'التحدي:',
      'solution': 'الحل:',
      'keyResults': 'النتائج الرئيسية:',
      'serviceExcellence': 'تميز الخدمة',
      'preOpeningExpert': 'خبير ما قبل الافتتاح',
      'revenueGrowth': 'نمو الإيرادات',
      'viewDetails': 'عرض التفاصيل',
      'rooms': 'غرفة',
      'keyAchievements': 'الإنجازات الرئيسية',
      'professionalBio': 'السيرة المهنية',
      'careerJourney': 'المسار المهني',
      'messageOnWhatsApp': 'راسلني على واتساب'
    }
  }
};

type LanguageContextType = {
  language: typeof languages.en | typeof languages.ar;
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check localStorage for saved language or default to browser language
  const getInitialLanguage = () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'ar' || savedLang === 'en') {
      return languages[savedLang];
    }
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'ar' ? languages.ar : languages.en;
  };

  const [language, setLanguageState] = useState(getInitialLanguage);
  const [isRTL, setIsRTL] = useState(getInitialLanguage().dir === 'rtl');

  const setLanguage = (langCode: 'en' | 'ar') => {
    const newLang = languages[langCode];
    setLanguageState(newLang);
    setIsRTL(newLang.dir === 'rtl');
    localStorage.setItem('language', langCode);
    
    // Update document direction and language attributes
    document.documentElement.lang = langCode;
    document.documentElement.dir = newLang.dir;
    
    // Force layout recalculation for RTL changes
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
    
    console.log(`Language changed to ${langCode}, direction: ${newLang.dir}`);
  };

  // Translation function
  const t = (key: string) => {
    return language.translations[key as keyof typeof language.translations] || key;
  };

  // Set initial direction and language on mount
  useEffect(() => {
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.dir;
    setIsRTL(language.dir === 'rtl');
    console.log(`Initial language set to ${language.code}, direction: ${language.dir}`);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
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

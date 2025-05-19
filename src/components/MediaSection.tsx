
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const MediaSection = () => {
  const { t, language } = useLanguage();
  
  const mediaItems = [
    {
      source: "Arab Tourism News",
      title: language.code === 'ar' 
        ? "شيراتون المنتزه يستضيف البطولة العربية الثانية والعشرون لكمال الأجسام" 
        : "Sheraton Montazah Hosts the 22nd Arab Championship for Bodybuilding",
      url: "https://arabtourismnews.com/291854/",
    },
    {
      source: "Discover Egypt Magazine",
      title: language.code === 'ar'
        ? "شيراتون المنتزه يستضيف البطولة العربية الثانية والعشرون لكمال الأجسام"
        : "Sheraton Montazah Hosts the 22nd Arab Championship for Body Building",
      url: "https://discoveregyptmagazine.com/sheraton-montazah-hosts-the-22nd-arab-championship-for-body-building/",
    },
    {
      source: "Egypt Today",
      title: language.code === 'ar'
        ? "تعيين إسلام محروس مديراً عاماً لفندق شيراتون المنتزه"
        : "Islam Mahrous Appointed as General Manager of The Sheraton Montazah",
      url: "https://www.egypttoday.com/Article/6/98332/Islam-Mahrous-Appointed-as-General-Manager-of-The-Sheraton-Montazah",
    },
    {
      source: "Magnificent Online",
      title: language.code === 'ar'
        ? "مع الرجل على رأس مجلس إدارة شيراتون المنتزه"
        : "With the Man on Top of Board of Sheraton Montazah",
      url: "https://magnificentonline.com/with-the-man-on-top-of-board-of-sheraton-montazah/",
    },
    {
      source: "Groubna Blog",
      title: language.code === 'ar'
        ? "قصة ريادة أعمال JW ماريوت"
        : "JW Marriott Entrepreneurship Story",
      url: "https://groubna.com/blog-1/f/jwmarriott-entrepreneurship-story",
    },
    {
      source: "YouTube Interview",
      title: language.code === 'ar'
        ? "مقابلة حصرية مع إسلام محروس"
        : "Exclusive Interview with Islam Mahrous",
      url: "https://www.youtube.com/watch?v=RR9PInTWLJ4",
    },
  ];

  return (
    <section id="media" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-luxury-navy">
          {t('inTheMedia')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="font-semibold text-luxury-gold mb-2">
                  {item.source}
                </h3>
                <p className="text-luxury-navy dark:text-slate-200 mb-4">
                  {item.title}
                </p>
              </div>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                {item.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;


import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const MediaSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const mediaItems = [
    {
      source: "Arab Tourism News",
      title: language.code === 'ar' 
        ? "شيراتون المنتزه يستضيف البطولة العربية الثانية والعشرون لكمال الأجسام" 
        : "Sheraton Montazah Hosts the 22nd Arab Championship for Bodybuilding",
      url: "https://arabtourismnews.com/291854/",
      logo: "https://arabtourismnews.com/wp-content/uploads/2020/01/arab-tourism-news-logo.png",
    },
    {
      source: "Discover Egypt Magazine",
      title: language.code === 'ar'
        ? "شيراتون المنتزه يستضيف البطولة العربية الثانية والعشرون لكمال الأجسام"
        : "Sheraton Montazah Hosts the 22nd Arab Championship for Body Building",
      url: "https://discoveregyptmagazine.com/sheraton-montazah-hosts-the-22nd-arab-championship-for-body-building/",
      logo: "/placeholder.svg", // Replace with actual logo when available
    },
    {
      source: "Egypt Today",
      title: language.code === 'ar'
        ? "تعيين إسلام محروس مديراً عاماً لفندق شيراتون المنتزه"
        : "Islam Mahrous Appointed as General Manager of The Sheraton Montazah",
      url: "https://www.egypttoday.com/Article/6/98332/Islam-Mahrous-Appointed-as-General-Manager-of-The-Sheraton-Montazah",
      logo: "https://www.egypttoday.com/Content/images/logo-not-retina.svg",
    },
    {
      source: "Magnificent Online",
      title: language.code === 'ar'
        ? "مع الرجل على رأس مجلس إدارة شيراتون المنتزه"
        : "With the Man on Top of Board of Sheraton Montazah",
      url: "https://magnificentonline.com/with-the-man-on-top-of-board-of-sheraton-montazah/",
      logo: "/placeholder.svg", // Replace with actual logo when available
    },
    {
      source: "Groubna Blog",
      title: language.code === 'ar'
        ? "قصة ريادة أعمال JW ماريوت"
        : "JW Marriott Entrepreneurship Story",
      url: "https://groubna.com/blog-1/f/jwmarriott-entrepreneurship-story",
      logo: "/placeholder.svg", // Replace with actual logo when available
    },
    {
      source: "YouTube Interview",
      title: language.code === 'ar'
        ? "مقابلة حصرية مع إسلام محروس"
        : "Exclusive Interview with Islam Mahrous",
      url: "https://www.youtube.com/watch?v=RR9PInTWLJ4",
      logo: "https://www.youtube.com/s/desktop/e1f448ab/img/favicon_144x144.png", // YouTube logo
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="media" 
      className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-luxury-navy dark:text-white font-playfair"
          >
            {t('inTheMedia')}
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 w-20 bg-luxury-gold mx-auto mb-8"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-luxury-gray dark:text-gray-300 max-w-2xl mx-auto text-lg"
          >
            {language.code === 'ar' 
              ? "ظهوري وإنجازاتي في وسائل الإعلام المحلية والدولية"
              : "Media features and appearances highlighting my work and achievements"
            }
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mediaItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants} 
              className="bg-white dark:bg-luxury-navy/30 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="h-24 bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-4 border-b border-gray-100 dark:border-gray-700">
                <div className="h-16 flex items-center justify-center">
                  {item.logo ? (
                    <img 
                      src={item.logo} 
                      alt={item.source} 
                      className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <span className="text-xl font-bold text-luxury-navy dark:text-white">{item.source}</span>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-[calc(100%-6rem)]">
                <div className="flex-grow">
                  <h3 className="font-bold text-luxury-gold mb-3 text-lg">
                    {item.source}
                  </h3>
                  <p className="text-luxury-navy dark:text-white mb-4 line-clamp-3 text-lg">
                    {item.title}
                  </p>
                </div>
                
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group-hover:underline mt-4"
                >
                  <span>{language.code === 'ar' ? 'زيارة الرابط' : 'View Article'}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSection;

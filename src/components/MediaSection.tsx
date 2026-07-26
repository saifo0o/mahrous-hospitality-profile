
import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PublicationLogo } from '@/components/ui/publication-logos';

const MediaSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });

  const mediaItems = [{
    source: "Arab Tourism News",
    title: language.code === 'ar' ? "شيراتون المنتزه يستضيف البطولة العربية الثانية والعشرون لكمال الأجسام" : "Sheraton Montazah Hosts the 22nd Arab Championship for Bodybuilding",
    url: "https://arabtourismnews.com/291854/",
    logo: ""
  }, {
    source: "Discover Egypt Magazine",
    title: language.code === 'ar' ? "شيراتون المنتزه يستضيف البطولة العربية الثانية والعشرون لكمال الأجسام" : "Sheraton Montazah Hosts the 22nd Arab Championship for Body Building",
    url: "https://discoveregyptmagazine.com/sheraton-montazah-hosts-the-22nd-arab-championship-for-body-building/",
    logo: ""
  }, {
    source: "Egypt Today",
    title: language.code === 'ar' ? "تعيين إسلام محروس مديراً عاماً لفندق شيراتون المنتزه" : "Islam Mahrous Appointed as General Manager of The Sheraton Montazah",
    url: "https://www.egypttoday.com/Article/6/98332/Islam-Mahrous-Appointed-as-General-Manager-of-The-Sheraton-Montazah",
    logo: ""
  }, {
    source: "Magnificent Online",
    title: language.code === 'ar' ? "مع الرجل على رأس مجلس إدارة شيراتون المنتزه" : "With the Man on Top of Board of Sheraton Montazah",
    url: "https://magnificentonline.com/with-the-man-on-top-of-board-of-sheraton-montazah/",
    logo: ""
  }, {
    source: "Groubna Blog",
    title: language.code === 'ar' ? "قصة ريادة أعمال JW ماريوت" : "JW Marriott Entrepreneurship Story",
    url: "https://groubna.com/blog-1/f/jwmarriott-entrepreneurship-story",
    logo: ""
  }, {
    source: "YouTube Interview",
    title: language.code === 'ar' ? "مقابلة حصرية مع إسلام محروس" : "Exclusive Interview with Islam Mahrous",
    url: "https://www.youtube.com/watch?v=RR9PInTWLJ4",
    logo: ""
  }];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {}
  };

  return (
    <section id="media" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background border-y border-border/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="section-heading inline-block"
          >
            {t('inTheMedia')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {language.code === 'ar' ? "ظهوري وإنجازاتي في وسائل الإعلام المحلية والدولية" : "Media features and appearances highlighting my work and achievements"}
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
              whileHover="hover"
              whileTap="tap"
              className="bg-card border border-border/40 rounded-sm hover:border-accent/40 transition-colors duration-300 overflow-hidden group cursor-pointer h-full"
            >
              <motion.div
                variants={cardHoverVariants}
                className="p-6 flex flex-col h-full justify-between"
              >
                <div className="flex-grow">
                  <div className="mb-5 pb-4 border-b border-border/40 flex items-center justify-between">
                    <PublicationLogo source={item.source} className="h-9 w-auto" />
                  </div>
                  <motion.h3 
                    className="font-playfair font-normal text-accent mb-3 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                  >
                    {item.source}
                  </motion.h3>
                  <motion.p 
                    className="text-foreground mb-4 line-clamp-3 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                  >
                    {item.title}
                  </motion.p>
                </div>
                
                <motion.a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group-hover:underline mt-4 w-fit"
                  whileHover={{ x: language.code === 'ar' ? -4 : 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{language.code === 'ar' ? 'زيارة الرابط' : 'View Article'}</span>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink size={16} />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSection;

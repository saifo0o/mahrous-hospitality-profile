import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { useAnimation } from '@/hooks/useAnimation';

const ProjectsSection = () => {
  const { t, language, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  useAnimation(sectionRef, 'up');
  
  const projects = [
    {
      title: language.code === 'ar' ? "فندق شيراتون المنتزه" : "Sheraton Montazah Hotel",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      image: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/a6e760d0-fa94-46d8-8eb3-a53f2a3e7111/cc6b8137-1488-4939-8d61-eab1e9e2046f?se=2025-06-11T03%3A30%3A33Z&sp=r&sv=2025-05-05&sr=b&sig=NUHumgsaVc5WhmljjESsfajRiYIqX5j3XpBwoWAOa1A%3D",
      description: language.code === 'ar' 
        ? "قيادة تجديد شامل لعقار يبلغ عمره 40 عامًا (288 غرفة)، وتحديث جميع الأنظمة الميكانيكية بما في ذلك الغلايات والمحولات والمولدات والمبردات وشبكة السلامة من الحرائق."
        : "Led comprehensive renovation of 40-year-old property (288 rooms), modernizing all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network."
    },
    {
      title: language.code === 'ar' ? "منتجع ذا في الفاخر سهل حشيش" : "The V Luxury Resort Sahl Hasheesh",
      category: language.code === 'ar' ? "ما قبل الافتتاح" : "Pre-Opening",
      image: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/a6e760d0-fa94-46d8-8eb3-a53f2a3e7111/0389e1f0-cba4-494a-8a30-8133a2998e0d?se=2025-06-11T03%3A30%3A34Z&sp=r&sv=2025-05-05&sr=b&sig=uF/rqcoMO147PnSwGSoHSSG6%2BQyUTGMopCcsIA2jogk%3D",
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح لمنتجع فاخر يضم 298 غرفة، وتنفيذ استراتيجيات تسويقية مبتكرة حققت نسبة إشغال استثنائية في البداية."
        : "Managed pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved exceptional initial occupancy."
    },
    {
      title: language.code === 'ar' ? "منتجع بورسعيد" : "Portosaid Resort",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      image: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/a6e760d0-fa94-46d8-8eb3-a53f2a3e7111/bc89229b-bad1-4ef9-9380-f26640049698?se=2025-06-11T03%3A53%3A09Z&sp=r&sv=2025-05-05&sr=b&sig=5h/5mErBsP0X/1TLn%2ByhIr1JDUXthNj5RUybNzuod3A%3D",
      description: language.code === 'ar'
        ? "إدارة مشروع تجديد بقيمة 3.5 مليون دولار (168 غرفة)، مع تحقيق نمو كبير في مؤشرات الأداء الرئيسية في غضون 4 أشهر فقط."
        : "Directed $3.5M refurbishment project (168 rooms), achieving significant growth in key performance indicators within just 4 months."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={sectionRef} className={`py-16 bg-gray-50 ${isRTL ? 'text-right' : ''}`}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl font-bold mb-2 ${isRTL ? 'text-right' : ''}`}>
            {t('signatureProjects')}
          </h2>
          <div className={`w-20 h-1 bg-luxury-gold mb-12 ${isRTL ? 'mr-0' : 'ml-0'}`}></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} bg-luxury-gold text-white text-xs font-medium px-2 py-1 ${isRTL ? 'rounded-br-md' : 'rounded-bl-md'}`}>
                  {project.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg text-luxury-navy mb-2">{project.title}</h3>
                <p className="text-sm text-luxury-gray line-clamp-3 mb-4">{project.description}</p>
                <Link 
                  to="/projects" 
                  className={`text-sm font-medium text-luxury-gold hover:text-amber-600 transition-colors flex items-center link-underline ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
                >
                  {isRTL ? (
                    <>
                      {t('viewDetails')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  ) : (
                    <>
                      {t('viewDetails')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button className="bg-luxury-navy hover:bg-blue-900 transition-colors hover-lift">
            <Link to="/projects">{t('viewAllProjects')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

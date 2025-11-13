
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useAnimation } from '@/hooks/useAnimation';
import { Play, X } from 'lucide-react';

const ProjectsSection = () => {
  const { t, language, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  useAnimation(sectionRef, 'up');
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create parallax effects for different elements
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const projects = [
    {
      title: language.code === 'ar' ? "فندق شيراتون المنتزه" : "Sheraton Montazah Hotel",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/2025-05-31_nclbzr.webp",
      video: "https://www.youtube.com/embed/7ZPrcE8Dsxk",
      description: language.code === 'ar' 
        ? "قيادة تجديد شامل لعقار يبلغ عمره 40 عامًا (288 غرفة)، وتحديث جميع الأنظمة الميكانيكية بما في ذلك الغلايات والمحولات والمولدات والمبردات وشبكة السلامة من الحرائق."
        : "Led comprehensive renovation of 40-year-old property (288 rooms), modernizing all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network."
    },
    {
      title: language.code === 'ar' ? "منتجع ذا في الفاخر سهل حشيش" : "The V Luxury Resort Sahl Hasheesh",
      category: language.code === 'ar' ? "ما قبل الافتتاح" : "Pre-Opening",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/photo-hurghada-18_krbjex.jpg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح لمنتجع فاخر يضم 298 غرفة، وتنفيذ استراتيجيات تسويقية مبتكرة حققت نسبة إشغال استثنائية في البداية."
        : "Managed pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved exceptional initial occupancy."
    },
    {
      title: language.code === 'ar' ? "منتجع بورسعيد" : "Portosaid Resort",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/377246827_sqf4sq.jpg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    <section ref={sectionRef} className={`py-24 bg-gradient-to-b from-background via-muted/30 to-background ${isRTL ? 'text-right' : ''}`}>
      <div className="container mx-auto px-4 md:px-8">
        
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <iframe
                  src={selectedVideo}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ y: headerY, opacity }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('signatureProjects')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language.code === 'ar' 
              ? 'مشاريع متميزة تعكس التميز والابتكار في صناعة الضيافة'
              : 'Signature projects showcasing excellence and innovation in hospitality'}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ y: cardsY }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-accent text-accent-foreground text-xs font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm`}>
                  {project.category}
                </div>
                
                <motion.button
                  onClick={() => setSelectedVideo(project.video)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6 text-primary" fill="currentColor" />
                </motion.button>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <Link 
                  to="/projects" 
                  className={`inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors group/link ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="story-link">{t('viewDetails')}</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            asChild
          >
            <Link to="/projects">{t('viewAllProjects')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

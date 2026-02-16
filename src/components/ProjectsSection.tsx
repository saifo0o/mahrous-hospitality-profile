
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const { t, language, isRTL } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const projects = [
    {
      title: language.code === 'ar' ? "فندق شيراتون المنتزه" : "Sheraton Montazah Hotel",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/2025-05-31_nclbzr.webp",
      video: "https://www.youtube.com/embed/7ZPrcE8Dsxk",
      stat: '+25% RevPAR',
      description: language.code === 'ar' 
        ? "قيادة تجديد شامل لعقار يبلغ عمره 40 عامًا (288 غرفة)."
        : "Led comprehensive renovation of 40-year-old property (288 rooms)."
    },
    {
      title: language.code === 'ar' ? "منتجع ذا في الفاخر" : "The V Luxury Resort",
      category: language.code === 'ar' ? "ما قبل الافتتاح" : "Pre-Opening",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/photo-hurghada-18_krbjex.jpg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stat: '90% Occupancy',
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح لمنتجع فاخر يضم 298 غرفة."
        : "Managed pre-opening operations for 298-room luxury resort."
    },
    {
      title: language.code === 'ar' ? "منتجع بورسعيد" : "Porto Said Resort",
      category: language.code === 'ar' ? "تجديد" : "Renovation",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/377246827_sqf4sq.jpg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stat: '+20% F&B Revenue',
      description: language.code === 'ar'
        ? "إدارة مشروع تجديد بقيمة $3.5M (168 غرفة)."
        : "Directed $3.5M refurbishment project (168 rooms)."
    }
  ];

  return (
    <section className={`py-24 bg-background ${isRTL ? 'text-right' : ''}`}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Video modal */}
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
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setSelectedVideo(null)} className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all">
                  <X className="w-6 h-6 text-white" />
                </button>
                <iframe src={selectedVideo} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-14 ${isRTL ? 'text-right' : ''}`}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            {language.code === 'ar' ? 'مشاريع مميزة' : 'Portfolio'}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-foreground mb-4">
            {t('signatureProjects')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {language.code === 'ar' 
              ? 'مشاريع متميزة تعكس التميز والابتكار في صناعة الضيافة'
              : 'Signature projects showcasing excellence and innovation in hospitality'}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground text-sm font-bold px-3 py-1.5 rounded-lg shadow">
                    {project.stat}
                  </span>
                </div>
                
                <motion.button
                  onClick={() => setSelectedVideo(project.video)}
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white backdrop-blur-md rounded-full p-3 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5 text-primary" fill="currentColor" />
                </motion.button>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground group-hover:text-accent-foreground transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <Link 
                  to="/projects" 
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground hover:text-accent transition-colors group/link"
                >
                  {t('viewDetails')}
                  <ArrowRight size={14} className={`transition-transform group-hover/link:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/projects">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 gap-2">
              {t('viewAllProjects')}
              <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

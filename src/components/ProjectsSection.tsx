import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Building, MapPin, Sparkles } from 'lucide-react';

export default function ProjectsSection() {
  const { t, language, isRTL } = useLanguage();
  const ar = language.code === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const projects = [
    {
      title: ar ? "فندق شيراتون المنتزه" : "Sheraton Montazah Hotel",
      category: ar ? "تجديد وتطوير كلي" : "Major Renovation",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749613983/2025-05-31_nclbzr.webp",
      stat: '+25% RevPAR',
      caseStudySlug: 'sheraton-montazah-renovation',
      desc: ar 
        ? "إدارة وتوجيه أكبر تجديد شامل في تاريخ الفندق بـ ٢٨٨ غرفة لرفع الكفاءة التشغيلية والجمالية."
        : "Led comprehensive renovation of 40-year-old property (288 rooms) to maximize asset performance.",
      cols: "md:col-span-2"
    },
    {
      title: ar ? "منتجع ذا في الفاخر" : "The V Luxury Resort",
      category: ar ? "إدارة ما قبل الافتتاح" : "Pre-Opening Management",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749613983/photo-hurghada-18_krbjex.jpg",
      stat: '90% Occupancy',
      caseStudySlug: 'v-luxury-resort-pre-opening',
      desc: ar
        ? "تخطيط وإطلاق الفندق الفاخر بـ ٢٩٨ غرفة لضمان تماسك معايير الخدمة منذ اليوم الأول."
        : "Managed full pre-opening operations for 298-room luxury resort under aggressive timelines.",
      cols: "md:col-span-1"
    },
    {
      title: ar ? "منتجع بورسعيد" : "Porto Said Resort",
      category: ar ? "تجديد وإعادة هيكلة" : "Asset Turnaround & Renovation",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749613983/377246827_sqf4sq.jpg",
      stat: '+20% F&B Revenue',
      desc: ar
        ? "قيادة مشروع إعادة بناء وتطوير بقيمة ٣.٥ مليون دولار لرفع إيرادات المطاعم والإشغال."
        : "Directed a $3.5M restructuring project (168 rooms) to optimize GOP margins.",
      cols: "md:col-span-1"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-background border-b border-border/40 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-[20%] start-[-10%] w-[500px] h-[500px] bg-accent/[0.015] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`mb-16 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <div className="section-eyebrow">
            05 &mdash; {ar ? 'المشاريع المميزة' : 'Portfolio'}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-playfair text-foreground mb-4">
            {t('signatureProjects')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl font-light">
            {ar 
              ? 'مجموعة من المشروعات الكبرى التي أشرفت على إطلاقها وتجديدها لتحقيق أرباح مستدامة.'
              : 'Auditable renovation, launch, and turnaround case studies that define operational excellence.'}
          </p>
        </motion.div>
        
        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group bg-card rounded-sm overflow-hidden border border-border/40 hover:border-accent/40 transition-colors duration-500 flex flex-col justify-between ${project.cols}`}
            >
              {/* Media container */}
              <div className="relative overflow-hidden aspect-[16/10] sm:aspect-auto sm:h-72 w-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1200ms]"
                  loading="lazy"
                />
                
                {/* Visual overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300" />
                
                {/* Top left category badge */}
                <div className="absolute top-4 start-4">
                  <span className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm">
                    {project.category}
                  </span>
                </div>

                {/* Bottom left metrics badge */}
                <div className="absolute bottom-4 start-4 flex items-center gap-1.5 bg-luxury-emerald text-primary-foreground text-xs font-bold px-3 py-2 rounded-sm">
                  <Sparkles size={12} />
                  <span>{project.stat}</span>
                </div>
              </div>
              
              {/* Details container */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                    {project.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                  <Link
                    to={project.caseStudySlug ? `/projects/${project.caseStudySlug}` : '/projects'}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground hover:text-accent transition-colors group/link"
                  >
                    <span>{project.caseStudySlug ? (ar ? 'اقرأ دراسة الحالة' : 'Read Case Study') : t('viewDetails')}</span>
                    <ArrowRight size={13} className={`transition-transform group-hover/link:translate-x-1 ${isRTL ? 'rotate-180 group-hover/link:-translate-x-1' : ''}`} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Action Bottom */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Link to="/projects">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm px-8 py-6 text-base font-semibold transition-colors duration-300 gap-2">
              {t('viewAllProjects')}
              <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

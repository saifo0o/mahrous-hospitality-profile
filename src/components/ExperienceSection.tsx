import React, { useRef } from 'react';
import { Calendar, MapPin, Building, ArrowRight, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

import primeHotelsLogo from '@/assets/logos/prime-hotels.png';
import ihgLogo from '@/assets/logos/ihg.svg';
import sheratonLogo from '@/assets/logos/sheraton.svg';

export default function ExperienceSection() {
  const { t, language, isRTL } = useLanguage();
  const ar = language.code === 'ar';
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  
  const experiences = [
    {
      position: ar ? "مدير عمليات المجموعة" : "Group Operations Director",
      company: ar ? "مجموعة فنادق برايم" : "Prime Hotels Group",
      location: ar ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      period: ar ? "ديسمبر ٢٠٢٥ - مايو ٢٠٢٦" : "Dec 2025 - May 2026",
      logo: primeHotelsLogo,
      current: true,
      tag: ar ? 'إنجاز حديث' : 'Recently Completed',
      metrics: ar 
        ? ['إدارة الأرباح والخسائر للمحفظة الفندقية', 'تطوير خارطة طريق للتوسع إلى ١٠,٠٠٠ غرفة بحلول ٢٠٣٠', 'توحيد الحوكمة التشغيلية عبر العقارات']
        : ['Full P&L and operational governance across KSA portfolio', 'Formulated roadmap expansion to 10,000 keys by 2030', 'Standardized reporting & STR analytics across western region']
    },
    {
      position: ar ? "ممثل المالك (ما قبل الافتتاح)" : "Owner's Representative (Pre-Opening)",
      company: ar ? "فور بوينتس باي شيراتون - الرياض" : "Four Points by Sheraton, KAR",
      location: ar ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      period: ar ? "أبريل ٢٠٢٣ - يوليو ٢٠٢٥" : "Apr 2023 - Jul 2025",
      logo: sheratonLogo,
      rooms: 172,
      tag: ar ? 'استشاري المالك' : 'Ownership Advisory',
      metrics: ar 
        ? ['إدارة دورة التطوير والافتتاح لـ ١٧٢ غرفة', 'خفض ميزانية ما قبل الافتتاح بنسبة ١٢٪', 'توظيف وتأهيل فريق عمل يضم ١٥٠+ موظفاً']
        : ['Led full pre-opening cycle for 172 keys Marriott property', 'Refined pre-opening budget with a -12% CAPEX saving', 'Managed hiring & alignment of 150+ operational staff']
    },
    {
      position: ar ? "المدير العام" : "General Manager",
      company: ar ? "شيراتون المنتزه - ماريوت" : "Sheraton Montazah, Marriott",
      location: ar ? "الإسكندرية، مصر" : "Alexandria, Egypt",
      period: ar ? "يونيو ٢٠١٤ - مارس ٢٠٢٣" : "Jun 2014 - Mar 2023",
      logo: sheratonLogo,
      rooms: 288,
      tag: ar ? 'تميز الأصول' : 'Asset Leadership',
      metrics: ar 
        ? ['تحقيق زيادة بنسبة ٢٥٪ في العائد للغرفة المتاحة RevPAR', 'رفع رضا النزلاء بنسبة ٣٠٪ وتخفيض الصيانة ٢٠٪', 'إدارة وتوجيه أكبر مشروع تجديد في تاريخ الفندق']
        : ['9-year P&L leadership: +25% RevPAR, +30% Guest Satisfaction', 'Reduced utilities budget by -15% & maintenance by -20%', 'Directed the largest restoration in the history of the property']
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/20 relative border-b border-border/40" ref={containerRef}>
      {/* Background radial highlights */}
      <div className="absolute top-[30%] end-[-10%] w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] start-[-10%] w-[500px] h-[500px] bg-luxury-emerald/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          
          {/* Left Column: Sticky Title Details */}
          <div className="lg:sticky lg:top-28">
            <motion.div 
              className={isRTL ? 'text-right' : 'text-left'}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="section-eyebrow">
                03 &mdash; {ar ? 'المسيرة القيادية' : 'Executive Journey'}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-playfair text-foreground leading-tight mb-6">
                {t('careerHighlights')}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8 font-light leading-relaxed">
                {ar 
                  ? 'ثلاثة عقود من إدارة الأصول الفندقية وإعادة الهيكلة والافتتاح في الشرق الأوسط.'
                  : 'Over 30 years of progressive operations management, pre-openings, and turnaround tenure for premium multi-property portfolios.'
                }
              </p>
              
              <Link to="/career">
                <Button variant="outline" className="rounded-sm px-6 py-5 text-sm font-medium gap-2 border-border hover:border-accent transition-colors duration-300 bg-transparent">
                  {t('viewFullCareerJourney')}
                  <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Right Column: Timeline Chronology */}
          <div className="relative">
            {/* Timeline Vertical Spine */}
            <div className={`absolute top-0 bottom-0 w-0.5 bg-border/60 ${isRTL ? 'right-6 sm:right-8' : 'left-6 sm:left-8'}`} />

            <div className="flex flex-col gap-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="relative group flex items-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Timeline node icon */}
                  <div className={`absolute z-10 w-12 h-12 rounded-full bg-card border-2 flex items-center justify-center shadow-md transition-all duration-300 ${
                    exp.current 
                      ? 'border-accent text-accent scale-110' 
                      : 'border-border text-muted-foreground group-hover:border-accent group-hover:text-accent'
                  } ${isRTL ? 'right-0 sm:right-2' : 'left-0 sm:left-2'}`}>
                    {exp.current ? <Sparkles size={16} /> : <Building size={16} />}
                  </div>

                  {/* Achievement Card Body */}
                  <div className={`w-full bg-card rounded-sm border border-border/40 p-6 sm:p-8 transition-colors duration-500 hover:border-accent/30 ${
                    isRTL ? 'mr-16 sm:mr-24' : 'ml-16 sm:ml-24'
                  }`}>
                    {/* Header line */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-4 mb-5">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-muted-foreground block mb-1">{exp.period}</span>
                        <h3 className="font-bold text-lg text-foreground">{exp.position}</h3>
                      </div>
                      
                      {/* Badge / Tag */}
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm ${
                        exp.current 
                          ? 'bg-accent/15 text-accent-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {exp.tag}
                      </span>
                    </div>

                    {/* Company details */}
                    <div className="flex flex-wrap items-center gap-6 mb-5 text-sm font-semibold text-foreground/90">
                      <div className="flex items-center gap-2">
                        {exp.logo && (
                          <img src={exp.logo} alt={exp.company} className="h-5 w-auto object-contain dark:invert dark:brightness-200" />
                        )}
                        <span className="text-accent-foreground">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground font-normal text-xs">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                      {exp.rooms && (
                        <div className="flex items-center gap-1.5 text-muted-foreground font-normal text-xs">
                          <Building size={13} />
                          <span>{exp.rooms} {ar ? 'غرفة فندقية' : 'Keys'}</span>
                        </div>
                      )}
                    </div>

                    {/* Operational metrics highlights */}
                    <ul className="space-y-2.5">
                      {exp.metrics.map((metric, mi) => (
                        <li key={mi} className="flex items-start gap-3.5 text-sm text-muted-foreground leading-relaxed">
                          <ShieldCheck size={16} className="text-luxury-emerald shrink-0 mt-0.5" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* View Details Link */}
                    <div className="mt-6 pt-5 border-t border-border/30 flex justify-end">
                      <Link 
                        to="/career" 
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent-foreground hover:text-accent transition-colors group/link"
                      >
                        <span>{ar ? 'استعراض التفاصيل الكاملة' : 'View Full Details'}</span>
                        <ArrowRight size={13} className={`transition-transform group-hover/link:translate-x-1 ${isRTL ? 'rotate-180 group-hover/link:-translate-x-1' : ''}`} />
                      </Link>
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

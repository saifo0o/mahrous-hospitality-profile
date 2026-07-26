import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Globe, GraduationCap, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import profilePhoto from '@/assets/profile-new.jpeg';

export default function AboutSection() {
  const { t, language, isRTL } = useLanguage();
  const ar = language.code === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const [activeTab, setActiveTab] = useState<'executive' | 'vision' | 'quality'>('executive');

  const highlights = [
    {
      icon: <Award className="h-5 w-5 text-accent" />,
      label: ar ? 'جوائز تميز متعددة' : 'Multiple Excellence Awards',
    },
    {
      icon: <Globe className="h-5 w-5 text-accent" />,
      label: ar ? 'يتحدث 3 لغات: العربية، الإنجليزية، الألمانية' : 'Bilingual Mastery: AR, EN, DE',
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-accent" />,
      label: ar ? 'ماجستير إدارة أعمال + معهد غليون السويسري' : 'MBA & Glion Swiss Diploma',
    },
  ];

  const chapters = {
    executive: {
      title: ar ? 'القائد التنفيذي' : 'The Executive Leader',
      text1: ar 
        ? 'قائد ضيافة متعدد العلامات بأكثر من 30 عامًا من الخبرة عبر الشرق الأوسط، شغلت مؤخرًا منصب مدير عمليات المجموعة في فنادق برايم بالسعودية.'
        : 'Accomplished Hospitality Executive with over 30 years of progressive leadership, specializing in pre-openings, capital renovations, and operational governance across international markets.',
      text2: ar
        ? 'سجل حافل بالنجاح في تحقيق عوائد استثنائية وإدارة ميزانيات كبرى للتجديدات وإعادة الهيكلة وتدريب الكفاءات الفندقية.'
        : 'Proven track record of driving capital efficiency, RevPAR growth, and brand compliance for global leaders including Marriott, IHG, and Accor.',
    },
    vision: {
      title: ar ? 'الرؤية الاستراتيجية' : 'The Strategic Visionary',
      text1: ar
        ? 'المساهمة بنشاط في قيادة وتطوير أصول الضيافة بما يتوافق مع رؤية السعودية 2030 لتطوير قطاع السياحة.'
        : 'Steering hospitality assets toward absolute market leadership, designing operational blueprints that align with KSA Vision 2030 tourism goals.',
      text2: ar
        ? 'تطوير خطط للتوسع في عدد الغرف الفندقية ورفع جودة الخدمات السياحية وجذب الاستثمارات العالمية.'
        : 'Developing comprehensive multi-property roadmaps to expand keys, optimize guest asset yield, and introduce international luxury standards.',
    },
    quality: {
      title: ar ? 'الحزام الأسود Six Sigma' : 'The Quality Architect',
      text1: ar
        ? 'تطبيق منهجية Six Sigma للحزام الأسود لتوحيد وتبسيط الإجراءات التشغيلية وضمان ثبات جودة الخدمة.'
        : 'Applying Six Sigma Black Belt methodology to standardize standard operating procedures, eliminate operational waste, and lock in consistent service quality.',
      text2: ar
        ? 'تنفيذ تحسينات مستمرة تعتمد على الأرقام والبيانات الدقيقة لرفع الكفاءة التشغيلية والربحية.'
        : 'Leveraging data-driven Kaizen frameworks to secure major turnarounds in profitability, employee retention, and guest loyalty.',
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          
          {/* Overlapping Editorial Image Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Image Container — Ink signature frame */}
              <div className="signature-frame">
                <div className="relative overflow-hidden aspect-[3/4] bg-card">
                  <img
                    src={profilePhoto}
                    alt={ar ? 'إسلام محروس' : 'Islam Mahrous - Hospitality Executive'}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Visual mesh gradient over the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Grounded credential strip — replaces floating glass badges */}
              <motion.div
                className="mt-0 grid grid-cols-[auto_1fr] border border-t-0 border-border bg-card divide-x rtl:divide-x-reverse divide-border"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="px-5 py-4 flex flex-col items-center justify-center text-center">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    {ar ? 'منذ' : 'Since'}
                  </span>
                  <span className="text-xl font-bold font-playfair text-accent leading-none mt-0.5">1994</span>
                </div>
                <div className="px-5 py-4 flex flex-col justify-center">
                  <p className="text-xs font-bold leading-snug text-foreground">
                    {ar ? 'قائد ومستشار ضيافة عالمي' : 'Global Hospitality Executive'}
                  </p>
                  <p className="text-[9px] text-muted-foreground mt-1 uppercase tracking-wider font-semibold">
                    {ar ? 'مصر والشرق الأوسط' : 'Egypt & MENA Region'}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Narrative Content Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <div className="section-eyebrow">
              02 &mdash; {ar ? 'نبذة شخصية' : 'Biography'}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-playfair text-foreground mb-8 leading-tight">
              {ar 
                ? 'قيادة مبنية على المعرفة والخبرة والأرقام'
                : 'Decades of High-Performance Leadership'
              }
            </h2>

            {/* Chapter Selection Tab Control */}
            <div className="flex border-b border-border/50 mb-8 gap-6 md:gap-8 overflow-x-auto scrollbar-none">
              {(Object.keys(chapters) as Array<keyof typeof chapters>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`pb-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 relative ${
                    activeTab === key 
                      ? 'text-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {chapters[key].title}
                  {activeTab === key && (
                    <motion.div 
                      className="absolute bottom-0 inset-x-0 h-[2px] bg-accent"
                      layoutId="about-tabs"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Chapter Texts with Animation */}
            <div className="min-h-[140px] mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-muted-foreground mb-4 leading-relaxed text-lg font-light">
                    {chapters[activeTab].text1}
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    {chapters[activeTab].text2}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Static Highlight Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pt-6 border-t border-border/40">
              {highlights.map((h, i) => (
                <motion.div 
                  key={i} 
                  className="flex flex-col gap-2.5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-sm bg-accent/8 flex items-center justify-center">
                    {h.icon}
                  </div>
                  <span className="text-xs font-semibold text-foreground leading-relaxed">{h.label}</span>
                </motion.div>
              ))}
            </div>
            
            <Link to="/about">
              <Button variant="outline" className="rounded-sm border-border hover:border-accent text-foreground gap-2 font-medium px-8 py-6 transition-colors duration-300 bg-transparent">
                {t('learnMoreAboutMe')}
                <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

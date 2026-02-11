
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Globe, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const { t, language, isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: <Award className="h-5 w-5 text-accent" />,
      label: language.code === 'ar' ? 'جوائز تميز متعددة' : 'Multiple Excellence Awards',
    },
    {
      icon: <Globe className="h-5 w-5 text-accent" />,
      label: language.code === 'ar' ? '4 لغات: عربي، إنجليزي، ألماني، روسي' : '4 Languages: AR, EN, DE, RU',
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-accent" />,
      label: language.code === 'ar' ? 'ماجستير إدارة أعمال + معهد غليون' : 'MBA + Glion Institute Diploma',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 blur-xl" />
              <img
                src="/lovable-uploads/ceab1cbd-052e-4068-8889-c6014f2be5ce.jpg"
                alt={language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous - Hospitality Executive'}
                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto h-[480px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={isRTL ? 'text-right' : ''}
          >
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-3">
              {language.code === 'ar' ? 'من أنا' : 'About Me'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-6 leading-tight">
              {language.code === 'ar' 
                ? 'قيادة التميز في الضيافة العالمية'
                : 'Leading Excellence in Global Hospitality'
              }
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {language.code === 'ar' 
                ? 'مدير عمليات المجموعة في فنادق برايم بالسعودية، مع أكثر من 30 عامًا من القيادة في الضيافة. متخصص في عمليات ما قبل الافتتاح، التجديدات واسعة النطاق، وإدارة الأرباح والخسائر.'
                : 'Group Operations Director at Prime Hotels in Saudi Arabia, with over 30 years of hospitality leadership. Specializing in pre-opening operations, large-scale renovations, and P&L management.'
              }
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {language.code === 'ar'
                ? 'سجل حافل عبر ماريوت وآي إتش جي وأكور، مع جوائز مرموقة للابتكار والتميز في الخدمة والقيادة التشغيلية عبر السعودية ومصر والإمارات.'
                : 'Proven track record across Marriott, IHG, and Accor, with prestigious awards for innovation, service excellence, and operational leadership across KSA, Egypt, UAE, and beyond.'
              }
            </p>

            {/* Highlight chips */}
            <div className="flex flex-col gap-3 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    {h.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">{h.label}</span>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <Button variant="outline" className="rounded-xl border-border hover:border-accent text-foreground gap-2 font-medium">
                {t('learnMoreAboutMe')}
                <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

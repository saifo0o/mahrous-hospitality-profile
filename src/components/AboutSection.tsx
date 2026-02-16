
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
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 blur-xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <img
                src="/lovable-uploads/ceab1cbd-052e-4068-8889-c6014f2be5ce.jpg"
                alt={language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous - Hospitality Executive'}
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto h-[520px] object-cover"
                loading="lazy"
              />
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-accent/30 rounded-2xl" />
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={isRTL ? 'text-right' : ''}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              {language.code === 'ar' ? 'من أنا' : 'About Me'}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-foreground mb-6 leading-tight">
              {language.code === 'ar' 
                ? 'قيادة التميز في الضيافة العالمية'
                : 'Leading Excellence in Global Hospitality'
              }
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
              {language.code === 'ar' 
                ? 'مدير عمليات المجموعة في فنادق برايم بالسعودية، مع أكثر من 30 عامًا من القيادة في الضيافة.'
                : 'Group Operations Director at Prime Hotels in Saudi Arabia, with over 30 years of hospitality leadership.'
              }
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              {language.code === 'ar'
                ? 'سجل حافل عبر ماريوت وآي إتش جي وأكور، مع جوائز مرموقة للابتكار والتميز في الخدمة.'
                : 'Proven track record across Marriott, IHG, and Accor, with prestigious awards for innovation and service excellence.'
              }
            </p>

            {/* Highlight chips */}
            <div className="flex flex-col gap-4 mb-10">
              {highlights.map((h, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    {h.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">{h.label}</span>
                </motion.div>
              ))}
            </div>
            
            <Link to="/about">
              <Button variant="outline" className="rounded-xl border-border hover:border-accent text-foreground gap-2 font-medium px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
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

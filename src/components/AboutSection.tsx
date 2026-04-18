
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Globe, GraduationCap } from 'lucide-react';
import profilePhoto from '@/assets/profile-new.jpeg';

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
              <div className="relative max-w-md mx-auto group">
                <img
                  src={profilePhoto}
                  alt={language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous - Hospitality Executive'}
                  className="relative rounded-2xl shadow-2xl w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating "Since" badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-card/95 backdrop-blur-md rounded-xl shadow-lg border border-border/50 px-4 py-2.5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    {language.code === 'ar' ? 'منذ' : 'Since'}
                  </p>
                  <p className="text-lg font-bold font-playfair text-foreground leading-none">1994</p>
                </motion.div>

                {/* Floating signature card */}
                <motion.div
                  className="absolute -bottom-5 -right-3 sm:-right-5 bg-accent text-accent-foreground rounded-xl shadow-xl px-4 py-3 max-w-[180px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <p className="text-xs font-bold leading-snug">
                    {language.code === 'ar' ? 'مدير عمليات المجموعة' : 'Group Operations Director'}
                  </p>
                  <p className="text-[10px] opacity-80 mt-0.5">Prime Hotels KSA</p>
                </motion.div>

                {/* Decorative accent frame */}
                <div className="absolute -bottom-3 -left-3 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
              </div>
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

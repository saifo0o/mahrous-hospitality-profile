import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { contactInfo, signatureQuote } from '@/lib/brandConstants';

export default function ContactSection() {
  const { t, language, isRTL } = useLanguage();
  
  const getIcon = (labelEn: string) => {
    if (labelEn.includes('Location')) return MapPin;
    if (labelEn.includes('Phone')) return Phone;
    if (labelEn.includes('Email')) return Mail;
    return Linkedin;
  };

  const getDisplayValue = (item: typeof contactInfo[0]) => {
    if (item.value) return item.value;
    return language.code === 'ar' ? (item.regionAr || '') : (item.regionEn || '');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          
          {/* Left Column — Content & List */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <div className="section-eyebrow">
              09 &mdash; {language.code === 'ar' ? 'تواصل' : 'Contact'}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-playfair text-foreground mb-6 leading-tight">
              {t('getInTouch')}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
              {language.code === 'ar'
                ? 'مهتم بفرص الضيافة أو الاستشارات القيادية؟ تواصل معي اليوم لبحث سبل التعاون.'
                : "Interested in hospitality leadership or consulting? Let's connect to discuss how we can work together."
              }
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, i) => {
                const IconComponent = getIcon(item.labelEn);
                const displayValue = getDisplayValue(item);
                const itemLabel = language.code === 'ar' ? item.labelAr : item.labelEn;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/15">
                      <IconComponent size={16} className="text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">{itemLabel}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target={item.href.startsWith('http') ? '_blank' : undefined} 
                          rel="noopener noreferrer" 
                          className="text-foreground hover:text-accent-foreground font-medium transition-colors text-sm sm:text-base"
                        >
                          {displayValue}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-sm sm:text-base">{displayValue}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link to="/contact">
              <Button variant="outline" className="rounded-sm px-6 py-5 text-sm font-semibold gap-2 border-border hover:border-accent transition-colors duration-300">
                {language.code === 'ar' ? 'صفحة التواصل الكاملة' : 'Full Contact Page'}
                <ArrowRight size={14} className={isRTL ? 'rotate-180' : ''} />
              </Button>
            </Link>
          </motion.div>

          {/* Right Column — Premium Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary rounded-sm p-8 sm:p-12 md:p-14 text-primary-foreground relative overflow-hidden border border-primary-foreground/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-light font-sans leading-relaxed mb-8 text-primary-foreground/90 italic">
                  {language.code === 'ar' ? signatureQuote.ar : signatureQuote.en}
                </blockquote>
                <div className="w-10 h-px bg-accent mb-4" />
                <p className="text-accent font-semibold tracking-wider text-sm sm:text-base">Islam Mahrous</p>
                <p className="text-primary-foreground/60 text-xs mt-0.5 font-medium">
                  {language.code === 'ar' ? 'مدير عمليات المجموعة' : 'Group Operations Director'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

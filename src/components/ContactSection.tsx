
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const ContactSection = () => {
  const { t, language, isRTL } = useLanguage();
  
  const contactItems = [
    { icon: MapPin, label: language.code === 'ar' ? 'الموقع' : 'Location', value: language.code === 'ar' ? 'الرياض، السعودية' : 'Riyadh, KSA' },
    { icon: Phone, label: language.code === 'ar' ? 'الهاتف' : 'Phone', value: '+966 55 374 1020', href: 'tel:+966553741020' },
    { icon: Mail, label: language.code === 'ar' ? 'البريد' : 'Email', value: 'mahrous.islam@yahoo.com', href: 'mailto:mahrous.islam@yahoo.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'islam-mahrous', href: 'https://www.linkedin.com/in/islam-mahrous-' },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              {language.code === 'ar' ? 'تواصل' : 'Contact'}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-foreground mb-6">
              {t('getInTouch')}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed">
              {language.code === 'ar'
                ? 'مهتم بفرص الضيافة أو الاستشارات؟ تواصل معي اليوم.'
                : "Interested in hospitality leadership or consulting? Let's connect."
              }
            </p>

            <div className="space-y-5 mb-10">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/contact">
              <Button variant="outline" className="rounded-xl px-8 py-6 text-base font-medium gap-2 border-border hover:border-accent transition-all duration-300 hover:-translate-y-0.5">
                {language.code === 'ar' ? 'صفحة التواصل الكاملة' : 'Full Contact Page'}
                <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
              </Button>
            </Link>
          </motion.div>

          {/* Right — Quote card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary rounded-2xl p-10 md:p-14 text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-accent/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl italic font-light leading-relaxed mb-6">
                  {language.code === 'ar'
                    ? '"التميز في الضيافة ليس مجرد خدمة؛ إنه استراتيجية ورؤية وذكاء عاطفي."'
                    : '"Excellence in hospitality is not just service; it\'s strategy, vision, and emotional intelligence."'
                  }
                </blockquote>
                <div className="w-12 h-0.5 bg-accent mb-4" />
                <p className="text-accent font-semibold">Islam Mahrous</p>
                <p className="text-primary-foreground/60 text-sm">{language.code === 'ar' ? 'مدير عمليات المجموعة' : 'Group Operations Director'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

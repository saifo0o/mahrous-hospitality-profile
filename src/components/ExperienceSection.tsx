
import React from 'react';
import { Calendar, MapPin, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

import primeHotelsLogo from '@/assets/logos/prime-hotels.png';
import ihgLogo from '@/assets/logos/ihg.svg';
import sheratonLogo from '@/assets/logos/sheraton.svg';

const ExperienceSection = () => {
  const { t, language, isRTL } = useLanguage();
  
  const experiences = [
    {
      position: language.code === 'ar' ? "مدير عمليات المجموعة" : "Group Operations Director",
      company: language.code === 'ar' ? "مجموعة فنادق برايم" : "Prime Hotels Group",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      period: language.code === 'ar' ? "ديسمبر 2025 - مايو 2026" : "Dec 2025 - May 2026",
      description: language.code === 'ar'
        ? "قُدت الحوكمة التشغيلية والأرباح والخسائر عبر محفظة سعودية متعددة العلامات، مع وضع خارطة طريق للتوسع إلى 10,000 غرفة بحلول 2030."
        : "Led P&L and operational governance across a multi-brand Saudi portfolio, setting the roadmap toward 10,000 rooms by 2030.",
      highlight: language.code === 'ar' ? 'إنجاز حديث' : 'Recently Completed',
      current: false,
      logo: primeHotelsLogo,
    },
    {
      position: language.code === 'ar' ? "ممثل المالك (ما قبل الافتتاح)" : "Owner's Representative (Pre-Opening)",
      company: language.code === 'ar' ? "فور بوينتس باي شيراتون - طريق الملك عبدالعزيز" : "Four Points by Sheraton, KAR",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      period: language.code === 'ar' ? "أبريل 2023 - يوليو 2025" : "Apr 2023 - Jul 2025",
      rooms: 172,
      description: language.code === 'ar'
        ? "إدارة دورة التطوير وما قبل الافتتاح كاملةً لمشروع ماريوت جديد بـ172 غرفة، مع تخفيض الميزانية بنسبة 12٪ وتوظيف 150+ موظفاً."
        : "Led full development and pre-opening cycle for a 172-room Marriott new-build — −12% budget reduction and 150+ pre-opening hires.",
      highlight: language.code === 'ar' ? 'استشاري الملكية' : 'Ownership Advisory',
      logo: sheratonLogo,
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "شيراتون المنتزه - ماريوت" : "Sheraton Montazah, Marriott",
      location: language.code === 'ar' ? "الإسكندرية، مصر" : "Alexandria, Egypt",
      period: language.code === 'ar' ? "يونيو 2014 - مارس 2023" : "Jun 2014 - Mar 2023",
      rooms: 288,
      description: language.code === 'ar'
        ? "9 سنوات بمسؤولية كاملة عن الأرباح والخسائر: +25٪ RevPAR، +30٪ رضا الضيوف، −15٪ طاقة، −20٪ صيانة، مع أكبر تجديد في تاريخ الفندق."
        : "9-year P&L tenure: +25% RevPAR, +30% guest satisfaction, −15% energy, −20% maintenance, culminating in the property's largest-ever renovation.",
      highlight: language.code === 'ar' ? 'تميز المحفظة' : 'Portfolio Excellence',
      logo: sheratonLogo,
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className={`mb-14 ${isRTL ? 'text-right' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            {language.code === 'ar' ? 'المسيرة المهنية' : 'Career'}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-foreground mb-4">
            {t('careerHighlights')}
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            {language.code === 'ar' 
              ? "أكثر من 30 عامًا من الخبرة القيادية عبر العلامات التجارية الدولية للضيافة."
              : "Over 30 years of progressive leadership across international hospitality brands."
            }
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className={`h-full bg-card rounded-2xl border border-border/50 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${exp.current ? 'ring-1 ring-accent/20' : ''}`}>
                {/* Top badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${exp.current ? 'bg-accent/15 text-accent-foreground' : 'bg-primary/10 text-primary'}`}>
                    {exp.highlight}
                  </span>
                  {exp.rooms && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Building size={12} /> {exp.rooms} {language.code === 'ar' ? 'غرفة' : 'rooms'}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-accent-foreground transition-colors">{exp.position}</h3>
                
                {/* Company with logo */}
                <div className="flex items-center gap-2 mb-3">
                  {exp.logo && (
                    <img src={exp.logo} alt={exp.company} className="h-5 w-auto object-contain dark:invert dark:brightness-200" />
                  )}
                  <p className="font-semibold text-sm text-accent-foreground">{exp.company}</p>
                </div>
                
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                
                <Link 
                  to="/career" 
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground hover:text-accent transition-colors group/link"
                >
                  {language.code === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  <ArrowRight size={14} className={`transition-transform group-hover/link:translate-x-1 ${isRTL ? 'rotate-180 group-hover/link:-translate-x-1' : ''}`} />
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
          <Link to="/career">
            <Button variant="outline" className="rounded-xl px-8 py-6 text-base font-medium gap-2 border-border hover:border-accent transition-all duration-300 hover:-translate-y-0.5">
              {t('viewFullCareerJourney')}
              <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

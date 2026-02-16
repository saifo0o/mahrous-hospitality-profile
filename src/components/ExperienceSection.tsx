
import React from 'react';
import { Calendar, MapPin, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const ExperienceSection = () => {
  const { t, language, isRTL } = useLanguage();
  
  const experiences = [
    {
      position: language.code === 'ar' ? "مدير عمليات المجموعة" : "Group Operations Director",
      company: language.code === 'ar' ? "فنادق برايم" : "Prime Hotels",
      location: language.code === 'ar' ? "الرياض" : "Riyadh, KSA",
      period: language.code === 'ar' ? "2025 - الحاضر" : "2025 - Present",
      description: language.code === 'ar'
        ? "مسؤول عن عمليات الفنادق على مستوى المجموعة، يشرف على محفظة متعددة العلامات التجارية مع خطة نمو لبلوغ 10,000 غرفة."
        : "Full responsibility for group-wide hotel operations overseeing a multi-brand portfolio with a growth strategy to reach 10,000 rooms by 2030.",
      highlight: language.code === 'ar' ? 'حالياً' : 'Current',
      current: true,
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "كراون بلازا الإسكندرية ميراج" : "Crowne Plaza Alexandria",
      location: language.code === 'ar' ? "الإسكندرية" : "Alexandria, Egypt",
      period: "2025",
      description: language.code === 'ar'
        ? "قيادة التحويل الكامل للعلامة التجارية من عقار مستقل إلى كراون بلازا مع 100% امتثال آي إتش جي."
        : "Led full brand conversion from independent property into Crowne Plaza with 100% IHG compliance.",
      highlight: language.code === 'ar' ? 'تحويل العلامة' : 'Brand Conversion',
    },
    {
      position: language.code === 'ar' ? "ممثل المالك (ما قبل الافتتاح)" : "Owner's Rep (Pre-Opening)",
      company: language.code === 'ar' ? "فور بوينتس باي شيراتون" : "Four Points by Sheraton",
      location: language.code === 'ar' ? "الرياض" : "Riyadh, KSA",
      period: "2024 - 2025",
      rooms: 172,
      description: language.code === 'ar'
        ? "أشرف على مشروع تطوير فندقي بقيمة $50M+، وظّف فريق ما قبل الافتتاح 150+ موظف."
        : "Oversaw $50M+ hotel development project. Recruited 150+ pre-opening team targeting $25M+ annual revenue.",
      highlight: language.code === 'ar' ? 'استشاري الملكية' : 'Ownership Advisory',
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
                <p className="font-semibold text-sm text-accent-foreground mb-3">{exp.company}</p>
                
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

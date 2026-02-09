
import React from 'react';
import { Calendar, MapPin, Building, Briefcase, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';

const ExperienceSection = () => {
  const { t, language, isRTL } = useLanguage();
  
  const experiences = [
    {
      position: language.code === 'ar' ? "مدير عمليات المجموعة" : "Group Operations Director",
      company: language.code === 'ar' ? "فنادق برايم" : "PRIME HOTELS",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, KSA",
      period: language.code === 'ar' ? "ديسمبر 2025 - الحاضر" : "December 2025 - Present",
      rooms: 0,
      roomsLabel: language.code === 'ar' ? "محفظة متعددة العلامات" : "Multi-Brand Portfolio",
      description: language.code === 'ar'
        ? "مسؤول عن عمليات الفنادق على مستوى المجموعة في المملكة العربية السعودية، يشرف على محفظة متعددة العلامات التجارية. أقود الحوكمة التشغيلية والأداء ومواءمة العلامة التجارية مع خطة نمو لبلوغ 10,000 غرفة بحلول 2030."
        : "Full responsibility for group-wide hotel operations overseeing a multi-brand portfolio. Leading operational governance, performance, and brand alignment with a growth strategy to reach 10,000 rooms by 2030.",
      highlight: language.code === 'ar' ? "منصب حالي" : "Current Role"
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "كراون بلازا الإسكندرية ميراج" : "CROWNE PLAZA ALEXANDRIA MIRAGE",
      location: language.code === 'ar' ? "الإسكندرية، مصر" : "Alexandria, Egypt",
      period: language.code === 'ar' ? "أغسطس 2025 - ديسمبر 2025" : "August 2025 - December 2025",
      rooms: 0,
      roomsLabel: language.code === 'ar' ? "تحويل العلامة التجارية" : "Brand Conversion",
      description: language.code === 'ar'
        ? "قيادة التحويل الكامل للعلامة التجارية من عقار مستقل إلى كراون بلازا، تنفيذ معايير آي إتش جي وأنظمتها وثقافة الخدمة عبر جميع الأقسام."
        : "Leading the full brand conversion into Crowne Plaza, implementing IHG standards, systems, and service culture. Driving operational transformation and serving as primary liaison between ownership and IHG.",
      highlight: language.code === 'ar' ? "تحويل العلامة" : "Brand Conversion"
    },
    {
      position: language.code === 'ar' ? "ممثل المالك ومدير التطوير (ما قبل الافتتاح)" : "Owner's Representative & Development Lead (Pre-Opening)",
      company: language.code === 'ar' ? "فور بوينتس باي شيراتون - طريق الملك عبدالعزيز" : "FOUR POINTS BY SHERATON KING ABDULAZIZ ROAD",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, KSA",
      period: language.code === 'ar' ? "أغسطس 2024 - يوليو 2025" : "August 2024 - July 2025",
      rooms: 172,
      roomsLabel: null,
      description: language.code === 'ar'
        ? "أشرف على مشروع تطوير فندقي بقيمة 50+ مليون دولار، وظّف وتدرب فريق ما قبل الافتتاح 150+، وأسس أنظمة إدارة الإيرادات مستهدفاً 25+ مليون دولار إيرادات سنوية."
        : "Oversaw $50M+ hotel development project. Recruited 150+ pre-opening team. Established revenue management systems targeting $25M+ in projected annual revenue. 80% Saudi national leadership.",
      highlight: language.code === 'ar' ? "استشاري الملكية" : "Ownership Advisory"
    }
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading inline-block">{t('careerHighlights')}</h2>
          <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
            {language.code === 'ar' 
              ? "أكثر من 30 عامًا من الخبرة القيادية المتقدمة عبر العلامات التجارية والأسواق الدولية للضيافة، مما يدفع التميز التشغيلي وتحويل الأعمال."
              : "Over 30 years of progressive leadership experience across international hospitality brands and markets, driving operational excellence and business transformation."
            }
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white border-t-2 border-luxury-gold hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-luxury-navy">{exp.position}</h3>
                    <div className="bg-luxury-navy text-white text-xs px-2 py-1 rounded-full">
                      {exp.highlight}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-3">{exp.company}</h4>
                  
                  <div className="flex items-center text-sm text-luxury-gray mb-2">
                    <MapPin size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                    <span>{exp.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-luxury-gray mb-2">
                    <Calendar size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                    <span>{exp.period}</span>
                  </div>
                  
                  {exp.roomsLabel ? (
                    <div className="flex items-center text-sm text-luxury-gray mb-4">
                      <Building size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                      <span>{exp.roomsLabel}</span>
                    </div>
                  ) : exp.rooms > 0 ? (
                    <div className="flex items-center text-sm text-luxury-gray mb-4">
                      <Building size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                      <span>{exp.rooms} {language.code === 'ar' ? "غرفة" : "Rooms"}</span>
                    </div>
                  ) : null}
                  
                  <p className="text-sm mt-auto mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="mt-auto">
                    <Link 
                      to="/career" 
                      className="text-sm text-luxury-gold hover:underline flex items-center"
                    >
                      {language.code === 'ar' ? "عرض التفاصيل" : "View Details"}
                      <ChevronRight size={16} className={`${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            className="bg-luxury-navy hover:bg-blue-900 flex items-center gap-2"
            asChild
          >
            <Link to="/career">
              <Briefcase size={16} />
              {t('viewFullCareerJourney')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

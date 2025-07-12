
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
      position: language.code === 'ar' ? "ممثل المالك ومدير التطوير (ما قبل الافتتاح)" : "Owner's Representative & Development Lead (Pre-Opening)",
      company: language.code === 'ar' ? "فور بوينتس باي شيراتون - طريق الملك عبدالعزيز" : "FOURPOINT BY SHERATON KING ABDULAZIZ ROAD",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, KSA",
      period: language.code === 'ar' ? "أغسطس 2024 - يوليو 2025" : "August 2024-July 2025",
      rooms: 172,
      description: language.code === 'ar'
        ? "تمثيل مصالح المالك عبر جميع مراحل التطوير من التخطيط إلى التسليم. التنسيق مع المهندسين المعماريين والمهندسين والمقاولين وفريق الخدمات التقنية في ماريوت لضمان التوافق مع معايير العلامة التجارية والتشغيل."
        : "Represented the owner's interests across all stages of development from planning to handover. Coordinated with architects, engineers, contractors, and Marriott's technical services team to ensure alignment with brand and operational standards.",
      highlight: language.code === 'ar' ? "استشاري الملكية" : "Ownership Advisory"
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "منتجع بورسعيد" : "PORTO SAID RESORT",
      location: language.code === 'ar' ? "بورسعيد، مصر" : "Port Said, Egypt",
      period: language.code === 'ar' ? "فبراير 2024 - أغسطس 2024" : "February 2024-August 2024",
      rooms: 168,
      description: language.code === 'ar'
        ? "قاد مشروع تجديد شامل بقيمة 3.5 مليون دولار لعقار مكون من 168 غرفة ومجمع تجاري يضم 24 منفذًا، مما أدى إلى نمو الإشغال بنسبة 18٪ وزيادة إيرادات الأغذية والمشروبات بنسبة 20٪."
        : "Spearheaded $3.5M comprehensive refurbishment project for 168-room property and 24 outlets mall, resulting in 18% occupancy growth and 20% F&B revenue increase.",
      highlight: language.code === 'ar' ? "تحول الأعمال" : "Business Turnaround"
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "منتجع ذا في الفاخر سهل حشيش" : "THE V LUXURY RESORT SAHL HASHEESH",
      location: language.code === 'ar' ? "الغردقة، مصر" : "Hurghada, Egypt",
      period: language.code === 'ar' ? "أبريل 2023 - فبراير 2024" : "April 2023-February 2024",
      rooms: 298,
      description: language.code === 'ar'
        ? "أدار عمليات ما قبل الافتتاح لمنتجع فاخر يضم 298 غرفة، وتنفيذ استراتيجيات تسويقية مبتكرة حققت نسبة إشغال 90٪ في غضون 4 أشهر من الإطلاق، مما وضع معيارًا جديدًا للسوق."
        : "Orchestrated pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved 90% occupancy within 4 months of launch, setting a new market benchmark.",
      highlight: language.code === 'ar' ? "قائد السوق" : "Market Leader"
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
                  
                  <div className="flex items-center text-sm text-luxury-gray mb-4">
                    <Building size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                    <span>{exp.rooms} {language.code === 'ar' ? "غرفة" : "Rooms"}</span>
                  </div>
                  
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

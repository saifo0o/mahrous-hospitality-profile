
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
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "فندق وارويك الجبيل" : "Warwick Jubail Hotel",
      location: language.code === 'ar' ? "الجبيل، المملكة العربية السعودية" : "Jubail, KSA",
      period: language.code === 'ar' ? "يناير 2024 - حالياً" : "January 2024 - Present",
      rooms: 105,
      description: language.code === 'ar' 
        ? "قيادة العمليات لهذا العقار الفاخر المكون من 105 غرفة، مع التركيز على التميز في الخدمة والكفاءة التشغيلية."
        : "Leading operations for this 105-room luxury property, focusing on service excellence and operational efficiency.",
      highlight: language.code === 'ar' ? "تميز الخدمة" : "Service Excellence",
      bgImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      position: language.code === 'ar' ? "ممثل المالك (ما قبل الافتتاح)" : "Owner Representative (Pre-Opening)",
      company: language.code === 'ar' ? "فورنقاط باي شيراتون طريق الملك عبدالعزيز" : "Fourpoint by Sheraton King Abdulaziz Road",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, KSA",
      period: language.code === 'ar' ? "أغسطس 2024 - يناير 2025" : "August 2024 - January 2025",
      rooms: 172,
      description: language.code === 'ar'
        ? "قاد عمليات ما قبل الافتتاح لعقار مكون من 172 غرفة، وتنفيذ عمليات التخطيط الاستراتيجي التي ضمنت إطلاقًا في الوقت المناسب مع 90٪ من الجاهزية التشغيلية."
        : "Led pre-opening operations for 172-room property, implementing strategic planning processes that ensured timely launch with 90% operational readiness.",
      highlight: language.code === 'ar' ? "خبير ما قبل الافتتاح" : "Pre-Opening Expert",
      bgImage: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "منتجع بورسعيد" : "Porto Said Resort",
      location: language.code === 'ar' ? "بورسعيد، مصر" : "Port Said, Egypt",
      period: language.code === 'ar' ? "فبراير 2024 - أغسطس 2024" : "February 2024 - August 2024",
      rooms: 168,
      description: language.code === 'ar'
        ? "قاد مشروع تجديد شامل بقيمة 3.5 مليون دولار لعقار مكون من 168 غرفة ومجمع تجاري يضم 24 منفذًا، مما أدى إلى نمو الإشغال بنسبة 18٪ وزيادة إيرادات الأغذية والمشروبات بنسبة 20٪."
        : "Spearheaded $3.5M comprehensive refurbishment project for 168-room property and 24 outlets mall, resulting in 18% occupancy growth and 20% F&B revenue increase.",
      highlight: language.code === 'ar' ? "نمو الإيرادات" : "Revenue Growth",
      bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  <img 
                    src={exp.bgImage} 
                    alt={exp.company} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-luxury-navy text-white text-xs px-2 py-1 rounded-full">
                    {exp.highlight}
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col h-full bg-white">
                  <h3 className="font-bold text-xl text-luxury-navy mb-2">{exp.position}</h3>
                  <h4 className="font-semibold text-lg mb-3 text-luxury-gray">{exp.company}</h4>
                  
                  <div className="flex items-center text-sm text-luxury-gray mb-2">
                    <MapPin size={16} className={`${isRTL ? 'ml-1' : 'mr-1'} text-luxury-gold`} />
                    <span>{exp.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-luxury-gray mb-2">
                    <Calendar size={16} className={`${isRTL ? 'ml-1' : 'mr-1'} text-luxury-gold`} />
                    <span>{exp.period}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-luxury-gray mb-4">
                    <Building size={16} className={`${isRTL ? 'ml-1' : 'mr-1'} text-luxury-gold`} />
                    <span>{exp.rooms} {language.code === 'ar' ? "غرفة" : "Rooms"}</span>
                  </div>
                  
                  <p className="text-sm mt-auto mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="mt-auto">
                    <Link 
                      to="/career" 
                      className="text-sm text-luxury-gold hover:underline flex items-center group"
                    >
                      {language.code === 'ar' ? "عرض التفاصيل" : "View Details"}
                      <ChevronRight size={16} className={`${isRTL ? 'mr-1 group-hover:-translate-x-1 rotate-180' : 'ml-1 group-hover:translate-x-1'} transition-transform`} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            className="bg-luxury-navy hover:bg-blue-900 flex items-center gap-2 py-6 px-8 text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            asChild
          >
            <Link to="/career">
              <Briefcase size={18} />
              {t('viewFullCareerJourney')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

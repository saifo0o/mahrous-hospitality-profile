
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineItem {
  id: string;
  year: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
  highlight: string;
}

const InteractiveTimeline: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const timelineData: TimelineItem[] = [
    {
      id: '2024-present',
      year: '2024',
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "فندق وارويك الجبيل" : "Warwick Jubail Hotel",
      location: language.code === 'ar' ? "الجبيل، السعودية" : "Jubail, KSA",
      duration: language.code === 'ar' ? "يناير 2024 - حالياً" : "January 2024 - Present",
      highlight: language.code === 'ar' ? "القيادة الحالية" : "Current Leadership",
      achievements: [
        language.code === 'ar' ? "إدارة عقار فاخر مكون من 105 غرفة" : "Managing 105-room luxury property",
        language.code === 'ar' ? "تحقيق معايير الخدمة الاستثنائية" : "Achieving exceptional service standards",
        language.code === 'ar' ? "تطوير الكفاءة التشغيلية" : "Developing operational efficiency"
      ]
    },
    {
      id: '2024-consulting',
      year: '2024',
      position: language.code === 'ar' ? "ممثل المالك (ما قبل الافتتاح)" : "Owner Representative (Pre-Opening)",
      company: language.code === 'ar' ? "فورنقاط باي شيراتون طريق الملك عبدالعزيز" : "Fourpoint by Sheraton King Abdulaziz Road",
      location: language.code === 'ar' ? "الرياض، السعودية" : "Riyadh, KSA",
      duration: language.code === 'ar' ? "أغسطس 2024 - يناير 2025" : "August 2024 - January 2025",
      highlight: language.code === 'ar' ? "خبير ما قبل الافتتاح" : "Pre-Opening Expert",
      achievements: [
        language.code === 'ar' ? "قيادة عمليات ما قبل الافتتاح لعقار 172 غرفة" : "Led pre-opening operations for 172-room property",
        language.code === 'ar' ? "تحقيق 90% من الجاهزية التشغيلية" : "Achieved 90% operational readiness",
        language.code === 'ar' ? "تطوير استراتيجيات الإطلاق" : "Developed launch strategies"
      ]
    },
    {
      id: '2024-renovation',
      year: '2024',
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "منتجع بورسعيد" : "Porto Said Resort",
      location: language.code === 'ar' ? "بورسعيد، مصر" : "Port Said, Egypt",
      duration: language.code === 'ar' ? "فبراير 2024 - أغسطس 2024" : "February 2024 - August 2024",
      highlight: language.code === 'ar' ? "خبير التجديد" : "Renovation Expert",
      achievements: [
        language.code === 'ar' ? "قيادة مشروع تجديد بقيمة 3.5 مليون دولار" : "Led $3.5M renovation project",
        language.code === 'ar' ? "نمو الإشغال بنسبة 18%" : "18% occupancy growth",
        language.code === 'ar' ? "زيادة إيرادات الأغذية والمشروبات بنسبة 20%" : "20% F&B revenue increase"
      ]
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className={`absolute top-0 bottom-0 w-1 bg-luxury-gold ${isRTL ? 'right-4' : 'left-4'}`}></div>
      
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative ${isRTL ? 'pr-12' : 'pl-12'}`}
          >
            {/* Timeline Dot */}
            <div className={`absolute w-4 h-4 bg-luxury-gold rounded-full border-4 border-white shadow-md ${isRTL ? '-right-2 top-6' : '-left-2 top-6'}`}></div>
            
            <Card className="cursor-pointer hover:shadow-lg transition-all duration-300" onClick={() => toggleExpand(item.id)}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-luxury-navy text-white text-xs px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                      <span className="bg-luxury-gold text-luxury-navy text-xs px-2 py-1 rounded-full">
                        {item.highlight}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-luxury-navy mb-1">
                      {item.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      {item.company}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {item.duration}
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: expandedItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {expandedItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t pt-4"
                    >
                      <h5 className="font-semibold text-luxury-navy mb-3">
                        {language.code === 'ar' ? "الإنجازات الرئيسية:" : "Key Achievements:"}
                      </h5>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: achievementIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Building, Users, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
  project: string;
}

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
}

const SocialProofWidget: React.FC = () => {
  const { language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: "Ahmed Al-Rashid",
      position: language.code === 'ar' ? "مدير التطوير" : "Development Manager",
      company: language.code === 'ar' ? "مجموعة الفنادق الفاخرة" : "Luxury Hotels Group",
      quote: language.code === 'ar'
        ? "أدارة إسلام لمشروع ما قبل الافتتاح كانت استثنائية. خبرته في التفاصيل والقيادة أدت إلى افتتاح سلس ومثالي."
        : "Islam's management of our pre-opening project was exceptional. His attention to detail and leadership resulted in a flawless launch.",
      rating: 5,
      project: language.code === 'ar' ? "افتتاح فندق فاخر" : "Luxury Hotel Opening"
    },
    {
      id: '2',
      name: "Sarah Mitchell",
      position: language.code === 'ar' ? "نائب الرئيس للعمليات" : "VP of Operations",
      company: language.code === 'ar' ? "سلسلة منتجعات دولية" : "International Resort Chain",
      quote: language.code === 'ar'
        ? "قاد إسلام عملية تجديد معقدة بخبرة مهنية عالية. النتائج فاقت كل التوقعات من ناحية الجودة والوقت والميزانية."
        : "Islam led our complex renovation with exceptional professionalism. Results exceeded expectations in quality, timing, and budget.",
      rating: 5,
      project: language.code === 'ar' ? "تجديد منتجع" : "Resort Renovation"
    },
    {
      id: '3',
      name: "Mohammed bin Hassan",
      position: language.code === 'ar' ? "الرئيس التنفيذي" : "CEO",
      company: language.code === 'ar' ? "شركة الاستثمار الفندقي" : "Hospitality Investment Company",
      quote: language.code === 'ar'
        ? "رؤية إسلام الاستراتيجية وخبرته التشغيلية حولت أداء محفظتنا الفندقية بشكل جذري."
        : "Islam's strategic vision and operational expertise transformed our hotel portfolio performance dramatically.",
      rating: 5,
      project: language.code === 'ar' ? "استشارات استراتيجية" : "Strategic Consulting"
    }
  ];

  const stats: Stat[] = [
    {
      icon: <Building className="h-6 w-6" />,
      value: "50+",
      label: language.code === 'ar' ? "مشروع مكتمل" : "Projects Completed",
      trend: "+12%"
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "10,000+",
      label: language.code === 'ar' ? "موظف مدرب" : "Staff Trained",
      trend: "+25%"
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "15+",
      label: language.code === 'ar' ? "جائزة مهنية" : "Industry Awards",
      trend: "+3"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "95%",
      label: language.code === 'ar' ? "معدل نجاح المشاريع" : "Project Success Rate",
      trend: "+5%"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="bg-gradient-to-br from-luxury-navy to-blue-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Live Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-luxury-gold">
              {language.code === 'ar' ? "إحصائيات الإنجاز" : "Achievement Metrics"}
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-luxury-gold">
                      {stat.icon}
                    </div>
                    {stat.trend && (
                      <span className="text-green-400 text-sm font-medium">
                        {stat.trend}
                      </span>
                    )}
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-3xl font-bold mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <p className="text-gray-300 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rotating Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-luxury-gold">
              {language.code === 'ar' ? "شهادات العملاء" : "Client Testimonials"}
            </h3>
            
            <div className="relative h-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20"
                >
                  <Quote className="h-8 w-8 text-luxury-gold mb-4" />
                  
                  <p className="text-lg leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentTestimonial].rating
                            ? 'text-luxury-gold fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-luxury-gold">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      {testimonials[currentTestimonial].project}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-luxury-gold'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofWidget;

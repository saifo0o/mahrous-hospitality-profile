
import React, { useRef } from 'react';
import { Star, Award, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const AwardsSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  
  const awards = [
    {
      title: language.code === 'ar' ? "جائزة المدير العام للشرق الأوسط وأفريقيا" : "Middle East & Africa General Manager Award",
      category: language.code === 'ar' ? "التميز في خدمة العملاء" : "Customer Excellence",
      year: "2017",
      icon: <Trophy className="h-8 w-8 text-luxury-gold" />,
    },
    {
      title: language.code === 'ar' ? "جائزة أفضل صوت نجم" : "Best-in-Class Award Star Voice",
      category: language.code === 'ar' ? "للسنة الثانية على التوالي" : "2nd consecutive year",
      year: "2017",
      icon: <Star className="h-8 w-8 text-luxury-gold" />,
    },
    {
      title: language.code === 'ar' ? "أفضل مدير للابتكار التشغيلي" : "Best Director of Operational Innovation",
      category: language.code === 'ar' ? "منطقة أفريقيا والمحيط الهندي" : "Africa & Indian Ocean region",
      year: "2007",
      icon: <Award className="h-8 w-8 text-luxury-gold" />,
    }
  ];

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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-primary via-primary/95 to-primary text-white relative overflow-hidden" ref={sectionRef}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              {t('awardsAndRecognition')}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          </motion.div>
          <motion.p 
            className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {language.code === 'ar' 
              ? "حاصل على تقدير للتميز في قيادة الضيافة والابتكار وخدمة العملاء طوال مسيرتي المهنية."
              : "Recognized for excellence in hospitality leadership, innovation, and customer service throughout my career."
            }
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:border-accent/50 transition-all duration-500 flex flex-col items-center text-center overflow-hidden shadow-xl hover:shadow-2xl"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <motion.div
                className="relative z-10 mb-6 p-4 bg-accent/20 rounded-full backdrop-blur-sm"
                initial={{ rotateY: 0, scale: 1 }}
                whileHover={{ 
                  rotateY: 360,
                  scale: 1.1,
                  transition: { duration: 0.8 }
                }}
              >
                {award.icon}
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mt-2 mb-3 line-clamp-3 min-h-[84px]">{award.title}</h3>
                <p className="text-accent font-semibold mb-2 text-lg">{award.category}</p>
                <div className="inline-block px-4 py-1 bg-white/10 rounded-full">
                  <p className="text-gray-200 text-sm font-medium">{award.year}</p>
                </div>
              </div>
              
              {/* Bottom Shine Effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300">
            <Link to="/awards">{t('viewAllAwards')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;

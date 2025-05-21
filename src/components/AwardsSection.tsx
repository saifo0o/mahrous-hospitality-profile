
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
    <section className="py-20 bg-luxury-navy text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            {t('awardsAndRecognition')}
            <motion.span 
              className="absolute left-0 -bottom-2 w-1/2 h-1 bg-luxury-gold"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </h2>
          <motion.p 
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                {award.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold mt-4 mb-2">{award.title}</h3>
              <p className="text-luxury-gold font-medium mb-2">{award.category}</p>
              <p className="text-gray-300 text-sm">{award.year}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-luxury-gold hover:bg-yellow-600 text-luxury-navy hover-lift">
            <Link to="/awards">{t('viewAllAwards')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;

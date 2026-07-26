
import React, { useRef } from 'react';
import { Star, Award, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { MedallionSeal } from '@/components/ui/AwardMedallion';

const AwardsSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  
  const awards = [
    {
      title: language.code === 'ar' ? "جائزة المدير العام للشرق الأوسط وأفريقيا" : "Middle East & Africa General Manager Award",
      category: language.code === 'ar' ? "التميز في خدمة العملاء" : "Customer Excellence",
      year: "2017",
      icon: <Trophy className="h-8 w-8 text-accent" />,
    },
    {
      title: language.code === 'ar' ? "جائزة أفضل صوت نجم" : "Best-in-Class Award Star Voice",
      category: language.code === 'ar' ? "للسنة الثانية على التوالي" : "2nd consecutive year",
      year: "2017",
      icon: <Star className="h-8 w-8 text-accent" />,
    },
    {
      title: language.code === 'ar' ? "أفضل مدير للابتكار التشغيلي" : "Best Director of Operational Innovation",
      category: language.code === 'ar' ? "منطقة أفريقيا والمحيط الهندي" : "Africa & Indian Ocean region",
      year: "2007",
      icon: <Award className="h-8 w-8 text-accent" />,
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
    <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden" ref={sectionRef}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-eyebrow justify-center text-primary-foreground/60">
            07 &mdash; {language.code === 'ar' ? 'التكريم' : 'Recognition'}
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 font-playfair">
              {t('awardsAndRecognition')}
            </h2>
            <div className="w-16 h-px bg-accent mx-auto mb-8" />
          </motion.div>
          <motion.p
            className="text-primary-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed"
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
              className="group relative bg-primary-foreground/[0.03] p-8 rounded-sm border border-primary-foreground/15 hover:border-accent/50 transition-colors duration-500 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="relative z-10 mb-6 flex justify-center">
                <MedallionSeal type={index === 0 ? 'marriott' : index === 1 ? 'starwood' : 'general'} className="w-20 h-20" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mt-2 mb-3 line-clamp-3 min-h-[84px]">{award.title}</h3>
                <p className="text-accent font-semibold mb-2 text-lg">{award.category}</p>
                <div className="inline-block px-4 py-1 border-t border-primary-foreground/15">
                  <p className="text-primary-foreground/70 text-sm font-medium">{award.year}</p>
                </div>
              </div>
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
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-sm transition-colors duration-300">
            <Link to="/awards">{t('viewAllAwards')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;


import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { Trophy, Users, BarChart, Building } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const StatsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t, isRTL } = useLanguage();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const stats = [
    { 
      value: '30+', 
      label: t('yearsOfExperienceShort'), 
      icon: <Trophy className="text-luxury-gold h-10 w-10" /> 
    },
    { 
      value: '5000+', 
      label: t('employeesTrained'), 
      icon: <Users className="text-luxury-gold h-10 w-10" /> 
    },
    { 
      value: '25%+', 
      label: t('revparIncrease'), 
      icon: <BarChart className="text-luxury-gold h-10 w-10" /> 
    },
    { 
      value: '$8.5M+', 
      label: t('renovationBudgets'), 
      icon: <Building className="text-luxury-gold h-10 w-10" /> 
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="stats-section" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-luxury-navy/60 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-luxury-gold flex flex-col items-center text-center group hover:-translate-y-1"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-luxury-navy dark:text-white mt-2 font-playfair">{stat.value}</h3>
              <p className="text-luxury-gray dark:text-gray-300 mt-2 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

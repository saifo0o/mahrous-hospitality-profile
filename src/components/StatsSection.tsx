
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";
import { Trophy, Users, BarChart, Building } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const StatsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language, t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects for stats
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const statsY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const stats = [
    { 
      value: '30+', 
      label: language.code === 'ar' ? 'سنوات الخبرة' : 'Years of Experience', 
      icon: <Trophy className="text-luxury-gold h-10 w-10" /> 
    },
    { 
      value: '5000+', 
      label: language.code === 'ar' ? 'الموظفين المدربين والموجهين' : 'Employees Trained & Mentored', 
      icon: <Users className="text-luxury-gold h-10 w-10" /> 
    },
    { 
      value: '25%+', 
      label: language.code === 'ar' ? 'متوسط زيادة عائد الغرفة المتاحة' : 'Average RevPAR Increase', 
      icon: <BarChart className="text-luxury-gold h-10 w-10" /> 
    },
    { 
      value: '$8.5M+', 
      label: language.code === 'ar' ? 'ميزانيات التجديد المدارة' : 'Managed in Renovation Budgets', 
      icon: <Building className="text-luxury-gold h-10 w-10" /> 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0.8, 
      rotate: -10,
      opacity: 0
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2
      }
    }
  };

  const numberVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Parallax background element */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ 
          y: backgroundY,
          background: 'radial-gradient(circle at 50% 50%, hsl(var(--luxury-gold)) 0%, transparent 70%)'
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ y: statsY, opacity }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-luxury-navy/60 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-luxury-gold flex flex-col items-center text-center group card-hover"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-full mb-4"
                variants={iconVariants}
                whileHover={{ 
                  rotate: [0, 5, -5, 0],
                  scale: 1.1,
                  transition: { duration: 0.5, ease: "easeInOut" }
                }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.h3 
                className="text-4xl font-bold text-luxury-navy dark:text-white mt-2 font-playfair"
                variants={numberVariants}
              >
                {stat.value}
              </motion.h3>
              
              <motion.p 
                className="text-luxury-gray dark:text-gray-300 mt-2 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

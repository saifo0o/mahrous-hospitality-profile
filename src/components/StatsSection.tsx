
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { language } = useLanguage();
  
  const stats = [
    { value: '30+', label: language.code === 'ar' ? 'سنوات خبرة' : 'Years Experience' },
    { value: '5,000+', label: language.code === 'ar' ? 'موظف مُدرّب' : 'Staff Trained' },
    { value: '35%', label: language.code === 'ar' ? 'نمو الإيرادات' : 'Revenue Growth' },
    { value: '$70M+', label: language.code === 'ar' ? 'ميزانيات مُدارة' : 'Budgets Managed' },
  ];

  return (
    <section ref={ref} className="py-16 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

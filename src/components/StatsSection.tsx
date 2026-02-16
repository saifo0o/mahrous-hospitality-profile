
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const AnimatedNumber = ({ value, suffix = '', isInView }: { value: number; suffix?: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return <>{count.toLocaleString()}{suffix}</>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { language } = useLanguage();
  
  const stats = [
    { value: 30, suffix: '+', label: language.code === 'ar' ? 'سنوات خبرة' : 'Years Experience', accent: true },
    { value: 5000, suffix: '+', label: language.code === 'ar' ? 'موظف مُدرّب' : 'Staff Trained', accent: false },
    { value: 35, suffix: '%', label: language.code === 'ar' ? 'نمو الإيرادات' : 'Revenue Growth', accent: false },
    { value: 70, suffix: 'M+', prefix: '$', label: language.code === 'ar' ? 'ميزانيات مُدارة' : 'Budgets Managed', accent: true },
  ];

  return (
    <section ref={ref} className="relative py-20 bg-primary overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={`text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-2 ${stat.accent ? 'text-accent' : 'text-primary-foreground'}`}>
                {stat.prefix || ''}<AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </p>
              <p className="text-sm text-primary-foreground/60 font-medium tracking-wide uppercase">
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

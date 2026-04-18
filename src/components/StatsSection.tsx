
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const AnimatedNumber = ({ value, suffix = '', isInView, onComplete }: { value: number; suffix?: string; isInView: boolean; onComplete?: () => void }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDone(true);
        onComplete?.();
      }
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return <>{count.toLocaleString()}{suffix}</>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { language } = useLanguage();
  const [completedStats, setCompletedStats] = useState<Set<number>>(new Set());
  
  const stats = [
    { value: 30, suffix: '+', label: language.code === 'ar' ? 'سنوات خبرة' : 'Years Experience', accent: true },
    { value: 5000, suffix: '+', label: language.code === 'ar' ? 'موظف مُدرّب' : 'Staff Trained', accent: false },
    { value: 35, suffix: '%', label: language.code === 'ar' ? 'نمو الإيرادات' : 'Revenue Growth', accent: false },
    { value: 70, suffix: 'M+', prefix: '$', label: language.code === 'ar' ? 'ميزانيات مُدارة' : 'Budgets Managed', accent: true },
  ];

  const handleComplete = (index: number) => {
    setCompletedStats(prev => new Set(prev).add(index));
  };

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-primary overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(hsl(var(--accent)) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section eyebrow */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-accent/60" />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-bold">
              {language.code === 'ar' ? 'بالأرقام' : 'By the Numbers'}
            </p>
            <span className="h-px w-8 bg-accent/60" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold text-primary-foreground/95">
            {language.code === 'ar' ? 'إنجازات تتحدث عن نفسها' : 'A Track Record That Speaks for Itself'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-8 lg:gap-x-12 relative">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center relative ${index < stats.length - 1 ? 'lg:after:content-[""] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-16 lg:after:w-px lg:after:bg-primary-foreground/10' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative inline-block">
                {completedStats.has(index) && (
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-accent/20 blur-xl"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.2, 1.5] }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                )}
                <motion.p
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-3 relative leading-none ${stat.accent ? 'text-accent' : 'text-primary-foreground'}`}
                  animate={completedStats.has(index) ? {
                    textShadow: ['0 0 0px transparent', '0 0 20px hsl(var(--accent) / 0.5)', '0 0 0px transparent']
                  } : {}}
                  transition={{ duration: 1.5 }}
                >
                  {stat.prefix || ''}<AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} onComplete={() => handleComplete(index)} />
                </motion.p>
              </div>
              <motion.span
                className="block mx-auto h-px w-8 bg-accent/50 mb-3"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
              />
              <p className="text-xs sm:text-sm text-primary-foreground/70 font-medium tracking-wider uppercase">
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

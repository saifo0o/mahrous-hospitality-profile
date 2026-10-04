import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const AnimatedNumber = ({ value, suffix = '', isInView, onComplete }: { value: number; suffix?: string; isInView: boolean; onComplete?: () => void }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease out
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        onComplete?.();
      }
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return <>{count.toLocaleString()}{suffix}</>;
};

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  desc: string;
  accent: boolean;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const { language } = useLanguage();
  const ar = language.code === 'ar';

  const stats: Stat[] = [
    {
      value: 30,
      suffix: '+',
      label: ar ? 'عامًا من القيادة' : 'Years Leadership',
      desc: ar ? 'افتتاح وتجديد وحوكمة أصول فندقية' : 'Opening, renovating & governing hotel assets',
      accent: true,
    },
    {
      value: 5000,
      suffix: '+',
      label: ar ? 'كادر مدرَّب' : 'Staff Trained',
      desc: ar ? 'من مجالس الإدارة إلى الفرق الأمامية' : 'From GM council rooms to front-line teams',
      accent: false,
    },
    {
      value: 35,
      suffix: '%',
      prefix: '+',
      label: ar ? 'نمو الإيراد لكل غرفة' : 'RevPAR Uplift',
      desc: ar ? 'متوسط الزيادة في مهام إعادة الهيكلة' : 'Average uplift on turnaround mandates',
      accent: true,
    },
    {
      value: 70,
      suffix: 'M+',
      prefix: '$',
      label: ar ? 'رأس مال مُوجَّه' : 'Capital Deployed',
      desc: ar ? 'كفاءة رأسمالية عبر التجديدات والافتتاحات' : 'Capital efficiency across renovations & pre-openings',
      accent: false,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden"
      aria-label={ar ? 'إحصاءات الأداء والنتائج' : 'Key Performance Statistics'}
    >
      {/* Ambient lighting */}
      <div className="absolute top-[-20%] end-[-10%] w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] start-[-10%] w-[500px] h-[500px] bg-luxury-emerald/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Ghost watermark — giant italic word behind the band */}
      <div aria-hidden className="ghost-word bottom-[-5rem] end-[-3rem] text-[14rem] md:text-[20rem] hidden md:block">
        {ar ? 'إرث' : 'Legacy'}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px w-8 bg-accent/60" />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-bold">
              {ar ? 'النتائج التشغيلية' : 'OPERATIONAL PERFORMANCE'}
            </p>
            <span className="h-px w-8 bg-accent/60" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-normal text-primary-foreground leading-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {ar ? 'أرقام تعكس التميز والانضباط' : 'Auditable Impact & Quantitative Excellence'}
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-primary-foreground/60 leading-relaxed font-light mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {ar
              ? 'هذه الأرقام ليست مجرد إحصائيات، بل خلاصة ثلاثة عقود من القرارات التشغيلية — كل فندق تم افتتاحه، كل فريق تم تدريبه، وكل ميزانية تم توجيهها بكفاءة نحو نتائج قابلة للتدقيق.'
              : 'These figures are the residue of three decades of operating decisions — every hotel opened, every team trained, and every budget deployed toward auditable, repeatable results.'}
          </motion.p>
        </div>

        {/* Stats — hairline-framed editorial band with oversized numerals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 border-t border-b border-primary-foreground/10 py-14 md:py-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              role="figure"
              aria-label={`${stat.label}: ${stat.prefix || ''}${stat.value}${stat.suffix}`}
            >
              <span className={`block oversized-stat ${stat.accent ? 'text-accent' : 'text-primary-foreground'}`}>
                {stat.prefix || ''}
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </span>
              <span className="oversized-stat-label">{stat.label}</span>
              <p className="text-xs text-primary-foreground/55 leading-relaxed font-sans mt-3 max-w-[230px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

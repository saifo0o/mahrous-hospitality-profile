import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';
import { Award, BarChart3, ShieldAlert, BadgeDollarSign } from 'lucide-react';

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

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';
  
  const stats = [
    { 
      value: 30, 
      suffix: '+', 
      label: ar ? '30+ عامًا' : '30+ Years', 
      icon: <Award className="w-5 h-5 text-accent" />,
      desc: ar ? 'افتتاح الفنادق وتجديدها وحوكمة أصولها' : 'Opening, renovating, and governing hotel assets',
      accent: true 
    },
    { 
      value: 5000, 
      suffix: '+', 
      label: ar ? '5,000+ مدرّب' : '5,000+ Trained', 
      icon: <BarChart3 className="w-5 h-5 text-accent" />,
      desc: ar ? 'من قاعات مجالس المدراء العامين إلى فرق الخط الأمامي' : 'From GM council rooms to front-line teams',
      accent: false 
    },
    { 
      value: 35, 
      suffix: '%', 
      label: ar ? '+35% RevPAR' : '+35% RevPAR', 
      icon: <ShieldAlert className="w-5 h-5 text-accent" />,
      desc: ar ? 'متوسط الزيادة في مهام إعادة الهيكلة والتعافي' : 'Average uplift on turnaround mandates',
      accent: false 
    },
    { 
      value: 70, 
      suffix: 'M+', 
      prefix: '$', 
      label: ar ? '$70M+ منشورة' : '$70M+ Deployed', 
      icon: <BadgeDollarSign className="w-5 h-5 text-accent" />,
      desc: ar ? 'كفاءة رأسمالية عبر مشاريع التجديد والافتتاح' : 'Capital efficiency across renovations and pre-openings',
      accent: true 
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden"
      aria-label={ar ? 'إحصاءات الأداء والنتائج' : 'Key Performance Statistics'}
    >
      {/* Visual background textures and lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-luxury-emerald/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-sm bg-primary-foreground/[0.02] border border-primary-foreground/[0.1] hover:border-accent/30 transition-colors duration-500 flex flex-col justify-between group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              role="figure"
              aria-label={`${stat.label}: ${stat.prefix || ''}${stat.value}${stat.suffix}`}
            >
              {/* Top Row: Icon and subtle line */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-sm bg-primary-foreground/[0.04] group-hover:bg-accent/10 transition-colors">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono text-primary-foreground/25 group-hover:text-accent/40 transition-colors">0{index + 1}</span>
              </div>

              {/* Number and Animation */}
              <div className="mb-4">
                <span className={`text-4xl sm:text-5xl md:text-6xl font-light font-playfair tracking-tight leading-none ${stat.accent ? 'text-accent' : 'text-primary-foreground'}`}>
                  {stat.prefix || ''}
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </span>
              </div>

              {/* Text metadata */}
              <div className="relative z-10">
                <h3 className="text-sm font-semibold tracking-wider text-primary-foreground uppercase mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-primary-foreground/55 leading-relaxed font-sans">
                  {stat.desc}
                </p>
              </div>

              {/* Fine micro-animation bottom accent bar */}
              <motion.div 
                className="absolute bottom-0 inset-x-0 h-[2px] bg-accent/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ originX: isRTL ? 1 : 0 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

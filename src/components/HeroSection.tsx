import React from 'react';
import { ArrowRight, Calendar, Building, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import EnhancedButton from './EnhancedButton';
import { FloatingDecoration, GradientMesh } from './EnhancedVisualEffects';

const CharRevealText = ({ text, delay = 0.2, className }: { text: string; delay?: number; className?: string }) => {
  // Split on words, not characters: Arabic is a cursive script whose glyphs
  // change shape based on neighboring letters, so wrapping each character in
  // its own span breaks that shaping (and mid-word line-wrapping) — a word is
  // the smallest unit that's safe to isolate in its own inline box.
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      // Spring physics overshoot past the target, which briefly drives the
      // blur() filter negative (invalid) and spams console warnings on
      // every settle frame — a tween has no overshoot, so it can't do that.
      transition: { type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.4 }
    }
  };

  return (
    <motion.span 
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </motion.span>
  );
};

export default function HeroSection() {
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';

  const mouseXValue = useMotionValue(0);
  const mouseYValue = useMotionValue(0);

  // Parallax rotation values
  const rotateX = useTransform(mouseYValue, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseXValue, [-300, 300], [-10, 10]);
  
  // Parallax offset for layered depth
  const frameX = useTransform(mouseXValue, [-300, 300], [8, -8]);
  const frameY = useTransform(mouseYValue, [-300, 300], [8, -8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    mouseXValue.set(mouseX);
    mouseYValue.set(mouseY);
  };

  const handleMouseLeave = () => {
    mouseXValue.set(0);
    mouseYValue.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1, delayChildren: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const pillars = [
    {
      icon: <Building className="w-5 h-5 text-accent" />,
      title: ar ? 'التجديد والافتتاح' : 'Renovation & Pre-Opening',
      desc: ar ? 'توجيه الميزانيات وتطوير مواصفات FF&E بكفاءة' : 'Managing capital audits and FF&E specifications'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      title: ar ? 'الحوكمة التشغيلية' : 'Operational Governance',
      desc: ar ? 'توحيد معايير الإجراءات والخدمة عبر 19 عقاراً فندقياً' : 'Standardizing SOPs across 19 properties'
    }
  ];

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background pt-20 pb-12 lg:pt-28 lg:pb-0"
      aria-label={ar ? 'المقدمة' : 'Introduction'}
    >
      {/* Restrained editorial backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <GradientMesh className="opacity-[0.08] dark:opacity-[0.05]" />
        {/* Minimal grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.04)_1px,transparent_1px)] bg-[size:60px_60px] md:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_50%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-8 items-center min-h-[calc(100dvh-6rem)] ${isRTL ? 'direction-rtl' : ''}`}>

          {/* Text Column */}
          <motion.div
            className={`order-2 lg:order-1 ${isRTL ? 'text-right' : 'text-left'} flex flex-col justify-center`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Numbered editorial eyebrow */}
            <motion.div variants={itemVariants} className="section-eyebrow">
              01 &mdash; {ar ? 'أكثر من 30 عامًا في القيادة العالمية للضيافة' : '30+ years in global hospitality leadership'}
            </motion.div>

            {/* Asymmetric Luxury Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-normal font-playfair text-foreground mb-6 leading-[1.05] tracking-tight relative"
            >
              {ar ? 'إسلام' : 'Islam'}
              <span className="sr-only"> {ar ? ', قائد الضيافة العالمية' : ', Global Hospitality Leader'}</span>
              <br />
              <span className="gradient-text font-normal italic font-playfair relative">
                {ar ? 'محروس' : 'Mahrous'}
                {/* Scroll underline animation */}
                <motion.span 
                  className="absolute bottom-0 start-0 h-[2px] bg-accent/60 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '80%' }}
                  transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </motion.h1>

            {/* Floating Quote-style Intro */}
            <motion.div 
              variants={itemVariants}
              className={`border-s-2 border-accent/30 ps-6 mb-8 max-w-xl ${isRTL ? 'border-s-0 border-e-2 pe-6 ps-0' : ''}`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl text-foreground font-light leading-relaxed">
                <CharRevealText 
                  text={ar ? 'أصنع الفنادق الفاخرة التي تبهر النزلاء وتدوم إنجازاتها.' : 'I build memorable luxury hotels and sustainable operations.'} 
                  delay={0.8}
                />
              </h2>
            </motion.div>

            {/* Detailed Description */}
            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground/95 mb-8 max-w-lg leading-relaxed font-sans"
            >
              {ar ?
              'قائد تنفيذي وخبير ضيافة عالمي بخبرة تتجاوز 30 عاماً في إدارة الفنادق الفاخرة وتشغيل الأصول الفندقية. سجل حافل بالنجاح مع كبرى العلامات العالمية (ماريوت، آي إتش جي، أكور) في مصر والشرق الأوسط.' :
              'Senior Hospitality Executive & Operations Director with over 30 years of leadership across Marriott, IHG, and Accor. Proven track record in P&L accountability, pre-opening pipelines, and operational excellence.'}
            </motion.p>

            {/* Asymmetrical pillars layout */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-8 max-w-xl border border-border/60 bg-border/60"
            >
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="group p-5 bg-background flex items-start gap-4 hover:bg-card transition-colors duration-300"
                >
                  <div className="p-2 mt-0.5 border border-accent/25 group-hover:border-accent/50 transition-colors">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation buttons */}
            <motion.div
              variants={itemVariants}
              className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:justify-start' : ''}`}
            >
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <EnhancedButton
                  variant="luxury"
                  className="w-full sm:w-auto font-semibold rounded-sm px-8 py-6 text-sm sm:text-base gap-2 shadow-gold-md"
                >
                  <Calendar size={18} />
                  {ar ? 'احجز استشارة مجانية' : 'Book a consultation'}
                </EnhancedButton>
              </Link>
              <Link to="/projects" className="w-full sm:w-auto">
                <EnhancedButton
                  variant="outline"
                  className="w-full sm:w-auto border-border hover:border-accent hover:bg-accent/5 text-foreground font-medium rounded-sm px-8 py-6 text-sm sm:text-base gap-2"
                >
                  {ar ? 'استكشف مشاريعي' : 'Explore my portfolio'}
                  <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
                </EnhancedButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
            <motion.div
              className="relative cursor-pointer"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Offset ink frame — signature corner mark */}
              <motion.div
                className="absolute -inset-4 border border-foreground/15 pointer-events-none"
                style={{ x: frameX, y: frameY }}
              />
              <motion.div
                className="absolute -top-4 -left-4 rtl:-left-auto rtl:-right-4 w-10 h-10 border-t-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-accent pointer-events-none z-20"
                style={{ x: frameX, y: frameY }}
              />

              {/* Main Image Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] lg:w-[350px] lg:h-[470px] overflow-hidden shadow-gold-lg bg-card z-10">
                <img
                  src="/lovable-uploads/ceab1cbd-052e-4068-8889-c6014f2be5ce.jpg"
                  alt={ar ? 'إسلام محروس' : 'Islam Mahrous'}
                  className="w-full h-full object-cover select-none"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Grounded stat strip — replaces floating glass badges */}
            <motion.div
              className="w-64 sm:w-72 md:w-80 lg:w-[350px] mt-0 grid grid-cols-3 border border-t-0 border-border bg-card divide-x rtl:divide-x-reverse divide-border"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="px-3 py-4 text-center">
                <p className="text-xl font-playfair text-accent leading-none">30+</p>
                <p className="text-[9px] text-muted-foreground mt-1.5 font-semibold uppercase tracking-wider">{ar ? 'عامًا' : 'Years'}</p>
              </div>
              <div className="px-3 py-4 text-center">
                <p className="text-xl font-playfair text-accent leading-none">5,000+</p>
                <p className="text-[9px] text-muted-foreground mt-1.5 font-semibold uppercase tracking-wider">{ar ? 'موظف' : 'Staff coached'}</p>
              </div>
              <div className="px-3 py-4 text-center flex flex-col items-center justify-center gap-1">
                <MapPin size={12} className="text-accent" />
                <p className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wider">{ar ? 'الإسكندرية، مصر' : 'Alexandria, Egypt'}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern scroll down indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 cursor-pointer opacity-50 hover:opacity-100 transition-opacity z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-accent"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

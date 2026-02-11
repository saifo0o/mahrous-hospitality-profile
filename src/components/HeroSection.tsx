
import React from 'react';
import { ArrowRight, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const { language, isRTL, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
  };

  const brands = ['Marriott', 'IHG', 'Accor', 'Crowne Plaza', 'Prime Hotels'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-primary/3 to-transparent" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Accent line */}
      <motion.div
        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 1 }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          
          {/* Text Content */}
          <motion.div
            className={`order-2 lg:order-1 ${isRTL ? 'text-right' : ''}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent-foreground">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {language.code === 'ar' ? 'أكثر من 30 عامًا في الضيافة العالمية' : '30+ Years in Global Hospitality'}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-foreground mb-4 leading-[1.1] tracking-tight"
            >
              {language.code === 'ar' ? 'إسلام' : 'Islam'}
              <br />
              <span className="gradient-text">{language.code === 'ar' ? 'محروس' : 'Mahrous'}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground font-light mb-3 max-w-lg"
            >
              {language.code === 'ar' 
                ? 'أبني الفنادق التي لا تُنسى' 
                : 'I build hotels people never forget.'
              }
            </motion.p>

            {/* Sub-tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground/80 mb-8 max-w-md leading-relaxed"
            >
              {language.code === 'ar'
                ? 'من عمليات ما قبل الافتتاح إلى التجديدات الكبرى — أقود الفنادق نحو التميز التشغيلي والنمو المستدام في الشرق الأوسط وشمال أفريقيا.'
                : 'From pre-opening to multi-million renovations — I lead hotels to operational excellence and sustainable growth across the MENA region.'
              }
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className={`flex flex-wrap gap-4 mb-12 ${isRTL ? 'justify-end' : ''}`}>
              <Link to="/book-consultation">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl px-8 py-6 text-base shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 gap-2">
                  <Calendar size={18} />
                  {language.code === 'ar' ? 'احجز استشارة' : 'Book a Consultation'}
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="border-border hover:border-accent text-foreground font-medium rounded-xl px-8 py-6 text-base gap-2 transition-all duration-300">
                  {language.code === 'ar' ? 'استكشف أعمالي' : 'Explore My Work'}
                  <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
                </Button>
              </Link>
            </motion.div>

            {/* Brand logos as text badges */}
            <motion.div variants={itemVariants}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-3 font-medium">
                {language.code === 'ar' ? 'خبرة مع' : 'Experience with'}
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span key={brand} className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium border border-border/50">
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 blur-sm" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-primary/20" />
              
              {/* Image */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/ceab1cbd-052e-4068-8889-c6014f2be5ce.jpg"
                  alt={language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous'}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-4 -left-6 md:-left-10 bg-card rounded-xl shadow-xl border border-border/50 px-5 py-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <p className="text-2xl font-bold font-playfair text-foreground">$70M+</p>
                <p className="text-xs text-muted-foreground">{language.code === 'ar' ? 'ميزانيات مُدارة' : 'Budgets Managed'}</p>
              </motion.div>

              {/* Floating location badge */}
              <motion.div
                className="absolute -top-3 -right-4 md:-right-8 bg-card rounded-xl shadow-xl border border-border/50 px-4 py-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="text-sm font-semibold text-foreground">📍 {language.code === 'ar' ? 'الرياض' : 'Riyadh, KSA'}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;


import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t, isRTL } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center luxury-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Parallax Background Effect with subtle zoom */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80')",
          backgroundPositionY: `calc(30% + ${scrollY * 0.2}px)`,
          transform: `scale(${1 + scrollY * 0.0005})`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      
      {/* Decorative elements with improved visibility */}
      <div className="absolute top-1/4 left-10 md:left-20 w-20 h-20 border-2 border-luxury-gold opacity-30 rounded-full animate-pulse-gold"></div>
      <div className="absolute bottom-1/3 right-10 md:right-20 w-32 h-32 border border-luxury-gold opacity-20 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-luxury-gold/20 opacity-10 rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-0">
        <motion.div 
          className={`max-w-3xl ${isRTL ? 'mr-0 md:mr-auto' : 'ml-0 md:ml-auto'}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="inline-block text-luxury-gold text-sm md:text-xl font-light tracking-wider uppercase border-b border-luxury-gold/30 pb-1">
              {t('hospitalityExecutive')}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-playfair"
          >
            <span className="text-gradient">{t('transformingHospitality')}</span>
            <span className="block text-luxury-gold">{t('yearsOfExperience')}</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl"
          >
            {t('heroDescription')}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Button className="bg-luxury-gold hover:bg-amber-500 text-luxury-navy font-medium rounded-md px-6 py-6 flex items-center gap-2 transition-all duration-300 shadow-gold hover:shadow-gold-lg text-base hover:-translate-y-1">
              <User size={18} />
              <Link to="/about">{t('viewMyStory')}</Link>
            </Button>
            
            <Button className="bg-transparent hover:bg-white/20 border border-white text-white font-medium rounded-md px-6 py-6 flex items-center gap-2 transition-all duration-300 backdrop-blur-sm text-base hover:-translate-y-1">
              <FileText size={18} />
              <a href="https://drive.google.com/file/d/1jyAbDkfP2rkgPH4148TMWLmF2uzhw0Jr/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">{t('downloadCV')}</a>
            </Button>
            
            <Button variant="link" className="text-white hover:text-luxury-gold flex items-center gap-1 transition-all duration-300 text-base group">
              <Link to="/projects" className="flex items-center gap-1">
                {t('seeMyWork')}
                <ArrowRight size={16} className={`${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'} transition-transform`} />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ 
              delay: 1.5, 
              duration: 0.6,
              y: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            onClick={() => {
              const statsSection = document.getElementById('stats-section');
              if (statsSection) {
                statsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className="text-white flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider mb-2">{t('scrollToExplore')}</span>
              <ChevronDown size={24} className="animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

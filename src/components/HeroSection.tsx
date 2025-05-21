
import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { language, isRTL, t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center luxury-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Parallax Background Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80')",
          backgroundPositionY: `calc(30% + ${scrollY * 0.2}px)`,
          transform: `scale(${1 + scrollY * 0.0005})`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-20 w-20 h-20 border-2 border-luxury-gold opacity-20 rounded-full"></div>
      <div className="absolute bottom-1/4 right-20 w-32 h-32 border border-luxury-gold opacity-10 rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-0">
        <motion.div 
          className={`max-w-3xl ${isRTL ? 'mr-auto ml-0 text-right' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block text-luxury-gold text-lg md:text-xl mb-2 font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {language.code === 'ar' ? 'التميز في الضيافة' : 'Hospitality Excellence'}
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-playfair"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-luxury-gold">{language.code === 'ar' ? '+30 عامًا' : '30+ Years'}</span> {language.code === 'ar' ? 'من تحويل مشهد الضيافة على مستوى العالم' : 'of Transforming Hospitality Landscapes Worldwide'}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {language.code === 'ar' 
              ? 'مدير تنفيذي في مجال الضيافة متخصص في عمليات ما قبل الافتتاح، وعمليات التجديد واسعة النطاق، والتميز التشغيلي.'
              : 'Hospitality Executive specializing in pre-opening operations, large-scale renovations, and operational excellence.'
            }
          </motion.p>
          
          <motion.div 
            className={`flex flex-wrap gap-4 ${isRTL ? 'justify-start' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Button className="bg-luxury-gold hover:bg-amber-500 text-luxury-navy font-medium rounded-md px-6 py-6 flex items-center gap-2 transition-all duration-300 shadow-gold hover:shadow-gold-lg text-base">
              <User size={18} />
              <Link to="/about">{t('viewMyStory')}</Link>
            </Button>
            
            <Button className="bg-transparent hover:bg-white/15 border border-white text-white font-medium rounded-md px-6 py-6 flex items-center gap-2 transition-all duration-300 backdrop-blur-sm text-base">
              <FileText size={18} />
              <a href="https://drive.google.com/file/d/1jyAbDkfP2rkgPH4148TMWLmF2uzhw0Jr/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                {t('downloadCV')}
              </a>
            </Button>
            
            {/* WhatsApp CTA Button */}
            <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-md px-6 py-6 flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl text-base">
              <MessageCircle size={18} />
              <a href="https://wa.me/201095556779" target="_blank" rel="noopener noreferrer">
                {t('messageOnWhatsApp')}
              </a>
            </Button>
            
            <Button variant="link" className="text-white hover:text-luxury-gold flex items-center gap-1 transition-all duration-300 text-base">
              <Link to="/projects" className={`flex items-center gap-1 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                {t('seeMyWork')}
                <ArrowRight size={16} className={`group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="animate-bounce text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

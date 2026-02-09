
import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { language, isRTL, t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section className="relative min-h-screen flex items-center luxury-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Enhanced Parallax Background Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80')",
          y: y
        }}
      ></motion.div>
      
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-luxury-navy/40 via-transparent to-luxury-gold/20"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-luxury-gold rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-20 w-20 h-20 border-2 border-luxury-gold opacity-20 rounded-full"
        initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
        animate={{ 
          opacity: [0.2, 0.3, 0.2], 
          scale: [1, 1.1, 1], 
          rotate: [0, 360] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-20 w-32 h-32 border border-luxury-gold opacity-10 rounded-full"
        initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1], 
          scale: [1, 1.2, 1],
          rotate: [0, -360]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>
      
      {/* Animated mesh gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(15, 30, 61, 0.15) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-0">
        <motion.div 
          className={`max-w-3xl ${isRTL ? 'mr-auto ml-0 text-right' : ''}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="inline-block text-luxury-gold text-lg md:text-xl mb-2 font-light tracking-wider"
            variants={itemVariants}
          >
            {language.code === 'ar' ? 'التميز في الضيافة العالمية' : 'Global Hospitality Excellence'}
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-playfair"
            variants={itemVariants}
          >
            {language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous'}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-4 font-light"
            variants={itemVariants}
          >
            {language.code === 'ar' 
              ? 'أكثر من 30 عاماً من القيادة في صناعة الضيافة الدولية'
              : 'Over 30 years shaping world-class hospitality experiences'
            }
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg text-gray-300 mb-8 font-light max-w-2xl"
            variants={itemVariants}
          >
            {language.code === 'ar' 
              ? 'خبرة مثبتة في عمليات ما قبل الافتتاح، تجديد الفنادق، وإدارة الأرباح والخسائر عبر ماريوت وآي إتش جي وأكور في المملكة العربية السعودية ومصر والإمارات وليبيا.'
              : 'Proven expertise in pre-opening operations, hotel renovations, and P&L management across Marriott, IHG & Accor in KSA, Egypt, UAE & Libya.'
            }
          </motion.p>
          
          <motion.div 
            className={`flex flex-wrap gap-4 ${isRTL ? 'justify-start' : ''}`}
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button className="bg-luxury-gold hover:bg-amber-500 text-luxury-navy font-medium rounded-md px-6 py-6 flex items-center gap-2 transition-all duration-300 shadow-gold hover:shadow-gold-lg text-base btn-hover">
                <User size={18} />
                <Link to="/about">{t('viewMyStory')}</Link>
              </Button>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button className="bg-transparent hover:bg-white/15 border border-white text-white font-medium rounded-md px-6 py-6 flex items-center gap-2 transition-all duration-300 backdrop-blur-sm text-base btn-hover">
                <FileText size={18} />
                <a href="https://drive.google.com/file/d/1jyAbDkfP2rkgPH4148TMWLmF2uzhw0Jr/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  {t('downloadCV')}
                </a>
              </Button>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-md px-6 py-6 flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl text-base btn-hover">
                <MessageCircle size={18} />
                <a href="https://wa.me/966553741020" target="_blank" rel="noopener noreferrer">
                  {t('messageOnWhatsApp')}
                </a>
              </Button>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button variant="link" className="text-white hover:text-luxury-gold flex items-center gap-1 transition-all duration-300 text-base">
                <Link to="/projects" className={`flex items-center gap-1 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('seeMyWork')}
                  <motion.div
                    whileHover={{ x: isRTL ? -2 : 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} className={`${isRTL ? 'rotate-180' : ''}`} />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div 
              className="text-white cursor-pointer"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

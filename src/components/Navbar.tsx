
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, language, isRTL } = useLanguage();
  
  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('career'), path: '/career' },
    { name: t('projects'), path: '/projects' },
    { name: t('awards'), path: '/awards' },
    { name: t('contact'), path: '/contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Define nav link variants for animations
  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: i => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };
  
  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2 dark:bg-luxury-navy/80' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className={`flex ${isRTL ? 'flex-row-reverse' : ''} justify-between items-center`}>
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-2xl font-bold ${scrolled ? 'text-luxury-navy' : 'text-white'} transition-colors duration-300`}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-luxury-gold"
            >
              Islam
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={scrolled ? 'text-luxury-navy' : 'text-white'}
            >
              {" "}Mahrous
            </motion.span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-8`}>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors nav-link ${
                    location.pathname === link.path 
                      ? 'text-luxury-gold' 
                      : scrolled ? 'text-luxury-navy hover:text-luxury-gold' : 'text-white hover:text-luxury-gold'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <LanguageSelector />
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className={`flex items-center md:hidden ${isRTL ? 'flex-row-reverse' : ''} space-x-4`}>
            <LanguageSelector />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? "text-luxury-navy hover:text-luxury-gold" : "text-white hover:text-luxury-gold"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-luxury-navy border-t border-gray-100 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className={`flex flex-col space-y-4 ${isRTL ? 'items-end' : ''}`}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`py-2 text-base font-medium transition-all duration-300 ${
                        location.pathname === link.path 
                          ? 'text-luxury-gold' 
                          : 'text-luxury-navy dark:text-white hover:text-luxury-gold'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

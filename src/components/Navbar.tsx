
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  // Navigation links with translation keys
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
  
  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-luxury-navy">
            <span className="text-luxury-gold">Islam</span> Mahrous
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-luxury-gold ${
                  location.pathname === link.path ? 'text-luxury-gold' : 'text-luxury-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <LanguageSelector />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <LanguageSelector />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="text-luxury-navy hover:text-luxury-gold"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 text-base font-medium ${
                    location.pathname === link.path ? 'text-luxury-gold' : 'text-luxury-navy'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;

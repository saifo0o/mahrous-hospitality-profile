
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { trackButtonClick } from '@/utils/analytics';
import { socialLinks } from '@/lib/brandConstants';

const WhatsAppButton = () => {
  const { t, isRTL, language } = useLanguage();
  
  const handleWhatsAppClick = () => {
    trackButtonClick('WhatsApp');
  };
  
  return (
    <motion.div
      className={`fixed z-50 bottom-4 sm:bottom-6 ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'}`} style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a 
        href={socialLinks.whatsapp}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 min-h-[48px]"
        onClick={handleWhatsAppClick}
        aria-label={language.code === 'ar' ? 'تواصل عبر واتساب' : 'Contact through WhatsApp'}
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">
          {t('messageOnWhatsApp')}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-1.5 py-0.5 rounded-sm">
          {language.code === 'ar' ? 'مصر' : 'EG'}
        </span>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;

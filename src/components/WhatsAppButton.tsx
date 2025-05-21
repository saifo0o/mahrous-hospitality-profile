
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <motion.div
      className={`fixed z-50 bottom-6 ${isRTL ? 'left-6' : 'right-6'}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a 
        href="https://wa.me/201095556779" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">
          {t('messageOnWhatsApp')}
        </span>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;

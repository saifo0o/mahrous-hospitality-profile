
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface EnhancedLoaderProps {
  type?: 'page' | 'content' | 'card' | 'inline';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const EnhancedLoader: React.FC<EnhancedLoaderProps> = ({ 
  type = 'content', 
  size = 'md',
  text,
  className = '' 
}) => {
  const { language } = useLanguage();

  const shimmerVariants = {
    initial: { x: '-100%' },
    animate: { 
      x: '100%',
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'easeInOut'
      }
    }
  };

  const pulseVariants = {
    initial: { opacity: 0.6 },
    animate: { 
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse' as const,
        duration: 1
      }
    }
  };

  const sizeClasses = {
    sm: 'h-4',
    md: 'h-6', 
    lg: 'h-8'
  };

  if (type === 'page') {
    return (
      <div className={`min-h-screen flex items-center justify-center ${className}`}>
        <div className="text-center">
          <motion.div
            className="w-16 h-16 border-4 border-luxury-gold/20 border-t-luxury-gold rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.p 
            className="text-luxury-gray"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
          >
            {text || (language.code === 'ar' ? 'جاري التحميل...' : 'Loading...')}
          </motion.p>
        </div>
      </div>
    );
  }

  if (type === 'inline') {
    return (
      <motion.div
        className={`inline-flex items-center gap-2 ${className}`}
        variants={pulseVariants}
        initial="initial"
        animate="animate"
      >
        <div className="w-4 h-4 bg-luxury-gold rounded-full animate-pulse" />
        <span className="text-sm text-luxury-gray">
          {text || (language.code === 'ar' ? 'جاري التحميل...' : 'Loading...')}
        </span>
      </motion.div>
    );
  }

  if (type === 'card') {
    return (
      <div className={`animate-pulse space-y-4 p-6 ${className}`}>
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-gray-200 h-12 w-12"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                variants={shimmerVariants}
                initial="initial"
                animate="animate"
              />
            </div>
            <div className="h-3 bg-gray-200 rounded w-1/2 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                variants={shimmerVariants}
                initial="initial"
                animate="animate"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          <div className="h-3 bg-gray-200 rounded w-5/6 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </div>
      </div>
    );
  }

  // Default content loader
  return (
    <div className={`space-y-3 ${className}`}>
      {[...Array(3)].map((_, i) => (
        <div 
          key={i} 
          className={`bg-gray-200 rounded relative overflow-hidden ${sizeClasses[size]}`}
          style={{ width: `${Math.random() * 40 + 60}%` }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        </div>
      ))}
    </div>
  );
};

export default EnhancedLoader;

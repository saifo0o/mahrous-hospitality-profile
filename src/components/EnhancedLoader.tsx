import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedLoaderProps {
  type?: 'card' | 'text' | 'image' | 'full';
  className?: string;
  lines?: number;
}

const EnhancedLoader: React.FC<EnhancedLoaderProps> = ({ 
  type = 'card', 
  className,
  lines = 3 
}) => {
  const pulseVariants = {
    pulse: {
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerVariants = {
    shimmer: {
      x: ['-100%', '100%'],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (type === 'card') {
    return (
      <motion.div 
        className={cn("bg-white/50 backdrop-blur-sm rounded-lg p-6 space-y-4", className)}
        variants={pulseVariants}
        animate="pulse"
      >
        <div className="flex items-center space-x-4">
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-200 to-gray-300 rounded-full h-12 w-12">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              variants={shimmerVariants}
              animate="shimmer"
            />
          </div>
          <div className="space-y-2 flex-1">
            <div className="relative overflow-hidden bg-gradient-to-r from-gray-200 to-gray-300 h-4 rounded w-3/4">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                variants={shimmerVariants}
                animate="shimmer"
              />
            </div>
            <div className="relative overflow-hidden bg-gradient-to-r from-gray-200 to-gray-300 h-3 rounded w-1/2">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                variants={shimmerVariants}
                animate="shimmer"
              />
            </div>
          </div>
        </div>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="relative overflow-hidden bg-gradient-to-r from-gray-200 to-gray-300 h-3 rounded">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              variants={shimmerVariants}
              animate="shimmer"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          </div>
        ))}
      </motion.div>
    );
  }

  if (type === 'image') {
    return (
      <motion.div 
        className={cn("relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg aspect-video", className)}
        variants={pulseVariants}
        animate="pulse"
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          variants={shimmerVariants}
          animate="shimmer"
        />
      </motion.div>
    );
  }

  if (type === 'full') {
    return (
      <div className={cn("space-y-6 p-6", className)}>
        <EnhancedLoader type="card" lines={4} />
        <EnhancedLoader type="image" />
        <EnhancedLoader type="card" lines={2} />
      </div>
    );
  }

  // text type
  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div 
          key={i}
          className="relative overflow-hidden bg-gradient-to-r from-gray-200 to-gray-300 h-4 rounded"
          variants={pulseVariants}
          animate="pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            variants={shimmerVariants}
            animate="shimmer"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default EnhancedLoader;
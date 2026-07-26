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

  if (type === 'card') {
    return (
      <motion.div
        className={cn("bg-card/50 backdrop-blur-sm rounded-sm border border-border p-6 space-y-4", className)}
        variants={pulseVariants}
        animate="pulse"
      >
        <div className="flex items-center space-x-4">
          <div className="bg-muted rounded-full h-12 w-12" />
          <div className="space-y-2 flex-1">
            <div className="bg-muted h-4 rounded-sm w-3/4" />
            <div className="bg-muted h-3 rounded-sm w-1/2" />
          </div>
        </div>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="bg-muted h-3 rounded-sm" />
        ))}
      </motion.div>
    );
  }

  if (type === 'image') {
    return (
      <motion.div
        className={cn("bg-muted rounded-sm aspect-video", className)}
        variants={pulseVariants}
        animate="pulse"
      />
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
          className="bg-muted h-4 rounded-sm"
          variants={pulseVariants}
          animate="pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default EnhancedLoader;
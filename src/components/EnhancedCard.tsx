import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  icon?: LucideIcon;
  iconColor?: string;
  delay?: number;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = false,
  icon: Icon,
  iconColor = 'text-accent',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`
        relative bg-card rounded-2xl overflow-hidden
        border border-border/50
        ${hover ? 'hover:border-accent/50 hover:shadow-2xl' : 'shadow-lg'}
        ${glow ? 'hover:shadow-accent/20' : ''}
        transition-all duration-500
        ${className}
      `}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Icon Badge */}
      {Icon && (
        <motion.div
          className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center ${iconColor}`}
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-10 h-10 opacity-30" />
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      />
    </motion.div>
  );
};

export default EnhancedCard;

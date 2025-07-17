import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'luxury' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  isLoading = false,
  ...props
}) => {
  const baseClasses = "relative overflow-hidden transition-all duration-300";
  
  const variantClasses = {
    default: "bg-primary hover:bg-primary/90 text-primary-foreground",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    luxury: "bg-gradient-to-r from-luxury-gold to-yellow-600 text-luxury-navy font-semibold shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-luxury-gold",
    glow: "bg-primary text-primary-foreground shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={isLoading}
        {...props}
      >
        <motion.div
          className="relative z-10 flex items-center justify-center gap-2"
          initial={false}
          animate={{ opacity: isLoading ? 0.7 : 1 }}
        >
          {isLoading && (
            <motion.div
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
          {children}
        </motion.div>
        
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full scale-0"
          whileTap={{ scale: 4, opacity: [0.3, 0] }}
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  );
};

export default EnhancedButton;
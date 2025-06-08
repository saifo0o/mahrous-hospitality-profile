
import React from 'react';
import { motion } from 'framer-motion';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps extends ButtonProps {
  ripple?: boolean;
  glow?: boolean;
  scale?: boolean;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({ 
  children, 
  className, 
  ripple = true,
  glow = false,
  scale = true,
  ...props 
}) => {
  const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { x, y, id: Date.now() };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <motion.div
      whileHover={scale ? { scale: 1.02 } : undefined}
      whileTap={scale ? { scale: 0.98 } : undefined}
      className="relative inline-block"
    >
      <Button
        {...props}
        onClick={handleClick}
        className={cn(
          'relative overflow-hidden transition-all duration-300',
          glow && 'shadow-lg hover:shadow-xl hover:shadow-luxury-gold/25',
          className
        )}
      >
        {/* Ripple effect */}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full pointer-events-none"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
        
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          whileHover={{ 
            x: '100%',
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        />
        
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  );
};

export default EnhancedButton;

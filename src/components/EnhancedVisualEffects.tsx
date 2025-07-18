import React, { useEffect, useRef } from 'react';

interface EnhancedVisualEffectsProps {
  children: React.ReactNode;
  className?: string;
}

export const EnhancedVisualEffects: React.FC<EnhancedVisualEffectsProps> = ({ 
  children, 
  className = "" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = container.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    // Add mouse tracking for interactive elements
    const handleMouseMove = (e: MouseEvent) => {
      const interactiveElements = container.querySelectorAll('.interactive-element');
      interactiveElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        (el as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (el as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={`enhanced-visual-effects ${className}`}>
      {children}
    </div>
  );
};

// Floating decoration component
export const FloatingDecoration: React.FC<{ 
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  delay?: number;
}> = ({ 
  size = 'md', 
  position = 'top-right',
  delay = 0 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const positionClasses = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8'
  };

  return (
    <div 
      className={`
        absolute ${positionClasses[position]} ${sizeClasses[size]}
        float-animation opacity-30 pointer-events-none
        bg-gradient-to-br from-luxury-gold/20 to-luxury-navy/20
        rounded-full blur-sm
      `}
      style={{ animationDelay: `${delay}s` }}
    />
  );
};

// Gradient mesh background
export const GradientMesh: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 mesh-background opacity-50 ${className}`} />
  );
};

// Enhanced button wrapper
export const LuxuryButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = "" 
}) => {
  const baseClasses = "btn-luxury transition-all duration-300 ease-out";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-white",
    secondary: "bg-gradient-to-r from-luxury-navy to-luxury-navy-light text-white",
    outline: "border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
  };

  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// Enhanced card wrapper
export const LuxuryCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}> = ({ 
  children, 
  className = "",
  hover = true,
  glow = false 
}) => {
  return (
    <div className={`
      luxury-card scroll-reveal
      ${hover ? 'hover-lift-luxury' : ''}
      ${glow ? 'pulse-glow' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

// Glass morphism card
export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`glass-card scroll-reveal ${className}`}>
      <GradientMesh className="opacity-20" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Section heading with enhanced styling
export const EnhancedSectionHeading: React.FC<{
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  centered?: boolean;
  className?: string;
}> = ({ 
  children, 
  level = 1,
  centered = false,
  className = "" 
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={`
      section-heading scroll-reveal
      ${centered ? 'text-center' : ''}
      ${className}
    `}>
      {children}
    </Tag>
  );
};

export default EnhancedVisualEffects;
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface MedallionIconProps {
  type?: 'marriott' | 'starwood' | 'ihg' | 'general';
  className?: string;
}

export const MedallionSeal: React.FC<MedallionIconProps> = ({ type = 'general', className = "w-16 h-16" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer rotating gold foil ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-dashed border-accent/40"
      />
      
      {/* Inner glowing badge backdrop */}
      <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-accent via-accent/70 to-accent/20 shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center border border-accent">
        <div className="absolute inset-0.5 rounded-full bg-card/90 flex items-center justify-center">
          {type === 'marriott' && (
            <div className="text-center">
              <span className="font-playfair font-black text-xs text-accent tracking-tighter block leading-none">M</span>
              <Star size={10} className="text-accent mx-auto mt-0.5 fill-accent" />
            </div>
          )}
          {type === 'starwood' && (
            <div className="text-center">
              <Sparkles size={16} className="text-accent mx-auto" />
            </div>
          )}
          {type === 'ihg' && (
            <div className="text-center">
              <ShieldCheck size={16} className="text-accent mx-auto" />
            </div>
          )}
          {type === 'general' && (
            <Award size={18} className="text-accent" />
          )}
        </div>
      </div>
    </div>
  );
};

interface AwardMedallionCardProps {
  title: string;
  issuer: string;
  year?: string | number;
  description?: string;
  category?: string;
  iconType?: 'marriott' | 'starwood' | 'ihg' | 'general';
}

export const AwardMedallionCard: React.FC<AwardMedallionCardProps> = ({
  title,
  issuer,
  year,
  description,
  category,
  iconType = 'general'
}) => {
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="bg-gradient-to-b from-card via-card to-muted/20 border border-border/60 hover:border-accent/50 rounded-sm p-6 sm:p-8 transition-all duration-300 relative overflow-hidden group shadow-md hover:shadow-xl flex flex-col justify-between h-full"
    >
      {/* Subtle top gold sheen gradient line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Background watermark icon */}
      <div className="absolute -bottom-6 -end-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
        <Award size={140} className="text-accent" />
      </div>

      <div>
        <div className="flex items-start justify-between gap-4 mb-6">
          <MedallionSeal type={iconType} className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0" />
          {year && (
            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-bold tracking-wider">
              {year}
            </span>
          )}
        </div>

        {category && (
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1 font-semibold">
            {category}
          </span>
        )}

        <h3 className="font-playfair font-bold text-lg sm:text-xl text-foreground mb-2 leading-snug group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-xs sm:text-sm font-semibold text-accent mb-4">
          {issuer}
        </p>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-muted-foreground/90 font-light leading-relaxed line-clamp-3 mt-auto pt-4 border-t border-border/40">
          {description}
        </p>
      )}
    </motion.div>
  );
};

import React from 'react';

interface BannerProps {
  className?: string;
}

export const SystemsBuilderBanner: React.FC<BannerProps> = ({ className = "w-full h-36" }) => (
  <div className={`relative overflow-hidden rounded-sm border border-border/60 group ${className}`}>
    <img 
      src="/systems-builder.png?v=charts" 
      alt="Systems Builder Architecture & SOPs Chart" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
    <div className="z-10 bg-background/90 backdrop-blur-md px-3.5 py-1.5 rounded border border-accent/30 absolute bottom-3 start-3 shadow-md">
      <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">
        ARCHITECTURE & SOPs
      </span>
    </div>
  </div>
);

export const FieldOperatorBanner: React.FC<BannerProps> = ({ className = "w-full h-36" }) => (
  <div className={`relative overflow-hidden rounded-sm border border-border/60 group ${className}`}>
    <img 
      src="/field-operator.png?v=charts" 
      alt="Field Operator Asset Protection & Governance Chart" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
    <div className="z-10 bg-background/90 backdrop-blur-md px-3.5 py-1.5 rounded border border-emerald-500/30 absolute bottom-3 start-3 shadow-md">
      <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase font-bold">
        ASSET PROTECTION & GOVERNANCE
      </span>
    </div>
  </div>
);

export const MentorCoachBanner: React.FC<BannerProps> = ({ className = "w-full h-36" }) => (
  <div className={`relative overflow-hidden rounded-sm border border-border/60 group ${className}`}>
    <img 
      src="/mentor-coach.png?v=charts" 
      alt="Mentor & Coach Talent Architecture & Leadership Chart" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
    <div className="z-10 bg-background/90 backdrop-blur-md px-3.5 py-1.5 rounded border border-accent/30 absolute bottom-3 start-3 shadow-md">
      <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">
        TALENT ARCHITECTURE & LEADERSHIP
      </span>
    </div>
  </div>
);

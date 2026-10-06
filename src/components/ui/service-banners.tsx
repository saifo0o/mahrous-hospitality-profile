import React from 'react';
import { Layers, ShieldCheck, Users } from 'lucide-react';

interface BannerProps {
  className?: string;
}

const BannerShell: React.FC<BannerProps & { label: string; children: React.ReactNode }> = ({
  className = "w-full h-36",
  label,
  children,
}) => (
  <div className={`relative overflow-hidden rounded-sm border border-border/60 bg-primary group ${className}`}>
    {/* faint oversized icon watermark */}
    <div className="absolute -end-4 -bottom-6 opacity-[0.08] text-primary-foreground pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
      {children}
    </div>
    {/* hairline inner frame */}
    <div className="absolute inset-2 border border-primary-foreground/15 pointer-events-none" />
    <div className="absolute inset-0 flex items-center justify-center text-primary-foreground/90 transition-transform duration-700 group-hover:scale-110">
      {children}
    </div>
    <div className="z-10 bg-background/90 backdrop-blur-md px-3.5 py-1.5 rounded border border-accent/30 absolute bottom-3 start-3 shadow-md">
      <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">
        {label}
      </span>
    </div>
  </div>
);

export const SystemsBuilderBanner: React.FC<BannerProps> = ({ className }) => (
  <BannerShell className={className} label="ARCHITECTURE & SOPs">
    <Layers className="w-14 h-14" strokeWidth={1.25} />
  </BannerShell>
);

export const FieldOperatorBanner: React.FC<BannerProps> = ({ className }) => (
  <BannerShell className={className} label="ASSET PROTECTION & GOVERNANCE">
    <ShieldCheck className="w-14 h-14" strokeWidth={1.25} />
  </BannerShell>
);

export const MentorCoachBanner: React.FC<BannerProps> = ({ className }) => (
  <BannerShell className={className} label="TALENT ARCHITECTURE & LEADERSHIP">
    <Users className="w-14 h-14" strokeWidth={1.25} />
  </BannerShell>
);

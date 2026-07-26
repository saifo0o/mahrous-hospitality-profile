import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const IconConciergeBell: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 19H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4 19C4 14.5817 7.58172 11 12 11C16.4183 11 20 14.5817 20 19" stroke="currentColor" strokeWidth="1.8" className="text-accent" />
    <path d="M12 11V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="6" r="2" fill="currentColor" className="text-accent" />
    <path d="M7 19V17.5C7 15.567 8.567 14 10.5 14H13.5C15.433 14 17 15.567 17 17.5V19" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" className="text-foreground/40" />
  </svg>
);

export const IconFFEAudit: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" className="text-foreground" />
    <path d="M8 7H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-accent" />
    <path d="M8 11H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 15H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="16" cy="15" r="3" fill="currentColor" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
    <path d="M15 15L15.8 15.8L17.5 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
  </svg>
);

export const IconSTRYield: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3 20H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5 20V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-foreground/60" />
    <path d="M10 20V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-foreground/80" />
    <path d="M15 20V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-accent" />
    <path d="M20 20V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-accent/60" />
    <path d="M4 11L9 7L14 9L20 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
    <circle cx="20" cy="3" r="2" fill="currentColor" className="text-accent" />
  </svg>
);

export const IconKaizenLoop: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.5 5 7.5 6.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-accent" />
    <path d="M16 8L20 4L16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-accent" style={{ transformOrigin: '20px 4px', transform: 'rotate(90deg)' }} />
    <circle cx="12" cy="12" r="3" fill="currentColor" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
    <path d="M12 9V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconKSAPalm: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 22V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-accent" />
    <path d="M12 14C10 14 7 16 5 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-emerald-600 dark:text-emerald-500" />
    <path d="M12 14C14 14 17 16 19 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-emerald-600 dark:text-emerald-500" />
    <path d="M12 11C9 10 5 11 3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-emerald-600 dark:text-emerald-500" />
    <path d="M12 11C15 10 19 11 21 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-emerald-600 dark:text-emerald-500" />
    <path d="M12 8C10 6 7 5 5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-emerald-600 dark:text-emerald-500" />
    <path d="M12 8C14 6 17 5 19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-emerald-600 dark:text-emerald-500" />
    <circle cx="12" cy="4" r="2" fill="currentColor" className="text-accent" />
    <path d="M7 22L17 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground" />
  </svg>
);

export const IconVIPKey: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="7.5" cy="16.5" r="4.5" stroke="currentColor" strokeWidth="1.8" className="text-accent" />
    <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor" className="text-accent" />
    <path d="M10.7 13.3L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground" />
    <path d="M18 6L21 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-accent" />
    <path d="M15 9L18 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-accent" />
  </svg>
);

export const IconHotelBuilding: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 21H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6 21V5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V21" stroke="currentColor" strokeWidth="1.8" className="text-foreground" />
    <path d="M10 7H11M13 7H14M10 11H11M13 11H14M10 15H11M13 15H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-accent" />
    <path d="M10 21V18H14V21" stroke="currentColor" strokeWidth="1.8" className="text-accent" />
  </svg>
);

export const IconExecutiveCrown: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3 17L5 8L10 12L12 5L14 12L19 8L21 17H3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="text-accent" fill="currentColor" fillOpacity="0.15" />
    <path d="M3 19H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground" />
    <circle cx="12" cy="3" r="1.5" fill="currentColor" className="text-accent" />
    <circle cx="4" cy="6" r="1.5" fill="currentColor" className="text-accent" />
    <circle cx="20" cy="6" r="1.5" fill="currentColor" className="text-accent" />
  </svg>
);

export const IconQualityShield: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 3L4 6V12C4 17.5228 7.58172 21 12 22C16.4183 21 20 17.5228 20 12V6L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="text-foreground" />
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
  </svg>
);

export const IconTalentMentorship: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="9" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" className="text-accent" />
    <path d="M3 19C3 15.6863 5.68629 13 9 13C12.3137 13 15 15.6863 15 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-foreground" />
    <circle cx="18" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" className="text-accent/70" />
    <path d="M15 19C15.5 16.5 17 15 19.5 15C20.5 15 21.5 15.3 22 15.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground/70" />
  </svg>
);

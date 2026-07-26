import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface LogoProps {
  className?: string;
}

export const DiscoverEgyptLogo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  const { language } = useLanguage();
  const ar = language.code === 'ar';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-auto aspect-square flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L34 32H6L20 4Z" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <path d="M20 12L28 28H12L20 12Z" fill="currentColor" className="text-accent/20" />
        <circle cx="20" cy="18" r="3" fill="currentColor" className="text-accent" />
        <path d="M4 34H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground/70" />
      </svg>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-playfair font-semibold tracking-wider text-sm sm:text-base text-foreground">
          {ar ? 'ديسكفر إيجيبت' : 'DISCOVER EGYPT'}
        </span>
        <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-sans mt-0.5">
          {ar ? 'مجلة السياحة والضيافة' : 'Hospitality Magazine'}
        </span>
      </div>
    </div>
  );
};

export const MagnificentOnlineLogo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  const { language } = useLanguage();
  const ar = language.code === 'ar';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-auto aspect-square flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L34 20L20 36L6 20L20 4Z" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <path d="M20 10L28 20L20 30L12 20L20 10Z" fill="currentColor" className="text-accent/25" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" className="text-accent" />
      </svg>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-playfair font-bold tracking-wide text-sm sm:text-base text-foreground">
          {ar ? 'ماجنيفسنت' : 'MAGNIFICENT'}
        </span>
        <span className="text-[10px] tracking-widest text-accent font-sans font-semibold uppercase mt-0.5">
          {ar ? 'أونلاين للمال والأعمال' : 'Online Executive'}
        </span>
      </div>
    </div>
  );
};

export const GroubnaBlogLogo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  const { language } = useLanguage();
  const ar = language.code === 'ar';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-auto aspect-square flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <path d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground/80" />
        <circle cx="14" cy="24" r="3" fill="currentColor" className="text-accent" />
        <circle cx="26" cy="24" r="3" fill="currentColor" className="text-accent" />
        <circle cx="20" cy="15" r="2.5" fill="currentColor" className="text-foreground" />
      </svg>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-sans font-extrabold tracking-tight text-sm sm:text-base text-foreground">
          {ar ? 'مدونة جروبنا' : 'GROUBNA'}
        </span>
        <span className="text-[10px] tracking-wider text-muted-foreground font-medium uppercase mt-0.5">
          {ar ? 'رؤى القيادة والريادة' : 'Leadership Blog'}
        </span>
      </div>
    </div>
  );
};

export const ArabTourismLogo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  const { language } = useLanguage();
  const ar = language.code === 'ar';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-auto aspect-square flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <path d="M20 5C20 5 28 12 28 20C28 28 20 35 20 35C20 35 12 28 12 20C12 12 20 5 20 5Z" stroke="currentColor" strokeWidth="1.5" className="text-accent/60" />
        <path d="M6 20H34" stroke="currentColor" strokeWidth="1.5" className="text-accent/60" />
      </svg>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-playfair font-bold text-sm sm:text-base text-foreground">
          {ar ? 'أخبار السياحة العربية' : 'ARAB TOURISM'}
        </span>
        <span className="text-[10px] tracking-wider text-muted-foreground uppercase mt-0.5 font-sans">
          {ar ? 'الشبكة الإخبارية' : 'News Network'}
        </span>
      </div>
    </div>
  );
};

export const EgyptTodayLogo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  const { language } = useLanguage();
  const ar = language.code === 'ar';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-auto aspect-square flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="10" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <circle cx="20" cy="20" r="5" fill="currentColor" className="text-accent" />
        <path d="M8 15H12M28 15H32M8 25H12M28 25H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground/70" />
      </svg>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-serif font-black tracking-tight text-sm sm:text-base text-foreground">
          {ar ? 'إيجيبت توداي' : 'EGYPT TODAY'}
        </span>
        <span className="text-[10px] tracking-widest text-accent uppercase font-sans mt-0.5">
          {ar ? 'المجلة الوطنية' : 'National Portal'}
        </span>
      </div>
    </div>
  );
};

export const YouTubeInterviewLogo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  const { language } = useLanguage();
  const ar = language.code === 'ar';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-full w-auto aspect-square flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="32" height="20" rx="6" fill="currentColor" className="text-red-600 dark:text-red-500" />
        <path d="M16 15L26 20L16 25V15Z" fill="white" />
      </svg>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-sans font-bold tracking-tight text-sm sm:text-base text-foreground">
          {ar ? 'مقابلة تلفزيونية' : 'EXCLUSIVE INTERVIEW'}
        </span>
        <span className="text-[10px] tracking-wider text-muted-foreground uppercase mt-0.5">
          {ar ? 'يوتيوب بريميوم' : 'YouTube Broadcast'}
        </span>
      </div>
    </div>
  );
};

interface PublicationLogoProps {
  source: string;
  className?: string;
}

export const PublicationLogo: React.FC<PublicationLogoProps> = ({ source, className = "h-9 w-auto" }) => {
  switch (source) {
    case 'Discover Egypt Magazine':
      return <DiscoverEgyptLogo className={className} />;
    case 'Magnificent Online':
      return <MagnificentOnlineLogo className={className} />;
    case 'Groubna Blog':
      return <GroubnaBlogLogo className={className} />;
    case 'Arab Tourism News':
      return <ArabTourismLogo className={className} />;
    case 'Egypt Today':
      return <EgyptTodayLogo className={className} />;
    case 'YouTube Interview':
      return <YouTubeInterviewLogo className={className} />;
    default:
      return (
        <div className={`flex items-center gap-2 px-3 py-1 rounded.sm bg-muted/30 border border-border/50 ${className}`}>
          <span className="font-playfair font-semibold text-xs text-accent uppercase tracking-wider">
            {source}
          </span>
        </div>
      );
  }
};

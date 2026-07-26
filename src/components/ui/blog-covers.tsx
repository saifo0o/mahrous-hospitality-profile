import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  IconConciergeBell, 
  IconExecutiveCrown, 
  IconSTRYield, 
  IconQualityShield, 
  IconTalentMentorship, 
  IconKaizenLoop,
  IconKSAPalm,
  IconHotelBuilding
} from '@/components/ui/hospitality-icons';

interface BlogCoverProps {
  title: string;
  category?: string;
  imageUrl?: string | null;
  className?: string;
}

export const BlogCover: React.FC<BlogCoverProps> = ({ title, category, imageUrl, className = "w-full h-56" }) => {
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';

  if (imageUrl && imageUrl.trim() !== '') {
    return (
      <div className={`relative overflow-hidden bg-muted ${className}`}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {category && (
          <div className="absolute top-4 start-4 z-10">
            <span className="px-3 py-1 rounded-sm bg-accent/90 text-accent-foreground font-mono text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}
      </div>
    );
  }

  // Determine cover theme based on keywords in category or title
  const textStr = `${category || ''} ${title}`.toLowerCase();
  let theme = 'general';
  if (textStr.includes('opening') || textStr.includes('pipeline') || textStr.includes('افتتاح') || textStr.includes('تأسيس')) {
    theme = 'preopening';
  } else if (textStr.includes('revenue') || textStr.includes('revpar') || textStr.includes('str') || textStr.includes('yield') || textStr.includes('إيرادات') || textStr.includes('ربحية')) {
    theme = 'revenue';
  } else if (textStr.includes('talent') || textStr.includes('mentor') || textStr.includes('leadership') || textStr.includes('قيادة') || textStr.includes('مواهب') || textStr.includes('تدريب')) {
    theme = 'leadership';
  } else if (textStr.includes('six sigma') || textStr.includes('kaizen') || textStr.includes('quality') || textStr.includes('sop') || textStr.includes('جودة') || textStr.includes('كايزن') || textStr.includes('سيكس سيجما')) {
    theme = 'quality';
  } else if (textStr.includes('ksa') || textStr.includes('vision 2030') || textStr.includes('saudi') || textStr.includes('السعودية') || textStr.includes('رؤية')) {
    theme = 'ksa';
  }

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-card via-muted/40 to-card border-b border-border/60 ${className} flex flex-col justify-between p-6 group`}>
      {/* Background vector geometric grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, var(--accent) 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }} />

      {/* Theme specific illustration */}
      <div className="absolute -bottom-6 -end-6 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
        {theme === 'preopening' && <IconHotelBuilding size={160} className="text-accent" />}
        {theme === 'revenue' && <IconSTRYield size={160} className="text-accent" />}
        {theme === 'leadership' && <IconExecutiveCrown size={160} className="text-accent" />}
        {theme === 'quality' && <IconKaizenLoop size={160} className="text-accent" />}
        {theme === 'ksa' && <IconKSAPalm size={160} className="text-accent" />}
        {theme === 'general' && <IconConciergeBell size={160} className="text-accent" />}
      </div>

      {/* Top Bar with Category & Icon */}
      <div className="flex items-center justify-between z-10">
        {category ? (
          <span className="px-3 py-1 rounded-sm bg-accent/20 border border-accent/40 text-accent font-mono text-xs font-bold uppercase tracking-wider">
            {category}
          </span>
        ) : (
          <span className="px-3 py-1 rounded-sm bg-muted border border-border text-muted-foreground font-mono text-xs font-bold uppercase tracking-wider">
            {ar ? 'رؤى تنفيذية' : 'EXECUTIVE INSIGHT'}
          </span>
        )}

        <div className="p-2 rounded bg-accent/10 border border-accent/20 text-accent">
          {theme === 'preopening' && <IconHotelBuilding size={20} />}
          {theme === 'revenue' && <IconSTRYield size={20} />}
          {theme === 'leadership' && <IconExecutiveCrown size={20} />}
          {theme === 'quality' && <IconQualityShield size={20} />}
          {theme === 'ksa' && <IconKSAPalm size={20} />}
          {theme === 'general' && <IconConciergeBell size={20} />}
        </div>
      </div>

      {/* Decorative Gold Sheen Line */}
      <div className="z-10 mt-auto">
        <div className="w-12 h-1 bg-accent mb-3 group-hover:w-24 transition-all duration-500" />
        <span className="text-[11px] font-playfair font-semibold text-muted-foreground uppercase tracking-widest block">
          {ar ? 'مدونة إسلام محروس للقيادة والضيافة' : 'PRIME CONNECT HOSPITALITY LEADERSHIP'}
        </span>
      </div>
    </div>
  );
};

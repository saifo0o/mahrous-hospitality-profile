import React from 'react';
import { brandLogos } from '@/lib/brandConstants';
import { useLanguage } from '@/context/LanguageContext';

export default function BrandLogos() {
  const { language } = useLanguage();

  return (
    <section 
      className="relative py-12 md:py-16 bg-gradient-to-b from-background via-muted/10 to-background border-y border-border/30 overflow-hidden"
      aria-label={language.code === 'ar' ? 'العلامات التجارية الشريكة' : 'Partner Brands'}
    >
      {/* Subtle decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-accent/40" />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              {language.code === 'ar' ? 'شراكات استراتيجية' : 'Strategic Partnerships'}
            </p>
            <span className="h-px w-6 bg-accent/40" />
          </div>
          <h3 className="text-base md:text-xl font-playfair font-normal text-foreground/80 max-w-2xl mx-auto">
            {language.code === 'ar'
              ? 'خبرة مع أبرز العلامات التجارية الفندقية العالمية'
              : 'Trusted by World-Class Hospitality Brands'}
          </h3>
        </div>

        {/* Marquee Wrapper with fallback for reduced motion */}
        <div className="relative w-full overflow-hidden">
          {/* Faded edges gradients for smooth blending */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee container using pure CSS animations for high performance */}
          <div className="flex gap-4 sm:gap-8 items-center py-3 select-none motion-safe:animate-marquee motion-reduce:flex-wrap motion-reduce:justify-center">
            {/* Repeat list 3 times to make it seamless on ultra-wide screens */}
            {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-24 h-14 sm:w-32 sm:h-18 md:w-38 md:h-22 rounded-sm bg-card border border-border/40 flex items-center justify-center p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-accent/40 hover:bg-card transition-all duration-300">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

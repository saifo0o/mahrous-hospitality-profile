
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

import marriottLogo from '@/assets/logos/marriott.svg';
import ihgLogo from '@/assets/logos/ihg.svg';
import accorLogo from '@/assets/logos/accor.svg';
import sheratonLogo from '@/assets/logos/sheraton.svg';
import crownePlazaLogo from '@/assets/logos/crowne-plaza.svg';
import primeHotelsLogo from '@/assets/logos/prime-hotels.png';

const brands = [
  { name: 'Marriott International', logo: marriottLogo },
  { name: 'IHG Hotels & Resorts', logo: ihgLogo },
  { name: 'Accor Hotels', logo: accorLogo },
  { name: 'Sheraton Hotels & Resorts', logo: sheratonLogo },
  { name: 'Crowne Plaza', logo: crownePlazaLogo },
  { name: 'Prime Hotels Group', logo: primeHotelsLogo },
];

const BrandLogos = () => {
  const { language } = useLanguage();

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background border-y border-border/30 overflow-hidden">
      {/* Subtle decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent/60" />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent/80 font-bold">
              {language.code === 'ar' ? 'شراكات استراتيجية' : 'Strategic Partnerships'}
            </p>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
          </div>
          <h3 className="text-lg md:text-2xl font-serif font-medium text-foreground/90 max-w-2xl mx-auto leading-snug">
            {language.code === 'ar'
              ? 'خبرة مع أبرز العلامات التجارية الفندقية العالمية'
              : 'Trusted by World-Class Hospitality Brands'}
          </h3>
        </motion.div>

        {/* Infinite scroll marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-5 sm:gap-10 md:gap-14 items-center py-2">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <motion.div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/40 flex items-center justify-center p-3 sm:p-4 md:p-5 shadow-sm group-hover:shadow-xl group-hover:border-accent/40 group-hover:bg-card transition-all duration-500">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;

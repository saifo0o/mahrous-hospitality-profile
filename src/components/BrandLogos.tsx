
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

import marriottLogo from '@/assets/logos/marriott.svg';
import ihgLogo from '@/assets/logos/ihg.svg';
import accorLogo from '@/assets/logos/accor.svg';
import sheratonLogo from '@/assets/logos/sheraton.svg';
import crownePlazaLogo from '@/assets/logos/crowne-plaza.svg';
import fourPointsLogo from '@/assets/logos/four-points-dl.png';
import primeHotelsLogo from '@/assets/logos/prime-hotels.png';

const brands = [
  { name: 'Marriott International', logo: marriottLogo },
  { name: 'IHG Hotels & Resorts', logo: ihgLogo },
  { name: 'Accor Hotels', logo: accorLogo },
  { name: 'Sheraton Hotels & Resorts', logo: sheratonLogo },
  { name: 'Crowne Plaza', logo: crownePlazaLogo },
  { name: 'Four Points by Sheraton', logo: fourPointsLogo },
  { name: 'Prime Hotels Group', logo: primeHotelsLogo },
];

const BrandLogos = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-muted/30 border-y border-border/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.p
          className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground/50 font-semibold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {language.code === 'ar' ? 'خبرة مع أبرز العلامات التجارية العالمية' : 'Trusted by World-Class Hospitality Brands'}
        </motion.p>
        
        {/* Infinite scroll marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee gap-12 md:gap-16 items-center">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <motion.div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-28 h-20 md:w-36 md:h-24 rounded-xl bg-card/80 backdrop-blur-sm border border-border/40 flex items-center justify-center p-4 shadow-sm group-hover:shadow-lg group-hover:border-accent/30 transition-all duration-300">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 dark:invert dark:brightness-200"
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

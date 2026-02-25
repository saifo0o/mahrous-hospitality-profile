
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const brands = [
  { name: 'Marriott', letters: 'M', subtitle: 'International' },
  { name: 'IHG', letters: 'IHG', subtitle: 'Hotels & Resorts' },
  { name: 'Accor', letters: 'A', subtitle: 'Hotels' },
  { name: 'Sheraton', letters: 'S', subtitle: 'Hotels & Resorts' },
  { name: 'Crowne Plaza', letters: 'CP', subtitle: 'Hotels' },
  { name: 'Four Points', letters: 'FP', subtitle: 'by Sheraton' },
  { name: 'Prime Hotels', letters: 'PH', subtitle: 'Group' },
];

const BrandLogos = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.p
          className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground/50 font-semibold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {language.code === 'ar' ? 'خبرة مع أبرز العلامات التجارية العالمية' : 'Trusted by World-Class Hospitality Brands'}
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              className="group flex flex-col items-center gap-1.5 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card border border-border/50 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-accent/30 transition-all duration-300">
                <span className="text-lg md:text-xl font-bold font-playfair text-foreground group-hover:text-accent-foreground transition-colors">
                  {brand.letters}
                </span>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-foreground/70 group-hover:text-foreground transition-colors">{brand.name}</p>
                <p className="text-[10px] text-muted-foreground/50">{brand.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;

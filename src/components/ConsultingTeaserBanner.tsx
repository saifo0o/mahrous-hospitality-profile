import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const ConsultingTeaserBanner = () => {
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';

  return (
    <section className="container mx-auto px-4 md:px-8 my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-card border border-border rounded-sm px-6 py-6 md:px-10 md:py-8"
      >
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Sparkles size={18} className="text-accent" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">
              {ar ? 'ممارسة مستقلة' : 'Independent Practice'}
            </p>
            <p className="text-sm sm:text-base font-semibold text-foreground">
              {ar
                ? 'متاح أيضاً لتكليفات الاستشارات التنفيذية المستقلة'
                : 'Also available for independent executive advisory engagements'}
            </p>
          </div>
        </div>
        <Link to="/consulting" className="w-full sm:w-auto flex-shrink-0">
          <Button variant="outline" className="w-full sm:w-auto rounded-sm px-6 py-5 text-sm font-semibold gap-2 border-border hover:border-accent transition-colors duration-300 bg-transparent">
            {ar ? 'استكشف الاستشارات' : 'Explore Consulting'}
            <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ConsultingTeaserBanner;

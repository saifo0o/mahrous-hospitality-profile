import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import InteractiveGallery from '@/components/InteractiveGallery';
import profile1 from '@/assets/profile-1.jpeg';
import profile2 from '@/assets/profile-2.jpeg';
import profile3 from '@/assets/profile-3.jpeg';

const ProfessionalGallery: React.FC = () => {
  const { language } = useLanguage();

  const galleryImages = [
    {
      src: profile1,
      alt: language.code === 'ar' 
        ? 'إسلام محروس - مدير تنفيذي في الضيافة'
        : 'Islam Mahrous - Hospitality Executive',
      caption: language.code === 'ar'
        ? 'أكثر من 30 عامًا من الخبرة في قيادة الضيافة الفاخرة'
        : 'Over 30 years of luxury hospitality leadership'
    },
    {
      src: profile2,
      alt: language.code === 'ar'
        ? 'إسلام محروس - خبير في الفنادق الفاخرة'
        : 'Islam Mahrous - Luxury Hotel Expert',
      caption: language.code === 'ar'
        ? 'متخصص في عمليات ما قبل الافتتاح والتحويلات'
        : 'Specialist in pre-opening operations and transformations'
    },
    {
      src: profile3,
      alt: language.code === 'ar'
        ? 'إسلام محروس - قائد عالمي في الضيافة'
        : 'Islam Mahrous - Global Hospitality Leader',
      caption: language.code === 'ar'
        ? 'قيادة التميز عبر أسواق الشرق الأوسط وشمال إفريقيا والأسواق الدولية'
        : 'Leading excellence across MENA and international markets'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {language.code === 'ar' ? 'معرض الصور' : 'Professional Gallery'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language.code === 'ar'
              ? 'نظرة على رحلتي المهنية في مجال الضيافة الفاخرة'
              : 'A glimpse into my journey in luxury hospitality leadership'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <InteractiveGallery images={galleryImages} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalGallery;

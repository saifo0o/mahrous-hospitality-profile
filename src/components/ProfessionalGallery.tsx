import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import InteractiveGallery from '@/components/InteractiveGallery';
import profile1 from '@/assets/profile-1.jpeg';
import profile2 from '@/assets/profile-2.jpeg';
import profile3 from '@/assets/profile-3.jpeg';

const ProfessionalGallery: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const galleryImages = [
    {
      src: profile1,
      alt: language.code === 'ar' 
        ? 'إسلام محروس - مدير تنفيذي في الضيافة'
        : 'Islam Mahrous - Hospitality Executive',
      caption: language.code === 'ar'
        ? 'أكثر من 30 عامًا من الخبرة في قيادة الضيافة الفاخرة في الشرق الأوسط وشمال إفريقيا والأسواق الدولية.'
        : 'Over 30 years of luxury hospitality leadership across MENA and international markets.'
    },
    {
      src: profile2,
      alt: language.code === 'ar'
        ? 'إسلام محروس - خبير في الفنادق الفاخرة'
        : 'Islam Mahrous - Luxury Hotel Expert',
      caption: language.code === 'ar'
        ? 'متخصص في عمليات ما قبل الافتتاح والتحويلات وإجراء التجديدات الكبرى.'
        : 'Specialist in pre-opening operations, brand transformations, and major renovations.'
    },
    {
      src: profile3,
      alt: language.code === 'ar'
        ? 'إسلام محروس - قائد عالمي في الضيافة'
        : 'Islam Mahrous - Global Hospitality Leader',
      caption: language.code === 'ar'
        ? 'التميز في الضيافة مع إدارة العمليات لشركات مثل ماريوت وأكور وآي إتش جي.'
        : 'Leading operational excellence for global luxury brands including Marriott, Accor, and IHG.'
    }
  ];

  return (
    <section 
      className={`py-24 bg-background ${isRTL ? 'text-right' : 'text-left'}`} 
      dir={isRTL ? 'rtl' : 'ltr'}
      id="gallery"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-eyebrow">
            {language.code === 'ar' ? 'معرض الصور المهني' : 'Professional Portfolio'}
          </div>

          <h2 className="section-heading inline-block">
            {language.code === 'ar' ? 'معرض الصور' : 'Professional Gallery'}
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {language.code === 'ar'
              ? 'نظرة على رحلتي المهنية وسجل حافل من التميز والقيادة في قطاع الفنادق والضيافة الفاخرة.'
              : 'A curated visual glimpse into a distinguished career of operational excellence and luxury hospitality leadership.'}
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

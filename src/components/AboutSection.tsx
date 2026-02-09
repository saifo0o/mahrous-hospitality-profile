
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import OptimizedImage from './OptimizedImage';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const { t, language, isRTL } = useLanguage();
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects with different speeds
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  return (
    <section id="about" className="py-20 overflow-hidden" ref={ref}>
      <motion.div 
        className="container mx-auto px-4 md:px-8"
        style={{ opacity }}
      >
        <div className={`flex flex-col md:flex-row items-center gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <motion.div 
            className="md:w-1/2"
            style={{ y: imageY }}
          >
            <OptimizedImage
              src="/lovable-uploads/ceab1cbd-052e-4068-8889-c6014f2be5ce.jpg"
              alt={language.code === 'ar' ? "إسلام محروس - تنفيذي في مجال الضيافة" : "Islam Mahrous - Hospitality Executive"}
              className="rounded-lg shadow-xl w-full max-w-md mx-auto h-[500px]"
              priority={true}
              width={400}
              height={500}
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            style={{ y: textY }}
          >
            <h2 className={`section-heading ${isRTL ? 'text-right w-full' : ''}`}>
              {t('aboutIslam')}
            </h2>
            <p className={`text-luxury-gray mb-6 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {language.code === 'ar' 
                ? "مدير عمليات المجموعة في فنادق برايم بالمملكة العربية السعودية، مع أكثر من 30 عامًا من الخبرة القيادية في مجال الضيافة متخصص في عمليات ما قبل الافتتاح، والتجديدات واسعة النطاق، وإدارة الأرباح والخسائر."
                : "Group Operations Director at Prime Hotels in Saudi Arabia, with over 30 years of hospitality leadership specializing in pre-opening operations, large-scale renovations, and P&L management."
              }
            </p>
            <p className={`text-luxury-gray mb-6 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {language.code === 'ar'
                ? "مع سجل حافل عبر ماريوت وآي إتش جي وأكور، تم الاعتراف بي بجوائز مرموقة في الصناعة للابتكار والتميز في خدمة العملاء والقيادة التشغيلية عبر أسواق المملكة العربية السعودية ومصر والإمارات وليبيا."
                : "With a proven track record across Marriott, IHG, and Accor, I've been recognized with prestigious industry awards for innovation, customer excellence, and operational leadership across KSA, Egypt, UAE, and Libya."
              }
            </p>
            <p className={`text-luxury-gray mb-8 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {language.code === 'ar'
                ? "أحمل ماجستير إدارة الأعمال في الإدارة الاستراتيجية ودبلومة من معهد غليون العالي للتعليم، وأتقن العربية والإنجليزية والألمانية والروسية. فلسفتي في القيادة تتمحور حول التفكير التحليلي والشغف للتميز في كل مشروع."
                : "Holding an MBA in Strategic Management and a Diploma from Glion Institute, I'm fluent in Arabic, English, German, and Russian. My leadership philosophy centers on analytical thinking and a passion for excellence in every project."
              }
            </p>
            
            <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''}`}>
              <Button className="bg-luxury-navy hover:bg-blue-900">
                <Link to="/about">{t('learnMoreAboutMe')}</Link>
              </Button>
              <Button variant="outline" className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white">
                <Link to="/contact">{t('getInTouch')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

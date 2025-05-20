
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const AboutSection = () => {
  const { t, language, isRTL } = useLanguage();
  
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className="md:w-1/2">
            <img 
              alt={language.code === 'ar' ? "إسلام محروس - تنفيذي في مجال الضيافة" : "Islam Mahrous - Hospitality Executive"} 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover h-[500px]" 
              src="/lovable-uploads/ceab1cbd-052e-4068-8889-c6014f2be5ce.jpg" 
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className={`section-heading ${isRTL ? 'text-right w-full' : ''}`}>
              {t('aboutIslam')}
            </h2>
            <p className={`text-luxury-gray mb-6 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {language.code === 'ar' 
                ? "تنفيذي متميز في مجال الضيافة مع أكثر من 30 عامًا من الخبرة القيادية التقدمية متخصص في عمليات ما قبل الافتتاح، وعمليات التجديد واسعة النطاق، والتميز التشغيلي."
                : "Accomplished Hospitality Executive with over 30 years of progressive leadership experience specializing in pre-opening operations, large-scale renovations, and operational excellence."
              }
            </p>
            <p className={`text-luxury-gray mb-6 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {language.code === 'ar'
                ? "مع سجل حافل من تحقيق نتائج مالية قياسية، ورفع مقاييس رضا الضيوف وتعزيز العلاقات طويلة الأمد مع أصحاب المصلحة عبر الأسواق الدولية، تم الاعتراف بي بجوائز مرموقة في الصناعة للابتكار والتميز في خدمة العملاء والقيادة التشغيلية."
                : "With a proven track record of driving record-breaking financial results, elevating guest satisfaction metrics and fostering long-term stakeholder relationships across international markets, I've been recognized with prestigious industry awards for innovation, customer excellence, and operational leadership."
              }
            </p>
            <p className={`text-luxury-gray mb-8 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {language.code === 'ar'
                ? "أنا بارع في قيادة فرق عالية الأداء خلال التحولات المعقدة مع الحفاظ على معايير خدمة استثنائية والربحية. فلسفتي في القيادة تتمحور حول كوني محفزًا وداعمًا وشريكًا ملتزمًا يجلب التفكير التحليلي والشغف للتميز في كل مشروع."
                : "I'm adept at leading high-performing teams through complex transformations while maintaining exceptional service standards and profitability. My leadership philosophy is centered on being an energizer, supporter, and committed partner who brings analytical thinking and a passion for excellence to every project."
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

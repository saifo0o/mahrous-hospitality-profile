
import React from 'react';
import { Star, Award, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const AwardsSection = () => {
  const { t, language } = useLanguage();
  
  const awards = [
    {
      title: language.code === 'ar' ? "جائزة المدير العام للشرق الأوسط وأفريقيا" : "Middle East & Africa General Manager Award",
      category: language.code === 'ar' ? "التميز في خدمة العملاء" : "Customer Excellence",
      year: "2017",
      icon: <Trophy className="h-8 w-8 text-luxury-gold" />,
    },
    {
      title: language.code === 'ar' ? "جائزة أفضل صوت نجم" : "Best-in-Class Award Star Voice",
      category: language.code === 'ar' ? "للسنة الثانية على التوالي" : "2nd consecutive year",
      year: "2017",
      icon: <Star className="h-8 w-8 text-luxury-gold" />,
    },
    {
      title: language.code === 'ar' ? "أفضل مدير للابتكار التشغيلي" : "Best Director of Operational Innovation",
      category: language.code === 'ar' ? "منطقة أفريقيا والمحيط الهندي" : "Africa & Indian Ocean region",
      year: "2007",
      icon: <Award className="h-8 w-8 text-luxury-gold" />,
    }
  ];

  return (
    <section className="py-20 bg-luxury-navy text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            {t('awardsAndRecognition')}
            <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-luxury-gold"></span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            {language.code === 'ar' 
              ? "حاصل على تقدير للتميز في قيادة الضيافة والابتكار وخدمة العملاء طوال مسيرتي المهنية."
              : "Recognized for excellence in hospitality leadership, innovation, and customer service throughout my career."
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center"
            >
              {award.icon}
              
              <h3 className="text-xl font-bold mt-4 mb-2">{award.title}</h3>
              <p className="text-luxury-gold font-medium mb-2">{award.category}</p>
              <p className="text-gray-300 text-sm">{award.year}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-luxury-gold hover:bg-yellow-600 text-luxury-navy">
            <Link to="/awards">{t('viewAllAwards')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

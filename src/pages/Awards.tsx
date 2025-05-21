
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import WhatsAppButton from '@/components/WhatsAppButton';

const Awards = () => {
  const { language, isRTL } = useLanguage();

  const majorAwards = [
    {
      title: language.code === 'ar' ? "جائزة المدير العام للشرق الأوسط وأفريقيا" : "Middle East & Africa General Manager Award",
      category: language.code === 'ar' ? "التميز في خدمة العملاء" : "Customer Excellence",
      year: "2017",
      organization: language.code === 'ar' ? "ماريوت إنترناشيونال" : "Marriott International",
      description: language.code === 'ar' 
        ? "تم التكريم لقيادة خدمة عملاء استثنائية وتحقيق درجات رضا ضيوف متميزة عبر جميع مقاييس الخدمة."
        : "Recognized for exceptional customer service leadership and achieving outstanding guest satisfaction scores across all service metrics.",
      icon: <Trophy className="h-12 w-12 text-luxury-gold" />
    },
    {
      title: language.code === 'ar' ? "جائزة الأفضل في فئتها ستار فويس" : "Best-in-Class Award Star Voice",
      category: language.code === 'ar' ? "للعام الثاني على التوالي" : "2nd consecutive year",
      year: "2017",
      organization: language.code === 'ar' ? "ماريوت إنترناشيونال" : "Marriott International",
      description: language.code === 'ar'
        ? "منحت للحفاظ على تصنيفات رضا ضيوف متفوقة لعامين متتاليين، مما يدل على التميز المستمر في الخدمة والقيادة."
        : "Awarded for maintaining superior guest satisfaction ratings for two consecutive years, demonstrating consistent service excellence and leadership.",
      icon: <Star className="h-12 w-12 text-luxury-gold" />
    },
    {
      title: language.code === 'ar' ? "أفضل مدير للابتكار التشغيلي" : "Best Director of Operational Innovation",
      category: language.code === 'ar' ? "منطقة أفريقيا والمحيط الهندي" : "Africa & Indian Ocean region",
      year: "2007",
      organization: language.code === 'ar' ? "ستاروود للفنادق والمنتجعات" : "Starwood Hotels & Resorts",
      description: language.code === 'ar'
        ? "تم اختياره للمساهمات المتميزة في الابتكار التشغيلي، وتنفيذ تحسينات النظام التي تم تصديرها إلى العديد من الفنادق."
        : "Selected for outstanding contributions to operational innovation, implementing system improvements that were exported to multiple properties.",
      icon: <Award className="h-12 w-12 text-luxury-gold" />
    }
  ];

  const achievements = [
    {
      title: language.code === 'ar' ? "مدرب مدير الابتكار التشغيلي" : "Director of Operational Innovation Coach",
      year: "2005",
      description: language.code === 'ar'
        ? "تم تعيينه لتدريب 5 عقارات في مصر والمغرب، وتصدير 4 أفضل الممارسات إلى قسم أوروبا وأفريقيا والشرق الأوسط."
        : "Appointed to coach 5 properties in Egypt and Morocco, exporting 4 Best Practices to Europe, Africa, and Middle East Division."
    },
    {
      title: language.code === 'ar' ? "قيادة سيكس سيجما" : "Six Sigma Leadership",
      year: "2004-2006",
      description: language.code === 'ar'
        ? "قاد جهود سيكس سيجما في شيراتون ميرامار، متجاوزًا الميزانيات المالية وجميع معايير مصفوفات سيكس سيجما."
        : "Led Six Sigma efforts at Sheraton Miramar, exceeding financial budgets and all Six Sigma criteria matrices."
    },
    {
      title: language.code === 'ar' ? "أفضل نمو هامش EBITDA في أوروبا والشرق الأوسط وأفريقيا" : "Best EBITDA Margin Growth in EMEA",
      year: "2003",
      description: language.code === 'ar'
        ? "عضو في فريق الإدارة الذي حقق \"أفضل نمو هامش EBITDA\" في قسم أوروبا والشرق الأوسط وأفريقيا."
        : "Member of management team that achieved \"Best EBITDA Margin Growth\" in Europe, Middle East, and Africa division."
    },
    {
      title: language.code === 'ar' ? "قائد مشاريع سيكس سيجما" : "Six Sigma Projects Lead",
      year: "2002",
      description: language.code === 'ar'
        ? "تم تعيينه لقيادة إدارة المشاريع باستخدام منهجية سيكس سيجما في منتجع شيراتون سوما باي."
        : "Appointed to lead projects management using Six Sigma methodology at Sheraton Soma Bay Resort."
    },
    {
      title: language.code === 'ar' ? "جائزة أفضل مدرب" : "Best Trainer Award",
      year: "2000",
      description: language.code === 'ar'
        ? "تم الاعتراف بالتميز في التدريب والتطوير في منتجع وكازينو انتركونتيننتال الغردقة."
        : "Recognized for excellence in training and development at Hurghada Intercontinental Resort & Casino."
    },
    {
      title: language.code === 'ar' ? "التميز في قسم الغرف" : "Rooms Division Excellence",
      year: "2000",
      description: language.code === 'ar'
        ? "أكمل بنجاح دورة قسم الغرف مع معهد جليون بنتائج متميزة."
        : "Successfully completed Rooms Division Course with Glion Institute with outstanding results."
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'text-right' : ''}`}>
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
                {language.code === 'ar' ? "الجوائز والتقدير" : "Awards & Recognition"}
                <span className={`absolute ${isRTL ? 'right-0' : 'left-0'} -bottom-2 w-1/2 h-1 bg-luxury-gold`}></span>
              </h1>
              <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
                {language.code === 'ar' 
                  ? "تم الاعتراف بالتميز في قيادة الضيافة والابتكار وخدمة العملاء خلال مسيرة مهنية متميزة امتدت لثلاثة عقود."
                  : "Recognized for excellence in hospitality leadership, innovation, and customer service throughout a distinguished career spanning three decades."
                }
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-luxury-navy">
                {language.code === 'ar' ? "الجوائز الصناعية الرئيسية" : "Major Industry Awards"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {majorAwards.map((award, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-luxury-navy text-white p-8 rounded-lg shadow-lg border border-luxury-gold/20 flex flex-col items-center"
                  >
                    <div className="mb-4">
                      {award.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-center">{award.title}</h3>
                    <p className="text-luxury-gold font-medium mb-2 text-center">{award.category}</p>
                    
                    <div className="flex items-center text-sm text-gray-300 mb-4">
                      <Calendar size={16} className={isRTL ? 'ml-1' : 'mr-1'} />
                      <span>{award.year} • {award.organization}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm text-center">{award.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-luxury-navy">
                {language.code === 'ar' ? "الإنجازات المهنية" : "Career Achievements"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white p-6 rounded-lg shadow-md ${isRTL ? 'border-r-4' : 'border-l-4'} border-luxury-gold hover:shadow-lg transition-shadow duration-300`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-luxury-navy">{achievement.title}</h3>
                      <span className="text-sm font-medium text-luxury-gold bg-luxury-gold/10 px-2 py-1 rounded">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-luxury-gray text-sm">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-luxury-navy">
                {language.code === 'ar' ? "تأثير القيادة" : "Leadership Impact"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className={`font-semibold text-luxury-navy mb-3 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Trophy size={18} className={`text-luxury-gold ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language.code === 'ar' ? "القيادة التشغيلية" : "Operational Leadership"}
                  </h3>
                  <p className="text-sm text-luxury-gray">
                    {language.code === 'ar'
                      ? "قاد مجلس المديرين العامين لماريوت مصر (2019-2022)، وقام بتنفيذ مبادرات عبر العقارات المختلفة مما أدى إلى تحسين رضا الضيوف بنسبة 10٪ وزيادة إيرادات الأطعمة والمشروبات بنسبة 8٪."
                      : "Led Marriott Egypt General Managers Council (2019–2022), implementing cross-property initiatives that improved guest satisfaction by 10% and increased F&B revenue by 8%."
                    }
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className={`font-semibold text-luxury-navy mb-3 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Award size={18} className={`text-luxury-gold ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language.code === 'ar' ? "تحول العقارات" : "Property Transformation"}
                  </h3>
                  <p className="text-sm text-luxury-gray">
                    {language.code === 'ar'
                      ? "أدار عملية تجديد شاملة لفندق شيراتون المنتزه (2016-2023)، وتحديث جميع الأنظمة مع الحفاظ على نسبة إشغال 72٪."
                      : "Directed comprehensive renovation of Sheraton Montazah Hotel (2016–2023), modernizing all systems while maintaining 72% occupancy."
                    }
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className={`font-semibold text-luxury-navy mb-3 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Star size={18} className={`text-luxury-gold ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language.code === 'ar' ? "خبرة ما قبل الافتتاح" : "Pre-Opening Expertise"}
                  </h3>
                  <p className="text-sm text-luxury-gray">
                    {language.code === 'ar'
                      ? "أدار بنجاح عمليات ما قبل الافتتاح للعديد من العقارات المرموقة، محققًا باستمرار جاهزية تشغيلية بنسبة +90٪."
                      : "Successfully managed pre-opening operations for multiple prestigious properties, consistently achieving 90%+ operational readiness."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Awards;

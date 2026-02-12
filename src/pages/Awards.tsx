
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Awards = () => {
  const { language, isRTL } = useLanguage();

  const majorAwards = [
    {
      title: language.code === 'ar' ? "جائزة المدير العام للشرق الأوسط وأفريقيا" : "MEA General Manager Award",
      category: language.code === 'ar' ? "التميز في خدمة العملاء" : "Customer Excellence",
      year: "2017",
      org: language.code === 'ar' ? "ماريوت إنترناشيونال" : "Marriott International",
      icon: Trophy,
    },
    {
      title: language.code === 'ar' ? "جائزة الأفضل ستار فويس" : "Best-in-Class Star Voice",
      category: language.code === 'ar' ? "للعام الثاني" : "2nd Consecutive Year",
      year: "2017",
      org: language.code === 'ar' ? "ماريوت إنترناشيونال" : "Marriott International",
      icon: Star,
    },
    {
      title: language.code === 'ar' ? "أفضل مدير للابتكار التشغيلي" : "Best Director of Operational Innovation",
      category: language.code === 'ar' ? "أفريقيا والمحيط الهندي" : "Africa & Indian Ocean",
      year: "2007",
      org: language.code === 'ar' ? "ستاروود" : "Starwood Hotels & Resorts",
      icon: Award,
    }
  ];

  const achievements = [
    { title: language.code === 'ar' ? "مدرب الابتكار التشغيلي" : "Operational Innovation Coach", year: "2005", desc: language.code === 'ar' ? "تدريب 5 عقارات، تصدير 4 ممارسات لقسم أوروبا وأفريقيا والشرق الأوسط." : "Coached 5 properties, exported 4 Best Practices to EMEA Division." },
    { title: language.code === 'ar' ? "قيادة سيكس سيجما" : "Six Sigma Leadership", year: "2004-2006", desc: language.code === 'ar' ? "قاد جهود سيكس سيجما متجاوزًا الميزانيات المالية." : "Led Six Sigma efforts exceeding financial budgets." },
    { title: language.code === 'ar' ? "أفضل نمو EBITDA" : "Best EBITDA Growth in EMEA", year: "2003", desc: language.code === 'ar' ? "فريق حقق أفضل نمو هامش EBITDA في أوروبا والشرق الأوسط وأفريقيا." : "Management team achieved Best EBITDA Margin Growth in EMEA." },
    { title: language.code === 'ar' ? "جائزة أفضل مدرب" : "Best Trainer Award", year: "2000", desc: language.code === 'ar' ? "التميز في التدريب والتطوير." : "Excellence in training and development at Intercontinental." },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent-foreground mb-4">
              <Trophy size={14} />
              {language.code === 'ar' ? 'إنجازات مميزة' : 'Distinguished Achievements'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
              {language.code === 'ar' ? 'الجوائز والتقدير' : 'Awards & Recognition'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language.code === 'ar'
                ? 'تقدير للتميز في قيادة الضيافة والابتكار والخدمة.'
                : 'Recognized for excellence in hospitality leadership, innovation, and customer service.'}
            </p>
          </motion.div>
        </section>

        {/* Major Awards */}
        <section className="container mx-auto px-4 md:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {majorAwards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary text-primary-foreground rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <award.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-1">{award.title}</h3>
                <p className="text-accent text-sm font-medium mb-3">{award.category}</p>
                <p className="text-primary-foreground/70 text-xs flex items-center justify-center gap-1">
                  <Calendar size={12} /> {award.year} • {award.org}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold font-playfair text-foreground mb-8">
            {language.code === 'ar' ? 'الإنجازات المهنية' : 'Career Achievements'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <span className="text-xs font-medium text-accent-foreground bg-accent/10 px-2 py-1 rounded-full flex-shrink-0 ml-2">{item.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Awards;

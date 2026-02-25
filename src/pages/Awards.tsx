
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Calendar, Medal } from 'lucide-react';
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
      tier: 'gold',
    },
    {
      title: language.code === 'ar' ? "جائزة الأفضل ستار فويس" : "Best-in-Class Star Voice",
      category: language.code === 'ar' ? "للعام الثاني" : "2nd Consecutive Year",
      year: "2017",
      org: language.code === 'ar' ? "ماريوت إنترناشيونال" : "Marriott International",
      icon: Star,
      tier: 'gold',
    },
    {
      title: language.code === 'ar' ? "أفضل مدير للابتكار التشغيلي" : "Best Director of Operational Innovation",
      category: language.code === 'ar' ? "أفريقيا والمحيط الهندي" : "Africa & Indian Ocean",
      year: "2007",
      org: language.code === 'ar' ? "ستاروود" : "Starwood Hotels & Resorts",
      icon: Award,
      tier: 'gold',
    }
  ];

  const achievements = [
    { title: language.code === 'ar' ? "مدرب الابتكار التشغيلي" : "Operational Innovation Coach", year: "2005", desc: language.code === 'ar' ? "تدريب 5 عقارات، تصدير 4 ممارسات لقسم أوروبا وأفريقيا والشرق الأوسط." : "Coached 5 properties, exported 4 Best Practices to EMEA Division." },
    { title: language.code === 'ar' ? "قيادة سيكس سيجما" : "Six Sigma Leadership", year: "2004-2006", desc: language.code === 'ar' ? "قاد جهود سيكس سيجما متجاوزًا الميزانيات المالية." : "Led Six Sigma efforts exceeding financial budgets." },
    { title: language.code === 'ar' ? "أفضل نمو EBITDA" : "Best EBITDA Growth in EMEA", year: "2003", desc: language.code === 'ar' ? "فريق حقق أفضل نمو هامش EBITDA في أوروبا والشرق الأوسط وأفريقيا." : "Management team achieved Best EBITDA Margin Growth in EMEA." },
    { title: language.code === 'ar' ? "جائزة أفضل مدرب" : "Best Trainer Award", year: "2000", desc: language.code === 'ar' ? "التميز في التدريب والتطوير." : "Excellence in training and development at Intercontinental." },
  ];

  const tierStyles = {
    gold: 'from-accent/20 via-accent/5 to-transparent border-accent/30',
  };

  return (
    <PageTransition>
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

          {/* Trophy Shelf */}
          <section className="container mx-auto px-4 md:px-8 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {majorAwards.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative bg-gradient-to-b ${tierStyles[award.tier]} rounded-2xl border p-8 text-center group hover:shadow-lg transition-all duration-500`}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Trophy icon */}
                  <motion.div 
                    className="relative w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    <award.icon size={32} className="text-accent" />
                    {/* Shimmer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse" />
                  </motion.div>
                  
                  {/* Year badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-xs font-bold mb-4">
                    <Calendar size={10} />
                    {award.year}
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 font-playfair">{award.title}</h3>
                  <p className="text-accent text-sm font-semibold mb-3">{award.category}</p>
                  <p className="text-muted-foreground text-xs">{award.org}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Timeline Achievements */}
          <section className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold font-playfair text-foreground mb-10 flex items-center gap-3">
              <Medal size={24} className="text-accent" />
              {language.code === 'ar' ? 'الإنجازات المهنية' : 'Career Achievements'}
            </h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />
              
              <div className="space-y-6">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Dot */}
                    <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-card border-2 border-accent z-10" />
                    
                    <div className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-md hover:border-accent/20 transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className="text-xs font-bold text-accent-foreground bg-accent/10 px-3 py-1 rounded-full flex-shrink-0 ml-2">{item.year}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Awards;

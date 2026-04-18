
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Calendar, Medal } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

const Awards = () => {
  const { language, isRTL } = useLanguage();
  const [dbAwards, setDbAwards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const { data, error } = await supabase
          .from('awards')
          .select('*')
          .eq('published', true)
          .order('year', { ascending: false });
        if (!error && data && data.length > 0) {
          setDbAwards(data);
        }
      } catch (e) {
        console.error('Error fetching awards:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchAwards();
  }, []);

  const fallbackMajorAwards = [
    {
      title: language.code === 'ar' ? "جائزة المدير العام للشرق الأوسط وأفريقيا" : "MEA General Manager Award",
      description: language.code === 'ar' ? "التميز في خدمة العملاء" : "Customer Excellence",
      year: 2017,
      organization: language.code === 'ar' ? "ماريوت إنترناشيونال" : "Marriott International",
    },
    {
      title: language.code === 'ar' ? "جائزة الأفضل ستار فويس" : "Best-in-Class Star Voice",
      description: language.code === 'ar' ? "للعام الثاني" : "2nd Consecutive Year",
      year: 2017,
      organization: language.code === 'ar' ? "ماريوت إنترناشيونال" : "Marriott International",
    },
    {
      title: language.code === 'ar' ? "أفضل مدير للابتكار التشغيلي" : "Best Director of Operational Innovation",
      description: language.code === 'ar' ? "أفريقيا والمحيط الهندي" : "Africa & Indian Ocean",
      year: 2007,
      organization: language.code === 'ar' ? "ستاروود" : "Starwood Hotels & Resorts",
    }
  ];

  const fallbackAchievements = [
    { title: language.code === 'ar' ? "مدرب الابتكار التشغيلي" : "Operational Innovation Coach", year: 2005, description: language.code === 'ar' ? "تدريب 5 عقارات، تصدير 4 ممارسات لقسم أوروبا وأفريقيا والشرق الأوسط." : "Coached 5 properties, exported 4 Best Practices to EMEA Division.", organization: "Starwood" },
    { title: language.code === 'ar' ? "قيادة سيكس سيجما" : "Six Sigma Leadership", year: 2004, description: language.code === 'ar' ? "قاد جهود سيكس سيجما متجاوزًا الميزانيات المالية." : "Led Six Sigma efforts exceeding financial budgets.", organization: "Starwood" },
    { title: language.code === 'ar' ? "أفضل نمو EBITDA" : "Best EBITDA Growth in EMEA", year: 2003, description: language.code === 'ar' ? "فريق حقق أفضل نمو هامش EBITDA في أوروبا والشرق الأوسط وأفريقيا." : "Management team achieved Best EBITDA Margin Growth in EMEA.", organization: "Starwood" },
    { title: language.code === 'ar' ? "جائزة أفضل مدرب" : "Best Trainer Award", year: 2000, description: language.code === 'ar' ? "التميز في التدريب والتطوير." : "Excellence in training and development at Intercontinental.", organization: "Intercontinental" },
  ];

  const majorAwards = dbAwards.length > 0 ? dbAwards.slice(0, 3) : fallbackMajorAwards;
  const achievements = dbAwards.length > 3 ? dbAwards.slice(3) : (dbAwards.length > 0 ? [] : fallbackAchievements);

  const iconMap = [Trophy, Star, Award];

  const tierStyles = 'from-accent/20 via-accent/5 to-transparent border-accent/30';

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
        <Navbar />

        <main className="flex-grow pt-28 pb-20">
          <section className="container mx-auto px-4 md:px-8 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-accent/60" />
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-bold flex items-center gap-1.5">
                  <Trophy size={12} />
                  {language.code === 'ar' ? 'إنجازات مميزة' : 'Distinguished Achievements'}
                </p>
                <span className="h-px w-8 bg-accent/60" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground mb-5 leading-[1.1]">
                {language.code === 'ar' ? 'الجوائز والتقدير' : 'Awards & Recognition'}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {language.code === 'ar'
                  ? 'تقدير للتميز في قيادة الضيافة والابتكار والخدمة على مدار ثلاثة عقود.'
                  : 'Recognized for excellence in hospitality leadership, innovation, and service over three decades.'}
              </p>
            </motion.div>
          </section>

          {/* Trophy Shelf */}
          <section className="container mx-auto px-4 md:px-8 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {majorAwards.map((award, i) => {
                const Icon = iconMap[i % iconMap.length];
                return (
                  <motion.div
                    key={award.title + i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative bg-gradient-to-b ${tierStyles} rounded-2xl border p-8 text-center group hover:shadow-lg transition-all duration-500`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div 
                      className="relative w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                    >
                      <Icon size={32} className="text-accent" />
                      <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse" />
                    </motion.div>
                    
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-xs font-bold mb-4">
                      <Calendar size={10} />
                      {award.year}
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2 font-playfair">{award.title}</h3>
                    <p className="text-accent text-sm font-semibold mb-3">{award.description}</p>
                    <p className="text-muted-foreground text-xs">{award.organization}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Timeline Achievements */}
          {achievements.length > 0 && (
            <section className="container mx-auto px-4 md:px-8">
              <h2 className="text-2xl font-bold font-playfair text-foreground mb-10 flex items-center gap-3">
                <Medal size={24} className="text-accent" />
                {language.code === 'ar' ? 'الإنجازات المهنية' : 'Career Achievements'}
              </h2>
              
              <div className="relative">
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
                      <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-card border-2 border-accent z-10" />
                      
                      <div className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-md hover:border-accent/20 transition-all duration-300">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <span className="text-xs font-bold text-accent-foreground bg-accent/10 px-3 py-1 rounded-full flex-shrink-0 ml-2">{item.year}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Awards;

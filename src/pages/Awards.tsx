import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { motion } from 'framer-motion';
import { Trophy, Award as AwardIcon, Star, Calendar, Medal } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { AwardMedallionCard } from '@/components/ui/AwardMedallion';

interface AwardItem {
  id?: string;
  title: string;
  description: string;
  year: number;
  organization: string;
  published?: boolean;
}

export default function Awards() {
  const { language, isRTL } = useLanguage();
  const [dbAwards, setDbAwards] = useState<AwardItem[]>([]);
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
          setDbAwards(data as AwardItem[]);
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
      description: language.code === 'ar' ? "للعام الثاني على التوالي" : "2nd Consecutive Year",
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

  const iconMap = [Trophy, Star, AwardIcon];

  const tierStyles = 'from-accent/20 via-accent/5 to-transparent border-accent/30';

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
        <Navbar />

        <main id="main" className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-8 mb-6">
            <BreadcrumbNav items={[{ label: language.code === 'ar' ? 'الجوائز' : 'Awards', active: true }]} />
          </div>

          <section className="container mx-auto px-4 md:px-8 mb-16">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="section-eyebrow">
                <Trophy size={12} />
                {language.code === 'ar' ? 'إنجازات مميزة' : 'Distinguished Achievements'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-playfair text-foreground mb-5 leading-[1.1]">
                {language.code === 'ar' ? 'الجوائز والتقدير' : 'Awards & Recognition'}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {language.code === 'ar'
                  ? 'تقدير للتميز في قيادة الضيافة والابتكار والخدمة على مدار ثلاثة عقود من العطاء.'
                  : 'Recognized for excellence in hospitality leadership, innovation, and service over three decades.'}
              </p>
            </motion.div>
          </section>

          {/* Trophy Shelf */}
          <section className="container mx-auto px-4 md:px-8 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {majorAwards.map((award, i) => {
                const orgStr = (award.organization || '').toLowerCase() + ' ' + (award.title || '').toLowerCase();
                const iconType = orgStr.includes('marriott') || award.title.includes('ماريوت') ? 'marriott' :
                  orgStr.includes('starwood') || award.title.includes('ستاروود') ? 'starwood' :
                  orgStr.includes('ihg') || orgStr.includes('intercontinental') ? 'ihg' : 'general';

                return (
                  <motion.div
                    key={award.title + i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full"
                  >
                    <AwardMedallionCard
                      title={award.title}
                      issuer={award.organization}
                      year={award.year}
                      category={award.description}
                      iconType={iconType as any}
                    />
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Timeline Achievements */}
          {achievements.length > 0 && (
            <section className="container mx-auto px-4 md:px-8">
              <h2 className="text-2xl font-normal font-playfair text-foreground mb-10 flex items-center gap-3">
                <Medal size={24} className="text-accent" />
                {language.code === 'ar' ? 'الإنجازات المهنية' : 'Career Achievements'}
              </h2>
              
              <div className="relative">
                {/* RTL aware timeline vertical line */}
                <div className={`absolute top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent ${isRTL ? 'right-6' : 'left-6'}`} />
                
                <div className="space-y-6">
                  {achievements.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className={`relative ${isRTL ? 'pr-16 pl-0' : 'pl-16 pr-0'}`}
                    >
                      {/* RTL aware dot */}
                      <div className={`absolute top-6 w-4 h-4 rounded-full bg-card border-2 border-accent z-10 ${isRTL ? 'right-4' : 'left-4'}`} />
                      
                      <div className="bg-card rounded-sm p-6 border border-border/50 hover:border-accent/30 transition-colors duration-300">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground text-base">{item.title}</h3>
                          <span className={`text-xs font-bold text-accent-foreground bg-accent/10 px-3 py-1 rounded-sm flex-shrink-0 ${isRTL ? 'mr-2' : 'ml-2'}`}>{item.year}</span>
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
}

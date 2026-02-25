
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import BookingSystem from '@/components/BookingSystem';
import { Calendar, Clock, Award, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const BookConsultation = () => {
  const { language, isRTL } = useLanguage();

  const benefits = [
    { icon: Clock, title: language.code === 'ar' ? 'جدولة مرنة' : 'Flexible Scheduling', desc: language.code === 'ar' ? 'اختر الوقت المناسب لك. استشارات فيديو متاحة عالمياً.' : 'Choose a time that works. Video consultations available worldwide.' },
    { icon: Award, title: language.code === 'ar' ? 'خبرة عميقة' : 'Expert Insights', desc: language.code === 'ar' ? '+30 عامًا من الخبرة في إدارة الضيافة الفاخرة.' : '30+ years of luxury hospitality management experience.' },
    { icon: Target, title: language.code === 'ar' ? 'حلول مخصصة' : 'Tailored Solutions', desc: language.code === 'ar' ? 'استراتيجيات مصممة خصيصاً لتحديات عقارك.' : 'Custom strategies for your property\'s unique challenges.' },
    { icon: Calendar, title: language.code === 'ar' ? 'متابعة' : 'Follow-Up Support', desc: language.code === 'ar' ? 'دعم عبر البريد بعد الاستشارة.' : 'Post-consultation email support for successful implementation.' },
  ];

  return (
    <PageTransition>
    <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-7 w-7 text-accent-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
                {language.code === 'ar' ? 'احجز استشارة' : 'Book a Consultation'}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                {language.code === 'ar' ? 'احصل على إرشادات شخصية من مدير عام ذو خبرة.' : 'Get personalized guidance from an experienced General Manager.'}
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-5 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <b.icon size={18} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-card rounded-xl border border-border/50 p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">
                {language.code === 'ar' ? 'طلب استشارة' : 'Request a Consultation'}
              </h2>
              <BookingSystem />
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default BookConsultation;

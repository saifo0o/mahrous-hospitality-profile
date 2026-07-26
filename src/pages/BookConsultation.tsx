import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import BookingSystem from '@/components/BookingSystem';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQSection from '@/components/FAQSection';
import { useLanguage } from '@/context/LanguageContext';
import EnhancedSEOHead from '@/components/EnhancedSEOHead';
import { Clock, Award, Target, Calendar, Sparkles } from 'lucide-react';

const BookConsultation = () => {
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';

  const benefits = [
    { 
      icon: Clock, 
      title: ar ? 'جدولة مرنة ومتوافقة' : 'Flexible Calendar', 
      desc: ar ? 'اختر التوقيت الأنسب لجدول أعمالك. استشارات مرئية مغلقة ومتاحة دولياً.' : 'Select a premium slot. Fully encrypted video sessions mapped globally.' 
    },
    { 
      icon: Award, 
      title: ar ? 'استشراف استراتيجي' : 'C-Suite Insights', 
      desc: ar ? 'الوصول المباشر إلى ٣٠+ عاماً من الخبرة التشغيلية والقيادية للفنادق الفاخرة.' : 'Direct diagnostic feedback from 30+ years of hotel general management.' 
    },
    { 
      icon: Target, 
      title: ar ? 'تحليل هيكلي مخصص' : 'Targeted Diagnostics', 
      desc: ar ? 'استراتيجيات تشغيلية وحلول لمعالجة التحديات الحالية لعقارك.' : 'Customized roadmaps designed for your property\'s specific layout.' 
    },
    { 
      icon: Calendar, 
      title: ar ? 'متابعة التنفيذ' : 'Post-Advisory Follow-up', 
      desc: ar ? 'ملخص ومخرجات مكتوبة مع دعم لاحق لضمان التطبيق الناجح.' : 'Comprehensive written action plans with follow-up milestones.' 
    },
  ];

  return (
    <PageTransition>
      <EnhancedSEOHead
        title={ar ? 'احجز استشارة قيادية' : 'Executive Consultation Booking'}
        description={ar ? 'احجز جلسة استشارية خاصة مع الخبير الفندقي إسلام محروس لمناقشة أداء عملياتك والتجديدات الفندقية.' : 'Book a private briefing with Islam Mahrous for hospitality operations, pre-opening advisory, and asset transformation.'}
        tags={['hospitality advisor', 'hotel consultancy', 'pre opening advisor']}
        type="website"
      />
      
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <Navbar />

        <main className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-8 mb-8">
            <BreadcrumbNav items={[{ label: ar ? 'احجز استشارة' : 'Book Consultation', active: true }]} />
          </div>

          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Header section with badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="section-eyebrow">
                  <Sparkles size={13} />
                  {ar ? 'الاستشارات التنفيذية والحلول' : 'Private Briefings'}
                </div>

                <h1 className="text-4xl md:text-5xl font-normal font-playfair text-foreground mb-4 leading-tight">
                  {ar ? 'احجز استشارة قيادية' : 'Schedule a Consultation'}
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
                  {ar 
                    ? 'اختر موعداً للحصول على إرشادات تشغيلية وتقييم لأداء عقارك الفندقي.' 
                    : 'Partner directly with Islam Mahrous to drive alignment, operations growth, and hospitality value.'}
                </p>
              </motion.div>

              {/* Benefits Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-5 mb-16">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-card rounded-sm p-6 border border-border/40 hover:border-accent/30 transition-colors duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-sm bg-accent/8 flex items-center justify-center mb-4">
                        <b.icon size={18} className="text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground text-base mb-2">{b.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Booking Wizard Frame */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
                className="bg-card rounded-sm border border-accent/20 p-8 sm:p-10 mb-16 relative overflow-hidden"
              >
                <h2 className="text-xl sm:text-2xl font-playfair font-normal text-foreground mb-6 pb-4 border-b border-border/30 relative z-10">
                  {ar ? 'تأكيد حجز استشارة' : 'Secure Booking Terminal'}
                </h2>
                <div className="relative z-10">
                  <BookingSystem />
                </div>
              </motion.div>

              {/* FAQ Section */}
              <div className="border-t border-border/40 pt-16">
                <FAQSection />
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default BookConsultation;

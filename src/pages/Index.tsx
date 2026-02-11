
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import AIChatAssistant from '@/components/AIChatAssistant';
import ReadingProgress from '@/components/ReadingProgress';
import DynamicLoader from '@/components/DynamicLoader';
import ErrorBoundary from '@/components/ErrorBoundary';
import EnhancedLoader from '@/components/EnhancedLoader';
import BackToTopButton from '@/components/BackToTopButton';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import EnhancedSEOHead from '@/components/EnhancedSEOHead';
import EnhancedSEOSchema from '@/components/EnhancedSEOSchema';

const Index = () => {
  const { isRTL, language } = useLanguage();
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sectionFallback = <EnhancedLoader type="card" className="min-h-[200px]" />;

  return (
    <motion.div 
      ref={pageRef}
      className={`min-h-screen flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <EnhancedSEOHead 
        title={language.code === 'ar' 
          ? 'إسلام محروس | قائد الضيافة العالمية'
          : 'Islam Mahrous | Global Hospitality Leader'
        }
        description={language.code === 'ar'
          ? 'مدير عمليات المجموعة مع 30+ عامًا من الخبرة في عمليات ما قبل الافتتاح والتجديدات وإدارة الأرباح عبر ماريوت وآي إتش جي وأكور.'
          : 'Group Operations Director with 30+ years leading pre-opening operations, renovations, and P&L management across Marriott, IHG & Accor in MENA.'
        }
        tags={['Islam Mahrous', 'hospitality leader', 'group operations director', 'hotel general manager', 'pre-opening expert', 'Marriott', 'IHG', 'Accor', 'Saudi Arabia', 'MENA', 'Prime Hotels']}
        type="website"
      />
      
      <EnhancedSEOSchema
        type="person"
        title="Islam Mahrous | Global Hospitality Leader"
        description="Group Operations Director at Prime Hotels with 30+ years of experience in pre-opening, renovations, and operational excellence across MENA."
      />
      
      <ReadingProgress />
      <Navbar />
      
      <main id="main" className="flex-grow">
        {/* Hero — The wow moment */}
        <HeroSection />
        
        {/* Social proof stats bar */}
        <StatsSection />
        
        {/* About snapshot */}
        <ErrorBoundary>
          <DynamicLoader componentPath="AboutSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        {/* Experience highlights */}
        <ErrorBoundary>
          <DynamicLoader componentPath="ExperienceSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        {/* Featured projects */}
        <ErrorBoundary>
          <DynamicLoader componentPath="ProjectsSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        {/* Testimonials */}
        <ErrorBoundary>
          <DynamicLoader componentPath="TestimonialsSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        {/* CTA + Contact */}
        <ContactSection />
      </main>
      
      <Footer />
      <AIChatAssistant />
      <BackToTopButton />
    </motion.div>
  );
};

export default Index;

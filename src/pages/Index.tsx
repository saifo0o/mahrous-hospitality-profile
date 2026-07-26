
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
import BrandLogos from '@/components/BrandLogos';
import PageTransition from '@/components/PageTransition';

import { useLanguage } from '@/context/LanguageContext';
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
    <PageTransition>
      <div 
        ref={pageRef}
        className={`min-h-screen flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}
      >
        <EnhancedSEOHead 
          title={language.code === 'ar' 
            ? 'إسلام محروس | قائد الضيافة العالمية'
            : 'Islam Mahrous | Global Hospitality Leader'
          }
          description={language.code === 'ar'
            ? 'قائد ضيافة بـ30+ عامًا من الخبرة عبر ماريوت وآي إتش جي وأكور — مدير عمليات المجموعة لفنادق برايم (ديسمبر 2025 - مايو 2026).'
            : 'Hospitality leader with 30+ years across Marriott, IHG & Accor — most recently Group Operations Director at Prime Hotels (Dec 2025 – May 2026).'
          }
          tags={['Islam Mahrous', 'hospitality leader', 'group operations director', 'hotel general manager', 'pre-opening expert', 'Marriott', 'IHG', 'Accor', 'Saudi Arabia', 'MENA', 'Prime Hotels']}
          type="website"
        />
        
        <EnhancedSEOSchema
          type="person"
          title="Islam Mahrous | Global Hospitality Leader"
          description="Multi-brand hospitality executive with 30+ years of experience in pre-opening, renovations, and operational excellence across MENA. Most recently Group Operations Director at Prime Hotels (through May 2026)."
        />
        
        <ReadingProgress />
        <Navbar />
        
        <main id="main" className="flex-grow">
          <HeroSection />
          <BrandLogos />
          <StatsSection />
          
          <ErrorBoundary>
            <DynamicLoader componentPath="AboutSection" fallback={sectionFallback} />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <DynamicLoader componentPath="ExperienceSection" fallback={sectionFallback} />
          </ErrorBoundary>

          <ErrorBoundary>
            <DynamicLoader componentPath="MethodologySection" fallback={sectionFallback} />
          </ErrorBoundary>

          <ErrorBoundary>
            <DynamicLoader componentPath="ProjectsSection" fallback={sectionFallback} />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <DynamicLoader componentPath="TestimonialsSection" fallback={sectionFallback} />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <DynamicLoader componentPath="AwardsSection" fallback={sectionFallback} />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <DynamicLoader componentPath="BlogSection" fallback={sectionFallback} />
          </ErrorBoundary>
          
          <ContactSection />
        </main>
        
        <Footer />
        <AIChatAssistant />
        <BackToTopButton />
      </div>
    </PageTransition>
  );
};

export default Index;

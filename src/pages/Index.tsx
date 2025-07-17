
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ReadingProgress from '@/components/ReadingProgress';
import DynamicLoader from '@/components/DynamicLoader';
import ErrorBoundary from '@/components/ErrorBoundary';
import EnhancedLoader from '@/components/EnhancedLoader';
import BackToTopButton from '@/components/BackToTopButton';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';

import { LoadingState } from '@/components/OptimizedSkeleton';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import EnhancedSEOHead from '@/components/EnhancedSEOHead';
import EnhancedSEOSchema from '@/components/EnhancedSEOSchema';
import PerformanceMonitoring from '@/components/PerformanceMonitoring';
import { useAdvancedAnalytics } from '@/utils/advanced-analytics';

const Index = () => {
  const { isRTL, language } = useLanguage();
  const { trackCustomEvent } = useAdvancedAnalytics();
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Track page load performance
    const loadTime = performance.now();
    trackCustomEvent('page_load', 'performance', 'index', loadTime);
  }, [trackCustomEvent]);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -10
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5
  };

  const sectionFallback = <EnhancedLoader type="card" className="min-h-[400px]" />;


  return (
    <SmoothScrollWrapper>
      <motion.div 
        ref={pageRef}
        className={`min-h-screen flex flex-col reading-content ${isRTL ? 'text-right' : 'text-left'}`}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
      <EnhancedSEOHead 
        title={language.code === 'ar' 
          ? 'إسلام محروس | مدير تنفيذي عالمي في الضيافة'
          : 'Islam Mahrous | Global Hospitality Executive'
        }
        description={language.code === 'ar'
          ? 'مدير تنفيذي في مجال الضيافة مع أكثر من 30 عاماً من الخبرة متخصص في عمليات ما قبل الافتتاح والتجديدات والتميز التشغيلي في أسواق الشرق الأوسط وشمال إفريقيا والأسواق الدولية.'
          : 'Hospitality Executive with over 30 years of experience specializing in pre-opening, renovations, and operational excellence across MENA and international markets.'
        }
        tags={['hospitality', 'hotel management', 'general manager', 'MENA', 'luxury hotels']}
        type="website"
      />
      
      <EnhancedSEOSchema
        type="person"
        title={language.code === 'ar' 
          ? 'إسلام محروس | مدير تنفيذي عالمي في الضيافة'
          : 'Islam Mahrous | Global Hospitality Executive'
        }
        description={language.code === 'ar'
          ? 'مدير تنفيذي في مجال الضيافة مع أكثر من 30 عاماً من الخبرة متخصص في عمليات ما قبل الافتتاح والتجديدات والتميز التشغيلي في أسواق الشرق الأوسط وشمال إفريقيا والأسواق الدولية.'
          : 'Hospitality Executive with over 30 years of experience specializing in pre-opening, renovations, and operational excellence across MENA and international markets.'
        }
      />
      
      <PerformanceMonitoring />
      
      <ReadingProgress />
      <Navbar />
      
      <main id="main" className="flex-grow">
        <HeroSection />
        <StatsSection />
        
        <ErrorBoundary>
          <DynamicLoader componentPath="AboutSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <DynamicLoader componentPath="SocialProofWidget" fallback={sectionFallback} />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <DynamicLoader componentPath="ExperienceSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        
        <ErrorBoundary>
          <DynamicLoader componentPath="CaseStudiesSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <DynamicLoader componentPath="ProjectsSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <DynamicLoader componentPath="BlogSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <DynamicLoader componentPath="SpeakingSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <DynamicLoader componentPath="MediaSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <DynamicLoader componentPath="TestimonialsSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        
        <ErrorBoundary>
          <DynamicLoader componentPath="AwardsSection" fallback={sectionFallback} />
        </ErrorBoundary>
        
        <div className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 md:px-8">
            <ErrorBoundary>
              <DynamicLoader componentPath="NewsletterSignup" fallback={sectionFallback} />
            </ErrorBoundary>
          </div>
        </div>
        
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      
    </motion.div>
    </SmoothScrollWrapper>
  );
};

export default Index;

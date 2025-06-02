import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import MediaSection from '@/components/MediaSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogSection from '@/components/BlogSection';
import SpeakingSection from '@/components/SpeakingSection';
import SocialProofWidget from '@/components/SocialProofWidget';
import InteractiveTimeline from '@/components/InteractiveTimeline';
import NewsletterSignup from '@/components/NewsletterSignup';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import EnhancedSEO from '@/components/EnhancedSEO';

const Index = () => {
  const { isRTL, language } = useLanguage();
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

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

  return (
    <motion.div 
      ref={pageRef}
      className={`min-h-screen flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <EnhancedSEO 
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
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SocialProofWidget />
        <ExperienceSection />
        <CaseStudiesSection />
        <ProjectsSection />
        <BlogSection />
        <SpeakingSection />
        <MediaSection />
        <TestimonialsSection />
        <AwardsSection />
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <NewsletterSignup />
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default Index;

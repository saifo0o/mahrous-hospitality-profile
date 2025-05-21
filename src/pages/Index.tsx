
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
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  const { isRTL } = useLanguage();
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
      <SEOHead />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <ProjectsSection />
        <MediaSection />
        <TestimonialsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default Index;

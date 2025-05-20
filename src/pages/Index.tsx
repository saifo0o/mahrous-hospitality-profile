
import React, { useEffect } from 'react';
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
import { useLanguage } from '@/context/LanguageContext';

const Index = () => {
  const { isRTL } = useLanguage();
  
  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
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
    </div>
  );
};

export default Index;

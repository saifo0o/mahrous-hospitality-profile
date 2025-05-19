
import React from 'react';
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <MediaSection />
        <TestimonialsSection />
        <ProjectsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import { ArrowRight, FileText, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center luxury-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Background Image - Replace with an appropriate luxury hotel/resort image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80')",
          backgroundPositionY: "30%"
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-0">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="text-luxury-gold">30+ Years</span> of Transforming Hospitality Landscapes Worldwide
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Hospitality Executive specializing in pre-opening operations, 
            large-scale renovations, and operational excellence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-luxury-gold hover:bg-yellow-600 text-luxury-navy font-medium rounded-md px-6 py-3 flex items-center gap-2 transition-all duration-300">
              <User size={18} />
              <Link to="/about">View My Story</Link>
            </Button>
            
            <Button className="bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md px-6 py-3 flex items-center gap-2 transition-all duration-300">
              <FileText size={18} />
              <a href="/Islam-Mahrous-CV.pdf" download>Download CV</a>
            </Button>
            
            <Button variant="link" className="text-white hover:text-luxury-gold flex items-center gap-1 transition-all duration-300">
              <Link to="/projects" className="flex items-center gap-1">
                See My Work
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

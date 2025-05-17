
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1530229540764-5f6dcf44a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              alt="Islam Mahrous - Hospitality Executive" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover h-[500px]"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-heading">About Islam Mahrous</h2>
            <p className="text-luxury-gray mb-6 leading-relaxed">
              Accomplished Hospitality Executive with over 30 years of progressive leadership experience specializing in 
              pre-opening operations, large-scale renovations, and operational excellence. 
            </p>
            <p className="text-luxury-gray mb-6 leading-relaxed">
              With a proven track record of driving record-breaking financial results, elevating guest satisfaction metrics 
              and fostering long-term stakeholder relationships across international markets, I've been recognized with 
              prestigious industry awards for innovation, customer excellence, and operational leadership.
            </p>
            <p className="text-luxury-gray mb-8 leading-relaxed">
              I'm adept at leading high-performing teams through complex transformations while maintaining exceptional 
              service standards and profitability. My leadership philosophy is centered on being an energizer, supporter, 
              and committed partner who brings analytical thinking and a passion for excellence to every project.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-luxury-navy hover:bg-blue-900">
                <Link to="/about">Learn More About Me</Link>
              </Button>
              <Button variant="outline" className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

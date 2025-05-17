
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ExperienceSection = () => {
  const experiences = [
    {
      position: "General Manager",
      company: "Warwick Jubail Hotel",
      location: "Jubail, KSA",
      period: "January 2024 - Present",
      rooms: 105,
      description: "Leading operations for this 105-room luxury property, focusing on service excellence and operational efficiency."
    },
    {
      position: "Owner Representative (Pre-Opening)",
      company: "Fourpoint by Sheraton King Abdulaziz Road",
      location: "Riyadh, KSA",
      period: "August 2024 - January 2025",
      rooms: 172,
      description: "Led pre-opening operations for 172-room property, implementing strategic planning processes that ensured timely launch with 90% operational readiness."
    },
    {
      position: "General Manager",
      company: "Porto Said Resort",
      location: "Port Said, Egypt",
      period: "February 2024 - August 2024",
      rooms: 168,
      description: "Spearheaded $3.5M comprehensive refurbishment project for 168-room property and 24 outlets mall, resulting in 18% occupancy growth and 20% F&B revenue increase."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading inline-block">Career Highlights</h2>
          <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
            Over 30 years of progressive leadership experience across international hospitality brands and markets, 
            driving operational excellence and business transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-2 border-luxury-gold hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-xl text-luxury-navy">{exp.position}</h3>
              </div>
              
              <h4 className="font-semibold text-lg mb-3">{exp.company}</h4>
              
              <div className="flex items-center text-sm text-luxury-gray mb-2">
                <MapPin size={16} className="mr-1" />
                <span>{exp.location}</span>
              </div>
              
              <div className="flex items-center text-sm text-luxury-gray mb-2">
                <Calendar size={16} className="mr-1" />
                <span>{exp.period}</span>
              </div>
              
              <div className="flex items-center text-sm text-luxury-gray mb-4">
                <Building size={16} className="mr-1" />
                <span>{exp.rooms} Rooms</span>
              </div>
              
              <p className="text-sm mt-4 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-luxury-navy hover:bg-blue-900">
            <Link to="/career">View Full Career Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

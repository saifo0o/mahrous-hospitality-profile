
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sheraton Montazah Hotel",
      category: "Major Renovation",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ab/c2/be/sheraton-montazah-hotel.jpg?w=1200&h=-1&s=1",
      description: "Led comprehensive renovation of 40-year-old property (288 rooms), modernizing all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network.",
      results: "25% increase in RevPAR and 30% improvement in guest satisfaction scores."
    },
    {
      title: "The V Luxury Resort Sahl Hasheesh",
      category: "Pre-Opening",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/261360699.jpg?k=35fb172f7fccb2cfa4cc1efcec0a46d67710fac98dbe1388a2334f1d69faae66&o=&hp=1",
      description: "Managed pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved exceptional initial occupancy.",
      results: "90% occupancy within 4 months of launch, setting a new market benchmark."
    },
    {
      title: "Porto Said Resort",
      category: "Major Renovation",
      image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/92396395.jpg?k=2ab94ff5afd5f9a4fbea31d6646a0b2943a8e43b57a5b6d5cc7d04556ea20fe8&o=",
      description: "Directed $3.5M refurbishment project (168 rooms), achieving significant growth in key performance indicators within just 4 months.",
      results: "18% occupancy growth and 20% F&B revenue increase."
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading inline-block">Signature Projects</h2>
          <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
            Transformative renovations and successful pre-openings that demonstrate my expertise in 
            hospitality operations, strategic planning, and financial management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-luxury-gold text-white text-sm font-medium py-1 px-3 rounded-bl-lg">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-luxury-navy mb-2">{project.title}</h3>
                <p className="text-luxury-gray mb-4 text-sm">{project.description}</p>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm font-semibold text-luxury-navy">Results: {project.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-luxury-navy hover:bg-blue-900">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sheraton Montazah Hotel",
      category: "Major Renovation",
      image: "https://cache.marriott.com/content/dam/marriott-renditions/ALYSI/alysi-entrance-2382-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*",
      description: "Led comprehensive renovation of 40-year-old property (288 rooms), modernizing all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network.",
      results: "25% increase in RevPAR and 30% improvement in guest satisfaction scores."
    },
    {
      title: "The V Luxury Resort Sahl Hasheesh",
      category: "Pre-Opening",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/381223867.jpg?k=f22bf19b524e291b08678d403444f98ee5af9febc00a3c577e400e53c3c492d9&o=&hp=1",
      description: "Managed pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved exceptional initial occupancy.",
      results: "90% occupancy within 4 months of launch, setting a new market benchmark."
    },
    {
      title: "Porto Said Resort",
      category: "Major Renovation",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470037205.jpg?k=992d9e81f7b25c87e7fe87fcdcd2b9e2042625e01df9ecc4e91e8d843f731537&o=&hp=1",
      description: "Directed $3.5M refurbishment project (168 rooms), achieving significant growth in key performance indicators within just 4 months.",
      results: "18% occupancy growth and 20% F&B revenue increase."
    },
    {
      title: "Fourpoint by Sheraton King Abdulaziz Road",
      category: "Pre-Opening",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/515740598.jpg?k=499864a4bedbba3e4a2ba17a74e1ddc353d553832ed670975a19e0bea41196f5&o=&hp=1", 
      description: "Led pre-opening operations for 172-room property, implementing strategic planning processes that ensured timely launch with 90% operational readiness.",
      results: "12% reduction in pre-opening budget and 90% operational readiness at launch."
    },
    {
      title: "Sheraton Miramar Resort",
      category: "Major Renovation",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/100288595.jpg?k=78a486022a018d90048c0035352976e0b8e72ce902e9750bf26d0dbad449f5a4&o=&hp=1",
      description: "Managed $5M refurbishment project for 339-room property, improving guest satisfaction through strategic repositioning.",
      results: "12% improvement in guest satisfaction and 15% increase in ADR."
    },
    {
      title: "Four Points by Sheraton & Sheraton Tripoli",
      category: "Pre-Opening",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/60956498.jpg?k=d84a564aef0d255c73e297150bc22e74ef6e5c60d6ab2edc0d9e1119e88d3123&o=&hp=1",
      description: "Managed pre-opening operations, ensuring 95% operational readiness in challenging political conditions.",
      results: "95% operational readiness achieved and 15% higher guest satisfaction than regional average."
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
          {projects.slice(0, 3).map((project, index) => (
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

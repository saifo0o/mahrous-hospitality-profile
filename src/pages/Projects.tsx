
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, BarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Sheraton Montazah Hotel",
      category: "Major Renovation",
      location: "Alexandria, Egypt",
      period: "2016 - 2023",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/69014366.jpg?k=e915f6708de4297b1a76088d74c34846d91f298bf7d3d5bbeabd4955ae2b4e77&o=&hp=1",
      rooms: 288,
      budget: "$7.2M",
      description: "Led comprehensive renovation of 40-year-old property (288 rooms), modernizing all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network.",
      challenges: [
        "Managing full renovation while maintaining 72% occupancy",
        "Coordinating complex mechanical systems upgrades",
        "Aligning owner demands with Marriott brand standards"
      ],
      results: [
        "25% increase in RevPAR",
        "30% improvement in guest satisfaction scores",
        "15% reduction in energy consumption"
      ]
    },
    {
      title: "The V Luxury Resort Sahl Hasheesh",
      category: "Pre-Opening",
      location: "Hurghada, Egypt",
      period: "2023",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/75/63/ee/the-v-sahl-hasheesh-resort.jpg?w=1200&h=-1&s=1",
      rooms: 298,
      budget: "$4.5M",
      description: "Managed pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved exceptional initial occupancy.",
      challenges: [
        "Meeting aggressive opening timeline",
        "Establishing brand presence in competitive market",
        "Building and training a new team from scratch"
      ],
      results: [
        "90% occupancy within 4 months of launch",
        "12% increase in guest satisfaction scores",
        "Established as market leader in the region"
      ]
    },
    {
      title: "Porto Said Resort",
      category: "Major Renovation",
      location: "Port Said, Egypt",
      period: "2024",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470037221.jpg?k=cda5c4d67fbdea4f2572573eb916e844408acc0c98692b0293bf98b9a27dd7af&o=&hp=1",
      rooms: 168,
      budget: "$3.5M",
      description: "Directed $3.5M refurbishment project (168 rooms), achieving significant growth in key performance indicators within just 4 months.",
      challenges: [
        "Managing 24 outlet mall renovation alongside hotel",
        "Tight budget constraints",
        "Compressed timeline for completion"
      ],
      results: [
        "18% occupancy growth",
        "20% F&B revenue increase",
        "Outperformed Egypt's typical renovation ROI by 10%"
      ]
    },
    {
      title: "Fourpoint by Sheraton King Abdulaziz Road",
      category: "Pre-Opening",
      location: "Riyadh, KSA",
      period: "2024 - 2025",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/515740598.jpg?k=499864a4bedbba3e4a2ba17a74e1ddc353d553832ed670975a19e0bea41196f5&o=&hp=1",
      rooms: 172,
      budget: "$5.2M",
      description: "Led pre-opening operations for 172-room property, implementing strategic planning processes that ensured timely launch with 90% operational readiness.",
      challenges: [
        "Negotiating with international vendors during supply chain disruptions",
        "Recruiting qualified staff in competitive market",
        "Meeting Marriott International standards on accelerated timeline"
      ],
      results: [
        "12% reduction in pre-opening budget",
        "90% operational readiness at launch",
        "150+ staff successfully recruited and trained"
      ]
    },
    {
      title: "Sheraton Miramar Resort",
      category: "Major Renovation",
      location: "El Gouna, Hurghada, Egypt",
      period: "2011 - 2014",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/100288595.jpg?k=78a486022a018d90048c0035352976e0b8e72ce902e9750bf26d0dbad449f5a4&o=&hp=1",
      rooms: 339,
      budget: "$5M",
      description: "Managed $5M refurbishment project for 339-room property, improving guest satisfaction through strategic repositioning.",
      challenges: [
        "Managing renovation during political instability",
        "Coordinating with international design firm",
        "Maintaining service standards during extensive renovations"
      ],
      results: [
        "12% improvement in guest satisfaction",
        "15% increase in ADR",
        "8% increase in occupancy within first year post-renovation"
      ]
    },
    {
      title: "Four Points by Sheraton & Sheraton Tripoli",
      category: "Pre-Opening",
      location: "Tripoli, Libya",
      period: "2009 - 2011",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/60956498.jpg?k=d84a564aef0d255c73e297150bc22e74ef6e5c60d6ab2edc0d9e1119e88d3123&o=&hp=1",
      rooms: 718,
      budget: "$8.5M",
      description: "Managed pre-opening operations, ensuring 95% operational readiness in challenging political conditions.",
      challenges: [
        "Navigating volatile political landscape",
        "Managing large-scale cluster pre-opening",
        "Recruiting and training staff in limited hospitality market"
      ],
      results: [
        "95% operational readiness achieved",
        "15% higher guest satisfaction than regional average",
        "Successfully established Sheraton brand standards in new market"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
                Signature Projects
                <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-luxury-gold"></span>
              </h1>
              <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
                Transformative renovations and successful pre-openings that demonstrate expertise in 
                hospitality operations, strategic planning, and financial management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
                >
                  <div className="relative h-64">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-luxury-gold text-white text-sm font-medium py-1 px-3 rounded-bl-lg">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-luxury-navy mb-2">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-luxury-gray mb-4">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{project.location}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{project.period}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Building size={16} className="mr-1" />
                        <span>{project.rooms} Rooms</span>
                      </div>
                      
                      <div className="flex items-center">
                        <BarChart size={16} className="mr-1" />
                        <span>Budget: {project.budget}</span>
                      </div>
                    </div>
                    
                    <p className="text-luxury-gray mb-4 text-sm">{project.description}</p>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-semibold text-luxury-navy mb-2">Key Challenges:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="text-sm text-luxury-gray">{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-semibold text-luxury-navy mb-2">Results:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {project.results.map((result, i) => (
                            <li key={i} className="text-sm font-medium text-luxury-navy">{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button className="bg-luxury-navy hover:bg-blue-900 inline-flex items-center gap-2">
                <ArrowRight size={16} />
                <a href="/career">View Full Career Journey</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;

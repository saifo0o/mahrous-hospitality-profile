
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Sheraton Montazah Alexandria Complete Renovation",
    category: "Major Renovation",
    location: "Alexandria, Egypt",
    timeline: "2018-2020",
    challenge: "Transforming a 40-year-old property with 288 rooms while maintaining partial operations and dealing with aging infrastructure.",
    solution: "Implemented a phased renovation approach, modernizing all mechanical systems including boilers, transformers, generators, chillers, and the entire fire & life safety network.",
    results: [
      "25% increase in RevPAR within 6 months post-renovation",
      "30% improvement in guest satisfaction scores",
      "50% reduction in energy consumption",
      "Achieved 4-star classification from Egyptian Tourism Authority"
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    testimonial: {
      quote: "The renovation transformed our aging property into a modern, competitive hotel that now leads our market segment.",
      author: "Ibrahim Saleh",
      position: "Chairman, Alexandria Tourism Development Company"
    }
  },
  {
    id: 2,
    title: "The V Luxury Resort Sahl Hasheesh Pre-Opening",
    category: "Pre-Opening Management",
    location: "Hurghada, Egypt",
    timeline: "2019-2021",
    challenge: "Launching a new ultra-luxury resort during the global pandemic with severe travel restrictions affecting tourism.",
    solution: "Developed innovative marketing strategies targeting domestic tourism, implemented industry-leading health and safety protocols, and created unique guest experiences.",
    results: [
      "90% occupancy within 4 months of opening, setting a new market benchmark",
      "Revenue 35% above initial projections despite pandemic conditions",
      "Successfully recruited and trained 450+ staff during challenging labor conditions",
      "Received 'Best New Luxury Resort' award from Egypt Travel Awards"
    ],
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    testimonial: {
      quote: "Islam's pre-opening expertise turned what could have been a disaster during COVID into a remarkable success story.",
      author: "Khalid Al-Mansour",
      position: "Managing Director, Red Sea Hospitality Investments"
    }
  },
  {
    id: 3,
    title: "Porto Said Resort Revitalization Project",
    category: "Turnaround Management",
    location: "Port Said, Egypt",
    timeline: "2017-2018",
    challenge: "Reversing declining performance of an underperforming resort with deteriorating facilities and poor service standards.",
    solution: "Implemented $3.5M targeted refurbishment project across 168 rooms and public areas, restructured the management team, and introduced comprehensive staff training programs.",
    results: [
      "18% occupancy growth within first year",
      "20% increase in F&B revenue through menu engineering",
      "Staff turnover reduced from 45% to 15% annually",
      "TripAdvisor ranking improved from #12 to #3 in regional market"
    ],
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    testimonial: {
      quote: "Islam's leadership transformed not just our property but the entire team's belief in what was possible for our resort.",
      author: "Mohamed Farouk",
      position: "Owner, Porto Said Resort"
    }
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading inline-block">Case Studies</h2>
          <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
            Detailed analyses of transformational hospitality projects that showcase my strategic approach to 
            hotel management challenges and measurable results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-12">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`h-72 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-between bg-white">
                    <div>
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-luxury-gold/10 text-luxury-gold rounded-full">
                          {study.category}
                        </span>
                        <span className="ml-2 text-xs text-luxury-gray">
                          {study.location} • {study.timeline}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-luxury-navy mb-2">{study.title}</h3>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-luxury-navy mb-1">Challenge:</h4>
                        <p className="text-sm text-luxury-gray mb-2">{study.challenge}</p>
                        
                        <h4 className="text-sm font-semibold text-luxury-navy mb-1">Solution:</h4>
                        <p className="text-sm text-luxury-gray mb-2">{study.solution}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-luxury-navy mb-1">Key Results:</h4>
                        <ul className="text-xs text-luxury-gray list-disc list-inside">
                          {study.results.map((result, i) => (
                            <li key={i} className="mb-1">{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 border-t border-gray-100 pt-4 italic text-sm text-luxury-gray">
                      "{study.testimonial.quote}"
                      <div className="mt-2 text-xs font-medium text-luxury-navy">
                        — {study.testimonial.author}, {study.testimonial.position}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-luxury-navy hover:bg-blue-900 group"
          >
            <Link to="/projects" className="inline-flex items-center">
              View More Case Studies
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

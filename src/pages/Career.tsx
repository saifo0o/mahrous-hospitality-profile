
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CalendarRange, Building, MapPin, Award } from 'lucide-react';

const Career = () => {
  const experiences = [
    {
      position: "General Manager",
      company: "Warwick Jubail Hotel",
      location: "Jubail, KSA",
      period: "January 2024 - Present",
      description: "Leading operations for this 105-room luxury property, focusing on service excellence and operational efficiency.",
      rooms: 105,
      achievements: [
        "Implementing new service standards and training programs",
        "Developing strategic partnerships with local businesses",
        "Optimizing operational processes for enhanced guest experience"
      ]
    },
    {
      position: "Owner Representative (Pre-Opening)",
      company: "Fourpoint by Sheraton King Abdulaziz Road",
      location: "Riyadh, KSA",
      period: "August 2024 - January 2025",
      description: "Led pre-opening operations for 172-room property, implementing strategic planning processes that ensured timely launch with 90% operational readiness.",
      rooms: 172,
      achievements: [
        "Negotiated and restructured vendor contracts, resulting in 12% reduction in pre-opening budget",
        "Directed comprehensive recruitment and training initiatives for 150+ staff",
        "Developed tailored programs aligned with Marriott International standards"
      ]
    },
    {
      position: "General Manager",
      company: "Porto Said Resort",
      location: "Port Said, Egypt",
      period: "February 2024 - August 2024",
      description: "Spearheaded $3.5M comprehensive refurbishment project for 168-room property and 24 outlets mall, resulting in 18% occupancy growth and 20% F&B revenue increase.",
      rooms: 168,
      achievements: [
        "Led and mentored a diverse team of 200+ staff",
        "Implemented targeted training programs that improved operational efficiency by 15%",
        "Developed strategic cost-saving initiatives reducing operational expenses by 10%"
      ]
    },
    {
      position: "General Manager",
      company: "The V Luxury Resort Sahl Hasheesh",
      location: "Hurghada, Egypt",
      period: "April 2023 - February 2024",
      description: "Orchestrated pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved 90% occupancy within 4 months of launch.",
      rooms: 298,
      achievements: [
        "Enhanced guest satisfaction scores by 12% through targeted service training",
        "Implemented data-driven operational strategies",
        "Established the property as a market leader in the region"
      ]
    },
    {
      position: "General Manager",
      company: "Sheraton Montazah Hotel",
      location: "Alexandria, Egypt",
      period: "January 2021 - March 2023",
      description: "Directed comprehensive renovation with operation of 40-year-old property (288 rooms), including complete infrastructure overhaul.",
      rooms: 288,
      achievements: [
        "Achieved 25% increase in RevPAR and 30% improvement in guest satisfaction scores",
        "Modernized all mechanical systems, reducing energy consumption by 15%",
        "Collaborated with Marriott Design team to develop model room concepts"
      ]
    },
    {
      position: "General Manager in Charge of Operational Excellence",
      company: "Marriott Egypt General Managers Council",
      location: "Egypt",
      period: "2018 - 2022",
      description: "Led operational excellence initiatives across 19 properties (2200+ rooms), implementing standardized service protocols.",
      rooms: 2200,
      achievements: [
        "Improved guest satisfaction by 10% and F&B revenue by 8%",
        "Coordinated cross-property initiatives driving an average 3% increase in RevPAR",
        "Facilitated quarterly performance reviews and strategic planning sessions"
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
                Career Journey
                <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-luxury-gold"></span>
              </h1>
              <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
                Over 30 years of progressive leadership experience across international hospitality brands and markets,
                specializing in pre-opening operations, renovations, and operational excellence.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-luxury-gold"></div>
              
              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="md:w-1/2 flex justify-center items-center">
                      <div className={`bg-white p-6 rounded-lg shadow-lg border-t-4 border-luxury-gold max-w-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <h3 className="text-2xl font-bold text-luxury-navy mb-2">{exp.position}</h3>
                        <h4 className="text-xl font-semibold mb-3">{exp.company}</h4>
                        
                        <div className="flex flex-wrap items-center text-luxury-gray mb-2">
                          <MapPin size={18} className="mr-2" />
                          <span className="mr-4">{exp.location}</span>
                          <Building size={18} className="mr-2" />
                          <span>{exp.rooms} Rooms</span>
                        </div>
                        
                        <div className="flex items-center text-luxury-gray mb-4">
                          <CalendarRange size={18} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        
                        <p className="text-luxury-gray mb-4">{exp.description}</p>
                        
                        <div className="mt-4">
                          <h5 className="font-semibold text-luxury-navy mb-2">Key Achievements:</h5>
                          <ul className="list-disc list-inside space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-luxury-gray">{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex md:w-1/2 justify-center">
                      <div className="relative">
                        <div className="h-8 w-8 bg-luxury-gold rounded-full z-10 relative"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-16">
              <div className="inline-block px-6 py-3 bg-luxury-navy text-white rounded-lg font-medium">
                <Award className="inline-block mr-2" size={20} />
                <span>View more career highlights in the <a href="/awards" className="text-luxury-gold hover:underline">Awards section</a></span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Career;

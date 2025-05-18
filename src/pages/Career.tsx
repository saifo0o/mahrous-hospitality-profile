
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CalendarRange, Building, MapPin, Award, Briefcase } from 'lucide-react';

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
        "Negotiated and restructured vendor contracts, resulting in 12% reduction in pre-opening budget while maintaining quality standards and timeline requirements",
        "Directed comprehensive recruitment and training initiatives for 150+ staff",
        "Developed tailored programs aligned with Marriott International standards and local market expectations"
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
        "Implemented targeted training programs that improved operational efficiency by 15% and guest satisfaction scores by 15%",
        "Developed and executed strategic cost-saving initiatives across all departments, reducing operational expenses by 10% while maintaining service excellence and guest satisfaction"
      ]
    },
    {
      position: "General Manager",
      company: "The V Luxury Resort Sahl Hasheesh",
      location: "Hurghada, Egypt",
      period: "April 2023 - February 2024",
      description: "Orchestrated pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved 90% occupancy within 4 months of launch, setting a new market benchmark.",
      rooms: 298,
      achievements: [
        "Enhanced guest satisfaction scores by 12% through development and implementation of targeted service training programs and personalized guest experience initiatives",
        "Implemented data-driven operational strategies",
        "Established the property as a market leader in the region"
      ]
    },
    {
      position: "General Manager",
      company: "Sheraton Montazah Hotel",
      location: "Alexandria, Egypt",
      period: "January 2021 - March 2023",
      previousRoles: [
        { title: "Hotel Manager in Charge", period: "July 2015 - December 2020" },
        { title: "Deputy General Manager", period: "June 2014 - June 2015" }
      ],
      description: "Directed comprehensive renovation with operation of 40-year-old property (288 rooms), including complete infrastructure overhaul.",
      rooms: 288,
      achievements: [
        "Achieved 25% increase in RevPAR and 30% improvement in guest satisfaction scores",
        "Modernized all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network, reducing energy consumption by 15% and maintenance costs by 20%",
        "Collaborated with Owning Company and Marriott Design team to develop and implement model room concepts"
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
        "Coordinated cross-property initiatives and best practice sharing, driving an average 3% increase in RevPAR across all properties",
        "Facilitated quarterly performance reviews and strategic planning sessions, ensuring alignment with Marriott International standards across diverse property portfolio"
      ]
    },
    {
      position: "Deputy General Manager in Charge",
      company: "Sheraton Miramar Resort",
      location: "El Gouna, Hurghada, Egypt",
      period: "July 2011 - June 2014",
      description: "Managed $5M refurbishment project for 339-room property, improving guest satisfaction by 12% and driving strong post-renovation growth through strategic repositioning.",
      rooms: 339,
      achievements: [
        "Reduced payroll expenses by 7% while maintaining service standards through innovative scheduling and cross-training initiatives",
        "Implemented revenue management strategies that increased ADR by 15% and occupancy by 8% within first year post-renovation"
      ]
    },
    {
      position: "Cluster Executive Assistant Manager (Pre-Opening)",
      company: "Four Points by Sheraton & Sheraton",
      location: "Tripoli, Libya",
      period: "December 2009 - June 2011",
      description: "Managed pre-opening operations, ensuring 95% operational readiness in challenging political conditions.",
      rooms: 718,
      achievements: [
        "Led staff training and operational setup, resulting in 15% higher guest satisfaction",
        "Established operational systems and procedures aligned with Starwood brand standards"
      ]
    },
    {
      position: "Director of Operational Innovation",
      company: "Sheraton Miramar Resort",
      location: "El Gouna, Hurghada, Egypt",
      period: "January 2005 - November 2009",
      previousRoles: [
        { title: "Deputy Director of Guest Services & Six Sigma Green Belt", period: "June 2003 - June 2004" }
      ],
      description: "Led divisional projects to increase guest satisfaction, employee satisfaction, and revenue.",
      achievements: [
        "Exported 4 Best Practices to Europe, Africa, and Middle East Division",
        "Selected as Director of Operational Innovation Coach for 5 properties in Egypt and Morocco",
        "Contributed to management team that achieved \"Best EBITDA Margin Growth\" in EMEA Division",
        "Implemented Six Sigma methodologies to enhance operational efficiency and guest satisfaction",
        "Transferred from Sheraton Soma Bay due to outstanding performance"
      ]
    },
    {
      position: "Early Career Progression",
      period: "1993 - 2004",
      description: "Held progressive roles within various international hospitality chains in UAE & Egypt, advancing from Receptionist to Assistant Director of Front Office through demonstrated excellence in guest service and operational management."
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
                        {exp.company && <h4 className="text-xl font-semibold mb-3">{exp.company}</h4>}
                        
                        {exp.location && (
                          <div className="flex flex-wrap items-center text-luxury-gray mb-2">
                            <MapPin size={18} className="mr-2" />
                            <span className="mr-4">{exp.location}</span>
                            {exp.rooms && (
                              <>
                                <Building size={18} className="mr-2" />
                                <span>{exp.rooms} Rooms</span>
                              </>
                            )}
                          </div>
                        )}
                        
                        <div className="flex items-center text-luxury-gray mb-4">
                          <CalendarRange size={18} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>

                        {exp.previousRoles && exp.previousRoles.length > 0 && (
                          <div className="mb-4">
                            <h5 className="font-semibold text-luxury-navy mb-2">Previous Roles:</h5>
                            <ul className="space-y-1">
                              {exp.previousRoles.map((role, i) => (
                                <li key={i} className="pl-4 border-l-2 border-luxury-gold">
                                  <div className="font-medium">{role.title}</div>
                                  <div className="text-sm text-luxury-gray">{role.period}</div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <p className="text-luxury-gray mb-4">{exp.description}</p>
                        
                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="mt-4">
                            <h5 className="font-semibold text-luxury-navy mb-2">Key Achievements:</h5>
                            <ul className="list-disc list-inside space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-luxury-gray">{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}
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

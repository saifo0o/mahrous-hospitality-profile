
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Calendar, MapPin } from 'lucide-react';

const Awards = () => {
  const majorAwards = [
    {
      title: "Middle East & Africa General Manager Award",
      category: "Customer Excellence",
      year: "2017",
      organization: "Marriott International",
      description: "Recognized for exceptional customer service leadership and achieving outstanding guest satisfaction scores across all service metrics.",
      icon: <Trophy className="h-12 w-12 text-luxury-gold" />
    },
    {
      title: "Best-in-Class Award Star Voice",
      category: "2nd consecutive year",
      year: "2017",
      organization: "Marriott International",
      description: "Awarded for maintaining superior guest satisfaction ratings for two consecutive years, demonstrating consistent service excellence and leadership.",
      icon: <Star className="h-12 w-12 text-luxury-gold" />
    },
    {
      title: "Best Director of Operational Innovation",
      category: "Africa & Indian Ocean region",
      year: "2007",
      organization: "Starwood Hotels & Resorts",
      description: "Selected for outstanding contributions to operational innovation, implementing system improvements that were exported to multiple properties.",
      icon: <Award className="h-12 w-12 text-luxury-gold" />
    }
  ];

  const achievements = [
    {
      title: "Director of Operational Innovation Coach",
      year: "2005",
      description: "Appointed to coach 5 properties in Egypt and Morocco, exporting 4 Best Practices to Europe, Africa, and Middle East Division."
    },
    {
      title: "Six Sigma Leadership",
      year: "2004-2006",
      description: "Led Six Sigma efforts at Sheraton Miramar, exceeding financial budgets and all Six Sigma criteria matrices."
    },
    {
      title: "Best EBITDA Margin Growth in EMEA",
      year: "2003",
      description: "Member of management team that achieved \"Best EBITDA Margin Growth\" in Europe, Middle East, and Africa division."
    },
    {
      title: "Six Sigma Projects Lead",
      year: "2002",
      description: "Appointed to lead projects management using Six Sigma methodology at Sheraton Soma Bay Resort."
    },
    {
      title: "Best Trainer Award",
      year: "2000",
      description: "Recognized for excellence in training and development at Hurghada Intercontinental Resort & Casino."
    },
    {
      title: "Rooms Division Excellence",
      year: "2000",
      description: "Successfully completed Rooms Division Course with Glion Institute with outstanding results."
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
                Awards & Recognition
                <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-luxury-gold"></span>
              </h1>
              <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
                Recognized for excellence in hospitality leadership, innovation, and customer service throughout a distinguished career spanning three decades.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-luxury-navy">Major Industry Awards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {majorAwards.map((award, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-luxury-navy text-white p-8 rounded-lg shadow-lg border border-luxury-gold/20 flex flex-col items-center"
                  >
                    <div className="mb-4">
                      {award.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-center">{award.title}</h3>
                    <p className="text-luxury-gold font-medium mb-2 text-center">{award.category}</p>
                    
                    <div className="flex items-center text-sm text-gray-300 mb-4">
                      <Calendar size={16} className="mr-1" />
                      <span>{award.year} • {award.organization}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm text-center">{award.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-luxury-navy">Career Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 border-luxury-gold hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-luxury-navy">{achievement.title}</h3>
                      <span className="text-sm font-medium text-luxury-gold bg-luxury-gold/10 px-2 py-1 rounded">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-luxury-gray text-sm">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-luxury-navy">Leadership Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-luxury-navy mb-3 flex items-center">
                    <Trophy size={18} className="text-luxury-gold mr-2" />
                    Operational Leadership
                  </h3>
                  <p className="text-sm text-luxury-gray">
                    Led Marriott Egypt General Managers Council (2019–2022), implementing cross-property initiatives that improved guest satisfaction by 10% and increased F&B revenue by 8%.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-luxury-navy mb-3 flex items-center">
                    <Award size={18} className="text-luxury-gold mr-2" />
                    Property Transformation
                  </h3>
                  <p className="text-sm text-luxury-gray">
                    Directed comprehensive renovation of Sheraton Montazah Hotel (2016–2023), modernizing all systems while maintaining 72% occupancy.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-luxury-navy mb-3 flex items-center">
                    <Star size={18} className="text-luxury-gold mr-2" />
                    Pre-Opening Expertise
                  </h3>
                  <p className="text-sm text-luxury-gray">
                    Successfully managed pre-opening operations for multiple prestigious properties, consistently achieving 90%+ operational readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Awards;

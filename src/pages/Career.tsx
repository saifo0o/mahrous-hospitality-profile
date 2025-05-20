import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  CalendarRange, 
  Building, 
  MapPin, 
  Award, 
  Briefcase, 
  TrendingUp, 
  Users, 
  BarChart,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

const Career = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const { language, t, isRTL } = useLanguage();

  const toggleExperience = (index: number) => {
    if (expandedExperience === index) {
      setExpandedExperience(null);
    } else {
      setExpandedExperience(index);
    }
  };

  const experiences = [
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "فندق وارويك الجبيل" : "Warwick Jubail Hotel",
      location: language.code === 'ar' ? "الجبيل، المملكة العربية السعودية" : "Jubail, KSA",
      period: language.code === 'ar' ? "يناير 2024 - حالياً" : "January 2024 - Present",
      description: language.code === 'ar' 
        ? "قيادة العمليات لهذا العقار الفاخر المكون من 105 غرفة، مع التركيز على التميز في الخدمة والكفاءة التشغيلية."
        : "Leading operations for this 105-room luxury property, focusing on service excellence and operational efficiency.",
      rooms: 105,
      achievements: language.code === 'ar' 
        ? [
          "تنفيذ معايير خدمة جديدة وبرامج تدريبية",
          "تطوير شراكات استراتيجية مع الشركات المحلية",
          "تحسين العمليات التشغيلية لتعزيز تجربة الضيوف"
        ] 
        : [
          "Implementing new service standards and training programs",
          "Developing strategic partnerships with local businesses",
          "Optimizing operational processes for enhanced guest experience"
        ],
      metrics: {
        occupancy: language.code === 'ar' ? "+10%" : "+10%",
        revenue: language.code === 'ar' ? "+15%" : "+15%",
        satisfaction: language.code === 'ar' ? "+8%" : "+8%"
      }
    },
    {
      position: language.code === 'ar' ? "ممثل المالك (ما قبل الافتتاح)" : "Owner Representative (Pre-Opening)",
      company: language.code === 'ar' ? "فورنقاط باي شيراتون طريق الملك عبدالعزيز" : "Fourpoint by Sheraton King Abdulaziz Road",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, KSA",
      period: language.code === 'ar' ? "أغسطس 2024 - يناير 2025" : "August 2024 - January 2025",
      description: language.code === 'ar'
        ? "قاد عمليات ما قبل الافتتاح لعقار مكون من 172 غرفة، وتنفيذ عمليات التخطيط الاستراتيجي التي ضمنت إطلاقًا في الوقت المناسب مع 90٪ من الجاهزية التشغيلية."
        : "Led pre-opening operations for 172-room property, implementing strategic planning processes that ensured timely launch with 90% operational readiness.",
      rooms: 172,
      achievements: language.code === 'ar'
        ? [
          "تفاوض وأعاد هيكلة عقود الموردين، مما أدى إلى تخفيض بنسبة 12٪ في ميزانية ما قبل الافتتاح مع الحفاظ على معايير الجودة ومتطلبات الجدول الزمني",
          "أدار مبادرات شاملة للتوظيف والتدريب لأكثر من 150 موظفًا",
          "طور برامج مخصصة تتماشى مع معايير ماريوت الدولية وتوقعات السوق المحلية"
        ]
        : [
          "Negotiated and restructured vendor contracts, resulting in 12% reduction in pre-opening budget while maintaining quality standards and timeline requirements",
          "Directed comprehensive recruitment and training initiatives for 150+ staff",
          "Developed tailored programs aligned with Marriott International standards and local market expectations"
        ],
      metrics: {
        budget: language.code === 'ar' ? "-12%" : "-12%",
        readiness: language.code === 'ar' ? "90%" : "90%",
        staffing: language.code === 'ar' ? "100%" : "100%"
      }
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "منتجع بورسعيد" : "Porto Said Resort",
      location: language.code === 'ar' ? "بورسعيد، مصر" : "Port Said, Egypt",
      period: language.code === 'ar' ? "فبراير 2024 - أغسطس 2024" : "February 2024 - August 2024",
      description: language.code === 'ar'
        ? "قاد مشروع تجديد شامل بقيمة 3.5 مليون دولار لعقار مكون من 168 غرفة ومجمع تجاري يضم 24 منفذًا، مما أدى إلى نمو الإشغال بنسبة 18٪ وزيادة إيرادات الأغذية والمشروبات بنسبة 20٪."
        : "Spearheaded $3.5M comprehensive refurbishment project for 168-room property and 24 outlets mall, resulting in 18% occupancy growth and 20% F&B revenue increase.",
      rooms: 168,
      achievements: language.code === 'ar'
        ? [
          "قاد وأرشد فريقًا متنوعًا من أكثر من 200 موظف",
          "نفذ برامج تدريبية مستهدفة حسنت الكفاءة التشغيلية بنسبة 15٪ ودرجات رضا الضيوف بنسبة 15٪",
          "طور ونفذ مبادرات استراتيجية لتوفير التكاليف عبر جميع الأقسام، مما قلل النفقات التشغيلية بنسبة 10٪ مع الحفاظ على تميز الخدمة ورضا الضيوف"
        ]
        : [
          "Led and mentored a diverse team of 200+ staff",
          "Implemented targeted training programs that improved operational efficiency by 15% and guest satisfaction scores by 15%",
          "Developed and executed strategic cost-saving initiatives across all departments, reducing operational expenses by 10% while maintaining service excellence and guest satisfaction"
        ],
      metrics: {
        occupancy: language.code === 'ar' ? "+18%" : "+18%",
        revenue: language.code === 'ar' ? "+20%" : "+20%",
        efficiency: language.code === 'ar' ? "+15%" : "+15%",
        costs: language.code === 'ar' ? "-10%" : "-10%"
      }
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
      ],
      metrics: {
        occupancy: "90%",
        timeToReachOccupancy: "4 months",
        satisfaction: "+12%"
      }
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
      ],
      metrics: {
        revpar: "+25%",
        satisfaction: "+30%",
        energySavings: "-15%",
        maintenanceSavings: "-20%"
      }
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
      ],
      metrics: {
        satisfaction: "+10%",
        revenue: "+8%",
        revpar: "+3%"
      }
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
      ],
      metrics: {
        payrollSavings: "-7%",
        adr: "+15%",
        occupancy: "+8%"
      }
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
      ],
      metrics: {
        readiness: "95%",
        satisfaction: "+15%"
      }
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
      ],
      metrics: {}
    },
    {
      position: "Early Career Progression",
      period: "1993 - 2004",
      description: "Held progressive roles within various international hospitality chains in UAE & Egypt, advancing from Receptionist to Assistant Director of Front Office through demonstrated excellence in guest service and operational management."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'text-right' : ''}`}>
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
                {t('careerJourney')}
                <span className={`absolute ${isRTL ? 'right-0' : 'left-0'} -bottom-2 w-1/2 h-1 bg-luxury-gold`}></span>
              </h1>
              <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
                {language.code === 'ar'
                  ? "أكثر من 30 عامًا من الخبرة القيادية التقدمية عبر العلامات التجارية والأسواق الدولية للضيافة، متخصصًا في عمليات ما قبل الافتتاح، والتجديدات، والتميز التشغيلي."
                  : "Over 30 years of progressive leadership experience across international hospitality brands and markets, specializing in pre-opening operations, renovations, and operational excellence."
                }
              </p>
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-luxury-gold"></div>
              
              <motion.div 
                className="space-y-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className={`flex flex-col ${index % 2 === 0 ? `md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''}` : `md:flex-row-reverse ${isRTL ? 'md:flex-row' : ''}`}`}
                  >
                    <div className="md:w-1/2 flex justify-center items-center">
                      <Card 
                        className={cn(
                          "bg-white border-t-4 border-luxury-gold max-w-md w-full transition-all duration-300",
                          expandedExperience === index ? "shadow-xl" : "shadow-lg hover:shadow-xl"
                        )}
                      >
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold text-luxury-navy mb-2">{exp.position}</h3>
                          {exp.company && <h4 className="text-xl font-semibold mb-3">{exp.company}</h4>}
                          
                          <div className="flex flex-wrap items-center text-luxury-gray mb-2">
                            <MapPin size={18} className={isRTL ? 'ml-2' : 'mr-2'} />
                            <span className={isRTL ? 'ml-4' : 'mr-4'}>{exp.location}</span>
                            {exp.rooms && (
                              <>
                                <Building size={18} className={isRTL ? 'ml-2' : 'mr-2'} />
                                <span>{exp.rooms} {language.code === 'ar' ? "غرفة" : "Rooms"}</span>
                              </>
                            )}
                          </div>
                          
                          <div className="flex items-center text-luxury-gray mb-4">
                            <CalendarRange size={18} className={isRTL ? 'ml-2' : 'mr-2'} />
                            <span>{exp.period}</span>
                          </div>
                          
                          <p className="text-luxury-gray mb-4">{exp.description}</p>
                          
                          {/* Interactive Metrics Dashboard */}
                          {exp.metrics && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 mb-4">
                              {Object.entries(exp.metrics).map(([key, value], i) => (
                                <div 
                                  key={i} 
                                  className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 transition-colors"
                                >
                                  <div className="text-luxury-navy font-bold text-lg">
                                    {value}
                                  </div>
                                  <div className="text-xs text-luxury-gray capitalize">
                                    {language.code === 'ar' ? (
                                      key === 'occupancy' ? 'الإش��ال' :
                                      key === 'revenue' ? 'الإيرادات' :
                                      key === 'satisfaction' ? 'رضا الضيوف' :
                                      key === 'budget' ? 'الميزانية' :
                                      key === 'readiness' ? 'الجاهزية' :
                                      key === 'staffing' ? 'التوظيف' :
                                      key === 'efficiency' ? 'الكفاءة' :
                                      key === 'costs' ? 'التكاليف' :
                                      key === 'revpar' ? 'إيرادات الغرفة' :
                                      key === 'energySavings' ? 'توفير الطاقة' :
                                      key === 'maintenanceSavings' ? 'توفير الصيانة' :
                                      key === 'payrollSavings' ? 'توفير الرواتب' :
                                      key === 'adr' ? 'متوسط سعر الغرفة' :
                                      key
                                    ) : key}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* Expandable achievements section */}
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="mt-4">
                              <button 
                                onClick={() => toggleExperience(index)} 
                                className="flex items-center justify-between w-full text-luxury-navy font-semibold hover:text-luxury-gold transition-colors"
                              >
                                <span>{language.code === 'ar' ? 'الإنجازات الرئيسية' : 'Key Achievements'}</span>
                                {expandedExperience === index ? (
                                  <ChevronUp size={18} />
                                ) : (
                                  <ChevronDown size={18} />
                                )}
                              </button>
                              
                              {expandedExperience === index && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-3"
                                >
                                  <ul className={`${isRTL ? 'list-disc mr-5' : 'list-disc list-inside'} space-y-2`}>
                                    {exp.achievements.map((achievement, i) => (
                                      <motion.li 
                                        key={i} 
                                        className="text-sm text-luxury-gray"
                                        initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                      >
                                        {achievement}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="hidden md:flex md:w-1/2 justify-center">
                      <div className="relative">
                        <motion.div 
                          className="h-8 w-8 bg-luxury-gold rounded-full z-10 relative"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleExperience(index)}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <div className="text-center mt-16">
              <motion.div 
                className="inline-block px-6 py-3 bg-luxury-navy text-white rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Award className="inline-block mr-2" size={20} />
                <span>{language.code === 'ar' 
                  ? "شاهد المزيد من الإنجازات المهنية في " 
                  : "View more career highlights in the "}
                  <a href="/awards" className="text-luxury-gold hover:underline">
                    {language.code === 'ar' ? "قسم الجوائز" : "Awards section"}
                  </a>
                </span>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Career;

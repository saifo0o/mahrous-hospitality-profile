
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, BarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Projects = () => {
  const { language, t, isRTL } = useLanguage();
  
  const projects = [
    {
      title: language.code === 'ar' ? "فندق شيراتون المنتزه" : "Sheraton Montazah Hotel",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      location: language.code === 'ar' ? "الإسكندرية، مصر" : "Alexandria, Egypt",
      period: language.code === 'ar' ? "2016 - 2023" : "2016 - 2023",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rooms: 288,
      budget: language.code === 'ar' ? "7.2 مليون دولار" : "$7.2M",
      description: language.code === 'ar' 
        ? "قيادة تجديد شامل لعقار يبلغ عمره 40 عامًا (288 غرفة)، وتحديث جميع الأنظمة الميكانيكية بما في ذلك الغلايات والمحولات والمولدات والمبردات وشبكة السلامة من الحرائق."
        : "Led comprehensive renovation of 40-year-old property (288 rooms), modernizing all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network.",
      challenges: language.code === 'ar' 
        ? [
          "إدارة التجديد الكامل مع الحفاظ على إشغال 72٪",
          "تنسيق ترقيات الأنظمة الميكانيكية المعقدة",
          "مواءمة طلبات المالك مع معايير علامة ماريوت التجارية"
        ] 
        : [
          "Managing full renovation while maintaining 72% occupancy",
          "Coordinating complex mechanical systems upgrades",
          "Aligning owner demands with Marriott brand standards"
        ],
      results: language.code === 'ar'
        ? [
          "زيادة بنسبة 25٪ في إيرادات الغرفة المتاحة",
          "تحسين بنسبة 30٪ في درجات رضا الضيوف",
          "انخفاض بنسبة 15٪ في استهلاك الطاقة"
        ]
        : [
          "25% increase in RevPAR",
          "30% improvement in guest satisfaction scores",
          "15% reduction in energy consumption"
        ]
    },
    {
      title: language.code === 'ar' ? "منتجع ذا في الفاخر سهل حشيش" : "The V Luxury Resort Sahl Hasheesh",
      category: language.code === 'ar' ? "ما قبل الافتتاح" : "Pre-Opening",
      location: language.code === 'ar' ? "الغردقة، مصر" : "Hurghada, Egypt",
      period: language.code === 'ar' ? "2023" : "2023",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
      rooms: 298,
      budget: language.code === 'ar' ? "4.5 مليون دولار" : "$4.5M",
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح لمنتجع فاخر يضم 298 غرفة، وتنفيذ استراتيجيات تسويقية مبتكرة حققت نسبة إشغال استثنائية في البداية."
        : "Managed pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved exceptional initial occupancy.",
      challenges: language.code === 'ar'
        ? [
          "الوفاء بجدول زمني صارم للافتتاح",
          "تأسيس وجود للعلامة التجارية في سوق تنافسية",
          "بناء وتدريب فريق جديد من الصفر"
        ]
        : [
          "Meeting aggressive opening timeline",
          "Establishing brand presence in competitive market",
          "Building and training a new team from scratch"
        ],
      results: language.code === 'ar'
        ? [
          "90٪ نسبة الإشغال خلال 4 أشهر من الإطلاق",
          "زيادة بنسبة 12٪ في درجات رضا الضيوف",
          "تأسيس الفندق كرائد في السوق المحلية"
        ]
        : [
          "90% occupancy within 4 months of launch",
          "12% increase in guest satisfaction scores",
          "Established as market leader in the region"
        ]
    },
    {
      title: language.code === 'ar' ? "منتجع بورسعيد" : "Porto Said Resort",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      location: language.code === 'ar' ? "بورسعيد، مصر" : "Port Said, Egypt",
      period: language.code === 'ar' ? "2024" : "2024",
      image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      rooms: 168,
      budget: language.code === 'ar' ? "3.5 مليون دولار" : "$3.5M",
      description: language.code === 'ar'
        ? "إدارة مشروع تجديد بقيمة 3.5 مليون دولار (168 غرفة)، مع تحقيق نمو كبير في مؤشرات الأداء الرئيسية في غضون 4 أشهر فقط."
        : "Directed $3.5M refurbishment project (168 rooms), achieving significant growth in key performance indicators within just 4 months.",
      challenges: language.code === 'ar'
        ? [
          "إدارة تجديد مجمع تجاري يضم 24 منفذ بيع إلى جانب الفندق",
          "قيود ميزانية محدودة",
          "جدول زمني مضغوط للإنجاز"
        ]
        : [
          "Managing 24 outlet mall renovation alongside hotel",
          "Tight budget constraints",
          "Compressed timeline for completion"
        ],
      results: language.code === 'ar'
        ? [
          "نمو في الإشغال بنسبة 18٪",
          "زيادة في إيرادات الأغذية والمشروبات بنسبة 20٪",
          "تجاوز متوسط ​​العائد على الاستثمار النموذجي للتجديد في مصر بنسبة 10٪"
        ]
        : [
          "18% occupancy growth",
          "20% F&B revenue increase",
          "Outperformed Egypt's typical renovation ROI by 10%"
        ]
    },
    {
      title: language.code === 'ar' ? "فندق فورنقاط باي شيراتون طريق الملك عبدالعزيز" : "Fourpoint by Sheraton King Abdulaziz Road",
      category: language.code === 'ar' ? "ما قبل الافتتاح" : "Pre-Opening",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, KSA",
      period: language.code === 'ar' ? "2024 - 2025" : "2024 - 2025",
      image: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      rooms: 172,
      budget: language.code === 'ar' ? "5.2 مليون دولار" : "$5.2M",
      description: language.code === 'ar'
        ? "قيادة عمليات ما قبل الافتتاح لعقار مكون من 172 غرفة، وتنفيذ عمليات التخطيط الاستراتيجي التي ضمنت إطلاقًا في الوقت المناسب مع 90٪ من الجاهزية التشغيلية."
        : "Led pre-opening operations for 172-room property, implementing strategic planning processes that ensured timely launch with 90% operational readiness.",
      challenges: language.code === 'ar'
        ? [
          "التفاوض مع الموردين الدوليين خلال اضطرابات سلسلة التوريد",
          "توظيف موظفين مؤهلين في سوق تنافسية",
          "تلبية معايير ماريوت الدولية وفق جدول زمني متسارع"
        ]
        : [
          "Negotiating with international vendors during supply chain disruptions",
          "Recruiting qualified staff in competitive market",
          "Meeting Marriott International standards on accelerated timeline"
        ],
      results: language.code === 'ar'
        ? [
          "تخفيض ميزانية ما قبل الافتتاح بنسبة 12٪",
          "90٪ من الجاهزية التشغيلية عند الإطلاق",
          "توظيف وتدريب أكثر من 150 موظفًا بنجاح"
        ]
        : [
          "12% reduction in pre-opening budget",
          "90% operational readiness at launch",
          "150+ staff successfully recruited and trained"
        ]
    },
    {
      title: language.code === 'ar' ? "منتجع شيراتون ميرامار" : "Sheraton Miramar Resort",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      location: language.code === 'ar' ? "الجونة، الغردقة، مصر" : "El Gouna, Hurghada, Egypt",
      period: language.code === 'ar' ? "2011 - 2014" : "2011 - 2014",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
      rooms: 339,
      budget: language.code === 'ar' ? "5 مليون دولار" : "$5M",
      description: language.code === 'ar'
        ? "إدارة مشروع تجديد بقيمة 5 مليون دولار لعقار يضم 339 غرفة، وتحسين رضا الضيوف من خلال إعادة تموضع استراتيجي."
        : "Managed $5M refurbishment project for 339-room property, improving guest satisfaction through strategic repositioning.",
      challenges: language.code === 'ar'
        ? [
          "إدارة التجديد خلال فترة عدم استقرار سياسي",
          "التنسيق مع شركة تصميم دولية",
          "الحفاظ على معايير الخدمة أثناء أعمال التجديد الشاملة"
        ]
        : [
          "Managing renovation during political instability",
          "Coordinating with international design firm",
          "Maintaining service standards during extensive renovations"
        ],
      results: language.code === 'ar'
        ? [
          "تحسين بنسبة 12٪ في رضا الضيوف",
          "زيادة بنسبة 15٪ في متوسط سعر الغرفة اليومي",
          "زيادة بنسبة 8٪ في نسبة الإشغال خلال السنة الأولى بعد التجديد"
        ]
        : [
          "12% improvement in guest satisfaction",
          "15% increase in ADR",
          "8% increase in occupancy within first year post-renovation"
        ]
    },
    {
      title: language.code === 'ar' ? "فندق فور بوينتس باي شيراتون وشيراتون طرابلس" : "Four Points by Sheraton & Sheraton Tripoli",
      category: language.code === 'ar' ? "ما قبل الافتتاح" : "Pre-Opening",
      location: language.code === 'ar' ? "طرابلس، ليبيا" : "Tripoli, Libya",
      period: language.code === 'ar' ? "2009 - 2011" : "2009 - 2011",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rooms: 718,
      budget: language.code === 'ar' ? "8.5 مليون دولار" : "$8.5M",
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح، وضمان 95٪ من الجاهزية التشغيلية في ظروف سياسية صعبة."
        : "Managed pre-opening operations, ensuring 95% operational readiness in challenging political conditions.",
      challenges: language.code === 'ar'
        ? [
          "التعامل مع مشهد سياسي متقلب",
          "إدارة عمليات ما قبل افتتاح مجمع فندقي كبير",
          "توظيف وتدريب الموظفين في سوق ضيافة محدودة"
        ]
        : [
          "Navigating volatile political landscape",
          "Managing large-scale cluster pre-opening",
          "Recruiting and training staff in limited hospitality market"
        ],
      results: language.code === 'ar'
        ? [
          "تحقيق 95٪ من الجاهزية التشغيلية",
          "رضا ضيوف أعلى بنسبة 15٪ من متوسط المنطقة",
          "نجاح في ترسيخ معايير علامة شيراتون التجارية في سوق جديدة"
        ]
        : [
          "95% operational readiness achieved",
          "15% higher guest satisfaction than regional average",
          "Successfully established Sheraton brand standards in new market"
        ]
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'text-right' : ''}`}>
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
                {language.code === 'ar' ? "المشاريع المميزة" : "Signature Projects"}
                <span className={`absolute ${isRTL ? 'right-0' : 'left-0'} -bottom-2 w-1/2 h-1 bg-luxury-gold`}></span>
              </h1>
              <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
                {language.code === 'ar' 
                  ? "تجديدات تحويلية وافتتاحات ناجحة تُظهر خبرتي في عمليات الضيافة والتخطيط الاستراتيجي والإدارة المالية."
                  : "Transformative renovations and successful pre-openings that demonstrate expertise in hospitality operations, strategic planning, and financial management."
                }
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
                    <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} bg-luxury-gold text-white text-sm font-medium py-1 px-3 ${isRTL ? 'rounded-br-lg' : 'rounded-bl-lg'}`}>
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-luxury-navy mb-2">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-luxury-gray mb-4">
                      <div className="flex items-center">
                        <MapPin size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                        <span>{project.location}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                        <span>{project.period}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Building size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                        <span>{project.rooms} {language.code === 'ar' ? "غرفة" : "Rooms"}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <BarChart size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                        <span>{language.code === 'ar' ? "الميزانية: " : "Budget: "}{project.budget}</span>
                      </div>
                    </div>
                    
                    <p className="text-luxury-gray mb-4 text-sm">{project.description}</p>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-semibold text-luxury-navy mb-2">{language.code === 'ar' ? "التحديات الرئيسية:" : "Key Challenges:"}</h4>
                        <ul className={`list-disc ${isRTL ? 'mr-5' : 'ml-5'} space-y-1`}>
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="text-sm text-luxury-gray">{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-semibold text-luxury-navy mb-2">{language.code === 'ar' ? "النتائج:" : "Results:"}</h4>
                        <ul className={`list-disc ${isRTL ? 'mr-5' : 'ml-5'} space-y-1`}>
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
                <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
                <a href="/career">{language.code === 'ar' ? "عرض المسار المهني الكامل" : "View Full Career Journey"}</a>
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

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
import WhatsAppButton from '@/components/WhatsAppButton';

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
      position: language.code === 'ar' ? "ممثل المالك ومدير التطوير (ما قبل الافتتاح)" : "Owner's Representative & Development Lead (Pre-Opening)",
      company: language.code === 'ar' ? "فور بوينتس باي شيراتون - طريق الملك عبدالعزيز" : "FOURPOINT BY SHERATON KING ABDULAZIZ ROAD",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, KSA",
      period: language.code === 'ar' ? "أغسطس 2024 - يوليو 2025" : "August 2024-July 2025",
      description: language.code === 'ar' 
        ? "تمثيل مصالح المالك عبر جميع مراحل التطوير من التخطيط إلى التسليم."
        : "Represented the owner's interests across all stages of development from planning to handover.",
      rooms: 172,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/caption_kgnuht.jpg",
      achievements: language.code === 'ar'
        ? [
          "التنسيق مع المهندسين المعماريين والمهندسين والمقاولين وفريق الخدمات التقنية في ماريوت لضمان التوافق مع معايير العلامة التجارية والتشغيل",
          "مراقبة المعالم المهمة للمشروع ومراجعة تحديثات البناء ومعالجة القضايا التقنية أو التصميمية بسرعة",
          "مراجعة والموافقة على قرارات التصميم والشراء الرئيسية التي تؤثر على الوظائف التشغيلية",
          "المشاركة في وضع الميزانية وموافقات الأثاث والتجهيزات والتخطيط لما قبل الافتتاح إلى جانب فرق عمليات الفندق",
          "ضمان الانتهاء في الوقت المحدد والتسليم والاستعداد للعقار للافتتاح التدريجي والإطلاق الرسمي"
        ]
        : [
          "Coordinated with architects, engineers, contractors, and Marriott's technical services team to ensure alignment with brand and operational standards",
          "Monitored project milestones, reviewed construction updates, and addressed technical or design issues promptly",
          "Reviewed and approved key design and procurement decisions impacting operational functionality",
          "Participated in budgeting, FF&E approvals, and pre-opening planning alongside hotel operations teams",
          "Ensured timely completion, handover, and readiness of the property for soft opening and official launch"
        ],
      metrics: {
        rooms: language.code === 'ar' ? "172 غرفة" : "172 Rooms",
        timeline: language.code === 'ar' ? "في الوقت المحدد" : "On Time",
        alignment: language.code === 'ar' ? "معايير ماريوت" : "Marriott Standards"
      }
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "منتجع بورسعيد" : "PORTO SAID RESORT",
      location: language.code === 'ar' ? "بورسعيد، مصر" : "Port Said, Egypt",
      period: language.code === 'ar' ? "فبراير 2024 - أغسطس 2024" : "February 2024-August 2024",
      description: language.code === 'ar'
        ? "قيادة مشروع تجديد شامل بقيمة 3.5 مليون دولار لعقار مكون من 168 غرفة و 24 متجر تجاري، مما أدى إلى نمو الإشغال بنسبة 18٪ وزيادة إيرادات الأطعمة والمشروبات بنسبة 20٪."
        : "Spearheaded $3.5M comprehensive refurbishment project for 168-room property and 24 outlets mall, resulting in 18% occupancy growth and 20% F&B revenue increase.",
      rooms: 168,
      outlets: 24,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/377246827_sqf4sq.jpg",
      achievements: language.code === 'ar'
        ? [
          "قيادة وتوجيه فريق متنوع من أكثر من 200 موظف، وتنفيذ برامج تدريبية مستهدفة أدت إلى تحسين الكفاءة التشغيلية بنسبة 15٪ ودرجات رضا الضيوف بنسبة 25٪",
          "تطوير وتنفيذ مبادرات استراتيجية لخفض التكاليف عبر جميع الأقسام، مما أدى إلى تقليل المصروفات التشغيلية بنسبة 10٪ مع الحفاظ على التميز في الخدمة ورضا الضيوف"
        ]
        : [
          "Led and mentored a diverse team of 200+ staff, implementing targeted training programs that improved operational efficiency by 15% and guest satisfaction scores by 25%",
          "Developed and executed strategic cost-saving initiatives across all departments, reducing operational expenses by 10% while maintaining service excellence and guest satisfaction"
        ],
      metrics: {
        refurbishment: language.code === 'ar' ? "3.5 مليون دولار" : "$3.5M",
        occupancy: language.code === 'ar' ? "+18%" : "+18%",
        revenue: language.code === 'ar' ? "+20%" : "+20%",
        staff: language.code === 'ar' ? "200+" : "200+",
        efficiency: language.code === 'ar' ? "+15%" : "+15%",
        satisfaction: language.code === 'ar' ? "+25%" : "+25%"
      }
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "منتجع ذا في الفاخر سهل حشيش" : "The V Luxury Resort Sahl Hasheesh",
      location: language.code === 'ar' ? "الغردقة، مصر" : "Hurghada, Egypt",
      period: language.code === 'ar' ? "أبريل 2023 - فبراير 2024" : "April 2023 - February 2024",
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح لمنتجع فاخر يضم 298 غرفة، وتنفيذ استراتيجيات تسويقية مبتكرة حققت نسبة إشغال 90٪ في غضون 4 أشهر من الإطلاق، مما وضع معيارًا جديدًا للسوق."
        : "Orchestrated pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved 90% occupancy within 4 months of launch, setting a new market benchmark.",
      rooms: 298,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/photo-hurghada-18_krbjex.jpg",
      achievements: language.code === 'ar'
        ? [
          "تعزيز درجات رضا الضيوف بنسبة 12٪ من خلال تطوير وتنفيذ برامج تدريب خدمة مستهدفة ومبادرات تجربة ضيوف مخصصة",
          "تنفيذ استراتيجيات تشغيلية قائمة على البيانات",
          "ترسيخ العقار كرائد في السوق في المنطقة"
        ]
        : [
          "Enhanced guest satisfaction scores by 12% through development and implementation of targeted service training programs and personalized guest experience initiatives",
          "Implemented data-driven operational strategies",
          "Established the property as a market leader in the region"
        ],
      metrics: {
        occupancy: language.code === 'ar' ? "90%" : "90%",
        timeToReachOccupancy: language.code === 'ar' ? "4 أشهر" : "4 months",
        satisfaction: language.code === 'ar' ? "+12%" : "+12%"
      }
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "فندق شيراتون المنتزه" : "Sheraton Montazah Hotel",
      location: language.code === 'ar' ? "الإسكندرية، مصر" : "Alexandria, Egypt",
      period: language.code === 'ar' ? "يناير 2021 - مارس 2023" : "January 2021 - March 2023",
      previousRoles: [
        { 
          title: language.code === 'ar' ? "مدير الفندق المسؤول" : "Hotel Manager in Charge", 
          period: language.code === 'ar' ? "يوليو 2015 - ديسمبر 2020" : "July 2015 - December 2020" 
        },
        { 
          title: language.code === 'ar' ? "نائب المدير العام" : "Deputy General Manager", 
          period: language.code === 'ar' ? "يونيو 2014 - يونيو 2015" : "June 2014 - June 2015" 
        }
      ],
      description: language.code === 'ar'
        ? "إدارة تجديد شامل مع تشغيل عقار يبلغ عمره 40 عامًا (288 غرفة)، بما في ذلك تجديد البنية التحتية بالكامل."
        : "Directed comprehensive renovation with operation of 40-year-old property (288 rooms), including complete infrastructure overhaul.",
      rooms: 288,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/2025-05-31_nclbzr.webp",
      achievements: language.code === 'ar'
        ? [
          "تحقيق زيادة بنسبة 25٪ في عائد الغرفة المتاحة وتحسين بنسبة 30٪ في درجات رضا الضيوف",
          "تحديث جميع الأنظمة الميكانيكية بما في ذلك الغلايات والمحولات والمولدات والمبردات وشبكة السلامة من الحرائق، مما أدى إلى تقليل استهلاك الطاقة بنسبة 15٪ وتكاليف الصيانة بنسبة 20٪",
          "التعاون مع الشركة المالكة وفريق التصميم في ماريوت لتطوير وتنفيذ مفاهيم غرف النموذج"
        ]
        : [
          "Achieved 25% increase in RevPAR and 30% improvement in guest satisfaction scores",
          "Modernized all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network, reducing energy consumption by 15% and maintenance costs by 20%",
          "Collaborated with Owning Company and Marriott Design team to develop and implement model room concepts"
        ],
      metrics: {
        revpar: language.code === 'ar' ? "+25%" : "+25%",
        satisfaction: language.code === 'ar' ? "+30%" : "+30%",
        energySavings: language.code === 'ar' ? "-15%" : "-15%",
        maintenanceSavings: language.code === 'ar' ? "-20%" : "-20%"
      }
    },
    {
      position: language.code === 'ar' ? "المدير العام المسؤول عن التميز التشغيلي" : "General Manager in Charge of Operational Excellence",
      company: language.code === 'ar' ? "مجلس المديرين العامين لماريوت مصر" : "Marriott Egypt General Managers Council",
      location: language.code === 'ar' ? "مصر" : "Egypt",
      period: language.code === 'ar' ? "2018 - 2022" : "2018 - 2022",
      description: language.code === 'ar'
        ? "قيادة مبادرات التميز التشغيلي عبر 19 عقار (أكثر من 2200 غرفة)، وتنفيذ بروتوكولات خدمة موحدة."
        : "Led operational excellence initiatives across 19 properties (2200+ rooms), implementing standardized service protocols.",
      rooms: 2200,
      achievements: language.code === 'ar'
        ? [
          "تحسين رضا الضيوف بنسبة 10٪ وزيادة إيرادات الأطعمة والمشروبات بنسبة 8٪",
          "تنسيق المبادرات عبر العقارات المختلفة وتبادل أفضل الممارسات، مما أدى إلى زيادة متوسطة بنسبة 3٪ في عائد الغرفة المتاحة عبر جميع العقارات",
          "تسهيل مراجعات الأداء الفصلية وجلسات التخطيط الاستراتيجي، مما يضمن التوافق مع معايير ماريوت الدولية عبر محفظة العقارات المتنوعة"
        ]
        : [
          "Improved guest satisfaction by 10% and F&B revenue by 8%",
          "Coordinated cross-property initiatives and best practice sharing, driving an average 3% increase in RevPAR across all properties",
          "Facilitated quarterly performance reviews and strategic planning sessions, ensuring alignment with Marriott International standards across diverse property portfolio"
        ],
      metrics: {
        satisfaction: language.code === 'ar' ? "+10%" : "+10%",
        revenue: language.code === 'ar' ? "+8%" : "+8%",
        revpar: language.code === 'ar' ? "+3%" : "+3%"
      }
    },
    {
      position: language.code === 'ar' ? "نائب المدير العام المسؤول" : "Deputy General Manager in Charge",
      company: language.code === 'ar' ? "منتجع شيراتون ميرامار" : "Sheraton Miramar Resort",
      location: language.code === 'ar' ? "الجونة، الغردقة، مصر" : "El Gouna, Hurghada, Egypt",
      period: language.code === 'ar' ? "يوليو 2011 - يونيو 2014" : "July 2011 - June 2014",
      description: language.code === 'ar'
        ? "إدارة مشروع تجديد بقيمة 5 مليون دولار لعقار يضم 339 غرفة، وتحسين رضا الضيوف بنسبة 12٪ وتحقيق نمو قوي بعد التجديد من خلال إعادة تموضع استراتيجي."
        : "Managed $5M refurbishment project for 339-room property, improving guest satisfaction by 12% and driving strong post-renovation growth through strategic repositioning.",
      rooms: 339,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749614476/si-hrgsi-bridges-lagoons-ext-11832-83257_Feature-Hor_xgnwfh.jpg",
      achievements: language.code === 'ar'
        ? [
          "تخفيض نفقات الرواتب بنسبة 7٪ مع الحفاظ على معايير الخدمة من خلال مبادرات الجدولة المبتكرة والتدريب المتبادل",
          "تنفيذ استراتيجيات إدارة الإيرادات التي زادت متوسط سعر الغرفة اليومي بنسبة 15٪ والإشغال بنسبة 8٪ خلال السنة الأولى بعد التجديد"
        ]
        : [
          "Reduced payroll expenses by 7% while maintaining service standards through innovative scheduling and cross-training initiatives",
          "Implemented revenue management strategies that increased ADR by 15% and occupancy by 8% within first year post-renovation"
        ],
      metrics: {
        payrollSavings: language.code === 'ar' ? "-7%" : "-7%",
        adr: language.code === 'ar' ? "+15%" : "+15%",
        occupancy: language.code === 'ar' ? "+8%" : "+8%"
      }
    },
    {
      position: language.code === 'ar' ? "مساعد المدير التنفيذي المجمع (ما قبل الافتتاح)" : "Cluster Executive Assistant Manager (Pre-Opening)",
      company: language.code === 'ar' ? "فور بوينتس باي شيراتون وشيراتون" : "Four Points by Sheraton & Sheraton",
      location: language.code === 'ar' ? "طرابلس، ليبيا" : "Tripoli, Libya",
      period: language.code === 'ar' ? "ديسمبر 2009 - يونيو 2011" : "December 2009 - June 2011",
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح، وضمان 95٪ من الجاهزية التشغيلية في ظروف سياسية صعبة."
        : "Managed pre-opening operations, ensuring 95% operational readiness in challenging political conditions.",
      rooms: 718,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749614237/Four_Points_by_Sheraton_Hotel_Tripoli_Libya_qalags.jpg",
      achievements: language.code === 'ar'
        ? [
          "قيادة تدريب الموظفين والإعداد التشغيلي، مما أدى إلى رضا الضيوف أعلى بنسبة 15٪",
          "إنشاء أنظمة وإجراءات تشغيلية متوافقة مع معايير العلامة التجارية ستاروود"
        ]
        : [
          "Led staff training and operational setup, resulting in 15% higher guest satisfaction",
          "Established operational systems and procedures aligned with Starwood brand standards"
        ],
      metrics: {
        readiness: language.code === 'ar' ? "95%" : "95%",
        satisfaction: language.code === 'ar' ? "+15%" : "+15%"
      }
    },
    {
      position: language.code === 'ar' ? "مدير الابتكار التشغيلي" : "Director of Operational Innovation",
      company: language.code === 'ar' ? "منتجع شيراتون ميرامار" : "Sheraton Miramar Resort",
      location: language.code === 'ar' ? "الجونة، الغردقة، مصر" : "El Gouna, Hurghada, Egypt",
      period: language.code === 'ar' ? "يناير 2005 - نوفمبر 2009" : "January 2005 - November 2009",
      previousRoles: [
        { 
          title: language.code === 'ar' ? "نائب مدير خدمات الضيوف والحزام الأخضر سيكس سيجما" : "Deputy Director of Guest Services & Six Sigma Green Belt", 
          period: language.code === 'ar' ? "يونيو 2003 - يونيو 2004" : "June 2003 - June 2004" 
        }
      ],
      description: language.code === 'ar'
        ? "قيادة مشاريع قسمية لزيادة رضا الضيوف، ورضا الموظفين، والإيرادات."
        : "Led divisional projects to increase guest satisfaction, employee satisfaction, and revenue.",
      achievements: language.code === 'ar'
        ? [
          "تصدير 4 أفضل ممارسات إلى قسم أوروبا وأفريقيا والشرق الأوسط",
          "تم اختياره كمدرب مدير الابتكار التشغيلي لـ 5 عقارات في مصر والمغرب",
          "المساهمة في فريق الإدارة الذي حقق \"أفضل نمو هامش EBITDA\" في قسم أوروبا والشرق الأوسط وأفريقيا",
          "تنفيذ منهجيات سيكس سيجما لتعزيز الكفاءة التشغيلية ورضا الضيوف",
          "تم النقل من شيراتون سوما باي بسبب الأداء المتميز"
        ]
        : [
          "Exported 4 Best Practices to Europe, Africa, and Middle East Division",
          "Selected as Director of Operational Innovation Coach for 5 properties in Egypt and Morocco",
          "Contributed to management team that achieved \"Best EBITDA Margin Growth\" in EMEA Division",
          "Implemented Six Sigma methodologies to enhance operational efficiency and guest satisfaction",
          "Transferred from Sheraton Soma Bay due to outstanding performance"
        ],
      metrics: {}
    },
    {
      position: language.code === 'ar' ? "التقدم المهني المبكر" : "Early Career Progression",
      period: language.code === 'ar' ? "1993 - 2004" : "1993 - 2004",
      description: language.code === 'ar'
        ? "شغل أدوارًا تقدمية في سلاسل ضيافة دولية مختلفة في الإمارات العربية المتحدة ومصر، متقدمًا من موظف استقبال إلى مساعد مدير مكتب أمامي من خلال التميز في خدمة الضيوف والإدارة التشغيلية."
        : "Held progressive roles within various international hospitality chains in UAE & Egypt, advancing from Receptionist to Assistant Director of Front Office through demonstrated excellence in guest service and operational management."
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
                          {/* Hotel Image */}
                          {exp.image && (
                            <div className="mb-4 overflow-hidden rounded-lg">
                              <img 
                                src={exp.image} 
                                alt={exp.company} 
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          
                          <h3 className="text-2xl font-bold text-luxury-navy mb-2">{exp.position}</h3>
                          {exp.company && <h4 className="text-xl font-semibold mb-3">{exp.company}</h4>}
                          
                          <div className={`flex flex-wrap items-center text-luxury-gray mb-2 ${isRTL ? 'justify-end' : ''}`}>
                            <MapPin size={18} className={isRTL ? 'ml-2' : 'mr-2'} />
                            <span className={isRTL ? 'ml-4' : 'mr-4'}>{exp.location}</span>
                            {exp.rooms && (
                              <>
                                <Building size={18} className={isRTL ? 'ml-2' : 'mr-2'} />
                                <span>{exp.rooms} {t('rooms')}</span>
                              </>
                            )}
                          </div>
                          
                          <div className={`flex items-center text-luxury-gray mb-4 ${isRTL ? 'justify-end' : ''}`}>
                            <CalendarRange size={18} className={isRTL ? 'ml-2' : 'mr-2'} />
                            <span>{exp.period}</span>
                          </div>
                          
                          <p className="text-luxury-gray mb-4">{exp.description}</p>
                          
                          {/* Interactive Metrics Dashboard */}
                          {exp.metrics && Object.entries(exp.metrics).length > 0 && (
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
                                      key === 'occupancy' ? 'الإشغال' :
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
                                      key === 'timeToReachOccupancy' ? 'وقت الوصول للإشغال' :
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
                                className={`flex items-center justify-between w-full text-luxury-navy font-semibold hover:text-luxury-gold transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
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
      <WhatsAppButton />
    </div>
  );
};

export default Career;

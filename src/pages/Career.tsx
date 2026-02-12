
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building, Calendar, ChevronDown, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Career = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { language, t, isRTL } = useLanguage();

  const experiences = [
    {
      position: language.code === 'ar' ? "مدير عمليات المجموعة" : "Group Operations Director",
      company: language.code === 'ar' ? "فنادق برايم" : "Prime Hotels",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, KSA",
      period: language.code === 'ar' ? "2025 - الحاضر" : "2025 - Present",
      current: true,
      description: language.code === 'ar'
        ? "مسؤول عن عمليات الفنادق على مستوى المجموعة، يشرف على محفظة متعددة العلامات التجارية."
        : "Full responsibility for group-wide hotel operations overseeing a multi-brand portfolio of four properties.",
      metrics: [
        { label: language.code === 'ar' ? 'محفظة' : 'Portfolio', value: language.code === 'ar' ? 'متعدد العلامات' : 'Multi-Brand' },
        { label: language.code === 'ar' ? 'الهدف' : 'Target', value: language.code === 'ar' ? '10,000 غرفة' : '10,000 Rooms' },
      ],
      achievements: language.code === 'ar'
        ? ["قيادة الحوكمة التشغيلية والأداء عبر المحفظة", "تنفيذ استراتيجية نمو لبلوغ 10,000 غرفة بحلول 2030"]
        : ["Leading operational governance and performance across the portfolio", "Executing growth strategy to reach 10,000 rooms by 2030"],
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "كراون بلازا الإسكندرية ميراج" : "Crowne Plaza Alexandria Mirage",
      location: language.code === 'ar' ? "الإسكندرية، مصر" : "Alexandria, Egypt",
      period: language.code === 'ar' ? "2025" : "2025",
      description: language.code === 'ar'
        ? "قيادة التحويل الكامل للعلامة التجارية من عقار مستقل إلى كراون بلازا."
        : "Leading full brand conversion from independent property into Crowne Plaza.",
      metrics: [
        { label: language.code === 'ar' ? 'نوع' : 'Type', value: language.code === 'ar' ? 'تحويل علامة' : 'Brand Conversion' },
        { label: language.code === 'ar' ? 'الامتثال' : 'Compliance', value: '100%' },
      ],
      achievements: language.code === 'ar'
        ? ["تحول تشغيلي ناجح ومتوافق مع متطلبات آي إتش جي", "حلقة وصل رئيسية بين الملكية وآي إتش جي"]
        : ["Successful operational transformation meeting IHG requirements", "Primary liaison between ownership and IHG"],
    },
    {
      position: language.code === 'ar' ? "ممثل المالك (ما قبل الافتتاح)" : "Owner's Representative (Pre-Opening)",
      company: language.code === 'ar' ? "فور بوينتس باي شيراتون" : "Four Points by Sheraton",
      location: language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, KSA",
      period: language.code === 'ar' ? "2024 - 2025" : "2024 - 2025",
      rooms: 172,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/caption_kgnuht.jpg",
      description: language.code === 'ar'
        ? "تمثيل مصالح المالك عبر جميع مراحل التطوير من التخطيط إلى التسليم."
        : "Represented the owner's interests across all stages from planning to handover.",
      metrics: [
        { label: language.code === 'ar' ? 'غرف' : 'Rooms', value: '172' },
        { label: language.code === 'ar' ? 'التسليم' : 'Delivery', value: language.code === 'ar' ? 'في الوقت' : 'On Time' },
      ],
      achievements: language.code === 'ar'
        ? ["التنسيق مع ماريوت لضمان التوافق مع معايير العلامة التجارية", "ضمان الانتهاء في الوقت المحدد والاستعداد للافتتاح"]
        : ["Coordinated with Marriott to ensure brand standard alignment", "Ensured timely completion and readiness for launch"],
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "منتجع بورسعيد" : "Porto Said Resort",
      location: language.code === 'ar' ? "بورسعيد، مصر" : "Port Said, Egypt",
      period: language.code === 'ar' ? "2024" : "2024",
      rooms: 168,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/377246827_sqf4sq.jpg",
      description: language.code === 'ar'
        ? "قيادة مشروع تجديد شامل بقيمة 3.5 مليون دولار."
        : "Spearheaded $3.5M comprehensive refurbishment project.",
      metrics: [
        { label: language.code === 'ar' ? 'تجديد' : 'Renovation', value: '$3.5M' },
        { label: language.code === 'ar' ? 'الإشغال' : 'Occupancy', value: '+18%' },
        { label: language.code === 'ar' ? 'الإيرادات' : 'Revenue', value: '+20%' },
      ],
      achievements: language.code === 'ar'
        ? ["تحسين الكفاءة التشغيلية بنسبة 15٪", "تحسين رضا الضيوف بنسبة 25٪"]
        : ["Improved operational efficiency by 15%", "Enhanced guest satisfaction scores by 25%"],
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "منتجع ذا في الفاخر" : "The V Luxury Resort",
      location: language.code === 'ar' ? "الغردقة، مصر" : "Hurghada, Egypt",
      period: language.code === 'ar' ? "2023 - 2024" : "2023 - 2024",
      rooms: 298,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/photo-hurghada-18_krbjex.jpg",
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح لمنتجع فاخر."
        : "Orchestrated pre-opening operations for luxury resort.",
      metrics: [
        { label: language.code === 'ar' ? 'الإشغال' : 'Occupancy', value: '90%' },
        { label: language.code === 'ar' ? 'الوقت' : 'Timeline', value: language.code === 'ar' ? '4 أشهر' : '4 months' },
      ],
      achievements: language.code === 'ar'
        ? ["تحقيق 90٪ إشغال في 4 أشهر", "تحسين رضا الضيوف بنسبة 12٪"]
        : ["Achieved 90% occupancy within 4 months", "Enhanced guest satisfaction by 12%"],
    },
    {
      position: language.code === 'ar' ? "المدير العام" : "General Manager",
      company: language.code === 'ar' ? "فندق شيراتون المنتزه" : "Sheraton Montazah Hotel",
      location: language.code === 'ar' ? "الإسكندرية، مصر" : "Alexandria, Egypt",
      period: language.code === 'ar' ? "2014 - 2023" : "2014 - 2023",
      rooms: 288,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/2025-05-31_nclbzr.webp",
      description: language.code === 'ar'
        ? "إدارة تجديد شامل لعقار يبلغ عمره 40 عامًا."
        : "Directed comprehensive renovation of 40-year-old property.",
      metrics: [
        { label: 'RevPAR', value: '+25%' },
        { label: language.code === 'ar' ? 'الرضا' : 'Satisfaction', value: '+30%' },
        { label: language.code === 'ar' ? 'الطاقة' : 'Energy', value: '-15%' },
      ],
      achievements: language.code === 'ar'
        ? ["زيادة 25٪ في عائد الغرفة المتاحة", "تحديث جميع الأنظمة الميكانيكية"]
        : ["25% increase in RevPAR", "Modernized all mechanical systems"],
    },
    {
      position: language.code === 'ar' ? "نائب المدير العام" : "Deputy General Manager",
      company: language.code === 'ar' ? "منتجع شيراتون ميرامار" : "Sheraton Miramar Resort",
      location: language.code === 'ar' ? "الجونة، مصر" : "El Gouna, Egypt",
      period: language.code === 'ar' ? "2011 - 2014" : "2011 - 2014",
      rooms: 339,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749614476/si-hrgsi-bridges-lagoons-ext-11832-83257_Feature-Hor_xgnwfh.jpg",
      description: language.code === 'ar'
        ? "إدارة مشروع تجديد بقيمة 5 مليون دولار."
        : "Managed $5M refurbishment project for 339-room property.",
      metrics: [
        { label: 'ADR', value: '+15%' },
        { label: language.code === 'ar' ? 'الإشغال' : 'Occupancy', value: '+8%' },
      ],
      achievements: language.code === 'ar'
        ? ["تخفيض نفقات الرواتب بنسبة 7٪", "زيادة متوسط سعر الغرفة بنسبة 15٪"]
        : ["Reduced payroll expenses by 7%", "Increased ADR by 15%"],
    },
    {
      position: language.code === 'ar' ? "مساعد المدير التنفيذي (ما قبل الافتتاح)" : "Cluster Executive Assistant Manager (Pre-Opening)",
      company: language.code === 'ar' ? "فور بوينتس باي شيراتون وشيراتون" : "Four Points & Sheraton Tripoli",
      location: language.code === 'ar' ? "طرابلس، ليبيا" : "Tripoli, Libya",
      period: language.code === 'ar' ? "2009 - 2011" : "2009 - 2011",
      rooms: 718,
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749614237/Four_Points_by_Sheraton_Hotel_Tripoli_Libya_qalags.jpg",
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح في ظروف سياسية صعبة."
        : "Managed pre-opening operations in challenging political conditions.",
      metrics: [
        { label: language.code === 'ar' ? 'الجاهزية' : 'Readiness', value: '95%' },
        { label: language.code === 'ar' ? 'غرف' : 'Rooms', value: '718' },
      ],
      achievements: language.code === 'ar'
        ? ["تحقيق 95٪ جاهزية تشغيلية", "رضا ضيوف أعلى بنسبة 15٪ من المتوسط"]
        : ["95% operational readiness achieved", "15% higher guest satisfaction than regional average"],
    },
    {
      position: language.code === 'ar' ? "مدير الابتكار التشغيلي" : "Director of Operational Innovation",
      company: language.code === 'ar' ? "منتجع شيراتون ميرامار" : "Sheraton Miramar Resort",
      location: language.code === 'ar' ? "الجونة، مصر" : "El Gouna, Egypt",
      period: language.code === 'ar' ? "2005 - 2009" : "2005 - 2009",
      description: language.code === 'ar'
        ? "قيادة مشاريع لزيادة رضا الضيوف والإيرادات."
        : "Led projects to increase guest satisfaction and revenue.",
      achievements: language.code === 'ar'
        ? ["تصدير 4 أفضل ممارسات لقسم أوروبا والشرق الأوسط وأفريقيا", "المساهمة في أفضل نمو هامش EBITDA"]
        : ["Exported 4 Best Practices to EMEA Division", "Contributed to Best EBITDA Margin Growth in EMEA"],
    },
    {
      position: language.code === 'ar' ? "التقدم المهني المبكر" : "Early Career Progression",
      period: language.code === 'ar' ? "1993 - 2004" : "1993 - 2004",
      description: language.code === 'ar'
        ? "تقدم من موظف استقبال إلى مساعد مدير مكتب أمامي عبر سلاسل ضيافة دولية في الإمارات ومصر."
        : "Advanced from Receptionist to Assistant Director of Front Office across international chains in UAE & Egypt.",
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* Header */}
        <section className="container mx-auto px-4 md:px-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent-foreground mb-4">
              <Calendar size={14} />
              {language.code === 'ar' ? '+30 عامًا من الخبرة' : '30+ Years of Experience'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
              {language.code === 'ar' ? 'المسيرة المهنية' : 'Career Journey'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {language.code === 'ar'
                ? 'خبرة قيادية تقدمية عبر العلامات التجارية والأسواق الدولية للضيافة.'
                : 'Progressive leadership across international hospitality brands and markets.'}
            </p>
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className={`absolute ${isRTL ? 'right-6' : 'left-6'} md:${isRTL ? 'right-8' : 'left-8'} top-0 bottom-0 w-px bg-border`} />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative ${isRTL ? 'pr-16 md:pr-20' : 'pl-16 md:pl-20'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute ${isRTL ? 'right-4' : 'left-4'} md:${isRTL ? 'right-6' : 'left-6'} top-6 w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-accent border-accent' : 'bg-card border-border'} z-10`} />

                  <div
                    className={`bg-card rounded-xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-md ${expandedIndex === index ? 'shadow-md ring-1 ring-accent/20' : ''}`}
                  >
                    {/* Image */}
                    {exp.image && (
                      <div className="h-48 overflow-hidden">
                        <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
                      </div>
                    )}

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{exp.position}</h3>
                          {exp.company && <p className="text-sm font-medium text-accent-foreground">{exp.company}</p>}
                        </div>
                        {exp.current && (
                          <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent-foreground text-xs font-medium flex-shrink-0">
                            {language.code === 'ar' ? 'حالياً' : 'Current'}
                          </span>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                        {exp.location && (
                          <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                        )}
                        <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
                        {exp.rooms && (
                          <span className="flex items-center gap-1"><Building size={12} />{exp.rooms} {language.code === 'ar' ? 'غرفة' : 'rooms'}</span>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                      {/* Metrics */}
                      {exp.metrics && exp.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.metrics.map((m, i) => (
                            <div key={i} className="px-3 py-2 rounded-lg bg-muted/50 border border-border/50 text-center min-w-[80px]">
                              <p className="text-sm font-bold text-foreground">{m.value}</p>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Expandable */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <>
                          <button
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            className="flex items-center gap-1.5 text-xs font-medium text-accent-foreground hover:text-accent-foreground/80 transition-colors"
                          >
                            {language.code === 'ar' ? 'الإنجازات' : 'Key Achievements'}
                            <ChevronDown size={14} className={`transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {expandedIndex === index && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-3 space-y-2 overflow-hidden"
                              >
                                {exp.achievements.map((a, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                    {a}
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link to="/awards">
              <Button variant="outline" className="rounded-xl px-8 py-6 text-base font-medium gap-2 border-border hover:border-accent transition-all">
                <Award size={16} />
                {language.code === 'ar' ? 'شاهد الجوائز والتقدير' : 'View Awards & Recognition'}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Career;

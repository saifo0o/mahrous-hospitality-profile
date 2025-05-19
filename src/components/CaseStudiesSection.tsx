
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CaseStudiesSection = () => {
  const { t, language } = useLanguage();
  
  const caseStudies = [
    {
      id: 1,
      title: language.code === 'ar' ? "تجديد شامل لفندق شيراتون المنتزه الإسكندرية" : "Sheraton Montazah Alexandria Complete Renovation",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      location: language.code === 'ar' ? "الإسكندرية، مصر" : "Alexandria, Egypt",
      timeline: "2018-2020",
      challenge: language.code === 'ar' 
        ? "تحويل عقار عمره 40 عامًا يضم 288 غرفة مع الحفاظ على العمليات الجزئية والتعامل مع البنية التحتية القديمة." 
        : "Transforming a 40-year-old property with 288 rooms while maintaining partial operations and dealing with aging infrastructure.",
      solution: language.code === 'ar' 
        ? "تنفيذ نهج تجديد مرحلي، وتحديث جميع الأنظمة الميكانيكية بما في ذلك الغلايات والمحولات والمولدات والمبردات وشبكة السلامة ومكافحة الحرائق بأكملها." 
        : "Implemented a phased renovation approach, modernizing all mechanical systems including boilers, transformers, generators, chillers, and the entire fire & life safety network.",
      results: language.code === 'ar' ? [
        "زيادة بنسبة 25٪ في الإيرادات لكل غرفة متاحة خلال 6 أشهر بعد التجديد",
        "تحسين درجات رضا الضيوف بنسبة 30٪",
        "خفض استهلاك الطاقة بنسبة 50٪",
        "الحصول على تصنيف 4 نجوم من هيئة السياحة المصرية"
      ] : [
        "25% increase in RevPAR within 6 months post-renovation",
        "30% improvement in guest satisfaction scores",
        "50% reduction in energy consumption",
        "Achieved 4-star classification from Egyptian Tourism Authority"
      ],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      testimonial: {
        quote: language.code === 'ar' 
          ? "لقد حول التجديد عقارنا المتقادم إلى فندق حديث وتنافسي يقود الآن شريحة السوق الخاصة بنا." 
          : "The renovation transformed our aging property into a modern, competitive hotel that now leads our market segment.",
        author: language.code === 'ar' ? "إبراهيم صالح" : "Ibrahim Saleh",
        position: language.code === 'ar' ? "رئيس مجلس إدارة، شركة الإسكندرية لتنمية السياحة" : "Chairman, Alexandria Tourism Development Company"
      }
    },
    {
      id: 2,
      title: language.code === 'ar' ? "ما قبل افتتاح منتجع ذا في الفاخر سهل حشيش" : "The V Luxury Resort Sahl Hasheesh Pre-Opening",
      category: language.code === 'ar' ? "إدارة ما قبل الافتتاح" : "Pre-Opening Management",
      location: language.code === 'ar' ? "الغردقة، مصر" : "Hurghada, Egypt",
      timeline: "2019-2021",
      challenge: language.code === 'ar'
        ? "إطلاق منتجع فاخر جديد أثناء الوباء العالمي مع قيود سفر شديدة تؤثر على السياحة."
        : "Launching a new ultra-luxury resort during the global pandemic with severe travel restrictions affecting tourism.",
      solution: language.code === 'ar'
        ? "تطوير استراتيجيات تسويقية مبتكرة تستهدف السياحة المحلية، وتنفيذ بروتوكولات صحية وسلامة رائدة في الصناعة، وإنشاء تجارب فريدة للضيوف."
        : "Developed innovative marketing strategies targeting domestic tourism, implemented industry-leading health and safety protocols, and created unique guest experiences.",
      results: language.code === 'ar' ? [
        "90٪ إشغال خلال 4 أشهر من الافتتاح، مما يضع معيارًا جديدًا للسوق",
        "الإيرادات أعلى بنسبة 35٪ من التوقعات الأولية على الرغم من ظروف الوباء",
        "نجاح في توظيف وتدريب أكثر من 450 موظفًا خلال ظروف عمل صعبة",
        "حصل على جائزة 'أفضل منتجع فاخر جديد' من جوائز السفر المصرية"
      ] : [
        "90% occupancy within 4 months of opening, setting a new market benchmark",
        "Revenue 35% above initial projections despite pandemic conditions",
        "Successfully recruited and trained 450+ staff during challenging labor conditions",
        "Received 'Best New Luxury Resort' award from Egypt Travel Awards"
      ],
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
      testimonial: {
        quote: language.code === 'ar'
          ? "حولت خبرة إسلام في مرحلة ما قبل الافتتاح ما كان يمكن أن يكون كارثة خلال فترة كوفيد إلى قصة نجاح ملحوظة."
          : "Islam's pre-opening expertise turned what could have been a disaster during COVID into a remarkable success story.",
        author: language.code === 'ar' ? "خالد المنصور" : "Khalid Al-Mansour",
        position: language.code === 'ar' ? "المدير الإداري، استثمارات البحر الأحمر للضيافة" : "Managing Director, Red Sea Hospitality Investments"
      }
    },
    {
      id: 3,
      title: language.code === 'ar' ? "مشروع إحياء منتجع بورسعيد" : "Porto Said Resort Revitalization Project",
      category: language.code === 'ar' ? "إدارة التحول" : "Turnaround Management",
      location: language.code === 'ar' ? "بورسعيد، مصر" : "Port Said, Egypt",
      timeline: "2017-2018",
      challenge: language.code === 'ar'
        ? "عكس الأداء المتراجع لمنتجع ضعيف الأداء مع مرافق متدهورة ومعايير خدمة سيئة."
        : "Reversing declining performance of an underperforming resort with deteriorating facilities and poor service standards.",
      solution: language.code === 'ar'
        ? "تنفيذ مشروع تجديد مستهدف بقيمة 3.5 مليون دولار عبر 168 غرفة والمناطق العامة، وإعادة هيكلة فريق الإدارة، وتقديم برامج تدريب شاملة للموظفين."
        : "Implemented $3.5M targeted refurbishment project across 168 rooms and public areas, restructured the management team, and introduced comprehensive staff training programs.",
      results: language.code === 'ar' ? [
        "نمو الإشغال بنسبة 18٪ خلال السنة الأولى",
        "زيادة بنسبة 20٪ في إيرادات الأغذية والمشروبات من خلال هندسة القائمة",
        "انخفاض معدل دوران الموظفين من 45٪ إلى 15٪ سنويًا",
        "تحسن تصنيف تريب أدفايزور من المركز 12 إلى المركز 3 في السوق الإقليمية"
      ] : [
        "18% occupancy growth within first year",
        "20% increase in F&B revenue through menu engineering",
        "Staff turnover reduced from 45% to 15% annually",
        "TripAdvisor ranking improved from #12 to #3 in regional market"
      ],
      image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      testimonial: {
        quote: language.code === 'ar'
          ? "قيادة إسلام حولت ليس فقط عقارنا ولكن أيضًا إيمان الفريق بأكمله بما كان ممكنًا لمنتجعنا."
          : "Islam's leadership transformed not just our property but the entire team's belief in what was possible for our resort.",
        author: language.code === 'ar' ? "محمد فاروق" : "Mohamed Farouk",
        position: language.code === 'ar' ? "مالك منتجع بورسعيد" : "Owner, Porto Said Resort"
      }
    },
  ];

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
          <h2 className="section-heading inline-block">{t('caseStudies')}</h2>
          <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
            {language.code === 'ar'
              ? "تحليلات مفصلة لمشاريع الضيافة التحويلية التي توضح نهجي الاستراتيجي في مواجهة تحديات إدارة الفنادق والنتائج القابلة للقياس."
              : "Detailed analyses of transformational hospitality projects that showcase my strategic approach to hotel management challenges and measurable results."
            }
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
                        <h4 className="text-sm font-semibold text-luxury-navy mb-1">
                          {language.code === 'ar' ? "التحدي:" : "Challenge:"}
                        </h4>
                        <p className="text-sm text-luxury-gray mb-2">{study.challenge}</p>
                        
                        <h4 className="text-sm font-semibold text-luxury-navy mb-1">
                          {language.code === 'ar' ? "الحل:" : "Solution:"}
                        </h4>
                        <p className="text-sm text-luxury-gray mb-2">{study.solution}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-luxury-navy mb-1">
                          {language.code === 'ar' ? "النتائج الرئيسية:" : "Key Results:"}
                        </h4>
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
              {t('viewMoreCaseStudies')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

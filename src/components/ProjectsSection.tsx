
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const ProjectsSection = () => {
  const { t, language, isRTL } = useLanguage();
  
  const projects = [
    {
      title: language.code === 'ar' ? "فندق شيراتون المنتزه" : "Sheraton Montazah Hotel",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: language.code === 'ar' 
        ? "قيادة تجديد شامل لعقار يبلغ عمره 40 عامًا (288 غرفة)، وتحديث جميع الأنظمة الميكانيكية بما في ذلك الغلايات والمحولات والمولدات والمبردات وشبكة السلامة من الحرائق."
        : "Led comprehensive renovation of 40-year-old property (288 rooms), modernizing all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network.",
      results: language.code === 'ar' 
        ? "زيادة بنسبة 25٪ في إيرادات الغرفة المتاحة وتحسين بنسبة 30٪ في درجات رضا الضيوف."
        : "25% increase in RevPAR and 30% improvement in guest satisfaction scores."
    },
    {
      title: language.code === 'ar' ? "منتجع ذا في الفاخر سهل حشيش" : "The V Luxury Resort Sahl Hasheesh",
      category: language.code === 'ar' ? "ما قبل الافتتاح" : "Pre-Opening",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح لمنتجع فاخر يضم 298 غرفة، وتنفيذ استراتيجيات تسويقية مبتكرة حققت نسبة إشغال استثنائية في البداية."
        : "Managed pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved exceptional initial occupancy.",
      results: language.code === 'ar'
        ? "90٪ نسبة الإشغال خلال 4 أشهر من الإطلاق، مما وضع معيارًا جديدًا للسوق."
        : "90% occupancy within 4 months of launch, setting a new market benchmark."
    },
    {
      title: language.code === 'ar' ? "منتجع بورسعيد" : "Porto Said Resort",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      description: language.code === 'ar'
        ? "إدارة مشروع تجديد بقيمة 3.5 مليون دولار (168 غرفة)، مع تحقيق نمو كبير في مؤشرات الأداء الرئيسية في غضون 4 أشهر فقط."
        : "Directed $3.5M refurbishment project (168 rooms), achieving significant growth in key performance indicators within just 4 months.",
      results: language.code === 'ar'
        ? "نمو في الإشغال بنسبة 18٪ وزيادة في إيرادات الأغذية والمشروبات بنسبة 20٪."
        : "18% occupancy growth and 20% F&B revenue increase."
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading inline-block">{language.code === 'ar' ? 'المشاريع المميزة' : 'Signature Projects'}</h2>
          <p className={`text-luxury-gray mt-4 max-w-2xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
            {language.code === 'ar' 
              ? 'تجديدات تحويلية وافتتاحات ناجحة تُظهر خبرتي في عمليات الضيافة والتخطيط الاستراتيجي والإدارة المالية.'
              : 'Transformative renovations and successful pre-openings that demonstrate my expertise in hospitality operations, strategic planning, and financial management.'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} bg-luxury-gold text-white text-sm font-medium py-1 px-3 ${isRTL ? 'rounded-br-lg' : 'rounded-bl-lg'}`}>
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold text-luxury-navy mb-2 ${isRTL ? 'text-right' : ''}`}>{project.title}</h3>
                <p className={`text-luxury-gray mb-4 text-sm ${isRTL ? 'text-right' : ''}`}>{project.description}</p>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className={`text-sm font-semibold text-luxury-navy ${isRTL ? 'text-right' : ''}`}>
                    {language.code === 'ar' ? 'النتائج:' : 'Results:'} {project.results}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-luxury-navy hover:bg-blue-900">
            <Link to="/projects">{language.code === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects'}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

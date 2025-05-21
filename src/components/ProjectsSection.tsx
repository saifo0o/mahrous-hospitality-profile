
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
        : "Led comprehensive renovation of 40-year-old property (288 rooms), modernizing all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network."
    },
    {
      title: language.code === 'ar' ? "منتجع ذا في الفاخر سهل حشيش" : "The V Luxury Resort Sahl Hasheesh",
      category: language.code === 'ar' ? "ما قبل الافتتاح" : "Pre-Opening",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
      description: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح لمنتجع فاخر يضم 298 غرفة، وتنفيذ استراتيجيات تسويقية مبتكرة حققت نسبة إشغال استثنائية في البداية."
        : "Managed pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved exceptional initial occupancy."
    },
    {
      title: language.code === 'ar' ? "منتجع بورسعيد" : "Porto Said Resort",
      category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
      image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      description: language.code === 'ar'
        ? "إدارة مشروع تجديد بقيمة 3.5 مليون دولار (168 غرفة)، مع تحقيق نمو كبير في مؤشرات الأداء الرئيسية في غضون 4 أشهر فقط."
        : "Directed $3.5M refurbishment project (168 rooms), achieving significant growth in key performance indicators within just 4 months."
    }
  ];

  return (
    <section className={`py-16 bg-gray-50 ${isRTL ? 'text-right' : ''}`}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`text-3xl font-bold mb-2 ${isRTL ? 'text-right' : ''}`}>
          {t('signatureProjects')}
        </h2>
        <div className={`w-20 h-1 bg-luxury-gold mb-12 ${isRTL ? 'mr-0' : 'ml-0'}`}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} bg-luxury-gold text-white text-xs font-medium px-2 py-1 ${isRTL ? 'rounded-br-md' : 'rounded-bl-md'}`}>
                  {project.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg text-luxury-navy mb-2">{project.title}</h3>
                <p className="text-sm text-luxury-gray line-clamp-3 mb-4">{project.description}</p>
                <Link 
                  to="/projects" 
                  className={`text-sm font-medium text-luxury-gold hover:text-amber-600 transition-colors flex items-center ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
                >
                  {isRTL ? (
                    <>
                      {t('viewDetails')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  ) : (
                    <>
                      {t('viewDetails')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-luxury-navy hover:bg-blue-900 transition-colors">
            <Link to="/projects">{t('viewAllProjects')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

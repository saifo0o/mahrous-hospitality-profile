
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const { t, isRTL } = useLanguage();
  
  const projects = [
    {
      title: t('sheratonMontazahHotel'),
      category: t('majorRenovation'),
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: t('sheratonMontazahDescription'),
      results: t('sheratonMontazahResults')
    },
    {
      title: t('vLuxuryResort'),
      category: t('preOpening'),
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
      description: t('vLuxuryResortDescription'),
      results: t('vLuxuryResortResults')
    },
    {
      title: t('portoSaidResort'),
      category: t('majorRenovation'),
      image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      description: t('portoSaidDescription'),
      results: t('portoSaidResults')
    },
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading inline-block">{t('signatureProjects')}</h2>
          <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
            {t('signatureProjectsDescription')}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 bg-luxury-gold text-white text-sm font-medium py-1 px-3 rounded-bl-lg">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-luxury-navy mb-2">{project.title}</h3>
                <p className="text-luxury-gray mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="bg-gray-50 p-4 rounded-md border-l-4 border-luxury-gold">
                  <p className="text-sm font-semibold text-luxury-navy">
                    <span className="font-playfair text-luxury-gold">{t('results')}</span>: {project.results}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            className="bg-luxury-navy hover:bg-blue-900 text-white flex items-center gap-2 group py-6 px-8 text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            asChild
          >
            <Link to="/projects">
              {t('viewAllProjects')}
              <ArrowRight size={16} className={`${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'} transition-transform`} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

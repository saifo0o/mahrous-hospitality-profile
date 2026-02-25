
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Calendar, MapPin, BarChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { language, t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: language.code === 'ar' ? "فنادق برايم - محفظة المجموعة" : "Prime Hotels - Group Portfolio",
      category: "Group Management",
      categoryAr: "إدارة المجموعة",
      location: language.code === 'ar' ? "الرياض" : "Riyadh, KSA",
      period: "2025 - Present",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      budget: language.code === 'ar' ? "متعدد المشاريع" : "Multi-Project",
      featured: true,
      results: language.code === 'ar'
        ? ["حوكمة تشغيلية موحدة", "6 فنادق إضافية بحلول 2026", "استراتيجية 10,000 غرفة"]
        : ["Unified operational governance", "6 additional hotels by 2026", "10,000-room growth strategy"],
    },
    {
      title: language.code === 'ar' ? "كراون بلازا الإسكندرية" : "Crowne Plaza Alexandria",
      category: "Brand Conversion",
      categoryAr: "تحويل علامة",
      location: language.code === 'ar' ? "الإسكندرية" : "Alexandria, Egypt",
      period: "2025",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      budget: language.code === 'ar' ? "تحويل كامل" : "Full Conversion",
      results: language.code === 'ar'
        ? ["تحول تشغيلي ناجح", "100% امتثال آي إتش جي", "تحسين أداء الأصول"]
        : ["Successful transformation", "100% IHG compliance", "Optimized asset performance"],
    },
    {
      title: language.code === 'ar' ? "فندق شيراتون المنتزه" : "Sheraton Montazah Hotel",
      category: "Renovation",
      categoryAr: "تجديد",
      location: language.code === 'ar' ? "الإسكندرية" : "Alexandria, Egypt",
      period: "2016 - 2023",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/2025-05-31_nclbzr.webp",
      rooms: 288,
      budget: "$7.2M",
      results: language.code === 'ar'
        ? ["+25% عائد الغرفة", "+30% رضا الضيوف", "-15% استهلاك الطاقة"]
        : ["+25% RevPAR", "+30% guest satisfaction", "-15% energy consumption"],
    },
    {
      title: language.code === 'ar' ? "منتجع ذا في الفاخر" : "The V Luxury Resort",
      category: "Pre-Opening",
      categoryAr: "ما قبل الافتتاح",
      location: language.code === 'ar' ? "الغردقة" : "Hurghada, Egypt",
      period: "2023",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/photo-hurghada-18_krbjex.jpg",
      rooms: 298,
      budget: "$4.5M",
      results: language.code === 'ar'
        ? ["90% إشغال في 4 أشهر", "+12% رضا الضيوف", "رائد السوق المحلية"]
        : ["90% occupancy in 4 months", "+12% guest satisfaction", "Established as market leader"],
    },
    {
      title: language.code === 'ar' ? "منتجع بورسعيد" : "Porto Said Resort",
      category: "Renovation",
      categoryAr: "تجديد",
      location: language.code === 'ar' ? "بورسعيد" : "Port Said, Egypt",
      period: "2024",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/377246827_sqf4sq.jpg",
      rooms: 168,
      budget: "$3.5M",
      results: language.code === 'ar'
        ? ["+18% إشغال", "+20% إيرادات F&B", "200+ موظف"]
        : ["+18% occupancy", "+20% F&B revenue", "200+ staff managed"],
    },
    {
      title: language.code === 'ar' ? "فور بوينتس باي شيراتون" : "Four Points by Sheraton",
      category: "Pre-Opening",
      categoryAr: "ما قبل الافتتاح",
      location: language.code === 'ar' ? "الرياض" : "Riyadh, KSA",
      period: "2024 - 2025",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/caption_kgnuht.jpg",
      rooms: 172,
      budget: "$5.2M",
      results: language.code === 'ar'
        ? ["-12% ميزانية ما قبل الافتتاح", "90% جاهزية تشغيلية", "150+ موظف"]
        : ["-12% pre-opening budget", "90% operational readiness", "150+ staff recruited"],
    },
    {
      title: language.code === 'ar' ? "منتجع شيراتون ميرامار" : "Sheraton Miramar Resort",
      category: "Renovation",
      categoryAr: "تجديد",
      location: language.code === 'ar' ? "الجونة" : "El Gouna, Egypt",
      period: "2011 - 2014",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749614476/si-hrgsi-bridges-lagoons-ext-11832-83257_Feature-Hor_xgnwfh.jpg",
      rooms: 339,
      budget: "$5M",
      results: language.code === 'ar'
        ? ["+12% رضا الضيوف", "+15% سعر الغرفة", "+8% إشغال"]
        : ["+12% guest satisfaction", "+15% ADR", "+8% occupancy"],
    },
    {
      title: language.code === 'ar' ? "فور بوينتس وشيراتون طرابلس" : "Four Points & Sheraton Tripoli",
      category: "Pre-Opening",
      categoryAr: "ما قبل الافتتاح",
      location: language.code === 'ar' ? "طرابلس" : "Tripoli, Libya",
      period: "2009 - 2011",
      image: "https://res.cloudinary.com/dt6hz3295/image/upload/v1749614237/Four_Points_by_Sheraton_Hotel_Tripoli_Libya_qalags.jpg",
      rooms: 718,
      budget: "$8.5M",
      results: language.code === 'ar'
        ? ["95% جاهزية تشغيلية", "+15% رضا ضيوف", "معايير شيراتون في سوق جديدة"]
        : ["95% operational readiness", "+15% guest satisfaction", "Sheraton standards in new market"],
    }
  ];

  const categories = ['All', 'Pre-Opening', 'Renovation', 'Brand Conversion', 'Group Management'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const categoryColors: Record<string, string> = {
    'Pre-Opening': 'bg-primary/10 text-primary',
    'Renovation': 'bg-accent/10 text-accent-foreground',
    'Brand Conversion': 'bg-green-500/10 text-green-700',
    'Group Management': 'bg-purple-500/10 text-purple-700',
  };

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
        <Navbar />

        <main className="flex-grow pt-28 pb-20">
          {/* Header */}
          <section className="container mx-auto px-4 md:px-8 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent-foreground mb-4">
                <Building size={14} />
                {language.code === 'ar' ? '$70M+ في المشاريع' : '$70M+ in Projects'}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
                {language.code === 'ar' ? 'المشاريع المميزة' : 'Signature Projects'}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {language.code === 'ar'
                  ? 'تجديدات تحويلية وافتتاحات ناجحة تُظهر خبرتي في الضيافة.'
                  : 'Transformative renovations and successful pre-openings showcasing hospitality expertise.'}
              </p>
            </motion.div>
          </section>

          {/* Filter Tabs */}
          <section className="container mx-auto px-4 md:px-8 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {language.code === 'ar' ? (cat === 'All' ? 'الكل' : cat === 'Pre-Opening' ? 'ما قبل الافتتاح' : cat === 'Renovation' ? 'تجديد' : cat === 'Brand Conversion' ? 'تحويل علامة' : 'إدارة المجموعة') : cat}
                </button>
              ))}
            </div>
          </section>

          {/* Projects Grid */}
          <section className="container mx-auto px-4 md:px-8">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 group ${project.featured ? 'md:col-span-2' : ''}`}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden ${project.featured ? 'h-72' : 'h-56'}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[project.category] || 'bg-muted text-muted-foreground'}`}>
                          {language.code === 'ar' ? project.categoryAr : project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>

                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><MapPin size={12} />{project.location}</span>
                        <span className="flex items-center gap-1"><Calendar size={12} />{project.period}</span>
                        {project.rooms && project.rooms > 0 && (
                          <span className="flex items-center gap-1"><Building size={12} />{project.rooms} {language.code === 'ar' ? 'غرفة' : 'rooms'}</span>
                        )}
                        <span className="flex items-center gap-1"><BarChart size={12} />{project.budget}</span>
                      </div>

                      <div className="space-y-1.5">
                        {project.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle2 size={14} className="text-accent-foreground flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="text-center mt-16">
              <Link to="/career">
                <Button variant="outline" className="rounded-xl px-8 py-6 text-base font-medium gap-2 border-border hover:border-accent transition-all">
                  {language.code === 'ar' ? 'شاهد المسيرة المهنية الكاملة' : 'View Full Career Journey'}
                  <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Projects;

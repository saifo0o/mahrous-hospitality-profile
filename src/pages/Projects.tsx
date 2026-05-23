
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
  const { language, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const ar = language.code === 'ar';

  const projects = [
    {
      title: ar ? 'فنادق برايم - محفظة المجموعة' : 'Prime Hotels - Group Portfolio',
      category: 'Group Management',
      categoryAr: 'إدارة المجموعة',
      role: ar ? 'مدير عمليات المجموعة' : 'Group Operations Director',
      brand: 'Multi-Brand',
      location: ar ? 'الرياض، السعودية' : 'Riyadh, KSA',
      period: ar ? 'ديسمبر 2025 - مايو 2026' : 'Dec 2025 - May 2026',
      image: '/images/riyadh-skyline.jpg',
      budget: ar ? 'متعدد العقارات' : 'Multi-Property',
      featured: true,
      results: ar
        ? ['حوكمة تشغيلية موحدة', 'نمو نحو 10,000 غرفة بحلول 2030', 'مراجعة P&L شهرية ولوحات STR']
        : ['Unified operational governance', 'Growth path to 10,000 rooms by 2030', 'Monthly P&L cadence + STR dashboards'],
    },
    {
      title: ar ? 'كراون بلازا ميراج (آي إتش جي)' : 'Crowne Plaza Mirage by IHG',
      category: 'Brand Conversion',
      categoryAr: 'تحويل علامة',
      role: ar ? 'مستشار تحويل علامة مستقل' : 'Independent Brand Conversion Consultant',
      brand: 'IHG',
      location: ar ? 'الإسكندرية، مصر' : 'Alexandria, Egypt',
      period: ar ? 'أغسطس - ديسمبر 2025' : 'Aug - Dec 2025',
      image: '/images/crowne-plaza-alexandria.jpg',
      rooms: 96,
      budget: ar ? '4 أشهر' : '4 months',
      results: ar
        ? ['100٪ امتثال IHG من خط بداية صفر', 'نشر Opera Cloud + Concerto', 'جاهزية تدقيق العلامة دون اضطراب']
        : ['100% IHG compliance from zero baseline', 'Deployed Opera Cloud + Concerto', 'Brand-audit ready, zero guest disruption'],
    },
    {
      title: ar ? 'فور بوينتس باي شيراتون - الرياض' : 'Four Points by Sheraton, Riyadh',
      category: 'Pre-Opening',
      categoryAr: 'ما قبل الافتتاح',
      role: ar ? "ممثل المالك (ما قبل الافتتاح)" : "Owner's Representative",
      brand: 'Marriott',
      location: ar ? 'الرياض، السعودية' : 'Riyadh, KSA',
      period: ar ? 'أبريل 2023 - يوليو 2025' : 'Apr 2023 - Jul 2025',
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/caption_kgnuht.jpg',
      rooms: 172,
      budget: '−12% budget',
      results: ar
        ? ['−12٪ ميزانية ما قبل الافتتاح', 'التسليم في الموعد ضمن رأس المال', '150+ موظف تم توظيفه']
        : ['−12% pre-opening budget', 'On-schedule, within capital budget', '150+ pre-opening staff recruited'],
    },
    {
      title: ar ? 'منتجع ذا في الفاخر - سهل حشيش' : 'The V Luxury Resort, Sahl Hasheesh',
      category: 'Pre-Opening',
      categoryAr: 'ما قبل الافتتاح',
      role: ar ? 'مستشار ما قبل افتتاح مستقل' : 'Independent Pre-Opening Consultant',
      brand: ar ? 'فاخر مستقل' : 'Independent Luxury',
      location: ar ? 'الغردقة، مصر' : 'Hurghada, Egypt',
      period: ar ? 'مايو 2023 - مارس 2024' : 'May 2023 - Mar 2024',
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/photo-hurghada-18_krbjex.jpg',
      rooms: 298,
      budget: ar ? 'إطلاق فاخر' : 'Luxury Launch',
      results: ar
        ? ['90٪ إشغال خلال 4 أشهر', '+12٪ رضا الضيوف في الربع الافتتاحي', '300+ عضو فريق تم تدريبه']
        : ['90% occupancy in 4 months', '+12% guest satisfaction (opening quarter)', '300+ pre-opening team trained'],
    },
    {
      title: ar ? 'منتجع بورسعيد' : 'Porto Said Resort',
      category: 'Turnaround',
      categoryAr: 'تحويل المسار',
      role: ar ? 'مستشار تحويل المسار والتجديد' : 'Independent Turnaround & Renovation Consultant',
      brand: ar ? 'مستقل' : 'Independent',
      location: ar ? 'بورسعيد، مصر' : 'Port Said, Egypt',
      period: ar ? 'أبريل - أغسطس 2024' : 'Apr - Aug 2024',
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/377246827_sqf4sq.jpg',
      rooms: 168,
      budget: '$3.5M',
      results: ar
        ? ['+18٪ إشغال • +20٪ F&B', 'GOP إيجابي خلال 4 أشهر', '+30٪ رضا الضيوف']
        : ['+18% occupancy • +20% F&B', 'Positive GOP within 4 months', '+30% guest satisfaction'],
    },
    {
      title: ar ? 'فندق شيراتون المنتزه' : 'Sheraton Montazah Hotel',
      category: 'Renovation',
      categoryAr: 'تجديد',
      role: ar ? 'مدير عام (ولاية 9 سنوات)' : 'General Manager (9-year tenure)',
      brand: 'Marriott',
      location: ar ? 'الإسكندرية، مصر' : 'Alexandria, Egypt',
      period: '2014 - 2023',
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/2025-05-31_nclbzr.webp',
      rooms: 288,
      budget: ar ? 'تجديد شامل' : 'Full Renovation',
      results: ar
        ? ['+25٪ RevPAR • +30٪ رضا', '−15٪ طاقة • −20٪ صيانة', 'تجاوز المنافسين عبر دورات سوق متعددة']
        : ['+25% RevPAR • +30% satisfaction', '−15% energy • −20% maintenance', 'Outperformed comp set across cycles'],
    },
    {
      title: ar ? 'محفظة ماريوت مصر' : 'Marriott Egypt Portfolio',
      category: 'Portfolio Excellence',
      categoryAr: 'تميز المحفظة',
      role: ar ? 'مدير مسؤول عن التميز التشغيلي' : 'GM in Charge of Operational Excellence',
      brand: 'Marriott',
      location: ar ? 'منطقة مصر' : 'Egypt Region',
      period: '2018 - 2022',
      image: '/images/cairo-marriott.jpg',
      rooms: 3000,
      budget: ar ? '19 عقار' : '19 properties',
      results: ar
        ? ['+10٪ رضا الضيوف على مستوى المحفظة', '+8٪ إيرادات F&B', '+3٪ متوسط RevPAR (19 عقار)']
        : ['+10% portfolio guest satisfaction', '+8% F&B revenue', '+3% avg RevPAR (19 properties)'],
    },
    {
      title: ar ? 'منتجع شيراتون ميرامار - الجونة' : 'Sheraton Miramar Resort, El Gouna',
      category: 'Renovation',
      categoryAr: 'تجديد',
      role: ar ? 'نائب المدير العام المسؤول' : 'Deputy GM in Charge',
      brand: 'Marriott',
      location: ar ? 'الجونة، مصر' : 'El Gouna, Egypt',
      period: '2011 - 2014',
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749614476/si-hrgsi-bridges-lagoons-ext-11832-83257_Feature-Hor_xgnwfh.jpg',
      rooms: 339,
      budget: '$5M',
      results: ar
        ? ['+15٪ ADR • +8٪ إشغال', '−7٪ نفقات الرواتب', '+12٪ رضا الضيوف']
        : ['+15% ADR • +8% occupancy', '−7% payroll expenses', '+12% guest satisfaction'],
    },
    {
      title: ar ? 'فور بوينتس وشيراتون طرابلس' : 'Four Points & Sheraton Tripoli',
      category: 'Pre-Opening',
      categoryAr: 'ما قبل الافتتاح',
      role: ar ? 'مساعد مدير تنفيذي عنقودي' : 'Cluster Executive Assistant Manager',
      brand: 'Starwood',
      location: ar ? 'طرابلس، ليبيا' : 'Tripoli, Libya',
      period: ar ? 'ديسمبر 2009 - يونيو 2011' : 'Dec 2009 - Jun 2011',
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749614237/Four_Points_by_Sheraton_Hotel_Tripoli_Libya_qalags.jpg',
      rooms: 718,
      budget: ar ? 'مزدوج العلامة' : 'Dual-Brand Cluster',
      results: ar
        ? ['95٪ جاهزية تشغيلية', 'افتتاح في ظروف سياسية صعبة', 'معايير ستاروود الدولية']
        : ['95% operational readiness', 'Delivered in challenging conditions', 'Starwood international standards'],
    },
    {
      title: ar ? 'مهام فرق المهام لما قبل الافتتاح' : 'Task Force Pre-Opening Mandates',
      category: 'Pre-Opening',
      categoryAr: 'ما قبل الافتتاح',
      role: ar ? 'متخصص EAM' : 'EAM Specialist',
      brand: 'Marriott',
      location: ar ? 'مكة المكرمة، السعودية / غامبيا' : 'Makkah, KSA / The Gambia',
      period: '2008',
      image: '/images/makkah-clock-tower.jpg',
      rooms: 1504,
      budget: ar ? '3 أشهر/كل مهمة' : '3 mo / mandate',
      results: ar
        ? ['لو ميريديان أبراج مكة (1,323 غرفة)', 'شيراتون غامبيا (181 غرفة)', 'خبرة EAM دولية متخصصة']
        : ['Le Meridien Makkah Towers (1,323 rooms)', 'Sheraton Gambia (181 rooms)', 'International EAM specialist mandates'],
    },
  ];

  const categories = ['All', 'Pre-Opening', 'Renovation', 'Brand Conversion', 'Turnaround', 'Group Management', 'Portfolio Excellence'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const categoryColors: Record<string, string> = {
    'Pre-Opening': 'bg-primary/10 text-primary',
    'Renovation': 'bg-accent/10 text-accent-foreground',
    'Brand Conversion': 'bg-emerald-500/10 text-emerald-700',
    'Turnaround': 'bg-rose-500/10 text-rose-700',
    'Group Management': 'bg-purple-500/10 text-purple-700',
    'Portfolio Excellence': 'bg-amber-500/10 text-amber-700',
  };

  const categoryLabel = (cat: string) => {
    if (!ar) return cat;
    const map: Record<string, string> = {
      'All': 'الكل',
      'Pre-Opening': 'ما قبل الافتتاح',
      'Renovation': 'تجديد',
      'Brand Conversion': 'تحويل علامة',
      'Turnaround': 'تحويل المسار',
      'Group Management': 'إدارة المجموعة',
      'Portfolio Excellence': 'تميز المحفظة',
    };
    return map[cat] || cat;
  };

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
        <Navbar />

        <main className="flex-grow pt-28 pb-20">
          {/* Header */}
          <section className="container mx-auto px-4 md:px-8 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-accent/60" />
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-bold flex items-center gap-1.5">
                  <Building size={12} />
                  {language.code === 'ar' ? '$70M+ في المشاريع' : '$70M+ in Projects Delivered'}
                </p>
                <span className="h-px w-8 bg-accent/60" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground mb-5 leading-[1.1]">
                {language.code === 'ar' ? 'المشاريع المميزة' : 'Signature Projects'}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {language.code === 'ar'
                  ? 'تجديدات تحويلية وافتتاحات ناجحة تُظهر خبرتي في الضيافة عبر الشرق الأوسط وشمال أفريقيا.'
                  : 'Transformative renovations and successful pre-openings showcasing hospitality expertise across MENA.'}
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
                  {categoryLabel(cat)}
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
                      <h3 className="text-lg font-semibold text-foreground mb-1">{project.title}</h3>
                      <p className="text-xs text-accent-foreground font-medium mb-3">
                        {project.role}{project.brand ? ` • ${project.brand}` : ''}
                      </p>

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

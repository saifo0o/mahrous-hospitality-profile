
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Calendar, MapPin, BarChart, ArrowRight, CheckCircle2, ShieldCheck, TrendingDown, TrendingUp } from 'lucide-react';
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
      challenge: ar
        ? 'محفظة متعددة العلامات بلا حوكمة تشغيلية موحدة أو مسار نمو واضح'
        : 'A multi-brand portfolio lacking unified operational governance or a clear growth path',
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
      caseStudySlug: 'crowne-plaza-mirage-conversion',
      challenge: ar
        ? 'تحويل عقار مستقل إلى معايير آي إتش جي الكاملة دون تعطيل تشغيل الضيوف'
        : 'Converting an independent property to full IHG brand standards without disrupting guest operations',
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
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749613983/caption_kgnuht.jpg',
      rooms: 172,
      budget: '−12% budget',
      challenge: ar
        ? 'تسليم فندق جديد بالكامل ضمن رأس مال محدود مع الحفاظ على معايير ماريوت'
        : 'Delivering a ground-up hotel within a constrained capital budget while meeting Marriott standards',
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
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749613983/photo-hurghada-18_krbjex.jpg',
      rooms: 298,
      budget: ar ? 'إطلاق فاخر' : 'Luxury Launch',
      caseStudySlug: 'v-luxury-resort-pre-opening',
      challenge: ar
        ? 'إطلاق منتجع فاخر مستقل من الصفر وبناء فريق كامل قبل موسم الذروة'
        : 'Launching an independent luxury resort from scratch and building a full team ahead of peak season',
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
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749613983/377246827_sqf4sq.jpg',
      rooms: 168,
      budget: '$3.5M',
      challenge: ar
        ? 'منتجع يعاني من إشغال منخفض وربحية تشغيلية سلبية (GOP) يحتاج تحولاً سريعاً'
        : 'A resort suffering from low occupancy and negative GOP in urgent need of a rapid turnaround',
      before: ar ? 'إشغال منخفض وGOP سلبي' : 'Low occupancy, negative GOP',
      after: ar ? '+18٪ إشغال، GOP إيجابي خلال 4 أشهر' : '+18% occupancy, positive GOP in 4 months',
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
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749613983/2025-05-31_nclbzr.webp',
      rooms: 288,
      budget: ar ? 'تجديد شامل' : 'Full Renovation',
      caseStudySlug: 'sheraton-montazah-renovation',
      challenge: ar
        ? 'أصل عمره 40 عاماً يحتاج إلى تحديث شامل دون فقدان حصته السوقية'
        : 'A 40-year-old asset needing full modernization without losing market share',
      before: ar ? 'أصل عمره 40 عاماً يحتاج تحديثاً' : '40-year asset needing modernization',
      after: ar ? '+25٪ RevPAR، +30٪ رضا الضيوف' : '+25% RevPAR, +30% satisfaction',
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
      challenge: ar
        ? 'رفع مستوى التميز التشغيلي بشكل متسق عبر 19 عقاراً متنوعاً'
        : 'Raising operational excellence consistently across 19 diverse properties',
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
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749614476/si-hrgsi-bridges-lagoons-ext-11832-83257_Feature-Hor_xgnwfh.jpg',
      rooms: 339,
      budget: '$5M',
      challenge: ar
        ? 'أصل متقادم يحتاج إلى استثمار رأسمالي وإعادة وضع تنافسي في السوق'
        : 'An aging asset requiring capital investment and competitive repositioning',
      before: ar ? 'أصل متقادم' : 'Aging asset',
      after: ar ? '+15٪ ADR، +8٪ إشغال' : '+15% ADR, +8% occupancy',
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
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749614237/Four_Points_by_Sheraton_Hotel_Tripoli_Libya_qalags.jpg',
      rooms: 718,
      budget: ar ? 'مزدوج العلامة' : 'Dual-Brand Cluster',
      challenge: ar
        ? 'افتتاح مجمع مزدوج العلامة في ظل ظروف سياسية وسوقية صعبة'
        : 'Opening a dual-brand cluster amid challenging political and market conditions',
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
      challenge: ar
        ? 'دعم افتتاحات متعددة ومتزامنة عبر أسواق مختلفة بأطر زمنية ضيقة'
        : 'Supporting multiple, simultaneous openings across different markets on tight timelines',
      results: ar
        ? ['لو ميريديان أبراج مكة (1,323 غرفة)', 'شيراتون غامبيا (181 غرفة)', 'خبرة EAM دولية متخصصة']
        : ['Le Meridien Makkah Towers (1,323 rooms)', 'Sheraton Gambia (181 rooms)', 'International EAM specialist mandates'],
    },
  ];

  const categories = ['All', 'Pre-Opening', 'Renovation', 'Brand Conversion', 'Turnaround', 'Group Management', 'Portfolio Excellence'];

  const featuredProject = projects.find(p => p.caseStudySlug === 'sheraton-montazah-renovation') || projects[5];
  const secondaryProjects = projects.filter(p => p.caseStudySlug !== 'sheraton-montazah-renovation');

  const filteredProjects = activeFilter === 'All'
    ? secondaryProjects
    : secondaryProjects.filter(p => p.category === activeFilter);

  const categoryColors: Record<string, string> = {
    'Pre-Opening': 'bg-luxury-gold/15 text-luxury-gold border border-luxury-gold/20',
    'Renovation': 'bg-luxury-emerald/15 text-luxury-emerald border border-luxury-emerald/20',
    'Brand Conversion': 'bg-luxury-emerald/10 text-luxury-emerald border border-luxury-emerald/25',
    'Turnaround': 'bg-red-500/10 text-red-500 border border-red-500/20',
    'Group Management': 'bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20',
    'Portfolio Excellence': 'bg-luxury-charcoal/10 text-luxury-charcoal border border-luxury-charcoal/20 dark:bg-muted/50 dark:text-muted-foreground',
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

  const showBeforeAfter = (project: typeof projects[number]) =>
    (project.category === 'Turnaround' || project.category === 'Renovation') && project.before && project.after;

  const billboardStats = [
    { value: '+25%', label: ar ? 'نمو RevPAR' : 'RevPAR Growth' },
    { value: '288', label: ar ? 'غرفة فاخرة' : 'Luxury Rooms' },
    { value: ar ? '9 سنوات' : '9 Years', label: ar ? 'ولاية المدير العام' : 'GM Tenure' },
  ];

  const billboardResults = ar
    ? [
        '+25٪ في عائد الغرفة المتاحة (RevPAR) • +30٪ زيادة في رضا الضيوف',
        '−15٪ استهلاك طاقة أقل • −20٪ تكاليف صيانة وتطوير',
        'تجاوز أداء مجموعة المنافسين الإقليمية عبر دورات سوق متعددة',
      ]
    : [
        '+25% RevPAR growth • +30% guest satisfaction rating',
        '−15% energy consumption • −20% maintenance overhead',
        'Outperformed regional competitor set across multiple market cycles',
      ];

  const billboardChallenge = ar
    ? 'أصل عمره 40 عاماً يعاني من تراجع في المكانة التنافسية ويحتاج إلى إعادة استثمار شامل دون إغلاق التشغيل.'
    : 'A 40-year-old asset losing competitive positioning, requiring a full capital reinvestment without shutting down operations.';

  const billboardOutcome = ar
    ? 'إعادة وضع الأصل كرائد إقليمي، مع نمو مستدام في الإيرادات ورضا الضيوف طوال فترة ولاية المدير العام.'
    : 'Repositioned the asset as a regional leader, with sustained revenue growth and guest satisfaction throughout the GM tenure.';

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <Navbar />

        <main className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-8 mb-8">
            <BreadcrumbNav items={[{ label: language.code === 'ar' ? 'المشاريع' : 'Projects', active: true }]} />
          </div>

          {/* Page Header */}
          <section className="container mx-auto px-4 md:px-8 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <div className="section-eyebrow">
                <Building size={12} />
                {language.code === 'ar' ? 'أكثر من ٧٠ مليون دولار ميزانيات مشاريع مدارة' : 'Over $70M in projects delivered'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-playfair text-foreground mb-5 leading-[1.1]">
                {language.code === 'ar' ? 'مشاريع وإنجازات الضيافة' : 'Signature Projects'}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-light font-sans">
                {language.code === 'ar'
                  ? 'سلسلة من المشروعات الفندقية الكبرى التي أشرفت على افتتاحها وتطويرها وإعادة تجديدها لصالح جهات مالكة وعلامات تجارية عالمية.'
                  : 'Transformative renovations, brand integrations, and pre-openings deployed across the MENA region.'}
              </p>
            </motion.div>
          </section>

          {/* Featured Project Billboard */}
          <section className="container mx-auto px-4 md:px-8 mb-20">
            <div className="mb-6 flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
              <h2 className="text-xs uppercase tracking-[0.2em] text-foreground font-bold font-sans">
                {ar ? 'المشروع الرئيسي المميز' : 'FEATURED FLAGSHIP KEY PROJECT'}
              </h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-sm border border-accent/20 overflow-hidden transition-colors duration-500 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

                {/* Image panel */}
                <div className="relative lg:col-span-7 xl:col-span-8 overflow-hidden min-h-[350px] md:min-h-[500px]">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Category overlay */}
                  <div className="absolute top-6 start-6 z-10">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider">
                      {ar ? 'إعادة هيكلة وتطوير شامل' : 'Asset Leadership'}
                    </span>
                  </div>

                  {/* Mobile header details */}
                  <div className="absolute bottom-6 start-6 end-6 text-white block lg:hidden">
                    <p className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-1">
                      {featuredProject.brand} • {featuredProject.period}
                    </p>
                    <h3 className="text-3xl font-playfair font-normal leading-tight">
                      {featuredProject.title}
                    </h3>
                  </div>
                </div>

                {/* Right details panel */}
                <div className="lg:col-span-5 xl:col-span-4 p-8 lg:p-10 flex flex-col justify-between bg-card border-t lg:border-t-0 lg:border-s border-border/40 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.015] to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="hidden lg:flex items-center gap-3 mb-4">
                      <span className={`inline-block px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider ${categoryColors[featuredProject.category]}`}>
                        {ar ? featuredProject.categoryAr : featuredProject.category}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-semibold">
                        <MapPin size={13} className="text-accent" />
                        {featuredProject.location}
                      </span>
                    </div>

                    <h3 className="hidden lg:block text-4xl xl:text-5xl font-playfair font-normal text-foreground mb-3 leading-[1.05]">
                      {featuredProject.title}
                    </h3>
                    
                    <p className="text-sm text-accent font-bold mb-6 font-sans">
                      {featuredProject.role}
                    </p>

                    {/* Stats Dashboard */}
                    <div className="grid grid-cols-3 gap-2 border-y border-border/50 py-5 mb-6">
                      {billboardStats.map((stat, i) => (
                        <div key={i} className={`text-center ${i === 1 ? 'border-x border-border/50 px-2' : ''}`}>
                          <div className="text-2xl md:text-3xl font-bold font-playfair text-accent">{stat.value}</div>
                          <div className="text-[9px] uppercase tracking-widest text-muted-foreground mt-1 font-semibold">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge / Outcome summary */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1.5">
                          {ar ? 'التحدي' : 'The Challenge'}
                        </h4>
                        <p className="text-sm text-foreground/85 leading-relaxed font-sans">
                          {billboardChallenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1.5">
                          {ar ? 'النتيجة' : 'The Outcome'}
                        </h4>
                        <p className="text-sm text-foreground/85 leading-relaxed font-sans">
                          {billboardOutcome}
                        </p>
                      </div>
                    </div>

                    {/* Key Results list */}
                    <div className="space-y-4 mb-8">
                      <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                        {ar ? 'أبرز الإنجازات والنتائج المحققة' : 'KEY AUDIT OUTCOMES'}
                      </h4>
                      <ul className="space-y-3">
                        {billboardResults.map((result, i) => (
                          <li key={i} className="flex items-start gap-3.5 text-sm text-foreground/90 leading-relaxed font-sans">
                            <ShieldCheck size={16} className="text-luxury-emerald mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Case Study Link */}
                  {featuredProject.caseStudySlug && (
                    <div className="pt-6 border-t border-border/40 relative z-10 flex">
                      <Link
                        to={`/projects/${featuredProject.caseStudySlug}`}
                        className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-accent-foreground hover:text-accent border border-border hover:border-accent/40 rounded-sm px-5 py-4 bg-transparent transition-colors duration-300"
                      >
                        <span>{ar ? 'اقرأ دراسة الحالة الكاملة' : 'Read Case Study Details'}</span>
                        <ArrowRight size={14} className={isRTL ? 'rotate-180' : ''} />
                      </Link>
                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          </section>

          {/* Filter Categories Segment */}
          <section className="container mx-auto px-4 md:px-8 mb-12">
            <div className="flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-bold">
                {ar ? 'تصفية المشاريع حسب التصنيف' : 'FILTER PORTFOLIO'}
              </p>
              <div className="flex flex-wrap gap-2.5 pb-4 border-b border-border/40">
                {categories.map((cat) => {
                  const isActive = activeFilter === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-4 py-2.5 rounded-sm text-xs font-bold tracking-wider uppercase transition-colors duration-300 border ${
                        isActive
                          ? 'bg-accent text-accent-foreground border-accent'
                          : 'bg-card text-muted-foreground hover:text-foreground border-border/50 hover:border-accent/30'
                      }`}
                    >
                      {categoryLabel(cat)}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Projects Portfolio Grid */}
          <section className="container mx-auto px-4 md:px-8">
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.length === 0 ? (
                  <motion.div 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="col-span-full py-16 text-center bg-card border border-border/40 rounded-sm"
                  >
                    <p className="text-muted-foreground">{ar ? 'لا توجد مشاريع مضافة في هذا القسم حالياً.' : 'No projects found in this category.'}</p>
                  </motion.div>
                ) : (
                  filteredProjects.map((project) => {
                    return (
                      <motion.div
                        layout
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-card rounded-sm border border-border/40 overflow-hidden hover:border-accent/40 transition-colors duration-500 flex flex-col"
                      >
                        {/* Image component */}
                        <div className="relative overflow-hidden aspect-[16/10]">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                          {/* Category chip */}
                          <div className="absolute top-4 start-4">
                            <span className={`inline-block px-3 py-1 rounded-sm text-[9px] font-bold uppercase tracking-wider ${categoryColors[project.category]}`}>
                              {ar ? project.categoryAr : project.category}
                            </span>
                          </div>
                        </div>

                        {/* Text component */}
                        <div className="p-6 md:p-8 flex flex-col justify-between flex-1 flex-grow">
                          <div>
                            <p className="text-[10px] text-accent font-bold mb-2 uppercase tracking-wider font-sans">
                              {project.role}
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">
                              {project.title}
                            </h3>

                            {/* Challenge statement */}
                            <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed font-sans">
                              {project.challenge}
                            </p>

                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground mb-6 pb-4 border-b border-border/30 font-sans">
                              <span className="flex items-center gap-1.5">
                                <MapPin size={13} className="text-accent" />
                                {project.location}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Calendar size={13} className="text-accent" />
                                {project.period}
                              </span>
                              {project.rooms && project.rooms > 0 && (
                                <span className="flex items-center gap-1.5">
                                  <Building size={13} className="text-accent" />
                                  {project.rooms} {ar ? 'غرفة' : 'Keys'}
                                </span>
                              )}
                            </div>

                            {/* Before / After metrics */}
                            {showBeforeAfter(project) && (
                              <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="rounded-sm border border-border/40 bg-background/50 p-3">
                                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-muted-foreground mb-1.5">
                                    <TrendingDown size={12} className="text-red-500" />
                                    {ar ? 'قبل' : 'Before'}
                                  </div>
                                  <p className="text-xs text-foreground/85 leading-snug font-sans">{project.before}</p>
                                </div>
                                <div className="rounded-sm border border-accent/30 bg-accent/5 p-3">
                                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-accent mb-1.5">
                                    <TrendingUp size={12} className="text-luxury-emerald" />
                                    {ar ? 'بعد' : 'After'}
                                  </div>
                                  <p className="text-xs text-foreground/85 leading-snug font-sans">{project.after}</p>
                                </div>
                              </div>
                            )}

                            <div className="space-y-3 font-sans">
                              {project.results.map((result, i) => (
                                <div key={i} className="flex items-start gap-3.5 text-xs sm:text-sm text-foreground/95 leading-relaxed">
                                  <ShieldCheck size={15} className="text-luxury-emerald mt-0.5 flex-shrink-0" />
                                  <span>{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {project.caseStudySlug && (
                            <div className="mt-8 pt-4 border-t border-border/30 flex font-sans">
                              <Link
                                to={`/projects/${project.caseStudySlug}`}
                                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent-foreground hover:text-accent transition-colors group/link"
                              >
                                <span>{ar ? 'اقرأ دراسة الحالة' : 'View Case Study'}</span>
                                <ArrowRight size={14} className={`transition-transform duration-300 group-hover/link:translate-x-0.5 ${isRTL ? 'rotate-180 group-hover/link:-translate-x-0.5' : ''}`} />
                              </Link>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </motion.div>

            <div className="text-center mt-16 font-sans">
              <Link to="/career">
                <Button variant="outline" className="rounded-sm px-8 py-6 text-base font-medium gap-2 border-border hover:border-accent transition-colors">
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

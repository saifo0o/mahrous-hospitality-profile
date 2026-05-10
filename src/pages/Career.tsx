
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building, Calendar, ChevronDown, Award, Briefcase, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import primeHotelsLogo from '@/assets/logos/prime-hotels.png';

type Experience = {
  position: string;
  company?: string;
  location?: string;
  period: string;
  rooms?: number;
  image?: string;
  current?: boolean;
  description: string;
  metrics?: { label: string; value: string }[];
  achievements?: string[];
};

const Career = () => {
  const [expandedExec, setExpandedExec] = useState<number | null>(null);
  const [expandedCons, setExpandedCons] = useState<number | null>(null);
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';

  // EXECUTIVE LEADERSHIP (full-time roles per resume)
  const executive: Experience[] = [
    {
      position: ar ? 'مدير عمليات المجموعة' : 'Group Operations Director',
      company: ar ? 'مجموعة فنادق برايم' : 'Prime Hotels Group',
      location: ar ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      period: ar ? 'ديسمبر 2025 - الحاضر' : 'Dec 2025 - Present',
      current: true,
      description: ar
        ? 'مسؤولية كاملة عن الأرباح والخسائر والحوكمة التشغيلية لمحفظة سعودية متعددة العلامات (فاخر، متوسط، شقق فندقية)، مع التقرير المباشر إلى الملكية والمجلس.'
        : 'Full P&L accountability and operational governance across a multi-brand Saudi portfolio (luxury, midscale, serviced apartments), reporting to ownership and the board.',
      metrics: [
        { label: ar ? 'محفظة' : 'Portfolio', value: ar ? 'متعددة العلامات' : 'Multi-Brand' },
        { label: ar ? 'الهدف 2030' : '2030 Target', value: ar ? '10,000 غرفة' : '10,000 Rooms' },
      ],
      achievements: ar
        ? [
            'إرساء مراجعة شهرية للأرباح والخسائر ولوحات قياس STR في الربع الأول كاشفة فرص تحسين التكلفة',
            'هندسة إطار حوكمة تشغيلية لتوسعة المحفظة إلى 10,000 غرفة بحلول 2030',
            'مواءمة أداء الأصول مع أهداف الاستثمار عبر تحليل المنافسة وأطر المساءلة',
            'تطوير أدلة ما قبل الافتتاح ومواسم الذروة لدعم خط أنابيب التوسع',
          ]
        : [
            'Established monthly P&L cadence and STR benchmarking dashboards in Q1, surfacing cost-optimisation opportunities',
            'Architected operational governance framework for portfolio expansion to 10,000 rooms by 2030',
            'Aligned asset performance with investment objectives through competitive set analysis and accountability frameworks',
            'Developed pre-opening and seasonal demand playbooks supporting the group expansion pipeline',
          ],
    },
    {
      position: ar ? "ممثل المالك (ما قبل الافتتاح)" : "Owner's Representative (Pre-Opening)",
      company: ar ? 'فور بوينتس باي شيراتون - طريق الملك عبدالعزيز' : 'Four Points by Sheraton, King Abdulaziz Road',
      location: ar ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      period: ar ? 'أبريل 2023 - يوليو 2025' : 'Apr 2023 - Jul 2025',
      rooms: 172,
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/caption_kgnuht.jpg',
      description: ar
        ? 'إدارة دورة التطوير وما قبل الافتتاح كاملةً نيابةً عن الملكية لمشروع ماريوت جديد بـ172 غرفة، مع الالتزام بمعايير العلامة وميزانية رأس المال.'
        : 'Managed full development and pre-opening cycle on behalf of ownership for a 172-room Marriott new-build, with brand compliance, timeline adherence and capital budget discipline.',
      metrics: [
        { label: ar ? 'غرف' : 'Rooms', value: '172' },
        { label: ar ? 'الميزانية' : 'Budget', value: '−12%' },
        { label: ar ? 'الفريق' : 'Team', value: '150+' },
      ],
      achievements: ar
        ? [
            'تخفيض ميزانية ما قبل الافتتاح بنسبة 12٪ عبر التفاوض على المشتريات مع الالتزام بمواصفات FF&E من ماريوت',
            'توظيف وتأهيل أكثر من 150 موظفاً قبل الافتتاح',
            'حل مسائل تقنية وتصميمية حرجة، مع التسليم في الموعد وضمن ميزانية رأس المال',
          ]
        : [
            'Achieved −12% pre-opening budget reduction via vendor and procurement negotiation while maintaining full Marriott FF&E specifications',
            'Recruited and onboarded 150+ pre-opening staff',
            'Resolved critical technical and design issues, delivering on schedule and within capital budget',
          ],
    },
    {
      position: ar ? 'المدير العام' : 'General Manager',
      company: ar ? 'فندق شيراتون المنتزه - ماريوت إنترناشيونال' : 'Sheraton Montazah Hotel, Marriott International',
      location: ar ? 'الإسكندرية، مصر' : 'Alexandria, Egypt',
      period: ar ? 'يونيو 2014 - مارس 2023' : 'Jun 2014 - Mar 2023',
      rooms: 288,
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/2025-05-31_nclbzr.webp',
      description: ar
        ? 'مدير عام (2021-2023)، مدير الفندق المسؤول (2015-2020)، نائب المدير العام (2014-2015). 9 سنوات بمسؤولية كاملة عن الأرباح والخسائر، ختمت بأكبر تجديد في تاريخ الفندق الممتد لـ40 عاماً.'
        : 'General Manager (2021-2023), Hotel Manager in Charge (2015-2020), Deputy GM (2014-2015). 9-year tenure with full P&L accountability, culminating in the most comprehensive renovation in the property\'s 40-year history.',
      metrics: [
        { label: 'RevPAR', value: '+25%' },
        { label: ar ? 'الرضا' : 'Satisfaction', value: '+30%' },
        { label: ar ? 'الطاقة' : 'Energy', value: '−15%' },
        { label: ar ? 'الصيانة' : 'Maintenance', value: '−20%' },
      ],
      achievements: ar
        ? [
            '+25٪ نمو في RevPAR و+30٪ ارتفاع في رضا الضيوف عبر 9 سنوات تنفيذية',
            '−15٪ تكاليف الطاقة و−20٪ نفقات الصيانة عبر تحديث البنية التحتية بالكامل (غلايات، محولات، مولدات، مبردات، السلامة، تجديد المطابخ)',
            'التفوق على المنافسين في المنطقة عبر دورات سوق متعددة باستخدام لوحات قياس STR',
          ]
        : [
            '+25% RevPAR growth and +30% guest-satisfaction uplift over a 9-year tenure',
            '−15% energy costs and −20% maintenance spend via full infrastructure modernization (boilers, transformers, generators, chillers, fire/life safety, complete kitchen renovation)',
            'Outperformed Marriott Egypt competitive set across multiple market cycles using STR benchmarking',
          ],
    },
    {
      position: ar ? 'مدير عام مسؤول عن التميز التشغيلي' : 'GM in Charge of Operational Excellence',
      company: ar ? 'مجلس مدراء عموم ماريوت مصر' : 'Marriott Egypt General Managers Council',
      location: ar ? 'منطقة مصر' : 'Egypt Region',
      period: '2018 - 2022',
      description: ar
        ? 'المدير العام الوحيد الذي عيّنته ماريوت إنترناشيونال لقيادة التميز التشغيلي عبر محفظة مصر بأكملها (19 عقاراً، أكثر من 3,000 غرفة).'
        : 'Sole GM appointed by Marriott International to lead operational excellence across the entire Egypt portfolio (19 properties, 3,000+ rooms).',
      metrics: [
        { label: ar ? 'عقارات' : 'Properties', value: '19' },
        { label: ar ? 'غرف' : 'Rooms', value: '3,000+' },
        { label: ar ? 'الرضا' : 'Satisfaction', value: '+10%' },
      ],
      achievements: ar
        ? [
            '+10٪ في رضا الضيوف على مستوى المحفظة و+8٪ في إيرادات الأطعمة والمشروبات خلال 18 شهراً',
            '+3٪ متوسط RevPAR عبر جميع العقارات الـ19',
            'تيسير مراجعات الأداء الفصلية وجلسات التخطيط الاستراتيجي على مستوى المحفظة',
          ]
        : [
            '+10% aggregate guest satisfaction and +8% F&B revenue within 18 months via portfolio-wide standardized service protocols and SOP rollout',
            '+3% average RevPAR increase across all 19 properties through cross-property best-practice sharing',
            'Facilitated quarterly performance reviews and strategic planning sessions portfolio-wide',
          ],
    },
    {
      position: ar ? 'نائب المدير العام المسؤول' : 'Deputy General Manager in Charge',
      company: ar ? 'منتجع شيراتون ميرامار' : 'Sheraton Miramar Resort',
      location: ar ? 'الجونة، الغردقة، مصر' : 'El Gouna, Hurghada, Egypt',
      period: ar ? 'يوليو 2011 - يونيو 2014' : 'Jul 2011 - Jun 2014',
      rooms: 339,
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749614476/si-hrgsi-bridges-lagoons-ext-11832-83257_Feature-Hor_xgnwfh.jpg',
      description: ar
        ? 'تنفيذ تجديد متدرج بقيمة 5 مليون دولار مع استمرارية تشغيلية كاملة وإعادة تموضع استراتيجية.'
        : 'Delivered a $5M phased refurbishment with full operational continuity and strategic repositioning.',
      metrics: [
        { label: 'ADR', value: '+15%' },
        { label: ar ? 'الإشغال' : 'Occupancy', value: '+8%' },
        { label: ar ? 'الرواتب' : 'Payroll', value: '−7%' },
      ],
      achievements: ar
        ? [
            '+12٪ تحسن في رضا الضيوف ونمو الإيرادات بعد التجديد',
            '+15٪ في ADR و+8٪ في الإشغال خلال السنة الأولى بعد التجديد',
            '−7٪ في نفقات الرواتب عبر التدريب المتقاطع وتحسين الجدولة',
          ]
        : [
            '+12% guest-satisfaction improvement and post-renovation revenue growth',
            '+15% ADR and +8% occupancy gain in year one post-renovation',
            '−7% payroll expenses through cross-training and scheduling optimization',
          ],
    },
    {
      position: ar ? 'مساعد المدير التنفيذي العنقودي (ما قبل الافتتاح)' : 'Cluster Executive Assistant Manager (Pre-Opening)',
      company: ar ? 'فور بوينتس وشيراتون طرابلس' : 'Four Points & Sheraton Tripoli',
      location: ar ? 'طرابلس، ليبيا' : 'Tripoli, Libya',
      period: ar ? 'ديسمبر 2009 - يونيو 2011' : 'Dec 2009 - Jun 2011',
      rooms: 718,
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749614237/Four_Points_by_Sheraton_Hotel_Tripoli_Libya_qalags.jpg',
      description: ar
        ? 'افتتاح عنقودي مزدوج العلامة بـ718 غرفة في شمال أفريقيا تحت ظروف سياسية صعبة، مع إرساء أنظمة وفقاً لمعايير ستاروود الدولية.'
        : '718-room dual-brand cluster pre-opening in North Africa under challenging political conditions, with systems established to Starwood international brand standards.',
      metrics: [
        { label: ar ? 'الجاهزية' : 'Readiness', value: '95%' },
        { label: ar ? 'غرف' : 'Rooms', value: '718' },
      ],
    },
    {
      position: ar ? 'مدير الابتكار التشغيلي / نائب مدير خدمات الضيوف' : 'Director of Operational Innovation / Deputy Director of Guest Services',
      company: ar ? 'منتجع شيراتون ميرامار' : 'Sheraton Miramar Resort',
      location: ar ? 'الجونة، الغردقة، مصر' : 'El Gouna, Hurghada, Egypt',
      period: ar ? 'يونيو 2003 - نوفمبر 2009' : 'Jun 2003 - Nov 2009',
      description: ar
        ? 'أول مدير للابتكار التشغيلي في منطقة AFIO، مع 4 ممارسات معتمدة صُدّرت إلى قسم أوروبا وأفريقيا والشرق الأوسط في ماريوت.'
        : 'First Director of Operational Innovation in the AFIO region, with 4 certified Best Practices exported to Marriott\'s EMEA Division.',
      achievements: ar
        ? [
            'أفضل مدير للابتكار التشغيلي - منطقة AFIO (2007)',
            'مدرّب الابتكار التشغيلي عبر 5 عقارات في مصر والمغرب',
            '4 مشاريع Six Sigma DMAIC تجاوزت جميع الميزانيات والمعايير المالية (2004-2006)',
            'أفضل نمو هامش EBITDA في قسم ماريوت EMEA (2003)',
          ]
        : [
            'Best Director of Operational Innovation, AFIO Region (2007)',
            'Operational Innovation Coach across 5 properties in Egypt and Morocco',
            '4 Six Sigma DMAIC projects (2004-2006) exceeding all financial budgets and Six Sigma criteria',
            'Best EBITDA Margin Growth, Marriott EMEA Division (2003)',
          ],
    },
    {
      position: ar ? 'مهام EAM لما قبل الافتتاح (فرق المهام)' : 'Task Force Pre-Opening EAM Mandates',
      company: ar ? 'لو ميريديان أبراج مكة + شيراتون غامبيا' : 'Le Meridien Makkah Towers + Sheraton Gambia',
      location: ar ? 'مكة المكرمة، السعودية / غامبيا' : 'Makkah, KSA / The Gambia',
      period: '2008',
      description: ar
        ? 'مهام متخصصة دولية لمدة 3 أشهر تقدم خبرة EAM لافتتاح كبار: لو ميريديان أبراج مكة (1,323 غرفة) وشيراتون غامبيا (181 غرفة).'
        : '3-month international specialist mandates providing pre-opening EAM expertise: Le Meridien Makkah Towers (1,323 rooms) and Sheraton Gambia (181 rooms).',
      metrics: [
        { label: ar ? 'مكة' : 'Makkah', value: '1,323' },
        { label: ar ? 'غامبيا' : 'Gambia', value: '181' },
      ],
    },
    {
      position: ar ? 'التقدم المهني المبكر' : 'Early Career Progression',
      period: '1993 - 2004',
      description: ar
        ? 'تقدم تدريجي من موظف استقبال إلى مساعد مدير المكتب الأمامي عبر علامات دولية في الإمارات (دبي) ومصر. مساهمة في افتتاح سيتي سنتر سوفيتيل دبي (1998). جائزة أفضل مدرب - إنتركونتيننتال الغردقة (2000). Six Sigma Green Belt قبل الترقية إلى Black Belt.'
        : 'Progressive advancement from Front Office Agent to Assistant Director of Front Office across international brands in UAE (Dubai) and Egypt. Pre-opening contribution at City Centre Sofitel Dubai (1998). Best Trainer Award, Hurghada InterContinental (2000). Six Sigma Green Belt prior to Black Belt certification.',
    },
  ];

  // INDEPENDENT CONSULTING (per resume)
  const consulting: Experience[] = [
    {
      position: ar ? 'مستشار مستقل لتحويل العلامة التجارية' : 'Independent Brand Conversion Consultant',
      company: ar ? 'كراون بلازا ميراج - آي إتش جي' : 'Crowne Plaza Mirage by IHG',
      location: ar ? 'الإسكندرية، مصر' : 'Alexandria, Egypt',
      period: ar ? 'أغسطس - ديسمبر 2025' : 'Aug - Dec 2025',
      rooms: 96,
      image: '/images/crowne-plaza-alexandria.jpg',
      description: ar
        ? 'تكليف من المُلّاك لتنفيذ تحويل كامل لعلامة كراون بلازا من خط بداية صفر، خلال 4 أشهر، لعقار مستقل بـ96 غرفة.'
        : 'Engaged by ownership to deliver full IHG Crowne Plaza brand conversion within 4 months from a zero brand baseline, transitioning a 96-room independent property to fully compliant IHG standards.',
      metrics: [
        { label: ar ? 'غرف' : 'Rooms', value: '96' },
        { label: ar ? 'المدة' : 'Timeline', value: ar ? '4 أشهر' : '4 months' },
        { label: ar ? 'الامتثال' : 'Compliance', value: '100%' },
      ],
      achievements: ar
        ? [
            'نشر Opera Cloud PMS و Concerto لإدارة الإيرادات وأنظمة التعرف على الضيوف من IHG',
            'تصميم وتسليم منهج تدريب كامل لثقافة خدمة IHG وتدقيق الجودة',
            'تحقيق جاهزية تدقيق العلامة في الوقت المحدد دون أي اضطراب أمام الضيوف',
            'مستشار رئيسي للملكية وحلقة الوصل الأساسية مع IHG',
          ]
        : [
            'Deployed Opera Cloud PMS, Concerto revenue management, and IHG guest-recognition systems across all departments',
            'Designed and delivered full staff retraining curriculum for IHG service culture and quality audit standards',
            'Achieved brand-audit readiness on schedule with zero guest-facing disruption',
            'Principal liaison with IHG corporate; advised ownership on franchise compliance and post-conversion strategy',
          ],
    },
    {
      position: ar ? 'مستشار مستقل لتحويل المسار والتجديد' : 'Independent Turnaround & Renovation Consultant',
      company: ar ? 'منتجع بورسعيد' : 'Porto Said Resort',
      location: ar ? 'بورسعيد، مصر' : 'Port Said, Egypt',
      period: ar ? 'أبريل - أغسطس 2024' : 'Apr - Aug 2024',
      rooms: 168,
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/377246827_sqf4sq.jpg',
      description: ar
        ? 'تكليف من الملكية لتقديم استشارة تحويل المسار والتجديد لعقار 168 غرفة ومول تجزئة بـ24 منفذاً.'
        : 'Engaged by ownership to deliver turnaround and renovation consultancy for a 168-room property and 24-outlet retail mall.',
      metrics: [
        { label: ar ? 'الإشغال' : 'Occupancy', value: '+18%' },
        { label: 'F&B', value: '+20%' },
        { label: ar ? 'الكفاءة' : 'Efficiency', value: '+15%' },
        { label: ar ? 'الرضا' : 'Satisfaction', value: '+30%' },
      ],
      achievements: ar
        ? [
            '+18٪ نمو في الإشغال و+20٪ في إيرادات F&B وعودة إلى GOP إيجابي خلال 4 أشهر',
            'تجاوز معايير ROI لتجديدات مصر بـ10 نقاط، قبل خطة الملكية لنقطة التعادل',
            '+15٪ كفاءة تشغيلية و+30٪ رضا الضيوف عبر إعادة هيكلة فريق من 200+ شخص',
            'إعادة تموضع العقار ضمن المنافسين في بورسعيد',
          ]
        : [
            '+18% occupancy growth, +20% F&B revenue, and return to positive GOP within 4 months',
            'Outperformed Egyptian renovation ROI benchmarks by 10 points, ahead of ownership\'s breakeven plan',
            '+15% operational efficiency and +30% guest satisfaction via restructuring of a 200+ person team',
            'Repositioned the property within the Port Said competitive set',
          ],
    },
    {
      position: ar ? 'مستشار مستقل لما قبل الافتتاح' : 'Independent Pre-Opening Consultant',
      company: ar ? 'منتجع ذا في الفاخر - سهل حشيش' : 'The V Luxury Resort Sahl Hasheesh',
      location: ar ? 'الغردقة، مصر' : 'Hurghada, Egypt',
      period: ar ? 'مايو 2023 - مارس 2024' : 'May 2023 - Mar 2024',
      rooms: 298,
      image: 'https://res.cloudinary.com/dt6hz3295/image/upload/v1749613983/photo-hurghada-18_krbjex.jpg',
      description: ar
        ? 'استشارة شاملة لما قبل الافتتاح لمنتجع فاخر بـ298 غرفة، مع توفير استشارات شاملة في استراتيجية التوظيف، تنفيذ PMS، نشر معايير العلامة، وتخطيط الإطلاق التجاري.'
        : 'Full pre-opening consultancy for a 298-room luxury resort: end-to-end advisory across staffing strategy, PMS implementation, brand standards deployment, and commercial launch planning.',
      metrics: [
        { label: ar ? 'الإشغال' : 'Occupancy', value: '90%' },
        { label: ar ? 'المدة' : 'Timeline', value: ar ? '4 أشهر' : '4 months' },
        { label: ar ? 'الرضا' : 'Satisfaction', value: '+12%' },
      ],
      achievements: ar
        ? [
            '90٪ إشغال خلال 4 أشهر من الإطلاق - متفوقاً على معيار الصناعة (12-18 شهر) لاستقرار الفئة الفاخرة',
            'استراتيجية تموضع تنافسية لممر البحر الأحمر الفاخر',
            '+12٪ في رضا الضيوف خلال الربع الافتتاحي عبر برنامج ثقافة خدمة مخصص',
            'منهج تدريب مخصص لـ300+ عضو فريق ما قبل الافتتاح',
          ]
        : [
            '90% occupancy within 4 months of launch — outperforming the 12-18 month industry standard for luxury-segment stabilisation',
            'Competitive positioning strategy for the Red Sea luxury corridor',
            '+12% guest satisfaction in the opening quarter via a bespoke service-culture programme',
            'Custom training curriculum built for 300+ pre-opening team members',
          ],
    },
  ];

  const renderTimeline = (items: Experience[], expanded: number | null, setExpanded: (i: number | null) => void, keyPrefix: string) => (
    <div className="max-w-4xl mx-auto relative">
      <div className={`absolute ${isRTL ? 'right-6 md:right-8' : 'left-6 md:left-8'} top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent`} />

      <div className="space-y-8">
        {items.map((exp, index) => (
          <motion.div
            key={`${keyPrefix}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`relative ${isRTL ? 'pr-16 md:pr-20' : 'pl-16 md:pl-20'}`}
          >
            <div className={`absolute ${isRTL ? 'right-4 md:right-6' : 'left-4 md:left-6'} top-6 w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-accent border-accent' : 'bg-card border-border'} z-10`} />

            <div className={`bg-card rounded-xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-md ${expanded === index ? 'shadow-md ring-1 ring-accent/20' : ''}`}>
              {exp.image && (
                <div className="h-48 overflow-hidden">
                  <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    {exp.current && (
                      <img src={primeHotelsLogo} alt="Prime Hotels" className="w-10 h-10 object-contain rounded-lg" />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.position}</h3>
                      {exp.company && <p className="text-sm font-medium text-accent-foreground">{exp.company}</p>}
                    </div>
                  </div>
                  {exp.current && (
                    <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent-foreground text-xs font-medium flex-shrink-0">
                      {ar ? 'حالياً' : 'Current'}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                  {exp.location && <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>}
                  <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
                  {exp.rooms && <span className="flex items-center gap-1"><Building size={12} />{exp.rooms} {ar ? 'غرفة' : 'rooms'}</span>}
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

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

                {exp.achievements && exp.achievements.length > 0 && (
                  <>
                    <button
                      onClick={() => setExpanded(expanded === index ? null : index)}
                      className="flex items-center gap-1.5 text-xs font-medium text-accent-foreground hover:text-accent-foreground/80 transition-colors"
                    >
                      {ar ? 'الإنجازات الرئيسية' : 'Key Achievements'}
                      <ChevronDown size={14} className={`transition-transform ${expanded === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {expanded === index && (
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
  );

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
        <Navbar />

        <main className="flex-grow pt-28 pb-20">
          {/* Header */}
          <section className="container mx-auto px-4 md:px-8 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-accent/60" />
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-bold flex items-center gap-1.5">
                  <Calendar size={12} />
                  {ar ? '+30 عامًا • 6 دول • 7 علامات دولية' : '30+ Years • 6 Countries • 7 International Brands'}
                </p>
                <span className="h-px w-8 bg-accent/60" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground mb-5 leading-[1.1]">
                {ar ? 'المسيرة المهنية' : 'Career Journey'}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {ar
                  ? 'مدير ضيافة دولي عبر دول الخليج وشمال أفريقيا والشام و EMEA. خبرة تشغيلية ممتدة مع ماريوت، آي إتش جي، ستاروود، أكور، وعلامات الفخامة المستقلة.'
                  : 'International hospitality executive across the GCC, North Africa, the Levant and broader EMEA — with Marriott International, IHG, Starwood, Accor and independent luxury brands.'}
              </p>
            </motion.div>
          </section>

          {/* Executive Leadership */}
          <section className="container mx-auto px-4 md:px-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={20} className="text-accent" />
                <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold">
                  {ar ? 'الفصل الأول' : 'Chapter One'}
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
                {ar ? 'القيادة التنفيذية' : 'Executive Leadership'}
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                {ar
                  ? 'أدوار تنفيذية بدوام كامل عبر علامات الضيافة الدولية الرائدة.'
                  : 'Full-time executive mandates across leading international hospitality brands.'}
              </p>
            </motion.div>
            {renderTimeline(executive, expandedExec, setExpandedExec, 'exec')}
          </section>

          {/* Independent Consulting */}
          <section className="bg-muted/30 border-y border-border/50 py-20 mb-16">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto mb-10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Users size={20} className="text-accent" />
                  <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold">
                    {ar ? 'الفصل الثاني' : 'Chapter Two'}
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
                  {ar ? 'الاستشارات المستقلة والتوصيات' : 'Independent Consulting & Advisory'}
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  {ar
                    ? 'مهام جانب الملكية عبر تحويل العلامة، تحويل المسار، وما قبل الافتتاح الفاخر.'
                    : 'Owner-side mandates across brand conversion, turnaround, and luxury pre-opening.'}
                </p>
              </motion.div>
              {renderTimeline(consulting, expandedCons, setExpandedCons, 'cons')}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link to="/awards">
              <Button variant="outline" className="rounded-xl px-8 py-6 text-base font-medium gap-2 border-border hover:border-accent transition-all">
                <Award size={16} />
                {ar ? 'شاهد الجوائز والتقدير' : 'View Awards & Recognition'}
              </Button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Career;

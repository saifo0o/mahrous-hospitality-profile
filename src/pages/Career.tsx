
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Building,
  Calendar,
  ChevronDown,
  Award,
  Users,
  ShieldCheck,
  Sparkles,
  Compass,
  TrendingUp,
  Crown,
  Rocket,
  Briefcase,
} from 'lucide-react';
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
  current?: boolean;
  description: string;
  metrics?: { label: string; value: string }[];
  achievements?: string[];
};

type Chapter = {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  roles: Experience[];
};

const Career = () => {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';

  // ---------------------------------------------------------------------
  // CHAPTER 1 — FOUNDATION (1993 - 2009)
  // ---------------------------------------------------------------------
  const foundationRoles: Experience[] = [
    {
      position: ar ? 'التقدم المهني المبكر' : 'Early Career Progression',
      period: '1993 - 2004',
      description: ar
        ? 'تقدم تدريجي من موظف استقبال إلى مساعد مدير المكتب الأمامي عبر علامات دولية في الإمارات (دبي) ومصر. مساهمة في افتتاح سيتي سنتر سوفيتيل دبي (1998). جائزة أفضل مدرب - إنتركونتيننتال الغردقة (2000). Six Sigma Green Belt قبل الترقية إلى Black Belt.'
        : 'Progressive advancement from Front Office Agent to Assistant Director of Front Office across international brands in UAE (Dubai) and Egypt. Pre-opening contribution at City Centre Sofitel Dubai (1998). Best Trainer Award, Hurghada InterContinental (2000). Six Sigma Green Belt prior to Black Belt certification.',
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
      position: ar ? 'مساعد المدير التنفيذي العنقودي (ما قبل الافتتاح)' : 'Cluster Executive Assistant Manager (Pre-Opening)',
      company: ar ? 'فور بوينتس وشيراتون طرابلس' : 'Four Points & Sheraton Tripoli',
      location: ar ? 'طرابلس، ليبيا' : 'Tripoli, Libya',
      period: ar ? 'ديسمبر 2009 - يونيو 2011' : 'Dec 2009 - Jun 2011',
      rooms: 718,
      description: ar
        ? 'افتتاح عنقودي مزدوج العلامة بـ718 غرفة في شمال أفريقيا تحت ظروف سياسية صعبة، مع إرساء أنظمة وفقاً لمعايير ستاروود الدولية.'
        : '718-room dual-brand cluster pre-opening in North Africa under challenging political conditions, with systems established to Starwood international brand standards.',
      metrics: [
        { label: ar ? 'الجاهزية' : 'Readiness', value: '95%' },
        { label: ar ? 'غرف' : 'Rooms', value: '718' },
      ],
    },
  ];

  // ---------------------------------------------------------------------
  // CHAPTER 2 — TURNAROUND & ASSET LEADERSHIP (2011 - 2014)
  // ---------------------------------------------------------------------
  const turnaroundRoles: Experience[] = [
    {
      position: ar ? 'نائب المدير العام المسؤول' : 'Deputy General Manager in Charge',
      company: ar ? 'منتجع شيراتون ميرامار' : 'Sheraton Miramar Resort',
      location: ar ? 'الجونة، الغردقة، مصر' : 'El Gouna, Hurghada, Egypt',
      period: ar ? 'يوليو 2011 - يونيو 2014' : 'Jul 2011 - Jun 2014',
      rooms: 339,
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
  ];

  // ---------------------------------------------------------------------
  // CHAPTER 3 — THE MONTAZAH ERA (2014 - 2023)
  // ---------------------------------------------------------------------
  const montazahRoles: Experience[] = [
    {
      position: ar ? 'المدير العام' : 'General Manager',
      company: ar ? 'فندق شيراتون المنتزه - ماريوت إنترناشيونال' : 'Sheraton Montazah Hotel, Marriott International',
      location: ar ? 'الإسكندرية، مصر' : 'Alexandria, Egypt',
      period: ar ? 'يونيو 2014 - مارس 2023' : 'Jun 2014 - Mar 2023',
      rooms: 288,
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
  ];

  // ---------------------------------------------------------------------
  // CHAPTER 4 — PRE-OPENING & SCALE (2023 - 2025)
  // ---------------------------------------------------------------------
  const scaleRoles: Experience[] = [
    {
      position: ar ? "ممثل المالك (ما قبل الافتتاح)" : "Owner's Representative (Pre-Opening)",
      company: ar ? 'فور بوينتس باي شيراتون - طريق الملك عبدالعزيز' : 'Four Points by Sheraton, King Abdulaziz Road',
      location: ar ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      period: ar ? 'أبريل 2023 - يوليو 2025' : 'Apr 2023 - Jul 2025',
      rooms: 172,
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
      position: ar ? 'مستشار مستقل لما قبل الافتتاح' : 'Independent Pre-Opening Consultant',
      company: ar ? 'منتجع ذا في الفاخر - سهل حشيش' : 'The V Luxury Resort Sahl Hasheesh',
      location: ar ? 'الغردقة، مصر' : 'Hurghada, Egypt',
      period: ar ? 'مايو 2023 - مارس 2024' : 'May 2023 - Mar 2024',
      rooms: 298,
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

  // ---------------------------------------------------------------------
  // CHAPTER 5 — PORTFOLIO & INDEPENDENT CONSULTING (2025 - 2026)
  // ---------------------------------------------------------------------
  const portfolioRoles: Experience[] = [
    {
      position: ar ? 'مدير عمليات المجموعة' : 'Group Operations Director',
      company: ar ? 'مجموعة فنادق برايم' : 'Prime Hotels Group',
      location: ar ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      period: ar ? 'ديسمبر 2025 - مايو 2026' : 'Dec 2025 - May 2026',
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
      position: ar ? 'مستشار مستقل لتحويل العلامة التجارية' : 'Independent Brand Conversion Consultant',
      company: ar ? 'كراون بلازا ميراج - آي إتش جي' : 'Crowne Plaza Mirage by IHG',
      location: ar ? 'الإسكندرية، مصر' : 'Alexandria, Egypt',
      period: ar ? 'أغسطس - ديسمبر 2025' : 'Aug - Dec 2025',
      rooms: 96,
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
  ];

  const chapters: Chapter[] = [
    {
      number: '01',
      title: ar ? 'التأسيس' : 'Foundation',
      subtitle: ar
        ? '1993-2009 · من موظف استقبال إلى مدرّب ابتكار تشغيلي معتمد دولياً'
        : '1993-2009 · From front-desk agent to an internationally certified innovation coach',
      icon: Compass,
      roles: foundationRoles,
    },
    {
      number: '02',
      title: ar ? 'تحويل المسار وقيادة الأصول' : 'Turnaround & Asset Leadership',
      subtitle: ar
        ? '2011-2014 · قيادة تجديد بقيمة 5 مليون دولار مع استمرارية تشغيلية كاملة'
        : '2011-2014 · Leading a $5M renovation while keeping the resort fully operational',
      icon: TrendingUp,
      roles: turnaroundRoles,
    },
    {
      number: '03',
      title: ar ? 'حقبة المنتزه' : 'The Montazah Era',
      subtitle: ar
        ? '2014-2023 · تسع سنوات في القيادة العامة ختمت بأكبر تجديد في تاريخ الفندق'
        : '2014-2023 · Nine years at the helm, culminating in the property\'s largest-ever renovation',
      icon: Crown,
      roles: montazahRoles,
    },
    {
      number: '04',
      title: ar ? 'ما قبل الافتتاح والتوسع' : 'Pre-Opening & Scale',
      subtitle: ar
        ? '2023-2025 · قيادة افتتاحات جديدة نيابة عن الملاك عبر السعودية ومصر'
        : '2023-2025 · Leading new-build pre-openings on behalf of ownership across KSA and Egypt',
      icon: Rocket,
      roles: scaleRoles,
    },
    {
      number: '05',
      title: ar ? 'المحفظة والاستشارات المستقلة' : 'Portfolio & Independent Consulting',
      subtitle: ar
        ? '2025-2026 · قيادة محفظة متعددة العلامات ومهام استشارية مستقلة عبر المنطقة'
        : '2025-2026 · Leading a multi-brand portfolio alongside independent advisory mandates',
      icon: Briefcase,
      roles: portfolioRoles,
    },
  ];

  const [activeChapter, setActiveChapter] = useState(0);

  const leadershipPrinciples = [
    {
      icon: ShieldCheck,
      title: ar ? 'التميز التشغيلي' : 'Operational Excellence',
      description: ar
        ? 'انضباط في الأرباح والخسائر، ومعايير SOP، وحوكمة الأصول عبر كل محفظة.'
        : 'P&L discipline, SOP rigor, and asset governance carried across every portfolio.',
    },
    {
      icon: Users,
      title: ar ? 'محورية الضيف' : 'Guest Centricity',
      description: ar
        ? 'رفع رضا الضيوف بشكل مستدام عبر ثقافة خدمة مصممة خصيصاً لكل علامة.'
        : 'Sustained satisfaction gains through service cultures tailored to each brand.',
    },
    {
      icon: Award,
      title: ar ? 'رعاية المواهب' : 'Talent Mentorship',
      description: ar
        ? 'بناء وتأهيل وتدريب فرق تضم مئات الموظفين عبر أسواق ومهام متعددة.'
        : 'Building, onboarding and coaching teams of hundreds across markets and mandates.',
    },
    {
      icon: Sparkles,
      title: ar ? 'التحسين المستمر' : 'Continuous Improvement',
      description: ar
        ? 'منهجية Kaizen وSix Sigma لتحويل الفرص التشغيلية إلى نتائج مالية قابلة للقياس.'
        : 'Kaizen and Six Sigma methodology turning operational opportunity into measurable results.',
    },
  ];

  const renderCard = (exp: Experience, chapterIdx: number, index: number) => {
    const key = `${chapterIdx}-${index}`;
    const isItemExpanded = expandedKey === key;
    const hasDetail = !!(exp.achievements && exp.achievements.length > 0);
    const toggle = () => hasDetail && setExpandedKey(isItemExpanded ? null : key);

    return (
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`relative group/card ${isRTL ? 'md:pr-14' : 'md:pl-14'}`}
      >
        {/* Timeline node — pulses into the accent on hover/expand */}
        <div
          className={`hidden md:flex absolute ${isRTL ? 'right-3' : 'left-3'} top-7 w-6 h-6 rounded-full border-2 bg-card items-center justify-center z-10 transition-all duration-300 ${
            exp.current || isItemExpanded
              ? 'border-accent shadow-[0_0_14px_hsl(var(--accent)/0.45)] scale-110'
              : 'border-border group-hover/card:border-accent group-hover/card:scale-110'
          }`}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              exp.current ? 'bg-accent animate-pulse' : 'bg-transparent group-hover/card:bg-accent/60'
            }`}
          />
        </div>

        {/* Card */}
        <div
          className={`relative bg-card rounded-sm border overflow-hidden w-full transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-md ${
            isItemExpanded ? 'border-accent/45 shadow-gold-sm' : 'border-border hover:border-accent/35'
          }`}
        >
          {/* Accent rail that grows on hover / expand */}
          <span
            className={`absolute inset-y-0 ${isRTL ? 'right-0' : 'left-0'} w-[3px] bg-accent origin-top transition-transform duration-500 ${
              exp.current || isItemExpanded ? 'scale-y-100' : 'scale-y-0 group-hover/card:scale-y-100'
            }`}
          />

          {/* Clickable header */}
          <div
            role={hasDetail ? 'button' : undefined}
            tabIndex={hasDetail ? 0 : undefined}
            aria-expanded={hasDetail ? isItemExpanded : undefined}
            onClick={toggle}
            onKeyDown={(e) => {
              if (hasDetail && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                toggle();
              }
            }}
            className={`p-5 md:p-7 ${hasDetail ? 'cursor-pointer' : ''} focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50`}
          >
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-border/30">
              <div className="flex items-center gap-3 min-w-0">
                {exp.current && (
                  <div className="p-1 rounded-sm border border-border/30 bg-muted/30 shrink-0">
                    <img src={primeHotelsLogo} alt="Prime Hotels" className="w-10 h-10 object-contain rounded-sm" />
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover/card:text-accent transition-colors duration-300">
                    {exp.position}
                  </h3>
                  {exp.company && <p className="text-sm font-semibold text-accent mt-0.5">{exp.company}</p>}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {exp.current && (
                  <span className="px-3 py-1.5 rounded-sm bg-accent/15 text-accent-foreground text-[10px] font-bold uppercase tracking-wider">
                    {ar ? 'حالياً' : 'Current'}
                  </span>
                )}
                {hasDetail && (
                  <span
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isItemExpanded
                        ? 'border-accent text-accent rotate-180 bg-accent/10'
                        : 'border-border text-muted-foreground group-hover/card:border-accent group-hover/card:text-accent'
                    }`}
                  >
                    <ChevronDown size={15} />
                  </span>
                )}
              </div>
            </div>

            {/* Metadata line */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground mb-4">
              {exp.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-accent" />
                  {exp.location}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-accent" />
                {exp.period}
              </span>
              {exp.rooms && (
                <span className="flex items-center gap-1.5">
                  <Building size={13} className="text-accent" />
                  {exp.rooms} {ar ? 'غرفة' : 'Keys'}
                </span>
              )}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed font-light">{exp.description}</p>

            {/* Metric chips */}
            {exp.metrics && exp.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                {exp.metrics.slice(0, 4).map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    className="p-3.5 rounded-sm bg-muted/40 border border-border/20 text-center transition-all duration-300 hover:bg-accent/[0.06] hover:border-accent/30 hover:-translate-y-0.5"
                  >
                    <p className="text-base font-bold font-playfair text-foreground">{m.value}</p>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">{m.label}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {hasDetail && !isItemExpanded && (
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent/80 group-hover/card:text-accent transition-colors">
                {ar ? 'اضغط لعرض الإنجازات' : 'Tap to reveal key achievements'}
              </p>
            )}
          </div>

          {/* Expandable achievements */}
          <AnimatePresence initial={false}>
            {isItemExpanded && exp.achievements && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-5 md:px-7 pb-6 pt-5 border-t border-border/30 bg-muted/20">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent mb-4">
                    {ar ? 'إنجازات تشغيلية رئيسية' : 'Key Achievements'}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((a, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: isRTL ? 12 : -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.07, duration: 0.35 }}
                        className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                      >
                        <ShieldCheck size={15} className="text-luxury-emerald shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };


  const renderChapterTimeline = (chapter: Chapter, chapterIdx: number) => (
    <div className="relative">
      <div
        className={`hidden md:block absolute ${isRTL ? 'right-6' : 'left-6'} top-0 bottom-0 w-px bg-gradient-to-b from-accent/80 via-border to-transparent`}
      />
      <div className="space-y-10">
        {chapter.roles.map((exp, index) => renderCard(exp, chapterIdx, index))}
      </div>
    </div>
  );

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
        <Navbar />

        <main className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-8 mb-6">
            <BreadcrumbNav items={[{ label: ar ? 'المسيرة' : 'Career', active: true }]} />
          </div>

          {/* Header */}
          <section className="container mx-auto px-4 md:px-8 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="section-eyebrow">
                <Calendar size={12} />
                {ar ? '+30 عامًا • 6 دول • 7 علامات دولية' : '30+ Years • 6 Countries • 7 International Brands'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-playfair text-foreground mb-5 leading-[1.1]">
                {ar ? 'المسيرة المهنية' : 'Career Journey'}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {ar
                  ? 'مدير ضيافة دولي عبر دول الخليج وشمال أفريقيا والشام و EMEA. خبرة تشغيلية ممتدة مع ماريوت، آي إتش جي، ستاروود، أكور، وعلامات الفخامة المستقلة.'
                  : 'International hospitality executive across the GCC, North Africa, the Levant and broader EMEA — with Marriott International, IHG, Starwood, Accor and independent luxury brands.'}
              </p>
            </motion.div>
          </section>

          {/* Mobile Chapter Tabs */}
          <section className="container mx-auto px-4 md:px-8 mb-8 lg:hidden">
            <div className="flex gap-2.5 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none">
              {chapters.map((chapter, idx) => {
                const Icon = chapter.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveChapter(idx)}
                    aria-pressed={activeChapter === idx}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-sm border text-xs font-bold tracking-wide whitespace-nowrap transition-colors ${
                      activeChapter === idx
                        ? 'bg-card text-accent border-accent/40'
                        : 'text-muted-foreground border-border hover:text-foreground'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{chapter.number} · {chapter.title}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Main Grid Container */}
          <section className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">

              {/* Left Sidebar - Sticky on desktop, hidden on mobile (tabs used instead) */}
              <aside className="hidden lg:block lg:sticky lg:top-28 space-y-8">

                {/* Career Metrics Card */}
                <div className="relative overflow-hidden rounded-sm border border-border bg-card p-6">
                  <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-6 flex items-center gap-2 border-b border-border pb-3">
                    <Award size={14} />
                    {ar ? 'ملخص الأداء التشغيلي' : 'Operational Metrics'}
                  </h2>

                  <div className="space-y-6">
                    <div className="group border-b border-border/40 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-normal font-playfair text-accent">30+</span>
                        <span className="text-sm font-semibold text-foreground">
                          {ar ? 'عاماً من الخبرة' : 'Years of Experience'}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {ar ? 'عبر 6 دول و 7 علامات تجارية عالمية' : 'Across 6 countries & 7 global brands'}
                      </p>
                    </div>

                    <div className="group border-b border-border/40 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-normal font-playfair text-accent">19+</span>
                        <span className="text-sm font-semibold text-foreground">
                          {ar ? 'فندقاً ومنشأة' : 'Properties Managed'}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {ar ? 'من المنتجعات الفاخرة إلى فنادق المدن الكبرى' : 'From luxury resorts to major city hotels'}
                      </p>
                    </div>

                    <div className="group border-b border-border/40 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-normal font-playfair text-accent">3,000+</span>
                        <span className="text-sm font-semibold text-foreground">
                          {ar ? 'غرفة وجناح' : 'Rooms & Keys'}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {ar ? 'تحت إشراف مباشر للتميز التشغيلي والخدمي' : 'Under direct operational excellence portfolio'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chapter Navigation */}
                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-bold px-1">
                    {ar ? 'فصول المسيرة المهنية' : 'CAREER CHAPTERS'}
                  </p>
                  <div className="flex flex-col gap-2 p-2 bg-muted/40 border border-border rounded-sm">
                    {chapters.map((chapter, idx) => {
                      const Icon = chapter.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveChapter(idx)}
                          aria-pressed={activeChapter === idx}
                          className={`relative w-full text-start px-4 py-3.5 rounded-sm text-xs font-bold tracking-wider transition-colors duration-300 flex items-center gap-3 ${
                            activeChapter === idx
                              ? 'bg-card text-accent border border-accent/25'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/20 border border-transparent'
                          }`}
                        >
                          <span className={`text-[10px] font-playfair ${activeChapter === idx ? 'text-accent' : 'text-muted-foreground/50'}`}>
                            {chapter.number}
                          </span>
                          <Icon size={14} className={activeChapter === idx ? 'text-accent' : 'text-muted-foreground'} />
                          <span className="leading-tight">{chapter.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </aside>

              {/* Right Pane */}
              <div className="min-h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChapter}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                  >
                    {(() => {
                      const chapter = chapters[activeChapter];
                      const Icon = chapter.icon;
                      return (
                        <div>
                          <div className="mb-8 border-b border-border/40 pb-4">
                            <div className="flex items-center justify-between gap-4 mb-1">
                              <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold">
                                {ar ? `الفصل ${chapter.number}` : `Chapter ${chapter.number}`}
                              </p>
                              <p className="text-[10px] font-mono tracking-widest text-muted-foreground">
                                {activeChapter + 1} / {chapters.length}
                              </p>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-normal font-playfair text-foreground flex items-center gap-3">
                              <Icon className="text-accent" size={20} />
                              {chapter.title}
                            </h2>
                            <p className="text-sm text-muted-foreground mt-2">{chapter.subtitle}</p>

                            {/* Progress rail */}
                            <div className="mt-5 h-[3px] w-full bg-border/50 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-accent rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                              />
                            </div>
                          </div>
                          {renderChapterTimeline(chapter, activeChapter)}
                        </div>
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>

                {/* Chapter pagination */}
                <div className="mt-12 flex items-center justify-between gap-4 border-t border-border/40 pt-6">
                  <button
                    onClick={() => setActiveChapter((c) => Math.max(0, c - 1))}
                    disabled={activeChapter === 0}
                    className="group/nav flex items-center gap-3 text-start disabled:opacity-30 disabled:cursor-not-allowed max-w-[45%]"
                  >
                    <ChevronDown size={18} className="rotate-90 text-accent shrink-0 transition-transform group-hover/nav:-translate-x-1" />
                    <span className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                        {ar ? 'السابق' : 'Previous'}
                      </span>
                      <span className="block text-sm font-semibold text-foreground truncate group-hover/nav:text-accent transition-colors">
                        {activeChapter > 0 ? chapters[activeChapter - 1].title : '—'}
                      </span>
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveChapter((c) => Math.min(chapters.length - 1, c + 1))}
                    disabled={activeChapter === chapters.length - 1}
                    className="group/nav flex items-center gap-3 text-end disabled:opacity-30 disabled:cursor-not-allowed max-w-[45%]"
                  >
                    <span className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                        {ar ? 'التالي' : 'Next'}
                      </span>
                      <span className="block text-sm font-semibold text-foreground truncate group-hover/nav:text-accent transition-colors">
                        {activeChapter < chapters.length - 1 ? chapters[activeChapter + 1].title : '—'}
                      </span>
                    </span>
                    <ChevronDown size={18} className="-rotate-90 text-accent shrink-0 transition-transform group-hover/nav:translate-x-1" />
                  </button>
                </div>


                {/* CTA */}
                <div className="text-center mt-16 pt-8 border-t border-border/40">
                  <Link to="/awards">
                    <Button variant="outline" className="rounded-sm px-8 py-6 text-base font-medium gap-2 border-border hover:border-accent transition-colors">
                      <Award size={16} />
                      {ar ? 'شاهد الجوائز والتقدير' : 'View Awards & Recognition'}
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* Leadership Principles */}
          <section className="container mx-auto px-4 md:px-8 mt-20">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <div className="section-eyebrow justify-center">
                <Sparkles size={12} />
                {ar ? 'فلسفة القيادة' : 'Leadership Philosophy'}
              </div>
              <h2 className="text-3xl md:text-4xl font-normal font-playfair text-foreground mb-4">
                {ar ? 'مبادئ القيادة' : 'Leadership Principles'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {ar
                  ? 'المبادئ الثابتة التي وجّهت كل فصل من فصول هذه المسيرة عبر الأسواق والعلامات.'
                  : 'The constants that have guided every chapter of this journey, across markets and brands.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {leadershipPrinciples.map((principle, idx) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className="p-6 rounded-sm border border-border bg-card hover:border-accent/35 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Career;

export interface CaseStudy {
  slug: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  heroImage: string;
  role: { en: string; ar: string };
  location: { en: string; ar: string };
  period: { en: string; ar: string };
  rooms?: number;
  headlineMetric: { value: string; label: { en: string; ar: string } };
  metrics: { value: string; label: { en: string; ar: string } }[];
  challenge: { en: string; ar: string };
  approach: { en: string; ar: string }[];
  result: { en: string; ar: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sheraton-montazah-renovation',
    title: { en: 'Sheraton Montazah Hotel', ar: 'فندق شيراتون المنتزه' },
    subtitle: {
      en: 'A 9-year P&L tenure culminating in the largest renovation in the property’s 40-year history',
      ar: 'ولاية إدارية استمرت 9 سنوات توّجت بأكبر تجديد في تاريخ الفندق الممتد لـ40 عاماً',
    },
    heroImage: 'https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749613983/2025-05-31_nclbzr.webp',
    role: { en: 'General Manager (9-year tenure)', ar: 'مدير عام (ولاية 9 سنوات)' },
    location: { en: 'Alexandria, Egypt', ar: 'الإسكندرية، مصر' },
    period: { en: '2014 – 2023', ar: '2014 - 2023' },
    rooms: 288,
    headlineMetric: { value: '+25%', label: { en: 'RevPAR growth', ar: 'نمو RevPAR' } },
    metrics: [
      { value: '+25%', label: { en: 'RevPAR', ar: 'RevPAR' } },
      { value: '+30%', label: { en: 'Guest satisfaction', ar: 'رضا الضيوف' } },
      { value: '−15%', label: { en: 'Energy costs', ar: 'تكاليف الطاقة' } },
      { value: '−20%', label: { en: 'Maintenance spend', ar: 'نفقات الصيانة' } },
    ],
    challenge: {
      en: 'A 288-room, 40-year-old Marriott property in a competitive Alexandria market needed to modernize aging infrastructure and lift both revenue and guest satisfaction — without ever closing its doors.',
      ar: 'عقار ماريوت بـ288 غرفة وعمر 40 عاماً في سوق تنافسي بالإسكندرية احتاج إلى تحديث بنية تحتية متقادمة ورفع الإيرادات ورضا الضيوف معاً — دون إغلاق أبوابه في أي وقت.',
    },
    approach: [
      {
        en: 'Progressed through three escalating roles over 9 years — Deputy GM, Hotel Manager in Charge, then General Manager — building full P&L accountability and institutional knowledge of the property.',
        ar: 'التدرج عبر ثلاثة أدوار متصاعدة على مدار 9 سنوات — نائب مدير عام، ثم مدير الفندق المسؤول، ثم مدير عام — مع بناء مسؤولية كاملة عن الأرباح والخسائر ومعرفة مؤسسية عميقة بالعقار.',
      },
      {
        en: 'Directed a full infrastructure modernization — boilers, transformers, generators, chillers, fire/life safety systems, and a complete kitchen renovation — phased to maintain uninterrupted operations.',
        ar: 'إدارة تحديث شامل للبنية التحتية — الغلايات والمحولات والمولدات والمبردات وأنظمة السلامة، بالإضافة لتجديد كامل للمطابخ — على مراحل للحفاظ على استمرارية التشغيل.',
      },
      {
        en: 'Benchmarked performance against the Marriott Egypt competitive set using STR data across multiple market cycles, translating market position directly into renovation and pricing decisions.',
        ar: 'قياس الأداء مقابل منافسي ماريوت مصر باستخدام بيانات STR عبر دورات سوقية متعددة، وترجمة الموقع التنافسي مباشرة إلى قرارات التجديد والتسعير.',
      },
    ],
    result: {
      en: 'RevPAR grew 25% and guest satisfaction rose 30% over the tenure, while energy costs fell 15% and maintenance spend fell 20% — with the property consistently outperforming its Marriott Egypt competitive set across market cycles.',
      ar: 'نما RevPAR بنسبة 25٪ وارتفع رضا الضيوف بنسبة 30٪ خلال فترة الولاية، بينما انخفضت تكاليف الطاقة بنسبة 15٪ ونفقات الصيانة بنسبة 20٪ — مع تفوق العقار باستمرار على منافسي ماريوت مصر عبر دورات السوق المختلفة.',
    },
  },
  {
    slug: 'crowne-plaza-mirage-conversion',
    title: { en: 'Crowne Plaza Mirage by IHG', ar: 'كراون بلازا ميراج (آي إتش جي)' },
    subtitle: {
      en: 'A full IHG brand conversion delivered in 4 months, from a zero brand baseline',
      ar: 'تحويل كامل لعلامة آي إتش جي خلال 4 أشهر، من خط بداية صفر',
    },
    heroImage: '/images/crowne-plaza-alexandria.jpg',
    role: { en: 'Independent Brand Conversion Consultant', ar: 'مستشار تحويل علامة مستقل' },
    location: { en: 'Alexandria, Egypt', ar: 'الإسكندرية، مصر' },
    period: { en: 'Aug – Dec 2025', ar: 'أغسطس - ديسمبر 2025' },
    rooms: 96,
    headlineMetric: { value: '4 mo', label: { en: 'zero to fully IHG-compliant', ar: 'من الصفر إلى امتثال كامل' } },
    metrics: [
      { value: '96', label: { en: 'Rooms converted', ar: 'غرفة تم تحويلها' } },
      { value: '4 mo', label: { en: 'Timeline', ar: 'المدة' } },
      { value: '100%', label: { en: 'IHG compliance', ar: 'امتثال IHG' } },
      { value: '0', label: { en: 'Guest disruptions', ar: 'اضطراب للضيوف' } },
    ],
    challenge: {
      en: 'Ownership needed an independent, 96-room property in Alexandria converted into a fully compliant IHG Crowne Plaza — from a zero brand baseline — in just 4 months, with no disruption to operating guests.',
      ar: 'احتاجت الملكية إلى تحويل عقار مستقل بـ96 غرفة في الإسكندرية إلى فندق كراون بلازا متوافق بالكامل مع آي إتش جي — من خط بداية صفر — خلال 4 أشهر فقط، دون أي اضطراب للضيوف الحاليين.',
    },
    approach: [
      {
        en: 'Deployed Opera Cloud PMS, Concerto revenue management, and IHG guest-recognition systems across every department.',
        ar: 'نشر نظام Opera Cloud لإدارة الممتلكات، ونظام Concerto لإدارة الإيرادات، وأنظمة التعرف على الضيوف الخاصة بـIHG عبر جميع الأقسام.',
      },
      {
        en: 'Designed and delivered a full staff retraining curriculum for IHG service culture and quality-audit standards.',
        ar: 'تصميم وتسليم منهج تدريب كامل لإعادة تأهيل الموظفين على ثقافة خدمة IHG ومعايير تدقيق الجودة.',
      },
      {
        en: 'Served as principal liaison with IHG corporate, advising ownership directly on franchise compliance and post-conversion strategy.',
        ar: 'العمل كحلقة الوصل الرئيسية مع IHG المؤسسية، وتقديم المشورة المباشرة للملكية حول الامتثال للامتياز واستراتيجية ما بعد التحويل.',
      },
    ],
    result: {
      en: 'Brand-audit readiness was achieved on schedule with zero guest-facing disruption — a 96-room independent property fully transformed into a compliant IHG Crowne Plaza in 4 months.',
      ar: 'تحققت جاهزية تدقيق العلامة التجارية في الموعد المحدد دون أي اضطراب للضيوف — تحول عقار مستقل بـ96 غرفة بالكامل إلى كراون بلازا متوافقة مع آي إتش جي خلال 4 أشهر.',
    },
  },
  {
    slug: 'v-luxury-resort-pre-opening',
    title: { en: 'The V Luxury Resort, Sahl Hasheesh', ar: 'منتجع ذا في الفاخر - سهل حشيش' },
    subtitle: {
      en: '90% occupancy in 4 months — outperforming the industry’s 12–18 month luxury stabilization norm',
      ar: '90٪ إشغال خلال 4 أشهر — متجاوزاً معيار الصناعة البالغ 12-18 شهراً لاستقرار الفئة الفاخرة',
    },
    heroImage: 'https://res.cloudinary.com/dt6hz3295/image/upload/f_auto,q_auto/v1749613983/photo-hurghada-18_krbjex.jpg',
    role: { en: 'Independent Pre-Opening Consultant', ar: 'مستشار ما قبل افتتاح مستقل' },
    location: { en: 'Hurghada, Egypt', ar: 'الغردقة، مصر' },
    period: { en: 'May 2023 – Mar 2024', ar: 'مايو 2023 - مارس 2024' },
    rooms: 298,
    headlineMetric: { value: '90%', label: { en: 'occupancy in 4 months', ar: 'إشغال خلال 4 أشهر' } },
    metrics: [
      { value: '298', label: { en: 'Rooms', ar: 'غرفة' } },
      { value: '90%', label: { en: 'Occupancy (4 mo)', ar: 'الإشغال (4 أشهر)' } },
      { value: '+12%', label: { en: 'Guest satisfaction', ar: 'رضا الضيوف' } },
      { value: '300+', label: { en: 'Team trained', ar: 'أعضاء فريق تم تدريبهم' } },
    ],
    challenge: {
      en: 'A 298-room luxury resort on the Red Sea needed a full pre-opening program — and ownership wanted to reach stabilized occupancy far faster than the 12–18 months typical for luxury-segment launches.',
      ar: 'احتاج منتجع فاخر بـ298 غرفة على البحر الأحمر إلى برنامج كامل لما قبل الافتتاح — وأرادت الملكية الوصول إلى إشغال مستقر أسرع بكثير من الـ12-18 شهراً المعتادة لإطلاقات الفئة الفاخرة.',
    },
    approach: [
      {
        en: 'Ran end-to-end pre-opening advisory: staffing strategy, PMS implementation, brand-standards deployment, and commercial launch planning.',
        ar: 'إدارة استشارة شاملة لما قبل الافتتاح: استراتيجية التوظيف، تنفيذ نظام إدارة الممتلكات، نشر معايير العلامة، وتخطيط الإطلاق التجاري.',
      },
      {
        en: 'Built a competitive positioning strategy specific to the Red Sea luxury corridor.',
        ar: 'بناء استراتيجية تموضع تنافسي مخصصة لممر البحر الأحمر الفاخر.',
      },
      {
        en: 'Designed and delivered a bespoke service-culture training program for 300+ pre-opening team members.',
        ar: 'تصميم وتسليم برنامج تدريب مخصص لثقافة الخدمة لأكثر من 300 عضو من فريق ما قبل الافتتاح.',
      },
    ],
    result: {
      en: 'The resort reached 90% occupancy within 4 months of launch — outperforming the 12–18 month industry standard for luxury-segment stabilization — with a 12% guest-satisfaction gain in the opening quarter.',
      ar: 'وصل المنتجع إلى إشغال 90٪ خلال 4 أشهر من الإطلاق — متجاوزاً معيار الصناعة البالغ 12-18 شهراً لاستقرار الفئة الفاخرة — مع ارتفاع رضا الضيوف بنسبة 12٪ في الربع الافتتاحي.',
    },
  },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);

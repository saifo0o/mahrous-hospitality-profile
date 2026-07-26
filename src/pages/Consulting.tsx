import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ReadingProgress from '@/components/ReadingProgress';
import EnhancedSEOHead from '@/components/EnhancedSEOHead';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { contactInfo, socialLinks } from '@/lib/brandConstants';
import {
  Layers, Zap, GraduationCap, Eye, Target, Compass, TrendingUp, Users, LineChart,
  ClipboardList, RefreshCw, ChevronRight, ArrowRight, Landmark, Globe,
  TrendingDown, Smile, Heart, ExternalLink, Phone, Mail, Linkedin, Award,
  Sparkles,
} from 'lucide-react';

export default function Consulting() {
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] } })
  };

  // ── Executive archetypes ─────────────────────────────────
  const archetypes = [
    { icon: Layers, title: ar ? 'باني منظومات العمل' : 'Systems Builder', desc: ar ? 'منهجي، يعتمد الهيكلة العميقة والبيانات' : 'Methodical — grounded in deep structure and data' },
    { icon: Zap, title: ar ? 'المشغّل الميداني' : 'Field Operator', desc: ar ? 'يركّز على التنفيذ ويحمي الأصول بمرونة' : 'Execution-focused, protecting assets with agility' },
    { icon: GraduationCap, title: ar ? 'المرشد والموجّه' : 'Mentor & Coach', desc: ar ? 'يبني القدرات ويوجّه القيادات للنجاح' : 'Builds capability and guides leaders to succeed' },
  ];

  // ── Vision / Mission / Purpose ────────────────────────────
  const vmp = [
    {
      icon: Eye,
      title: ar ? 'الرؤية' : 'Vision',
      desc: ar
        ? 'أن يكون إسلام محروس باني منظومات التحول وصانع التغيير الأول في المنطقة، وواضع المعيار الأساسي لكيفية توسيع الشركات الحديثة لعملياتها وصناعة هويتها وتطوير قياداتها.'
        : "To be the region's foremost architect of transformation and its benchmark for how modern companies scale operations, craft identity and develop leaders."
    },
    {
      icon: Target,
      title: ar ? 'الرسالة' : 'Mission',
      desc: ar
        ? 'سدّ الفجوة الحرجة بين الاستراتيجية المؤسسية ذات الرؤية المستقبلية والتنفيذ التشغيلي الخالي من العيوب؛ لضمان نمو مستدام وقابل للقياس في كافة القطاعات.'
        : 'Bridge the critical gap between visionary strategy and defect-free operational execution — for sustainable, measurable growth across every sector.'
    },
    {
      icon: Compass,
      title: ar ? 'الغاية' : 'Purpose',
      desc: ar
        ? 'تصميم منظومات العمل المؤسسية، وتمكين القادة، وتحويل تحديات الأعمال المعقدة إلى أطر معيارية قابلة للتنفيذ تحمي استثمارات العملاء.'
        : 'Design enterprise operating systems, empower leaders, and turn complex business challenges into actionable standards that protect client capital.'
    },
  ];

  const coreValues = [
    { icon: TrendingUp, title: ar ? 'التفوق التشغيلي' : 'Operational Excellence', desc: ar ? 'عوائد تتجاوز معدلات السوق عبر الكفاءة المنهجية والقضاء المنظم على الهدر' : 'Above-market returns through disciplined efficiency and systematic waste elimination' },
    { icon: Users, title: ar ? 'منظومات متمركزة حول الإنسان' : 'Human-Centered Systems', desc: ar ? 'العمليات المحسّنة لا تنجح إلا بأفراد ممكّنين وشراكة مبنية على الثقة' : 'Optimized operations succeed only with empowered people and trust-based partnership' },
    { icon: LineChart, title: ar ? 'قرارات مبنية على الأدلة' : 'Evidence-Based Decisions', desc: ar ? 'اعتماد مطلق على المقاييس الكمية والنهج العلمي بدلاً من الافتراضات' : 'Absolute reliance on quantitative metrics and scientific method over assumption' },
  ];

  // ── Value proposition (6 commitments) ─────────────────────
  const commitments = [
    { title: ar ? 'لغة الترجمة' : 'The Translator', desc: ar ? 'أَسدّ فجوة الاحتكاك بين طموحات المستثمرين والفرق التشغيلية الميدانية' : 'I close the friction gap between investor ambition and on-the-ground operating teams' },
    { title: ar ? 'البيانات فوق الافتراضات' : 'Data Over Assumption', desc: ar ? 'أقود القرارات بالتحليلات التجريبية والذكاء القابل للقياس، لا بالتقاليد' : 'I drive decisions with empirical analytics and measurable intelligence — never tradition' },
    { title: ar ? 'قابلية التوسع لكل الأحجام' : 'Scalability at Every Size', desc: ar ? 'أبني الهياكل التي تتيح للشركات الناشئة والمؤسسات الكبرى النمو دون تصدّع' : 'I build the structures that let startups and large enterprises grow without fracture' },
    { title: ar ? 'المناعة ضد الأزمات' : 'Crisis Immunity', desc: ar ? 'التأسيس السليم والذكاء التنبؤي يخلقان مؤسسات جاهزة للمستقبل وقادرة على التكيّف' : 'Sound foundations and predictive intelligence create future-ready, adaptive institutions' },
    { title: ar ? 'التأسيس غير المرئي' : 'Invisible Foundation', desc: ar ? 'أفضل العمليات المُصمَّمة تعمل بسلاسة لدرجة أن المستخدم النهائي لا يلاحظها أبداً' : 'The best-designed operations run so seamlessly the end-user never notices them' },
    { title: ar ? 'نجاحي يُقاس بنجاحك' : 'My Success Is Measured By Yours', desc: ar ? 'نجاحي يُعرَّف حصراً بنجاح شركائي؛ شراكة كاملة حتى تحقيق الأثر' : "My success is defined solely by my partners' success — full partnership until impact is delivered" },
  ];

  // ── Methodology (5 phases) ────────────────────────────────
  const [activePhase, setActivePhase] = useState(0);
  const methodRef = useRef(null);
  const methodInView = useInView(methodRef, { once: true, amount: 0.2 });

  const phases = [
    {
      icon: ClipboardList,
      title: ar ? 'التشخيص والتقييم الميداني' : 'Diagnosis & Field Assessment',
      desc: ar ? 'جولة مكثفة داخل مسارات العمل مدعومة بتحليل البيانات المالية والتشغيلية.' : 'Intensive walk-through of workflows supported by financial and operational data analysis.'
    },
    {
      icon: Compass,
      title: ar ? 'تصميم الاستراتيجية ومنظومات العمل' : 'Strategy & System Design',
      desc: ar ? 'خارطة طريق متكاملة، وبناء الهياكل الإدارية والإجراءات القياسية وأطر الحوكمة.' : 'Integrated roadmap, management structures, standard procedures and governance frameworks.'
    },
    {
      icon: Users,
      title: ar ? 'التنفيذ الميداني المشترك' : 'Co-Led Field Execution',
      desc: ar ? 'قيادة التطبيق مع فرق العميل بخطوات تنفيذية واضحة ومسؤوليات محددة.' : 'Implementation with client teams — clear steps, clear ownership.'
    },
    {
      icon: GraduationCap,
      title: ar ? 'التمكين وبناء القدرات' : 'Enablement & Capability Building',
      desc: ar ? 'تأهيل الفرق لامتلاك منظومات العمل الجديدة وإدارتها باستقلالية كاملة.' : 'Teams equipped to own and run the new systems independently.'
    },
    {
      icon: RefreshCw,
      title: ar ? 'الاستدامة والمتابعة' : 'Sustainability & Follow-Up',
      desc: ar ? 'قياس النتائج مقابل المستهدفات، مع جلسة تقييم ومتابعة مجانية بعد الإغلاق.' : 'Results measured against targets, with a complimentary post-close review.'
    },
  ];

  const dmaic = [
    { letter: 'D', label: ar ? 'التعريف' : 'Define' },
    { letter: 'M', label: ar ? 'القياس' : 'Measure' },
    { letter: 'A', label: ar ? 'التحليل' : 'Analyze' },
    { letter: 'I', label: ar ? 'التحسين' : 'Improve' },
    { letter: 'C', label: ar ? 'التحكم' : 'Control' },
  ];

  const kaizenChips = [
    { icon: TrendingUp, label: ar ? 'نمو الإيرادات' : '+Revenue' },
    { icon: TrendingDown, label: ar ? 'خفض التكاليف' : '-Costs' },
    { icon: Smile, label: ar ? 'رضا العملاء' : '+Guest CSAT' },
    { icon: Heart, label: ar ? 'رضا الموظفين' : '+Team CSAT' },
  ];

  // ── Regional visions ───────────────────────────────────────
  const regionalVisions = [
    {
      icon: Landmark,
      tag: 'KSA 2030',
      title: ar ? 'رؤية السعودية 2030' : 'KSA 2030',
      subtitle: ar ? 'التمكين الاستراتيجي لرؤية 2030' : 'Strategic Enablement of Vision 2030',
      desc: ar ? 'شريك موثوق لترجمة الرؤية الوطنية والطموحات الاستثمارية إلى واقع تشغيلي ملموس.' : 'A trusted partner translating national vision and investment ambition into tangible operating reality.'
    },
    {
      icon: Globe,
      tag: 'GCC',
      title: ar ? 'رؤية الخليج' : 'GCC',
      subtitle: ar ? 'رؤية الخليج الاستراتيجية' : 'GCC Strategic Vision',
      desc: ar
        ? 'دعم التنويع الاقتصادي وتنافسية السياحة الفاخرة، والمدن الذكية، وحوكمة الاستثمارات لبناء كيانات خليجية رائدة تتصدر المشهد الاقتصادي الإقليمي.'
        : 'Supporting economic diversification, luxury tourism competitiveness, smart cities and investment governance — building Gulf enterprises that lead the regional economic landscape.'
    },
    {
      icon: Compass,
      tag: 'EGYPT 2030',
      title: ar ? 'رؤية مصر 2030' : 'Egypt 2030',
      subtitle: ar ? 'رؤية مصر 2030' : 'Egypt Vision 2030',
      desc: ar
        ? 'دعم التنمية السياحية المستدامة، وتمكين القطاع الخاص، والتحول الرقمي، والحوكمة المؤسسية لبناء كيانات مصرية بمعايير عالمية تسهم في صناعة نجاح الرؤية الوطنية.'
        : "Supporting sustainable tourism, private-sector empowerment, digital transformation and institutional governance — building Egyptian entities at global standard that actively shape the vision's success."
    },
  ];

  // ── Services portfolio (6 practices) ──────────────────────
  const services = [
    { title: ar ? 'الإدارة الاستراتيجية وتطوير الأعمال' : 'Strategic Management & Business Development', desc: ar ? 'خرائط طريق تنقل الشركات من التأسيس إلى الريادة' : 'Roadmaps that move companies from foundation to leadership' },
    { title: ar ? 'الهوية المؤسسية والملفات التعريفية' : 'Corporate Identity & Executive Profiles', desc: ar ? 'علامات وملفات تعريفية قوية بمعايير عالمية' : 'Powerful brands and profiles at international standard' },
    { title: ar ? 'الحوكمة وضمان الجودة' : 'Governance & Quality Assurance', desc: ar ? 'هياكل دقيقة وإجراءات تشغيل موثقة' : 'Precise structures and documented SOPs' },
    { title: ar ? 'الاستراتيجية الرقمية والتسويق' : 'Digital Strategy & Marketing', desc: ar ? 'خطط شاملة وواجهات رقمية متكاملة' : 'Comprehensive plans and digital interfaces' },
    { title: ar ? 'إدارة التحول المؤسسي' : 'Corporate Transformation Management', desc: ar ? 'أداء وربحية بنقلات نوعية عبر تحول منضبط' : 'Step-change performance and profitability through disciplined transformation' },
    { title: ar ? 'استشارات الضيافة والأعمال' : 'Hospitality & Business Advisory', desc: ar ? 'تحويل العلامات، جاهزية ما قبل الافتتاح، دراسات الجدوى، رفع الكفاءة التشغيلية' : 'Brand conversion, pre-opening readiness, feasibility studies, operational uplift' },
  ];

  // ── Trusted brands wordmark strip ─────────────────────────
  const trustedBrands = ['Marriott', 'Accor', 'Starwood', 'InterContinental', 'Sheraton', 'Le Méridien', 'Four Points', 'Crowne Plaza'];

  // ── Digital ventures ───────────────────────────────────────
  const digitalVentures = [
    {
      name: ar ? 'سلسلة الثقة' : 'Silsilat Al-Thiqa',
      tag: ar ? 'السعودية' : 'KSA',
      desc: ar ? 'حلول هندسية وحماية الأصول' : 'Engineering Solutions & Asset Protection',
      url: 'www.silsilat-sa.com',
      href: 'https://www.silsilat-sa.com',
    },
    {
      name: ar ? 'السماء النجوم' : 'Alsamaa Alnujoom',
      tag: ar ? 'بناء علامة تجارية' : 'Brand Build',
      desc: ar ? 'علامة تجارية فاخرة للأخشاب والديكور' : 'Luxury woodworks & décor brand',
      url: 'alsamaaalnujoom.lovable.app',
      href: 'https://alsamaaalnujoom.lovable.app',
    },
    {
      name: ar ? 'رمال — الفخامة المصرية' : 'Remal — Egyptian Luxury Elevated',
      tag: ar ? 'مصر' : 'Egypt',
      desc: ar ? 'منصة رقمية راقية تعرض الفخامة المصرية بمعايير عالمية' : 'A refined digital platform showcasing Egyptian luxury at international standard',
      url: 'remal-egyptian-luxury-elevated.vercel.app',
      href: 'https://remal-egyptian-luxury-elevated.vercel.app',
    },
    {
      name: 'Prime Soul Sanctuary',
      tag: ar ? 'الضيافة' : 'Hospitality',
      desc: ar ? 'منصة فاخرة للضيافة والعافية' : 'Luxury hospitality & wellness platform',
      url: 'prime-soul-sanctuary.lovable.app',
      href: 'https://prime-soul-sanctuary.lovable.app',
    },
  ];

  const sectors = ar
    ? ['الجهات الحكومية', 'الشركات الكبرى', 'المستثمرون', 'الشركات العائلية', 'الضيافة والسياحة', 'الشركات الناشئة', 'المنشآت الصغيرة والمتوسطة', 'التجزئة والعقار']
    : ['Government entities', 'Large corporations', 'Investors', 'Family businesses', 'Hospitality & tourism', 'Start-ups', 'SMEs', 'Retail & real estate'];

  const getContactIcon = (labelEn: string) => {
    const label = labelEn.toLowerCase();
    if (label.includes('phone')) return <Phone size={15} />;
    if (label.includes('email') || label.includes('mail')) return <Mail size={15} />;
    if (label.includes('linkedin')) return <Linkedin size={15} />;
    return null;
  };

  return (
    <PageTransition>
      <EnhancedSEOHead
        title={ar ? 'إسلام محروس | مستشار تنفيذي دولي' : 'Islam Mahrous | International Executive Advisor'}
        description={ar
          ? 'إسلام محروس، مستشار تنفيذي دولي وباني منظومات التحول — خمسة وثلاثون عاماً في قيادة العمليات مع ماريوت وأكور وستاروود وإنتركونتيننتال.'
          : 'Islam Mahrous, International Executive Advisor and Architect of Transformation — thirty-five years leading operations for Marriott, Accor, Starwood and InterContinental.'}
        tags={['executive advisor', 'architect of transformation', 'management consulting', 'operational excellence', 'Six Sigma Black Belt']}
        type="profile"
      />

      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <ReadingProgress target=".reading-content" />
        <Navbar />

        <main className="flex-grow pt-28 pb-20 reading-content">
          <div className="container mx-auto px-4 md:px-8 mb-8">
            <BreadcrumbNav items={[{ label: ar ? 'الاستشارات' : 'Consulting', active: true }]} />
          </div>

          {/* ───────────────── Hero ───────────────── */}
          <section className="container mx-auto px-4 md:px-8 mb-24">
            <div className="max-w-4xl">
              <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                <div className="section-eyebrow">
                  <Sparkles size={12} />
                  {ar ? 'مستشار تنفيذي دولي' : 'International Executive Advisor'}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-playfair text-foreground leading-tight">
                  Islam Mahrous
                </h1>
                <p className="text-xl md:text-2xl text-accent font-playfair italic mt-2">
                  {ar ? 'باني منظومات التحول' : 'Architect of Transformation'}
                </p>
              </motion.div>

              <motion.p initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed font-light mt-8 max-w-3xl">
                {ar
                  ? 'خمسة وثلاثون عاماً في قيادة العمليات مع ماريوت، أكور، ستاروود، وإنتركونتيننتال. أُترجم رؤى مجالس الإدارة إلى منظومات تشغيلية دقيقة، وأبني كيانات تنمو دون تصدّع.'
                  : 'Thirty-five years leading operations for Marriott, Accor, Starwood and InterContinental. I translate boardroom vision into precise operating systems and build enterprises that scale without breaking.'}
              </motion.p>

              <motion.div initial="hidden" animate="visible" custom={2} variants={fadeUp} className="bg-card border border-border rounded-sm p-8 mt-10 max-w-2xl">
                <blockquote className="text-lg md:text-xl italic font-light text-foreground leading-relaxed">
                  {ar
                    ? '"التميز في التشغيل ليس مجرد نتائج، بل استراتيجية، رؤية، ديمومة، وذكاء عاطفي."'
                    : '"Excellence in operation is not just results; it\'s strategy, vision, sustainability, and emotional intelligence."'}
                </blockquote>
                <p className="mt-4 text-accent font-semibold tracking-wider text-sm uppercase font-playfair">— Islam Mahrous</p>
              </motion.div>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-14"
            >
              {[
                { value: ar ? 'حزام أسود' : 'Black Belt', label: ar ? 'سيكس سيجما / ماجستير' : 'Six Sigma · MSc' },
                { value: '35+', label: ar ? 'عاماً من القيادة' : 'Years of Leadership' },
                { value: '5,500+', label: ar ? 'غرفة تم افتتاحها أو إدارتها' : 'Rooms Opened / Managed' },
                { value: '04', label: ar ? 'علامات عالمية من الفئة الأولى' : 'Tier-One Global Brands' },
                { value: '04', label: ar ? 'دول عبر ثلاث قارات' : 'Countries, Three Continents' },
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-sm p-5 text-center">
                  <p className="text-xl md:text-2xl font-bold font-playfair text-accent">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2 font-semibold leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </section>

          {/* ───────────────── Executive Brief + Archetypes ───────────────── */}
          <section className="bg-muted/20 border-y border-border/40 py-24 mb-24">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 items-start">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <div className="section-eyebrow">{ar ? 'الموجز التنفيذي' : 'Executive Brief'}</div>
                  <h2 className="section-heading">{ar ? 'مُدمج وباني منظومات عمل' : 'Integrator & Systems Builder'}</h2>
                  <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg">
                    {ar
                      ? 'مُدمج وباني منظومات عمل من النخبة؛ مترجم بين رؤى مجالس الإدارة وفرق التنفيذ الميداني. طوال خمسة وثلاثين عاماً من قيادة عمليات كبرى العلامات العالمية —ماريوت، أكور، ستاروود، وإنتركونتيننتال— ترسّخت لديّ حقيقة واحدة: التميز التشغيلي التزام عميق بشراكة حقيقية، لا أرقاماً تُستعرض في مجالس الإدارة. بصفتي مستشاراً مستقلاً وصانع تغيير، وحاصلاً على الحزام الأسود في منهجية التحسين المستمر (سيكس سيجما)، أضع بين يديك قرارات مبنية على البيانات وخبرة ميدانية عالمية؛ لنؤسس معاً كياناً يتجاوز طموحاتك، أياً كان حجمه وقطاعه.'
                      : "An integrator and elite operating-system builder — the translator between boardrooms and front-line execution. For thirty-five years leading operations for the world's leading brands — Marriott, Accor, Starwood and InterContinental — one truth has anchored my practice: operational excellence is a deep commitment to real partnership, not numbers paraded through boardrooms. As an independent advisor and change-maker, and a certified Six Sigma Black Belt, I bring you data-driven decisions and global field expertise so that together we build an enterprise that exceeds your ambition — at any scale, in any sector."}
                  </p>
                </motion.div>

                <div className="space-y-4">
                  {archetypes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 p-5 rounded-sm bg-card border border-border hover:border-accent/40 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-sm bg-accent/8 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ───────────────── Vision / Mission / Purpose + Values ───────────────── */}
          <section className="py-4 mb-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-xl mx-auto">
                <div className="section-eyebrow justify-center">{ar ? 'الإطار المؤسسي' : 'Institutional Framework'}</div>
                <h2 className="section-heading inline-block">{ar ? 'الرؤية والرسالة والغاية' : 'Vision, Mission & Purpose'}</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
                {vmp.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="bg-card rounded-sm p-6 border border-border"
                  >
                    <div className="flex items-center gap-2.5 mb-4">
                      <item.icon size={18} className="text-accent" />
                      <h3 className="font-semibold text-foreground text-base">{item.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {coreValues.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 p-5 rounded-sm bg-muted/30 border border-border/40"
                  >
                    <div className="w-10 h-10 rounded-sm bg-luxury-emerald/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-luxury-emerald" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────────────── Value Proposition (6 commitments) ───────────────── */}
          <section className="bg-muted/20 border-y border-border/40 py-24 mb-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-xl mx-auto">
                <div className="section-eyebrow justify-center">{ar ? 'قيمة الشراكة' : 'Value Proposition'}</div>
                <h2 className="section-heading inline-block">{ar ? 'ست التزامات جوهرية' : 'Six Core Commitments'}</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {commitments.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="bg-card rounded-sm p-6 border border-border hover:border-accent/40 transition-colors duration-300"
                  >
                    <span className="text-3xl font-playfair font-bold text-accent/25">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-semibold text-foreground text-base mt-3 mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────────────── Methodology ───────────────── */}
          <section className="py-4 mb-24 relative overflow-hidden" ref={methodRef}>
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                className="mb-16 max-w-3xl"
                initial={{ opacity: 0, y: 25 }}
                animate={methodInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="section-eyebrow">{ar ? 'المنهجية التشغيلية' : 'Operating Methodology'}</div>
                <h2 className="section-heading inline-block">{ar ? 'خمس مراحل للتحول' : 'Five Phases of Transformation'}</h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr] gap-10 lg:gap-16 items-stretch mb-16">
                {/* Step list */}
                <div className="flex flex-col gap-4 justify-between">
                  {phases.map((phase, idx) => {
                    const StepIcon = phase.icon;
                    const isActive = activePhase === idx;
                    return (
                      <motion.div
                        key={idx}
                        onClick={() => setActivePhase(idx)}
                        className={`p-5 rounded-sm border cursor-pointer transition-colors duration-300 flex items-center justify-between group ${
                          isActive ? 'bg-card border-accent' : 'bg-card/40 border-border/40 hover:border-accent/40 hover:bg-card/80'
                        }`}
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        animate={methodInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-sm flex items-center justify-center font-playfair font-bold text-sm transition-colors ${
                            isActive ? 'bg-accent text-accent-foreground shadow-sm' : 'bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent'
                          }`}>
                            0{idx + 1}
                          </div>
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                              {ar ? `المرحلة 0${idx + 1}` : `PHASE 0${idx + 1}`}
                            </span>
                            <h3 className="text-sm font-semibold text-foreground mt-0.5">{phase.title}</h3>
                          </div>
                        </div>
                        <div className={`text-muted-foreground transition-transform duration-300 ${
                          isActive ? 'text-accent translate-x-1 rtl:-translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5'
                        }`}>
                          <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Detail panel */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePhase}
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="luxury-container h-full flex flex-col justify-between p-8 md:p-10 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.015] to-transparent pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between border-b border-border/50 pb-6 mb-6">
                          <div>
                            <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                              {ar ? `المرحلة 0${activePhase + 1}` : `PHASE 0${activePhase + 1}`}
                            </span>
                            <h3 className="text-2xl font-normal font-playfair text-foreground mt-2">{phases[activePhase].title}</h3>
                          </div>
                          <div className="w-12 h-12 rounded-sm bg-luxury-emerald/10 flex items-center justify-center flex-shrink-0">
                            {React.createElement(phases[activePhase].icon, { className: 'w-6 h-6 text-luxury-emerald' })}
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                          {phases[activePhase].desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* DMAIC wheel */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-6 text-center">
                  {ar ? 'إطار سيكس سيجما DMAIC' : 'Six Sigma DMAIC Framework'}
                </p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  {dmaic.map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center font-playfair font-bold text-xl ${
                        i % 2 === 0 ? 'bg-primary text-primary-foreground' : 'bg-luxury-emerald text-primary-foreground'
                      }`}>
                        {step.letter}
                      </div>
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">{step.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Kaizen model */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-sm p-8 max-w-4xl mx-auto text-center"
              >
                <h3 className="font-semibold text-foreground text-base mb-3">{ar ? 'نموذج كايزن' : 'Kaizen Model'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto mb-6">
                  {ar
                    ? 'نموذج تشغيلي رشيق يحوّل التحسين إلى ثقافة يومية راسخة، يستهدف نمو الإيرادات، خفض التكاليف، رضا العملاء، ورضا الموظفين.'
                    : 'A lean operating model turning improvement into daily culture — targeting revenue growth, cost reduction, guest satisfaction and employee engagement.'}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {kaizenChips.map((chip, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-muted/40 border border-border/40 text-xs font-semibold text-foreground/90">
                      <chip.icon size={13} className="text-accent" />
                      {chip.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* ───────────────── Regional Visions ───────────────── */}
          <section className="bg-muted/20 border-y border-border/40 py-24 mb-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-xl mx-auto">
                <div className="section-eyebrow justify-center">{ar ? 'المواءمة الإقليمية' : 'Regional Alignment'}</div>
                <h2 className="section-heading inline-block">{ar ? 'دعم رؤى التنمية الإقليمية' : 'Supporting Regional Development Visions'}</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {regionalVisions.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="bg-card rounded-sm p-7 border border-border flex flex-col"
                  >
                    <div className="w-11 h-11 rounded-sm bg-accent/8 flex items-center justify-center mb-5">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1.5">{item.tag}</span>
                    <h3 className="font-semibold text-foreground text-base mb-1">{item.subtitle}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light mt-2">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────────────── Services Portfolio ───────────────── */}
          <section className="py-4 mb-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-xl mx-auto">
                <div className="section-eyebrow justify-center">{ar ? 'محفظة الخدمات' : 'Services Portfolio'}</div>
                <h2 className="section-heading inline-block">{ar ? 'ست ممارسات استشارية' : 'Six Advisory Practices'}</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="bg-card rounded-sm p-6 border border-border hover:border-accent/40 transition-colors duration-300"
                  >
                    <span className="text-3xl font-playfair font-bold text-accent/25">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-semibold text-foreground text-base mt-3 mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────────────── Trusted Brands strip ───────────────── */}
          <section className="border-y border-border/40 bg-muted/20 py-10 mb-24">
            <div className="container mx-auto px-4 md:px-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80 font-bold text-center mb-6">
                {ar ? 'خبرة تشغيلية عبر علامات عالمية رائدة' : 'Operational Experience Across Leading Global Brands'}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
                {trustedBrands.map((brand, i) => (
                  <React.Fragment key={brand}>
                    <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold">{brand}</span>
                    {i < trustedBrands.length - 1 && <span className="text-accent/50 text-xs">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* ───────────────── Digital Ventures ───────────────── */}
          <section className="py-4 mb-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-xl mx-auto">
                <div className="section-eyebrow justify-center">{ar ? 'مشاريع رقمية' : 'Digital Ventures'}</div>
                <h2 className="section-heading inline-block">{ar ? 'منصات وعلامات مُنشأة' : 'Platforms & Brands Built'}</h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {digitalVentures.map((v, i) => (
                  <motion.a
                    key={i}
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group bg-card rounded-sm p-6 border border-border hover:border-accent/40 transition-colors duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-sm bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider mb-3">
                        {v.tag}
                      </span>
                      <h3 className="font-semibold text-foreground text-base mb-1.5">{v.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">{v.desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-border/30 text-xs font-semibold text-accent-foreground group-hover:text-accent transition-colors">
                      <span className="truncate">{v.url}</span>
                      <ExternalLink size={13} className="flex-shrink-0" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* ───────────────── Qualifications addendum ───────────────── */}
          <section className="py-4 mb-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto flex items-start gap-4 p-6 rounded-sm bg-muted/30 border border-border/40"
              >
                <div className="w-10 h-10 rounded-sm bg-accent/8 flex items-center justify-center flex-shrink-0">
                  <Award size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{ar ? 'شهادات تنفيذية eCornell' : 'eCornell Executive Certificates'}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {ar ? 'القرارات الاستراتيجية والسيناريوهات' : 'Strategic decisions & scenario planning'}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ───────────────── Closing CTA ───────────────── */}
          <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="section-eyebrow justify-center text-primary-foreground/70">{ar ? 'لنبدأ' : "Let's Begin"}</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-playfair mb-6 leading-tight max-w-3xl mx-auto">
                  {ar ? 'رحلة التحول المؤسسي تبدأ بحوار واحد' : 'Every transformation starts with a single conversation'}
                </h2>

                <blockquote className="text-base md:text-lg italic font-light max-w-2xl mx-auto text-primary-foreground/85 leading-relaxed mb-10">
                  {ar
                    ? '"المستقبل مِلكٌ لمن يمتلك البصيرة لاختراقه؛ ونجاحي يُعرَّف حصرياً بنجاحك."'
                    : '"The future belongs to those with the insight to break through — and my success is defined solely by yours."'}
                </blockquote>

                <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
                  {sectors.map((s, i) => (
                    <span key={i} className="text-[10px] sm:text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold">
                      {s}{i < sectors.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-12">
                  <Link to="/book-consultation" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-sm px-8 py-6 text-sm shadow-gold-sm hover:shadow-gold-md transition-all duration-300 gap-2 group">
                      <span>{ar ? 'احجز استشارة' : 'Book a consultation'}</span>
                      <ArrowRight size={16} className={`transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/60 rounded-sm px-8 py-6 text-sm transition-all duration-300 bg-transparent font-semibold">
                      {ar ? 'تواصل مباشرة' : 'Get in touch'}
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 pt-8 border-t border-primary-foreground/15 max-w-2xl mx-auto">
                  {contactInfo.filter(c => c.href).map((contact, idx) => (
                    <a
                      key={idx}
                      href={contact.href}
                      className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent text-xs font-semibold transition-colors duration-300"
                      {...(contact.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span className="text-accent">{getContactIcon(contact.labelEn)}</span>
                      <span>{contact.value}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}

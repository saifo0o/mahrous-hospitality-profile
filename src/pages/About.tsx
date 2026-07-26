import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap, Globe, Download, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { 
  IconConciergeBell, 
  IconExecutiveCrown, 
  IconSTRYield, 
  IconQualityShield, 
  IconTalentMentorship, 
  IconKaizenLoop 
} from '@/components/ui/hospitality-icons';

export default function About() {
  const { language, t, isRTL } = useLanguage();
  const ar = language.code === 'ar';

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } })
  };

  const skillCategories = [
    {
      category: ar ? 'العمليات الفندقية' : 'Hotel Operations',
      icon: <IconConciergeBell className="w-5 h-5 text-accent" />,
      skills: [
        { name: ar ? 'عمليات ما قبل الافتتاح' : 'Pre-Opening Operations', level: 98 },
        { name: ar ? 'التميز التشغيلي والحوكمة' : 'Operational Governance', level: 95 },
        { name: ar ? 'التجديدات الكبرى وإعادة الهيكلة' : 'Major Renovations & CAPEX', level: 92 },
        { name: ar ? 'تحويل وتأهيل العلامات التجارية' : 'Brand Conversions & Audits', level: 90 },
      ]
    },
    {
      category: ar ? 'القيادة التنفيذية' : 'Executive Leadership',
      icon: <IconExecutiveCrown className="w-5 h-5 text-accent" />,
      skills: [
        { name: ar ? 'إدارة فرق العمل الكبرى' : 'Multi-Property Leadership', level: 97 },
        { name: ar ? 'التخطيط الاستراتيجي وعلاقات الملاك' : 'Strategic Stakeholder Relations', level: 93 },
        { name: ar ? 'تطوير تجربة ورضا الضيوف' : 'Guest Experience Architecture', level: 96 },
        { name: ar ? 'إدارة الأصول وتحسين العوائد' : 'Asset Management & STR Yield', level: 91 },
      ]
    },
    {
      category: ar ? 'إدارة الجودة والمالية' : 'Quality & Finance',
      icon: <IconSTRYield className="w-5 h-5 text-accent" />,
      skills: [
        { name: ar ? 'نمو الإيرادات وتحسين الربحية' : 'Revenue & GOP Growth', level: 94 },
        { name: ar ? 'إدارة الأرباح والخسائر والمصروفات' : 'P&L / Flow-through Audits', level: 92 },
        { name: ar ? 'منهجية الحزام الأسود Six Sigma' : 'Six Sigma Black Belt System', level: 90 },
        { name: ar ? 'تطوير أساليب التحسين كايزن' : 'Kaizen Continuous Improvement', level: 93 },
      ]
    }
  ];

  const philosophyItems = [
    {
      title: ar ? 'التميز التشغيلي' : 'Operational Excellence',
      icon: <IconQualityShield className="w-6 h-6 text-accent" />,
      desc: ar ? 'تبسيط وتبويب العمليات لتحقيق أقصى كفاءة مع ضمان ثبات الجودة العالية.' : 'Streamlining core workflows to unlock high profit yield while locking in pristine quality standards.'
    },
    {
      title: ar ? 'تجربة الضيوف' : 'Guest Centricity',
      icon: <IconConciergeBell className="w-6 h-6 text-accent" />,
      desc: ar ? 'ابتكار تجارب ضيافة مخصصة تتجاوز التوقعات وتخلق ولاءً دائمًا للعلامة.' : 'Designing bespoke service moments that exceed expectations, building long-term asset value.'
    },
    {
      title: ar ? 'تطوير وتمكين المواهب' : 'Talent Mentorship',
      icon: <IconTalentMentorship className="w-6 h-6 text-accent" />,
      desc: ar ? 'تدريب وإرشاد وتفويض فرق العمل لبناء صف قيادي قادر على التقييم والتطوير.' : 'Coaching and empowering operational champions to take full ownership of departmental performance.'
    },
    {
      title: ar ? 'كايزن والتحسين المستمر' : 'Continuous Improvement',
      icon: <IconKaizenLoop className="w-6 h-6 text-accent" />,
      desc: ar ? 'تبني الأفكار الإبداعية والتقنيات الحديثة لتعزيز الكفاءة واستدامة الأرباح.' : 'Adopting modern systems (e.g. Opera Cloud, CRM) and Kaizen loops for constant growth.'
    }
  ];

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
        <Navbar />

        <main className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-8 mb-8">
            <BreadcrumbNav items={[{ label: ar ? 'من أنا' : 'About', active: true }]} />
          </div>

          {/* Premium Editorial Hero Spread */}
          <section className="container mx-auto px-4 md:px-8 mb-24">
            <div className={`grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-16 items-start ${isRTL ? 'direction-rtl' : ''}`}>
              
              {/* Photo & CV Download */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-sm mx-auto w-full"
              >
                <div className="signature-frame">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      alt={ar ? 'إسلام محروس' : 'Islam Mahrous'}
                      className="w-full h-full object-cover"
                      src="/lovable-uploads/2a742c4a-aaea-4c0f-ad38-ea2891228c62.jpg"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/Islam_Mahrous_Resume.pdf" download="Islam_Mahrous_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm font-bold py-6 gap-2 transition-colors duration-300">
                      <Download size={18} />
                      {ar ? 'تحميل السيرة الذاتية بصيغة PDF' : 'Download CV Resume'}
                    </Button>
                  </a>
                </div>
              </motion.div>

              {/* Biography Details */}
              <div className="space-y-8 flex flex-col justify-center">
                <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                  <div className="section-eyebrow">
                    {ar ? 'مدير عمليات فندقية محترف بـ ٣٠+ عامًا من الخبرة' : '30+ Years Professional Operations Record'}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-playfair text-foreground leading-tight">
                    {ar ? 'مسيرة مهنية مبنية على التميز' : 'Leading with Precision & Passion'}
                  </h1>
                </motion.div>

                <motion.p initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed font-light">
                  {ar
                    ? 'كمدير تنفيذي متميز في قطاع الفنادق والضيافة، تخصصت طوال مسيرتي المهنية في إدارة عمليات الافتتاح الكبرى، والتجديدات الشاملة للأصول، ورفع معدلات الكفاءة التشغيلية والربحية للمحفظة الفندقية.'
                    : 'As an accomplished Hospitality Executive, I drive operational excellence, capital renovation governance, and pre-opening readiness across multi-property hotel portfolios.'
                  }
                </motion.p>

                <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-muted-foreground leading-relaxed font-sans">
                  {ar
                    ? 'تمتد خبرتي القيادية عبر مصر والمملكة العربية السعودية وليبيا والإمارات، مما يمنحني إدراكاً عميقاً لمتطلبات وتطلعات النزلاء، وثقافة سوق العمل الخليجي والعربي، وإمكانيات مواءمة المعايير العالمية مع متطلبات السوق المحلي.'
                    : 'My leadership spans Egypt, Saudi Arabia, Libya, and the UAE. Having worked with Marriott, IHG, and Accor, I combine deep regional compliance knowledge (including KSA Saudization frameworks) with international hospitality systems.'
                  }
                </motion.p>

                {/* Asymmetric Info Grid */}
                <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                  {[
                    { icon: Briefcase, title: ar ? 'الخبرة القيادية' : 'Industry Experience', desc: ar ? '+٣٠ عامًا مع ماريوت، آي إتش جي، أكور' : '30+ years across Marriott, IHG, Accor' },
                    { icon: Award, title: ar ? 'التميز والأدوات' : 'Operational Core', desc: ar ? 'الافتتاح، التجديدات، Six Sigma' : 'Pre-opening, CAPEX, Six Sigma' },
                    { icon: GraduationCap, title: ar ? 'المؤهلات العلمية' : 'Higher Education', desc: ar ? 'ماجستير إدارة أعمال، دبلوم معهد جليون' : 'MBA, Glion Swiss Diploma' },
                    { icon: Globe, title: ar ? 'اللغات المتقنة' : 'Language Mastery', desc: ar ? 'العربية (الأم)، الإنجليزية (طليق)، الألمانية' : 'Arabic (Native), English (Fluent), German' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-sm bg-card border border-border hover:border-accent/40 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-sm bg-accent/8 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Quick Metrics Banner */}
          <section className="bg-primary text-primary-foreground py-14 mb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '30+', label: ar ? 'سنوات خبرة قيادية' : 'Years Experience' },
                  { value: '5,000+', label: ar ? 'موظف تم تدريبهم' : 'Hoteliers Coached' },
                  { value: '4', label: ar ? 'دول عربية وخليجية' : 'Regional Countries' },
                  { value: '3', label: ar ? 'لغات متحدثة' : 'Fluent Languages' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                  >
                    <p className="text-3xl md:text-4xl font-bold font-playfair text-accent">{stat.value}</p>
                    <p className="text-[10px] text-primary-foreground/70 uppercase tracking-widest mt-2 font-semibold">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership Philosophy Spread */}
          <section className="py-24 bg-muted/20 border-y border-border/40 mb-24 relative">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-xl mx-auto">
                <div className="section-eyebrow">{ar ? 'رؤيتنا المهنية' : 'Philosophy'}</div>
                <h2 className="section-heading inline-block">
                  {ar ? 'روافد الفلسفة القيادية' : 'Leadership Philosophy'}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {philosophyItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="bg-card rounded-sm p-6 border border-border hover:border-accent/40 transition-colors duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                          {item.icon}
                        </div>
                        <h3 className="font-semibold text-foreground text-base">{item.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Immersive Quote Block */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-sm p-8 md:p-14 text-center border border-border relative overflow-hidden"
              >
                <blockquote className="text-xl md:text-2xl italic font-light max-w-3xl mx-auto text-foreground leading-relaxed">
                  {ar
                    ? '"إن التميز في إدارة الفنادق لا يتحقق بمجرد تقديم الخدمة اليومية؛ بل برسم مسار استراتيجي متكامل وتدريب العاملين على تبني هذه الرؤية والالتزام بتفاصيلها."'
                    : '"Excellence in hospitality is not just about daily service; it is about building standard systems, training the champions to own them, and measuring progress Kaizen-style."'
                  }
                </blockquote>
                <p className="mt-6 text-accent font-semibold tracking-wider text-sm uppercase font-playfair">— Islam Mahrous</p>
              </motion.div>
            </div>
          </section>

          {/* Competency Level Sliders */}
          <section className="py-20 mb-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-xl mx-auto">
                <div className="section-eyebrow">{ar ? 'المهارات والكفاءات' : 'Competencies'}</div>
                <h2 className="section-heading inline-block">
                  {ar ? 'القدرات الإدارية والتشغيلية' : 'Core Capabilities'}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                {skillCategories.map((category, ci) => (
                  <motion.div
                    key={ci}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.15, duration: 0.6 }}
                    className="bg-card rounded-sm p-6 sm:p-8 border border-border"
                  >
                    <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider flex items-center gap-2.5 border-b border-border pb-4">
                      {category.icon}
                      <span>{category.category}</span>
                    </h3>
                    <div className="space-y-6">
                      {category.skills.map((skill, si) => (
                        <div key={si}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs sm:text-sm text-foreground font-semibold">{skill.name}</span>
                            <span className="text-xs text-accent font-bold">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 bg-muted overflow-hidden">
                            <motion.div
                              className="h-full bg-accent"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + si * 0.08, duration: 1, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Technologies / Systems */}
              <div className="flex flex-wrap justify-center items-center gap-3 bg-muted/30 border border-border rounded-sm p-5 max-w-3xl mx-auto">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold me-3">
                  {ar ? 'الأنظمة والبرمجيات المعتمدة' : 'SYSTEMS CRITICAL INVENTORY'}:
                </span>
                {['Opera PMS', 'Opera Cloud', 'Fidelio', 'Concerto IHG', 'MARSHA Marriott', 'MS Project', 'Six Sigma Minitab'].map((tech, i) => (
                  <span key={i} className="px-3.5 py-2 rounded-sm bg-card border border-border text-xs font-semibold text-foreground/95">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Education & Credentials Editorial Spread */}
          <section className="bg-muted/20 border-y border-border/40 py-24">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-xl mx-auto">
                <div className="section-eyebrow">{ar ? 'الأكاديميات والاعتمادات' : 'Education'}</div>
                <h2 className="section-heading inline-block">
                  {ar ? 'المؤهلات العلمية والمهنية' : 'Education & Certifications'}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Academic Qualifications */}
                <motion.div 
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  className="bg-card rounded-sm p-8 border border-border flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-foreground mb-6 text-base flex items-center gap-2.5 border-b border-border/40 pb-4">
                      <GraduationCap size={20} className="text-accent" />
                      <span>{ar ? 'المسار الأكاديمي' : 'Academic Credentials'}</span>
                    </h3>
                    <div className="space-y-6">
                      {[
                        { 
                          degree: ar ? 'ماجستير إدارة الأعمال (MBA)' : 'MBA', 
                          school: ar ? 'الأكاديمية العربية للعلوم والتكنولوجيا (معدل ٣.٥٦)' : 'Arab Academy for Science & Technology (GPA: 3.56)',
                          year: '2012' 
                        },
                        { 
                          degree: ar ? 'دبلوم إدارة شعبة الغرف' : 'Rooms Division Diploma', 
                          school: ar ? 'معهد غليون للتعليم العالي، سويسرا' : 'Glion Institute of Higher Education, Switzerland',
                          year: '1998' 
                        },
                        { 
                          degree: ar ? 'بكالوريوس إدارة الفنادق' : "Bachelor's in Hotel Management", 
                          school: ar ? 'كلية السياحة والفنادق، جامعة الإسكندرية' : 'Faculty of Tourism & Hotels, Alexandria University',
                          year: '1994' 
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-foreground text-sm">{item.degree}</p>
                              <span className="text-[10px] font-mono text-muted-foreground">({item.year})</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{item.school}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Professional Certifications */}
                <motion.div 
                  initial={{ opacity: 0, x: isRTL ? -30 : 30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  className="bg-card rounded-sm p-8 border border-border flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-foreground mb-6 text-base flex items-center gap-2.5 border-b border-border/40 pb-4">
                      <Award size={20} className="text-accent" />
                      <span>{ar ? 'الاعتمادات والتراخيص المهنية' : 'Certifications & Accreditation'}</span>
                    </h3>
                    <div className="space-y-4">
                      {[
                        ar ? 'شهادة الحزام الأسود سيكس سيجما (Six Sigma Black Belt)' : 'Six Sigma Black Belt Certified',
                        ar ? 'شهادة CTC المعتمدة للتدريب الحرفي المهني فندقياً' : 'CTC Craft Training Certificate (Marriott)',
                        ar ? 'شهادة إدارة العائد المتقدم وتسعير الأصول الفندقية' : 'Advanced Yield & Revenue Management (Marriott)',
                        ar ? 'مدير ومدرب معتمد للتطوير والابتكار التشغيلي' : 'Operational Innovation Director & Coach',
                        ar ? 'تدريب الذكاء العاطفي وإعداد قيادات الأصول الفندقية' : 'Emotional Intelligence for Executive Leaders'
                      ].map((cert, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <p className="text-xs sm:text-sm font-semibold text-foreground/90 leading-relaxed">{cert}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Language Chips */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border"
              >
                {[
                  { lang: ar ? 'العربية' : 'Arabic', level: ar ? 'اللغة الأم' : 'Native Fluency' },
                  { lang: ar ? 'الإنجليزية' : 'English', level: ar ? 'طليق (لغة العمل المهني)' : 'Professional Fluency' },
                  { lang: ar ? 'الألمانية' : 'German', level: ar ? 'مستوى متوسط' : 'Conversational' }
                ].map((item, i) => (
                  <div key={i} className="text-center bg-card border border-border rounded-sm px-6 py-4 min-w-[140px]">
                    <p className="font-bold text-foreground text-sm">{item.lang}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{item.level}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Next Chapter CTA */}
          <section className="py-20">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <Link to="/career">
                <Button variant="outline" className="rounded-sm px-8 py-6 text-base font-semibold gap-2 border-border hover:border-accent transition-colors duration-300 bg-transparent">
                  {ar ? 'استكشف المسار المهني الكامل' : 'Explore My Full Career Timeline'}
                  <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap, Globe, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const About = () => {
  const { language, t, isRTL } = useLanguage();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] } })
  };

  const skills = [
    'Revenue Growth', 'P&L Management', 'Pre-Opening Operations', 'Major Renovations',
    'Brand Conversions', 'Team Leadership', 'Guest Experience', 'Strategic Planning',
    'Six Sigma', 'Operational Excellence', 'Stakeholder Relations', 'Asset Management'
  ];

  const philosophyItems = [
    {
      title: language.code === 'ar' ? 'التميز التشغيلي' : 'Operational Excellence',
      desc: language.code === 'ar' ? 'تبسيط العمليات لأقصى كفاءة مع أعلى معايير الجودة.' : 'Streamlining processes to maximize efficiency while maintaining the highest quality standards.'
    },
    {
      title: language.code === 'ar' ? 'تجربة الضيوف' : 'Guest Experience',
      desc: language.code === 'ar' ? 'خلق تجارب مميزة تتجاوز التوقعات وتعزز ولاء الضيوف.' : 'Creating memorable experiences that exceed expectations and foster long-term loyalty.'
    },
    {
      title: language.code === 'ar' ? 'تطوير المواهب' : 'Talent Development',
      desc: language.code === 'ar' ? 'إرشاد وتمكين الفريق للوصول لكامل إمكاناتهم.' : 'Mentoring and empowering team members to reach their full potential.'
    },
    {
      title: language.code === 'ar' ? 'الابتكار والاستدامة' : 'Innovation & Sustainability',
      desc: language.code === 'ar' ? 'تبني التقنيات الجديدة والممارسات المستدامة.' : 'Embracing new technologies and sustainable practices for operational efficiency.'
    }
  ];

  return (
    <PageTransition>
    <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 md:px-8 mb-20">
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start ${isRTL ? 'direction-rtl' : ''}`}>
            {/* Image */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 blur-sm" />
                <img
                  alt={language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous'}
                  className="relative w-full rounded-2xl shadow-xl object-cover aspect-[3/4]"
                  src="/lovable-uploads/2a742c4a-aaea-4c0f-ad38-ea2891228c62.jpg"
                />
              </div>
              <div className="mt-6">
                <a href="https://drive.google.com/file/d/1jyAbDkfP2rkgPH4148TMWLmF2uzhw0Jr/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-semibold gap-2">
                    <Download size={16} />
                    {language.code === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent-foreground mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {language.code === 'ar' ? 'أكثر من 30 عامًا في الضيافة' : '30+ Years in Hospitality'}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground leading-tight">
                  {language.code === 'ar' ? 'من أنا' : 'About Me'}
                </h1>
              </motion.div>

              <motion.p initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                {language.code === 'ar'
                  ? 'كمدير تنفيذي متميز في مجال الضيافة مع أكثر من 30 عامًا من الخبرة القيادية، تخصصت في عمليات ما قبل الافتتاح، والتجديدات واسعة النطاق، والتميز التشغيلي عبر الأسواق الدولية.'
                  : 'As an accomplished Hospitality Executive with over 30 years of progressive leadership experience, I have specialized in pre-opening operations, large-scale renovations, and operational excellence across international markets.'
                }
              </motion.p>

              <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-muted-foreground leading-relaxed">
                {language.code === 'ar'
                  ? 'تمتد خبرتي الدولية عبر مصر والمملكة العربية السعودية وليبيا والإمارات العربية المتحدة، مما يمنحني منظورًا فريدًا حول اتجاهات الضيافة الإقليمية والفروق الثقافية.'
                  : 'My international experience spans Egypt, Saudi Arabia, Libya, and the UAE, giving me a unique perspective on regional hospitality trends and cultural nuances that impact guest experiences.'
                }
              </motion.p>

              {/* Info Grid */}
              <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Briefcase, title: language.code === 'ar' ? 'الخبرة' : 'Experience', desc: language.code === 'ar' ? '+30 عامًا مع ماريوت، آي إتش جي، أكور' : '30+ years with Marriott, IHG, Accor' },
                  { icon: Award, title: language.code === 'ar' ? 'التخصص' : 'Expertise', desc: language.code === 'ar' ? 'ما قبل الافتتاح، التجديدات، التميز التشغيلي' : 'Pre-opening, Renovations, Operational Excellence' },
                  { icon: GraduationCap, title: language.code === 'ar' ? 'التعليم' : 'Education', desc: language.code === 'ar' ? 'ماجستير إدارة الأعمال، دبلوم جليون' : 'MBA, Glion Institute Diploma' },
                  { icon: Globe, title: language.code === 'ar' ? 'اللغات' : 'Languages', desc: language.code === 'ar' ? 'العربية، الإنجليزية، الألمانية' : 'Arabic, English, German' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/50">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Philosophy */}
        <section className="bg-muted/30 border-y border-border/50 py-20">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-4">
                {language.code === 'ar' ? 'فلسفة القيادة' : 'Leadership Philosophy'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {philosophyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-1 h-8 bg-accent rounded-full mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center"
            >
              <blockquote className="text-xl md:text-2xl italic font-light max-w-3xl mx-auto">
                {language.code === 'ar'
                  ? '"التميز في الضيافة ليس مجرد خدمة؛ إنه استراتيجية ورؤية وذكاء عاطفي."'
                  : '"Excellence in hospitality is not just service; it\'s strategy, vision, and emotional intelligence."'
                }
              </blockquote>
              <p className="mt-4 text-accent font-medium">— Islam Mahrous</p>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-4">
                {language.code === 'ar' ? 'المهارات الرئيسية' : 'Core Skills'}
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-12">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="px-4 py-2 rounded-full bg-muted border border-border/50 text-sm font-medium text-foreground hover:bg-accent/10 hover:border-accent/30 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium self-center mr-3">
                {language.code === 'ar' ? 'أنظمة' : 'Systems'}:
              </span>
              {['Opera', 'Fidelio', 'HIS', 'MS Office'].map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-muted/30 border-y border-border/50 py-20">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-4">
                {language.code === 'ar' ? 'التعليم والشهادات' : 'Education & Certifications'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Academic */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <GraduationCap size={18} className="text-accent-foreground" />
                  {language.code === 'ar' ? 'المؤهلات الأكاديمية' : 'Academic Qualifications'}
                </h3>
                <div className="space-y-5">
                  {[
                    { degree: language.code === 'ar' ? 'ماجستير إدارة الأعمال' : 'MBA', school: language.code === 'ar' ? 'الأكاديمية العربية للعلوم والتكنولوجيا (3.56)' : 'Arab Academy for Science & Technology (GPA: 3.56)' },
                    { degree: language.code === 'ar' ? 'بكالوريوس' : "Bachelor's Degree", school: language.code === 'ar' ? 'كلية السياحة والفنادق، الإسكندرية' : 'Faculty of Tourism & Hotels, Alexandria' },
                    { degree: language.code === 'ar' ? 'دبلوم قسم الغرف' : 'Rooms Division Diploma', school: language.code === 'ar' ? 'معهد جليون، سويسرا' : 'Glion Institute, Switzerland' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.degree}</p>
                        <p className="text-xs text-muted-foreground">{item.school}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Award size={18} className="text-accent-foreground" />
                  {language.code === 'ar' ? 'الشهادات المهنية' : 'Professional Certifications'}
                </h3>
                <div className="space-y-4">
                  {[
                    language.code === 'ar' ? 'شهادة الحزام الأسود سيكس سيجما' : 'Six Sigma Black Belt',
                    language.code === 'ar' ? 'مدير ومدرب الابتكار التشغيلي' : 'Operational Innovation Director & Coach',
                    language.code === 'ar' ? 'شهادة تدريب الحرف CTC' : 'CTC Craft Training Certificate',
                    language.code === 'ar' ? 'شهادة إدارة العائد' : 'Yield Management Certification',
                    language.code === 'ar' ? 'تدريب القيادة للذكاء العاطفي' : 'Emotional Intelligence Leadership'
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <p className="text-sm text-foreground">{cert}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Languages */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center gap-8 mt-12">
              {[
                { lang: language.code === 'ar' ? 'العربية' : 'Arabic', level: language.code === 'ar' ? 'اللغة الأم' : 'Native' },
                { lang: language.code === 'ar' ? 'الإنجليزية' : 'English', level: language.code === 'ar' ? 'طليق' : 'Fluent' },
                { lang: language.code === 'ar' ? 'الألمانية' : 'German', level: language.code === 'ar' ? 'متوسط' : 'Intermediate' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="font-semibold text-foreground">{item.lang}</p>
                  <p className="text-xs text-muted-foreground">{item.level}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <Link to="/career">
              <Button variant="outline" className="rounded-xl px-8 py-6 text-base font-medium gap-2 border-border hover:border-accent transition-all">
                {language.code === 'ar' ? 'استكشف مسيرتي المهنية' : 'Explore My Career Journey'}
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

export default About;

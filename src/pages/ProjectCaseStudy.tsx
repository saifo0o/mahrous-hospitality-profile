
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Building, ArrowRight, ArrowLeft, Target, Route, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getCaseStudyBySlug } from '@/data/caseStudies';

const ProjectCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) return <Navigate to="/projects" replace />;

  const BackIcon = isRTL ? ArrowRight : ArrowLeft;
  const NextIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
        <Navbar />

        <main id="main" className="flex-grow pt-28 pb-24">
          <div className="container mx-auto px-4 md:px-8 mb-8">
            <BreadcrumbNav
              items={[
                { label: ar ? 'المشاريع' : 'Projects', href: '/projects' },
                { label: ar ? study.title.ar : study.title.en, active: true },
              ]}
            />
          </div>

          {/* Hero — outcome first, per case-study best practice: lead with the result, then the story */}
          <section className="container mx-auto px-4 md:px-8 mb-14">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider mb-5">
                <span className="flex items-center gap-1.5"><Building size={12} />{ar ? study.role.ar : study.role.en}</span>
                <span className="opacity-40">·</span>
                <span className="flex items-center gap-1.5"><MapPin size={12} />{ar ? study.location.ar : study.location.en}</span>
                <span className="opacity-40">·</span>
                <span className="flex items-center gap-1.5"><Calendar size={12} />{ar ? study.period.ar : study.period.en}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-10 items-end">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-playfair text-foreground leading-[1.1] mb-4">
                    {ar ? study.title.ar : study.title.en}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    {ar ? study.subtitle.ar : study.subtitle.en}
                  </p>
                </div>

                {/* Headline metric — the outcome, given hero-scale prominence */}
                <div className="signature-frame text-center lg:text-left rtl:lg:text-right">
                  <p className="text-5xl md:text-6xl font-playfair text-accent leading-none mb-2">
                    {study.headlineMetric.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {ar ? study.headlineMetric.label.ar : study.headlineMetric.label.en}
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Hero image */}
          <motion.section
            className="container mx-auto px-4 md:px-8 mb-16"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative rounded-sm overflow-hidden h-64 md:h-[420px] border border-border">
              <img src={study.heroImage} alt={ar ? study.title.ar : study.title.en} className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
          </motion.section>

          {/* Metrics strip */}
          <section className="container mx-auto px-4 md:px-8 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {study.metrics.map((m, i) => (
                <motion.div
                  key={i}
                  className="operational-card rounded-r-sm py-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <p className="text-2xl md:text-3xl font-bold font-playfair text-foreground">{m.value}</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">{ar ? m.label.ar : m.label.en}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Challenge / Approach / Result — the narrative, per golden-ratio reading column */}
          <section className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto space-y-16">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Target size={16} className="text-accent" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-playfair text-foreground">{ar ? 'التحدي' : 'The Challenge'}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{ar ? study.challenge.ar : study.challenge.en}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-luxury-emerald/10 flex items-center justify-center flex-shrink-0">
                    <Route size={16} className="text-luxury-emerald" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-playfair text-foreground">{ar ? 'النهج' : 'The Approach'}</h2>
                </div>
                <div className="space-y-4">
                  {study.approach.map((step, i) => (
                    <div key={i} className="operational-card rounded-r-sm py-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-mono text-xs text-luxury-emerald font-bold me-2">0{i + 1}</span>
                        {ar ? step.ar : step.en}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={16} className="text-accent" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-playfair text-foreground">{ar ? 'النتيجة' : 'The Result'}</h2>
                </div>
                <p className="text-foreground leading-relaxed text-base md:text-lg font-medium border-l-2 rtl:border-l-0 rtl:border-r-2 border-accent pl-5 rtl:pl-0 rtl:pr-5">
                  {ar ? study.result.ar : study.result.en}
                </p>
              </motion.div>
            </div>
          </section>

          {/* CTA + navigation */}
          <section className="container mx-auto px-4 md:px-8 mt-20">
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border/50 pt-10">
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <BackIcon size={16} />
                {ar ? 'كل المشاريع' : 'All projects'}
              </Link>
              <Link to="/book-consultation">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm px-6 py-5 font-semibold gap-2">
                  {ar ? 'ناقش مشروعك' : 'Discuss Your Project'}
                  <NextIcon size={16} />
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

export default ProjectCaseStudy;

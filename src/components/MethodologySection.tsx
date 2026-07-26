import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ClipboardList, GitBranch, GraduationCap, RefreshCw, Award, CheckCircle2, ChevronRight, Activity, Zap, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function MethodologySection() {
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: ClipboardList,
      title: ar ? 'التقييم والتحليل' : 'Operational Audit',
      phase: ar ? 'المرحلة ٠١' : 'PHASE 01',
      subtitle: ar ? 'تحديد الثغرات الأساسية' : 'Baseline Gap Analysis',
      desc: ar
        ? 'تدقيق أساسي شامل للوضع المالي والتشغيلي بالاعتماد على مؤشرات STR ومراجعة الأرباح والخسائر ومقاييس رضا النزلاء لتحديد الفجوة التشغيلية بدقة.'
        : 'Deep audit across STR benchmarking, P&L flows, and guest satisfaction metrics to pinpoint performance leaks and service gaps.',
      toolkit: ar 
        ? ['مقارنات STR المرجعية', 'مراجعة P&L والمصاريف', 'استطلاعات رضا الضيوف'] 
        : ['STR Market Benchmarking', 'P&L / GOP Flow-through Audits', 'Guest Satisfaction Surveys'],
      kpi: ar ? 'تحديد فجوة الإيرادات والأرباح الضائعة' : 'Identify GOP leaks & revenue opportunities'
    },
    {
      icon: GitBranch,
      title: ar ? 'التوحيد القياسي' : 'Process Standardization',
      phase: ar ? 'المرحلة ٠٢' : 'PHASE 02',
      subtitle: ar ? 'تصميم أدلة التشغيل' : 'SOP Standard Architecture',
      desc: ar
        ? 'تحليل الأسباب الجذرية للمشاكل باستخدام منهجية Six Sigma DMAIC، ثم صياغة وتطبيق معايير وإجراءات تشغيل موحدة (SOPs) متوافقة مع متطلبات العلامة.'
        : 'Root-cause analysis using Six Sigma DMAIC, culminating in writing and deploying brand-compliant Standard Operating Procedures (SOPs) across all departments.',
      toolkit: ar 
        ? ['تحليل السبب الجذري DMAIC', 'كتابة معايير الإجراءات SOPs', 'مواءمة متطلبات العلامة'] 
        : ['Six Sigma DMAIC Framework', 'Departmental SOP Manuals', 'Global Brand Audit Checklists'],
      kpi: ar ? 'جاهزية الفندق بنسبة 100% لتدقيق الجودة' : '100% brand standards compliance'
    },
    {
      icon: GraduationCap,
      title: ar ? 'تمكين الفريق وتدريبه' : 'Talent Cultivation',
      phase: ar ? 'المرحلة ٠٣' : 'PHASE 03',
      subtitle: ar ? 'بناء ثقافة الخدمة' : 'Service Culture Curriculum',
      desc: ar
        ? 'بناء وتقديم مناهج تدريبية مخصصة لثقافة الخدمة، تهدف لتنمية مهارات الكادر وبناء قادة المستقبل وإكسابهم الثقة في تطبيق الإجراءات الجديدة.'
        : 'Bespoke service-culture curriculum designed to onboard and align the operational team, empowering them to execute the new procedures.',
      toolkit: ar 
        ? ['حقائب تدريبية لثقافة الخدمة', 'مؤشرات أداء العاملين KPIs', 'تأهيل قادة الأقسام'] 
        : ['Service Excellence Workshops', 'Individual Training Metrics', 'Departmental Champion Alignment'],
      kpi: ar ? 'ارتفاع مؤشر رضا النزلاء والخدمة' : '+20% staff confidence & service index'
    },
    {
      icon: RefreshCw,
      title: ar ? 'استدامة الأداء والتطوير' : 'Sustained Kaizen',
      phase: ar ? 'المرحلة ٠٤' : 'PHASE 04',
      subtitle: ar ? 'لوحات قياس الأداء الدورية' : 'Performance Tracking & Loops',
      desc: ar
        ? 'بناء لوحات رقمية تفاعلية لقياس الأداء ومتابعة تنفيذ معايير كايزن للتحسين المستمر، مع عقد مراجعات ربع سنوية لضمان استدامة النتائج.'
        : 'Establish digital performance dashboards and run continuous Kaizen feedback loops to keep quality standards locking in year-over-year growth.',
      toolkit: ar 
        ? ['لوحات قياس الأداء الرقمية', 'مراجعات ربع سنوية للجودة', 'منهجية كايزن للتحسين'] 
        : ['Operational KPI Dashboards', 'Quarterly Service Quality Reviews', 'Kaizen Continuous Action Boards'],
      kpi: ar ? 'تحسن مستمر واستدامة للأرباح' : 'Secured GOP retention & zero drift'
    },
  ];

  return (
    <section id="method" className="py-24 md:py-32 bg-muted/20 border-y border-border/40 relative overflow-hidden" ref={ref}>
      {/* Dynamic background shapes */}
      <div className="absolute top-[20%] start-[-10%] w-[400px] h-[400px] bg-luxury-emerald/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] end-[-10%] w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div
          className={`mb-16 max-w-3xl ${isRTL ? 'text-right ms-auto' : ''}`}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            04 &mdash; {ar ? 'المنهجية التشغيلية' : 'Operational System'}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-playfair text-foreground leading-tight">
            {ar ? 'هندسة كفاءة الفنادق والتميز التشغيلي' : 'Standardizing Hospitality Excellence'}
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-2xl font-light">
            {ar
              ? 'نهج منضبط يمزج بين دقة معايير Six Sigma وعلاقات الضيافة الفاخرة لضمان تحقيق كفاءة تشغيلية مستدامة ومربحة.'
              : 'Combining the engineering precision of Six Sigma Black Belt methodologies with luxury hospitality standards to scale operational profit.'}
          </p>
        </motion.div>

        {/* Asymmetrical Layout: Interactive Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr] gap-10 lg:gap-16 items-stretch">
          
          {/* Left Panel: Vertical steps list */}
          <div className="flex flex-col gap-4 justify-between">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-sm border cursor-pointer transition-colors duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-card border-accent'
                      : 'bg-card/40 border-border/40 hover:border-accent/40 hover:bg-card/80'
                  }`}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-4">
                    {/* Number index badge */}
                    <div className={`w-10 h-10 rounded-sm flex items-center justify-center font-playfair font-bold text-sm transition-colors ${
                      isActive 
                        ? 'bg-accent text-accent-foreground shadow-sm' 
                        : 'bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">{step.phase}</span>
                      <h3 className="text-sm font-semibold text-foreground mt-0.5">{step.title}</h3>
                    </div>
                  </div>
                  
                  {/* Arrow Indicator */}
                  <div className={`text-muted-foreground transition-transform duration-300 ${
                    isActive 
                      ? 'text-accent translate-x-1 rtl:-translate-x-1' 
                      : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5'
                  }`}>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Panel: Interactive Dashboard Detail */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="luxury-container h-full flex flex-col justify-between p-8 md:p-10 relative overflow-hidden"
              >
                {/* Background overlay mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.015] to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Step title */}
                  <div className="flex items-start justify-between border-b border-border/50 pb-6 mb-6">
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                        {steps[activeStep].phase} • {steps[activeStep].subtitle}
                      </span>
                      <h3 className="text-2xl font-normal font-playfair text-foreground mt-2">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-sm bg-luxury-emerald/10 flex items-center justify-center flex-shrink-0">
                      {React.createElement(steps[activeStep].icon, { className: "w-6 h-6 text-luxury-emerald" })}
                    </div>
                  </div>

                  {/* Core description */}
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {steps[activeStep].desc}
                  </p>

                  {/* Operational toolkit list */}
                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-3 flex items-center gap-1.5">
                      <Activity size={12} className="text-accent" />
                      {ar ? 'أدوات التشغيل والجودة' : 'SYSTEM TOOLKIT'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {steps[activeStep].toolkit.map((tool, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground/90 bg-muted/40 px-3.5 py-2.5 rounded-sm border border-border/20">
                          <Check size={12} className="text-luxury-emerald flex-shrink-0" />
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* KPI bottom panel */}
                <div className="pt-6 border-t border-border/50 mt-auto relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-accent font-bold">
                      {ar ? 'الهدف التشغيلي الرئيسي' : 'KEY STRATEGIC OUTCOME'}
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-1">
                      {steps[activeStep].kpi}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-luxury-emerald uppercase bg-luxury-emerald/10 px-2.5 py-1 rounded-md self-start sm:self-center">
                    <Zap size={10} />
                    Six Sigma
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { IconFFEAudit, IconQualityShield, IconTalentMentorship, IconSTRYield } from '@/components/ui/hospitality-icons';

export default function KaizenDiagram() {
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: ar ? '١. التقييم والتشخيص التشغيلي' : '1. Audit & Diagnose',
      subtitle: ar ? 'تحليل تدفق العمليات وحصر الفجوات التشغيلية والمالية' : 'Comprehensive workflow & CAPEX gap analysis',
      icon: <IconFFEAudit size={28} className="text-accent" />,
      kpi: ar ? 'تقليص فاقد المصروفات بنسبة ١٥٪+' : '15%+ Expense Leakage Reduction',
      detail: ar 
        ? 'فحص شامل لبنود الميزانية العمومية وأقسام خدمة الغرف والأغذية والمشروبات لتحديد فرص توفير النفقات الفورية دون المساس بالجودة.'
        : 'Deep-dive audit of departmental P&L, staffing ratios, and procurement contracts to eliminate immediate operational waste.'
    },
    {
      id: 1,
      title: ar ? '٢. توحيد وإرساء المعايير (SOPs)' : '2. Standardize Systems',
      subtitle: ar ? 'هيكلة الأدلة التشغيلية وتطبيق معايير الجودة العالمية' : 'Institutionalizing international brand SOP governance',
      icon: <IconQualityShield size={28} className="text-accent" />,
      kpi: ar ? 'تطابق معايير الجودة بنسبة ٩٨٪' : '98% Brand Standard Compliance',
      detail: ar 
        ? 'بناء أنظمة تشغيلية مستدامة معتمدة على أفضل ممارسات ماريوت العالمية وشيراتون، تضمن ثبات الخدمة الفاخرة على مدار الساعة.'
        : 'Engineering robust, self-sustaining operational playbooks and Six Sigma quality checklists that guarantee consistent 5-star service delivery.'
    },
    {
      id: 2,
      title: ar ? '٣. التمكين وتدريب القيادات' : '3. Empower Champions',
      subtitle: ar ? 'نقل الخبرات وتفويض مديري الأقسام لقيادة التميز' : 'Coaching HODs to own departmental performance & flow-through',
      icon: <IconTalentMentorship size={28} className="text-accent" />,
      kpi: ar ? 'ارتفاع رضا الموظفين وتقليص الدوران' : '25% Increase in Staff Retention',
      detail: ar 
        ? 'برامج توجيه وتدريب مكثفة لرؤساء الأقسام (HODs) لتحويلهم إلى قادة استراتيجيين قادرين على اتخاذ القرارات وحل التحديات ميدانيًا.'
        : 'Intensive mentorship and delegation pipelines designed to transform shift supervisors into proactive, analytical department heads.'
    },
    {
      id: 3,
      title: ar ? '٤. تعظيم الربحية والقياس المستمر' : '4. Yield & Measure',
      subtitle: ar ? 'مراقبة مؤشرات الأداء (RevPAR / GOP) وحلقة التحسين المستمر' : 'Continuous STR benchmarking, RevPAR & GOP maximization',
      icon: <IconSTRYield size={28} className="text-accent" />,
      kpi: ar ? 'نمو صافي الأرباح التشغيلية GOP' : 'Consistently Outperforming STR Index',
      detail: ar 
        ? 'ربط المخرجات التشغيلية بمؤشرات الأداء المالية الحية، مع إعادة التقييم الدوري (Kaizen Loop) لضمان النمو المستدام ومضاعفة قيمة الأصل الفندقي.'
        : 'Connecting daily operational metrics to live financial yield targets, creating an endless feedback loop of profit expansion and asset appreciation.'
    }
  ];

  return (
    <div className="bg-card border border-border/60 rounded-sm p-6 sm:p-10 my-12 overflow-hidden relative shadow-lg">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-accent font-sans px-3 py-1 rounded bg-accent/10 border border-accent/20 inline-block mb-3">
          {ar ? 'منهجية العمل التنفيذية' : 'SIX SIGMA / KAIZEN FRAMEWORK'}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
          {ar ? 'حلقة التميز التشغيلي المستمر (Kaizen Loop)' : 'The Continuous Operational Growth Cycle'}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2">
          {ar ? 'انقر على أي مرحلة لاستكشاف تفاصيل التطبيق ومؤشرات قياس الأداء المالية والتشغيلية' : 'Click any stage to explore strategic implementation details and financial yield metrics'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Step Selector / Circular Workflow Visual representation */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {steps.map((step) => {
            const isSelected = activeStep === step.id;
            return (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-5 rounded-sm border text-start transition-all duration-300 relative flex flex-col justify-between h-44 cursor-pointer overflow-hidden ${
                  isSelected 
                    ? 'bg-accent/15 border-accent shadow-[0_0_20px_rgba(212,175,55,0.15)]' 
                    : 'bg-muted/20 border-border/50 hover:border-accent/40'
                }`}
              >
                {isSelected && (
                  <motion.div 
                    layoutId="activeGlow" 
                    className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" 
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className="flex items-center justify-between z-10 w-full">
                  <div className={`p-2.5 rounded-sm border ${isSelected ? 'bg-accent/20 border-accent/40 text-accent' : 'bg-card border-border/50 text-foreground'}`}>
                    {step.icon}
                  </div>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${isSelected ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}`}>
                    0{step.id + 1}
                  </span>
                </div>

                <div className="z-10 mt-auto">
                  <h4 className={`text-sm sm:text-base font-bold line-clamp-1 mb-1 ${isSelected ? 'text-accent' : 'text-foreground'}`}>
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground line-clamp-2 leading-snug">
                    {step.subtitle}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="bg-muted/30 border border-border/80 rounded-sm p-6 sm:p-8 relative min-h-[250px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 border-b border-border/60 pb-4">
                  <div className="p-3 rounded-sm bg-accent/20 border border-accent/40 text-accent">
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest block font-bold">
                      {ar ? `المرحلة التنفيذية ٠${activeStep + 1}` : `PHASE 0${activeStep + 1}`}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground">
                      {steps[activeStep].title}
                    </h4>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed mb-6 font-light">
                  {steps[activeStep].detail}
                </p>
              </div>

              <div className="bg-card border border-accent/30 rounded-sm p-4 flex items-center justify-between gap-4 mt-auto">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {ar ? 'المستهدف الأساسي (KPI)' : 'Primary Yield KPI'}:
                </span>
                <span className="text-xs sm:text-sm font-bold text-accent font-mono bg-accent/10 px-3 py-1 rounded border border-accent/20">
                  {steps[activeStep].kpi}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

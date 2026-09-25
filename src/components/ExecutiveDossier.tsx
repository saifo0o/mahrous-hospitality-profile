import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer, Link2, MessageCircle, FileText, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import signatureLogo from '@/assets/logos/im-signature-gold.png';
import { socialLinks } from '@/lib/brandConstants';

const metrics = [
  { v: '30+', en: 'Years in hospitality', ar: 'عامًا في الضيافة' },
  { v: '19', en: 'Properties in Marriott Egypt GM Council', ar: 'فندقًا في مجلس ماريوت مصر' },
  { v: '3', en: 'Global brand families: Marriott, IHG, Accor', ar: 'عائلات علامات عالمية' },
  { v: '3', en: 'Languages: Arabic, English, German', ar: 'لغات: العربية والإنجليزية والألمانية' },
];

const roles = [
  { p: 'Dec 2025 – May 2026', en: 'Group Operations Director — Prime Hotels, KSA', ar: 'مدير عمليات المجموعة — فنادق برايم، السعودية' },
  { p: '2023 – 2025', en: 'General Manager — Four Points by Sheraton, KSA', ar: 'مدير عام — فور بوينتس باي شيراتون، السعودية' },
  { p: '2014 – 2023', en: 'General Manager — Sheraton Montazah, Alexandria', ar: 'مدير عام — شيراتون المنتزه، الإسكندرية' },
  { p: 'Consulting', en: 'Independent Advisor — Crowne Plaza Mirage, Porto Said, The V Luxury Resort', ar: 'مستشار مستقل — كراون بلازا ميراج، بورتو سعيد، ذا في' },
];

const competencies = {
  en: ['Pre-opening & brand conversion', 'Hotel turnarounds', 'Multi-property operations', 'Revenue & GOP optimisation', 'Owner & asset relations', 'Team leadership & culture'],
  ar: ['ما قبل الافتتاح وتحويل العلامات', 'إنقاذ الفنادق', 'عمليات متعددة الفنادق', 'تحسين الإيرادات والأرباح', 'علاقات الملاك والأصول', 'قيادة الفرق والثقافة'],
};

const ExecutiveDossier = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    document.body.classList.add('dossier-open');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('dossier-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const copyLink = async () => {
    await navigator.clipboard.writeText(`${window.location.origin}/#dossier`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const wa = `${socialLinks.whatsapp}?text=${encodeURIComponent(
    ar ? 'مرحبًا إسلام، اطلعت على ملفك التنفيذي وأود مناقشة فرصة استشارية.' : 'Hello Islam, I reviewed your executive dossier and would like to discuss an advisory opportunity.'
  )}`;

  return createPortal(
    <div className="dossier-root fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-foreground/40 backdrop-blur-sm p-4 md:p-10" onClick={onClose} role="dialog" aria-modal="true" aria-label={ar ? 'الملف التنفيذي' : 'Executive dossier'}>
      <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="dossier-toolbar flex flex-wrap items-center justify-end gap-2 mb-3">
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 h-9 text-xs font-semibold uppercase tracking-wider text-accent-foreground hover:bg-accent/90">
            <Printer size={14} />{ar ? 'طباعة / PDF' : 'Print / PDF'}
          </button>
          <button onClick={copyLink} className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-4 h-9 text-xs font-semibold uppercase tracking-wider text-foreground hover:border-accent">
            {copied ? <Check size={14} className="text-accent" /> : <Link2 size={14} />}{copied ? (ar ? 'تم النسخ' : 'Copied') : (ar ? 'نسخ الرابط' : 'Copy link')}
          </button>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-4 h-9 text-xs font-semibold uppercase tracking-wider text-foreground hover:border-accent">
            <MessageCircle size={14} />WhatsApp
          </a>
          <button onClick={onClose} aria-label={ar ? 'إغلاق' : 'Close'} className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-card text-foreground hover:border-accent">
            <X size={16} />
          </button>
        </div>

        <article className="dossier-page bg-card text-foreground rounded-sm border border-accent/20 shadow-2xl p-8 md:p-12">
          <header className="flex items-start justify-between gap-6 border-b border-accent/30 pb-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">{ar ? 'ملف تنفيذي للمجالس' : 'Board Executive Dossier'}</p>
              <h2 className="font-playfair text-3xl md:text-4xl mt-2">{ar ? 'إسلام محروس' : 'Islam Mahrous'}</h2>
              <p className="text-sm text-muted-foreground mt-1">{ar ? 'تنفيذي عمليات فندقية ومستشار ضيافة' : 'Hotel Operations Executive & Hospitality Advisor'}</p>
            </div>
            <img src={signatureLogo} alt="" className="h-12 w-auto" />
          </header>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-border/60">
            {metrics.map((m, i) => (
              <div key={i}>
                <p className="font-playfair text-3xl text-accent">{m.v}</p>
                <p className="text-[11px] leading-snug text-muted-foreground mt-1">{ar ? m.ar : m.en}</p>
              </div>
            ))}
          </section>

          <section className="py-6 border-b border-border/60">
            <h3 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-accent mb-3">{ar ? 'الملخص' : 'Executive summary'}</h3>
            <p className="text-sm leading-relaxed">
              {ar
                ? 'قائد ضيافة بخبرة تتجاوز 30 عامًا عبر ماريوت وآي إتش جي وأكور في مصر والسعودية. متخصص في ما قبل الافتتاح، وإعادة التأهيل، وتحويل الأداء التشغيلي والمالي لفنادق متعددة العلامات.'
                : 'Hospitality leader with 30+ years across Marriott, IHG and Accor in Egypt and Saudi Arabia. Specialist in pre-openings, renovations, turnarounds and driving operational and financial performance across multi-brand portfolios.'}
            </p>
          </section>

          <section className="py-6 border-b border-border/60">
            <h3 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-accent mb-3">{ar ? 'المناصب الرئيسية' : 'Key appointments'}</h3>
            <ul className="space-y-3">
              {roles.map((r, i) => (
                <li key={i} className="grid grid-cols-[110px_1fr] gap-4 text-sm">
                  <span className="text-muted-foreground text-xs pt-0.5">{r.p}</span>
                  <span>{ar ? r.ar : r.en}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="py-6 border-b border-border/60">
            <h3 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-accent mb-3">{ar ? 'الكفاءات الأساسية' : 'Core competencies'}</h3>
            <div className="flex flex-wrap gap-2">
              {competencies[ar ? 'ar' : 'en'].map((c) => (
                <span key={c} className="rounded-sm border border-accent/25 bg-accent/5 px-3 py-1 text-xs">{c}</span>
              ))}
            </div>
          </section>

          <footer className="pt-6 flex flex-wrap justify-between gap-3 text-xs text-muted-foreground">
            <span>islam-mahrous.com</span>
            <span>contact@islam-mahrous.com</span>
            <span dir="ltr">+20 109 555 6779</span>
            <a href="/Islam_Mahrous_Resume.pdf" download className="dossier-toolbar inline-flex items-center gap-1 text-accent hover:underline">
              <FileText size={12} />{ar ? 'السيرة الكاملة' : 'Full resume'}
            </a>
          </footer>
        </article>
      </div>
    </div>,
    document.body
  );
};

export default ExecutiveDossier;

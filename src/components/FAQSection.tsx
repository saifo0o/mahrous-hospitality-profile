
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const { language } = useLanguage();
  const ar = language.code === 'ar';

  const faqs = [
    {
      q: ar ? 'ما أنواع المهام التي تقبلها؟' : 'What types of engagements do you take on?',
      a: ar
        ? 'أدواراً تنفيذية بدوام كامل (مدير عام، مدير عمليات مجموعة) واستشارات مستقلة قائمة على المشاريع — ما قبل الافتتاح، تحويل العلامة التجارية، تحويل المسار، والتميز التشغيلي.'
        : 'Both full-time executive roles (General Manager, Group Operations Director) and independent, project-based consulting — pre-opening, brand conversion, turnaround, and operational excellence.',
    },
    {
      q: ar ? 'هل يجب أن أكون في السعودية أو مصر للتعامل معك؟' : 'Do I need to be in Saudi Arabia or Egypt to work with you?',
      a: ar
        ? 'لا. أنا مقيم بين الرياض ومصر، لكن الاستشارات تُجرى عبر مكالمة فيديو وهي متاحة عالمياً.'
        : "No. I'm based between Riyadh and Egypt, but consultations are conducted via video call and available worldwide.",
    },
    {
      q: ar ? 'ما الأسواق التي لديك خبرة مباشرة بها؟' : 'Which markets do you have direct experience in?',
      a: ar
        ? 'قائد ضيافة دولي عبر دول الخليج وشمال أفريقيا والشام ومنطقة أوروبا وأفريقيا والشرق الأوسط الأوسع — مع ماريوت إنترناشيونال وآي إتش جي وستاروود وأكور وعلامات فاخرة مستقلة.'
        : 'International hospitality experience across the GCC, North Africa, the Levant, and the broader EMEA region — with Marriott International, IHG, Starwood, Accor, and independent luxury brands.',
    },
    {
      q: ar ? 'بأي لغات يمكننا التواصل؟' : 'What languages can we work in?',
      a: ar
        ? 'العربية (اللغة الأم)، الإنجليزية (طليق)، والألمانية (متوسط).'
        : 'Arabic (native), English (fluent), and German (intermediate).',
    },
    {
      q: ar ? 'كم من الوقت يستغرق الرد بعد إرسال طلبي؟' : 'How quickly will I hear back after submitting a request?',
      a: ar
        ? 'عادةً خلال 24 ساعة لتأكيد تفاصيل الاستشارة أو الرد على استفسارك.'
        : "Typically within 24 hours to confirm consultation details or respond to your inquiry.",
    },
    {
      q: ar ? 'ماذا يحدث بعد إرسال طلب حجز استشارة؟' : 'What happens after I submit a booking request?',
      a: ar
        ? 'ستتلقى تأكيداً بالطلب، ثم سأتواصل معك لتثبيت الموعد والمدة، مع دعم عبر البريد الإلكتروني بعد الجلسة لمتابعة التنفيذ.'
        : "You'll get a confirmation of your request, then I'll follow up to lock in the date and duration, plus post-consultation email support to help with implementation.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="section-eyebrow justify-center">
            {ar ? 'أسئلة شائعة' : 'FAQ'}
          </div>
          <h2 className="text-2xl md:text-3xl font-normal font-playfair text-foreground">
            {ar ? 'أسئلة قبل الحجز' : 'Before You Book'}
          </h2>
        </div>

        <Accordion type="single" collapsible className="luxury-container">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className={i === faqs.length - 1 ? 'border-b-0' : ''}>
              <AccordionTrigger className="text-left rtl:text-right text-sm font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

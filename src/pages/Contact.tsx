import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Linkedin, Send, Check, Loader2, Sparkles } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { contactInfo, signatureQuote } from '@/lib/brandConstants';

export default function Contact() {
  const { toast } = useToast();
  const { language, t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const ar = language.code === 'ar';

  const validateForm = () => {
    let valid = true;
    const errors = { name: '', email: '', subject: '', message: '' };
    if (!formData.name.trim() || formData.name.length > 100) {
      errors.name = ar ? 'الرجاء إدخال اسم صحيح (100 حرف كحد أقصى)' : 'Please enter a valid name (max 100 characters)';
      valid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email) || formData.email.length > 255) {
      errors.email = ar ? 'الرجاء إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address';
      valid = false;
    }
    if (!formData.subject.trim() || formData.subject.length > 200) {
      errors.subject = ar ? 'الموضوع مطلوب (200 حرف كحد أقصى)' : 'Subject is required (max 200 characters)';
      valid = false;
    }
    if (!formData.message.trim() || formData.message.length > 2000) {
      errors.message = ar ? 'الرسالة مطلوبة (2000 حرف كحد أقصى)' : 'Message is required (max 2000 characters)';
      valid = false;
    }
    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({ 
        title: ar ? "تم إرسال الرسالة بنجاح" : "Message Sent Successfully", 
        description: ar ? "شكراً لرسالتك. سأتواصل معك قريباً." : "Thank you. I will get back to you shortly." 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({ 
        title: ar ? "خطأ" : "Error", 
        description: ar ? "فشل في إرسال الرسالة. حاول مرة أخرى." : "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getIcon = (labelEn: string) => {
    if (labelEn.includes('Location')) return MapPin;
    if (labelEn.includes('Phone')) return Phone;
    if (labelEn.includes('Email')) return Mail;
    return Linkedin;
  };

  const getDisplayValue = (item: typeof contactInfo[0]) => {
    if (item.value) return item.value;
    return ar ? (item.regionAr || '') : (item.regionEn || '');
  };

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
        <Navbar />

        <main id="main" className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-8 mb-8">
            <BreadcrumbNav items={[{ label: ar ? 'تواصل' : 'Contact', active: true }]} />
          </div>

          <section className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16">
              <div className="section-eyebrow">
                {ar ? 'تواصل مباشر' : 'Direct Channels'}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-playfair text-foreground mb-4 leading-tight">
                {ar ? 'تواصل معي' : 'Get in Touch'}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                {ar
                  ? 'مهتم بمناقشة فرص التعاون في إدارة الفنادق والعمليات القيادية أو التكليفات الاستشارية؟ يسعدني التواصل وتلقي رسالتك.'
                  : "Interested in hospitality asset advisory, pre-opening task force mandates, or corporate consultancy? Let's connect."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 items-stretch">
              
              {/* Form Column - Luxury registration desk style */}
              <motion.div 
                initial={{ opacity: 0, x: isRTL ? 35 : -35 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card border border-border/40 p-8 sm:p-10 rounded-sm relative overflow-hidden flex flex-col justify-center"
              >
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form 
                      key="contact-form"
                      onSubmit={handleSubmit} 
                      noValidate 
                      className="space-y-6 relative z-10"
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name" className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                            {ar ? 'الاسم بالكامل' : 'Full Name'}
                          </Label>
                          <Input
                            id="contact-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={ar ? 'الاسم بالكامل' : 'Your full name'}
                            className={`rounded-sm h-12 border-border/80 focus:border-accent focus:ring-accent/10 focus:ring-2 ${formErrors.name ? 'border-destructive' : ''}`}
                            maxLength={100}
                            aria-invalid={!!formErrors.name}
                            aria-describedby={formErrors.name ? 'contact-name-error' : undefined}
                          />
                          {formErrors.name && (
                            <p id="contact-name-error" role="alert" className="text-destructive text-[11px] mt-1">{formErrors.name}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-email" className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                            {ar ? 'البريد الإلكتروني' : 'Email Address'}
                          </Label>
                          <Input
                            id="contact-email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@company.com"
                            className={`rounded-sm h-12 border-border/80 focus:border-accent focus:ring-accent/10 focus:ring-2 ${formErrors.email ? 'border-destructive' : ''}`}
                            maxLength={255}
                            aria-invalid={!!formErrors.email}
                            aria-describedby={formErrors.email ? 'contact-email-error' : undefined}
                          />
                          {formErrors.email && (
                            <p id="contact-email-error" role="alert" className="text-destructive text-[11px] mt-1">{formErrors.email}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contact-subject" className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                          {ar ? 'الموضوع' : 'Subject'}
                        </Label>
                        <Input
                          id="contact-subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder={ar ? 'موضوع رسالتك' : 'What would you like to discuss?'}
                          className={`rounded-sm h-12 border-border/80 focus:border-accent focus:ring-accent/10 focus:ring-2 ${formErrors.subject ? 'border-destructive' : ''}`}
                          maxLength={200}
                          aria-invalid={!!formErrors.subject}
                          aria-describedby={formErrors.subject ? 'contact-subject-error' : undefined}
                        />
                        {formErrors.subject && (
                          <p id="contact-subject-error" role="alert" className="text-destructive text-[11px] mt-1">{formErrors.subject}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contact-message" className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                          {ar ? 'الرسالة' : 'Message'}
                        </Label>
                        <Textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={ar ? 'تفاصيل رسالتك هنا...' : 'Describe your operational goals or project timeline...'}
                          rows={5}
                          className={`rounded-sm border-border/80 focus:border-accent focus:ring-accent/10 focus:ring-2 ${formErrors.message ? 'border-destructive' : ''}`}
                          maxLength={2000}
                          aria-invalid={!!formErrors.message}
                          aria-describedby={formErrors.message ? 'contact-message-error' : undefined}
                        />
                        {formErrors.message && (
                          <p id="contact-message-error" role="alert" className="text-destructive text-[11px] mt-1">{formErrors.message}</p>
                        )}
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm h-13 font-semibold flex items-center justify-center gap-2 mt-4 transition-colors duration-300"
                      >
                        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send size={15} />}
                        {isSubmitting ? (ar ? 'جاري إرسال رسالتك...' : 'Sending...') : (ar ? 'إرسال الرسالة التشغيلية' : 'Submit Direct Message')}
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success-message"
                      className="text-center py-10 px-4 flex flex-col items-center justify-center relative z-10"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-success/15 border border-success/35 flex items-center justify-center mb-6">
                        <Check size={28} className="text-success" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-playfair font-normal text-foreground mb-3">
                        {ar ? 'تم استلام رسالتك بنجاح' : 'Message Transmitted Successfully'}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base max-w-sm mb-8 leading-relaxed font-light">
                        {ar 
                          ? 'شكراً لك على تواصلك. لقد تم استلام تفاصيل رسالتك وسأقوم بالرد على استفسارك في أقرب وقت.' 
                          : 'Your request has been filed. I will review and follow up personally within 24 hours.'}
                      </p>
                      <Button 
                        onClick={() => setIsSuccess(false)}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm h-12 px-8 font-semibold transition-colors"
                      >
                        {ar ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Info Column - Luxury contact desk details */}
              <motion.div 
                initial={{ opacity: 0, x: isRTL ? -35 : 35 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {contactInfo.map((item, i) => {
                    const IconComponent = getIcon(item.labelEn);
                    const displayValue = getDisplayValue(item);
                    const itemLabel = ar ? item.labelAr : item.labelEn;
                    return (
                      <div key={i} className="flex items-start gap-4 p-5 rounded-sm bg-card border border-border/40 hover:border-accent/30 transition-all duration-300 shadow-sm">
                        <div className="w-10 h-10 rounded-sm bg-accent/8 flex items-center justify-center flex-shrink-0">
                          <IconComponent size={16} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{itemLabel}</p>
                          {item.href ? (
                            <a 
                              href={item.href} 
                              target={item.href.startsWith('http') ? '_blank' : undefined} 
                              rel="noopener noreferrer" 
                              className="text-foreground hover:text-accent font-bold transition-colors text-sm sm:text-base block mt-1"
                            >
                              {displayValue}
                            </a>
                          ) : (
                            <p className="text-foreground font-bold text-sm sm:text-base mt-1">{displayValue}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Available for tags panel */}
                <div className="bg-muted/40 rounded-sm p-6 border border-border/40 mt-2">
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground mb-4 font-bold">
                    {ar ? 'متاح للتكليفات والمهام التالية' : 'AVAILABLE ADVISORY MANDATES'}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      ar ? 'أدوار الإدارة والتشغيل الكلي' : 'GM Operations leadership',
                      ar ? 'افتتاحات الفنادق ما قبل التشغيل' : 'Pre-Opening Task Force',
                      ar ? 'تجديدات الأصول وإدارة المشتريات' : 'Renovations & procurement',
                      ar ? 'حوكمة وتطوير أداء الأقسام' : 'Operational Audits & SOPs',
                    ].map((tag, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-sm bg-card border border-border/40 text-xs font-semibold text-foreground/90 shadow-sm">
                        <Sparkles size={11} className="text-accent" /> 
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote Card (styled like a luxury directory cover) */}
                <div className="bg-primary text-primary-foreground rounded-sm p-6 sm:p-8 border border-primary-foreground/[0.06] relative overflow-hidden mt-2 flex flex-col justify-center">
                  <p className="italic text-xs sm:text-sm leading-relaxed text-primary-foreground/95 font-light">
                    {ar ? signatureQuote.ar : signatureQuote.en}
                  </p>
                  <div className="w-6 h-px bg-accent/60 my-4" />
                  <p className="text-accent text-xs font-bold uppercase tracking-widest font-playfair">— Islam Mahrous</p>
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

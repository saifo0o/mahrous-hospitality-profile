
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Send, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { toast } = useToast();
  const { language, t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: '', email: '', subject: '', message: '' };
    if (!formData.name.trim()) { errors.name = 'Required'; valid = false; }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) { errors.email = 'Valid email required'; valid = false; }
    if (!formData.subject.trim()) { errors.subject = 'Required'; valid = false; }
    if (!formData.message.trim()) { errors.message = 'Required'; valid = false; }
    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: language.code === 'ar' ? "تم إرسال الرسالة" : "Message sent", description: language.code === 'ar' ? "شكراً لرسالتك." : "Thank you. I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: MapPin, label: language.code === 'ar' ? 'الموقع' : 'Location', value: language.code === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia' },
    { icon: Phone, label: language.code === 'ar' ? 'الهاتف' : 'Phone', value: '+966 55 374 1020', href: 'tel:+966553741020' },
    { icon: Mail, label: language.code === 'ar' ? 'البريد' : 'Email', value: 'mahrous.islam@yahoo.com', href: 'mailto:mahrous.islam@yahoo.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'islam-mahrous', href: 'https://www.linkedin.com/in/islam-mahrous-' },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
              {language.code === 'ar' ? 'تواصل معي' : 'Get in Touch'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language.code === 'ar'
                ? 'مهتم بمناقشة فرص الضيافة أو استشارات؟ تواصل معي.'
                : 'Interested in hospitality leadership opportunities or consulting? Let\'s connect.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder={language.code === 'ar' ? 'الاسم' : 'Your name'} className={`rounded-xl h-12 ${formErrors.name ? 'border-destructive' : ''}`} />
                  </div>
                  <div>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder={language.code === 'ar' ? 'البريد الإلكتروني' : 'Email address'} className={`rounded-xl h-12 ${formErrors.email ? 'border-destructive' : ''}`} />
                  </div>
                </div>
                <Input name="subject" value={formData.subject} onChange={handleChange} placeholder={language.code === 'ar' ? 'الموضوع' : 'Subject'} className={`rounded-xl h-12 ${formErrors.subject ? 'border-destructive' : ''}`} />
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder={language.code === 'ar' ? 'رسالتك' : 'Your message'} rows={5} className={`rounded-xl ${formErrors.message ? 'border-destructive' : ''}`} />
                <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl h-12 font-semibold gap-2">
                  {isSubmitting ? <span className="animate-spin">⏳</span> : <Send size={16} />}
                  {isSubmitting ? (language.code === 'ar' ? 'جاري الإرسال...' : 'Sending...') : (language.code === 'ar' ? 'إرسال الرسالة' : 'Send Message')}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-foreground hover:text-accent-foreground transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-muted/50 rounded-xl p-6 border border-border/50 mt-8">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  {language.code === 'ar' ? 'متاح لـ' : 'Available For'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    language.code === 'ar' ? 'أدوار المدير العام' : 'GM Roles',
                    language.code === 'ar' ? 'ما قبل الافتتاح' : 'Pre-Opening',
                    language.code === 'ar' ? 'استشارات التجديد' : 'Renovation Consulting',
                    language.code === 'ar' ? 'التميز التشغيلي' : 'Operational Excellence',
                  ].map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card border border-border/50 text-xs font-medium text-foreground">
                      <Check size={10} className="text-accent-foreground" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <p className="italic text-sm leading-relaxed">
                  {language.code === 'ar'
                    ? '"التميز في الضيافة ليس مجرد خدمة؛ إنه استراتيجية ورؤية وذكاء عاطفي."'
                    : '"Excellence in hospitality is not just service; it\'s strategy, vision, and emotional intelligence."'}
                </p>
                <p className="text-accent text-xs font-medium mt-2">— Islam Mahrous</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

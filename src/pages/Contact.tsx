
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Send, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { toast } = useToast();
  const { language, t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', subject: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = language.code === 'ar' ? 'الاسم مطلوب' : 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = language.code === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language.code === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = language.code === 'ar' ? 'الموضوع مطلوب' : 'Subject is required';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = language.code === 'ar' ? 'الرسالة مطلوبة' : 'Message is required';
      isValid = false;
    }
    
    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Success notification
      toast({
        title: language.code === 'ar' ? "تم إرسال الرسالة بنجاح" : "Message sent successfully",
        description: language.code === 'ar' ? "شكراً لرسالتك. سوف أعود إليك قريباً." : "Thank you for your message. I will get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'text-right' : ''}`}>
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
                {t('getInTouch')}
                <span className={`absolute ${isRTL ? 'right-0' : 'left-0'} -bottom-2 w-1/2 h-1 bg-luxury-gold`}></span>
              </h1>
              <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
                {language.code === 'ar' 
                  ? "هل أنت مهتم بمناقشة فرص قيادة الضيافة، أو مشاريع استشارية، أو ترغب فقط في التواصل؟ تواصل من خلال النموذج أدناه أو عبر بيانات الاتصال الخاصة بي."
                  : "Interested in discussing hospitality leadership opportunities, consulting projects, or just want to connect? Reach out through the form below or my contact details."
                }
              </p>
            </div>
            
            <div className={`flex flex-col md:flex-row gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('fullName')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('yourName')}
                        className={formErrors.name ? "border-red-500" : ""}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('emailAddress')} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('yourEmail')}
                        className={formErrors.email ? "border-red-500" : ""}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('subject')} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('subjectPlaceholder')}
                      className={formErrors.subject ? "border-red-500" : ""}
                    />
                    {formErrors.subject && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('message')} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('messagePlaceholder')}
                      rows={5}
                      className={formErrors.message ? "border-red-500" : ""}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-luxury-navy hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">
                          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </span>
                        <span>{t('sending')}</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{t('sendMessage')}</span>
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="bg-gray-50 p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold text-luxury-navy mb-6">{t('contactInformation')}</h3>
                  
                  <div className="space-y-6">
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <MapPin size={22} className={`text-luxury-gold ${isRTL ? 'ml-4' : 'mr-4'} mt-1`} />
                      <div>
                        <h4 className="font-medium text-luxury-navy">{t('location')}</h4>
                        <p className="text-luxury-gray">{language.code === 'ar' ? 'الجبيل، المملكة العربية السعودية' : 'Jubail, Kingdom of Saudi Arabia'}</p>
                      </div>
                    </div>
                    
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <Phone size={22} className={`text-luxury-gold ${isRTL ? 'ml-4' : 'mr-4'} mt-1`} />
                      <div>
                        <h4 className="font-medium text-luxury-navy">{t('phone')}</h4>
                        <p className="text-luxury-gray">
                          <a href="tel:+966501721876" className="hover:text-luxury-navy transition-colors">{language.code === 'ar' ? 'السعودية: +966 501 721 876' : 'KSA: +966 501 721 876'}</a>
                        </p>
                        <p className="text-luxury-gray">
                          <a href="tel:+201095556779" className="hover:text-luxury-navy transition-colors">{language.code === 'ar' ? 'مصر: +20 109 555 6779' : 'Egypt: +20 109 555 6779'}</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <Mail size={22} className={`text-luxury-gold ${isRTL ? 'ml-4' : 'mr-4'} mt-1`} />
                      <div>
                        <h4 className="font-medium text-luxury-navy">{t('email')}</h4>
                        <div className="space-y-1">
                          <p className="text-luxury-gray">
                            <a href="mailto:mahrous.islam@yahoo.com" className="hover:text-luxury-navy transition-colors">
                              mahrous.islam@yahoo.com
                            </a>
                          </p>
                          <p className="text-luxury-gray">
                            <a href="mailto:contact@islam-mahrous.com" className="hover:text-luxury-navy transition-colors">
                              contact@islam-mahrous.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <Linkedin size={22} className={`text-luxury-gold ${isRTL ? 'ml-4' : 'mr-4'} mt-1`} />
                      <div>
                        <h4 className="font-medium text-luxury-navy">LinkedIn</h4>
                        <a 
                          href="https://www.linkedin.com/in/islam-mahrous-" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-luxury-navy hover:text-luxury-gold underline transition-colors"
                        >
                          linkedin.com/in/islam-mahrous-
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white rounded-md border-l-4 border-luxury-gold shadow-sm">
                    <p className="italic text-luxury-gray">
                      {language.code === 'ar' 
                         ? '"التميز في الضيافة ليس مجرد خدمة؛ إنه استراتيجية ورؤية وذكاء عاطفي."'
                         : '"Excellence in hospitality is not just service; it\'s strategy, vision, and emotional intelligence."'
                      }
                    </p>
                    <p className={`${isRTL ? 'text-left' : 'text-right'} text-sm font-medium mt-2`}>- Islam Mahrous</p>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-luxury-navy mb-3">
                      {language.code === 'ar' ? 'متاح لـ:' : 'Available For:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-luxury-navy/10 text-luxury-navy text-xs px-3 py-1 rounded-full flex items-center">
                        <Check size={12} className={isRTL ? 'ml-1' : 'mr-1'} /> 
                        {language.code === 'ar' ? 'أدوار المدير العام' : 'General Manager Roles'}
                      </span>
                      <span className="bg-luxury-navy/10 text-luxury-navy text-xs px-3 py-1 rounded-full flex items-center">
                        <Check size={12} className={isRTL ? 'ml-1' : 'mr-1'} /> 
                        {language.code === 'ar' ? 'مشاريع ما قبل الافتتاح' : 'Pre-Opening Projects'}
                      </span>
                      <span className="bg-luxury-navy/10 text-luxury-navy text-xs px-3 py-1 rounded-full flex items-center">
                        <Check size={12} className={isRTL ? 'ml-1' : 'mr-1'} /> 
                        {language.code === 'ar' ? 'استشارات التجديد' : 'Renovation Consulting'}
                      </span>
                      <span className="bg-luxury-navy/10 text-luxury-navy text-xs px-3 py-1 rounded-full flex items-center">
                        <Check size={12} className={isRTL ? 'ml-1' : 'mr-1'} /> 
                        {language.code === 'ar' ? 'التميز التشغيلي' : 'Operational Excellence'}
                      </span>
                      <span className="bg-luxury-navy/10 text-luxury-navy text-xs px-3 py-1 rounded-full flex items-center">
                        <Check size={12} className={isRTL ? 'ml-1' : 'mr-1'} /> 
                        {language.code === 'ar' ? 'استشارات الضيافة' : 'Hospitality Consulting'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

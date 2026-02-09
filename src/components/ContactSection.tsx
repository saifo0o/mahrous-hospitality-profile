
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const ContactSection = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Success notification
      toast({
        title: language.code === 'ar' ? "تم إرسال الرسالة بنجاح" : "Message sent successfully",
        description: language.code === 'ar' ? "شكرًا لرسالتك. سيتواصل معك إسلام قريبًا." : "Thank you for your message. Islam will get back to you soon."
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading inline-block">{t('getInTouch')}</h2>
          <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
            {language.code === 'ar'
              ? "مهتم بمناقشة فرص قيادة الضيافة، أو مشاريع استشارية، أو ترغب في التواصل؟ تواصل من خلال النموذج أدناه أو من خلال تفاصيل الاتصال الخاصة بي."
              : "Interested in discussing hospitality leadership opportunities, consulting projects, or just want to connect? Reach out through the form below or my contact details."
            }
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('fullName')}
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder={t('yourName')} 
                    required 
                    className="w-full" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('emailAddress')}
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder={t('yourEmail')} 
                    required 
                    className="w-full" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('subject')}
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder={t('subjectPlaceholder')} 
                  required 
                  className="w-full" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('message')}
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder={t('messagePlaceholder')} 
                  rows={5} 
                  required 
                  className="w-full" 
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full bg-luxury-navy hover:bg-blue-900 flex items-center justify-center gap-2">
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
                <div className="flex items-start">
                  <MapPin size={22} className="text-luxury-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-luxury-navy">{t('location')}</h4>
                    <p className="text-luxury-gray">
                      {language.code === 'ar' ? "الرياض، المملكة العربية السعودية" : "Riyadh, Kingdom of Saudi Arabia"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={22} className="text-luxury-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-luxury-navy">{t('phone')}</h4>
                    <p className="text-luxury-gray">
                      <a href="tel:+966553741020" className="hover:text-luxury-navy transition-colors">
                        {language.code === 'ar' ? "السعودية: " : "KSA: "}+966 55 374 1020
                      </a>
                    </p>
                    <p className="text-luxury-gray">
                      <a href="tel:+966501721876" className="hover:text-luxury-navy transition-colors">
                        {language.code === 'ar' ? "السعودية: " : "KSA: "}+966 50 172 1876
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={22} className="text-luxury-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-luxury-navy">{t('email')}</h4>
                    <div className="space-y-1">
                    <p className="text-luxury-gray">
                        <a href="mailto:saifeldiinislam@gmail.com" className="hover:text-luxury-navy transition-colors">
                          saifeldiinislam@gmail.com
                        </a>
                      </p>
                      <p className="text-luxury-gray">
                        <a href="mailto:mahrous.islam@yahoo.com" className="hover:text-luxury-navy transition-colors">
                          mahrous.islam@yahoo.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin size={22} className="text-luxury-gold mr-4 mt-1" />
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
                     ? "التميز في الضيافة ليس مجرد خدمة؛ إنه استراتيجية ورؤية وذكاء عاطفي."
                     : "Excellence in hospitality is not just service; it's strategy, vision, and emotional intelligence."
                  }
                </p>
                <p className="text-right text-sm font-medium mt-2">- Islam Mahrous</p>
              </div>
              
              <div className="text-center mt-8">
                <Button className="bg-luxury-gold hover:bg-yellow-600 text-luxury-navy">
                  <Link to="/contact">
                    {language.code === 'ar' ? "عرض صفحة الاتصال الكاملة" : "View Full Contact Page"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

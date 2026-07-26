
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState('');
  const { toast } = useToast();
  const { language, isRTL } = useLanguage();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (validationError) {
      setValidationError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setValidationError(
        language.code === 'ar' ? 'الرجاء إدخال البريد الإلكتروني' : 'Email address is required'
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError(
        language.code === 'ar' ? 'الرجاء إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address'
      );
      return;
    }

    setIsLoading(true);
    setValidationError('');
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email, status: 'active' });

      if (error) {
        if (error.code === '23505') {
          setValidationError(
            language.code === 'ar' ? "هذا البريد الإلكتروني مشترك بالفعل" : "This email is already subscribed"
          );
          toast({
            title: language.code === 'ar' ? "مشترك بالفعل" : "Already subscribed",
            description: language.code === 'ar' 
              ? "هذا البريد الإلكتروني مسجل بالفعل" 
              : "This email is already subscribed",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubscribed(true);
        toast({
          title: language.code === 'ar' ? "تم الاشتراك بنجاح!" : "Successfully subscribed!",
          description: language.code === 'ar' 
            ? "شكراً لاشتراكك في النشرة الإخبارية" 
            : "Thank you for subscribing to our newsletter"
        });
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setValidationError(
        language.code === 'ar' ? 'حدث خطأ في النظام. الرجاء المحاولة لاحقاً.' : 'System error. Please try again later.'
      );
      toast({
        title: language.code === 'ar' ? "حدث خطأ" : "Something went wrong",
        description: language.code === 'ar' 
          ? "يرجى المحاولة مرة أخرى لاحقاً" 
          : "Please try again later",
          variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-sm bg-luxury-charcoal border border-luxury-gold/15 p-6 md:p-7 transition-colors duration-300 hover:border-luxury-gold/25">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-luxury-gold animate-pulse" />
          <span className="text-xs uppercase tracking-[0.15em] text-luxury-gold font-semibold font-sans">
            {language.code === 'ar' ? 'النشرة الإخبارية' : 'Newsletter'}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-luxury-parchment mb-2 font-playfair leading-snug">
          {language.code === 'ar' ? 'ابقَ على اطلاع' : 'Stay Informed'}
        </h3>
        
        <p className="text-luxury-parchment/60 text-xs mb-5 leading-relaxed">
          {language.code === 'ar'
            ? 'احصل على آخر الرؤى والاتجاهات في صناعة الضيافة'
            : 'Get the latest hospitality insights delivered to your inbox'
          }
        </p>

        <AnimatePresence mode="wait">
          {isSubscribed ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center p-4 bg-luxury-emerald/10 rounded-sm border border-luxury-emerald/20 mt-2"
              role="alert"
              aria-live="assertive"
            >
              <CheckCircle className="h-8 w-8 text-luxury-gold mx-auto mb-2" />
              <h4 className="text-sm font-semibold text-luxury-parchment mb-1">
                {language.code === 'ar' ? "تم الاشتراك!" : "You're in!"}
              </h4>
              <p className="text-luxury-parchment/70 text-xs">
                {language.code === 'ar' 
                  ? "ستتلقى آخر الأخبار والرؤى من عالم الضيافة"
                  : "You'll receive the latest hospitality insights and updates"
                }
              </p>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              onSubmit={handleSubmit} 
              className="space-y-3"
              noValidate
              aria-label={language.code === 'ar' ? 'اشتراك في النشرة الإخبارية' : 'Newsletter subscription form'}
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder={language.code === 'ar' ? "بريدك الإلكتروني" : "Your email address"}
                    className={`w-full bg-black/35 border-luxury-parchment/15 text-luxury-parchment placeholder:text-luxury-parchment/40 rounded-sm h-11 px-4 text-sm focus-visible:ring-1 focus-visible:ring-luxury-gold/50 transition-colors ${
                      validationError ? 'border-red-500/50 focus-visible:ring-red-500/50' : ''
                    }`}
                    required
                    aria-invalid={!!validationError}
                    aria-describedby={validationError ? "newsletter-error-msg" : undefined}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-charcoal rounded-sm h-11 px-5 font-semibold transition-colors duration-300 shrink-0 flex items-center justify-center gap-1.5"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-luxury-charcoal" />
                  ) : (
                    <>
                      <Mail className="h-4 w-4" />
                      <span>{language.code === 'ar' ? "اشترك" : "Subscribe"}</span>
                    </>
                  )}
                </Button>
              </div>
              
              {validationError && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  id="newsletter-error-msg" 
                  className="text-[11px] text-red-400 flex items-center gap-1 mt-1.5" 
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{validationError}</span>
                </motion.p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewsletterSignup;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { language, isRTL } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email, status: 'active' });

      if (error) {
        if (error.code === '23505') {
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

  if (isSubscribed) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-6 bg-accent/10 rounded-2xl border border-accent/20"
      >
        <CheckCircle className="h-10 w-10 text-accent mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {language.code === 'ar' ? "تم الاشتراك!" : "You're in!"}
        </h3>
        <p className="text-muted-foreground text-sm">
          {language.code === 'ar' 
            ? "ستتلقى آخر الأخبار والرؤى من عالم الضيافة"
            : "You'll receive the latest hospitality insights and updates"
          }
        </p>
      </motion.div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 md:p-8">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-5 w-5 text-accent" />
          <span className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60 font-semibold">
            {language.code === 'ar' ? 'النشرة الإخبارية' : 'Newsletter'}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-primary-foreground mb-2 font-playfair">
          {language.code === 'ar' ? 'ابقَ على اطلاع' : 'Stay Informed'}
        </h3>
        
        <p className="text-primary-foreground/60 text-sm mb-5 leading-relaxed">
          {language.code === 'ar'
            ? 'احصل على آخر الرؤى والاتجاهات في صناعة الضيافة'
            : 'Get the latest hospitality insights delivered to your inbox'
          }
        </p>
        
        <form onSubmit={handleSubmit} className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={language.code === 'ar' ? "بريدك الإلكتروني" : "Your email address"}
            className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl h-11"
            required
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl h-11 px-5 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground" />
            ) : (
              <>
                <Mail className="h-4 w-4 mr-1.5" />
                {language.code === 'ar' ? "اشترك" : "Subscribe"}
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;

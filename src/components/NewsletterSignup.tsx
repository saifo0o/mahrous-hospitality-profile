
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast({
        title: language.code === 'ar' ? "تم الاشتراك بنجاح!" : "Successfully subscribed!",
        description: language.code === 'ar' 
          ? "شكراً لاشتراكك في النشرة الإخبارية" 
          : "Thank you for subscribing to our newsletter"
      });
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
      >
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
          {language.code === 'ar' ? "تم الاشتراك!" : "Subscribed!"}
        </h3>
        <p className="text-green-700 dark:text-green-300">
          {language.code === 'ar' 
            ? "ستتلقى آخر الأخبار والرؤى من عالم الضيافة"
            : "You'll receive the latest hospitality insights and updates"
          }
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-luxury-navy text-white p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <Mail className="h-6 w-6 text-luxury-gold mr-3" />
        <h3 className="text-xl font-bold">
          {language.code === 'ar' ? "النشرة الإخبارية" : "Newsletter"}
        </h3>
      </div>
      
      <p className="text-gray-300 mb-4">
        {language.code === 'ar'
          ? "احصل على آخر الرؤى والاتجاهات في صناعة الضيافة"
          : "Get the latest hospitality industry insights and trends"
        }
      </p>
      
      <form onSubmit={handleSubmit} className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={language.code === 'ar' ? "بريدك الإلكتروني" : "Your email address"}
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          required
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-luxury-gold hover:bg-yellow-600 text-luxury-navy"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-luxury-navy"></div>
          ) : (
            language.code === 'ar' ? "اشترك" : "Subscribe"
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;

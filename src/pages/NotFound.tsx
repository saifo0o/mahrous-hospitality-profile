import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import PageTransition from '@/components/PageTransition';
import signatureLogo from '@/assets/logos/im-signature-gold.png';

export default function NotFound() {
  const location = useLocation();
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    console.error('404 Error at path:', location.pathname);
  }, [location.pathname]);

  const ar = language.code === 'ar';

  const quickLinks = [
    { icon: Home, label: ar ? 'الرئيسية' : 'Home', path: '/' },
    { icon: Briefcase, label: ar ? 'المشاريع' : 'Projects', path: '/projects' },
    { icon: Mail, label: ar ? 'اتصل بي' : 'Contact', path: '/contact' },
  ];

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : 'text-left'}`}>
        <Navbar />

        <main id="main" className="flex-grow flex items-center justify-center py-24 px-4 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-lg mx-auto text-center bg-card border border-border p-8 sm:p-12 rounded-sm relative z-10"
          >
            <img src={signatureLogo} alt="" aria-hidden="true" className="h-8 w-auto object-contain mx-auto" />
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-light font-playfair text-foreground mt-4 mb-2">404</h1>
            <div className="w-12 h-px bg-accent mx-auto mb-6" />
            
            <h2 className="text-xl sm:text-2xl font-playfair font-normal text-foreground mb-3">
              {ar ? 'الصفحة غير موجودة' : 'Page not found'}
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              {ar 
                ? 'عذرًا، الصفحة التي تبحث عنها لم تعد موجودة أو ربما تم نقلها إلى عنوان آخر.' 
                : "The page you're looking for doesn't exist or has been moved."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant={link.path === '/' ? 'default' : 'outline'}
                    className={`rounded-sm px-5 py-4 text-sm font-semibold gap-2 transition-colors duration-300 ${
                      link.path === '/'
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    <link.icon size={15} />
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}

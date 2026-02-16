
import React from 'react';
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: language.code === 'ar' ? 'من أنا' : 'About', path: '/about' },
    { label: language.code === 'ar' ? 'المشاريع' : 'Projects', path: '/projects' },
    { label: language.code === 'ar' ? 'المسيرة' : 'Career', path: '/career' },
    { label: language.code === 'ar' ? 'المدونة' : 'Blog', path: '/blog' },
    { label: language.code === 'ar' ? 'الجوائز' : 'Awards', path: '/awards' },
    { label: language.code === 'ar' ? 'تواصل' : 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Pre-footer CTA */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-playfair mb-6 leading-tight">
              {language.code === 'ar' ? 'لنبنِ شيئًا استثنائيًا معًا' : "Let's Build Something\nExceptional"}
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-10 max-w-xl mx-auto">
              {language.code === 'ar' 
                ? 'مستعد للارتقاء بعمليات فندقك؟ احجز استشارة مجانية اليوم.'
                : 'Ready to elevate your hotel operations? Book a free consultation today.'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-consultation">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 gap-2">
                  {language.code === 'ar' ? 'احجز استشارة مجانية' : 'Book a Free Consultation'}
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <a href="https://wa.me/966553741020" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl px-8 py-6 text-base transition-all duration-300 hover:-translate-y-0.5">
                  {language.code === 'ar' ? 'راسلني على واتساب' : 'Message on WhatsApp'}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg font-playfair">IM</span>
                </div>
                <span className="text-lg font-semibold font-playfair">Islam Mahrous</span>
              </div>
              <p className="text-background/50 text-sm leading-relaxed mb-5">
                {language.code === 'ar' 
                  ? 'قائد ضيافة عالمي مع 30+ عامًا من الخبرة في التميز التشغيلي.'
                  : 'Global hospitality leader with 30+ years of operational excellence.'
                }
              </p>
              <a 
                href="https://www.linkedin.com/in/islam-mahrous-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-background/50 hover:text-accent transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/30 mb-5">
                {language.code === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-background/50 hover:text-accent text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/30 mb-5">
                {language.code === 'ar' ? 'تواصل' : 'Contact'}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+966553741020" className="flex items-center gap-2.5 text-background/50 hover:text-accent text-sm transition-colors">
                    <Phone size={14} />
                    +966 55 374 1020
                  </a>
                </li>
                <li>
                  <a href="mailto:mahrous.islam@yahoo.com" className="flex items-center gap-2.5 text-background/50 hover:text-accent text-sm transition-colors">
                    <Mail size={14} />
                    mahrous.islam@yahoo.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-background/50 text-sm">
                  <MapPin size={14} />
                  {language.code === 'ar' ? 'الرياض، السعودية' : 'Riyadh, KSA'}
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/30 text-xs">
              &copy; {currentYear} Islam Mahrous. {language.code === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
            <a 
              href="https://drive.google.com/file/d/1jyAbDkfP2rkgPH4148TMWLmF2uzhw0Jr/view?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/30 hover:text-accent text-xs transition-colors"
            >
              {language.code === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

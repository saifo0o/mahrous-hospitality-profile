
import React from 'react';
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

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
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/50 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-4">
            {language.code === 'ar' ? 'لنبنِ شيئًا استثنائيًا معًا' : "Let's Build Something Exceptional"}
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            {language.code === 'ar' 
              ? 'مستعد للارتقاء بعمليات فندقك؟ احجز استشارة مجانية اليوم.'
              : 'Ready to elevate your hotel operations? Book a free consultation today.'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-consultation">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl px-8 py-6 text-base shadow-lg">
                {language.code === 'ar' ? 'احجز استشارة مجانية' : 'Book a Free Consultation'}
              </Button>
            </Link>
            <a href="https://wa.me/966553741020" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl px-8 py-6 text-base">
                {language.code === 'ar' ? 'راسلني على واتساب' : 'Message on WhatsApp'}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg font-playfair">IM</span>
                </div>
                <span className="text-lg font-semibold font-playfair">Islam Mahrous</span>
              </div>
              <p className="text-background/60 text-sm leading-relaxed mb-4">
                {language.code === 'ar' 
                  ? 'قائد ضيافة عالمي مع 30+ عامًا من الخبرة في التميز التشغيلي وعمليات ما قبل الافتتاح.'
                  : 'Global hospitality leader with 30+ years of operational excellence and pre-opening expertise.'
                }
              </p>
              <a 
                href="https://www.linkedin.com/in/islam-mahrous-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-accent transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-4">
                {language.code === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-background/60 hover:text-accent text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-4">
                {language.code === 'ar' ? 'تواصل' : 'Contact'}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+966553741020" className="flex items-center gap-2 text-background/60 hover:text-accent text-sm transition-colors">
                    <Phone size={14} />
                    +966 55 374 1020
                  </a>
                </li>
                <li>
                  <a href="mailto:mahrous.islam@yahoo.com" className="flex items-center gap-2 text-background/60 hover:text-accent text-sm transition-colors">
                    <Mail size={14} />
                    mahrous.islam@yahoo.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-background/60 text-sm">
                  <MapPin size={14} />
                  {language.code === 'ar' ? 'الرياض، السعودية' : 'Riyadh, KSA'}
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/40 text-xs">
              &copy; {currentYear} Islam Mahrous. {language.code === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://drive.google.com/file/d/1jyAbDkfP2rkgPH4148TMWLmF2uzhw0Jr/view?usp=drivesdk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/40 hover:text-accent text-xs transition-colors"
              >
                {language.code === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

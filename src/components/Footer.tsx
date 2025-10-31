
import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-white py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/50 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shadow-xl">
                <span className="text-accent-foreground font-bold text-2xl font-playfair">IM</span>
              </div>
              <h3 className="text-2xl font-bold font-playfair">
                Islam Mahrous
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              {language.code === 'ar' 
                ? "تنفيذي في مجال الضيافة مع أكثر من 30 عامًا من الخبرة القيادية المتقدمة متخصص في عمليات ما قبل الافتتاح والتجديدات والتميز التشغيلي."
                : "Hospitality Executive with over 30 years of progressive leadership experience specializing in pre-opening operations, renovations, and operational excellence."
              }
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/in/islam-mahrous-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent border border-white/20 hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:mahrous.islam@yahoo.com" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent border border-white/20 hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-accent group-hover:w-6 transition-all duration-300"></span>
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-accent group-hover:w-6 transition-all duration-300"></span>
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-300 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-accent group-hover:w-6 transition-all duration-300"></span>
                  {t('career')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-accent group-hover:w-6 transition-all duration-300"></span>
                  {t('projects')}
                </Link>
              </li>
              <li>
                <Link to="/awards" className="text-gray-300 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-accent group-hover:w-6 transition-all duration-300"></span>
                  {t('awards')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-accent group-hover:w-6 transition-all duration-300"></span>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">{t('contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mr-3 group-hover:bg-accent transition-all duration-300">
                  <MapPin size={18} className="text-accent group-hover:text-accent-foreground" />
                </div>
                <span className="text-gray-300 text-sm pt-2">
                  {language.code === 'ar' ? "الجبيل، المملكة العربية السعودية" : "Jubail, KSA"}
                </span>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mr-3 group-hover:bg-accent transition-all duration-300">
                  <Phone size={18} className="text-accent group-hover:text-accent-foreground" />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <a href="tel:+966501721876" className="text-gray-300 hover:text-accent transition-colors text-sm">+966 501 721 876</a>
                  <a href="tel:+201095556779" className="text-gray-300 hover:text-accent transition-colors text-sm">+20 109 555 6779</a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mr-3 group-hover:bg-accent transition-all duration-300">
                  <Mail size={18} className="text-accent group-hover:text-accent-foreground" />
                </div>
                <a href="mailto:mahrous.islam@yahoo.com" className="text-gray-300 hover:text-accent transition-colors text-sm pt-2 break-all">mahrous.islam@yahoo.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Logo and Copyright Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Badge */}
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/30">
                <span className="text-accent font-semibold text-sm">
                  {language.code === 'ar' ? '30+ سنة خبرة' : '30+ Years Experience'}
                </span>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Islam Mahrous. {language.code === 'ar' ? "جميع الحقوق محفوظة." : "All rights reserved."}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {language.code === 'ar' ? 'صُنع بإتقان' : 'Crafted with excellence'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

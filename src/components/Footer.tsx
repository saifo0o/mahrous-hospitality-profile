import React from 'react';
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import NewsletterSignup from './NewsletterSignup';

// Import brand constants single source of truth
import { 
  brandLogos, 
  footerLinks, 
  contactInfo, 
  socialLinks, 
  signatureQuote 
} from '@/lib/brandConstants';

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const ar = language.code === 'ar';
  const currentYear = new Date().getFullYear();

  // Helper to map labels to Lucide icons
  const getContactIcon = (labelEn: string) => {
    const label = labelEn.toLowerCase();
    if (label.includes('phone')) return <Phone size={16} />;
    if (label.includes('email') || label.includes('mail')) return <Mail size={16} />;
    if (label.includes('location')) return <MapPin size={16} />;
    if (label.includes('linkedin')) return <Linkedin size={16} />;
    return null;
  };

  return (
    <>
      {/* Pre-footer CTA */}
      <section 
        className="relative py-24 md:py-32 bg-[#14171A] text-white overflow-hidden border-b border-accent/20"
        aria-label={ar ? 'دعوة للاتصال والعمل' : 'Call to Action'}
      >
        {/* Premium Mesh Gradient Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[#14171A]" />
          <div className="absolute top-[-30%] start-[-10%] w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[140px]" />
          <div className="absolute bottom-[-30%] end-[-10%] w-[600px] h-[600px] bg-luxury-emerald/[0.04] rounded-full blur-[140px]" />
          {/* Elegant structural grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(181,80,43,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(181,80,43,0.012)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-eyebrow justify-center">05 &mdash; {ar ? 'تواصل' : 'Get in touch'}</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-playfair mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              {ar ? (
                <>
                  لنبنِ رؤية تشغيلية <span className="text-accent italic font-playfair">استثنائية معاً</span>
                </>
              ) : (
                <>
                  Let's forge exceptional <span className="text-accent italic font-playfair">hospitality standards</span>
                </>
              )}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-sans font-light">
              {ar
                ? 'هل تبحث عن استشارات لإدارة الأصول الفندقية، عمليات الافتتاح، أو برامج إعادة التجديد الشاملة؟ دعنا نناقش أهدافك.'
                : 'Ready to optimize asset yield or drive pre-opening excellence? Arrange a strategy briefing today.'
              }
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-sm px-8 py-6 text-sm shadow-gold-sm hover:shadow-gold-md transition-all duration-300 gap-2 group">
                  <span>{ar ? 'احجز استشارة قيادية' : 'Book executive consultation'}</span>
                  <ArrowRight size={16} className={`transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </Button>
              </Link>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/60 rounded-sm px-8 py-6 text-sm transition-all duration-300 bg-transparent font-semibold">
                  <span>{ar ? 'تواصل عبر واتساب' : 'Message on WhatsApp'}</span>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="bg-[#101315] text-white py-16 relative z-10 border-t border-border/30"
        role="contentinfo" 
        aria-label={ar ? 'تذييل الصفحة' : 'Site Footer'}
      >
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Brand partnership logos grid */}
          <div className="mb-16 pb-12 border-b border-border/20">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80 font-bold text-center mb-8">
              {ar ? 'قيادة عمليات تشغيلية وتكليفات استشارية لصالح علامات تجارية عالمية' : 'OPERATIONAL & ADVISORY PORTFOLIO INCLUDES'}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
              {brandLogos.map((brand) => (
                <div key={brand.name} className="relative group">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    className="h-8 md:h-10 w-auto object-contain opacity-35 hover:opacity-90 transition-all duration-300 filter invert brightness-200 grayscale group-hover:grayscale-0 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            
            {/* Brand column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent flex items-center justify-center">
                  <span className="font-playfair text-accent-foreground text-sm">IM</span>
                </div>
                <span className="w-px h-5 bg-border/40" />
                <span className="text-lg font-playfair tracking-wide text-white">Islam Mahrous</span>
              </div>
              
              <p className="text-muted-foreground text-xs leading-relaxed font-sans font-light">
                {ar 
                  ? 'رائد تشغيل فندقي عالمي في منطقة الشرق الأوسط وشمال أفريقيا، متخصص في قيادة الأصول الفاخرة، إعادة الهيكلة، وبرامج التميز التشغيلي.'
                  : 'Strategic hospitality specialist directing operations audits, pre-opening task forces, and high-yield asset transformations.'
                }
              </p>
              
              <div className="flex items-center gap-2">
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-foreground hover:text-accent transition-colors duration-300 group"
                  aria-label="Visit Islam Mahrous's LinkedIn Profile"
                >
                  <Linkedin size={15} className="transition-transform duration-300 group-hover:scale-110" />
                  <span className="border-b border-transparent group-hover:border-accent">LinkedIn Profile</span>
                  <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              
              <div className="pt-6 border-t border-border/20">
                <p className="text-[11px] text-muted-foreground/80 italic font-playfair leading-relaxed">
                  {ar ? signatureQuote.ar : signatureQuote.en}
                </p>
              </div>
            </div>
            
            {/* Quick Links Column */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {ar ? 'أقسام الموقع' : 'DIRECTORY'}
              </h4>
              <nav aria-label={ar ? 'روابط التنقل في التذييل' : 'Footer navigation links'}>
                <ul className="space-y-3">
                  {footerLinks.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path} 
                        className="text-muted-foreground hover:text-accent text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:translate-x-1 rtl:hover:-translate-x-1 inline-block"
                      >
                        {ar ? link.labelAr : link.labelEn}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            {/* Contact Column */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {ar ? 'معلومات التواصل' : 'CONTACT OFFICE'}
              </h4>
              <ul className="space-y-4" aria-label={ar ? 'معلومات التواصل' : 'Contact information list'}>
                {contactInfo.map((contact, idx) => {
                  const isLocation = !contact.href && (contact.regionEn || contact.value);
                  const label = ar ? contact.labelAr : contact.labelEn;
                  const displayValue = contact.value || (ar ? contact.regionAr : contact.regionEn);
                  const icon = getContactIcon(contact.labelEn);
                  
                  if (isLocation) {
                    return (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground text-xs leading-normal">
                        <span className="text-accent shrink-0 mt-0.5" aria-hidden="true">
                          {icon}
                        </span>
                        <div>
                          <span className="sr-only">{label}: </span>
                          <span>{displayValue}</span>
                        </div>
                      </li>
                    );
                  }
                  
                  return (
                    <li key={idx}>
                      <a 
                        href={contact.href} 
                        className="flex items-center gap-3 text-muted-foreground hover:text-accent text-xs transition-colors duration-300 group"
                        aria-label={`${label}: ${displayValue}`}
                        {...(contact.href?.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        <span className="text-accent shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                          {icon}
                        </span>
                        <div className="flex flex-wrap items-baseline gap-1.5 font-bold">
                          <span>{displayValue}</span>
                          {(contact.regionEn || contact.regionAr) && (
                            <span className="text-[9px] text-muted-foreground/40 uppercase tracking-widest font-bold">
                              ({ar ? contact.regionAr : contact.regionEn})
                            </span>
                          )}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="space-y-6">
              <NewsletterSignup />
            </div>
          </div>
          
          {/* Bottom Copyright bar */}
          <div className="border-t border-border/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground/60 text-xs text-center sm:text-start">
              &copy; {currentYear} Islam Mahrous. {ar ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
            <a 
              href="/Islam_Mahrous_Resume.pdf"
              download="Islam_Mahrous_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-accent text-xs transition-colors duration-300 relative py-1 border-b border-transparent hover:border-accent/40"
              aria-label={ar ? 'تحميل السيرة الذاتية بصيغة PDF' : 'Download CV in PDF format'}
            >
              {ar ? 'تحميل السيرة الذاتية' : 'Download Executive CV'}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

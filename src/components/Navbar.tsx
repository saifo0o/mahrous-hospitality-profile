import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import LanguageSelector from './LanguageSelector';
import HiddenAdminLogin from './HiddenAdminLogin';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '@/lib/brandConstants';
import signatureLogo from '@/assets/logos/im-signature-gold.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const { language, isRTL } = useLanguage();
  const { user, userRole, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { 
    setIsOpen(false); 
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLogoClick = () => {
    setLogoClickCount(prev => prev + 1);
    setTimeout(() => setLogoClickCount(0), 3000);
    if (logoClickCount + 1 === 5) {
      setShowAdminLogin(true);
      setLogoClickCount(0);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isOpen
            ? 'bg-transparent border-transparent'
            : isScrolled 
              ? 'bg-background/80 backdrop-blur-xl border-b border-accent/25 shadow-[0_8px_32px_0_rgba(181,80,43,0.05)]' 
              : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16' : 'h-24'}`}>
            {/* Logo Monogram */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg transition-all"
              onClick={handleLogoClick}
              aria-label={language.code === 'ar' ? 'الرئيسية - إسلام محروس' : 'Home - Islam Mahrous'}
            >
              <div className="h-9 flex items-center justify-center">
                <img src={signatureLogo} alt="" aria-hidden="true" className="h-9 w-auto object-contain" />
              </div>
              <span className="w-px h-5 bg-border/60" />
              <span className="font-playfair tracking-wide text-foreground group-hover:text-accent transition-colors duration-300 text-base md:text-lg">
                {language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous'}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-label={language.code === 'ar' ? item.labelAr : item.labelEn}
                    aria-current={isActive ? 'page' : undefined}
                    className="relative py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 focus-visible:outline-none min-h-[44px] flex items-center"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${
                      isActive
                        ? 'text-accent'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}>
                      {language.code === 'ar' ? item.labelAr : item.labelEn}
                    </span>
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                        layoutId="navbar-active"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Language and call triggers */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSelector />
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-sm border border-border/50 hover:border-accent/30 focus-visible:outline-none"
                      aria-label={language.code === 'ar' ? 'ملف المستخدم' : 'User profile'}
                    >
                      <User className="h-4 w-4 text-accent" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 rounded-sm border-border/60">
                    {userRole === 'admin' && (
                      <DropdownMenuItem onClick={() => navigate('/admin')} className="rounded-sm">
                        <Shield className="me-2 h-4 w-4 text-accent" />
                        <span>{language.code === 'ar' ? 'لوحة التحكم' : 'Admin Area'}</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="rounded-sm text-destructive focus:text-destructive">
                      <LogOut className="me-2 h-4 w-4" />
                      <span>{language.code === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : null}

              <Link
                to="/book-consultation"
                aria-label={language.code === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
                className="focus-visible:outline-none"
              >
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm px-5 h-9 text-xs font-semibold uppercase tracking-wider shadow-gold-sm hover:shadow-gold-md transition-all duration-300"
                >
                  {language.code === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-sm border border-border/40 bg-card/60 backdrop-blur-sm focus-visible:outline-none"
                aria-label={isOpen ? (language.code === 'ar' ? 'إغلاق القائمة' : 'Close menu') : (language.code === 'ar' ? 'فتح القائمة' : 'Open menu')}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="h-5 w-5 text-accent" /> : <Menu className="h-5 w-5 text-accent" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Curtain Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            className="fixed inset-0 z-45 bg-background/96 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-28 px-8 pb-12 overflow-y-auto"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold border-b border-border/20 pb-2">
                {language.code === 'ar' ? 'القائمة الرئيسية' : 'NAVIGATION DIRECTORY'}
              </p>
              
              {navigationItems.map((item, i) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: isRTL ? 25 : -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isRTL ? 25 : -25 }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      to={item.path}
                      aria-label={language.code === 'ar' ? item.labelAr : item.labelEn}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block w-full py-4 px-6 rounded-sm text-base font-semibold uppercase tracking-wider transition-all duration-300 min-h-[50px] flex items-center justify-between border ${
                        isActive
                          ? 'bg-accent/10 text-accent border-accent/25'
                          : 'text-muted-foreground hover:text-foreground border-border/30 hover:bg-muted/30'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{language.code === 'ar' ? item.labelAr : item.labelEn}</span>
                      <span className="text-[10px] text-accent/50">0{i+1}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              className="pt-6 mt-8 border-t border-border/30 flex flex-col gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: navigationItems.length * 0.05, duration: 0.3 }}
            >
              <div className="flex items-center justify-between px-4 py-3 bg-muted/40 border border-border/30 rounded-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {language.code === 'ar' ? 'لغة الموقع' : 'Bilingual Select'}
                </span>
                <LanguageSelector />
              </div>

              <Link
                to="/book-consultation"
                onClick={() => setIsOpen(false)}
                aria-label={language.code === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
              >
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm py-6 font-semibold uppercase tracking-wider text-sm shadow-gold-sm">
                  {language.code === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
                </Button>
              </Link>

              {user && (
                <Button
                  variant="ghost"
                  className="w-full justify-center text-destructive py-6 text-sm font-semibold uppercase tracking-wider rounded-sm border border-destructive/20 hover:bg-destructive/10"
                  onClick={() => { handleSignOut(); setIsOpen(false); }}
                >
                  <LogOut className="me-2 h-5 w-5" />
                  {language.code === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
                </Button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <HiddenAdminLogin isOpen={showAdminLogin} onClose={() => setShowAdminLogin(false)} />
    </>
  );
};

export default Navbar;

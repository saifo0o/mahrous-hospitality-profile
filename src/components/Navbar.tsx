
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
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
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const handleLogoClick = () => {
    setLogoClickCount(prev => prev + 1);
    setTimeout(() => setLogoClickCount(0), 3000);
    if (logoClickCount + 1 === 5) {
      setShowAdminLogin(true);
      setLogoClickCount(0);
    }
  };

  const navigationItems = [
    { label: language.code === 'ar' ? 'من أنا' : 'About', path: '/about' },
    { label: language.code === 'ar' ? 'المشاريع' : 'Projects', path: '/projects' },
    { label: language.code === 'ar' ? 'المسيرة' : 'Career', path: '/career' },
    { label: language.code === 'ar' ? 'المدونة' : 'Blog', path: '/blog' },
    { label: language.code === 'ar' ? 'تواصل' : 'Contact', path: '/contact' },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 group"
              onClick={handleLogoClick}
            >
              <motion.div 
                className={`rounded-lg flex items-center justify-center transition-all duration-500 bg-accent group-hover:scale-105 shadow-sm ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                <span className={`text-accent-foreground font-bold font-playfair transition-all duration-500 ${isScrolled ? 'text-sm' : 'text-lg'}`}>IM</span>
              </motion.div>
              <span className={`font-semibold font-playfair transition-all duration-500 ${isScrolled ? 'text-base' : 'text-lg'} text-foreground`}>
                {language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous'}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  <span className={`relative z-10 ${
                    location.pathname === item.path 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}>
                    {item.label}
                  </span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-muted"
                      layoutId="navbar-active"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
              <div className="ml-3 flex items-center gap-2">
                <LanguageSelector />
                
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-lg">
                        <User className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      {userRole === 'admin' && (
                        <DropdownMenuItem onClick={() => navigate('/admin')}>
                          <Shield className="mr-2 h-4 w-4" />
                          {language.code === 'ar' ? 'لوحة التحكم' : 'Admin'}
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        {language.code === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : null}

                <Link to="/book-consultation">
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                    {language.code === 'ar' ? 'احجز استشارة' : 'Book a Call'}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="md:hidden py-4 bg-background border-t border-border/50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col gap-1">
                  {navigationItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname === item.path 
                            ? 'bg-muted text-foreground' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="pt-3 mt-2 border-t border-border/50 flex flex-col gap-2 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                  >
                    <LanguageSelector />
                    <Link to="/book-consultation" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium">
                        {language.code === 'ar' ? 'احجز استشارة' : 'Book a Call'}
                      </Button>
                    </Link>
                    {user && (
                      <Button variant="ghost" className="w-full justify-start text-destructive" onClick={() => { handleSignOut(); setIsOpen(false); }}>
                        <LogOut className="mr-2 h-4 w-4" />
                        {language.code === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
                      </Button>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <HiddenAdminLogin isOpen={showAdminLogin} onClose={() => setShowAdminLogin(false)} />
    </>
  );
};

export default Navbar;

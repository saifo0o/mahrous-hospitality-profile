
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 group"
              onClick={handleLogoClick}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-accent group-hover:scale-105 shadow-sm`}>
                <span className="text-accent-foreground font-bold text-lg font-playfair">IM</span>
              </div>
              <span className={`text-lg font-semibold font-playfair transition-colors ${
                isScrolled ? 'text-foreground' : 'text-foreground'
              }`}>
                {language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous'}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path 
                      ? 'text-foreground bg-muted' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="ml-2 flex items-center gap-2">
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
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium shadow-sm">
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
          {isOpen && (
            <div className="md:hidden py-4 bg-background border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col gap-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path 
                        ? 'bg-muted text-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-3 mt-2 border-t border-border/50 flex flex-col gap-2 px-4">
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
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <HiddenAdminLogin isOpen={showAdminLogin} onClose={() => setShowAdminLogin(false)} />
    </>
  );
};

export default Navbar;

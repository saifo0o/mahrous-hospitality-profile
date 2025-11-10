
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AccessibilityEnhancements from '@/components/AccessibilityEnhancements';
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
import SearchButton from './SearchButton';
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    setLogoClickCount(prev => prev + 1);
    
    // Reset counter after 3 seconds of inactivity
    setTimeout(() => {
      setLogoClickCount(0);
    }, 3000);
    
    // Show admin login after 5 clicks
    if (logoClickCount + 1 === 5) {
      setShowAdminLogin(true);
      setLogoClickCount(0);
    }
  };

  const navigationItems = [
    { label: language.code === 'ar' ? 'من نحن' : 'About', path: '/about' },
    { label: language.code === 'ar' ? 'المشاريع' : 'Projects', path: '/projects' },
    { label: language.code === 'ar' ? 'المدونة' : 'Blog', path: '/blog' },
    { label: language.code === 'ar' ? 'الجوائز' : 'Awards', path: '/awards' },
    { label: language.code === 'ar' ? 'وظائف' : 'Career', path: '/career' },
    { label: language.code === 'ar' ? 'احجز استشارة' : 'Book Consultation', path: '/book-consultation' },
    { label: language.code === 'ar' ? 'الحاسبات' : 'Calculators', path: '/calculators' },
    { label: language.code === 'ar' ? 'تواصل معنا' : 'Contact', path: '/contact' },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-border/50' 
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={handleLogoClick}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'bg-accent' : 'bg-accent/90'
              } group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                <span className="text-accent-foreground font-bold text-xl font-playfair">IM</span>
              </div>
              <div className={`text-2xl font-bold font-playfair transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              } group-hover:text-accent`}>
                {language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous'}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-medium transition-all duration-300 group ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  } ${
                    location.pathname === item.path 
                      ? 'text-accent' 
                      : 'hover:text-accent'
                  }`}
                >
                  {item.label}
                  <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
              <LanguageSelector />
              <SearchButton />
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className={`gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isScrolled 
                          ? 'hover:bg-accent/10 text-foreground' 
                          : 'hover:bg-white/10 text-white'
                      }`}
                    >
                      <User className="h-4 w-4" />
                      {user.email}
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-card/98 backdrop-blur-xl border-border/50 shadow-2xl" align="end" forceMount>
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <User className="mr-2 h-4 w-4" />
                      <span>{language.code === 'ar' ? 'الملف الشخصي' : 'Profile'}</span>
                    </DropdownMenuItem>
                    {userRole === 'admin' && (
                      <DropdownMenuItem onClick={() => navigate('/admin')}>
                        <Shield className="mr-2 h-4 w-4" />
                        <span>{language.code === 'ar' ? 'لوحة التحكم' : 'Admin Panel'}</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>{language.code === 'ar' ? 'تسجيل الخروج' : 'Log out'}</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/auth">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    {language.code === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button and Search */}
            <div className="md:hidden flex items-center gap-2">
              <SearchButton />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">{language.code === 'ar' ? 'فتح القائمة' : 'Open menu'}</span>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-6 bg-white/98 backdrop-blur-xl border-t border-border/50 shadow-2xl animate-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-3 px-4 rounded-md transition-colors duration-200 ${
                      location.pathname === item.path 
                        ? 'bg-primary/10 text-primary font-semibold' 
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-2">
                  <LanguageSelector />
                </div>
                <div className="px-4">
                  {user ? (
                    <div className="space-y-2">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start"
                        onClick={() => {
                          navigate('/profile');
                          setIsOpen(false);
                        }}
                      >
                        <User className="mr-2 h-4 w-4" />
                        {language.code === 'ar' ? 'الملف الشخصي' : 'Profile'}
                      </Button>
                      {userRole === 'admin' && (
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start"
                          onClick={() => {
                            navigate('/admin');
                            setIsOpen(false);
                          }}
                        >
                          <Shield className="mr-2 h-4 w-4" />
                          {language.code === 'ar' ? 'لوحة التحكم' : 'Admin Panel'}
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-red-600 hover:text-red-700"
                        onClick={() => {
                          handleSignOut();
                          setIsOpen(false);
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        {language.code === 'ar' ? 'تسجيل الخروج' : 'Log Out'}
                      </Button>
                    </div>
                  ) : (
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">{language.code === 'ar' ? 'تسجيل الدخول' : 'Sign In'}</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hidden Admin Login Modal */}
      <HiddenAdminLogin 
        isOpen={showAdminLogin} 
        onClose={() => setShowAdminLogin(false)} 
      />
    </>
  );
};

export default Navbar;

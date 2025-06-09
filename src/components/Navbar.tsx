
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut, User, Shield } from 'lucide-react';
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
    { label: language.code === 'ar' ? 'الجوائز' : 'Awards', path: '/awards' },
    { label: language.code === 'ar' ? 'وظائف' : 'Career', path: '/career' },
    { label: language.code === 'ar' ? 'تواصل معنا' : 'Contact', path: '/contact' },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="text-2xl font-bold text-primary">
                {language.code === 'ar' ? 'إسلام محروس' : 'Islam Mahrous'}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-700 hover:text-primary transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <LanguageSelector />
              <SearchButton />
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-2 px-0 font-normal">
                      {user.email}
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
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
                  <Button>{language.code === 'ar' ? 'تسجيل الدخول' : 'Sign In'}</Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">{language.code === 'ar' ? 'فتح القائمة' : 'Open menu'}</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
                <LanguageSelector />
                {user ? (
                  <Button variant="ghost" onClick={handleSignOut}>
                    {language.code === 'ar' ? 'تسجيل الخروج' : 'Log Out'}
                  </Button>
                ) : (
                  <Link to="/auth">
                    <Button>{language.code === 'ar' ? 'تسجيل الدخول' : 'Sign In'}</Button>
                  </Link>
                )}
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

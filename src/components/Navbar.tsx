
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User, Settings, LogOut } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import LanguageSelector from './LanguageSelector';
import SearchButton from './SearchButton';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { language, isRTL } = useLanguage();
  const { user, profile, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { 
      name: language.code === 'ar' ? 'الرئيسية' : 'Home', 
      href: '/' 
    },
    { 
      name: language.code === 'ar' ? 'من أنا' : 'About', 
      href: '/about' 
    },
    { 
      name: language.code === 'ar' ? 'المسيرة المهنية' : 'Career', 
      href: '/career' 
    },
    { 
      name: language.code === 'ar' ? 'المشاريع' : 'Projects', 
      href: '/projects' 
    },
    { 
      name: language.code === 'ar' ? 'الجوائز' : 'Awards', 
      href: '/awards' 
    },
    { 
      name: language.code === 'ar' ? 'تواصل معي' : 'Contact', 
      href: '/contact' 
    },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <Link 
                to="/" 
                className="text-2xl font-bold bg-gradient-to-r from-luxury-navy to-luxury-gold bg-clip-text text-transparent"
              >
                Islam Mahrous
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className={`flex items-baseline space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-luxury-gold'
                        : scrolled 
                          ? 'text-gray-700 hover:text-luxury-gold'
                          : 'text-white hover:text-luxury-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side items */}
            <div className="hidden md:flex items-center space-x-4">
              <SearchButton />
              <LanguageSelector />
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="hidden lg:inline">
                        {profile?.full_name || user.email}
                      </span>
                      {profile?.role && (
                        <Badge variant="secondary" className="text-xs">
                          {profile.role}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {(profile?.role === 'admin' || profile?.role === 'editor') && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link to="/admin">
                            <Settings className="mr-2 h-4 w-4" />
                            {language.code === 'ar' ? 'لوحة الإدارة' : 'Admin Panel'}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                      </>
                    )}
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      {language.code === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="outline" size="sm" onClick={() => setAuthModalOpen(true)}>
                  <User className="h-4 w-4 mr-2" />
                  {language.code === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-luxury-gold' 
                    : 'text-white hover:text-luxury-gold'
                }`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-luxury-gold bg-gray-50'
                      : 'text-gray-700 hover:text-luxury-gold hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-3 py-2 border-t border-gray-200 mt-3">
                <div className="flex items-center justify-between">
                  <SearchButton />
                  <LanguageSelector />
                </div>
                
                {user ? (
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm">{profile?.full_name || user.email}</span>
                      {profile?.role && (
                        <Badge variant="secondary" className="text-xs">
                          {profile.role}
                        </Badge>
                      )}
                    </div>
                    {(profile?.role === 'admin' || profile?.role === 'editor') && (
                      <Link 
                        to="/admin" 
                        className="block text-sm text-gray-600 hover:text-luxury-gold"
                        onClick={() => setIsOpen(false)}
                      >
                        <Settings className="inline mr-2 h-4 w-4" />
                        {language.code === 'ar' ? 'لوحة الإدارة' : 'Admin Panel'}
                      </Link>
                    )}
                    <button 
                      onClick={() => { signOut(); setIsOpen(false); }}
                      className="block text-sm text-gray-600 hover:text-luxury-gold"
                    >
                      <LogOut className="inline mr-2 h-4 w-4" />
                      {language.code === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
                    </button>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 w-full"
                    onClick={() => { setAuthModalOpen(true); setIsOpen(false); }}
                  >
                    <User className="h-4 w-4 mr-2" />
                    {language.code === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
};

export default Navbar;

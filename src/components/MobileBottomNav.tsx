import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Briefcase, Calendar, Menu, X, LogOut, User, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { navigationItems } from '@/lib/brandConstants';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from '@/components/ui/drawer';
import LanguageSelector from './LanguageSelector';

const MobileBottomNav = () => {
  const { language, isRTL } = useLanguage();
  const { user, userRole, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    setIsDrawerOpen(false);
    navigate('/auth');
  };

  const navLinks = [
    {
      icon: <Home className="w-5 h-5" />,
      labelEn: 'Home',
      labelAr: 'الرئيسية',
      path: '/',
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      labelEn: 'Projects',
      labelAr: 'المشاريع',
      path: '/projects',
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      labelEn: 'Consult',
      labelAr: 'استشارة',
      path: '/book-consultation',
    },
  ];

  return (
    <>
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border/40 pb-safe">
        <div className="flex items-center justify-around h-16 px-2">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                } transition-colors duration-200`}
                aria-label={language.code === 'ar' ? item.labelAr : item.labelEn}
              >
                {item.icon}
                <span className="text-[10px] font-medium">{language.code === 'ar' ? item.labelAr : item.labelEn}</span>
              </Link>
            );
          })}

          {/* Menu Trigger for Drawer */}
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  isDrawerOpen ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                } transition-colors duration-200 focus-visible:outline-none`}
                aria-label={language.code === 'ar' ? 'القائمة' : 'Menu'}
              >
                <Menu className="w-5 h-5" />
                <span className="text-[10px] font-medium">{language.code === 'ar' ? 'القائمة' : 'Menu'}</span>
              </button>
            </DrawerTrigger>

            <DrawerContent className="max-h-[85vh]">
              <DrawerHeader className="border-b border-border/30 pb-4">
                <div className="flex items-center justify-between">
                  <DrawerTitle className="font-playfair text-xl">
                    {language.code === 'ar' ? 'القائمة الرئيسية' : 'Navigation Menu'}
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>

              <div className="p-4 overflow-y-auto space-y-6">
                <div className="space-y-1">
                  {navigationItems.map((item, i) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center justify-between p-4 rounded-md transition-colors ${
                          isActive
                            ? 'bg-accent/10 text-accent font-semibold'
                            : 'text-foreground hover:bg-muted font-medium'
                        }`}
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        <span className="uppercase tracking-wider text-sm">{language.code === 'ar' ? item.labelAr : item.labelEn}</span>
                        <span className="text-[10px] text-muted-foreground opacity-50">0{i + 1}</span>
                      </Link>
                    );
                  })}
                </div>

                <div className="space-y-4 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between p-4 bg-muted/40 rounded-md border border-border/30">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {language.code === 'ar' ? 'لغة الموقع' : 'Language'}
                    </span>
                    <LanguageSelector />
                  </div>

                  {user ? (
                    <div className="grid grid-cols-1 gap-2">
                      {userRole === 'admin' && (
                        <Button
                          variant="outline"
                          className="w-full justify-start gap-2 h-12 rounded-sm"
                          onClick={() => {
                            setIsDrawerOpen(false);
                            navigate('/admin');
                          }}
                        >
                          <Shield className="h-4 w-4 text-accent" />
                          {language.code === 'ar' ? 'لوحة التحكم' : 'Admin Area'}
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        className="w-full justify-center text-destructive py-6 text-sm font-semibold uppercase tracking-wider rounded-sm border border-destructive/20 hover:bg-destructive/10"
                        onClick={handleSignOut}
                      >
                        <LogOut className="me-2 h-4 w-4" />
                        {language.code === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full justify-center h-12 rounded-sm gap-2"
                      onClick={() => {
                        setIsDrawerOpen(false);
                        navigate('/auth');
                      }}
                    >
                      <User className="h-4 w-4" />
                      {language.code === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                    </Button>
                  )}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
      {/* Padding to prevent content from being hidden behind the bottom nav */}
      <div className="h-16 md:hidden w-full shrink-0" aria-hidden="true" />
    </>
  );
};

export default MobileBottomNav;

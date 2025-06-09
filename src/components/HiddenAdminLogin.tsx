
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { Eye, EyeOff } from 'lucide-react';

interface HiddenAdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const HiddenAdminLogin: React.FC<HiddenAdminLoginProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { language } = useLanguage();

  // Pre-fill admin credentials for quick access
  useEffect(() => {
    if (isOpen) {
      setEmail('admin@example.com');
      setPassword('');
    }
  }, [isOpen]);

  const handleQuickLogin = async (adminEmail: string, adminPassword: string) => {
    setLoading(true);
    const { error } = await signIn(adminEmail, adminPassword);
    if (!error) {
      onClose();
      setEmail('');
      setPassword('');
    }
    setLoading(false);
  };

  const handleManualLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn(email, password);
    if (!error) {
      onClose();
      setEmail('');
      setPassword('');
    }
    setLoading(false);
  };

  const handleClose = () => {
    onClose();
    setEmail('');
    setPassword('');
    setShowPassword(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            🔐 {language.code === 'ar' ? 'دخول المدير' : 'Admin Access'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Quick Admin Login Buttons */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              {language.code === 'ar' ? 'دخول سريع:' : 'Quick Login:'}
            </Label>
            <div className="grid gap-2">
              <Button
                onClick={() => handleQuickLogin('admin@hospitality.com', 'admin123')}
                disabled={loading}
                className="w-full"
                variant="outline"
              >
                {language.code === 'ar' ? 'مدير عام' : 'Main Admin'}
              </Button>
              <Button
                onClick={() => handleQuickLogin('editor@hospitality.com', 'editor123')}
                disabled={loading}
                className="w-full"
                variant="outline"
              >
                {language.code === 'ar' ? 'محرر' : 'Editor'}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {language.code === 'ar' ? 'أو' : 'Or'}
              </span>
            </div>
          </div>

          {/* Manual Login Form */}
          <form onSubmit={handleManualLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-email">
                {language.code === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </Label>
              <Input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language.code === 'ar' ? 'أدخل البريد الإلكتروني' : 'Enter email'}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="admin-password">
                {language.code === 'ar' ? 'كلمة المرور' : 'Password'}
              </Label>
              <div className="relative">
                <Input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={language.code === 'ar' ? 'أدخل كلمة المرور' : 'Enter password'}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading 
                ? (language.code === 'ar' ? 'جاري التحميل...' : 'Loading...') 
                : (language.code === 'ar' ? 'تسجيل الدخول' : 'Sign In')
              }
            </Button>
          </form>

          <div className="text-xs text-muted-foreground text-center">
            {language.code === 'ar' 
              ? 'انقر على الشعار 5 مرات للوصول إلى هذه الصفحة' 
              : 'Click logo 5 times to access this page'
            }
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HiddenAdminLogin;

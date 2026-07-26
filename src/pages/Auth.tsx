import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Lock, Loader2 } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

export default function Auth() {
  const { user, signIn, signUp, loading } = useAuth();
  const { language, isRTL } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  if (user) return <Navigate to="/" replace />;

  const ar = language.code === 'ar';

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoading(true);
    try {
      await signIn(email, password);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !fullName) return;
    setIsLoading(true);
    try {
      await signUp(email, password, fullName);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : 'text-left'}`}>
        <Navbar />
        
        <main id="main" className="flex-grow flex items-center justify-center py-28 px-4 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/[0.03] rounded-full blur-[80px]" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="w-full max-w-md relative z-10"
          >
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mx-auto mb-4 border border-accent/20">
                <Lock className="h-5 w-5 text-accent-foreground" />
              </div>
              <h1 className="text-xl sm:text-2xl font-normal font-playfair text-foreground">
                {ar ? 'حساب المشرف' : 'Administrator Portal'}
              </h1>
            </div>

            <Card className="border border-border/40 shadow-sm rounded-sm bg-card overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <Tabs defaultValue="signin" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6 rounded-sm bg-muted p-1">
                    <TabsTrigger value="signin" className="rounded-sm py-2.5 text-xs sm:text-sm font-medium">
                      {ar ? 'تسجيل الدخول' : 'Sign In'}
                    </TabsTrigger>
                    <TabsTrigger value="signup" className="rounded-sm py-2.5 text-xs sm:text-sm font-medium">
                      {ar ? 'حساب جديد' : 'Sign Up'}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="signin">
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="signin-email" className="text-xs uppercase tracking-wider text-muted-foreground">
                          {ar ? 'البريد الإلكتروني' : 'Email Address'}
                        </Label>
                        <Input 
                          id="signin-email"
                          type="email" 
                          value={email} 
                          onChange={e => setEmail(e.target.value)} 
                          required 
                          className="rounded-sm h-11 border-border focus:border-accent focus:ring-accent/20"
                          placeholder="name@company.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="signin-password" className="text-xs uppercase tracking-wider text-muted-foreground">
                            {ar ? 'كلمة المرور' : 'Password'}
                          </Label>
                        </div>
                        <Input 
                          id="signin-password"
                          type="password" 
                          value={password} 
                          onChange={e => setPassword(e.target.value)} 
                          required 
                          className="rounded-sm h-11 border-border focus:border-accent focus:ring-accent/20"
                          placeholder="••••••••"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm h-11 font-semibold flex items-center justify-center gap-2 mt-2"
                        disabled={isLoading}
                      >
                        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                        {ar ? 'تسجيل الدخول' : 'Sign In'}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="signup">
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="signup-name" className="text-xs uppercase tracking-wider text-muted-foreground">
                          {ar ? 'الاسم الكامل' : 'Full Name'}
                        </Label>
                        <Input 
                          id="signup-name"
                          value={fullName} 
                          onChange={e => setFullName(e.target.value)} 
                          required
                          className="rounded-sm h-11 border-border focus:border-accent focus:ring-accent/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="signup-email" className="text-xs uppercase tracking-wider text-muted-foreground">
                          {ar ? 'البريد الإلكتروني' : 'Email Address'}
                        </Label>
                        <Input 
                          id="signup-email"
                          type="email" 
                          value={email} 
                          onChange={e => setEmail(e.target.value)} 
                          required 
                          className="rounded-sm h-11 border-border focus:border-accent focus:ring-accent/20"
                          placeholder="name@company.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="signup-password" className="text-xs uppercase tracking-wider text-muted-foreground">
                          {ar ? 'كلمة المرور' : 'Password'}
                        </Label>
                        <Input 
                          id="signup-password"
                          type="password" 
                          value={password} 
                          onChange={e => setPassword(e.target.value)} 
                          required 
                          className="rounded-sm h-11 border-border focus:border-accent focus:ring-accent/20"
                          placeholder="••••••••"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-sm h-11 font-semibold flex items-center justify-center gap-2 mt-2"
                        disabled={isLoading}
                      >
                        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                        {ar ? 'إنشاء حساب جديد' : 'Create Account'}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
}

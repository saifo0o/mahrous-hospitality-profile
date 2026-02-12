
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const Auth = () => {
  const { user, signIn, signUp, loading } = useAuth();
  const { language, isRTL } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background"><p className="text-muted-foreground">Loading...</p></div>;
  if (user) return <Navigate to="/" replace />;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try { await signIn(email, password); } finally { setIsLoading(false); }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try { await signUp(email, password, fullName); } finally { setIsLoading(false); }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : ''}`}>
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-6 w-6 text-accent-foreground" />
            </div>
            <h1 className="text-2xl font-bold font-playfair text-foreground">
              {language.code === 'ar' ? 'تسجيل الدخول' : 'Authentication'}
            </h1>
          </div>

          <Card className="border border-border/50 shadow-sm rounded-xl">
            <CardContent className="p-6">
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 rounded-lg">
                  <TabsTrigger value="signin" className="rounded-lg">{language.code === 'ar' ? 'دخول' : 'Sign In'}</TabsTrigger>
                  <TabsTrigger value="signup" className="rounded-lg">{language.code === 'ar' ? 'حساب جديد' : 'Sign Up'}</TabsTrigger>
                </TabsList>

                <TabsContent value="signin">
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label>{language.code === 'ar' ? 'البريد الإلكتروني' : 'Email'}</Label>
                      <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="rounded-xl h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label>{language.code === 'ar' ? 'كلمة المرور' : 'Password'}</Label>
                      <Input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="rounded-xl h-11" />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl h-11 font-semibold" disabled={isLoading}>
                      {isLoading ? '...' : (language.code === 'ar' ? 'تسجيل الدخول' : 'Sign In')}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup">
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="space-y-2">
                      <Label>{language.code === 'ar' ? 'الاسم' : 'Full Name'}</Label>
                      <Input value={fullName} onChange={e => setFullName(e.target.value)} className="rounded-xl h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label>{language.code === 'ar' ? 'البريد الإلكتروني' : 'Email'}</Label>
                      <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="rounded-xl h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label>{language.code === 'ar' ? 'كلمة المرور' : 'Password'}</Label>
                      <Input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="rounded-xl h-11" />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl h-11 font-semibold" disabled={isLoading}>
                      {isLoading ? '...' : (language.code === 'ar' ? 'إنشاء حساب' : 'Sign Up')}
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
  );
};

export default Auth;

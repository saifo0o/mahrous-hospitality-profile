import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminPanel from '@/components/AdminPanel';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { Navigate } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { Loader2 } from 'lucide-react';

export default function Admin() {
  const { user, userRole, loading } = useAuth();
  const { isRTL, language } = useLanguage();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
          <p className="text-sm text-muted-foreground">
            {language.code === 'ar' ? 'جاري التحميل...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (userRole !== 'admin' && userRole !== 'editor') {
    return <Navigate to="/" replace />;
  }

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'text-right' : 'text-left'}`}>
        <Navbar />
        <main id="main" className="flex-grow pt-28 pb-20">
          <AdminPanel />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminPanel from '@/components/AdminPanel';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const { user, userRole, loading } = useAuth();
  const { isRTL } = useLanguage();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
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
    <motion.div 
      className={`min-h-screen flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="flex-grow pt-20">
        <AdminPanel />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Admin;

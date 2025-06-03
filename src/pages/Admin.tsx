
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import AdminPanel from '@/components/AdminPanel';
import LoadingSpinner from '@/components/LoadingSpinner';

const Admin = () => {
  const { user, profile, loading } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (!profile || (profile.role !== 'admin' && profile.role !== 'editor')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language.code === 'ar' ? 'غير مخول' : 'Unauthorized'}
          </h1>
          <p className="text-gray-600">
            {language.code === 'ar' 
              ? 'ليس لديك صلاحية للوصول إلى هذه الصفحة'
              : 'You do not have permission to access this page'
            }
          </p>
        </div>
      </div>
    );
  }

  return <AdminPanel />;
};

export default Admin;

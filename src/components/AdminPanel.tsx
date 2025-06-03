
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ContentManager from './ContentManager';
import MediaManager from './MediaManager';
import UserManager from './UserManager';
import { Settings, Users, FileText, Image, LogOut } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const { profile, signOut, isAdmin } = useAuth();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('content');

  if (!profile || (!isAdmin && profile.role !== 'editor')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">
                {language.code === 'ar' ? 'غير مخول' : 'Unauthorized'}
              </h2>
              <p className="text-gray-600">
                {language.code === 'ar' 
                  ? 'ليس لديك صلاحية للوصول إلى هذه الصفحة'
                  : 'You do not have permission to access this page'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-luxury-navy">
              {language.code === 'ar' ? 'لوحة الإدارة' : 'Admin Panel'}
            </h1>
            <p className="text-gray-600 mt-1">
              {language.code === 'ar' ? 'مرحباً' : 'Welcome'}, {profile.full_name || profile.email}
              <Badge variant="secondary" className="ml-2">
                {profile.role}
              </Badge>
            </p>
          </div>
          <Button variant="outline" onClick={signOut}>
            <LogOut className="h-4 w-4 mr-2" />
            {language.code === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
          </Button>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 lg:grid-cols-4 w-full">
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              {language.code === 'ar' ? 'المحتوى' : 'Content'}
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              {language.code === 'ar' ? 'الوسائط' : 'Media'}
            </TabsTrigger>
            {isAdmin && (
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {language.code === 'ar' ? 'المستخدمون' : 'Users'}
              </TabsTrigger>
            )}
            {isAdmin && (
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                {language.code === 'ar' ? 'الإعدادات' : 'Settings'}
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="content">
            <ContentManager />
          </TabsContent>

          <TabsContent value="media">
            <MediaManager />
          </TabsContent>

          {isAdmin && (
            <TabsContent value="users">
              <UserManager />
            </TabsContent>
          )}

          {isAdmin && (
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language.code === 'ar' ? 'إعدادات النظام' : 'System Settings'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {language.code === 'ar' 
                      ? 'إعدادات النظام ستكون متاحة قريباً'
                      : 'System settings will be available soon'
                    }
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;

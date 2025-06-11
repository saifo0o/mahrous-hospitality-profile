
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import ContentManager from './ContentManager';
import MediaManager from './MediaManager';
import UserManager from './UserManager';
import SiteSettingsManager from './SiteSettingsManager';
import NavigationManager from './NavigationManager';
import CMSContentSeeder from './CMSContentSeeder';

const AdminPanel: React.FC = () => {
  const { userRole } = useAuth();
  const { language } = useLanguage();

  if (userRole !== 'admin' && userRole !== 'editor') {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              {language.code === 'ar' 
                ? 'ليس لديك صلاحية للوصول إلى لوحة الإدارة' 
                : 'You do not have permission to access the admin panel'
              }
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            {language.code === 'ar' ? 'لوحة الإدارة الشاملة' : 'Comprehensive Admin Panel'}
          </CardTitle>
          <p className="text-muted-foreground">
            {language.code === 'ar' 
              ? 'تحكم كامل في جميع جوانب الموقع والمحتوى' 
              : 'Complete control over all website aspects and content'
            }
          </p>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <CMSContentSeeder />
          </div>
          
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-5">
              <TabsTrigger value="content">
                {language.code === 'ar' ? 'المحتوى' : 'Content'}
              </TabsTrigger>
              <TabsTrigger value="navigation">
                {language.code === 'ar' ? 'التنقل' : 'Navigation'}
              </TabsTrigger>
              <TabsTrigger value="media">
                {language.code === 'ar' ? 'الوسائط' : 'Media'}
              </TabsTrigger>
              <TabsTrigger value="settings">
                {language.code === 'ar' ? 'الإعدادات' : 'Settings'}
              </TabsTrigger>
              {userRole === 'admin' && (
                <TabsTrigger value="users">
                  {language.code === 'ar' ? 'المستخدمين' : 'Users'}
                </TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="content" className="mt-6">
              <ContentManager />
            </TabsContent>
            
            <TabsContent value="navigation" className="mt-6">
              <NavigationManager />
            </TabsContent>
            
            <TabsContent value="media" className="mt-6">
              <MediaManager />
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6">
              <SiteSettingsManager />
            </TabsContent>
            
            {userRole === 'admin' && (
              <TabsContent value="users" className="mt-6">
                <UserManager />
              </TabsContent>
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;

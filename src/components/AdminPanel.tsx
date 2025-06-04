
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import ContentManager from './ContentManager';
import MediaManager from './MediaManager';
import UserManager from './UserManager';

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
          <CardTitle>
            {language.code === 'ar' ? 'لوحة الإدارة' : 'Admin Panel'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="content">
                {language.code === 'ar' ? 'إدارة المحتوى' : 'Content'}
              </TabsTrigger>
              <TabsTrigger value="media">
                {language.code === 'ar' ? 'إدارة الوسائط' : 'Media'}
              </TabsTrigger>
              {userRole === 'admin' && (
                <TabsTrigger value="users">
                  {language.code === 'ar' ? 'إدارة المستخدمين' : 'Users'}
                </TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="content" className="mt-6">
              <ContentManager />
            </TabsContent>
            
            <TabsContent value="media" className="mt-6">
              <MediaManager />
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

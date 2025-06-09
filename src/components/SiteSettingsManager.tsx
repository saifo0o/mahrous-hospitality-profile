
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Globe, Palette, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface SiteSettings {
  siteName: string;
  tagline: string;
  description: string;
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    ogImage: string;
  };
  analytics: {
    googleAnalytics: string;
    facebookPixel: string;
  };
  maintenance: {
    enabled: boolean;
    message: string;
  };
  features: {
    blog: boolean;
    portfolio: boolean;
    testimonials: boolean;
    contact: boolean;
    newsletter: boolean;
  };
}

const SiteSettingsManager: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: 'Islam Mahrous',
    tagline: 'Hospitality Excellence Expert',
    description: 'Leading expert in hospitality management and excellence',
    logo: '',
    favicon: '',
    primaryColor: '#1e40af',
    secondaryColor: '#64748b',
    accentColor: '#f59e0b',
    fontFamily: 'Inter',
    contactEmail: 'info@islammahrous.com',
    contactPhone: '+971 50 123 4567',
    address: 'Dubai, United Arab Emirates',
    socialMedia: {
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: '',
      youtube: '',
    },
    seo: {
      metaTitle: 'Islam Mahrous - Hospitality Excellence Expert',
      metaDescription: 'Leading expert in hospitality management, training, and excellence. Discover innovative approaches to hospitality leadership.',
      keywords: 'hospitality, management, training, excellence, leadership, Dubai',
      ogImage: '',
    },
    analytics: {
      googleAnalytics: '',
      facebookPixel: '',
    },
    maintenance: {
      enabled: false,
      message: 'We are currently updating our website. Please check back soon.',
    },
    features: {
      blog: true,
      portfolio: true,
      testimonials: true,
      contact: true,
      newsletter: true,
    },
  });

  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();
  const { toast } = useToast();

  const handleSave = async () => {
    setLoading(true);
    try {
      // Here you would save to your database or local storage
      localStorage.setItem('siteSettings', JSON.stringify(settings));
      
      toast({
        title: "Success",
        description: "Site settings saved successfully",
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load settings from localStorage on component mount
    const savedSettings = localStorage.getItem('siteSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {language.code === 'ar' ? 'إعدادات الموقع' : 'Site Settings'}
        </h2>
        
        <Button onClick={handleSave} disabled={loading}>
          <Save className="h-4 w-4 mr-2" />
          {loading ? 'Saving...' : 'Save Settings'}
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                General Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={settings.siteName}
                    onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={settings.tagline}
                    onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Site Description</Label>
                <Textarea
                  id="description"
                  value={settings.description}
                  onChange={(e) => setSettings({ ...settings, description: e.target.value })}
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="logo">Logo URL</Label>
                  <Input
                    id="logo"
                    value={settings.logo}
                    onChange={(e) => setSettings({ ...settings, logo: e.target.value })}
                    placeholder="https://example.com/logo.png"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="favicon">Favicon URL</Label>
                  <Input
                    id="favicon"
                    value={settings.favicon}
                    onChange={(e) => setSettings({ ...settings, favicon: e.target.value })}
                    placeholder="https://example.com/favicon.ico"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feature Toggles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(settings.features).map(([feature, enabled]) => (
                <div key={feature} className="flex items-center justify-between">
                  <Label htmlFor={feature} className="capitalize">
                    {feature.replace(/([A-Z])/g, ' $1')}
                  </Label>
                  <Switch
                    id={feature}
                    checked={enabled}
                    onCheckedChange={(checked) => 
                      setSettings({
                        ...settings,
                        features: { ...settings.features, [feature]: checked }
                      })
                    }
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Theme & Colors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="primaryColor"
                      type="color"
                      value={settings.primaryColor}
                      onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                      className="w-12 h-10"
                    />
                    <Input
                      value={settings.primaryColor}
                      onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                      placeholder="#1e40af"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="secondaryColor"
                      type="color"
                      value={settings.secondaryColor}
                      onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                      className="w-12 h-10"
                    />
                    <Input
                      value={settings.secondaryColor}
                      onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                      placeholder="#64748b"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="accentColor">Accent Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="accentColor"
                      type="color"
                      value={settings.accentColor}
                      onChange={(e) => setSettings({ ...settings, accentColor: e.target.value })}
                      className="w-12 h-10"
                    />
                    <Input
                      value={settings.accentColor}
                      onChange={(e) => setSettings({ ...settings, accentColor: e.target.value })}
                      placeholder="#f59e0b"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fontFamily">Font Family</Label>
                <Select
                  value={settings.fontFamily}
                  onValueChange={(value) => setSettings({ ...settings, fontFamily: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Roboto">Roboto</SelectItem>
                    <SelectItem value="Open Sans">Open Sans</SelectItem>
                    <SelectItem value="Lato">Lato</SelectItem>
                    <SelectItem value="Montserrat">Montserrat</SelectItem>
                    <SelectItem value="Poppins">Poppins</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email Address</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Phone Number</Label>
                <Input
                  id="contactPhone"
                  value={settings.contactPhone}
                  onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(settings.socialMedia).map(([platform, url]) => {
                const icons = {
                  facebook: <Facebook className="h-4 w-4" />,
                  twitter: <Twitter className="h-4 w-4" />,
                  linkedin: <Linkedin className="h-4 w-4" />,
                  instagram: <Instagram className="h-4 w-4" />,
                  youtube: <Youtube className="h-4 w-4" />,
                };
                
                return (
                  <div key={platform} className="space-y-2">
                    <Label htmlFor={platform} className="flex items-center space-x-2">
                      {icons[platform as keyof typeof icons]}
                      <span className="capitalize">{platform}</span>
                    </Label>
                    <Input
                      id={platform}
                      value={url}
                      onChange={(e) => setSettings({
                        ...settings,
                        socialMedia: { ...settings.socialMedia, [platform]: e.target.value }
                      })}
                      placeholder={`https://${platform}.com/yourprofile`}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="seo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={settings.seo.metaTitle}
                  onChange={(e) => setSettings({
                    ...settings,
                    seo: { ...settings.seo, metaTitle: e.target.value }
                  })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={settings.seo.metaDescription}
                  onChange={(e) => setSettings({
                    ...settings,
                    seo: { ...settings.seo, metaDescription: e.target.value }
                  })}
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input
                  id="keywords"
                  value={settings.seo.keywords}
                  onChange={(e) => setSettings({
                    ...settings,
                    seo: { ...settings.seo, keywords: e.target.value }
                  })}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="ogImage">Open Graph Image</Label>
                <Input
                  id="ogImage"
                  value={settings.seo.ogImage}
                  onChange={(e) => setSettings({
                    ...settings,
                    seo: { ...settings.seo, ogImage: e.target.value }
                  })}
                  placeholder="https://example.com/og-image.jpg"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                <Input
                  id="googleAnalytics"
                  value={settings.analytics.googleAnalytics}
                  onChange={(e) => setSettings({
                    ...settings,
                    analytics: { ...settings.analytics, googleAnalytics: e.target.value }
                  })}
                  placeholder="GA-XXXXXXXXX-X"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="facebookPixel">Facebook Pixel ID</Label>
                <Input
                  id="facebookPixel"
                  value={settings.analytics.facebookPixel}
                  onChange={(e) => setSettings({
                    ...settings,
                    analytics: { ...settings.analytics, facebookPixel: e.target.value }
                  })}
                  placeholder="123456789012345"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Maintenance Mode</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="maintenanceEnabled">Enable Maintenance Mode</Label>
                <Switch
                  id="maintenanceEnabled"
                  checked={settings.maintenance.enabled}
                  onCheckedChange={(checked) => setSettings({
                    ...settings,
                    maintenance: { ...settings.maintenance, enabled: checked }
                  })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="maintenanceMessage">Maintenance Message</Label>
                <Textarea
                  id="maintenanceMessage"
                  value={settings.maintenance.message}
                  onChange={(e) => setSettings({
                    ...settings,
                    maintenance: { ...settings.maintenance, message: e.target.value }
                  })}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteSettingsManager;

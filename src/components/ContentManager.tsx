
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  content_type: string;
  status: string;
  featured: boolean;
  category: string | null;
  tags: string[] | null;
  publish_date: string | null;
  created_at: string;
}

const ContentManager: React.FC = () => {
  const { profile } = useAuth();
  const { language } = useLanguage();
  const { toast } = useToast();
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingContent, setEditingContent] = useState<ContentItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    content_type: 'blog',
    status: 'draft',
    featured: false,
    category: '',
    tags: '',
  });

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const { data, error } = await supabase
        .from('content')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContents(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const contentData = {
        title: formData.title,
        excerpt: formData.excerpt || null,
        content: formData.content || null,
        content_type: formData.content_type,
        status: formData.status,
        featured: formData.featured,
        category: formData.category || null,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : null,
        author_id: profile?.id,
        publish_date: formData.status === 'published' ? new Date().toISOString() : null,
      };

      if (editingContent) {
        const { error } = await supabase
          .from('content')
          .update(contentData)
          .eq('id', editingContent.id);
        
        if (error) throw error;
        
        toast({
          title: 'Success',
          description: language.code === 'ar' ? 'تم تحديث المحتوى' : 'Content updated successfully',
        });
      } else {
        const { error } = await supabase
          .from('content')
          .insert([contentData]);
        
        if (error) throw error;
        
        toast({
          title: 'Success',
          description: language.code === 'ar' ? 'تم إنشاء المحتوى' : 'Content created successfully',
        });
      }

      resetForm();
      fetchContents();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(language.code === 'ar' ? 'هل أنت متأكد من حذف هذا المحتوى؟' : 'Are you sure you want to delete this content?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('content')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: language.code === 'ar' ? 'تم حذف المحتوى' : 'Content deleted successfully',
      });

      fetchContents();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      content_type: 'blog',
      status: 'draft',
      featured: false,
      category: '',
      tags: '',
    });
    setEditingContent(null);
    setIsCreating(false);
  };

  const handleEdit = (content: ContentItem) => {
    setFormData({
      title: content.title,
      excerpt: content.excerpt || '',
      content: content.content || '',
      content_type: content.content_type,
      status: content.status,
      featured: content.featured,
      category: content.category || '',
      tags: content.tags?.join(', ') || '',
    });
    setEditingContent(content);
    setIsCreating(true);
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      draft: 'bg-gray-100 text-gray-800',
      published: 'bg-green-100 text-green-800',
      archived: 'bg-red-100 text-red-800',
    };
    
    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {status}
      </Badge>
    );
  };

  if (loading && contents.length === 0) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {language.code === 'ar' ? 'إدارة المحتوى' : 'Content Management'}
        </h2>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="h-4 w-4 mr-2" />
          {language.code === 'ar' ? 'إضافة محتوى جديد' : 'Add New Content'}
        </Button>
      </div>

      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingContent 
                ? (language.code === 'ar' ? 'تعديل المحتوى' : 'Edit Content')
                : (language.code === 'ar' ? 'إضافة محتوى جديد' : 'Add New Content')
              }
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language.code === 'ar' ? 'العنوان' : 'Title'}
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language.code === 'ar' ? 'النوع' : 'Content Type'}
                  </label>
                  <Select
                    value={formData.content_type}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, content_type: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blog">Blog</SelectItem>
                      <SelectItem value="project">Project</SelectItem>
                      <SelectItem value="speaking">Speaking</SelectItem>
                      <SelectItem value="testimonial">Testimonial</SelectItem>
                      <SelectItem value="award">Award</SelectItem>
                      <SelectItem value="media">Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language.code === 'ar' ? 'الملخص' : 'Excerpt'}
                </label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language.code === 'ar' ? 'المحتوى' : 'Content'}
                </label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  rows={8}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language.code === 'ar' ? 'الحالة' : 'Status'}
                  </label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language.code === 'ar' ? 'الفئة' : 'Category'}
                  </label>
                  <Input
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language.code === 'ar' ? 'الكلمات المفتاحية' : 'Tags (comma separated)'}
                  </label>
                  <Input
                    value={formData.tags}
                    onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <label htmlFor="featured" className="text-sm">
                  {language.code === 'ar' ? 'محتوى مميز' : 'Featured Content'}
                </label>
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={loading}>
                  {editingContent 
                    ? (language.code === 'ar' ? 'تحديث' : 'Update')
                    : (language.code === 'ar' ? 'إنشاء' : 'Create')
                  }
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  {language.code === 'ar' ? 'إلغاء' : 'Cancel'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {contents.map((content) => (
          <Card key={content.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{content.title}</h3>
                    {content.featured && <Badge variant="secondary">Featured</Badge>}
                    {getStatusBadge(content.status)}
                    <Badge variant="outline">{content.content_type}</Badge>
                  </div>
                  {content.excerpt && (
                    <p className="text-gray-600 mb-2">{content.excerpt}</p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {content.category && <span>Category: {content.category}</span>}
                    <span>Created: {new Date(content.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(content)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(content.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {contents.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          {language.code === 'ar' ? 'لا يوجد محتوى بعد' : 'No content found'}
        </div>
      )}
    </div>
  );
};

export default ContentManager;

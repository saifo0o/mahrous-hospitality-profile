
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash2, Eye, Image, FileText, Award, Briefcase, MessageSquare, Megaphone } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  content_type: 'blog' | 'project' | 'speaking' | 'testimonial' | 'award' | 'media';
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  category: string | null;
  tags: string[] | null;
  publish_date: string | null;
  created_at: string;
  metadata: any;
}

const ContentManager: React.FC = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [formData, setFormData] = useState<{
    title: string;
    excerpt: string;
    content: string;
    content_type: 'blog' | 'project' | 'speaking' | 'testimonial' | 'award' | 'media';
    status: 'draft' | 'published' | 'archived';
    featured: boolean;
    category: string;
    tags: string;
    publish_date: string;
    metadata: {
      image_url?: string;
      external_link?: string;
      location?: string;
      date?: string;
      client?: string;
      technologies?: string[];
      gallery?: string[];
    };
  }>({
    title: '',
    excerpt: '',
    content: '',
    content_type: 'blog',
    status: 'draft',
    featured: false,
    category: '',
    tags: '',
    publish_date: '',
    metadata: {},
  });

  const { user } = useAuth();
  const { language } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('content')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContent(data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
      toast({
        title: "Error",
        description: "Failed to fetch content",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const contentData = {
        ...formData,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : null,
        publish_date: formData.publish_date || null,
        author_id: user?.id,
        metadata: formData.metadata,
      };

      if (editingItem) {
        const { error } = await supabase
          .from('content')
          .update(contentData)
          .eq('id', editingItem.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Content updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('content')
          .insert(contentData);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Content created successfully",
        });
      }

      setIsModalOpen(false);
      resetForm();
      fetchContent();
    } catch (error) {
      console.error('Error saving content:', error);
      toast({
        title: "Error",
        description: "Failed to save content",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      excerpt: item.excerpt || '',
      content: item.content || '',
      content_type: item.content_type,
      status: item.status,
      featured: item.featured,
      category: item.category || '',
      tags: item.tags ? item.tags.join(', ') : '',
      publish_date: item.publish_date ? item.publish_date.split('T')[0] : '',
      metadata: item.metadata || {},
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this content?')) return;

    try {
      const { error } = await supabase
        .from('content')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Content deleted successfully",
      });
      
      fetchContent();
    } catch (error) {
      console.error('Error deleting content:', error);
      toast({
        title: "Error",
        description: "Failed to delete content",
        variant: "destructive",
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
      publish_date: '',
      metadata: {},
    });
    setEditingItem(null);
  };

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
      published: "default",
      draft: "secondary",
      archived: "outline",
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      blog: <FileText className="h-4 w-4" />,
      project: <Briefcase className="h-4 w-4" />,
      speaking: <Megaphone className="h-4 w-4" />,
      testimonial: <MessageSquare className="h-4 w-4" />,
      award: <Award className="h-4 w-4" />,
      media: <Image className="h-4 w-4" />,
    };
    return icons[type as keyof typeof icons] || <FileText className="h-4 w-4" />;
  };

  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(item => item.content_type === activeTab);

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {language.code === 'ar' ? 'إدارة المحتوى الشاملة' : 'Comprehensive Content Management'}
        </h2>
        
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              {language.code === 'ar' ? 'إضافة محتوى' : 'Add Content'}
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingItem 
                  ? (language.code === 'ar' ? 'تعديل المحتوى' : 'Edit Content')
                  : (language.code === 'ar' ? 'إضافة محتوى جديد' : 'Add New Content')
                }
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="metadata">Metadata</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basic" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="content_type">Content Type *</Label>
                      <Select
                        value={formData.content_type}
                        onValueChange={(value: 'blog' | 'project' | 'speaking' | 'testimonial' | 'award' | 'media') => 
                          setFormData({ ...formData, content_type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blog">Blog Post</SelectItem>
                          <SelectItem value="project">Project</SelectItem>
                          <SelectItem value="speaking">Speaking Engagement</SelectItem>
                          <SelectItem value="testimonial">Testimonial</SelectItem>
                          <SelectItem value="award">Award</SelectItem>
                          <SelectItem value="media">Media</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={3}
                      placeholder="Brief description or summary..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={formData.status}
                        onValueChange={(value: 'draft' | 'published' | 'archived') => 
                          setFormData({ ...formData, status: value })
                        }
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
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        placeholder="e.g., Technology, Business"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="publish_date">Publish Date</Label>
                      <Input
                        id="publish_date"
                        type="date"
                        value={formData.publish_date}
                        onChange={(e) => setFormData({ ...formData, publish_date: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                    />
                    <Label htmlFor="featured">Featured Content</Label>
                  </div>
                </TabsContent>
                
                <TabsContent value="content" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="content">Main Content</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={15}
                      placeholder="Write your content here... (supports HTML)"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (comma separated)</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="react, javascript, web development"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="metadata" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="image_url">Featured Image URL</Label>
                      <Input
                        id="image_url"
                        value={formData.metadata.image_url || ''}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          metadata: { ...formData.metadata, image_url: e.target.value }
                        })}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="external_link">External Link</Label>
                      <Input
                        id="external_link"
                        value={formData.metadata.external_link || ''}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          metadata: { ...formData.metadata, external_link: e.target.value }
                        })}
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                  
                  {formData.content_type === 'speaking' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={formData.metadata.location || ''}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            metadata: { ...formData.metadata, location: e.target.value }
                          })}
                          placeholder="Conference Center, City"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="event_date">Event Date</Label>
                        <Input
                          id="event_date"
                          type="date"
                          value={formData.metadata.date || ''}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            metadata: { ...formData.metadata, date: e.target.value }
                          })}
                        />
                      </div>
                    </div>
                  )}
                  
                  {formData.content_type === 'project' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="client">Client</Label>
                        <Input
                          id="client"
                          value={formData.metadata.client || ''}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            metadata: { ...formData.metadata, client: e.target.value }
                          })}
                          placeholder="Client or Company Name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="technologies">Technologies (comma separated)</Label>
                        <Input
                          id="technologies"
                          value={formData.metadata.technologies?.join(', ') || ''}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            metadata: { 
                              ...formData.metadata, 
                              technologies: e.target.value.split(',').map(tech => tech.trim())
                            }
                          })}
                          placeholder="React, Node.js, MongoDB"
                        />
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  {editingItem ? 'Update Content' : 'Create Content'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Content Library</CardTitle>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="blog">Blog</TabsTrigger>
                <TabsTrigger value="project">Projects</TabsTrigger>
                <TabsTrigger value="speaking">Speaking</TabsTrigger>
                <TabsTrigger value="testimonial">Testimonials</TabsTrigger>
                <TabsTrigger value="award">Awards</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContent.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(item.content_type)}
                      <span className="capitalize">{item.content_type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium max-w-xs truncate">
                    {item.title}
                  </TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell>{item.category || '-'}</TableCell>
                  <TableCell>
                    {item.featured && <Badge variant="secondary">Featured</Badge>}
                  </TableCell>
                  <TableCell>{new Date(item.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(item)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredContent.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No content found. Create your first {activeTab === 'all' ? 'content' : activeTab} item.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentManager;

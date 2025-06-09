
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash2, GripVertical, Eye, EyeOff, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface NavigationItem {
  id: string;
  label: string;
  labelAr: string;
  path: string;
  type: 'internal' | 'external' | 'dropdown';
  visible: boolean;
  order: number;
  icon?: string;
  target?: '_self' | '_blank';
  children?: NavigationItem[];
}

const NavigationManager: React.FC = () => {
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([
    {
      id: '1',
      label: 'About',
      labelAr: 'من نحن',
      path: '/about',
      type: 'internal',
      visible: true,
      order: 1,
    },
    {
      id: '2',
      label: 'Projects',
      labelAr: 'المشاريع',
      path: '/projects',
      type: 'internal',
      visible: true,
      order: 2,
    },
    {
      id: '3',
      label: 'Awards',
      labelAr: 'الجوائز',
      path: '/awards',
      type: 'internal',
      visible: true,
      order: 3,
    },
    {
      id: '4',
      label: 'Career',
      labelAr: 'وظائف',
      path: '/career',
      type: 'internal',
      visible: true,
      order: 4,
    },
    {
      id: '5',
      label: 'Contact',
      labelAr: 'تواصل معنا',
      path: '/contact',
      type: 'internal',
      visible: true,
      order: 5,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NavigationItem | null>(null);
  const [formData, setFormData] = useState<{
    label: string;
    labelAr: string;
    path: string;
    type: 'internal' | 'external' | 'dropdown';
    visible: boolean;
    icon: string;
    target: '_self' | '_blank';
  }>({
    label: '',
    labelAr: '',
    path: '',
    type: 'internal',
    visible: true,
    icon: '',
    target: '_self',
  });

  const { language } = useLanguage();
  const { toast } = useToast();

  const handleSave = () => {
    try {
      localStorage.setItem('navigationItems', JSON.stringify(navigationItems));
      toast({
        title: "Success",
        description: "Navigation settings saved successfully",
      });
    } catch (error) {
      console.error('Error saving navigation:', error);
      toast({
        title: "Error",
        description: "Failed to save navigation settings",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newItem: NavigationItem = {
      id: editingItem?.id || Date.now().toString(),
      ...formData,
      order: editingItem?.order || navigationItems.length + 1,
    };

    if (editingItem) {
      setNavigationItems(items =>
        items.map(item => item.id === editingItem.id ? newItem : item)
      );
    } else {
      setNavigationItems(items => [...items, newItem]);
    }

    setIsModalOpen(false);
    resetForm();
  };

  const handleEdit = (item: NavigationItem) => {
    setEditingItem(item);
    setFormData({
      label: item.label,
      labelAr: item.labelAr,
      path: item.path,
      type: item.type,
      visible: item.visible,
      icon: item.icon || '',
      target: item.target || '_self',
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this navigation item?')) return;
    
    setNavigationItems(items => items.filter(item => item.id !== id));
  };

  const handleVisibilityToggle = (id: string) => {
    setNavigationItems(items =>
      items.map(item =>
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    );
  };

  const resetForm = () => {
    setFormData({
      label: '',
      labelAr: '',
      path: '',
      type: 'internal',
      visible: true,
      icon: '',
      target: '_self',
    });
    setEditingItem(null);
  };

  const moveItem = (id: string, direction: 'up' | 'down') => {
    const items = [...navigationItems];
    const index = items.findIndex(item => item.id === id);
    
    if (index === -1) return;
    
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex < 0 || newIndex >= items.length) return;
    
    [items[index], items[newIndex]] = [items[newIndex], items[index]];
    
    // Update order values
    items.forEach((item, idx) => {
      item.order = idx + 1;
    });
    
    setNavigationItems(items);
  };

  useEffect(() => {
    const savedItems = localStorage.getItem('navigationItems');
    if (savedItems) {
      setNavigationItems(JSON.parse(savedItems));
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {language.code === 'ar' ? 'إدارة التنقل' : 'Navigation Management'}
        </h2>
        
        <div className="flex space-x-2">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="h-4 w-4 mr-2" />
                {language.code === 'ar' ? 'إضافة رابط' : 'Add Link'}
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingItem 
                    ? (language.code === 'ar' ? 'تعديل الرابط' : 'Edit Navigation Link')
                    : (language.code === 'ar' ? 'إضافة رابط جديد' : 'Add New Navigation Link')
                  }
                </DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="label">Label (English)</Label>
                    <Input
                      id="label"
                      value={formData.label}
                      onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="labelAr">Label (Arabic)</Label>
                    <Input
                      id="labelAr"
                      value={formData.labelAr}
                      onChange={(e) => setFormData({ ...formData, labelAr: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Link Type</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value: 'internal' | 'external' | 'dropdown') => 
                        setFormData({ ...formData, type: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internal">Internal Page</SelectItem>
                        <SelectItem value="external">External Link</SelectItem>
                        <SelectItem value="dropdown">Dropdown Menu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="path">Path/URL</Label>
                    <Input
                      id="path"
                      value={formData.path}
                      onChange={(e) => setFormData({ ...formData, path: e.target.value })}
                      placeholder={formData.type === 'external' ? 'https://example.com' : '/page-path'}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="icon">Icon (Lucide icon name)</Label>
                    <Input
                      id="icon"
                      value={formData.icon}
                      onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                      placeholder="Home, User, Settings"
                    />
                  </div>
                  
                  {formData.type === 'external' && (
                    <div className="space-y-2">
                      <Label htmlFor="target">Link Target</Label>
                      <Select
                        value={formData.target}
                        onValueChange={(value: '_self' | '_blank') => 
                          setFormData({ ...formData, target: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="_self">Same Window</SelectItem>
                          <SelectItem value="_blank">New Window</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="visible"
                    checked={formData.visible}
                    onCheckedChange={(checked) => setFormData({ ...formData, visible: checked })}
                  />
                  <Label htmlFor="visible">Visible in Navigation</Label>
                </div>
                
                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingItem ? 'Update Link' : 'Create Link'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          
          <Button onClick={handleSave} variant="outline">
            Save Changes
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Navigation Links</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Label</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Path</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {navigationItems
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveItem(item.id, 'up')}
                        disabled={index === 0}
                      >
                        ↑
                      </Button>
                      <span className="w-8 text-center">{item.order}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveItem(item.id, 'down')}
                        disabled={index === navigationItems.length - 1}
                      >
                        ↓
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.labelAr}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      {item.type === 'external' && <ExternalLink className="h-3 w-3" />}
                      <span className="capitalize">{item.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{item.path}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleVisibilityToggle(item.id)}
                    >
                      {item.visible ? (
                        <Eye className="h-4 w-4 text-green-600" />
                      ) : (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </TableCell>
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
          
          {navigationItems.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No navigation items found. Create your first navigation link.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NavigationManager;

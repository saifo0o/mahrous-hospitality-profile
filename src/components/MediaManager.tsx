
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Trash2, Copy } from 'lucide-react';

interface MediaItem {
  id: string;
  filename: string;
  original_name: string;
  mime_type: string;
  file_size: number;
  file_path: string;
  alt_text: string | null;
  created_at: string;
}

const MediaManager: React.FC = () => {
  const { profile } = useAuth();
  const { language } = useLanguage();
  const { toast } = useToast();
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const { data, error } = await supabase
        .from('media')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMedia(data || []);
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

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${profile?.id}/${fileName}`;

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from('media')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Save media record to database
      const { error: dbError } = await supabase
        .from('media')
        .insert([{
          filename: fileName,
          original_name: file.name,
          mime_type: file.type,
          file_size: file.size,
          file_path: filePath,
          uploaded_by: profile?.id,
        }]);

      if (dbError) throw dbError;

      toast({
        title: 'Success',
        description: language.code === 'ar' ? 'تم رفع الملف بنجاح' : 'File uploaded successfully',
      });

      fetchMedia();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (mediaItem: MediaItem) => {
    if (!confirm(language.code === 'ar' ? 'هل أنت متأكد من حذف هذا الملف؟' : 'Are you sure you want to delete this file?')) {
      return;
    }

    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('media')
        .remove([mediaItem.file_path]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from('media')
        .delete()
        .eq('id', mediaItem.id);

      if (dbError) throw dbError;

      toast({
        title: 'Success',
        description: language.code === 'ar' ? 'تم حذف الملف' : 'File deleted successfully',
      });

      fetchMedia();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const copyFileUrl = async (filePath: string) => {
    const { data } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);

    await navigator.clipboard.writeText(data.publicUrl);
    toast({
      title: 'Success',
      description: language.code === 'ar' ? 'تم نسخ الرابط' : 'URL copied to clipboard',
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {language.code === 'ar' ? 'إدارة الوسائط' : 'Media Management'}
        </h2>
        <div>
          <Input
            type="file"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
            id="file-upload"
            accept="image/*,video/*,.pdf,.doc,.docx"
          />
          <Button asChild disabled={uploading}>
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-4 w-4 mr-2" />
              {uploading 
                ? (language.code === 'ar' ? 'جاري الرفع...' : 'Uploading...')
                : (language.code === 'ar' ? 'رفع ملف' : 'Upload File')
              }
            </label>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {media.map((item) => (
          <Card key={item.id}>
            <CardContent className="pt-6">
              {item.mime_type.startsWith('image/') && (
                <img
                  src={supabase.storage.from('media').getPublicUrl(item.file_path).data.publicUrl}
                  alt={item.alt_text || item.original_name}
                  className="w-full h-32 object-cover rounded mb-3"
                />
              )}
              <div className="space-y-2">
                <h3 className="font-medium text-sm truncate">{item.original_name}</h3>
                <p className="text-xs text-gray-500">
                  {formatFileSize(item.file_size)} • {item.mime_type}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(item.created_at).toLocaleDateString()}
                </p>
                <div className="flex gap-1">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => copyFileUrl(item.file_path)}
                    className="flex-1"
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    {language.code === 'ar' ? 'نسخ' : 'Copy'}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleDelete(item)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {media.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          {language.code === 'ar' ? 'لا توجد ملفات وسائط' : 'No media files found'}
        </div>
      )}
    </div>
  );
};

export default MediaManager;

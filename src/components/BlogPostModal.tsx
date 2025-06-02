
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/ui/use-toast';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  category: string;
  featured: boolean;
  author: string;
}

interface BlogPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ isOpen, onClose, post }) => {
  const { language } = useLanguage();
  const { toast } = useToast();

  if (!post) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: language.code === 'ar' ? "تم النسخ!" : "Copied!",
        description: language.code === 'ar' ? "تم نسخ الرابط" : "Link copied to clipboard"
      });
    }
  };

  const handleBookmark = () => {
    toast({
      title: language.code === 'ar' ? "تمت الإضافة للمفضلة" : "Bookmarked",
      description: language.code === 'ar' ? "تم حفظ المقال في المفضلة" : "Article saved to bookmarks"
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-luxury-navy text-white">
              {post.category}
            </Badge>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleBookmark}>
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <DialogTitle className="text-2xl font-bold text-luxury-navy leading-tight">
            {post.title}
          </DialogTitle>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(post.publishDate).toLocaleDateString(language.code === 'ar' ? 'ar-EG' : 'en-US')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
        </DialogHeader>

        <div className="prose prose-lg max-w-none mt-6">
          <p className="text-lg text-gray-700 font-medium mb-6">
            {post.excerpt}
          </p>
          
          <div 
            className="text-gray-800 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {language.code === 'ar' ? "شارك هذا المقال:" : "Share this article:"}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                {language.code === 'ar' ? "مشاركة" : "Share"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleBookmark}>
                <Bookmark className="h-4 w-4 mr-2" />
                {language.code === 'ar' ? "حفظ" : "Bookmark"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostModal;

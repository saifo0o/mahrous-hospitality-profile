
import React, { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { trackUserEngagement } from '@/utils/enhanced-analytics';

interface BookmarkButtonProps {
  itemId: string;
  itemType: 'blog' | 'project' | 'speaking' | 'testimonial';
  itemTitle: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'ghost' | 'outline';
  className?: string;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  itemId,
  itemType,
  itemTitle,
  size = 'sm',
  variant = 'ghost',
  className = ''
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const { user } = useAuth();

  // Load bookmark status from Supabase
  useEffect(() => {
    if (user) {
      checkBookmarkStatus();
    } else {
      // Fallback to localStorage for non-authenticated users
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setIsBookmarked(bookmarks.includes(itemId));
    }
  }, [itemId, user]);

  const checkBookmarkStatus = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('id')
        .eq('user_id', user.id)
        .eq('content_id', itemId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking bookmark status:', error);
        return;
      }

      setIsBookmarked(!!data);
    } catch (error) {
      console.error('Error checking bookmark status:', error);
    }
  };

  const toggleBookmark = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    
    if (!user) {
      // Fallback to localStorage for non-authenticated users
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      let updatedBookmarks;

      if (isBookmarked) {
        updatedBookmarks = bookmarks.filter((id: string) => id !== itemId);
        setIsBookmarked(false);
        toast({
          title: language.code === 'ar' ? 'تم إلغاء الحفظ' : 'Bookmark Removed',
          description: language.code === 'ar' 
            ? `تم إلغاء حفظ "${itemTitle}"`
            : `"${itemTitle}" removed from bookmarks`,
        });
        trackUserEngagement('bookmark_remove', itemType, { value: 1 });
      } else {
        updatedBookmarks = [...bookmarks, itemId];
        setIsBookmarked(true);
        toast({
          title: language.code === 'ar' ? 'تم الحفظ' : 'Bookmarked',
          description: language.code === 'ar' 
            ? `تم حفظ "${itemTitle}"`
            : `"${itemTitle}" saved to bookmarks`,
        });
        trackUserEngagement('bookmark_add', itemType, { value: 1 });
      }

      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      return;
    }

    setLoading(true);

    try {
      if (isBookmarked) {
        // Remove bookmark
        const { error } = await supabase
          .from('bookmarks')
          .delete()
          .eq('user_id', user.id)
          .eq('content_id', itemId);

        if (error) throw error;

        setIsBookmarked(false);
        toast({
          title: language.code === 'ar' ? 'تم إلغاء الحفظ' : 'Bookmark Removed',
          description: language.code === 'ar' 
            ? `تم إلغاء حفظ "${itemTitle}"`
            : `"${itemTitle}" removed from bookmarks`,
        });
        trackUserEngagement('bookmark_remove', itemType, { value: 1 });
      } else {
        // Add bookmark
        const { error } = await supabase
          .from('bookmarks')
          .insert([
            {
              user_id: user.id,
              content_id: itemId,
            },
          ]);

        if (error) throw error;

        setIsBookmarked(true);
        toast({
          title: language.code === 'ar' ? 'تم الحفظ' : 'Bookmarked',
          description: language.code === 'ar' 
            ? `تم حفظ "${itemTitle}"`
            : `"${itemTitle}" saved to bookmarks`,
        });
        trackUserEngagement('bookmark_add', itemType, { value: 1 });
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      toast({
        title: language.code === 'ar' ? 'خطأ' : 'Error',
        description: language.code === 'ar' 
          ? 'حدث خطأ أثناء حفظ العنصر'
          : 'An error occurred while bookmarking',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleBookmark}
      disabled={loading}
      className={`transition-colors ${className}`}
      title={isBookmarked 
        ? (language.code === 'ar' ? 'إلغاء الحفظ' : 'Remove bookmark')
        : (language.code === 'ar' ? 'حفظ' : 'Bookmark')
      }
    >
      {isBookmarked ? (
        <BookmarkCheck className="h-4 w-4 text-luxury-gold" />
      ) : (
        <Bookmark className="h-4 w-4" />
      )}
      <span className="sr-only">
        {isBookmarked 
          ? (language.code === 'ar' ? 'إلغاء الحفظ' : 'Remove bookmark')
          : (language.code === 'ar' ? 'حفظ' : 'Bookmark')
        }
      </span>
    </Button>
  );
};

export default BookmarkButton;

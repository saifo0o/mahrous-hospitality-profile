
import React, { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';
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
  const { toast } = useToast();
  const { language } = useLanguage();

  // Load bookmark status from localStorage
  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setIsBookmarked(bookmarks.includes(itemId));
  }, [itemId]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    
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
      trackUserEngagement('bookmark', 'remove', itemType);
    } else {
      updatedBookmarks = [...bookmarks, itemId];
      setIsBookmarked(true);
      toast({
        title: language.code === 'ar' ? 'تم الحفظ' : 'Bookmarked',
        description: language.code === 'ar' 
          ? `تم حفظ "${itemTitle}"`
          : `"${itemTitle}" saved to bookmarks`,
      });
      trackUserEngagement('bookmark', 'add', itemType);
    }

    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleBookmark}
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

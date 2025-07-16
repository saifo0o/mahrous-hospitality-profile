import React, { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, Link, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  hashtags?: string[];
}

const SocialShareOptimization: React.FC<SocialShareProps> = ({
  url = window.location.href,
  title = 'Islam Mahrous - Global Hospitality Executive',
  description = 'Discover the expertise and achievements of Islam Mahrous in hospitality management',
  hashtags = ['hospitality', 'hotelmanagement', 'luxury', 'MENA']
}) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareDescription = encodeURIComponent(description);
  const shareHashtags = hashtags.join(',');

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}&hashtags=${shareHashtags}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: language.code === 'ar' ? 'تم النسخ!' : 'Copied!',
        description: language.code === 'ar' 
          ? 'تم نسخ الرابط إلى الحافظة' 
          : 'Link copied to clipboard',
      });
    } catch (err) {
      toast({
        title: language.code === 'ar' ? 'خطأ' : 'Error',
        description: language.code === 'ar' 
          ? 'فشل في نسخ الرابط' 
          : 'Failed to copy link',
        variant: 'destructive',
      });
    }
  };

  const handleShare = (platform: string) => {
    window.open(socialLinks[platform as keyof typeof socialLinks], '_blank', 'width=600,height=400');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          {language.code === 'ar' ? 'مشاركة' : 'Share'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {/* Native Share API (if supported) */}
        {navigator.share && (
          <DropdownMenuItem onClick={handleNativeShare}>
            <Share2 className="h-4 w-4 mr-2" />
            {language.code === 'ar' ? 'مشاركة' : 'Share'}
          </DropdownMenuItem>
        )}
        
        {/* Social Media Platforms */}
        <DropdownMenuItem onClick={() => handleShare('facebook')}>
          <Facebook className="h-4 w-4 mr-2 text-blue-600" />
          Facebook
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => handleShare('twitter')}>
          <Twitter className="h-4 w-4 mr-2 text-blue-400" />
          Twitter
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => handleShare('linkedin')}>
          <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
          LinkedIn
        </DropdownMenuItem>
        
        {/* Copy Link */}
        <DropdownMenuItem onClick={copyToClipboard}>
          <motion.div
            animate={copied ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
            className="h-4 w-4 mr-2"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </motion.div>
          {copied 
            ? (language.code === 'ar' ? 'تم النسخ!' : 'Copied!') 
            : (language.code === 'ar' ? 'نسخ الرابط' : 'Copy Link')
          }
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SocialShareOptimization;
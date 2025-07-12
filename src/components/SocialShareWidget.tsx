
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

interface SocialShareWidgetProps {
  url?: string;
  title?: string;
  description?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'colorful';
  className?: string;
}

const SocialShareWidget: React.FC<SocialShareWidgetProps> = ({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = '',
  description = '',
  showLabel = true,
  size = 'md',
  variant = 'default',
  className = ''
}) => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    description: encodeURIComponent(description)
  };

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: '#1877F2',
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}&t=${shareData.title}`
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: '#1DA1F2',
      url: `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: '#0A66C2',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: '#E4405F',
      url: `https://www.instagram.com/` // Instagram doesn't support direct URL sharing
    },
    {
      name: 'YouTube',
      icon: Youtube,
      color: '#FF0000',
      url: `https://www.youtube.com/` // For YouTube channel sharing
    }
  ];

  const handleShare = async (platform?: string, customUrl?: string) => {
    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (error) {
        // Silently handle share error
      }
      return;
    }

    if (customUrl) {
      window.open(customUrl, '_blank', 'width=600,height=400');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: language.code === 'ar' ? "تم النسخ!" : "Copied!",
        description: language.code === 'ar' ? "تم نسخ الرابط" : "Link copied to clipboard"
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'lg': return 'w-12 h-12';
      default: return 'w-10 h-10';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm': return 'w-4 h-4';
      case 'lg': return 'w-6 h-6';
      default: return 'w-5 h-5';
    }
  };

  // Map our size prop to valid Button sizes
  const getButtonSize = () => {
    switch (size) {
      case 'sm': return 'sm';
      case 'lg': return 'lg';
      default: return 'default'; // 'md' maps to 'default'
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Share Button */}
      <Button
        variant="outline"
        size={getButtonSize()}
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <Share2 className={getIconSize()} />
        {showLabel && (
          <span className="hidden sm:inline">
            {language.code === 'ar' ? 'مشاركة' : 'Share'}
          </span>
        )}
      </Button>

      {/* Share Options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50 min-w-[200px]"
        >
          <div className="space-y-2">
            {/* Native Share (if supported) */}
            {navigator.share && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare('native')}
                className="w-full justify-start gap-3"
              >
                <Share2 className={getIconSize()} />
                {language.code === 'ar' ? 'مشاركة' : 'Share'}
              </Button>
            )}

            {/* Social Platforms */}
            {socialPlatforms.map((platform) => (
              <Button
                key={platform.name}
                variant="ghost"
                size="sm"
                onClick={() => handleShare(platform.name, platform.url)}
                className="w-full justify-start gap-3 group"
              >
                <platform.icon 
                  className={`${getIconSize()} ${
                    variant === 'colorful' ? '' : 'text-gray-600'
                  }`}
                  style={variant === 'colorful' ? { color: platform.color } : {}}
                />
                <span className="group-hover:text-primary">{platform.name}</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
              </Button>
            ))}

            {/* Copy Link */}
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="w-full justify-start gap-3"
            >
              {copied ? (
                <Check className={`${getIconSize()} text-green-500`} />
              ) : (
                <Copy className={getIconSize()} />
              )}
              {language.code === 'ar' ? 'نسخ الرابط' : 'Copy Link'}
            </Button>
          </div>
        </motion.div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SocialShareWidget;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface InteractiveGalleryProps {
  images: GalleryImage[];
  className?: string;
}

const InteractiveGallery: React.FC<InteractiveGalleryProps> = ({ images, className = '' }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  const { language, isRTL } = useLanguage();
  const { toast } = useToast();

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleDownload = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename || 'image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: language.code === 'ar' ? 'تم التحميل بنجاح' : 'Downloaded Successfully',
        description: language.code === 'ar' ? 'تم حفظ الصورة على جهازك.' : 'The image has been saved to your device.',
      });
    } catch (error) {
      // Fallback to direct anchor download
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = filename || 'image.jpg';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: language.code === 'ar' ? 'بدأ التحميل' : 'Download Started',
        description: language.code === 'ar' ? 'يتم الآن تحميل الصورة.' : 'Your image download has started.',
      });
    }
  };

  const handleShare = async (image: GalleryImage) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.alt,
          text: image.caption || '',
          url: image.src,
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.origin + image.src);
        toast({
          title: language.code === 'ar' ? 'تم نسخ الرابط' : 'Link Copied',
          description: language.code === 'ar' ? 'تم نسخ رابط الصورة إلى الحافظة.' : 'Image link copied to clipboard.',
        });
      } catch (error) {
        console.error('Copy to clipboard failed:', error);
        toast({
          variant: 'destructive',
          title: language.code === 'ar' ? 'فشل نسخ الرابط' : 'Copy Failed',
          description: language.code === 'ar' ? 'عذرًا، لم نتمكن من نسخ رابط الصورة.' : 'Could not copy the image link.',
        });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        switch (e.key) {
          case 'Escape':
            closeLightbox();
            break;
          case 'ArrowLeft':
            isRTL ? goToNext() : goToPrevious();
            break;
          case 'ArrowRight':
            isRTL ? goToPrevious() : goToNext();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, isRTL]);

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 ${className}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col bg-card border border-border/40 hover:border-accent/40 rounded-sm overflow-hidden transition-colors duration-500 cursor-pointer"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => openLightbox(index)}
          >
            {/* Image Frame */}
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              {!imageLoaded[index] && (
                <div className="absolute inset-0 skeleton-shimmer" />
              )}
              
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, [index]: true }))}
                loading="lazy"
              />

              {/* Overlay with vignette and zoom indicator */}
              <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/25 transition-colors duration-500 flex items-center justify-center" />

              <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto bg-background/90 border border-border/40 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-accent" />
              </div>
            </div>

            {/* Content Frame */}
            <div className="p-6 flex-grow flex flex-col justify-between bg-card border-t border-border/30">
              <div className="text-start">
                <h3 className="text-xl font-playfair font-normal text-foreground mb-2.5 leading-snug group-hover:text-accent transition-colors duration-300">
                  {image.alt}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {image.caption}
                </p>
              </div>
              
              <div className="mt-4 flex items-center text-xs font-semibold text-accent tracking-wider uppercase gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-start">
                <span>{language.code === 'ar' ? 'عرض الصورة كاملة' : 'View full image'}</span>
                <span className="inline-block transform transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                  {isRTL ? '←' : '→'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 rtl:left-6 rtl:right-auto z-10 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900/60 rounded-full w-10 h-10 border border-neutral-800/40"
              onClick={closeLightbox}
              aria-label={language.code === 'ar' ? 'إغلاق المعرض' : 'Close gallery'}
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute ${
                    isRTL ? 'right-4 md:right-8' : 'left-4 md:left-8'
                  } top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900/60 rounded-full w-10 h-10 md:w-12 md:h-12 border border-neutral-800/40 z-10 flex items-center justify-center transition-all`}
                  onClick={(e) => {
                    e.stopPropagation();
                    isRTL ? goToNext() : goToPrevious();
                  }}
                  aria-label={language.code === 'ar' ? 'الصورة السابقة' : 'Previous image'}
                >
                  <ChevronLeft className={`w-5 h-5 md:w-6 md:h-6 ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute ${
                    isRTL ? 'left-4 md:left-8' : 'right-4 md:right-8'
                  } top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900/60 rounded-full w-10 h-10 md:w-12 md:h-12 border border-neutral-800/40 z-10 flex items-center justify-center transition-all`}
                  onClick={(e) => {
                    e.stopPropagation();
                    isRTL ? goToPrevious() : goToNext();
                  }}
                  aria-label={language.code === 'ar' ? 'الصورة التالية' : 'Next image'}
                >
                  <ChevronRight className={`w-5 h-5 md:w-6 md:h-6 ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              </>
            )}

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative max-w-full md:max-w-4xl max-h-[85vh] flex flex-col items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Viewport */}
              <div className="relative max-w-full flex items-center justify-center">
                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="max-w-full max-h-[60vh] md:max-h-[68vh] object-contain rounded-sm border border-neutral-800/60"
                />
              </div>

              {/* Text & Actions Panel */}
              <div className="mt-6 text-center max-w-2xl px-4 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg md:text-xl font-playfair font-normal text-neutral-100 leading-snug">
                    {images[selectedIndex].alt}
                  </h4>
                  {images[selectedIndex].caption && (
                    <p className="text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
                      {images[selectedIndex].caption}
                    </p>
                  )}
                </div>
                
                {/* Actions Toolbar */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800/80 gap-2 rounded-sm text-xs h-9 px-4 transition-colors"
                    onClick={() => handleDownload(images[selectedIndex].src, images[selectedIndex].alt)}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{language.code === 'ar' ? 'تحميل' : 'Download'}</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800/80 gap-2 rounded-sm text-xs h-9 px-4 transition-colors"
                    onClick={() => handleShare(images[selectedIndex])}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{language.code === 'ar' ? 'مشاركة' : 'Share'}</span>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-400 text-xs bg-neutral-900/80 border border-neutral-800/40 px-3 py-1.5 rounded-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveGallery;

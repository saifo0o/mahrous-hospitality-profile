import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
}

interface EnhancedInteractiveGalleryProps {
  images: GalleryImage[];
  className?: string;
  columns?: number;
}

const EnhancedInteractiveGallery: React.FC<EnhancedInteractiveGalleryProps> = ({ 
  images, 
  className = '',
  columns = 3
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  const { language, isRTL } = useLanguage();

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
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleShare = async (image: GalleryImage) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.title || image.alt,
          text: image.caption || '',
          url: image.src,
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(image.src);
        // You could add a toast notification here
      } catch (error) {
        console.error('Copy to clipboard failed:', error);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex !== null) {
        switch (event.key) {
          case 'Escape':
            closeLightbox();
            break;
          case 'ArrowLeft':
            goToPrevious();
            break;
          case 'ArrowRight':
            goToNext();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${gridCols} gap-4 ${className}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(index)}
          >
            {/* Loading shimmer */}
            {!imageLoaded[index] && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
            )}
            
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              onLoad={() => setImageLoaded(prev => ({ ...prev, [index]: true }))}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
            </div>
            
            {/* Caption */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm">{image.caption}</p>
              </div>
            )}
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20`}
                  onClick={(e) => {
                    e.stopPropagation();
                    isRTL ? goToNext() : goToPrevious();
                  }}
                >
                  <ChevronLeft size={24} className={isRTL ? 'rotate-180' : ''} />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20`}
                  onClick={(e) => {
                    e.stopPropagation();
                    isRTL ? goToPrevious() : goToNext();
                  }}
                >
                  <ChevronRight size={24} className={isRTL ? 'rotate-180' : ''} />
                </Button>
              </>
            )}

            {/* Action buttons */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(images[selectedIndex].src, images[selectedIndex].alt);
                }}
              >
                <Download size={16} className="mr-2" />
                {language.code === 'ar' ? 'تحميل' : 'Download'}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare(images[selectedIndex]);
                }}
              >
                <Share2 size={16} className="mr-2" />
                {language.code === 'ar' ? 'مشاركة' : 'Share'}
              </Button>
            </div>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image info */}
            {(images[selectedIndex].title || images[selectedIndex].caption) && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white max-w-md">
                {images[selectedIndex].title && (
                  <h3 className="text-lg font-semibold mb-1">{images[selectedIndex].title}</h3>
                )}
                {images[selectedIndex].caption && (
                  <p className="text-sm opacity-80">{images[selectedIndex].caption}</p>
                )}
              </div>
            )}

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                {selectedIndex + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedInteractiveGallery;
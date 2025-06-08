
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ZoomIn, 
  ZoomOut, 
  Download, 
  Share2, 
  Fullscreen,
  Grid3X3,
  Play,
  Pause
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
  category: string;
  date: string;
  alt?: string;
}

interface AdvancedMediaGalleryProps {
  items: MediaItem[];
  className?: string;
}

const AdvancedMediaGallery: React.FC<AdvancedMediaGalleryProps> = ({ items, className = '' }) => {
  const { language, isRTL } = useLanguage();
  const { toast } = useToast();
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const videoRef = useRef<HTMLVideoElement>(null);

  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))];
  
  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          navigateMedia('prev');
          break;
        case 'ArrowRight':
          navigateMedia('next');
          break;
        case 'Escape':
          closeModal();
          break;
        case '+':
        case '=':
          zoomIn();
          break;
        case '-':
          zoomOut();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedItem, currentIndex]);

  const openModal = (item: MediaItem) => {
    setSelectedItem(item);
    setCurrentIndex(filteredItems.findIndex(i => i.id === item.id));
    setZoomLevel(1);
    setIsZoomed(false);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsPlaying(false);
    setZoomLevel(1);
    setIsZoomed(false);
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
    setZoomLevel(1);
    setIsZoomed(false);
    setIsPlaying(false);
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
    setIsZoomed(true);
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
    if (zoomLevel <= 1) setIsZoomed(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleShare = async (item: MediaItem) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.description,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: language.code === 'ar' ? "تم النسخ!" : "Copied!",
        description: language.code === 'ar' ? "تم نسخ الرابط" : "Link copied to clipboard"
      });
    }
  };

  const handleDownload = (item: MediaItem) => {
    const link = document.createElement('a');
    link.href = item.src;
    link.download = item.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "bg-luxury-gold hover:bg-luxury-gold/90" : ""}
          >
            {category === 'all' 
              ? (language.code === 'ar' ? 'الكل' : 'All')
              : category
            }
          </Button>
        ))}
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center gap-2">
        <Button
          variant={viewMode === 'grid' ? "default" : "outline"}
          size="sm"
          onClick={() => setViewMode('grid')}
        >
          <Grid3X3 className="w-4 h-4" />
        </Button>
        <Button
          variant={viewMode === 'masonry' ? "default" : "outline"}
          size="sm"
          onClick={() => setViewMode('masonry')}
        >
          Masonry
        </Button>
      </div>

      {/* Media Grid */}
      <div className={`grid gap-4 ${
        viewMode === 'grid' 
          ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
          : 'columns-2 md:columns-3 lg:columns-4 space-y-4'
      }`}>
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
            onClick={() => openModal(item)}
          >
            <div className="relative aspect-square">
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={item.thumbnail || item.src}
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-7xl max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Controls */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {selectedItem.type === 'image' && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={zoomIn}
                      className="text-white hover:bg-white/20"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={zoomOut}
                      className="text-white hover:bg-white/20"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </Button>
                  </>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleFullscreen}
                  className="text-white hover:bg-white/20"
                >
                  <Fullscreen className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare(selectedItem)}
                  className="text-white hover:bg-white/20"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDownload(selectedItem)}
                  className="text-white hover:bg-white/20"
                >
                  <Download className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeModal}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Navigation */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateMedia('prev')}
                className={`absolute top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 ${
                  isRTL ? 'right-4' : 'left-4'
                }`}
              >
                <ChevronLeft className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateMedia('next')}
                className={`absolute top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 ${
                  isRTL ? 'left-4' : 'right-4'
                }`}
              >
                <ChevronRight className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>

              {/* Media Content */}
              <div className="flex items-center justify-center h-full">
                {selectedItem.type === 'image' ? (
                  <motion.img
                    src={selectedItem.src}
                    alt={selectedItem.alt || selectedItem.title}
                    className="max-w-full max-h-full object-contain cursor-pointer"
                    style={{ transform: `scale(${zoomLevel})` }}
                    animate={{ scale: zoomLevel }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsZoomed(!isZoomed)}
                  />
                ) : (
                  <div className="relative">
                    <video
                      ref={videoRef}
                      src={selectedItem.src}
                      className="max-w-full max-h-full"
                      controls
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                  </div>
                )}
              </div>

              {/* Info Panel */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-white text-xl font-bold mb-2">{selectedItem.title}</h2>
                {selectedItem.description && (
                  <p className="text-gray-200 text-sm mb-2">{selectedItem.description}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <Badge variant="secondary">{selectedItem.category}</Badge>
                  <span>{selectedItem.date}</span>
                  <span>{currentIndex + 1} / {filteredItems.length}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedMediaGallery;

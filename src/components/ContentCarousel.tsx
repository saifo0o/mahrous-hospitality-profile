
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Circle, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

interface CarouselItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  description?: string;
  cta?: {
    text: string;
    action: () => void;
  };
}

interface ContentCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = ''
}) => {
  const { isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, items.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? (isRTL ? -1000 : 1000) : (isRTL ? 1000 : -1000),
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? (isRTL ? -1000 : 1000) : (isRTL ? 1000 : -1000),
      opacity: 0
    })
  };

  return (
    <div className={`relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg ${className}`}>
      {/* Main Carousel */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            {items[currentIndex].type === 'image' ? (
              <img
                src={items[currentIndex].src}
                alt={items[currentIndex].title}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={items[currentIndex].src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              />
            )}

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-4xl font-bold text-white mb-4"
                >
                  {items[currentIndex].title}
                </motion.h2>
                
                {items[currentIndex].description && (
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-200 text-lg mb-6 max-w-2xl"
                  >
                    {items[currentIndex].description}
                  </motion.p>
                )}

                {items[currentIndex].cta && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      onClick={items[currentIndex].cta!.action}
                      className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold"
                    >
                      {items[currentIndex].cta!.text}
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className={`absolute top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white ${
              isRTL ? 'right-4' : 'left-4'
            }`}
          >
            <ChevronLeft className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className={`absolute top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white ${
              isRTL ? 'left-4' : 'right-4'
            }`}
          >
            <ChevronRight className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
          </Button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-luxury-gold scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

      {/* Play/Pause Control */}
      {autoPlay && (
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlayPause}
          className="absolute top-4 right-4 z-10 bg-black/30 hover:bg-black/50 text-white"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
      )}

      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
          <motion.div
            className="h-full bg-luxury-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: interval / 1000, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
};

export default ContentCarousel;

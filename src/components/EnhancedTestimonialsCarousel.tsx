
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  rating: number;
  content: string;
  date: string;
  type: 'text' | 'video';
  videoUrl?: string;
  category: string;
  featured?: boolean;
}

interface EnhancedTestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  showRating?: boolean;
  showCategory?: boolean;
  className?: string;
}

const EnhancedTestimonialsCarousel: React.FC<EnhancedTestimonialsCarouselProps> = ({
  testimonials,
  autoPlay = true,
  interval = 8000,
  showRating = true,
  showCategory = true,
  className = ''
}) => {
  const { language, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isPlaying || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className={`relative max-w-4xl mx-auto ${className}`}>
      {/* Main Testimonial Display */}
      <div className="relative min-h-[400px] bg-card border border-border rounded-sm overflow-hidden">
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
            className="absolute inset-0 p-8 md:p-12"
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-accent/10 p-4 rounded-full">
                <Quote className="w-8 h-8 text-accent" />
              </div>
            </div>

            {/* Badges */}
            <div className="flex justify-center gap-2 mb-6">
              {currentTestimonial.featured && (
                <Badge variant="default" className="bg-accent text-accent-foreground rounded-sm">
                  {language.code === 'ar' ? 'مميز' : 'Featured'}
                </Badge>
              )}
              {showCategory && (
                <Badge variant="outline" className="rounded-sm">
                  {currentTestimonial.category}
                </Badge>
              )}
              <Badge variant="secondary" className="rounded-sm">
                {currentTestimonial.type === 'video' 
                  ? (language.code === 'ar' ? 'فيديو' : 'Video')
                  : (language.code === 'ar' ? 'نص' : 'Text')
                }
              </Badge>
            </div>

            {/* Rating */}
            {showRating && (
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {renderStars(currentTestimonial.rating)}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="text-center mb-8">
              <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={currentTestimonial.avatar} />
                <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>

              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <h4 className="font-semibold text-foreground">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial.title}
                </p>
                <p className="text-sm text-accent font-medium">
                  {currentTestimonial.company}
                </p>
                <p className="text-xs text-muted-foreground/80 mt-1">
                  {currentTestimonial.date}
                </p>
              </div>
            </div>

            {/* Video Play Button (if video testimonial) */}
            {currentTestimonial.type === 'video' && currentTestimonial.videoUrl && (
              <div className="flex justify-center mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(currentTestimonial.videoUrl, '_blank')}
                >
                  <Play className="w-4 h-4" />
                  {language.code === 'ar' ? 'مشاهدة الفيديو' : 'Watch Video'}
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          onClick={prevTestimonial}
          className={`absolute top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card border border-border rounded-sm ${
            isRTL ? 'right-4' : 'left-4'
          }`}
        >
          <ChevronLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={nextTestimonial}
          className={`absolute top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card border border-border rounded-sm ${
            isRTL ? 'left-4' : 'right-4'
          }`}
        >
          <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
        </Button>

        {/* Play/Pause Button */}
        {autoPlay && testimonials.length > 1 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 z-10 bg-card/90 hover:bg-card border border-border rounded-sm"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => goToTestimonial(index)}
            className={`flex-shrink-0 p-3 rounded-sm border transition-colors duration-300 ${
              index === currentIndex
                ? 'border-accent bg-accent/10'
                : 'border-border hover:border-accent/40 bg-card'
            }`}
          >
            <div className="flex items-center gap-3 min-w-[200px]">
              <Avatar className="w-10 h-10">
                <AvatarImage src={testimonial.avatar} />
                <AvatarFallback className="text-xs">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground truncate">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Progress Indicator */}
      {isPlaying && (
        <div className="mt-4 w-full bg-muted rounded-full h-1">
          <motion.div
            className="bg-accent h-1 rounded-full"
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

export default EnhancedTestimonialsCarousel;

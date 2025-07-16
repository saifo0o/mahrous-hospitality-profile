import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface VideoTestimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
  duration: string;
  category: string;
}

const TestimonialVideoIntegration: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language } = useLanguage();

  const testimonials: VideoTestimonial[] = [
    {
      id: '1',
      name: 'Ahmed Al-Mansouri',
      title: 'CEO',
      company: 'Luxury Hospitality Group',
      thumbnail: '/lovable-uploads/2a742c4a-aaea-4c0f-ad38-ea2891228c62.jpg',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      quote: 'Islam\'s leadership transformed our operations and elevated our guest experience to unprecedented levels.',
      duration: '2:30',
      category: 'Leadership'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      title: 'Regional Director',
      company: 'International Hotels',
      thumbnail: '/lovable-uploads/ceab1cbd-052e-4068-8889-c6014f2be5ce.jpg',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      quote: 'Working with Islam was a masterclass in hospitality excellence and operational efficiency.',
      duration: '1:45',
      category: 'Operations'
    }
  ];

  const handleVideoSelect = (testimonial: VideoTestimonial) => {
    setSelectedVideo(testimonial);
    setIsPlaying(false);
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            {language.code === 'ar' ? 'شهادات فيديو' : 'Video Testimonials'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language.code === 'ar' 
              ? 'استمع إلى قادة الصناعة يتحدثون عن تجربتهم في العمل معي'
              : 'Hear from industry leaders about their experience working with me'
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Video Player */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {selectedVideo ? (
                  <div className="relative group">
                    <video
                      ref={videoRef}
                      className="w-full aspect-video object-cover"
                      poster={selectedVideo.thumbnail}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    >
                      <source src={selectedVideo.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-4">
                        <Button
                          size="lg"
                          variant="secondary"
                          onClick={togglePlay}
                          className="rounded-full w-16 h-16"
                        >
                          {isPlaying ? (
                            <Pause className="h-8 w-8" />
                          ) : (
                            <Play className="h-8 w-8 ml-1" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={toggleMute}
                          className="rounded-full"
                        >
                          {isMuted ? (
                            <VolumeX className="h-4 w-4" />
                          ) : (
                            <Volume2 className="h-4 w-4" />
                          )}
                        </Button>
                        <Badge variant="secondary">
                          {selectedVideo.duration}
                        </Badge>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={handleFullscreen}
                        className="rounded-full"
                      >
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <Play className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        {language.code === 'ar' 
                          ? 'اختر شهادة فيديو للمشاهدة' 
                          : 'Select a video testimonial to watch'
                        }
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Selected Video Info */}
            {selectedVideo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 text-primary shrink-0 mt-1" />
                      <div>
                        <blockquote className="text-lg mb-4 italic">
                          "{selectedVideo.quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold">{selectedVideo.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {selectedVideo.title}, {selectedVideo.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Testimonial List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">
              {language.code === 'ar' ? 'جميع الشهادات' : 'All Testimonials'}
            </h3>
            
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedVideo?.id === testimonial.id 
                      ? 'ring-2 ring-primary shadow-lg' 
                      : ''
                  }`}
                  onClick={() => handleVideoSelect(testimonial)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={testimonial.thumbnail}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {testimonial.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {testimonial.title}, {testimonial.company}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">
                            {testimonial.duration}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {language.code === 'ar' ? 'شاهد' : 'Watch'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideoIntegration;
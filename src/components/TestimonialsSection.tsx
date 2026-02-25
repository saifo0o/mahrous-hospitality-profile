
import React, { useState, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const testimonials = [
  {
    id: 1,
    content: "Islam's leadership during our hotel renovation was exceptional. He managed to keep operations running smoothly while overseeing a complete property transformation. The results exceeded expectations, with a 22% increase in guest satisfaction scores post-renovation.",
    name: "Amr Hassan",
    title: "Regional Director",
    company: "Middle East Hotels Group",
    rating: 5,
    initials: "AH",
    color: "bg-primary",
  },
  {
    id: 2,
    content: "Working with Islam on the Four Points Sheraton pre-opening was a masterclass in hospitality management. His attention to detail and ability to train staff to exceptional service standards ensured our opening was seamless and guest reviews were outstanding from day one.",
    name: "Sarah Al-Fahad",
    title: "Operations Director",
    company: "Sheraton Hotels",
    rating: 5,
    initials: "SA",
    color: "bg-accent",
  },
  {
    id: 3,
    content: "Islam transformed our struggling property into a market leader in just 18 months. His strategic revenue management and staff development programs resulted in a 35% increase in occupancy and a 28% improvement in profitability.",
    name: "Michael Chen",
    title: "CEO",
    company: "International Hospitality Investments",
    rating: 5,
    initials: "MC",
    color: "bg-primary",
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();

  React.useEffect(() => {
    if (!api) return;
    const handleSelect = () => setCurrentTestimonial(api.selectedScrollSnap());
    api.on("select", handleSelect);
    return () => { api.off("select", handleSelect); };
  }, [api]);

  // Autoplay
  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="testimonials" className="py-24 bg-muted/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            {language.code === 'ar' ? 'ماذا يقولون' : 'Testimonials'}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-foreground">
            {language.code === 'ar' ? 'شهادات من الصناعة' : 'Industry Testimonials'}
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel opts={{ align: "center", loop: true }} className="w-full" setApi={setApi}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="px-4 md:px-8 py-4">
                  <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm text-center relative">
                    {/* Quote icon */}
                    <Quote className="w-10 h-10 text-accent/20 mx-auto mb-6" />
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-light italic">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center`}>
                        <span className="text-sm font-bold text-primary-foreground">{testimonial.initials}</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center items-center mt-8 gap-4">
              <CarouselPrevious className="relative static" />
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? "w-8 bg-accent" : "w-2 bg-border"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { TestimonialCard } from './TestimonialCard';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "Islam's leadership during our hotel renovation was exceptional. He managed to keep operations running smoothly while overseeing a complete property transformation. The results exceeded expectations, with a 22% increase in guest satisfaction scores post-renovation.",
    name: "Amr Hassan",
    title: "Regional Director",
    company: "Middle East Hotels Group",
    relationship: "Former Supervisor",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    content: "Working with Islam on the Fourpoint Sheraton pre-opening was a masterclass in hospitality management. His attention to detail and ability to train staff to exceptional service standards ensured our opening was seamless and guest reviews were outstanding from day one.",
    name: "Sarah Al-Fahad",
    title: "Operations Director",
    company: "Sheraton Hotels",
    relationship: "Colleague",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    content: "Islam transformed our struggling property into a market leader in just 18 months. His strategic revenue management and staff development programs resulted in a 35% increase in occupancy and a 28% improvement in profitability.",
    name: "Michael Chen",
    title: "CEO",
    company: "International Hospitality Investments",
    relationship: "Former Employer",
    avatar: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  React.useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrentTestimonial(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const carouselVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const controlsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-heading inline-block"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Industry Testimonials
          </motion.h2>
          <motion.p 
            className="text-luxury-gray mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Endorsements from industry colleagues and partners who have witnessed Islam's expertise and leadership firsthand.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={carouselVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="px-4 md:px-8 py-4">
                  <motion.div 
                    className="h-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <motion.div 
              className="flex justify-center items-center mt-8"
              variants={controlsVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <CarouselPrevious className="position-static relative mr-2 hover-lift" />
              </motion.div>
              
              <div className="flex space-x-2 mx-4">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      currentTestimonial === index ? "w-8 bg-luxury-gold" : "w-2 bg-gray-300"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  />
                ))}
              </div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <CarouselNext className="position-static relative ml-2 hover-lift" />
              </motion.div>
            </motion.div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

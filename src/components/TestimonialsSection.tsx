
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialCard } from './TestimonialCard';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "Islam's leadership during our hotel renovation was exceptional. He managed to keep operations running smoothly while overseeing a complete property transformation. The results exceeded expectations, with a 22% increase in guest satisfaction scores post-renovation.",
    name: "Amr Hassan",
    title: "Regional Director",
    company: "Middle East Hotels Group",
    relationship: "Former Supervisor",
    avatar: "/placeholder.svg" // Replace with actual image when available
  },
  {
    id: 2,
    content: "Working with Islam on the Fourpoint Sheraton pre-opening was a masterclass in hospitality management. His attention to detail and ability to train staff to exceptional service standards ensured our opening was seamless and guest reviews were outstanding from day one.",
    name: "Sarah Al-Fahad",
    title: "Operations Director",
    company: "Sheraton Hotels",
    relationship: "Colleague",
    avatar: "/placeholder.svg" // Replace with actual image when available
  },
  {
    id: 3,
    content: "Islam transformed our struggling property into a market leader in just 18 months. His strategic revenue management and staff development programs resulted in a 35% increase in occupancy and a 28% improvement in profitability.",
    name: "Michael Chen",
    title: "CEO",
    company: "International Hospitality Investments",
    relationship: "Former Employer",
    avatar: "/placeholder.svg" // Replace with actual image when available
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading inline-block">Industry Testimonials</h2>
          <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
            Endorsements from industry colleagues and partners who have witnessed Islam's expertise and leadership firsthand.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            onSelect={(index) => setCurrentTestimonial(index)}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="px-4 md:px-8 py-4">
                  <div className="h-full flex items-center justify-center">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center mt-8">
              <CarouselPrevious className="position-static relative mr-2" />
              <div className="flex space-x-2 mx-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      currentTestimonial === index ? "w-8 bg-luxury-gold" : "w-2 bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="position-static relative ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import React from 'react';
import { Card } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -20
  }} transition={{
    duration: 0.5
  }} className="w-full">
      <Card className="glass-card p-8 relative overflow-hidden border-0">
        {/* Decorative quote icon */}
        <div className="absolute top-6 right-6 opacity-10">
          <QuoteIcon size={60} className="text-luxury-gold" />
        </div>
        
        {/* Testimonial content */}
        <div className="mb-8">
          <p className="text-lg italic leading-relaxed text-luxury-navy">
            "{testimonial.content}"
          </p>
        </div>
        
        {/* Author information */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-luxury-gold/30">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name);
              }}
            />
          </div>
          <div>
            <h4 className="font-bold text-luxury-navy">{testimonial.name}</h4>
            <p className="text-sm text-luxury-gray">{testimonial.title}, {testimonial.company}</p>
            <p className="text-xs text-luxury-gold font-medium mt-1">{testimonial.relationship}</p>
          </div>
        </div>
        
        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-bl from-luxury-gold/10 to-transparent" />
      </Card>
    </motion.div>;
};

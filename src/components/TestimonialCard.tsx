
import React from 'react';
import { Card } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

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
  const { isRTL } = useLanguage();
  
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
      <Card className="bg-card border border-border p-8 relative overflow-hidden rounded-sm shadow-sm">
        {/* Decorative quote icon */}
        <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} opacity-10`}>
          <QuoteIcon size={60} className="text-accent" />
        </div>
        
        {/* Testimonial content */}
        <div className="mb-8">
          <p className={`text-lg italic leading-relaxed text-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
            "{testimonial.content}"
          </p>
        </div>
        
        {/* Author information */}
        <div className={`flex items-center ${isRTL ? 'justify-end' : ''}`}>
          
          <div className={isRTL ? 'text-right' : ''}>
            <h4 className="font-bold text-foreground">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
            <p className="text-xs text-accent font-medium mt-1">{testimonial.relationship}</p>
          </div>
        </div>
        
        {/* Decorative corner accent */}
        <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-24 h-24 ${isRTL ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'} from-accent/10 to-transparent`} />
      </Card>
    </motion.div>;
};

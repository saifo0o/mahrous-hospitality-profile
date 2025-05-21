
import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

type AnimationDirection = 'up' | 'down' | 'left' | 'right';

export const useAnimation = (ref: React.RefObject<HTMLElement>, direction: AnimationDirection = 'up', delay: number = 0) => {
  const { isRTL } = useLanguage();
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (!ref.current) return;
    
    if (isInView) {
      // Adjust horizontal directions based on RTL
      let finalDirection = direction;
      if (direction === 'left' && isRTL) finalDirection = 'right';
      if (direction === 'right' && isRTL) finalDirection = 'left';
      
      const translateMap = {
        up: 'translateY(20px)',
        down: 'translateY(-20px)',
        left: 'translateX(20px)',
        right: 'translateX(-20px)'
      };
      
      ref.current.style.transform = translateMap[finalDirection];
      ref.current.style.opacity = '0';
      ref.current.style.transition = `transform 0.7s ease-out ${delay}s, opacity 0.7s ease-out ${delay}s`;
      
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = 'translate(0)';
          ref.current.style.opacity = '1';
        }
      }, 50);
    }
  }, [isInView, direction, delay, isRTL, ref]);
  
  return isInView;
};


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ReadingProgressProps {
  target?: string; // CSS selector for the content container
  className?: string;
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({ 
  target = '.reading-content',
  className = ''
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const targetElement = document.querySelector(target) as HTMLElement;
      if (!targetElement) return;

      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const targetTop = targetElement.offsetTop;
      const targetHeight = targetElement.offsetHeight;
      
      // Calculate progress based on the target element
      const targetBottom = targetTop + targetHeight;
      const scrollProgress = Math.max(0, Math.min(100, 
        ((scrollTop - targetTop) / (targetBottom - targetTop - window.innerHeight)) * 100
      ));

      setProgress(scrollProgress);
      setIsVisible(scrollTop > targetTop - 100);
    };

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    updateProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [target]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`fixed top-0 left-0 right-0 z-40 ${className}`}
    >
      <div className="h-1 bg-gray-200 dark:bg-gray-700">
        <motion.div
          className="h-full bg-luxury-gold"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export default ReadingProgress;

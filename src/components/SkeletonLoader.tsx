
import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  height?: string;
  width?: string;
  className?: string;
  lines?: number;
  type?: 'text' | 'card' | 'image' | 'hero';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  height = 'h-4',
  width = 'w-full',
  className = '',
  lines = 1,
  type = 'text'
}) => {
  const skeletonVariants = {
    loading: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const renderSkeleton = () => {
    switch (type) {
      case 'hero':
        return (
          <div className="space-y-4">
            <motion.div 
              className="h-12 bg-gray-200 rounded-lg w-3/4"
              variants={skeletonVariants}
              animate="loading"
            />
            <motion.div 
              className="h-6 bg-gray-200 rounded w-full"
              variants={skeletonVariants}
              animate="loading"
            />
            <motion.div 
              className="h-6 bg-gray-200 rounded w-5/6"
              variants={skeletonVariants}
              animate="loading"
            />
            <motion.div 
              className="h-10 bg-gray-200 rounded w-40"
              variants={skeletonVariants}
              animate="loading"
            />
          </div>
        );
      case 'card':
        return (
          <div className="space-y-3">
            <motion.div 
              className="h-48 bg-gray-200 rounded-lg"
              variants={skeletonVariants}
              animate="loading"
            />
            <motion.div 
              className="h-6 bg-gray-200 rounded w-3/4"
              variants={skeletonVariants}
              animate="loading"
            />
            <motion.div 
              className="h-4 bg-gray-200 rounded w-full"
              variants={skeletonVariants}
              animate="loading"
            />
            <motion.div 
              className="h-4 bg-gray-200 rounded w-2/3"
              variants={skeletonVariants}
              animate="loading"
            />
          </div>
        );
      case 'image':
        return (
          <motion.div 
            className={`bg-gray-200 rounded ${height} ${width}`}
            variants={skeletonVariants}
            animate="loading"
          />
        );
      default:
        return (
          <div className="space-y-2">
            {Array.from({ length: lines }).map((_, index) => (
              <motion.div
                key={index}
                className={`bg-gray-200 rounded ${height} ${index === lines - 1 ? 'w-3/4' : width} ${className}`}
                variants={skeletonVariants}
                animate="loading"
              />
            ))}
          </div>
        );
    }
  };

  return renderSkeleton();
};

export default SkeletonLoader;

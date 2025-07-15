import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  animation?: 'pulse' | 'wave' | 'none';
  lines?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  variant = 'text',
  animation = 'pulse',
  lines = 1
}) => {
  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200';
  
  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]',
    none: ''
  };

  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full aspect-square',
    rectangular: 'rounded-md',
    card: 'h-48 rounded-lg'
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses.text} ${animationClasses[animation]} ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
    />
  );
};

interface ContentSkeletonProps {
  type: 'card' | 'list' | 'profile' | 'gallery' | 'article';
  count?: number;
}

export const ContentSkeleton: React.FC<ContentSkeletonProps> = ({ type, count = 1 }) => {
  const skeletons = Array.from({ length: count }).map((_, index) => {
    switch (type) {
      case 'card':
        return (
          <div key={index} className="border border-gray-200 rounded-lg p-6 space-y-4">
            <Skeleton variant="rectangular" className="h-32" />
            <Skeleton variant="text" className="w-3/4" />
            <Skeleton variant="text" lines={2} />
            <div className="flex space-x-2">
              <Skeleton variant="rectangular" className="h-6 w-16" />
              <Skeleton variant="rectangular" className="h-6 w-20" />
            </div>
          </div>
        );
      
      case 'list':
        return (
          <div key={index} className="flex items-center space-x-4 p-4">
            <Skeleton variant="circular" className="w-12 h-12" />
            <div className="flex-1 space-y-2">
              <Skeleton variant="text" className="w-1/2" />
              <Skeleton variant="text" className="w-3/4" />
            </div>
          </div>
        );
      
      case 'profile':
        return (
          <div key={index} className="flex flex-col items-center space-y-4 p-6">
            <Skeleton variant="circular" className="w-24 h-24" />
            <Skeleton variant="text" className="w-32" />
            <Skeleton variant="text" lines={3} className="w-full max-w-md" />
          </div>
        );
      
      case 'gallery':
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} variant="rectangular" className="aspect-square" />
            ))}
          </div>
        );
      
      case 'article':
        return (
          <div key={index} className="space-y-4">
            <Skeleton variant="rectangular" className="h-64" />
            <Skeleton variant="text" className="w-3/4 h-8" />
            <Skeleton variant="text" lines={4} />
            <div className="flex space-x-4">
              <Skeleton variant="circular" className="w-8 h-8" />
              <div className="flex-1">
                <Skeleton variant="text" className="w-1/4" />
                <Skeleton variant="text" className="w-1/3" />
              </div>
            </div>
          </div>
        );
      
      default:
        return <Skeleton key={index} />;
    }
  });

  return <>{skeletons}</>;
};

interface LoadingStateProps {
  isLoading: boolean;
  children: React.ReactNode;
  skeleton?: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  isLoading, 
  children, 
  skeleton,
  fallback
}) => {
  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {skeleton || fallback || <ContentSkeleton type="card" count={3} />}
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Skeleton;
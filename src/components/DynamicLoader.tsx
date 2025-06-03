
import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface DynamicLoaderProps {
  componentPath: string;
  fallback?: React.ReactNode;
  [key: string]: any;
}

const componentMap = {
  'AboutSection': lazy(() => import('./AboutSection')),
  'ExperienceSection': lazy(() => import('./ExperienceSection')),
  'ProjectsSection': lazy(() => import('./ProjectsSection')),
  'TestimonialsSection': lazy(() => import('./TestimonialsSection')),
  'CaseStudiesSection': lazy(() => import('./CaseStudiesSection')),
  'MediaSection': lazy(() => import('./MediaSection')),
  'AwardsSection': lazy(() => import('./AwardsSection')),
  'BlogSection': lazy(() => import('./BlogSection')),
  'SpeakingSection': lazy(() => import('./SpeakingSection')),
  'InteractiveTimeline': lazy(() => import('./InteractiveTimeline')),
  'NewsletterSignup': lazy(() => import('./NewsletterSignup')),
};

const DynamicLoader: React.FC<DynamicLoaderProps> = ({ 
  componentPath, 
  fallback = <LoadingSpinner />, 
  ...props 
}) => {
  const Component = componentMap[componentPath as keyof typeof componentMap];
  
  if (!Component) {
    console.warn(`Component ${componentPath} not found in componentMap`);
    return null;
  }

  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default DynamicLoader;

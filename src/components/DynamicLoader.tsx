
import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface DynamicLoaderProps {
  componentPath: string;
  fallback?: React.ReactNode;
  [key: string]: any;
}

const componentMap = {
  'AboutSection': lazy(() => import('./AboutSection')),
  'ProfessionalGallery': lazy(() => import('./ProfessionalGallery')),
  'ExperienceSection': lazy(() => import('./ExperienceSection')),
  'ProjectsSection': lazy(() => import('./ProjectsSection')),
  'TestimonialsSection': lazy(() => import('./TestimonialsSection')),
  'CaseStudiesSection': lazy(() => import('./CaseStudiesSection')),
  'MediaSection': lazy(() => import('./MediaSection')),
  'AwardsSection': lazy(() => import('./AwardsSection')),
  'BlogSection': lazy(() => import('./BlogSection')),
  'SpeakingSection': lazy(() => import('./SpeakingSection')),
  'NewsletterSignup': lazy(() => import('./NewsletterSignup')),
  'SocialProofWidget': lazy(() => import('./SocialProofWidget')),
};

const DynamicLoader: React.FC<DynamicLoaderProps> = ({ 
  componentPath, 
  fallback = <LoadingSpinner />, 
  ...props 
}) => {
  const Component = componentMap[componentPath as keyof typeof componentMap];
  
  if (!Component) {
    return (
      <div className="flex items-center justify-center min-h-[200px] p-8">
        <div className="text-center">
          <p className="text-muted-foreground">Component "{componentPath}" not found</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default DynamicLoader;


import React, { Suspense, lazy, useRef, useState, useEffect } from 'react';
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
  'MethodologySection': lazy(() => import('./MethodologySection')),
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
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Only load components when they are approaching the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px' } // Pre-load well before it enters viewport to prevent popping
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

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
    <div ref={ref}>
      {isInView ? (
        <Suspense fallback={fallback}>
          <Component {...props} />
        </Suspense>
      ) : (
        <div aria-hidden="true">{fallback}</div>
      )}
    </div>
  );
};

export default DynamicLoader;


import { trackEvent } from './analytics';

// Enhanced analytics for better user behavior tracking
export const trackUserEngagement = (section: string, action: string, value?: number) => {
  trackEvent(action, 'engagement', section, value);
};

export const trackScrollDepth = (depth: number) => {
  const depths = [25, 50, 75, 100];
  const currentDepth = depths.find(d => depth >= d && depth < d + 5);
  
  if (currentDepth) {
    trackEvent('scroll_depth', 'engagement', `${currentDepth}%`);
  }
};

export const trackTimeOnPage = () => {
  const startTime = Date.now();
  
  const handleBeforeUnload = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', 'engagement', window.location.pathname, timeSpent);
  };
  
  window.addEventListener('beforeunload', handleBeforeUnload);
  
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
};

export const trackCTAClicks = (ctaName: string, location: string) => {
  trackEvent('cta_click', 'conversion', `${ctaName}_${location}`);
};

export const trackFormInteraction = (formName: string, field: string, action: string) => {
  trackEvent(action, 'form_interaction', `${formName}_${field}`);
};

export const trackDownload = (filename: string, type: string) => {
  trackEvent('download', 'content', `${type}_${filename}`);
};

export const trackVideoPlay = (videoTitle: string, duration?: number) => {
  trackEvent('video_play', 'media', videoTitle, duration);
};

export const trackSearchQuery = (query: string, resultsCount: number) => {
  trackEvent('search', 'site_search', query, resultsCount);
};

export const trackSocialShare = (platform: string, content: string) => {
  trackEvent('share', 'social', `${platform}_${content}`);
};

export const trackErrorBoundary = (errorMessage: string, componentName: string) => {
  trackEvent('error', 'technical', `${componentName}_${errorMessage}`);
};

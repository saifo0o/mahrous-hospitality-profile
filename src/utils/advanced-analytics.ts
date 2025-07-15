// Advanced Analytics Utilities
import { trackEvent, trackPageView } from '@/utils/analytics';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface UserEngagement {
  session_id: string;
  user_id?: string;
  page_path: string;
  timestamp: number;
  engagement_time: number;
  scroll_depth: number;
  interactions: number;
}

class AdvancedAnalytics {
  private sessionId: string;
  private pageLoadTime: number;
  private engagementStartTime: number;
  private scrollDepth: number = 0;
  private interactionCount: number = 0;
  private isVisible: boolean = true;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.pageLoadTime = Date.now();
    this.engagementStartTime = Date.now();
    this.initializeTracking();
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  private initializeTracking() {
    // Track page visibility
    document.addEventListener('visibilitychange', () => {
      this.isVisible = !document.hidden;
      if (this.isVisible) {
        this.engagementStartTime = Date.now();
      } else {
        this.trackEngagement();
      }
    });

    // Track scroll depth
    window.addEventListener('scroll', this.trackScroll.bind(this));

    // Track interactions
    document.addEventListener('click', this.trackInteraction.bind(this));
    document.addEventListener('keydown', this.trackInteraction.bind(this));

    // Track before unload
    window.addEventListener('beforeunload', () => {
      this.trackEngagement();
    });
  }

  private trackScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    if (scrollPercent > this.scrollDepth) {
      this.scrollDepth = Math.min(scrollPercent, 100);
      
      // Track scroll milestones
      if (this.scrollDepth >= 25 && this.scrollDepth < 50) {
        this.trackEvent('scroll', 'engagement', '25%');
      } else if (this.scrollDepth >= 50 && this.scrollDepth < 75) {
        this.trackEvent('scroll', 'engagement', '50%');
      } else if (this.scrollDepth >= 75 && this.scrollDepth < 100) {
        this.trackEvent('scroll', 'engagement', '75%');
      } else if (this.scrollDepth >= 100) {
        this.trackEvent('scroll', 'engagement', '100%');
      }
    }
  }

  private trackInteraction() {
    this.interactionCount++;
  }

  private trackEngagement() {
    if (!this.isVisible) return;

    const engagementTime = Date.now() - this.engagementStartTime;
    const engagement: UserEngagement = {
      session_id: this.sessionId,
      page_path: window.location.pathname,
      timestamp: Date.now(),
      engagement_time: engagementTime,
      scroll_depth: this.scrollDepth,
      interactions: this.interactionCount
    };

    this.trackEvent('engagement', 'session', 'page_engagement', engagementTime, {
      scroll_depth: this.scrollDepth,
      interactions: this.interactionCount,
      session_id: this.sessionId
    });
  }

  // Enhanced event tracking
  trackEvent(action: string, category: string, label?: string, value?: number, customParams?: Record<string, any>) {
    const event: AnalyticsEvent = {
      action,
      category,
      label,
      value,
      custom_parameters: {
        session_id: this.sessionId,
        timestamp: Date.now(),
        page_path: window.location.pathname,
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        ...customParams
      }
    };

    // Send to analytics service
    trackEvent(action, category, label, value);

    // Store in local analytics
    this.storeLocalEvent(event);
  }

  // Performance tracking
  trackPerformance(action: string, timing: number, label?: string) {
    this.trackEvent('performance', 'timing', label || action, timing, {
      performance_metric: action,
      timing_value: timing
    });
  }

  // Error tracking
  trackError(error: Error, context?: string) {
    this.trackEvent('error', 'javascript', context || 'unknown', 1, {
      error_message: error.message,
      error_stack: error.stack,
      error_name: error.name,
      context: context
    });
  }

  // Conversion tracking
  trackConversion(conversionType: string, value?: number, currency?: string) {
    this.trackEvent('conversion', conversionType, conversionType, value, {
      conversion_type: conversionType,
      conversion_value: value,
      currency: currency || 'USD'
    });
  }

  // Search tracking
  trackSearch(query: string, resultsCount: number, category?: string) {
    this.trackEvent('search', 'site_search', query, resultsCount, {
      search_query: query,
      search_results: resultsCount,
      search_category: category
    });
  }

  // Social sharing tracking
  trackSocialShare(platform: string, url: string, title?: string) {
    this.trackEvent('social', 'share', platform, 1, {
      share_platform: platform,
      shared_url: url,
      shared_title: title
    });
  }

  // File download tracking
  trackDownload(fileName: string, fileType: string, fileSize?: number) {
    this.trackEvent('download', 'file', fileName, fileSize, {
      file_name: fileName,
      file_type: fileType,
      file_size: fileSize
    });
  }

  // Form tracking
  trackFormSubmission(formName: string, success: boolean, errors?: string[]) {
    this.trackEvent('form', success ? 'submit_success' : 'submit_error', formName, 1, {
      form_name: formName,
      form_success: success,
      form_errors: errors
    });
  }

  // Video tracking
  trackVideoInteraction(action: 'play' | 'pause' | 'complete', videoTitle: string, progress?: number) {
    this.trackEvent('video', action, videoTitle, progress, {
      video_title: videoTitle,
      video_progress: progress
    });
  }

  // Store events locally for offline sync
  private storeLocalEvent(event: AnalyticsEvent) {
    try {
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      events.push(event);
      
      // Keep only last 100 events
      if (events.length > 100) {
        events.splice(0, events.length - 100);
      }
      
      localStorage.setItem('analytics_events', JSON.stringify(events));
    } catch (error) {
      console.warn('Failed to store analytics event locally:', error);
    }
  }

  // Sync offline events when back online
  async syncOfflineEvents() {
    try {
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      
      for (const event of events) {
        await trackEvent(event.action, event.category, event.label, event.value);
      }
      
      // Clear synced events
      localStorage.removeItem('analytics_events');
    } catch (error) {
      console.warn('Failed to sync offline analytics events:', error);
    }
  }

  // Get analytics summary
  getAnalyticsSummary() {
    return {
      session_id: this.sessionId,
      page_load_time: Date.now() - this.pageLoadTime,
      engagement_time: Date.now() - this.engagementStartTime,
      scroll_depth: this.scrollDepth,
      interactions: this.interactionCount,
      is_visible: this.isVisible
    };
  }
}

// Create global instance
export const advancedAnalytics = new AdvancedAnalytics();

// Hook for React components
export const useAdvancedAnalytics = () => {
  const trackCustomEvent = (action: string, category: string, label?: string, value?: number, customParams?: Record<string, any>) => {
    advancedAnalytics.trackEvent(action, category, label, value, customParams);
  };

  const trackPerformance = (action: string, timing: number, label?: string) => {
    advancedAnalytics.trackPerformance(action, timing, label);
  };

  const trackError = (error: Error, context?: string) => {
    advancedAnalytics.trackError(error, context);
  };

  const trackConversion = (conversionType: string, value?: number, currency?: string) => {
    advancedAnalytics.trackConversion(conversionType, value, currency);
  };

  return {
    trackCustomEvent,
    trackPerformance,
    trackError,
    trackConversion,
    trackSearch: advancedAnalytics.trackSearch.bind(advancedAnalytics),
    trackSocialShare: advancedAnalytics.trackSocialShare.bind(advancedAnalytics),
    trackDownload: advancedAnalytics.trackDownload.bind(advancedAnalytics),
    trackFormSubmission: advancedAnalytics.trackFormSubmission.bind(advancedAnalytics),
    trackVideoInteraction: advancedAnalytics.trackVideoInteraction.bind(advancedAnalytics),
    getAnalyticsSummary: advancedAnalytics.getAnalyticsSummary.bind(advancedAnalytics)
  };
};

export default advancedAnalytics;

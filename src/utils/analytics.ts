
// Islam Mahrous Portfolio Analytics Tracking
// Custom analytics utilities for islam-mahrous.com

// Function to track pageviews
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-8ZR0GLS69G', {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        'site_owner': 'Islam Mahrous'
      }
    });
  }
};

// Function to track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      site_owner: 'Islam Mahrous'
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('click', 'button', buttonName);
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

// Track language changes
export const trackLanguageChange = (language: string) => {
  trackEvent('change', 'language', language);
};

// Track contact interactions
export const trackContactInteraction = (method: string) => {
  trackEvent('contact', 'interaction', method);
};

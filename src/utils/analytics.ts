
// Function to track pageviews
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
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

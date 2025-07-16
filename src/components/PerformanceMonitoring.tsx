import { useEffect } from 'react';
import { useAdvancedAnalytics } from '@/utils/advanced-analytics';

interface PerformanceMetrics {
  navigationTiming: PerformanceNavigationTiming | null;
  paintTiming: PerformanceEntry[];
  resourceTiming: PerformanceResourceTiming[];
  vitals: {
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
  };
}

const PerformanceMonitoring: React.FC = () => {
  const { trackCustomEvent } = useAdvancedAnalytics();

  useEffect(() => {
    // Wait for page load to complete
    const monitorPerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

        const metrics: PerformanceMetrics = {
          navigationTiming: navigation,
          paintTiming: paint,
          resourceTiming: resources,
          vitals: {}
        };

        // Calculate Core Web Vitals
        if (navigation) {
          // Time to First Byte (TTFB)
          const ttfb = navigation.responseStart - navigation.requestStart;
          metrics.vitals.ttfb = ttfb;

          // Track navigation metrics
          trackCustomEvent('performance', 'navigation', 'ttfb', ttfb);
          trackCustomEvent('performance', 'navigation', 'dom_complete', navigation.domComplete);
          trackCustomEvent('performance', 'navigation', 'load_complete', navigation.loadEventEnd);
        }

        // First Contentful Paint (FCP)
        const fcpEntry = paint.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          metrics.vitals.fcp = fcpEntry.startTime;
          trackCustomEvent('performance', 'paint', 'fcp', fcpEntry.startTime);
        }

        // Largest Contentful Paint (LCP)
        if ('PerformanceObserver' in window) {
          try {
            const lcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              if (lastEntry) {
                metrics.vitals.lcp = lastEntry.startTime;
                trackCustomEvent('performance', 'paint', 'lcp', lastEntry.startTime);
              }
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Cumulative Layout Shift (CLS)
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                const layoutShift = entry as any;
                if (!layoutShift.hadRecentInput) {
                  clsValue += layoutShift.value;
                }
              }
              metrics.vitals.cls = clsValue;
              trackCustomEvent('performance', 'layout', 'cls', clsValue);
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });

            // First Input Delay (FID)
            const fidObserver = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                const firstInput = entry as any;
                const fid = firstInput.processingStart - firstInput.startTime;
                metrics.vitals.fid = fid;
                trackCustomEvent('performance', 'interaction', 'fid', fid);
              }
            });
            fidObserver.observe({ entryTypes: ['first-input'] });

          } catch (e) {
            console.debug('Some performance observers not supported');
          }
        }

        // Resource timing analysis
        const slowResources = resources.filter(resource => resource.duration > 1000);
        if (slowResources.length > 0) {
          trackCustomEvent('performance', 'resources', 'slow_resources', slowResources.length);
        }

        // Memory usage (if available)
        if ('memory' in performance) {
          const memoryInfo = (performance as any).memory;
          trackCustomEvent('performance', 'memory', 'used_heap_size', memoryInfo.usedJSHeapSize);
        }

        // Connection information
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          if (connection) {
            trackCustomEvent('performance', 'connection', 'effective_type', connection.effectiveType);
            trackCustomEvent('performance', 'connection', 'downlink', connection.downlink);
          }
        }

        // Track overall performance score
        const performanceScore = calculatePerformanceScore(metrics);
        trackCustomEvent('performance', 'score', 'overall', performanceScore);

      } catch (error) {
        console.debug('Performance monitoring error:', error);
      }
    };

    // Monitor performance after page load
    if (document.readyState === 'complete') {
      setTimeout(monitorPerformance, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(monitorPerformance, 1000);
      });
    }

    // Monitor page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        trackCustomEvent('engagement', 'page', 'hidden', Date.now());
      } else {
        trackCustomEvent('engagement', 'page', 'visible', Date.now());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [trackCustomEvent]);

  const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;

    // Deduct points for slow metrics
    if (metrics.vitals.fcp && metrics.vitals.fcp > 2500) score -= 20;
    if (metrics.vitals.lcp && metrics.vitals.lcp > 4000) score -= 25;
    if (metrics.vitals.fid && metrics.vitals.fid > 300) score -= 20;
    if (metrics.vitals.cls && metrics.vitals.cls > 0.25) score -= 15;
    if (metrics.vitals.ttfb && metrics.vitals.ttfb > 800) score -= 20;

    return Math.max(0, score);
  };

  return null; // This component doesn't render anything
};

export default PerformanceMonitoring;
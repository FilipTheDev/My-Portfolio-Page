// Analytics utility for the portfolio site
// This is a simple analytics implementation that can be connected to services like Google Analytics, Plausible, etc.

// Initialize analytics based on the provider
export const initAnalytics = (provider: 'google' | 'plausible' | 'none', trackingId?: string) => {
  if (provider === 'none' || !trackingId) return;

  if (provider === 'google') {
    // Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    // Declare gtag as a variable instead of a function declaration to fix strict mode issue
    const gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };
    gtag('js', new Date());
    gtag('config', trackingId);
  } else if (provider === 'plausible') {
    // Plausible Analytics
    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-domain', window.location.hostname);
    script.src = 'https://plausible.io/js/plausible.js';
    document.head.appendChild(script);
  }
};

// Track page views
export const trackPageView = (path: string) => {
  // Google Analytics
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', window.gaTrackingId, {
      page_path: path,
    });
  }
  
  // Plausible
  if (typeof window.plausible !== 'undefined') {
    window.plausible('pageview', { url: path });
  }
};

// Track events
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  // Google Analytics
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventData);
  }
  
  // Plausible
  if (typeof window.plausible !== 'undefined') {
    window.plausible(eventName, { props: eventData });
  }
};

// Types are now defined in custom.d.ts

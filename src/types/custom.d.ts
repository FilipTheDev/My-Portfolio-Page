// Custom type definitions for the portfolio project

// Define types for window to avoid TypeScript errors with custom properties
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
  gaTrackingId?: string;
  plausible?: (...args: any[]) => void;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    gaTrackingId?: string;
    plausible?: (...args: any[]) => void;
  }
}

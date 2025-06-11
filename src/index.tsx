import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initAnalytics } from './utils/analytics';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize analytics - replace 'none' with 'google' or 'plausible' and add your tracking ID to enable
initAnalytics('none', '');

// Send web vitals to analytics
reportWebVitals((metric) => {
  if (process.env.NODE_ENV === 'production') {
    // You can send metrics to your analytics provider here
    console.log(metric);
  }
});

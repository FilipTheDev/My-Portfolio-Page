import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/UI/MainLayout';
import Loader from './components/UI/Loader';
import { userInfo } from './data/portfolioData';

// Lazy loaded components
const HomePage = lazy(() => import('./pages/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  
  return (
    <Router>
      <MainLayout userInfo={userInfo}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;

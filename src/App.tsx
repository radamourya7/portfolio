import React, { Suspense } from 'react';

// Lazy load components
const Background = React.lazy(() => import('./components/Background'));
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const Animations = React.lazy(() => import('./components/Animations'));
const VisitorCounter = React.lazy(() => import('./components/VisitorCounter'));

// Loading component
const LoadingFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white">
      <Suspense fallback={<LoadingFallback />}>
        <Background />
        <HeroSection />
        <Animations />
        <VisitorCounter />
      </Suspense>
    </div>
  );
};

export default App; 
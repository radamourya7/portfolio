import React from 'react';
import HeroSection from './components/HeroSection';
import Background from './components/Background';
import Animations from './components/Animations';
import VisitorCounter from './components/VisitorCounter';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Animations />
      <HeroSection />
      <VisitorCounter />
    </div>
  );
};

export default App; 
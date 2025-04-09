import React, { useEffect, useState } from 'react';
import Background from './components/Background';
import HeroSection from './components/HeroSection';
import VisitorCounter from './components/VisitorCounter';
import { updateVisitorCount } from './firebase';

const App: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const updateCount = async () => {
      try {
        const count = await updateVisitorCount();
        setVisitorCount(count);
      } catch (error) {
        console.error('Error updating visitor count:', error);
      }
    };

    updateCount();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Background />
      <HeroSection />
      <VisitorCounter count={visitorCount} />
    </div>
  );
};

export default App; 
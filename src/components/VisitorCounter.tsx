import React, { useEffect, useState } from 'react';
import { updateVisitorCount } from '../firebase';

interface VisitorCounterProps {
  count?: number | null;
}

const VisitorCounter: React.FC<VisitorCounterProps> = ({ count: initialCount = null }) => {
  const [count, setCount] = useState<number | null>(initialCount);

  useEffect(() => {
    const updateCount = async () => {
      try {
        const newCount = await updateVisitorCount();
        setCount(newCount);
      } catch (error) {
        console.error('Error updating visitor count:', error);
      }
    };

    if (count === null) {
      updateCount();
    }
  }, [count]);

  return (
    <div className="fixed bottom-4 right-4 text-sm animate-on-scroll">
      {count !== null ? `Visitors: ${count}` : 'Loading...'}
    </div>
  );
};

export default VisitorCounter; 
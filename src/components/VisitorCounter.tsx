import React, { useEffect, useState } from 'react';
import { updateVisitorCount } from '../firebase';

interface VisitorCounterProps {
  count?: number | null;
}

const VisitorCounter: React.FC<VisitorCounterProps> = ({ count: initialCount = null }) => {
  const [count, setCount] = useState<number | null>(initialCount);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const updateCount = async () => {
      if (!isOnline) {
        console.log('Device is offline, will retry when online');
        return;
      }

      try {
        const newCount = await updateVisitorCount();
        setCount(newCount);
        setRetryCount(0); // Reset retry count on success
      } catch (error) {
        console.error('Error updating visitor count:', error);
        if (retryCount < maxRetries) {
          // Exponential backoff: 2s, 4s, 8s
          const delay = Math.pow(2, retryCount) * 1000;
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, delay);
        }
      }
    };

    if (count === null && retryCount < maxRetries) {
      updateCount();
    }
  }, [count, isOnline, retryCount]);

  return (
    <div className="fixed bottom-4 right-4 text-sm animate-on-scroll bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
      {!isOnline ? (
        <span className="text-yellow-400">Offline - Will update when online</span>
      ) : count !== null ? (
        <span>Visitors: {count.toLocaleString()}</span>
      ) : (
        <span className="text-gray-400">Loading...</span>
      )}
    </div>
  );
};

export default VisitorCounter; 
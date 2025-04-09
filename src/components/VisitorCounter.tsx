import React from 'react';

interface VisitorCounterProps {
  count: number | null;
}

const VisitorCounter: React.FC<VisitorCounterProps> = ({ count }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-gray-300">
      {count !== null ? (
        <span>Visitors: {count.toLocaleString()}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default VisitorCounter; 
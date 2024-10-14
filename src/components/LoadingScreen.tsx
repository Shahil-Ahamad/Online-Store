import React, { useEffect, useState } from 'react';
import { useLoading } from '../Context/LoadingContext'; 

const LoadingScreen: React.FC = () => {
  const { isLoading } = useLoading();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShow(true), 200);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
      <div className="text-center">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full">
          
        </div>
        <p className="mt-4 text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

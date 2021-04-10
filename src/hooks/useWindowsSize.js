import { useEffect, useState } from 'react';

export const useWindowHeight = () => {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWindowResize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return dimension;
};

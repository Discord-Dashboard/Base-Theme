'use client';

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  const [didChange, setDidChange] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      setDidChange(true);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowDimensions, didChange];
}

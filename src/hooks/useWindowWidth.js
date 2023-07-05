import { useEffect, useCallback, useState } from 'react';

function useWindowWidth() {
  const getWindowWidth = useCallback(() => window.innerWidth, []);
  const [screenWidth, setScreenWidth] = useState(getWindowWidth());

  useEffect(() => {
    let timer;

    function handleScreenResize() {
      setScreenWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleSetTimeout);

    function handleSetTimeout() {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          handleScreenResize();
        }, 1500);
      }
    }

    return () => window.removeEventListener('resize', handleSetTimeout);
  }, [getWindowWidth]);

  return screenWidth;
}

export default useWindowWidth;

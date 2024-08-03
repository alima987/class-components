import { useState, useRef, useEffect } from 'react'

const useSize = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
        setWidth(elementRef.current.clientWidth);
      }
  }, [elementRef.current]);

  return { width, elementRef };
}

export default useSize;
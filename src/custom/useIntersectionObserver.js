import { useState, useEffect, useRef } from "react";

function useIntersectionObserver(options) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [elementRef, isIntersecting];
}

export default useIntersectionObserver;

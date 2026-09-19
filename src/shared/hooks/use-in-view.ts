'use client';

import { useEffect, useRef, useState } from 'react';

type IsVisibleVariant = 'default' | 'toggle';

export function useInView(variant: IsVisibleVariant = 'default', threshold = 0.5) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (variant === 'default') {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }

          return;
        }

        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [variant, threshold]);

  return {
    isVisible,
    ref,
  };
}

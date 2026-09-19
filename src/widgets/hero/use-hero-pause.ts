import { useCallback, useEffect, useRef, useState } from "react";

export const useHeroPause = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const paused = isHovered || !isInView || !isTabVisible;

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const sectionRef = useCallback((node: HTMLElement | null) => {
    observerRef.current?.disconnect();

    if (!node) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observerRef.current.observe(node);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    paused,
    sectionRef,
    handleMouseEnter,
    handleMouseLeave,
  };
};

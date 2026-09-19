import { useInView } from "@/shared/hooks";
import { useEffect, useState } from "react";

export const useHeroPause = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { isVisible: isHeroVisible, ref } = useInView("toggle", 0.1);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const paused = isHovered || !isHeroVisible || !isTabVisible;

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    paused,
    ref,
    handleMouseEnter,
    handleMouseLeave,
  };
};

import { useState, useEffect, useCallback } from "react";

export const useWindowEvents = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseMove]);

  return { mousePosition };
};

export default useWindowEvents;

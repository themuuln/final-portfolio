import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Custom hook for fading out an element on scroll
export default function useFadeOutOnScroll(scrollThreshold: any) {
  const [opacity, setOpacity] = useState(1); // State for storing the opacity value
  const { scrollYProgress } = useScroll(); // Get the scroll progress using framer-motion's useScroll hook

  // Use the useTransform hook to map scrollYProgress to opacity values
  const opacityTransform = useTransform(
    scrollYProgress, // Input range: scrollYProgress (0 to 1)
    [0, scrollThreshold], // Output range: opacity (1 to 0) based on scrollThreshold value
    [1, 0]
  );

  // Update the opacity state with the transformed value
  useEffect(() => {
    return opacityTransform.onChange(setOpacity);
  }, [opacityTransform]);

  // Return the opacity value
  return opacity;
}

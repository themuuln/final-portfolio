import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function useFadeOutOnScroll(scrollThreshold: any) {
  const [opacity, setOpacity] = useState(1);
  const { scrollYProgress } = useScroll();
  const opacityTransform = useTransform(
    scrollYProgress,
    [0, scrollThreshold],
    [1, 0]
  );

  useEffect(() => {
    return opacityTransform.onChange(setOpacity);
  }, [opacityTransform]);

  return opacity;
}

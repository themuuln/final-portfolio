"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
  // scroll length animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 z-20 h-[10px] origin-left select-none  bg-brand_main-500"
        style={{ scaleX }}
      />
    </>
  );
};

export default ProgressBar;

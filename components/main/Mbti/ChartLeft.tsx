"use client";
import { motion as m } from "framer-motion";
import { chart } from "@/components/animation/framer";

type Props = {
  color: String;
  width: String;
  shadowColor: String;
};

const ChartLeft = ({ color, width, shadowColor }: Props) => {
  return (
    <>
      <m.div
        variants={chart}
        initial={chart.initial}
        whileInView={chart.whileInView}
        whileHover={chart.whileHover}
        transition={{ type: "tween" }}
        className={`relative h-10 w-[300px] rounded-[30px] bg-chart_bg-600 p-1 md:w-[400px] lg:w-[600px]`}
      >
        <m.div
          className={`w-20p h-8 ${width} ${shadowColor}Glow rounded-[30px] rounded-r-none ${color}`}
        />
      </m.div>
    </>
  );
};

export default ChartLeft;

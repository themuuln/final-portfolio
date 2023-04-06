"use client";
import { motion as m } from "framer-motion";
import { chart } from "@/components/animation/framer";

type Props = {
  color: String;
  shadowColor: String;
};

const ChartLeft = ({ color, shadowColor }: Props) => {
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
          id={`${shadowColor}`}
          className={`w-20p h-8 ${shadowColor}Glow rounded-[30px] rounded-r-none ${color}`}
        />
      </m.div>
    </>
  );
};

export default ChartLeft;

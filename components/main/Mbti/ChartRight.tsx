"use client";
import { motion as m } from "framer-motion";
import { chart } from "@/components/animation/framer";

type Props = {
  chartColor: String;
  shadowColor: String;
};

const ChartRight = ({ chartColor, shadowColor }: Props) => {
  return (
    <>
      <m.div
        variants={chart}
        initial={chart.initial}
        whileInView={chart.whileInView}
        whileHover={chart.whileHover}
        transition={{ type: "tween" }}
        className={`relative h-10 w-[300px] rounded-[30px] bg-chart_bg-600 p-1 md:w-[400px] xl:w-[600px]`}
      >
        <m.div
          id={`${shadowColor}`}
          className={`h-8 ${shadowColor}Glow absolute right-0 rounded-[30px] rounded-l-none ${chartColor}`}
        />
      </m.div>
    </>
  );
};

export default ChartRight;

"use client";
import { useContext } from "react";
import { motion as m } from "framer-motion";

import CursorContext from "@/lib/context/context";
import { chart } from "@/components/animation/framer";
import "../../../app/glow.css";

type Props = {
  color: String;
  width: String;
  shadowColor: String;
};

const ChartLeft = ({ color, width, shadowColor }: Props) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <m.div
        variants={chart}
        initial={chart.initial}
        whileInView={chart.whileInView}
        whileHover={chart.whileHover}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        transition={{ type: "tween" }}
        className={`relative h-10 w-[400px] rounded-[30px] bg-chart_bg-600 p-1 xl:w-[600px]`}
      >
        <m.div
          className={`w-20p h-8 ${width} ${shadowColor}Glow rounded-[30px] rounded-r-none ${color}`}
        />
      </m.div>
    </>
  );
};

export default ChartLeft;

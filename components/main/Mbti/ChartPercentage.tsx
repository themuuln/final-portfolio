"use client";
import { motion as m } from "framer-motion";
import { ChartPercentageProps } from "@/lib/types/types";

const ChartPercentage = ({
  left,
  right,
  leftColor,
  rightColor,
  leftContext,
  rightContext,
}: ChartPercentageProps) => {
  return (
    <>
      <m.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        transition={{ type: "tween" }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        className="mt-[-10px] overflow-hidden pointer-events-none flex h-fit w-full justify-between px-3 text-base md:text-lg"
      >
        <m.div className="flex gap-2">
          <p className={`${leftColor}`}>{left}</p>
          <p className={`${leftColor}`}>{leftContext.toUpperCase()}</p>
        </m.div>
        <m.div className="flex gap-2">
          <p className={`${rightColor}`}>{rightContext.toUpperCase()}</p>
          <p className={`${rightColor}`}>{right}</p>
        </m.div>
      </m.div>
    </>
  );
};

export default ChartPercentage;

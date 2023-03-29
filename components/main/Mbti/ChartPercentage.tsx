"use client";
import { motion as m } from "framer-motion";

import { montserrat, kanit } from "@/public/fonts/fonts";
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
        initial={{ x: 400, opacity: 0 }}
        transition={{ type: "tween" }}
        whileInView={{ x: 0, opacity: 1 }}
        className="mt-[-10px] flex h-fit w-full justify-between px-3 text-lg"
      >
        <m.div className="flex gap-2">
          <p className={`${montserrat.className} ${leftColor}`}>{left}</p>
          <p className={`${kanit.className} ${leftColor}`}>
            {leftContext.toUpperCase()}
          </p>
        </m.div>
        <m.div className="flex gap-2">
          <p className={`${kanit.className} ${rightColor}`}>
            {rightContext.toUpperCase()}
          </p>
          <p className={`${montserrat.className} ${rightColor}`}>{right}</p>
        </m.div>
      </m.div>
    </>
  );
};

export default ChartPercentage;

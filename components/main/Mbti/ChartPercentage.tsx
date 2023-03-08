"use client";
import { motion as m } from "framer-motion";
import { montserrat, kanit } from "@/public/fonts/fonts";

type Props = {
  left: String;
  right: String;
  leftColor: String;
  rightColor: String;
  leftContext: String;
  rightContext: String;
};
const ChartPercentage = ({
  left,
  right,
  leftColor,
  rightColor,
  leftContext,
  rightContext,
}: Props) => {
  return (
    <>
      <m.div
        initial={{ x: 400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="mt-[-10px] flex h-fit w-full justify-between px-3 text-lg"
      >
        <div className="flex gap-2">
          <p className={`${montserrat.className} ${leftColor}`}>{left}</p>
          <p className={`${kanit.className} ${leftColor}`}>
            {leftContext ? leftContext.toUpperCase() : ""}
          </p>
        </div>
        <div className="flex gap-2">
          <p className={`${kanit.className} ${rightColor}`}>
            {rightContext ? leftContext.toUpperCase() : ""}
          </p>
          <p className={`${montserrat.className} ${rightColor}`}>{right}</p>
        </div>
      </m.div>
    </>
  );
};

export default ChartPercentage;

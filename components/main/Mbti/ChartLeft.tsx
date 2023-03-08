"use client";
import { motion as m } from "framer-motion";
import "../../../app/glow.css";

type Props = {
  color: String;
  width: String;
  shadowColor: String;
};

const ChartLeft = ({ color, width, shadowColor }: Props) => {
  return (
    <>
      <m.div
        initial={{ x: 400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileHover={{ y: -10 }}
        className={`relative h-10 w-[400px] rounded-[30px] bg-chartbg p-1 xl:w-[600px]`}
      >
        <div
          className={`w-20p h-8 ${width} ${shadowColor}Glow rounded-[30px] rounded-r-none ${color}`}
        />
      </m.div>
    </>
  );
};

export default ChartLeft;

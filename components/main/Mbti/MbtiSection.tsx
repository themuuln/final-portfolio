"use client";
import React from "react";
import { motion as m } from "framer-motion";
import DebaterSvg from "@/public/svg/DebaterSvg";
import LightDebaterSvg from "@/public/svg/LightDebaterSvg";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { RxPerson } from "react-icons/rx";
import ChartLeft from "./ChartLeft";
import ChartPercentage from "./ChartPercentage";
import ChartRight from "./ChartRight";
import { chartData } from "./chartData";
import { useTheme } from "next-themes";

const MbtiSection = () => {
  const { theme } = useTheme();
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const handleMouseEnter = () => {
    textEnter();
    setHoverType(<RxPerson />);
  };
  const handleMouseLeave = () => textLeave();
  return (
    <section
      id="mbti"
      className="container flex justify-center min-h-screen place-items-center"
    >
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row xl:gap-20">
        <m.div
          initial={{ x: -100, opacity: 0 }}
          transition={{ type: "tween" }}
          whileInView={{ x: 0, opacity: 1 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex flex-col items-center debaterSection"
        >
          {theme == "dark" ? <DebaterSvg /> : <LightDebaterSvg />}
          <m.a
            href="https://www.16personalities.com/profiles/aadde637ba318"
            target={"_blank"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="debaterCaption"
            className={`text-brand_main-500 text-6xl font-semibold transition-colors duration-300 hover:text-brand_bg-500`}
          >
            Debater
          </m.a>
          <m.a
            href="https://www.16personalities.com/profiles/aadde637ba318"
            target={"_blank"}
            initial={{ x: -100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`text text-brand_main-400 text-2xl underline underline-offset-1 hover:text-brand_bg-500`}
          >
            ENTP-T
          </m.a>
        </m.div>
        <div className="flex flex-col items-center gap-4 mt-3">
          {chartData.map((data, index) => (
            <React.Fragment key={index}>
              {data.chartColor ? null : (
                <ChartLeft
                  color={data.color || ""}
                  shadowColor={data.shadowColor}
                />
              )}
              {data.chartColor && (
                <ChartRight
                  chartColor={data.chartColor}
                  shadowColor={data.shadowColor}
                />
              )}
              <ChartPercentage
                leftContext={data.leftContext}
                rightContext={data.rightContext}
                leftColor={data.leftColor}
                rightColor={data.rightColor}
                left={data.left}
                right={data.right}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MbtiSection;

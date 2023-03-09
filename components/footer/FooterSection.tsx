"use client";
import { motion as m } from "framer-motion";
import WorldMap from "../WorldMap";
import SocialLinks from "./ConnectSection";

const FooterSection = () => {
  return (
    <div id="footer" className="flex h-screen snap-center flex-col justify-end">
      <footer className="bg-brand_bg-600 text-brand_main-500">
        <section className="relative h-[20vh]">
          <m.div
            whileHover={{ y: 10 }}
            initial={{ opacity: 0, x: -400, y: 400 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            className="container relative flex h-full w-[90vw] flex-col items-center gap-2 rounded-lg bg-brand_bg-700"
          >
            <h2 className="">Start a project</h2>
            <p>Work together?</p>
            <button>Go ahead!</button>
          </m.div>
        </section>
        <div className="towRow container flex">
          <div className="topLeft">
            <p>SAY HELLO</p>
            <p>themuln.official@gmail.com</p>
          </div>
          <SocialLinks />
          <div className="topRight"></div>
        </div>
        <div className="botRow container h-[40vh] border-t-[1px] pt-10 ">
          <p className="">© Temuulen Undrakhbayar 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;

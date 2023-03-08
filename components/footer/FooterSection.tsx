"use client";
import { motion as m } from "framer-motion";

const FooterSection = () => {
  return (
    <>
      <section className="relative h-[20vh]  ">
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
      <footer className=" bg-brand_bg-600">
        <div className="towRow container flex">
          <div className="topLeft">
            <p>SAY HELLO</p>
            <p>themuln.official@gmail.com</p>
          </div>
          <div className="topRight"></div>
        </div>
        <div className="botRow container h-[40vh] border-t-[1px] border-brand_main-500 pt-10">
          © Temuulen Undrakhbayar 2023
        </div>
      </footer>
    </>
  );
};

export default FooterSection;

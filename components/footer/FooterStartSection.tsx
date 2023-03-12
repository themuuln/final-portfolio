import { motion as m } from "framer-motion";

const FooterStartSection = () => {
  return (
    <>
      <section className="relative h-[20vh]">
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          className="container relative flex h-full w-[90vw] flex-col items-center justify-center gap-2 rounded-lg bg-brand_bg-700 py-5"
        >
          <h2 className="cursor-pointer text-4xl font-semibold transition duration-200 hover:text-brand_main-600">
            Start a project
          </h2>
          <p className="">Work together?</p>
          <button className="rounded-lg border-[1px] py-1 px-3 text-2xl font-semibold transition-all duration-200 hover:bg-brand_main-500 hover:text-brand_bg-500">
            Go ahead!
          </button>
        </m.div>
      </section>
    </>
  );
};

export default FooterStartSection;

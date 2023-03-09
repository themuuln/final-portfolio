import { motion as m } from "framer-motion";

const FooterStartSection = () => {
  return (
    <>
      <section className="relative h-[20vh]">
        <m.div
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 400 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          className="container relative flex h-full w-[90vw] flex-col items-center gap-2 rounded-lg bg-brand_bg-700"
        >
          <h2 className="">Start a project</h2>
          <p>Work together?</p>
          <button>Go ahead!</button>
        </m.div>
      </section>
    </>
  );
};

export default FooterStartSection;

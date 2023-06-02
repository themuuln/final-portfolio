import Image from "next/image";
import eslintIcon from "public/svg/eslint.svg";
import framerIcon from "public/svg/framer.svg";
import nextjsIcon from "public/svg/nextjs.svg";
import prettierIcon from "public/svg/prettier.svg";
import reactIcon from "public/svg/react.svg";
import tailwindcssIcon from "public/svg/tailwindcss.svg";
import typescriptIcon from "public/svg/typescript-icon.svg";
import turbopackIcon from "public/svg/turbopack.svg";
import npmIcon from "public/svg/npm.svg";
import yarnIcon from "public/svg/yarn.svg";
import reactIconsIcon from "public/svg/react-icons.svg";
import sassIcon from "public/svg/sass.svg";
import flowbiteIcon from "public/svg/flowbite.svg";
import { motion as m } from "framer-motion";
// import axiosIcon from "public/svg/axios.svg";

const icons = [
  reactIcon,
  nextjsIcon,
  typescriptIcon,
  tailwindcssIcon,
  flowbiteIcon,
  sassIcon,
  framerIcon,
  // axiosIcon,
  turbopackIcon,
  reactIconsIcon,
  eslintIcon,
  prettierIcon,
  npmIcon,
  yarnIcon,
];

const container = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const MadeWith = () => {
  return (
    <div className="pb-72">
      <div className="sm:px-6 lg:px-8 container px-4 mx-auto">
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          transition={{ ease: "easeInOut", delay: 0.5 }}
          className="mt-8 select-none pointer-events-none relative shadow-lg bg-slate-100 backdrop-blur-[2px] dark:bg-background py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-16 lg:px-12"
        >
          <p className="md:text-2xl md:mb-8 mb-4 text-lg text-center">
            Made this website with
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 sm:mb-0 w-full mb-4 text-center"
              >
                <m.div
                  variants={item}
                  className="sm:h-20 z-50 h-12 mx-auto mb-2"
                >
                  <Image
                    className="sm:h-20 z-50 h-12 mx-auto mb-2"
                    src={icon}
                    alt=""
                  />
                </m.div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default MadeWith;

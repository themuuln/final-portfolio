import Image from "next/image";
import axiosIcon from "public/svg/axios.svg";
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

const MadeWith = () => {
  return (
    <div className="container px-4 mx-auto sm:px-6 lg:px-8">
      <div className="mt-8 shadow-lg bg-slate-100 backdrop-blur-[2px] dark:bg-background py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-16 lg:px-12">
        <p className="mb-4 text-lg text-center">Made this website with</p>
        <div className="flex flex-wrap justify-center gap-4">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-full mb-4 text-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 sm:mb-0"
            >
              <Image
                className="z-50 h-12 mx-auto mb-2 sm:h-16"
                src={icon}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MadeWith;

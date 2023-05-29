import Image from "next/image";
import axiosIcon from "public/svg/axios.svg";
import eslintIcon from "public/svg/eslint.svg";
import framerIcon from "public/svg/framer.svg";
import nextjsIcon from "public/svg/nextjs.svg";
import prettierIcon from "public/svg/prettier.svg";
import reactIcon from "public/svg/react.svg";
import tailwindcssIcon from "public/svg/tailwindcss.svg";
import typescriptIcon from "public/svg/typescript-icon.svg";

const icons = [
  reactIcon,
  nextjsIcon,
  tailwindcssIcon,
  typescriptIcon,
  // axiosIcon,
  eslintIcon,
  framerIcon,
  prettierIcon,
];

const MadeWith = () => {
  return (
    <div className="flex justify-center">
      <div className="container z-20 px-4 py-6 mx-auto mt-8 bg-white shadow-lg bg-slate-100/90 backdrop-blur-[2px] dark:bg-background/90 sm:px-6 sm:py-8 md:py-10 md:px-8 lg:px-10">
        <div className="flex flex-wrap justify-center">
          <p className="w-full mb-4 text-center">Made this website with</p>
          {icons.map((icon, index) => (
            <div
              key={index}
              className="z-50 w-1/2 mb-4 text-center sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <Image className="h-16 mx-auto" src={icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MadeWith;

import { firacode } from "@/public/fonts/fonts";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const HeaderMobile = () => {
  return (
    <>
      <div
        className={`${firacode.className} text-xs md:text-base cursor-pointer font-light`}
      >
        <HiOutlineMenuAlt1 />
      </div>
    </>
  );
};

export default HeaderMobile;

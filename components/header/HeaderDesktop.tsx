import Link from "next/link";
import Buttons from "./Buttons";
import { AiOutlineExperiment } from "react-icons/ai";
import { RiContactsBook2Line, RiLayout2Line } from "react-icons/ri";
import { HiOutlineAnnotation, HiOutlineHome } from "react-icons/hi";
import { motion as m } from "framer-motion";

const HeaderDesktop = () => {
  return (
    <>
      <m.ul
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.7,
          delayChildren: 0.3,
          staggerChildren: 0.05,
        }}
        className="flex gap-5 text-2xl font-bold headerDesktop "
      >
        <Link href={"#home"}>
          <Buttons icon={<HiOutlineHome />} context={"home"} />
        </Link>
        <Link href={"#experience"}>
          <Buttons icon={<AiOutlineExperiment />} context={"experience"} />
        </Link>
        <Link href={"#project"}>
          <Buttons icon={<RiLayout2Line />} context={"project"} />
        </Link>
        <Link href={"/blog"}>
          <Buttons icon={<HiOutlineAnnotation />} context={"blog"} />
        </Link>
        <Link href={"/contact"}>
          <Buttons icon={<RiContactsBook2Line />} context={"contact"} />
        </Link>
      </m.ul>
    </>
  );
};

export default HeaderDesktop;

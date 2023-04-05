import Link from "next/link";
import Buttons from "./Buttons";
import { AiOutlineExperiment } from "react-icons/ai";
import { RiContactsBook2Line, RiLayout2Line } from "react-icons/ri";
import { HiOutlineAnnotation, HiOutlineHome } from "react-icons/hi";

const HeaderDesktop = () => {
  return (
    <>
      <div className="headerDesktop flex gap-5 text-2xl font-bold ">
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
      </div>
    </>
  );
};

export default HeaderDesktop;

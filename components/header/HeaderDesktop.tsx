import Link from "next/link";
import Buttons from "./Buttons";

const HeaderDesktop = () => {
  return (
    <>
      <div className="flex gap-5 text-2xl font-bold rightSideHeader text-brand_main-500">
        <Link href={"#home"}>
          <Buttons context={"home"} />
        </Link>
        <Link href={"#experience"}>
          <Buttons context={"experience"} />
        </Link>
        <Link href={"#project"}>
          <Buttons context={"project"} />
        </Link>
        <Link href={"#blog"}>
          <Buttons context={"blog"} />
        </Link>
        <Link href={"#contact"}>
          <Buttons context={"contact"} />
        </Link>
      </div>
    </>
  );
};

export default HeaderDesktop;

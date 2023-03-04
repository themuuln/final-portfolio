import Buttons from "./Buttons";
import Link from "next/link";

const HeaderRight = () => {
  return (
    <>
      <div className="flex gap-5 text-2xl font-bold rightSideHeader text-brand_main-500">
        <Link href={"#home"}>
          <Buttons context={"home"} />
        </Link>
        <Link href={"/experience"}>
          <Buttons context={"experience"} />
        </Link>
        <Link href={"/work"}>
          <Buttons context={"work"} />
        </Link>
        <Link href={"/blog"}>
          <Buttons context={"blog"} />
        </Link>
        <Link href={"/contact"}>
          <Buttons context={"contact"} />
        </Link>
      </div>
    </>
  );
};

export default HeaderRight;

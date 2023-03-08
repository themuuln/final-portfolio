import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

const HeaderMobile = dynamic(() => import("./HeaderMobile"));
const HeaderDesktop = dynamic(() => import("./HeaderDesktop"));

const HeaderRight = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });
  return isPhone ? <HeaderMobile /> : <HeaderDesktop />;
};

export default HeaderRight;

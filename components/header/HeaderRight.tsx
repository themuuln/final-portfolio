import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

const HeaderMobile = dynamic(() => import("./HeaderMobile"), { ssr: false });
const HeaderDesktop = dynamic(() => import("./HeaderDesktop"), { ssr: false });

const HeaderRight = () => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return isPortrait ? <HeaderMobile /> : <HeaderDesktop />;
};

export default HeaderRight;

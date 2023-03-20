import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

const HeaderMobile = dynamic(() => import("./HeaderMobile"), { ssr: false });
const HeaderDesktop = dynamic(() => import("./HeaderDesktop"), { ssr: false });

const HeaderRight = () => {
  // return <HeaderDesktop />;
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return isPortrait ? <HeaderMobile /> : <HeaderDesktop />;
};

export default HeaderRight;

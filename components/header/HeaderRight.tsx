import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

const HeaderMobile = dynamic(() => import("./HeaderMobile"), { ssr: false }); // Dynamically import HeaderMobile component with SSR (Server-Side Rendering) disabled
const HeaderDesktop = dynamic(() => import("./HeaderDesktop"), { ssr: false }); // Dynamically import HeaderDesktop component with SSR (Server-Side Rendering) disabled

const HeaderRight = () => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" }); // Check if the current screen orientation is portrait
  return isPortrait ? <HeaderMobile /> : <HeaderDesktop />; // Render HeaderMobile or HeaderDesktop component based on screen orientation
};

export default HeaderRight;

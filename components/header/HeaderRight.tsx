import { useMediaQuery } from "react-responsive";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const HeaderRight = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });
  return isPhone ? <HeaderMobile /> : <HeaderDesktop />;
};

export default HeaderRight;

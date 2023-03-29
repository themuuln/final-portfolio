import { createContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const HoverTypeContext = createContext({
  hoverType: <FiArrowUpRight />,
  setHoverType: (hoverType: any) => {},
});

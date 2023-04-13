import { createContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const HoverTypeContext = createContext({
  setHoverType: (hoverType: any) => {},
});

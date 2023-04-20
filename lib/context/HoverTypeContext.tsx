import { createContext } from "react";

export const HoverTypeContext = createContext({
  setHoverType: (hoverType: any) => {},
});

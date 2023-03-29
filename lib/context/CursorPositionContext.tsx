import { createContext } from "react";

type CursorPositionContextType = {
  x: number;
  y: number;
  setCursorPosition: (x: number, y: number) => void;
};

export const CursorPositionContext = createContext<CursorPositionContextType>({
  x: 0,
  y: 0,
  setCursorPosition: () => {},
});

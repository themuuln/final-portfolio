import { createContext } from "react";

const CursorContext = createContext({
  textEnter: () => {},
  textLeave: () => {},
});

export default CursorContext;

// const [hoverType, setHoverType] = useState(<FiArrowUpRight />);
import { createContext } from "react";

const HoverChangeContext = createContext({
  textEnter: () => {},
  textLeave: () => {},
});

export default HoverChangeContext;

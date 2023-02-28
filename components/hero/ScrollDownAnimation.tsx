import { IconContext } from "react-icons";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const ScrollDownAnimation = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "3em" }}>
        <HiOutlineChevronDoubleDown className="absolute bottom-4 animate-bounce select-none" />
      </IconContext.Provider>
    </>
  );
};

export default ScrollDownAnimation;

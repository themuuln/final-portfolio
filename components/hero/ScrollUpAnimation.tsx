import { IconContext } from "react-icons";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const ScrollUpAnimation = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "3em" }}>
        <HiOutlineChevronDoubleUp className="fixed bottom-4 right-4 rounded-full border-2 border-brand_main-500 p-2" />
      </IconContext.Provider>
    </>
  );
};

export default ScrollUpAnimation;

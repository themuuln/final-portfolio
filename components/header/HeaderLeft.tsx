import { IconContext } from "react-icons";
import { AiOutlineCode } from "react-icons/ai";

type Props = {
  context: String;
};
const HeaderLeft = ({ context }: Props) => {
  return (
    <>
      <div className="leftSideHeader flex items-center gap-1 text-xl font-bold text-brand_main-500">
        <IconContext.Provider value={{ size: "2em" }}>
          <AiOutlineCode />
        </IconContext.Provider>
        {context}
      </div>
    </>
  );
};

export default HeaderLeft;

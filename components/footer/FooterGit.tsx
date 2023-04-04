import { useContext } from "react";
import { motion as m } from "framer-motion";
import CursorContext from "@/lib/context/context";
import { firacode } from "@/public/fonts/fonts";

const FooterGit = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const handleMouseEnter = () => {
    textEnter();
  };
  const handleMouseLeave = () => {
    textLeave();
  };
  return (
    <>
      <div className={`${firacode.className} mb-5 font-light md:mb-10`}>
        <div className={`flex w-full justify-center`}>
          <a
            href="http://github.com/themuuln"
            target={"_blank"}
            rel="noreferrer"
          >
            Designed & Built by{" "}
            <m.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=""
            >
              Themuuln
            </m.span>
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterGit;

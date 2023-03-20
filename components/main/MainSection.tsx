import { firacode } from "@/public/fonts/fonts";
import "@/public/css/mainSection.css";

const MainSection = () => {
  return (
    <>
      <div
        id="main"
        className="flex flex-col items-center justify-center h-screen "
      >
        <div className="container flex justify-center w-full gap-20">
          <div>
            <div className="mb-2 space-y-1">
              <h2 className={`question `}>
                WHAT I <span className="highlighted">DO?</span>
              </h2>
              <p className="answer ">
                I Design & Build Intro Website for Companies.
              </p>
            </div>
            <div className="mb-2 space-y-1">
              <h2 className={`question`}>
                WHY CHOOSE <span className="highlighted">ME?</span>
              </h2>
              <p className="answer ">I do my work from my soul.</p>
            </div>
            <div className="mb-2 space-y-1">
              <h2 className={`question`}>
                <span className="highlighted">MY</span> PHILOSOPHY?
              </h2>
              <p className="answer ">
                Every little detail is so important to me.
              </p>
            </div>
          </div>
          <div className={`${firacode.className} space-y-2`}>
            <h2 className={`text-4xl`}>Skills</h2>
            <ul className="space-y-1 text-xl">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>SASS / SCSS</li>
              <li>ChakraUI</li>
              <li>Framer-Motion</li>
              <li>Neovim</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;

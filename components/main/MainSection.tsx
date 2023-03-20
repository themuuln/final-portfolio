import { firacode } from "@/public/fonts/fonts";
import "@/public/css/mainSection.css";

const MainSection = () => {
  return (
    <>
      <div
        id="main"
        className="flex h-screen flex-col items-center justify-center "
      >
        <div className="container flex w-full justify-center gap-20">
          <div className="left">
            <div>
              <h2 className={`question`}>
                WHAT I<span className="highlighted">DO?</span>
              </h2>
              <p className="answer ">
                I Design & Build Intro Website for Companies.
              </p>
            </div>
            <div>
              <h2 className={`question`}>
                WHY CHOOSE
                <span className="highlighted">ME?</span>
              </h2>
              <p className="answer ">I do my work from my soul.</p>
            </div>
            <div>
              <h2 className={`question`}>
                <span className="highlighted">MY</span>
                PHILOSOPHY?
              </h2>

              <p className="answer ">
                Every little detail is so important to me.
              </p>
            </div>
          </div>
          <div className={`${firacode.className}`}>
            <h2 className={`text-4xl`}>Skills</h2>
            <p>JavaScript (ES6+)</p>
            <p>React</p>
            <p>Next.js</p>
            <p>TypeScript</p>
            <p>TailwindCSS</p>
            <p>SASS / SCSS</p>
            <p>ChakraUI</p>
            <p>Framer-Motion</p>
            <p>Neovim</p>
            <p>Git</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;

import { firacode } from "@/public/fonts/fonts";

const Qna = () => {
  return (
    <>
      <div
        id="main"
        className="flex flex-col items-center justify-center h-screen "
      >
        <div className="container w-full space-y-8 md:flex md:justify-around ">
          <div className={`${firacode.className} space-y-10`}>
            <div className="cardContainer">
              <h2 className={`question`}>
                WHAT I <span className="highlighted">DO?</span>
              </h2>
              <p className="answer">
                I create customized websites that are visually appealing, highly
                functional, and geared towards boosting your online profile,
                branding, and revenue. I leverage the latest web technologies to
                provide tailored digital solutions that cater to your specific
                requirements and objectives.
              </p>
            </div>
            <div className="cardContainer">
              <h2 className={`question`}>
                WHY CHOOSE <span className="highlighted">ME?</span>
              </h2>
              <p className="answer ">
                I specialize in crafting bespoke, visually stunning websites
                that function seamlessly to enhance your online presence, brand
                identity, and revenue streams. With my expertise in the latest
                web technologies, I provide customized digital solutions that
                cater to your unique needs and objectives.
              </p>
            </div>
            <div className="cardContainer">
              <h2 className={`question`}>
                PHILOSOPHY OF <span className="highlighted">MINE</span>
              </h2>
              <p className="answer ">
                I create stunning bespoke websites that enhance your online
                presence, brand identity, and revenue streams. Using the latest
                web technologies, I provide tailored digital solutions to meet
                your unique needs and objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qna;

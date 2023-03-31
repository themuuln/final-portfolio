import "@/public/css/mainSection.css";
import Qna from "./qna/Qna";
import Skills from "./skills/Skills";

const MainSection = () => {
  return (
    <>
      <Qna />
      <Skills />
      <div className="container">
        <div className="mx-10 grid h-screen grid-rows-2 gap-10 py-10 md:grid-cols-2 ">
          <div className="informationCard col-start-1 col-end-3">1</div>
          <div className="informationCard col-start-1 col-end-2">2</div>
          <div className="informationCard col-start-2 col-end-3">3</div>
        </div>
      </div>
    </>
  );
};

export default MainSection;

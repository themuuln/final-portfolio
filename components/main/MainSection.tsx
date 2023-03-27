import "@/public/css/mainSection.css";
import Qna from "./qna/Qna";
import Skills from "./skills/Skills";

const MainSection = () => {
  return (
    <>
      <Qna />
      <Skills />
      <div className="container">
        <div className="grid h-screen grid-cols-2 grid-rows-2 gap-10 py-10 ">
          <div className="col-start-1 col-end-3 informationCard">1</div>
          <div className="col-start-1 col-end-2 informationCard">2</div>
          <div className="col-start-2 col-end-3 informationCard">3</div>
        </div>
      </div>
    </>
  );
};

export default MainSection;

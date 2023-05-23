import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import ProjectBanner from "./Projects/ProjectBanner";
import ProjectsData from "./Projects/ProjectsData";
const VerticalLine = dynamic(() => import("../VerticalLine"), { ssr: false });

const ProjectsSection = () => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" }); // Check if the current screen orientation is portrait
  return (
    <>
      <div className="w-full h-screen ">
        <div className="flex w-full h-fit">
          <div className="container flex justify-center mt-[80px] ">
            {isPortrait ? null : <VerticalLine element={"projects"} />}
            <div className="">
              <h2>RECENT WORKS</h2>
              {ProjectsData.map((p) => {
                return (
                  <ProjectBanner name={p.name} href={p.href} key={p.name} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;

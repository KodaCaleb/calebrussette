import { useRef, useState } from "react";
import { projectData } from "../assets/projectData.js";
import ProjectCard from "./projectCard.js";
import { TypeAnimation } from "react-type-animation";

export default function ProjectSelector() {
  const [currentProject, setCurrentProject] = useState(null);
  const ref = useRef(null);

  const handleSetCurrentProject = (projectId) => {
    const project = projectData.find((data) => data.id === projectId);
    setCurrentProject(project);
    ref.current.scrollIntoView({ behavior: "smooth" });

  };

  return (
    <div className=" justify-center p-4 items-center flex flex-col-reverse md:flex-row w-auto sm:w-full h-auto md:h-full">
      <div ref={ref} className=" justify-center flex h-full m-1 md:w-1/2 ">
        {currentProject ? (
          <ProjectCard project={currentProject} isVisable={true} />
        ) : (
          <div className="self-center justify-center flex-row flex h-1/2 w-full">
            <div className="h-2/5 sm:w-2/3 w-full sm:flex text-start self-center hidden border-b pb-12 text-themeWhite sm:text-5xl text-2xl font-thin flex-col justify-center">
                <TypeAnimation
                sequence={["Here's what i've been working on :"]}
                speed={50}
                />
            </div>
          </div>
        )}
      </div>
      <div className=" md:justify-end justify-center flex h-full font-thin font m-1 font w-full md:w-1/2">
        <div className="flex w-1/2 ">
          <div className="flex self-center sm:justify-evenly justify-center md:mr-8 mb-20 md:mb-0 text-themeWhite flex-col w-full h-2/3">
            {projectData.map((data) => {
              const buttonClass = data.id === currentProject?.id ? "  rounded-r-2xl dropshadow-2xl border-themeWhite border-b border-t sm:font-normal sm:text-themeBlack border-opacity-30 gradient-background  opacity-100" : "";
              return (
                <button
                  onClick={() => handleSetCurrentProject(data.id)}
                  key={data.id}
                  className={`self-end hover:opacity-80 m-2 md:self-end text-xl p-3 w-full text-center md:text-end ${buttonClass}`}
                >
                  {data.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

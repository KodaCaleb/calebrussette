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
    <div className=" justify-center p-4 items-center flex flex-col-reverse sm:flex-row w-auto sm:w-full h-auto sm:h-full">
      <div ref={ref} className=" justify-center flex h-full m-1 sm:w-1/2 ">
        {currentProject ? (
          <ProjectCard project={currentProject} />
        ) : (
          <div className="self-center justify-center flex-row flex h-1/2 w-full">
            <div className="h-2/5 sm:w-2/3 w-full sm:flex text-start self-center hidden text-themeWhite sm:text-5xl text-2xl font-thin flex-col justify-center">
                <TypeAnimation
                sequence={["Here's what i've been working on :"]}
                speed={50}
                />
            </div>
          </div>
        )}
      </div>
      <div className=" sm:justify-end justify-center flex h-full m-1 w-full sm:w-1/2">
        <div className="flex w-1/2 ">
          <div className="flex self-center sm:justify-evenly justify-center sm:mr-8  text-themeWhite flex-col w-full h-2/3">
            {projectData.map((data) => {
              return (
                <button
                  onClick={() => handleSetCurrentProject(data.id)}
                  key={data.id}
                  className="self-end border rounded-2xl bg-themeBlacker m-2 sm:self-end text-xl p-3 w-full text-end opacity-80 hover:opacity-100 font-thin"
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

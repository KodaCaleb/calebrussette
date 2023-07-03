import { useState } from "react";
import { projectData } from "../assets/projectData.js";
import ProjectCard from "./projectCard.js";
import { TypeAnimation } from "react-type-animation";

export default function ProjectSelector() {
  const [currentProject, setCurrentProject] = useState(null);

  const handleSetCurrentProject = (projectId) => {
    const project = projectData.find((data) => data.id === projectId);
    setCurrentProject(project);
  };

  return (
    <div className=" justify-center p-4 flex  w-full h-full">
      <div className=" justify-center flex h-full m-1 w-1/2">
        {currentProject ? (
          <ProjectCard project={currentProject} />
        ) : (
          <div className="self-center justify-center flex-row flex h-1/2 w-full">
            <div className="h-2/5 w-2/3 flex text-start text-themeWhite text-5xl font-thin flex-col justify-center">
                <TypeAnimation
                sequence={["Here's what i've been working on"]}
                speed={50}
                />
            </div>
          </div>
        )}
      </div>
      <div className="justify-center flex h-full m-1 w-1/2">
        <div className="flex w-1/2 ">
          <div className="flex self-center justify-evenly text-themeWhite flex-col w-full h-2/3">
            {projectData.map((data) => {
              return (
                <button
                  onClick={() => handleSetCurrentProject(data.id)}
                  key={data.id}
                  className="self-end font-thin"
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

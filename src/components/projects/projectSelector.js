import { useState } from "react";
import { projectData } from "../assets/projectData.js";



export default function ProjectSelector() {

    const [currentProject, setCurrentProject] = useState(null);

    const handleSetCurrentProject = (projectId) => {
        const project = projectData.find((data) => data.id === projectId);
        setCurrentProject(project);
    };



  return (
    <div className=" justify-center p-4 flex  w-full h-full">
      <div className=" justify-center flex h-full m-1 w-1/2">
        <div className="  ml-2 text-themeWhite self-center justify-center flex-col flex h-4/5 w-full">
            <div className="h-2/5 flex flex-col ml-14 justify-evenly">
                
                <h1 className="text-3xl">
                    {currentProject?.title}
                </h1>
                <h2 className="">
                    {currentProject?.description}
                </h2>
            </div>
        </div>
      </div>
      <div className="justify-center flex h-full m-1 w-1/2">
        <div className="flex w-1/2 ">
          <div className="flex self-center justify-evenly text-themeWhite flex-col w-full h-2/3">
            { projectData.map((data) => {
                return ( 
                    <button 
                    onClick={() => handleSetCurrentProject(data.id)}
                    key={data.id}
                    className="self-end">
                        {data.title}
                    </button>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

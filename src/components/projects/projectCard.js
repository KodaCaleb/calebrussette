


export default function ProjectCard({ project }) {
    const currentProject = project;
    return (
        <div className="  ml-2 text-themeWhite border-4 self-center justify-center flex-col flex h-4/5 w-full">
          <div className="h-2/5 flex border-2 flex-col justify-evenly">
            <h1 className="text-3xl">{currentProject?.title}</h1>
            <h2 className="">{currentProject?.description}</h2>
          </div>
        </div>
    );
}
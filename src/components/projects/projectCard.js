


export default function ProjectCard({ project }) {
    const currentProject = project;
    return (
        <div className="  ml-2 text-themeWhite card-background max-h-full border-themeBlack rounded-xl self-center justify-center flex-col flex h-auto  sm:w-auto">
          <div className=" h-auto m-2 rounded-xl drop-shadow-2xl max-h-fit flex w-auto bg-themeBlack self-center flex-col justify-evenly">
            <h1 className="text-3xl m-8">{currentProject?.title}</h1>
            <h2 className="m-8 font-extralight">{currentProject?.description}</h2>
            <h2 className=" m-8"> {currentProject?.technologies}</h2>
          </div>
        </div>
    );
}
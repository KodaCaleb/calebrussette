import { SkillsData } from "../assets/skillsData";



export default function Skills() {
    return (
        <div className=" h-3/4 flex w-3/4 justify-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-themeWhite text-3xl">Skills</h1>
          <div className="text-themeGrey flex-row mt-4 text-6xl flex h-full">
            {SkillsData.map((skill) => (
            <div 
                key={skill.id}
                className="flex flex-col items-center justify-center "
                >
                {skill.icon}
                <h1 className="text-sm">{skill.name}</h1>
                {/* skills data goes here */}
            </div>
            ))}
          </div>
        </div>
      </div>

    )
}

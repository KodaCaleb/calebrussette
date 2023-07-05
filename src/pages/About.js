import Headshot from "../components/about/headshot";
import SkillsBioSwitcher from "../components/about/skillsBioSwitcher";

export default function About () {
    return (
        <div className="h-full w-full flex-col sm:flex-row flex">
            <Headshot />
            <SkillsBioSwitcher />
        </div>
    )
}
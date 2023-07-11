import Headshot from "../components/about/headshot";
import SkillsBioSwitcher from "../components/about/skillsBioSwitcher";

export default function About() {
  return (
    <div className="h-full w-full flex-col sm:flex-row flex">
      <div className="flex-shrink-0 max-w-lg">
        <Headshot />
      </div>
      <div className="flex h-full w-full flex-col justify-center">
        <SkillsBioSwitcher />
      </div>
    </div>
  );
}

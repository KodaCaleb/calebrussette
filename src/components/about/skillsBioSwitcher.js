import { useState } from "react";
import Bio from "./bioSection";
import Skills from "./skills";

export default function SkillsBioSwitcher() {
  const [showBio, setShowBio] = useState(true);

  const handleToggle = () => {
    setShowBio(!showBio);
  };

  return (
    <div className="h-full flex flex-col justify-evenly items-center w-full">
      {showBio ? <Bio /> : <Skills />}
      <div className="mb-8 mt-4">
        <button
          onClick={handleToggle}
          disabled={showBio}
          className={`font-extralight drop-shadow-xl  text-themeBlack pr-8 pl-8 pt-2 pb-2 rounded-l-lg ${
            showBio ? "gradient-background border" : "text-themeWhite text-opacity-80 hover:text-opacity-100"
          }`}
        >
          Bio
        </button>
        <button
          onClick={handleToggle}
          disabled={!showBio}
          className={`font-extralight drop-shadow-xl  text-themeBlack pr-8 pl-8 pt-2 pb-2 rounded-r-lg ${
            !showBio ? "gradient-background border " : "text-themeWhite text-opacity-80 hover:text-opacity-100"
          }`}
        >
          Skills
        </button>
      </div>
    </div>
  );
}


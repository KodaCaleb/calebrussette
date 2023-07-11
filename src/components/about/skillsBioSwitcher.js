import { useState } from "react";
import Bio from "./bioSection";
import Skills from "./skills";

export default function SkillsBioSwitcher() {
  const [showBio, setShowBio] = useState(true);

  const handleToggle = () => {
    setShowBio(!showBio);
  };

  return (
    <div className="h-full flex flex-col justify-between items-center w-full">
      {showBio ? <Bio /> : <Skills />}
      <div className="mb-8">
        <button
          onClick={handleToggle}
          disabled={showBio}
          className={`font-extralight drop-shadow-xl m-4 text-themeWhite border-themeWhite border-opacity-40 border-2 pr-8 pl-8 pt-2 pb-2 rounded-lg hover:border-themeWhite hover:border-opacity-90 ${
            showBio ? "border-themePurple" : ""
          }`}
        >
          Bio
        </button>
        <button
          onClick={handleToggle}
          disabled={!showBio}
          className={`font-extralight drop-shadow-xl m-4 text-themeWhite border-themeWhite border-opacity-40 border-2 pr-8 pl-8 pt-2 pb-2 rounded-lg hover:border-themeWhite hover:border-opacity-90 ${
            !showBio ? "border-themePurple" : ""
          }`}
        >
          Skills
        </button>
      </div>
    </div>
  );
}


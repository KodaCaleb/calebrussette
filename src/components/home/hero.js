import { TypeAnimation } from "react-type-animation";
import DownloadCV from "../buttons/downloadCV";

export default function Hero() {
  return (
    <div className="  sm:ml-28 ml-20 p-2  z-50 w-2/5 flex-col  text-themeWhite font-extralight flex justify-center h-full">
      <h1 className=" text-7xl mb-6">
        Hi, I'm{" "}
        <span className=" rounded-xl drop-shadow-md border pl-1 pr-2 border-themeBlack border-opacity-40 gradient-background text-themeBlack">
          {" "}
          Caleb
        </span>
      </h1>
      <h1 className=" text-xl mb-6 mt-6">
        <TypeAnimation 
          sequence={['Full-stack Web Developer specialized in building exceptional digital experiences.']}
          speed={70}
        />
      </h1>
      <div className="mt-6 ">
        <DownloadCV />
      </div>
    </div>
  );
}

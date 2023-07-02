import { Link } from "react-router-dom";
import Social from "./social";

export default function Nav() {
  return (
    <div>
      <div className="flex justify-end mb-4 mr-4 ml-8 h-20 border border-themeWhite border-opacity-50 rounded-bl-3xl rounded-tr-3xl mt-4 drop-shadow-xl gradient-background">
        <div className=" flex justify-evenly w-3/5 text-lg font-thin text-themeBlack mr-3">
          <div className="flex self-center  justify-center">
            <Link to={"/"}>
              <h1 className="">Home</h1>
            </Link>
          </div>
          <div className="flex self-center  justify-center">
            <Link to={"/projects"}>
              <h1 className="">Projects</h1>
            </Link>
          </div>
          <div className="flex self-center justify-center">
            <Link to={"/about"}>
              <h1>About Me</h1>
            </Link>
          </div>
          <div className="flex self-center justify-center">
            <Link to={"/contact"}>
              <h1>Contact</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="  z-20 gradient-background border self-center border-themeWhite border-opacity-50 drop-shadow-lg rounded-tl-xl ml-3 w-4/5 h-4"></div>
        <Social />
      </div>
    </div>
  );
}

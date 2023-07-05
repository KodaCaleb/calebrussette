import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <div className="flex-col">
      <div className="flex justify-end mb-1 mr-4 sm:ml-8 ml-4 h-16 border border-themeBlack border-opacity-50 rounded-bl-3xl rounded-tr-3xl mt-4 drop-shadow-xl gradient-background">
        <div className="flex justify-evenly w-full sm:w-3/5  sm:font-light  text-themeWhite text-opacity-80 sm:text-themeBlack sm:text-opacity-100 mr-3">
          <div className="flex self-center justify-center">
            <Link to={"/"} className={location.pathname === "/" ? "text-themeWhite" : ""}>
              <h1 className="hover:text-themeWhite">Home</h1>
            </Link>
          </div>
          <div className="flex self-center  justify-center">
            <Link to={"/projects"} className={location.pathname === "/projects" ? "text-themeWhite" : ""}>
              <h1 className="hover:text-themeWhite">Projects</h1>
            </Link>
          </div>
          <div className="flex self-center justify-center">
            <Link to={"/about"} className={location.pathname === "/about" ? "text-themeWhite" : ""}>
              <h1 className="hover:text-themeWhite">About Me</h1>
            </Link>
          </div>
          <div className="flex self-center justify-center">
            <Link to={"/contact"} className={location.pathname === "/contact" ? "text-themeWhite" : ""}>
              <h1 className="hover:text-themeWhite">Contact</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

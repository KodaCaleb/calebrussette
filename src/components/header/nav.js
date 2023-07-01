
import { Link } from "react-router-dom";

export default function Nav() {


    return (
      <div className="flex mb-4 mr-4 ml-8 h-20 rounded-bl-3xl rounded-tr-3xl mt-4 drop-shadow-xl bg-gradient-to-r from-themePurple to-themeBlue">
        <div className="w-full h-full grid grid-cols-2">
          {/* Column 1 */}
          <div className='flex justify-start'>
          </div>
          
          {/* Column 2 */}
          <div className="grid grid-cols-4 text-lg font-thin text-themeBlack mr-3">
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
      </div>
    );
  }
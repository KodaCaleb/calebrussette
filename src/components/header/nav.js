import {ReactComponent as ReactLogo} from '../assets/PortfolioLOGO.svg';

export default function Nav() {


    return (
      <div className="flex nav mb-4 mr-4 ml-8 h-24 rounded-bl-3xl rounded-tr-3xl mt-4 drop-shadow-xl bg-gradient-to-r from-themeYellowDark to-themeYellow">
        <div className="w-full h-full grid grid-cols-2">
          {/* Column 1 */}
          <div className=" w-24 h-24 self-center flex">
            <ReactLogo />
          </div>
          
          {/* Column 2 */}
          <div className="grid grid-cols-3 text-xl text-themeBlack mr-3">
            <div className="flex self-center  justify-center">
                <h1 className="">Projects</h1>
            </div>
            <div className="flex self-center justify-center">
                <h1>About Me</h1>
            </div>
            <div className="flex self-center justify-center">
                <h1>Contact</h1>
            </div>

          </div>
        </div>
      </div>
    );
  }
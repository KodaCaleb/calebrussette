export default function Home() {
    return (
        <div className="w-screen h-full flex-col">
            <div className="  ml-28 p-2  z-50 w-2/5 flex-col  text-themeWhite font-extralight flex justify-center h-full">
                <h1 className=" text-7xl mb-6">
                    Hi, i'm{" "}
                    <span className=" rounded-xl drop-shadow-md border pl-1 pr-1 border-themeWhite border-opacity-30 gradient-background text-themeBlack">
                    {" "}
                    Caleb
                    </span>
                </h1>
                <h1 className=" text-xl mb-6 mt-6">
                    Full-stack Web Developer specialized in building exceptional digital
                    experiences.
                </h1>
                <div className="mt-6 text-themeWhite">
                    <button className="gradient-background border-themeWhite border-opacity-50 border p-2 rounded-lg  hover:border-opacity-90 ">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
}

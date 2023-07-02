export default function Home() {
    return (
        <div className="w-screen h-full flex-col">
            <div className="  ml-28 p-2 mt-16 z-50 w-1/3 flex-col  text-themeWhite font-extralight flex justify-between h-full">
                <h1 className=" text-7xl">
                    Hi, i'm{" "}
                    <span className=" rounded-xl drop-shadow-md border border-themeWhite border-opacity-20 gradient-background text-themeBlack">
                    {" "}
                    Caleb
                    </span>
                </h1>
                <h1 className=" text-xl mt-4">
                    Full-stack Web Developer specialized in building exceptional digital
                    experiences.
                </h1>
                <div className="mt-6 text-themeWhite">
                    <button className="gradient-background border-themeWhite border-opacity-50 border p-2 rounded-lg">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
}

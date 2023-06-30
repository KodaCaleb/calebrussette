import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <div className="w-screen flex h-screen flex-col justify-between">
            <div className="w-full flex h-screen flex-col">
                <div className="flex nav mb-4 mr-4 ml-8 h-24 rounded-bl-3xl rounded-tr-3xl mt-4 drop-shadow-xl test">
                    
                    <div className="test2 place-self-center ml-20 h-1 mt-14 w-full"></div>
                </div>
                <div className=" test ml-8 w-4/5 h-3/5">
                    <Outlet />
                    <div className="test2 -rotate-45 w-20 h-72 mt-48"></div>
                </div>
            </div>

        </div>
        </>
    )
}
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <div className="w-full flex h-screen flex-col justify-between">
            <div className="w-full flex h-screen flex-col">
                <div className="flex nav w-4/5 mb-4 ml-8 h-1/6 rounded-bl-2xl rounded-tr-2xl mt-4 drop-shadow-xl test">
                    nav
                </div>
                <div className=" content test rounded-tl-lg h-3/5">
                    <Outlet />
                </div>
            </div>

        </div>
        </>
    )
}
import { Outlet } from "react-router-dom";
import Nav from "../components/header/nav";

export default function Layout() {
    return (
        <>
        <div className="w-screen flex h-screen flex-col justify-between">
            <div className="w-full flex h-screen flex-col">
                <Nav/>
                <div className=" bg-gradient-to-r from-themeYellowDark to-themeYellow ml-8 w-4/5 h-3/5">
                    <Outlet />
                    <div className="test2 -rotate-45 w-20 h-72 mt-48"></div>
                </div>
            </div>

        </div>
        </>
    )
}
import { Outlet } from "react-router-dom";
import Nav from "../components/header/nav";

export default function Layout() {
    return (
        <>
        <div className="w-screen flex h-screen flex-col justify-between">
            <div className="w-full flex h-screen flex-col">
                <Nav/>
                <div className=" bg-gradient-to-r z-20 from-themePurple to-themeBlue ml-3 w-4/5 h-3/5">
                    <div className=" absolute w-11/12 h-3/4 ml-2 mt-2 flex justify-start rounded-m test2">
                        <Outlet />
                    </div>
                    <div className=" bg-themeBlack -rotate-45 z-10 w-20 h-20 -translate-x-8 mt-48"></div>
                </div>
            </div>

        </div>
        </>
    )
}
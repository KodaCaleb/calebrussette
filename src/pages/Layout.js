import { Outlet } from "react-router-dom";
import Nav from "../components/header/nav";

export default function Layout() {
    return (
        <>
        <div className="w-full flex h-screen flex-col justify-between">
            <div className="w-full flex h-full flex-col">
                <Nav />
                <div className=" w-full h-full mt-2 flex rounded-m bg-themeBlack">
                    <Outlet />
                </div>
            </div>
        </div>
        </>
    );
}

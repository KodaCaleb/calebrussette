import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Social() {
    return (
        <div className=" flex text-themeWhite bg-themeBlack right-4 z-50 h-10 w-1/6 justify-evenly ">
            <a href="https://github.com/KodaCaleb" target="_blank" rel="noreferrer"  className="self-center opacity-60 hover:opacity-100 ">
                <FaGithub className="h-7 w-auto" />
            </a>
            <a href="https://www.linkedin.com/in/caleb-russette/" target="_blank" rel="noreferrer" className="self-center opacity-60 hover:opacity-100">
                <FaLinkedin className="h-7 w-auto" />
            </a>
            <a href="https://www.instagram.com/calebrussette/" target="_blank" rel="noreferrer" className="self-center opacity-60 hover:opacity-100">
                <FaInstagram className="h-7 w-auto" />
            </a>
        </div>
    );
}

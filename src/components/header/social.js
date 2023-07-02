import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Social() {
    return (
        <div className=" flex text-themeWhite bg-themeBlack right-4 z-50 h-10 w-1/6 justify-evenly ">
            <a href="https://github.com/KodaCaleb" className="self-center">
                <FaGithub className="h-6 w-auto" />
            </a>
            <a href="https://www.linkedin.com/in/caleb-russette/" className="self-center">
                <FaLinkedin className="h-6 w-auto" />
            </a>
            <a href="https://www.instagram.com/calebrussette/" className="self-center">
                <FaInstagram className="h-6 w-auto" />
            </a>
        </div>
    );
}

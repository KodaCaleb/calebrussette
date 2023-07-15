import { TypeAnimation } from "react-type-animation";
import ContactForm from "../components/contact/contactForm";

export default function Contact() {
    return (
        <div className="w-full h-full flex flex-col sm:flex-row">
            <div className="sm:w-1/2 w-full h-full flex">
                <div className="self-center w-full h-auto flex justify-center items-start text-3xl sm:text-5xl p-10 sm:p-20 text-themeWhite font-extralight ">
                    <TypeAnimation
                    sequence={["Let's build something great together!"]}
                    speed={50}
                     />

                </div>
            </div>
            <ContactForm />
        </div>
    )
}
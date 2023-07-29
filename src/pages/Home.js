import Hero from "../components/home/hero";
import Quotes from "../components/home/quotes";

export default function Home() {
    return (
        <div className="w-screen h-full flex flex-row">
            <Hero />
            <Quotes />
        </div>
    );
}

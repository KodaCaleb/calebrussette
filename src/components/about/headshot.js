import { useEffect, useState } from "react";
import MyHeadshot from "../assets/Avatar.JPG";

export default function Headshot() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = MyHeadshot;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className="h-full w-full flex flex-row justify-start">
      <div className="sm:h-2/3 sm:w-full h-full w-full flex flex-col justify-start mt-6 items-center p-10 sm:pl-20">
        <img
          src={MyHeadshot}
          className={`max-w-full max-h-full border border-themeBlack flex rounded drop-shadow-2xl ${
            loaded ? "fadeIn" : ""
          }`}
          alt=""
        />
      </div>
    </div>
  );
}

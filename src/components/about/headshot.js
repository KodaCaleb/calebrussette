import { motion } from "framer-motion";

export default function Headshot() {
  return (
    <div className="h-full w-full flex flex-row justify-start">
      <div className="sm:h-2/3 sm:w-full h-full w-full flex flex-col justify-start items-center p-10 sm:pl-20">
        <motion.img
          src="./Avatar.jpg"
          className="max-w-full max-h-full border border-themeBlack flex rounded-3xl drop-shadow-2xl"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </div>
  );
}

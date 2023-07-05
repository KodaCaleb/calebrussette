import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ProjectCard({ project }) {
  const controls = useAnimation();

  useEffect(() => {
    const animateCard = async () => {
      await controls.start({ opacity: 0, x: -100 });
      controls.start({ opacity: 1, x: 0 });
    };

    if (project) {
      animateCard();
    }
  }, [project, controls]);

  return (
    <motion.div
      key={project ? project.id : null}
      initial={{ opacity: 0, x: -100 }}
      animate={controls}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className="md:ml-10 text-themeWhite card-background max-h-full border-themeBlack rounded-xl self-center justify-center flex-col flex h-auto md:w-auto"
    >
      {project && (
        <div className="h-auto m-2 rounded-xl drop-shadow-2xl max-h-fit flex w-auto bg-themeBlack self-center flex-col justify-evenly">
          <h1 className="text-3xl m-8">{project.title}</h1>
          <h2 className="m-8 font-extralight">{project.description}</h2>
          <h2 className="m-8">{project.technologies}</h2>
          <div className="flex-row pr-8 pb-6 flex justify-end">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="gradient-background font-extralight drop-shadow-xl m-4 text-themeWhite border-themeBlack border-opacity-40 border pr-8 pl-8 pt-2 pb-2 rounded-lg hover:border-themeWhite  hover:border-opacity-90 "
            >
              Github
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              className=" font-extralight drop-shadow-xl m-4 text-themeWhite border-themeWhite border-opacity-40 border-2 pr-8 pl-8 pt-2 pb-2 rounded-lg hover:border-themeWhite  hover:border-opacity-90 "
            >
              Live Demo
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
}

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ProjectCard({ project }) {
  const controls = useAnimation();

  useEffect(() => {
    const animateCard = async () => {
      await controls.start({ opacity: 0, y: -100 });
      controls.start({ opacity: 1, y: 0 });
    };

    if (project) {
      animateCard();
    }
  }, [project, controls]);

  return (
    <motion.div
      key={project ? project.id : null}
      initial={{ opacity: 0, y: -100 }}
      animate={controls}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      className="md:ml-2 text-themeWhite card-background max-h-full border-themeBlack rounded-xl self-center justify-center flex-col flex h-auto md:w-auto"
    >
      {project && (
        <div className="h-auto m-2 rounded-xl drop-shadow-2xl max-h-fit flex w-auto bg-themeBlack self-center flex-col justify-evenly">
          <h1 className="text-3xl m-8">{project.title}</h1>
          <h2 className="m-8 font-extralight">{project.description}</h2>
          <h2 className="m-8">{project.technologies}</h2>
        </div>
      )}
    </motion.div>
  );
}

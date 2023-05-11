import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="w-full flex flex-shrink-0 items-center justify-center snap-center flex-col space-y-5 p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="image/fifi.jpg"
                alt="fifi"
              />
              <div className="space-y-10 px-0 md:px-10 max-w6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Case Study
                  </span>{" "}
                  {i + 1} of {projects.length}
                </h4>
                <p className="text-lg text-center md:text-left tracking-widest">
                  Lorem fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip
                  fifi Filip ipsum fifi Filip fifi Filip fifi Filip fifi Filip
                  fifi Filip fifi Filip dolor fifi Filip fifi Filip fifi Filip
                  fifi Filip sit fifi Filip fifi Filip fifi Filip fifi Filip
                  fifi Filip fifi Filip amet
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;

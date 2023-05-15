import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen min-h-[800px] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <div className="w-full flex flex-shrink-0 items-center justify-center snap-center flex-col space-y-5 p-6 md:p-44 h-screen mt-2">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="image/wielechowski.net.jpg"
            alt="fifi"
            className="w-[80%] max-h-[30vh] object-contain rounded-md"
          />
          <div className="space-y-2 md:space-y-10 px-0 md:px-10 max-w6xl">
            <h4 className="text-base md:text-4xl text-center tracking-widest uppercase">
              Project{" "}
              <span className="underline decoration-[#f7ab0a]/50">1</span>
            </h4>
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              WIELECHOWSKI.NET
            </h4>
            <p className="text-sm md:text-lg text-center tracking-widest">
              2 in 1 photography &<br />
              React / TypeScript portfolio.
              <br />
              <br />
              Please refer to the README file on GitHub repository for more
              information.
              <br />
              <br />
              LIVE: <a href="https://wielechowski.net/">www.wielechowski.net</a>
              <br />
              <br />
              GitHub:{" "}
              <a href="https://github.com/faforus/wielechowski.ts">
                faforus/wielechowski.ts
              </a>
            </p>
            <p className="text-sm md:text-lg text-center tracking-widest"></p>
          </div>
        </div>
        <div className="w-full flex flex-shrink-0 items-center justify-center snap-center flex-col space-y-5 p-6 md:p-44 h-screen mt-2">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="image/monopoly.jpg"
            alt="fifi"
            className="w-[80%] max-h-[30vh] object-contain rounded-md"
          />
          <div className="space-y-2 md:space-y-10 px-0 md:px-10 max-w6xl">
            <h4 className="text-base md:text-4xl text-center tracking-widest uppercase">
              Project{" "}
              <span className="underline decoration-[#f7ab0a]/50">2</span>
            </h4>
            <h4 className="text-2xl md:text-4xl font-semibold text-center">
              FIFIPOLY
            </h4>
            <p className="text-sm md:text-lg text-center tracking-widest">
              Monopoly Board Game
              <br />
              <br />
              Please refer to the README file on GitHub repository for more
              information.
              <br />
              <br />
              DEMO: <a href="http://fifipoly.surge.sh/">fifipoly.surge.sh</a>
              <br />
              <br />
              GitHub:{" "}
              <a href="https://github.com/faforus/monopoly">faforus/monopoly</a>
            </p>
            <p className="text-sm md:text-lg text-center tracking-widest"></p>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;

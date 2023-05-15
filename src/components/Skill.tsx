import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  logo: string;
  wh?: number | 20;
  bg?: string | "transparent";
  rounded?: string;
  name: string;
};

function Skill({ directionLeft, logo, wh, bg, rounded, name }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        transition={{ duration: 0.4 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`rounded-full border border-gray-500 w-20 h-20 flex items-center justify-center bg-${bg}`}
      >
        <img
          src={logo}
          height="100"
          alt={name}
          className={`rounded-full ${rounded} object-contain w-${wh} h-${wh} filter group-hover:grayscale transition duration-300 ease-in-out`}
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-s font-bold text-black opacity-100">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  logo: string;
  w?: string | 20;
  h?: string | 20;
  rounded?: string;
  name: string;
};

function Skill({ directionLeft, logo, w, h, rounded, name }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        transition={{ duration: 0.4 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`rounded-full border-2 border-[#F8F1F1] w-20 h-20 flex items-center justify-center z-20`}
      >
        <img
          src={logo}
          height="100"
          alt={name}
          className={`rounded-full ${rounded} object-contain ${w} ${h} filter group-hover:grayscale transition duration-300 ease-in-out`}
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#E57C23] w-20 h-20 rounded-full z-20">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm font-bold text-black opacity-100">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative -top-5 md:top-6 flex justify-center items-center"
    >
      <div className="absolute border border-[#E8AA42]/40 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#E8AA42]/40 rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#E8AA42]/40 rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-[#E57C23] rounded-full opacity-20 h-[685px] w-[685px] mt-52 animate-pulse" />
      <div className="absolute border border-[#E8AA42]/40 rounded-full [h-800px] [w-800px] mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;

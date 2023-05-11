import React from "react";
import { motion } from "framer-motion";

type Props = {};
export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col items-center justify-center text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="/image/fifi.jpg"
        alt="fifi"
        className="mb-5 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-contain
        md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-s md:text-base max-w-[500px] tracking-widest">
          Lorem fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip fifi
          Filip ipsum fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip
          fifi Filip dolor fifi Filip fifi Filip fifi Filip fifi Filip sit fifi
          Filip fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip amet.
          Lorem fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip fifi
          Filip ipsum fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip
          fifi Filip dolor fifi Filip fifi Filip fifi Filip fifi Filip sit fifi
          Filip fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip amet.
          Lorem fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip fifi
          Filip ipsum fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip
          fifi Filip dolor fifi Filip fifi Filip fifi Filip fifi Filip sit fifi
          Filip fifi Filip fifi Filip fifi Filip fifi Filip fifi Filip amet.
        </p>
      </div>
    </motion.div>
  );
}

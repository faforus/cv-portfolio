import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/components/BackgroundCircles";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "< Thrives on Challenges />",
      "{ Enthusiastic Learner }",
      "() => { Team Player }",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="viewportHeight min-h-[632px] md:min-h-[800px] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="pt-[140px] space-y-2 md:space-y-8 items-center justify-center text-center">
        <div className="flex flex-col items-center justify-normal">
          <BackgroundCircles />
          <img
            className="relative rounded-full h-44 w-44 md:h-64 md:w-64 max-auto object-cover"
            src="/image/fifi.jpg"
            alt="Filip Wielechowski - React Developer Portfolio / TypeScript / JavaScript / React / Next.js / Redux / Tailwind / PostCSS / Git"
          />
        </div>
        <div className="z-20">
          <h2 className="text-xs tracking-[10px] md:text-sm uppercase textTwoColor md:tracking-[15px] cursor-default">
            React Developer
          </h2>
        </div>
        <div className="w-[375px] md:w-auto">
          <h1 className="text-[1.5rem] md:text-5xl lg:text-6xl font-semibold">
            <span className="mr-1">{text}</span>
            <Cursor cursorColor="#E8AA42" />
          </h1>
        </div>
        <div className="z-20 relative -top-2 md:-top-4">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          {/* <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link> */}
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;

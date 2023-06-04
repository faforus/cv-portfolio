import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/components/BackgroundCircles";
import Link from "next/link";

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
    <div className="viewportHeight flex flex-col items-center justify-center overflow-hidden">
      <div className="mt-[90px] space-y-2 md:space-y-8 items-center justify-center text-center">
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
        <h1 className="text-[1.4rem] md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#E8AA42" />
        </h1>
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
    </div>
  );
}

export default Hero;

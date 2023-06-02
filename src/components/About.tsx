import React from "react";
import { motion } from "framer-motion";

type Props = {};
export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen min-h-[600px] flex flex-col items-center justify-center text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 mx-auto"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] textTwoColor text-2xl cursor-default">
        About
      </h3>
      <div className="-mt-14 md:mt-0 flex flex-row">
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
          src="/image/fifisimba.jpg"
          alt="fifi"
          className="hidden md:block mb-5 md:mb-0 mt-16 md:mt-0 flex-shrink-0 w-[78px] h-[117px] md:w-[312px] md:h-[470px] rounded-lg"
        />
        <div className="space-y-10 px-0 md:px-10">
          <p className="text-xs md:text-base max-w-[500px] tracking-wide text-justify textTwoColor">
            Over many years, photography has been my passion. Over the previous
            few, it started providing me with rewarding but inconsistent income.
            Seeking greater stability and to maintain my enthusiasm, I&apos;ve
            decided to transition to programming, currently focusing on
            JavaScript and React development.
            <br />
            <br />I have completed two courses and created two original
            projects, finding immense excitement in the process. But my learning
            journey is far from over. I am constantly seeking new challenges and
            opportunities to expand my knowledge and skills, as I believe that
            learning is a continuous process that never truly ends. By the time
            you are reading this, I will have likely learned even more, as I am
            dedicated to studying and honing my skills every chance I get.{" "}
            <br />
            <br />I am confident that my combination of creativity, technical
            skills, and enthusiasm for programming make me a strong candidate
            for any development position. I am excited about the possibility of
            joining a team that values collaboration, innovation, and continuous
            learning, and I look forward to contributing my skills and expertise
            to help achieve shared goals.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

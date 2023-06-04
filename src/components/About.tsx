import React from "react";
import { motion } from "framer-motion";

type Props = {};
export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="about relative h-screen min-h-[600px] flex flex-col items-center justify-center text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 mx-auto bg-red-600"
    >
      <h3 className="absolute top-24 ml-[20px] uppercase tracking-[20px] textTwoColor text-2xl cursor-default">
        About
      </h3>
      <div className="mt-6 md:mt-0 flex flex-row items-center justify-center">
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
          alt="Filip Wielechowski - React Developer Portfolio / TypeScript / JavaScript / React / Next.js / Redux / Tailwind / PostCSS / Git"
          className="hidden md:block mb-5 md:mb-0 mt-16 md:mt-0 flex-shrink-0 w-[395px] h-auto rounded-lg"
        />
        <div className="space-y-10 px-0 md:px-10">
          <p className="text-xs md:text-base max-w-[500px] tracking-wide text-justify textTwoColor">
            Photography has been my long-standing passion, providing rewarding
            yet inconsistent income. To ensure stability and sustain my
            enthusiasm, I&apos;ve transitioned to programming, currently
            focusing on JavaScript and React development.
            <br />
            <br />
            I have successfully completed two extensive courses and
            independently executed two complex original apps along with other
            smaller projects. The process of creating these projects has brought
            me immense excitement and satisfaction. However, my journey of
            learning continues. Currently, I am engaged in two separate,
            commercial projects as a member of two different teams. This
            valuable opportunity not only allows me to apply and enhance my
            technical skills but also exposes me to the practical aspects of
            teamwork and collaboration. Throughout these projects, I have been
            utilizing tools such as GitLab, ClickUp, and Slack, gaining hands-on
            experience in the collaborative development process of large-scale
            projects.
            <br />
            <br />I am confident that my combination of creativity, technical
            skills, and enthusiasm for programming, along with my experience in
            teamwork and project collaboration, make me a strong candidate for
            any development position. I am excited about the possibility of
            joining a team that values collaboration, innovation, and continuous
            learning, and I look forward to contributing my skills and expertise
            to help achieve shared goals.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

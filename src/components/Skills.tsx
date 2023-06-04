import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="viewportHeight flex relative flex-col text-center md:text-left xl:flex-row w-full xl:px-10 justify-center xl:space-y-0 mx-auto items-center bg-orange-500"
    >
      <h3 className="absolute top-24 ml-[20px] uppercase tracking-[20px] textTwoColor text-2xl cursor-default">
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-2 md:gap-5">
        <Skill
          logo="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
          name="JavaScript"
        />
        <Skill
          logo="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
          name="TypeScript"
        />
        <Skill
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
          w="w-20"
          h="w-20"
          name="React"
        />
        <Skill
          logo="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
          w="w-16"
          h="w-16"
          name="Next.js"
        />
        <Skill
          logo="image/redux.png"
          w="w-16"
          h="w-16"
          rounded="rounded"
          name="Redux"
        />
        <Skill
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
          name="Tailwind"
          w="w-16"
          h="w-16"
        />
        <Skill
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PostCSS_Logo.svg/607px-PostCSS_Logo.svg.png?20160808161407"
          directionLeft
          name="PostCSS"
        />

        <Skill
          logo="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
          w="w-16"
          h="w-16"
          directionLeft
          name="HTML"
        />
        <Skill
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png"
          w="w-12"
          h="w-12"
          directionLeft
          name="CSS"
        />
        <span></span>
        <Skill
          logo="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          directionLeft
          name="GitHub"
        />
      </div>
      <div className="w-full absolute top-[20%] md:top-[30%] bg-[#E57C23]/5 left-0 h-[400px] md:h-[500px] skew-y-12"></div>
    </motion.div>
  );
}

export default Skills;

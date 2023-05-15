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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
          wh={20}
          name="React"
        />
        <Skill
          logo="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
          wh={16}
          bg="white"
          name="Next.js"
        />
        <Skill
          logo="https://cdn.worldvectorlogo.com/logos/redux.svg"
          wh={16}
          rounded="rounded"
          name="Redux"
        />
        <Skill
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
          name="Tailwind"
        />
        <Skill
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PostCSS_Logo.svg/607px-PostCSS_Logo.svg.png?20160808161407"
          directionLeft
          name="PostCSS"
        />

        <Skill
          logo="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
          wh={16}
          directionLeft
          name="HTML"
        />
        <Skill
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png?20160530175649"
          wh={16}
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
    </motion.div>
  );
}

export default Skills;

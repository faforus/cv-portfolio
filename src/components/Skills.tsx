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
      className="viewportHeight flex relative flex-col"
    >
      <div className="mt-[75px] h-[75px] flex items-center justify-center">
        <h3 className="uppercase tracking-[20px] text-center textTwoColor text-2xl cursor-default">
          Skills
        </h3>
      </div>
      <div className="flex h-full flex-row items-center justify-center">
        <div className="grid grid-cols-3 gap-2 md:gap-5 -mt-[75px]">
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
      </div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="mt-8 w-full bg-[#E57C23]/10 left-0 h-[400px] md:h-[500px] skew-y-12"></div>
      </div>
    </motion.div>
  );
}

export default Skills;

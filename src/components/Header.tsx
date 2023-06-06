import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { scroll } from "@/helpers/scroll";

type Props = {
  snap: boolean;
};

function Header({ snap }: Props) {
  return (
    <header
      className={`sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-[100] xl:items-center ${
        snap ? "" : "bgColor"
      }`}
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.facebook.com/fafdormu"
          fgColor="#E57C23"
          bgColor="transparent"
          className="hover:opacity-70"
        />
        <SocialIcon
          url="https://www.instagram.com/wielechowski_fotografia/"
          fgColor="#E57C23"
          bgColor="transparent"
          className="hover:opacity-70"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/filip-wielechowski-9302b0263/"
          fgColor="#E57C23"
          bgColor="transparent"
          className="hover:opacity-70"
        />
        <SocialIcon
          url="https://github.com/faforus"
          fgColor="#E57C23"
          bgColor="transparent"
          className="hover:opacity-70"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-[#E57C23]"
        onClick={() => {
          scroll("contact");
        }}
      >
        <div className="hover:opacity-70 flex items-center justify-center cursor-pointer">
          <img src="image/mailicon.svg" />
          <p className="uppercase hidden md:inline-flex text-sm text-[#E57C23]">
            Get In Touch
          </p>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;

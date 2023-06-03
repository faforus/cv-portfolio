import React from "react";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div className="relative -top-5 md:top-6 flex justify-center items-center">
      <div className="absolute border border-[#E8AA42]/40 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#E8AA42]/40 rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#E8AA42]/40 rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-[#E57C23] rounded-full w-[440px] h-[440px] opacity-20 md:h-[705px] md:w-[705px] mt-52 animate-pulse" />
      <div className="absolute border border-[#E8AA42]/40 rounded-full [h-800px] [w-800px] mt-52 animate-ping" />
    </div>
  );
}

export default BackgroundCircles;

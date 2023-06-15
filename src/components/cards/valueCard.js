import React from "react";

const ValueCard = ({ value }) => {
  const customclass =
    "to-primary/5  to-green/5 to-blue/5 shadow-primary/40 shadow-blue/40 shadow-green/40";
  return (
    <div
      className={`md:w-full w-[80%] grow shrink-0 border border-white/10 bg-gradient-to-b from-white/5 to-${value.color}/5 rounded-lg pt-16 pb-12 flex justify-center items-center flex-col relative  overflow-hidden backdrop-blur cursor-pointer h-full`}
    >
      <span
        className={`hex bg-dark border-dark flex justify-center items-center shadow-xl shadow-${value.color}/40`}
      >
        {value.icon}
      </span>
      <span className="mt-16 font-bold uppercase text-2xl text-center">
        {value.label}
      </span>
      <div className="scale-[600%] absolute bottom-0 right-0 opacity-5 blur-[1px]">
        {value.icon}
      </div>
      <div className={customclass}></div>
    </div>
  );
};

export default ValueCard;

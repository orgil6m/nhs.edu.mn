import React from "react";

const MyTitle = ({ row1, row2, color }) => {
  const textStyles = "text-yellow text-pink text-green text-blue text-primary";
  return (
    <div
      className={`w-full flex flex-col justify-center items-center md:text-4xl text-2xl font-bold uppercase mb-16 ${textStyles}`}
    >
      <span className="text-white">{row1}</span>
      <span className={`text-${color} md:text-5xl text-3xl`}>{row2}</span>
    </div>
  );
};

export default MyTitle;

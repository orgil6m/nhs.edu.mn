import React from "react";

const GradientButton = ({ label, event }) => {
  return (
    <button
      className="gradientButton relative  bg-dark rounded-[4px] hover:before:blur  before:transition before:ease-in-out before:duration-300"
      onClick={() => event()}
    >
      <div className="w-full px-6 py-1.5 z-20 ">{label}</div>
    </button>
  );
};

export default GradientButton;

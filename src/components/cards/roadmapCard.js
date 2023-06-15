import React from "react";

const RoadmapCard = ({ value }) => {
  return (
    <div className="md:w-96 w-72  h-full p-3 bg-white/0 hover:bg-white/5 hover-transition cursor-pointer rounded-lg border border-white/10 md:pb-6 backdrop-blur">
      <div
        className="w-full aspect-video bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${value.img})`,
        }}
      ></div>
      <div className="py-3 text-xl font-bold mt-2 ">{value.label}</div>
      <span className="md:flex hidden font-light text-white/60 text-sm">
        {value.content}
      </span>
    </div>
  );
};

export default RoadmapCard;

import React from "react";
import { videodata } from "./videodata";

const Videos = () => {
  return (
    <div className="h-[54rem] w-full flex flex-col justify-between">
      <div className="h-[11rem] w-full flex flex-col justify-center items-center">
        <div className="font-bold text-5xl font-['Roboto_Condensed']">
          сурагч, эцэг эхчүүдийн
        </div>
        <div className="font-bold text-6xl font-['Roboto_Condensed'] text-green">
          сэтгэгдэл
        </div>
      </div>
      <div className="w-full h-[38.75rem] bg-pink px-20">
        <div class="w-1/2"></div>
      </div>
    </div>
  );
};

export default Videos;

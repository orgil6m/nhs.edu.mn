import React from "react";
import Link from "next/link";

const IconButton = ({ icon, href = "/" }) => {
  return (
    <Link href={href} target="_blank">
      <div className="hover-transition p-2 bg-white/10 rounded aspect-square md:w-10  hover:-translate-y-1 hover:bg-white/20 mx-1 flex justify-center items-center backdrop-blur">
        <div className="md:scale-[90%]">{icon}</div>
      </div>
    </Link>
  );
};

export default IconButton;

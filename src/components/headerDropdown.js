import Link from "next/link";
import React, { useState } from "react";

const HeaderDropDown = ({ row }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1">
        <p>{row.label}</p>
        <DownIcon />
      </button>
      <div className="absolute py-3 pt-4 flex-col hidden group-hover:flex hover:flex">
        <div className="bg-gradient-to-b from-dark/10 to-dark/5 backdrop-blur-lg flex flex-col rounded overflow-hidden text-white border border-white/5">
          {row.content.map((row, index) => (
            <Link
              href={row.path}
              key={index}
              className="px-6 py-3 w-60 hover:bg-white/5 hover-transition hover:text-white"
            >
              {row.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderDropDown;

const DownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

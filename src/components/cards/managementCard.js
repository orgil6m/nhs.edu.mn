import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FbIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
} from "../../assets/icons";
import IconButton from "../iconButton";

const ManagementCard = ({ value }) => {
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col group cursor-pointer">
        <div
          className="w-full aspect-square rounded-xl bg-center bg-cover z-20"
          style={{
            backgroundImage: `url(${value.img})`,
          }}
        />
        <div
          className="hover-transition absolute w-full h-full opacity-10 scale-[120%] md:group-hover:opacity-30 bg-cover bg-center blur-3xl"
          style={{ backgroundImage: `url(${value.img})` }}
        />
        <div className="flex flex-col justify-center items-center z-20">
          <span className="text-xl font-bold pt-4 text-center">
            {value.lastname.slice(0, 1)}. {value.firstname}
          </span>
          <span className="font-light text-green text-center md:text-base text-xs">
            {value.role}
          </span>
          <div className="gap-2 mt-5 md:flex hidden">
            <IconButton icon={<FbIcon />} href={value.fb} />

            <IconButton icon={<TwitterIcon />} href={value.twitter} />
            <IconButton icon={<InstagramIcon />} href={value.ig} />
            <IconButton icon={<MailIcon />} href={value.email} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementCard;

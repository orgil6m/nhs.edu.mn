import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import {
  MailIcon,
  MobileIcon,
  LocationIcon,
  ClockIcon,
  FbIcon,
  InstagramIcon,
  YoutubeIcon,
  DribbbleIcon,
  GitIcon,
  LinkedinIcon,
} from "../assets/icons";
import IconButton from "./iconButton";
import { Logo } from "./header";

const Footer = () => {
  const contactInfos = [
    {
      icon: <MailIcon />,
      labels: [
        { label: "contact@nhs.edu.mn", link: "mailto:contact@nhs.edu.mn" },
      ],
    },
    {
      icon: <MobileIcon />,
      labels: [
        { label: "7799-555", link: "tel:77995555" },
        { label: "7799-4444", link: "tel:77994444" },
      ],
    },
    {
      icon: <ClockIcon />,
      labels: [
        { label: "Даваа - Баасан 10:00 - 16:00, \n Бямба - Ням: Амарна" },
      ],
    },
    {
      icon: <LocationIcon />,
      labels: [
        {
          label:
            " Нэст Эдүкэйшн сургуулийн байр \n Оюутны гудамж, 8-р хороо, Сүхбаатар дүүрэг, \n Улаанбаатар хот",
        },
      ],
    },
  ];
  const socials = [
    {
      icon: <FbIcon />,
      link: "https://www.facebook.com/NestEducationSchool",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/nest_education_it_school/",
    },
    {
      icon: <YoutubeIcon />,
      link: "https://www.youtube.com/@nesteducationitschool3493",
    },
    {
      icon: <LinkedinIcon />,
      link: "",
    },
    {
      icon: <DribbbleIcon />,
      link: "",
    },
    {
      icon: <GitIcon />,
      link: "",
    },
  ];

  return (
    <div className="responsive-padding border-t border-white/10 md:py-20 pt-20  pb-8 flex md:flex-row flex-col w-full justify-between">
      <div className="flex flex-col gap-10">
        <div className="origin-left scale-[150%]">
          <Logo />
        </div>
        <div className="flex md:gap-5 gap-2 w-full ">
          {socials.map((row, index) => (
            <div key={index} className="scale-[120%] ">
              <IconButton href={row.link} icon={row.icon} />
            </div>
          ))}
        </div>
        <span className="font-light md:flex hidden">
          © 2023 | Nest Education IT School | V.2.0
        </span>
      </div>
      <div className="text-white flex flex-col justify-between items-start gap-5 md:mt-0 mt-20">
        {contactInfos.map((row, index) => (
          <div className="flex md:gap-5 gap-2 items-center" key={index}>
            <IconButton icon={row.icon} />
            <div className="flex flex-col">
              {row.labels.map((r, i) => (
                <a
                  href={r.link}
                  key={i}
                  className={`font-light whitespace-pre-wrap ${
                    r.link && "underline"
                  }`}
                >
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <span className="font-light md:hidden flex mt-20 text-center ">
        © 2023 | Nest Education IT School | V.2.0
      </span>
    </div>
  );
};

export default Footer;

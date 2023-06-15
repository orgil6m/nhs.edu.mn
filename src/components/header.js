import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import GradientButton from "./gradButton.js";
import { useRouter } from "next/router";
import Link from "next/link";
import HeaderDropDown from "./headerDropdown";
import { headerLocales } from "../i18n/locales";

const Header = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  const { pathname, asPath, query } = router;
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300 `;
  const navs = [
    {
      label: headerLocales[locale].home.label,
      path: "/",
    },
    {
      label: headerLocales[locale].about.label,
      type: "dropdown",
      path: "/about",
      content: [
        {
          label: headerLocales[locale].about.contents[0],
          path: "/about#introduction",
        },

        {
          label: headerLocales[locale].about.contents[1],
          path: "/about#roadmap",
        },
        {
          label: headerLocales[locale].about.contents[2],
          path: "/about#management",
        },
        {
          label: headerLocales[locale].about.contents[3],
          path: "/about/teachers",
        },
      ],
    },
    {
      label: headerLocales[locale].news.label,
      path: "/news",
    },
    {
      label: headerLocales[locale].programs.label,
      type: "dropdown",
      path: "/programs",
      content: [
        {
          label: headerLocales[locale].programs.contents[0],
          path: "/programs#elementary",
        },
        {
          label: headerLocales[locale].programs.contents[1],
          path: "/programs#secondary",
        },
        {
          label: headerLocales[locale].programs.contents[2],
          path: "/programs#high",
        },
      ],
    },
    {
      label: headerLocales[locale].contact.label,
      path: "/contact",
    },
  ];

  return (
    <div className="flex  fixed top-0 left-0 z-50 dropdownBlur responsive-padding w-full bg-gradient-to-b from-dark/10 py-4   justify-between items-center ">
      <Image
        onClick={() => router.push("/")}
        src={logo.src}
        width={120}
        height={120}
        alt="logo"
        className="cursor-pointer"
      />
      <div className="md:flex hidden gap-10">
        {navs.map((row, index) => (
          <div
            key={index}
            className={`hover-transition  hover:text-white ${
              router.pathname == row.path ? " text-white" : "text-white/40"
            }`}
          >
            {row.content && row.content.length > 0 ? (
              <HeaderDropDown row={row} />
            ) : (
              <Link href={row.path}>{row.label}</Link>
            )}
          </div>
        ))}
      </div>
      <div className="md:flex hidden items-center gap-8">
        <div className="font-bold flex items-center gap-2">
          <button
            className={`${
              router.locale == "en" ? "text-white" : "text-white/40"
            }`}
            onClick={() =>
              router.push({ pathname, query }, asPath, { locale: "en" })
            }
          >
            EN
          </button>
          <span className="cursor-default">|</span>
          <button
            className={`${
              router.locale == "default" ? "text-white" : "text-white/40"
            }`}
            onClick={() =>
              router.push({ pathname, query }, asPath, { locale: "default" })
            }
          >
            MN
          </button>
        </div>
        <GradientButton
          label={headerLocales[locale].admission.label}
          event={() => window.open("https://google.com", "_ blank")}
        />
      </div>
      <div className="md:hidden flex items-center gap-5">
        <div className="font-bold flex items-center gap-2 text-xl">
          <button
            className={`${
              router.locale == "en" ? "text-white" : "text-white/40"
            }`}
            onClick={() =>
              router.push({ pathname, query }, asPath, { locale: "en" })
            }
          >
            EN
          </button>
          <span className="cursor-default">|</span>
          <button
            className={`${
              router.locale == "default" ? "text-white" : "text-white/40"
            }`}
            onClick={() =>
              router.push({ pathname, query }, asPath, { locale: "default" })
            }
          >
            MN
          </button>
        </div>
        <button
          className="md:hidden z-40 flex flex-col  h-12 w-12 -mt-1 rounded justify-center items-center group  scale-[70%] opacity-70"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "rotate-45 translate-y-3 " : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "-rotate-45  -translate-y-3 " : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 w-10/12 h-screen flex flex-col z-30 border-l bg-white/[2%] border-white/10 backdrop-blur-2xl hover-transition text-white pt-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navs.map((row, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(row.path), setIsOpen(!isOpen);
            }}
            className={`hover-transition p-4 relative`}
          >
            <span
              className={`ml-4 text-2xl font-bold italic z-20 ${
                router.pathname !== row.path && "opacity-40"
              }`}
            >
              {row.label}
            </span>
            <div
              className={` absolute left-0 top-0 ${
                router.pathname === row.path &&
                "h-full bg-gradient-to-r w-40 from-white/10 z-0"
              }`}
            ></div>
          </div>
        ))}
        <div className="ml-4 p-4 flex mt-4">
          <GradientButton
            label={headerLocales[locale].admission.label}
            event={() => window.open("https://google.com", "_ blank")}
            className="text-2xl font-bold italic"
          />
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-screen bg-dark/90 backdrop-blur-xl z-10  h-screen flex justify-end transition-all duration-800 ease-in-out ${
          isOpen ? "" : "hidden"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
    </div>
  );
};

export default Header;

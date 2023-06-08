import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import GradientButton from "./gradButton.js";
import { useRouter } from "next/router";
import Link from "next/link";
import HeaderDropDown from "./headerDropdown";
import { headerLocales } from "../i18n/header";

const Header = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  const { pathname, asPath, query } = router;
  const navs = [
    {
      label: headerLocales[locale].home.label,
      path: "/",
    },
    {
      label: headerLocales[locale].about.label,
      type: "dropdown",
      content: [
        {
          label: "Танилцуулга",
          path: "/about#introduction",
        },
        {
          label: "Түүхэн замнал",
          path: "/about#roadmap",
        },
        {
          label: "Удирдлагын баг",
          path: "/about#management",
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
      content: [
        {
          label: "Бага ангийн хөтөлбөр",
          path: "/programs#primary",
        },
        {
          label: "Дунд ангийн хөтөлбөр",
          path: "/about#mid",
        },
        {
          label: "Ахлах ангийн хөтөлбөр",
          path: "/about#high",
        },
      ],
    },
    {
      label: headerLocales[locale].contact.label,
      path: "/contact",
    },
  ];

  return (
    <div className="fixed top-0 responsive-padding w-full bg-gradient-to-b from-dark/10 h-20 backdrop-blur-lg flex justify-between items-center ">
      <Image src={logo.src} width={120} height={120} alt="logo" />
      <div className={`flex gap-10`}>
        {navs.map((row, index) => (
          <div
            key={index}
            className="hover-transition text-white/60  hover:text-white"
          >
            {row.path && <Link href={row.path}>{row.label}</Link>}
            {row.content && row.content.length > 0 && (
              <HeaderDropDown row={row} />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-8">
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
    </div>
  );
};

export default Header;

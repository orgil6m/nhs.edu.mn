import React from "react";
import ProgramCard from "../cards/programCard";
import baga from "../../assets/programs/baga.png";
import dund from "../../assets/programs/dund.png";
import ahlah from "../../assets/programs/ahlah.png";

import { programsLocales } from "../../i18n/locales";
import { useRouter } from "next/router";
const Programs = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  const programs = [
    {
      img: baga.src,
      label: programsLocales[locale].elementary.label,
      detail: programsLocales[locale].elementary.detail,
      path: "/programs#elementary",
    },
    {
      img: dund.src,
      label: programsLocales[locale].secondary.label,
      detail: programsLocales[locale].secondary.detail,
      path: "/programs#secondary",
    },
    {
      img: ahlah.src,
      label: programsLocales[locale].high.label,
      detail: programsLocales[locale].high.detail,
      path: "/programs#high",
    },
  ];
  return (
    <div className="responsive-padding flex flex-col py-20">
      <div className="md:text-4xl text-2xl font-bold uppercase flex-col flex items-center mb-20 text-center">
        <span>{programsLocales[locale].labels[0]}</span>
        <span>{programsLocales[locale].labels[1]}</span>
        <span className="text-primary md:text-5xl text-3xl">
          Nest Education IT SCHOOL
        </span>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-20 flex gap-5 overflow-x-auto overflow-y-hidden">
        {programs.map((row, index) => (
          <ProgramCard key={index} data={row} />
        ))}
      </div>
    </div>
  );
};

export default Programs;

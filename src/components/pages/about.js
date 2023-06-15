import React from "react";
import rocket from "../../assets/rocket.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { aboutLocales } from "../../i18n/locales";

const AboutNest = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";

  return (
    <div
      id="introduction"
      className="responsive-padding  md:py-40 pt-32 pb-20 grid md:grid-cols-2"
    >
      <div className="flex flex-col">
        <p className="text-green uppercase font-bold text-4xl mb-8">
          {aboutLocales[locale].introduction.label}
        </p>
        <p className="font-light text-justify text-white/80 text-lg whitespace-pre-line	 ">
          {aboutLocales[locale].introduction.content}
        </p>
      </div>
      <div className="flex justify-center items-center relative md:p-20 z-20">
        <Image src={rocket.src} alt="rocket" fill className="object-contain" />
      </div>
    </div>
  );
};

export default AboutNest;

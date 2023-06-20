import Image from "next/image";
import React from "react";
import GradientButton from "../gradButton";
import { programsLocales } from "../../i18n/locales";
import { useRouter } from "next/router";

const ProgramCard = ({ data }) => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  return (
    <div className="shrink-0 md:w-full flex justify-center items-center flex-col border border-white/10  backdrop-blur-xl rounded-lg py-12 px-8">
      <div className="w-2/3 aspect-square relative mb-8">
        <Image src={data.img} fill alt={data.label} />
      </div>
      <span className="text-2xl font-bold">{data.label}</span>
      <span className="font-light text-green">{data.detail}</span>
      <div className="mt-12">
        <GradientButton
          label={programsLocales[locale].learnmore}
          event={() => router.push(data.path)}
        />
      </div>
    </div>
  );
};

export default ProgramCard;

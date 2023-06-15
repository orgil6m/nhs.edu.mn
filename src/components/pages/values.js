import React from "react";
import ValueCard from "../cards/valueCard";
import { useRouter } from "next/router";
import { aboutLocales } from "../../i18n/locales";
import { CheckIcon, InfinityIcon, ThunderIcon } from "../../assets/icons";

const Values = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";

  const values = [
    {
      label: aboutLocales[locale].values.labels[0],
      icon: <CheckIcon />,
      color: "primary",
    },
    {
      label: aboutLocales[locale].values.labels[1],
      icon: <InfinityIcon />,
      color: "green",
    },
    {
      label: aboutLocales[locale].values.labels[2],
      icon: <ThunderIcon />,
      color: "blue",
    },
  ];

  return (
    <div className="responsive-padding md:grid md:grid-cols-3 flex w-full overflow-x-auto overflow-y-hidden md:gap-12 gap-5 z-20 mb-20">
      {values.map((row, index) => (
        <ValueCard value={row} key={index} />
      ))}
    </div>
  );
};

export default Values;

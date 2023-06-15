import React from "react";
import ManagementCard from "../cards/managementCard";
import management1 from "../../assets/management/1.jpg";
import management2 from "../../assets/management/2.jpg";
import management3 from "../../assets/management/3.jpg";
import management4 from "../../assets/management/4.jpg";
import management5 from "../../assets/management/5.jpg";
import management6 from "../../assets/management/6.jpg";
import { useRouter } from "next/router";
import { aboutLocales } from "../../i18n/locales";
import MyTitle from "../title";

const Management = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";

  const management = [
    [
      {
        img: management1.src,
        lastname: "Л",
        firstname: "Оюун-Эрдэнэ",
        role: "Гүйцэтгэх захирал",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
      {
        img: management2.src,
        lastname: "О",
        firstname: "Хаш-Эрдэнэ",
        role: "Ахлах сургуулийн захирал",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
      {
        img: management3.src,
        lastname: "Г",
        firstname: "Төмөрзаяа",
        role: "Бага, Дунд сургуулийн захирал",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
      {
        img: management4.src,
        lastname: "Д",
        firstname: "Баасанхүү",
        role: "Санхүү хариуцсан захирал",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
      {
        img: management5.src,
        lastname: "Б",
        firstname: "Сод-Од",
        role: "Технологи хариуцсан захирал",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
      {
        img: management6.src,
        lastname: "Б",
        firstname: "Байгальхүү",
        role: "Хүний нөөц хариуцсан захирал",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
    ],
    [
      {
        img: management1.src,
        lastname: "L",
        firstname: "Oyun-Erdene",
        role: "Chief Executive Officer (CEO) ",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
      {
        img: management2.src,
        lastname: "O",
        firstname: "Khash-Erdene",
        role: "High School Principal",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
      {
        img: management3.src,
        lastname: "G",
        firstname: "Tumurzaya",
        role: "Secondary School Principal",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
      {
        img: management4.src,
        lastname: "D",
        firstname: "Baasankhhuu",
        role: "Chief Financial Officer (CFO)",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
      {
        img: management5.src,
        lastname: "B",
        firstname: "Sod-Od",
        role: "Chief Technology Officer (CTO)",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
      {
        img: management6.src,
        lastname: "B",
        firstname: "Baigalkhuu",
        role: "Chief Human Resources Officer (CHRO)",
        fb: "",
        ig: "",
        twitter: "",
        email: "",
      },
    ],
  ];

  return (
    <div
      id="management"
      className="py-20 w-full responsive-padding  flex flex-col justify-center items-center"
    >
      <MyTitle
        row1={aboutLocales[locale].management.labels[0]}
        row2={aboutLocales[locale].management.labels[1]}
        color="green"
      />
      <div className="w-full md:gap-20 gap-5 grid md:grid-cols-4 grid-cols-2 ">
        {management[locale].map((row, index) => (
          <ManagementCard key={index} value={row} />
        ))}
      </div>
    </div>
  );
};

export default Management;

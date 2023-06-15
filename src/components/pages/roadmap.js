import React from "react";
import RoadmapCard from "../cards/roadmapCard";
import img2019 from "../../assets/roadmap/2019.jpg";
import img2020 from "../../assets/roadmap/2020.jpg";
import img2021 from "../../assets/roadmap/2021.jpg";
import img2022 from "../../assets/roadmap/2022.jpg";
import { useRouter } from "next/router";
import { aboutLocales } from "../../i18n/locales";
import MyTitle from "../title";

const Roadmap = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  const roadmap = [
    [
      {
        year: "2019",
        label: "Анхны элсэлт",
        content: "Nest Education IT School байгуулагдаж анхны элсэлээ авав.",
        img: img2019.src,
      },
      {
        year: "2020",
        label: "Hackateen 2020",
        content:
          "Nest Education IT School Монголын хамгийн өндөр шагналын сантай програмчлалын олимпиад болох HackaTeen 2020 уралдааныг амжилттай зохион байгуулав",
        img: img2020.src,
      },
      {
        year: "2021",
        label: "Nest Education Бага сургууль",
        content:
          "Nest Education IT School бага сургуультай болж үйл ажиллаагаа өргөжүүлэв",
        img: img2021.src,
      },
      {
        year: "2022",
        label: "NIT - Үндэсний технологийн институт",
        content:
          "NIT дээд сургууль бол Монгол Улсад мэдээллийн технологийн чиглэлээр хүүхэд залуусын элсэж орохыг мөрөөддөг дээд сургуулийг байгуулах, мөн дэлхийд өрсөлдөх мэдээллийн технологийн нарийн мэргэжлийн чадварлаг инженерүүдийг бэлдэх зорилготойгоор байгуулагдаж байгаа билээ.",
        img: img2022.src,
      },
    ],
    [
      {
        year: "2019",
        label: "First enrollment",
        content:
          "Nest Education IT School was established and received its first enrollment",
        img: img2019.src,
      },
      {
        year: "2020",
        label: "Hackateen 2020",
        content:
          "Nest Education IT School successfully organized HackaTeen 2020, the programming Olympiad with the highest prize pool in Mongolia",
        img: img2020.src,
      },
      {
        year: "2021",
        label: "Nest Education Elementary School",
        content:
          "Nest Education IT School has expanded its operations with a primary school",
        img: img2021.src,
      },
      {
        year: "2022",
        label: "NIT - National Institute of Technology",
        content:
          "NIT University is established in Mongolia with the goal of creating a university that children and young people dream of entering in the field of information technology, as well as preparing competent engineers in the field of information technology to compete in the world.",
        img: img2022.src,
      },
    ],
  ];

  return (
    <div id="roadmap" className="responsive-padding pt-20 mb-20">
      <MyTitle
        row1={aboutLocales[locale].roadmap.labels[0]}
        row2={aboutLocales[locale].roadmap.labels[1]}
        color="yellow"
      />
      <div className="w-full overflow-x-auto overflow-y-hidden pl-8 ">
        <div className="min-w-full w-fit flex gap-20 relative">
          <div className="absolute w-full border-t-2 border-dashed border-white/20 top-[4.2rem] "></div>
          {roadmap[locale].map((row, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-center flex-col">
                <span className="text-3xl font-bold">{row.year}</span>
                <div className="w-8 aspect-square bg-yellow/10 flex items-center justify-center backdrop-blur rounded-full z-20 mb-8 mt-4 glow-shadow-yellow">
                  <div className="w-2 aspect-square bg-yellow rounded-full"></div>
                </div>
              </div>
              <RoadmapCard value={row} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

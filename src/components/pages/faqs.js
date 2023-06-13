import React from "react";
import FaqCard from "../cards/faqCard";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(-1);

  const questions = [
    {
      q: "Сургуулийн талаар товч мэдээлэл?",
      a: ` Эх орондоо болон Америкт мэдээллийн технологийн чиглэлээр
      амжилттай ажиллаж буй залуучуудын үүсгэл санаачилгаар Ерөнхий
      боловсролын “Нэст Эдүкэйшн” сургууль байгуулагдсан. 2019 онд
      ахлах ангийн 6 бүлэгтэй үйл ажиллагаагаа эхлүүлж байсан бол 2020
      онд дунд анги, 2021 онд бага ангийн элсэлтээ авч, бүрэн дунд
      сургууль болон өргөжсөн бөгөөд 2022 онд хичээлийн 2 байртай
      болон үйл ажиллагаагаа явуулж байна. 2023-2024 оны хичээлийн
      жилд Хан-Уул дүүргийн Маршал Таун хотхонд салбар бага сургуулиа
      нээж 1-3 дугаар ангийн элсэлтээ авч байна.`,
    },
    {
      q: "Ямар хөтөлбөрөөр хичээллэдэг вэ?",
      a: `Мэдээллийн технологийн гүнзгийрүүлсэн сургалттай Ерөнхий
      боловсролын Нэст Эдүкэйшн сургууль нь ерөнхий эрдмийн бүх
      хичээлүүд чанартай сайн заадгаас гадна ирээдүйн мэдээллийн
      технологийн инженерүүдийг бэлдэж байна. Мэдээллийн технологийн
      хөтөлбөр: Програмчлалын суурь, Вебийн суурь, Дизайны суурь үзнэ,
      UI/UX дизайн, Back-End, Front-End ба Mobile хөгжүүлэлт гэсэн энэ
      4 чиглэлээр гүнзгийрч сонгон суралцана. Бага, дунд ангийн
      хөтөлбөрийг Хүүхэд эцэг эх сургалт судалгааны Хөөрхөн шар шувуу
      төв-тэй хамтран боловсруулсан хөтөлбөрөөр хичээллэдэг.`,
    },
    {
      q: "Сургалтын төлбөр хэд вэ?",
      a: (
        <div className="flex flex-col">
          <span>Бэлтгэл анги - 750 мянган төгрөг</span>
          <span>1-5 дугаар анги - 10 сая төгрөг</span>
          <span>6-9 дугаар анги - 12 сая төгрөг </span>
          <span>10-12-р анги - 12 сая төгрөг</span>
        </div>
      ),
    },
    {
      q: "Хөнгөлөлт",
      a: `Бэлтгэл ангийн төлбөрийг 100% төлнө.
      2023-2024 оны хичээлийн жилийн ҮНДСЭН элсэлтийн суудал баталгаажуулалт нийт төлбөрийн 50% төлнө.
      Үлдэгдэл төлбөрийг 9 сарын хугацаанд тэнцүү хуваан төлөх боломжтой.
      1 дүгээр сарын 1-ээс өмнө төлбөрөө бүрэн төлбөл нийт төлбөрийн 20% хөнгөлнө.
      3 дугаар сарын 1-ээс өмнө төлбөрөө бүрэн төлбөл нийт төлбөрийн 15% хөнгөлнө.
      6 дугаар сарын 1-ээс өмнө төлбөрөө бүрэн төлбөл нийт төлбөрийн 10% хөнгөлнө.
      9 дүгээр сарын 1-ээс өмнө төлбөрөө бүрэн төлбөл нийт төлбөрийн 5% хөнгөлнө.
      1 айлын 2 хүүхэд суралцах тохиолдолд төлбөрөө бүрэн төлбөл нэг сурагч хугацааны хөнгөлөлт эдэлж, 2 дахь сурагч нийт төлбөрөөс 20% хөнгөлнө.
      `,
    },
    {
      q: "Тэтгэлэг",
      a: `Жил бүр бид шинэ элсэгчиддээ зориулж 50-100 хувийн тэтгэлгийн шалгалт зарладаг. Тэтгэлгийн шалгалт 2 үе шаттай байдаг ба 1 үе шат математик, монгол хэлний шалгалт. 2 үе шат ярилцлага явагддаг. Тэтгэлгийн шалгалтын тухай 3 сараас эхлэн сургуулийн фэйсбүүк пэйж болон вебээр зарладаг.`,
    },
  ];

  const onTapPolicy = (i) => {
    setActiveQuestion((prev) => (i == prev ? -1 : i));
  };

  return (
    <div className="w-full mt-20 flex justify-center items-center flex-col">
      <div className="h-[11rem] w-full flex flex-col justify-center items-center">
        <div className="font-bold text-5xl font-['Roboto_Condensed']">
          түгээмэл
        </div>
        <div className="font-bold text-6xl font-['Roboto_Condensed'] text-pink">
          АСУУЛТУУД
        </div>
      </div>
      <div className="w-3/5 flex flex-col justify-center rounded-2xl p-2 mt-12 space-y-4">
        {questions.map((row, i) => (
          <>
            <button
              onClick={() => onTapPolicy(i)}
              className={`flex w-full justify-between border flex-col border-white/20 rounded-t px-4 py-2 text-left text-xl font-medium text-purple-900 focus:outline-none focus-visible:ring focus-visible:ring-yellow focus-visible:ring-opacity-75`}
            >
              <span>{row.q}</span>
              <div
                className="px-4 pt-4 pb-2 text-lg font-extralight text-white/60 text-gray-500 "
                hidden={activeQuestion != i}
              >
                {row.a}
              </div>
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

const UpIcon = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>,
];

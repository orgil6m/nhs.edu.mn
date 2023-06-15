/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FaqCard from "../cards/faqCard";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import MyTitle from "../title";
import { useRouter } from "next/router";
import { faqLocales } from "../../i18n/locales";

const FAQs = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  const questions = [
    [
      {
        question: "Сургуулийн талаар товч мэдээлэл?",
        answer:
          "Эх орондоо болон Америкт мэдээллийн технологийн чиглэлээр амжилттай ажиллаж буй залуучуудын үүсгэл санаачилгаар Ерөнхий боловсролын “Нэст Эдүкэйшн” сургууль байгуулагдсан. \n \n2019 онд ахлах ангийн 6 бүлэгтэй үйл ажиллагаагаа эхлүүлж байсан бол 2020 онд дунд анги, 2021 онд бага ангийн элсэлтээ авч, бүрэн дунд сургууль болон өргөжсөн бөгөөд 2022 онд хичээлийн 2 байртай болон үйл ажиллагаагаа явуулж байна. \n \n023-2024 оны хичээлийн жилд Хан-Уул дүүргийн Маршал Таун хотхонд салбар бага сургуулиа нээж 1-3 дугаар ангийн элсэлтээ авч байна.",
      },
      {
        question: "Ямар хөтөлбөрөөр хичээллэдэг вэ?",
        answer:
          "Мэдээллийн технологийн гүнзгийрүүлсэн сургалттай Ерөнхий боловсролын Нэст Эдүкэйшн сургууль нь ерөнхий эрдмийн бүх хичээлүүд чанартай сайн заадгаас гадна ирээдүйн мэдээллийн технологийн инженерүүдийг бэлдэж байна. \n \nМэдээллийн технологийн хөтөлбөр: Програмчлалын суурь, Вебийн суурь, Дизайны суурь үзнэ, UI/UX дизайн, Back-End, Front-End ба Mobile хөгжүүлэлт гэсэн энэ 4 чиглэлээр гүнзгийрч сонгон суралцана. \n \nБага, дунд ангийн хөтөлбөрийг Хүүхэд эцэг эх сургалт судалгааны Хөөрхөн шар шувуу төв-тэй хамтран боловсруулсан хөтөлбөрөөр хичээллэдэг.",
      },
      {
        question: "Сургалтын төлбөр хэд вэ?",
        answer: (
          <div className="flex flex-col gap-2">
            <span>
              Бэлтгэл анги -
              <span className="text-green  ml-1">750 мянган төгрөг</span>
            </span>
            <span>
              1-5 дугаар анги -
              <span className="text-green  ml-1">10 сая төгрөг</span>
            </span>
            <span>
              6-9 дугаар анги -
              <span className="text-green  ml-1">12 сая төгрөг</span>
            </span>
            <span>
              10-12-р анги -
              <span className="text-green  ml-1">12 сая төгрөг</span>
            </span>
          </div>
        ),
      },
      {
        question: "Хөнгөлөлт",
        answer:
          "Бэлтгэл ангийн төлбөрийг 100% төлнө. \n\n2023-2024 оны хичээлийн жилийн ҮНДСЭН элсэлтийн суудал баталгаажуулалт нийт төлбөрийн 50% төлнө.  \n\nҮлдэгдэл төлбөрийг 9 сарын хугацаанд тэнцүү хуваан төлөх боломжтой. 1 дүгээр сарын 1-ээс өмнө төлбөрөө бүрэн төлбөл нийт төлбөрийн 20% хөнгөлнө. \n\n3 дугаар сарын 1-ээс өмнө төлбөрөө бүрэн төлбөл нийт төлбөрийн 15% хөнгөлнө. \n\n6 дугаар сарын 1-ээс өмнө төлбөрөө бүрэн төлбөл нийт төлбөрийн 10% хөнгөлнө. 9 дүгээр сарын 1-ээс өмнө төлбөрөө бүрэн төлбөл нийт төлбөрийн 5% хөнгөлнө. \n\n1 айлын 2 хүүхэд суралцах тохиолдолд төлбөрөө бүрэн төлбөл нэг сурагч хугацааны хөнгөлөлт эдэлж, 2 дахь сурагч нийт төлбөрөөс 20% хөнгөлнө.",
      },
      {
        question: "Тэтгэлэг",
        answer: `Жил бүр бид шинэ элсэгчиддээ зориулж 50-100 хувийн тэтгэлгийн шалгалт зарладаг. Тэтгэлгийн шалгалт 2 үе шаттай байдаг ба 1 үе шат математик, монгол хэлний шалгалт. 2 үе шат ярилцлага явагддаг. Тэтгэлгийн шалгалтын тухай 3 сараас эхлэн сургуулийн фэйсбүүк пэйж болон вебээр зарладаг.`,
      },
    ],
    [
      {
        question: "Brief information about the school?",
        answer: `"Nest Education IT School" was established in 2019 through the initiative of engineers who have been successful in the field of information technology in Mongolia and the Silicon Valley of the United States. \n\nIn the same year, the school commenced its operations with six groups in the "senior class". Subsequently, in 2020, the school expanded its activities by enrolling middle classes, and in 2021, it further broadened its reach by introducing elementary classes. This progressive expansion has enabled the school to provide quality education to students at different stages of their academic journey.`,
      },
      {
        question: "Programs?",
        answer:
          "The Nest Education IT School provides high-quality teaching in all general academic subjects while offering in-depth information technology training, preparing students to become future IT engineers. \n\nThe IT program at The Nest Education IT School offers comprehensive electives in four key areas: Programming Basics, Web Basics, Design Basics, and UI/UX Design. Students also have the opportunity to specialize in Back-End, Front-End, and Mobile Development. \n\nFurthermore, the elementary and middle school programs at The Nest Education IT School are developed in collaboration with the Cute Owl Center for Child and Parent Training and Research, ensuring a well-rounded and effective educational experience.",
      },
      {
        question: "How much is the Tuition Fee?",
        answer: (
          <div className="flex flex-col gap-2">
            <span>
              Preparatory class -
              <span className="text-green  ml-1">750'000₮</span>
            </span>
            <span>
              Elementary School -
              <span className="text-green  ml-1">10'000'000₮</span>
            </span>
            <span>
              Secondary School -
              <span className="text-green  ml-1">12'000'000₮</span>
            </span>
            <span>
              High School -<span className="text-green  ml-1">12'000'000₮</span>
            </span>
          </div>
        ),
      },
      {
        question: "Financial aid & Discounts",
        answer:
          "100% of the Preparatory Class fee will be paid. \n\nFor 2023-2024 academic year MAIN enrollment seat confirmation will pay 50% of the total fee. \nThe remaining tuition fees can be paid in equal installments over 9 months. If you pay in full before January 1, you will get a 20% discount. \n\nIf you pay in full before March 1, you will get a 15% discount. \n\nIf you pay in full before June 1, you will receive a 10% discount. If you pay in full before September 1, you will receive a 5% discount.\n\nIn case of 2 children from 1 family studying, if the fees are paid in full, one student will get a period discount, and the second student will get a 20% discount from the total fee.",
      },
      {
        question: "Scholarships",
        answer: `Every year we announce 50-100% scholarship exam for our new recruits. Scholarship exam has 2 stages, 1st stage is mathematics and Mongolian language exam. The second stage is the interview. \n\nThe scholarship exam is announced on the school's Facebook page and on the web starting from 3 months.`,
      },
    ],
  ];

  return (
    <div className="w-full py-20 responsive-padding flex justify-center items-center flex-col md:mb-40 mb-20">
      <MyTitle
        row1={faqLocales[locale].labels[0]}
        row2={faqLocales[locale].labels[1]}
        color="pink"
      />
      <div className="md:w-2/3 flex flex-col gap-5">
        {questions[locale].map((row, index) => (
          <div
            key={index}
            className="w-full border border-white/20 rounded-md flex flex-col "
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="p-5 hover-transition text-left flex justify-between items-center w-full text-lg font-bold uppercase rounded-lg">
                    <span className={open ? "text-pink" : ""}>
                      {row.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        !open && "rotate-180"
                      } hover-transition w-6 h-6 mx-2 text-pink`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 whitespace-pre-wrap text-white font-light ">
                    {row.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

import React, { useEffect, useState } from "react";

import img1 from "../../assets/videos/1.jpeg";
import img2 from "../../assets/videos/2.jpeg";
import img3 from "../../assets/videos/3.jpeg";
import img4 from "../../assets/videos/4.jpeg";
import img5 from "../../assets/videos/5.jpeg";
import img6 from "../../assets/videos/6.jpeg";
import img7 from "../../assets/videos/7.jpeg";
import img8 from "../../assets/videos/8.jpeg";
import img9 from "../../assets/videos/9.jpeg";

import { videoLocales } from "../../i18n/locales";
import { useRouter } from "next/router";
import MyTitle from "../title";

const Videos = () => {
  const data = [
    [
      {
        url: "https://www.youtube.com/embed/Vfwg3D4qrj8",
        img: img1.src,
        title: "Hackateen гэж юу вэ?",
        details:
          "Б.Амартайван (Нэст ахлах сургуулийн хамтран үүсгэн байгуулагч)",
      },
      {
        url: "https://www.youtube.com/embed/xUJJoVzUBPg",
        img: img2.src,
        title: "Б. Бүрт-Үжин",
        details: "Эцэг эхийн төлөөлөл",
      },
      {
        url: "https://www.youtube.com/embed/OxOTJL4ERtE",
        img: img3.src,
        title: "С.Жавхлан",
        details: "Эцэг эхийн төлөөлөл",
      },
      {
        url: "https://www.youtube.com/embed/UwvhIvB_rG0",
        img: img4.src,
        title: "Наранчандмань юу бодож байна ?",
        details: "GEN Z үеийн төлөөлөл",
      },
      {
        url: "https://www.youtube.com/embed/c9rQxrKrLuM",
        img: img5.src,
        title: "Орчлон юу бодож байна ?",
        details: "GEN Z үеийн төлөөлөл",
      },
      {
        url: "https://www.youtube.com/embed/gLH1ptacFuM",
        img: img6.src,
        title: "Мишээл юу бодож байна ?",
        details: "GEN Z үеийн төлөөлөл",
      },
      {
        url: "https://www.youtube.com/embed/MW5oS8lmRZE",
        img: img7.src,
        title: "11Б ангийн сурагч Р.Сэргэлэн",
        details:
          '11Б ангийн сурагч Р.Сэргэлэн нь ирээдүйд мэдээллийн технологийн салбарт ажиллаж, хувь нэмрээ оруулах хүсэлтэй мянга мянган хүүхдүүдийн нэг төлөөлөл юм. Сэргэлэн нь сургуульдаа элсэн орсноос хойш 1 жилийн дотор хурдацтай өсөн дэвжиж, "Hackateen-2020" програмчлалын улсын олимпиадад III байр эзэлсэн бөгөөд ахлах сургуулиа төгсөхөөсөө өмнө хэрхэн ирээдүйн мэргэжлээ сонгож байсан түүхээсээ та бүхэнтэй доорх богино хэмжээний бичлэгээр хуваалцаж байна 😊💁‍♂️',
      },
      {
        url: "https://www.youtube.com/embed/46lPKDNPcVI",
        img: img8.src,
        title: "11Б ангийн сурагч Б.Тамир",
        details:
          'Та бүхэнд "Nest education" 🚀🚀🚀 мэдээллийн технологийн сургуулийн онцлох сурагчдыг цуврал түүхүүдээр хүргэж байгаа билээ 😃 Энэ удаагийн дугаараар 11Б ангийн суралцагч Тамирааг сургуулийнхаа болон өсвөр үе, ахлах ангийнхныхаа төлөөлөл болон оролцохыг урьлаа 😇😇😇',
      },
      {
        url: "https://www.youtube.com/embed/UPcBG-QMnio",
        img: img9.src,
        title: "НЭСТ ТАНД ОЙРТЛОО",
        details:
          "Нэст Эдүкэйшн сургууль маань үйл ажиллагаагаа өргөжүүлж, Хан-Уул дүүрэг, 17-р хороо, Маршал Таунд бага сургуулийн салбараа нээж байна",
      },
    ],
    [
      {
        url: "https://www.youtube.com/embed/Vfwg3D4qrj8",
        img: img1.src,
        title: "What is HackaTeen",
        details: "B.Amartaivan (The Co-Founder of Nest Education IT School)",
      },
      {
        url: "https://www.youtube.com/embed/xUJJoVzUBPg",
        img: img2.src,
        title: "B. Burt-Ujin",
        details: "Representation of parents",
      },
      {
        url: "https://www.youtube.com/embed/OxOTJL4ERtE",
        img: img3.src,
        title: "S.Javkhlan",
        details: "Representation of parents",
      },
      {
        url: "https://www.youtube.com/embed/UwvhIvB_rG0",
        img: img4.src,
        title: "What is Naranchandman thinking?",
        details: "Representation of the GEN Z generation",
      },
      {
        url: "https://www.youtube.com/embed/c9rQxrKrLuM",
        img: img5.src,
        title: "What is Orchlon thinking?",
        details: "Representation of the GEN Z generation",
      },
      {
        url: "https://www.youtube.com/embed/gLH1ptacFuM",
        img: img6.src,
        title: "What is Misheel thinking?",
        details: "Representation of the GEN Z generation",
      },
      {
        url: "https://www.youtube.com/embed/MW5oS8lmRZE",
        img: img7.src,
        title: "R. Sergelen, 11B grade student",
        details: "Representation of the GEN Z generation",
      },
      {
        url: "https://www.youtube.com/embed/46lPKDNPcVI",
        img: img8.src,
        title: "B. Tamir, 11B grade student",
        details: "Representation of the GEN Z generation",
      },
      {
        url: "https://www.youtube.com/embed/UPcBG-QMnio",
        img: img9.src,
        title: "NEST IS CLOSER TO YOU",
        details:
          "Nest Education School is expanding its activities and opening a elemenatary school branch in Marshall Town, District 17, Han-Uul District.",
      },
    ],
  ];

  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  const [main, setMain] = useState(data[locale][data.length - 1]);

  useEffect(() => {
    setMain(data[locale][data.length - 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div className="py-20">
      <MyTitle
        row1={videoLocales[locale].labels[0]}
        row2={videoLocales[locale].labels[1]}
        color="green"
      />
      <div className="w-full flex flex-col responsive-padding ">
        <div className="w-full grid md:grid-cols-2 gap-10 mb-12 ">
          <div className="w-full aspect-video">
            <iframe
              width="100%"
              height="100%"
              title={main.title}
              src={main.url}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full aspect-video flex flex-col md:mb-0 mb-12">
            <span className="text-3xl">{main.title}</span>
            <span className="text-white/60 font-light mt-4">
              {main.details}
            </span>
          </div>
        </div>
        <div className="w-full flex gap-5 overflow-x-scroll ">
          {data[locale].reverse().map((row, index) => (
            <div
              key={index}
              className="h-32 aspect-video opacity-40 hover:opacity-100 hover-transition rounded bg-cover bg-center shrink-0"
              onClick={() => setMain(row)}
              style={{
                backgroundImage: `url(${row.img})`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;

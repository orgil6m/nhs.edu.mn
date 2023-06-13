import React, { useState } from "react";

import img1 from "../../assets/videos/1.jpeg";
import img2 from "../../assets/videos/2.jpeg";
import img3 from "../../assets/videos/3.jpeg";
import img4 from "../../assets/videos/4.jpeg";
import img5 from "../../assets/videos/5.jpeg";
import img6 from "../../assets/videos/6.jpeg";
import img7 from "../../assets/videos/7.jpeg";
import img8 from "../../assets/videos/8.jpeg";
import img9 from "../../assets/videos/9.jpeg";
import Image from "next/image";

const Videos = () => {
  const data = [
    {
      url: "https://www.youtube.com/embed/Vfwg3D4qrj8",
      img: img1.src,
      title: "Hackateen гэж юу вэ?",
      details: "Б.Амартайван (Нэст ахлах сургуулийн хамтран үүсгэн байгуулагч)",
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
      title: "GEN Z үеийн төлөөлөл",
      details: "Орчлон юу бодож байна ?",
    },
    {
      url: "https://www.youtube.com/embed/gLH1ptacFuM",
      img: img6.src,
      title: "GEN Z үеийн төлөөлөл",
      details: "Мишээл юу бодож байна ?",
    },
    {
      url: "https://www.youtube.com/embed/MW5oS8lmRZE",
      img: img7.src,
      title: '"Нэст Эдүкэйшн" сургуулийн 11Б ангийн сурагч Р.Сэргэлэн',
      details:
        '11Б ангийн сурагч Р.Сэргэлэн нь ирээдүйд мэдээллийн технологийн салбарт ажиллаж, хувь нэмрээ оруулах хүсэлтэй мянга мянган хүүхдүүдийн нэг төлөөлөл юм. Сэргэлэн нь сургуульдаа элсэн орсноос хойш 1 жилийн дотор хурдацтай өсөн дэвжиж, "Hackateen-2020" програмчлалын улсын олимпиадад III байр эзэлсэн бөгөөд ахлах сургуулиа төгсөхөөсөө өмнө хэрхэн ирээдүйн мэргэжлээ сонгож байсан түүхээсээ та бүхэнтэй доорх богино хэмжээний бичлэгээр хуваалцаж байна 😊💁‍♂️',
    },
    {
      url: "https://www.youtube.com/embed/46lPKDNPcVI",
      img: img8.src,
      title: '"Нэст эдүкэйшн" сургуулийн 11Б ангийн сурагч Б.Тамир',
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
  ];

  const [main, setMain] = useState(data[0]);

  return (
    <div className="h-[54rem] w-full flex flex-col justify-between">
      <div className="h-[11rem] w-full flex flex-col justify-center items-center">
        <div className="font-bold text-5xl font-['Roboto_Condensed']">
          сурагч, эцэг эхчүүдийн
        </div>
        <div className="font-bold text-6xl font-['Roboto_Condensed'] text-green">
          сэтгэгдэл
        </div>
      </div>
      <div className="w-full flex flex-col responsive-padding ">
        <div className="w-full  grid grid-cols-2  mb-20 space-x-20">
          <iframe
            width="100%"
            height="100%"
            title={main.title}
            src={main.url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="w-full aspect-video flex flex-col mt-16">
            <div className="h-fit font-bold text-4xl">
              <span>{main.title}</span>
            </div>
            <div className="text-white/60 font-extralight text-xl mt-4">
              <span>{main.details}</span>
            </div>
          </div>
        </div>

        <div class="w-full h-40 flex gap-8  overflow-x-scroll ">
          {data.map((row, index) => (
            <div
              key={index}
              className=" w-60 aspect-video relative "
              onClick={() => setMain(row)}
            >
              <Image
                src={row.img}
                fill
                alt={row.title}
                className="object-cover rounded opacity-40 hover:opacity-100 hover-transition cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;

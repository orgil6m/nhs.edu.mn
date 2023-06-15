/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import img1 from "../../assets/carousel/1.jpg";
import img2 from "../../assets/carousel/2.jpg";
import img3 from "../../assets/carousel/3.jpg";
import img4 from "../../assets/carousel/4.jpg";
import img5 from "../../assets/carousel/5.jpg";
import img6 from "../../assets/carousel/6.jpg";
import img7 from "../../assets/carousel/7.jpg";
import img8 from "../../assets/carousel/8.jpg";
import img9 from "../../assets/carousel/9.jpg";
import img10 from "../../assets/carousel/10.jpg";
import img11 from "../../assets/carousel/11.jpg";
import img12 from "../../assets/carousel/12.jpg";
import img13 from "../../assets/carousel/13.jpg";
import img14 from "../../assets/carousel/14.jpg";
import img15 from "../../assets/carousel/15.jpg";
import img16 from "../../assets/carousel/16.jpg";
import img17 from "../../assets/carousel/17.jpg";
import img18 from "../../assets/carousel/18.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import { landingLocales } from "../../i18n/locales";
import MyTitle from "../title";

const Carousel = () => {
  const images = [
    [
      img1.src,
      img2.src,
      img3.src,
      img4.src,
      img5.src,
      img6.src,
      img1.src,
      img2.src,
      img3.src,
      img4.src,
      img5.src,
      img6.src,
    ],
    [
      img7.src,
      img8.src,
      img9.src,
      img10.src,
      img11.src,
      img12.src,
      img7.src,
      img8.src,
      img9.src,
      img10.src,
      img11.src,
      img12.src,
    ],
    [
      img13.src,
      img14.src,
      img15.src,
      img16.src,
      img17.src,
      img18.src,
      img13.src,
      img14.src,
      img15.src,
      img16.src,
      img17.src,
      img18.src,
    ],
  ];

  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  const [showImg, setShowImg] = useState(false);
  const [img, setImg] = useState();
  const showImage = (r) => {
    setShowImg(true);
    setImg(r);
  };

  return (
    <div className="w-full flex flex-col my-20 gap-5 ">
      <MyTitle
        row1={landingLocales[locale].carousel.labels[0]}
        row2={landingLocales[locale].carousel.labels[1]}
        color="yellow"
      />

      {images.map((row, index) => (
        <div key={index} className="flex gap-5 marquee hover-transition">
          {row.map((r, i) => (
            <div key={i} className="shrink-0 cursor-pointer">
              <img
                src={r}
                alt="img"
                className="2xl:h-60 h-32 rounded-xl"
                onClick={() => showImage(r)}
              />
            </div>
          ))}
        </div>
      ))}
      {showImg && (
        <div
          className="fixed inset-0 w-screen h-screen bg-dark/[95%] z-40 flex items-center justify-center backdrop-blur cursor-pointer p-8"
          onClick={() => setShowImg(!showImage)}
        >
          <img
            src={img}
            className="md:max-w-[50%] md:max-h-[75%] rounded-xl"
            alt="img"
          />
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Carousel;

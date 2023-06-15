import React from "react";
import Header from "../../components/header";
import moment from "moment";
import { newsData } from "../../data/news";
import { useRouter } from "next/router";
import MyTitle from "../../components/title";
import { newsLocales } from "../../i18n/locales";
import Footer from "../../components/footer";
import MetaHead from "../../components/metaHead";
const News = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";

  return (
    <div className="flex flex-col pt-40 relative w-screen overflow-hidden">
      <Header />
      <MetaHead title="Сургуулийн эргэн тойронд" />
      <MyTitle
        row1={newsLocales[locale].labels[0]}
        row2={newsLocales[locale].labels[1]}
        color="blue"
      />

      <div className="pb-40 responsive-padding grid md:grid-cols-3 md:gap-20 gap-10  w-full ">
        {newsData[locale].map((row, index) => (
          <NewsCard key={index} data={row} />
        ))}
      </div>

      <Footer />

      <div className="absolute md:w-1/2 w-3/4 rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-green opacity-[40%] md:-right-1/4 -z-10 top-0 -right-1/4"></div>
      <div className="absolute md:w-1/2 w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-pink  opacity-[40%]  md:-left-1/4 md:top-[15%] top-[12%] -left-1/2 -z-20"></div>
      <div className="absolute md:w-1/2 w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-yellow  opacity-[40%]  md:-right-1/4 md:top-[45%] top-[30%] -right-1/2 -z-30"></div>
      <div className="absolute md:w-2/3 w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-blue  opacity-[40%]  md:-right-1/4 md:top-[70%] top-[52%] -left-1/2 -z-30"></div>
      <div className="absolute w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-pink  md:opacity-[0%] opacity-[40%]  md:-right-1/4 top-[80%] -right-1/2 -z-30"></div>
      <div className="absolute w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-primary  md:opacity-[20%] opacity-40  md:-right-1/4 md:top-[90%] top-[96%] -right-1/2 -z-30"></div>
    </div>
  );
};

export default News;

const NewsCard = ({ data }) => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  const getDiff = (dateS) => {
    let beg = moment(dateS);
    let fin = moment();
    return fin.diff(beg, "days");
  };

  return (
    <div
      className="w-full rounded-3xl bg-white/[2%] hover:bg-white/10 overflow-hidden border border-white/10 backdrop-blur hover-transition  cursor-pointer"
      onClick={() => router.push(`/news/${data._id}`)}
    >
      <MetaHead />
      <div
        className="aspect-video w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${data.imgUrl})`,
        }}
      ></div>
      <div className="p-4 flex flex-col gap-2">
        <span>
          {data.title.slice(0, 70)}
          {data.title.length > 70 && "..."}
        </span>
        <span className="font-light text-white/60">
          {data.newsText.slice(0, 70)}
          {data.newsText.length > 70 && "..."}
        </span>
        <span className="font-light text-blue ">
          {getDiff(data.createdAt)} {newsLocales[locale].diff}
        </span>
      </div>
    </div>
  );
};

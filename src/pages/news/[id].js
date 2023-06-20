import React from "react";
import { newsData } from "../../data/news.js";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import moment from "moment";
import { useRouter } from "next/router";
import { newsLocales } from "../../i18n/locales.js";
import { Markup } from "interweave";
import NewsCard from "../../components/cards/newsCard.js";
import MetaHead from "../../components/metaHead.js";

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const locale = context.locale === "en" ? "1" : "0";
  const data = newsData[locale].find((e) => e._id == id);
  return { props: { data } };
};

const NewsId = ({ data }) => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";
  const getDiff = (dateS) => {
    let beg = moment(dateS);
    let fin = moment();
    return fin.diff(beg, "days");
  };

  return (
    <div className="relative overflow-hidden">
      <Header />
      <MetaHead title={data.title} cover={data.imgUrl} />
      <div className="w-full flex flex-col items-center justify-center py-40 responsive-padding ">
        <div className="md:w-[70%] w-full flex flex-col gap-5">
          <span className="md:text-4xl text-2xl font-bold ">{data.title}</span>
          <div className="w-full h-0.5 bg-white/10"> </div>
          <span className="font-light text-blue">
            {getDiff(data.createdAt)} {newsLocales[locale].diff}
          </span>
        </div>
        <div className="md:w-[70%] w-full flex flex-col gap-10 mt-20">
          <div
            className="w-full aspect-video bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${data.imgUrl})` }}
          />
          <div className="flex ">
            <div className="font-light leading-10 text-lg text-white/80 ">
              <Markup content={data.text} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-40">
          <span className="md:text-4xl text-2xl uppercase font-bold mb-12">
            Бусад мэдээллүүд
          </span>
          <div className="md:grid md:grid-cols-3 md:gap-20 gap-5 flex w-full overflow-x-auto overflow-y-hidden">
            {newsData[locale].slice(0, 3).map((row, index) => (
              <NewsCard key={index} data={row} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute md:w-1/2 w-3/4 rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-green opacity-[40%] md:-right-1/4 -z-10 top-0 -right-1/4"></div>
      <div className="absolute md:w-1/2 w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-pink  opacity-[40%]  md:-left-1/4 md:top-[15%] top-[12%] -left-1/2 -z-20"></div>
      <div className="absolute md:w-1/2 w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-yellow  opacity-[40%]  md:-right-1/4 md:top-[45%] top-[30%] -right-1/2 -z-30"></div>
      <div className="absolute md:w-2/3 w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-blue  opacity-[40%]  md:-right-1/4 md:top-[70%] top-[52%] -left-1/2 -z-30"></div>
      <div className="absolute w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-pink  md:opacity-[0%] opacity-[40%]  md:-right-1/4 top-[80%] -right-1/2 -z-30"></div>
      <div className="absolute w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-primary  md:opacity-[20%] opacity-40  md:-right-1/4 md:top-[90%] top-[96%] -right-1/2 -z-30"></div>
      <Footer />
    </div>
  );
};

export default NewsId;

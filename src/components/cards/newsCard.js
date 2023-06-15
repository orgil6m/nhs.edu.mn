import React from "react";
import moment from "moment";
import { newsLocales } from "../../i18n/locales";
import { useRouter } from "next/router";

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
      className="md:w-full w-[90%] shrink-0 rounded-3xl bg-white/[2%] hover:bg-white/10 overflow-hidden border border-white/10 backdrop-blur hover-transition  cursor-pointer"
      onClick={() => router.push(`/news/${data._id}`)}
    >
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

export default NewsCard;

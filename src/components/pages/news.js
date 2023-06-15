import React from "react";
import NewsCard from "../cards/newsCard";
import { newsData } from "../../data/news";
import { useRouter } from "next/router";
import MyTitle from "../title";
import { newsLocales } from "../../i18n/locales";

const News = () => {
  const router = useRouter();
  const locale = router.locale === "en" ? "1" : "0";

  return (
    <div className="flex flex-col responsive-padding py-20">
      <MyTitle
        row1={newsLocales[locale].labels[0]}
        row2={newsLocales[locale].labels[1]}
        color="blue"
      />
      <div className="md:grid md:grid-cols-3 md:gap-20 gap-5 flex w-full overflow-x-auto overflow-y-hidden">
        {newsData[locale].slice(0, 3).map((row, index) => (
          <NewsCard key={index} data={row} />
        ))}
      </div>
    </div>
  );
};

export default News;

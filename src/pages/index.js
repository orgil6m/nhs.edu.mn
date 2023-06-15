import Carousel from "../components/pages/carousel";
import FAQs from "../components/pages/faqs";
import Landing from "../components/pages/landing";
import News from "../components/pages/news";
import Programs from "../components/pages/programs";
import Videos from "../components/pages/videos";

import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import MetaHead from "../components/metaHead";

export default function Home() {
  return (
    <div className="relative w-screen overflow-hidden">
      <MetaHead />
      <Header />
      <Landing />
      <Programs />
      <Carousel />
      <News />
      <Videos />
      <FAQs />
      <Footer />

      <div className="absolute md:w-1/2 w-3/4 rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-green opacity-[40%] md:-right-1/4 -z-10 top-0 -right-1/4"></div>
      <div className="absolute md:w-1/2 w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-pink  opacity-[40%]  md:-left-1/4 md:top-[15%] top-[12%] -left-1/2 -z-20"></div>
      <div className="absolute md:w-1/2 w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-yellow  opacity-[40%]  md:-right-1/4 md:top-[45%] top-[30%] -right-1/2 -z-30"></div>
      <div className="absolute md:w-2/3 w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-blue md:opacity-[40%] opacity-[20%]  md:-right-1/4 md:top-[70%] top-[52%] -left-1/2 -z-30"></div>
      <div className="absolute w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-pink  md:opacity-[0%] opacity-[20%]  md:-right-1/4 top-[70%] -left-1/2 -z-30"></div>
      <div className="absolute w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-primary opacity-[20%]   md:-right-1/4 md:top-[90%] top-[96%] -right-1/2 -z-30"></div>
    </div>
  );
}

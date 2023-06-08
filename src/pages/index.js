import Carousel from "../components/pages/carousel";
import FAQs from "../components/pages/faqs";
import Landing from "../components/pages/landing";
import News from "../components/pages/news";
import Programs from "../components/pages/programs";
import Videos from "../components/pages/videos";

import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />

      <Landing />
      <Programs />
      <Carousel />
      <News />
      <Videos />
      <FAQs />
      <Footer />
    </div>
  );
}

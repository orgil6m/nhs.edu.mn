import Footer from "../components/footer";
import Header from "../components/header";

import MetaHead from "../components/metaHead";
import AboutNest from "../components/pages/about";
import Management from "../components/pages/management";
import Roadmap from "../components/pages/roadmap";
import Values from "../components/pages/values";
import React from "react";

export default function About() {
  return (
    <div className="relative w-screen overflow-hidden">
      <MetaHead title="Бидний тухай | " />
      <Header />
      <AboutNest />
      <Values />
      <Roadmap />
      <Management />
      <Footer />
      <div className="fixed md:w-1/2 w-3/4 rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-blue opacity-[40%] md:-right-1/4 -z-10 top-0 -right-1/4"></div>
      <div className="fixed w-full rounded-full aspect-square md:blur-[20rem] blur-[4rem] bg-gradient-to-b from-primary  md:opacity-[40%] opacity-40  md:-right-1/4 top-[90%]  -left-1/2 -z-30"></div>
    </div>
  );
}

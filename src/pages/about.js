import Footer from "../components/footer";
import Header from "../components/header";

import AboutNest from "../components/pages/about";
import Management from "../components/pages/management";
import Roadmap from "../components/pages/roadmap";
import Values from "../components/pages/values";
import React from "react";

export default function About() {
  return (
    <div>
      <Header />
      <AboutNest />
      <Values />
      <Roadmap />
      <Management />
      <Footer />
    </div>
  );
}

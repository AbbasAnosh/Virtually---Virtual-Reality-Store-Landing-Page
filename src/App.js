import React, { useState, useEffect } from "react";
import Banner from "./components/Banner.js";
import Header from "./components/Header.js";
import NavMobile from "./components/NavMobile.js";
import Experience from "./components/Experience.js";
import Video from "./components/Video.js";
import Headsets from "./components/Headsets.js";
import Testimonial from "./components/Testimonial.js";

import Aos from "aos";
import "aos/dist/aos.css";
import Works from "./components/Works.js";
import Team from "./components/Team.js";
import Question from "./components/Question.js";
import Footer from "./components/Footer.js";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="relative">
      <Header setNavMobile={setNavMobile} />
      <Banner />
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Works />
      <Testimonial />
      <Team />
      <Question />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Announcer from "./Announcer";
import Header from "../components/Header";
// import HeroSection from "../components/HeroSection";
import WhatIsTedx from "../components/WhatIsTedx";
// import EventInfo from "../components/EventInfo";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Announcer />
      <Header />
      <WhatIsTedx />
      <main>
        {/* <HeroSection /> */}
        {/* <EventInfo /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;


import React from "react";

import AboutHero from "../sections/about/AboutHero.jsx";
import WhoWeAre from "../sections/about/WhoWeAre.jsx";
import CompanyJourney from "../sections/about/CompanyJourney.jsx";

import WhatWeDo from "../sections/about/WhatWeDo.jsx";
import WhyReffto from "../sections/about/WhyReffto.jsx";
import LeadershipMessage from "../sections/about/LeadershipMessage.jsx";

const About = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <AboutHero />
      <WhoWeAre />
      <CompanyJourney />

      <LeadershipMessage />
      <WhatWeDo />
      <WhyReffto />
    </main>
  );
};

export default About;

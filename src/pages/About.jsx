
import React from "react";

import AboutHero from "../sections/About/AboutHero.jsx";
import WhoWeAre from "../sections/About/WhoWeAre.jsx";
import CompanyJourney from "../sections/About/CompanyJourney.jsx";

import WhatWeDo from "../sections/About/WhatWeDo.jsx";
import WhyReffto from "../sections/About/WhyReffto.jsx";
import LeadershipMessage from "../sections/About/LeadershipMessage.jsx";

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

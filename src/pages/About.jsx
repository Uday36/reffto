
import React from "react";

import AboutHero from "../sections/about/AboutHero";
import WhoWeAre from "../sections/about/WhoWeAre";
import CompanyJourney from "../sections/about/CompanyJourney";

import WhatWeDo from "../sections/about/WhatWeDo";
import WhyReffto from "../sections/about/WhyReffto";
import LeadershipMessage from "../sections/about/LeadershipMessage";

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

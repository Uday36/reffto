import CareerHero from "./CareerHero";
import OpenPositions from "./OpenPositions";
import CareerFAQ from "./CareerFAQ";
import CareerCTA from "./CareerCTA";

export { CareerHero, OpenPositions, CareerFAQ, CareerCTA };

export default function Career() {
  return (
    <div className="w-full bg-white">
      <CareerHero />
      <OpenPositions />
      <CareerFAQ />
      <CareerCTA />
    </div>
  );
}


import React from "react";

const LeadershipMessage = () => {
  const leader = {
    name: "Sameer Sagar",
    designation: "Director",
    image: "/assets/images/robo-21.jpg",
  };

  // Replace this draft with the leadership-approved message.
  const message = [
    "We believe technology should open doors to new possibilities.",
    "We believe in thinking beyond limitations and turning ideas into meaningful experiences.",
    "We are here to explore, experiment, learn, and create.",
    "We see every challenge as an opportunity to build something better.",
    "Our journey is not just about technology, but about the people and ideas that move it forward.",
    "Together, we want to inspire curiosity, encourage innovation, and shape a future full of possibilities.",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 xl:gap-20">

          {/* Leadership photograph */}
          <div className="relative">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9C07BC]">
                Leadership
              </p>

              <h2 className="mt-3 text-4xl font-normal tracking-tight text-[#171329] sm:text-5xl">
                Growing{" "}
                <span className="font-bold">Together</span>
              </h2>

              <div className="mt-6 h-[3px] w-12 bg-[#171329]" />
            </div>

            <div className="relative mx-auto max-w-[560px] lg:ml-8">
              <div className="absolute -bottom-3 -left-3 h-full w-full border border-[#E9E2EF]" />

              <div className="relative aspect-[1.08/1] overflow-hidden bg-[#F1EFF3]">
                <img
                  src={leader.image}
                  alt={`${leader.name} - ${leader.designation} at Reffto`}
                  className="h-full w-full object-cover object-center grayscale transition-all duration-700 hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-7 right-0 bg-white px-5 py-3 shadow-[0_8px_30px_rgba(23,19,41,0.07)] sm:px-7">
                <p className="text-sm font-bold uppercase tracking-wide text-[#171329]">
                  {leader.name}
                </p>
                <p className="mt-1 text-xs font-medium text-[#777184]">
                  {leader.designation}
                </p>
              </div>
            </div>
          </div>

          {/* Leadership message */}
          <div className="relative pt-4 lg:pt-12">
            <span
              aria-hidden="true"
              className="block h-14 font-serif text-7xl leading-none text-[#9C07BC]/65"
            >
              “
            </span>

            <div className="space-y-3 text-[15px] leading-[1.85] text-[#777777] sm:text-base">
              {message.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <span
                aria-hidden="true"
                className="font-serif text-7xl leading-none text-[#9C07BC]/65"
              >
                ”
              </span>
            </div>

            <div className="mt-1 text-right">
              <p className="text-base font-bold uppercase tracking-wide text-[#171329] sm:text-lg">
                {leader.name}
              </p>
              <p className="mt-1 text-xs font-semibold text-[#777184]">
                {leader.designation}
              </p>
            </div>

            <div className="mt-10 flex items-center justify-end gap-2">
              <span className="h-[2px] w-8 bg-[#9C07BC]" />
              <span className="h-[2px] w-3 bg-[#F472B6]" />
              <span className="h-[2px] w-2 bg-[#E9E2EF]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadershipMessage;



import React, { useEffect, useRef, useState } from "react";

const journey = [
  {
    number: "01",
    title: "The Beginning",
    subtitle: "Where the idea started",
    description:
      "Every meaningful journey begins with an idea. Add the story behind the creation of Reffto, the inspiration that started it and the problem it aims to solve.",
    tag: "THE IDEA",
  },
  {
    number: "02",
    title: "Taking the First Step",
    subtitle: "Turning an idea into action",
    description:
      "Share how Reffto took its first steps, the initial initiatives, early work and the people who helped bring the vision to life.",
    tag: "THE FIRST STEP",
  },
  {
    number: "03",
    title: "Growing Through Innovation",
    subtitle: "Learning, building and evolving",
    description:
      "Highlight important developments in Reffto's journey, including technology initiatives, robotics, drone technology, IoT and practical learning experiences.",
    tag: "THE GROWTH",
  },
  {
    number: "04",
    title: "Where We Are Today",
    subtitle: "Our work and capabilities",
    description:
      "Showcase Reffto's current work, technology capabilities, institutional initiatives and the opportunities it creates for learners and educators.",
    tag: "THE PRESENT",
  },
  {
    number: "05",
    title: "Looking Ahead",
    subtitle: "The journey continues",
    description:
      "Share the founder's future vision for Reffto, the impact they hope to create and the possibilities they want to explore next.",
    tag: "THE FUTURE",
  },
];

const FounderJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const milestoneRefs = useRef([]);

  useEffect(() => {
    const elements = milestoneRefs.current.filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleEntries.length) {
          const index = Number(
            visibleEntries[0].target.dataset.index
          );

          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0.1, 0.3, 0.5, 0.7],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="founder-journey"
      className="relative overflow-hidden bg-[#100D19] py-24 text-white sm:py-32 lg:py-40"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-[#9C07BC]/15 blur-[150px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C000A8]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Section heading */}
        <div className="mb-20 max-w-3xl lg:mb-28">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#F472B6]" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F0A5E0]">
              The Story Behind Reffto
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Every great journey
            <br />
            begins with{" "}
            <span className="bg-gradient-to-r from-[#F0A5E0] to-[#9C07BC] bg-clip-text text-transparent">
              an idea.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Discover the vision, people and milestones that
            shape the journey of Reffto.
          </p>
        </div>

        {/* Main storytelling layout */}
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* LEFT: Sticky founder profile */}
          <div className="relative lg:sticky lg:top-28 lg:h-fit">

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#1B1628] p-6 sm:p-8">

              {/* Profile visual placeholder */}
              <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#36113D] via-[#24152F] to-[#100D19] sm:h-[360px]">

                <div className="absolute h-64 w-64 rounded-full bg-[#C000A8]/25 blur-[80px]" />

                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl font-semibold text-white/80 backdrop-blur-xl">
                  R
                </div>

                <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/65 backdrop-blur-md">
                  Founder Portrait
                </span>
              </div>

              <div className="mt-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F472B6]">
                  The Person Behind Reffto
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Founder / CEO
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  Founder name to be added
                </p>

                <div className="my-6 h-px bg-white/10" />

                <p className="text-sm leading-7 text-white/60">
                  Add an authentic message from Reffto's
                  founder about the inspiration, purpose
                  and vision behind the organization.
                </p>
              </div>

              <div className="mt-7 rounded-xl border border-[#C000A8]/20 bg-[#C000A8]/10 p-5">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#F0A5E0]">
                  A Thought to Remember
                </span>

                <p className="mt-3 text-lg font-medium leading-7 text-white/90">
                  "Innovation begins when curiosity
                  meets the courage to create."
                </p>

                <p className="mt-2 text-xs text-white/40">
                  Illustrative quote — replace with approved founder message.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Scroll journey */}
          <div className="relative">

            {/* Timeline track */}
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-white/10 sm:left-[23px]">
              <div
                className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#F472B6] to-[#9C07BC] transition-all duration-500"
                style={{
                  height: `${(activeIndex / (journey.length - 1)) * 100}%`,
                }}
              />
            </div>

            <div className="space-y-16 sm:space-y-24">

              {journey.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <article
                    key={item.number}
                    ref={(element) => {
                      milestoneRefs.current[index] = element;
                    }}
                    data-index={index}
                    className="relative scroll-mt-32 pl-14 sm:pl-16"
                  >

                    {/* Timeline point */}
                    <div
                      className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 sm:h-12 sm:w-12 ${
                        isActive
                          ? "border-[#F472B6] bg-[#9C07BC] shadow-[0_0_30px_rgba(192,0,168,0.4)]"
                          : "border-white/15 bg-[#1B1628]"
                      }`}
                    >
                      <span className="text-xs font-semibold">
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className={`rounded-2xl border p-6 transition-all duration-500 sm:p-8 ${
                        isActive
                          ? "border-[#C000A8]/35 bg-[#1B1628] shadow-[0_20px_70px_rgba(0,0,0,0.18)]"
                          : "border-white/[0.06] bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F472B6]">
                          {item.tag}
                        </span>

                        <span className="text-xs text-white/30">
                          {item.number} / 05
                        </span>
                      </div>

                      <h3
                        className={`mt-5 text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-3xl ${
                          isActive
                            ? "text-white"
                            : "text-white/65"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-[#F0A5E0]/80">
                        {item.subtitle}
                      </p>

                      <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                        {item.description}
                      </p>

                      {/* Active indicator */}
                      <div
                        className={`mt-7 h-[2px] rounded-full bg-gradient-to-r from-[#C000A8] to-[#F472B6] transition-all duration-700 ${
                          isActive ? "w-20" : "w-0"
                        }`}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderJourney;

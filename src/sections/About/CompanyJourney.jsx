
import React, { useEffect, useRef, useState } from "react";

const milestones = [
  {
    id: "01",
    period: "THE BEGINNING",
    year: "YEAR TO BE ADDED",
    title: "Where the Journey Begins",
    description:
      "Every journey starts with an idea. Introduce how Reffto began, the vision behind its establishment and the purpose that inspired its journey.",
    highlight: "The Beginning",
  },
  {
    id: "02",
    period: "BUILDING THE FOUNDATION",
    year: "YEAR TO BE ADDED",
    title: "Building Our Foundation",
    description:
      "Highlight the initial steps taken by Reffto, the foundations established and the early initiatives that helped shape the organization's direction.",
    highlight: "The Foundation",
  },
  {
    id: "03",
    period: "EXPANDING POSSIBILITIES",
    year: "YEAR TO BE ADDED",
    title: "Expanding Through Technology",
    description:
      "Show how Reffto developed its work across robotics, drone technology, IoT and practical technology education. Include verified projects and developments.",
    highlight: "Growth & Innovation",
  },
  {
    id: "04",
    period: "WHERE WE ARE TODAY",
    year: "PRESENT",
    title: "Creating Real-World Experiences",
    description:
      "Present Reffto's current initiatives, technology capabilities, laboratories, institutional collaborations and opportunities for students and educators.",
    highlight: "The Present",
  },
  {
    id: "05",
    period: "LOOKING AHEAD",
    year: "THE FUTURE",
    title: "The Journey Continues",
    description:
      "Share Reffto's future direction, upcoming ambitions and the impact the organization aims to create through technology, education and innovation.",
    highlight: "What's Next",
  },
];

const CompanyJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const milestoneRefs = useRef([]);

  useEffect(() => {
    const elements = milestoneRefs.current.filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length) {
          const index = Number(
            visible[0].target.dataset.index
          );

          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const progress =
    milestones.length > 1
      ? (activeIndex / (milestones.length - 1)) * 100
      : 0;

  return (
    <section
      id="company-journey"
      className="relative isolate overflow-hidden bg-[#100D19] py-24 text-white sm:py-32 lg:py-36"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-52 top-40 -z-10 h-[500px] w-[500px] rounded-full bg-[#9C07BC]/15 blur-[150px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#C000A8]/15 blur-[150px]" />

      {/* Main container */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Section heading */}
        <div className="mb-16 max-w-4xl sm:mb-24">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#F472B6]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F0A5E0]">
              Our Journey
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
            A journey of ideas,
            <br />

            <span className="bg-gradient-to-r from-[#F0A5E0] via-[#C000A8] to-[#9C07BC] bg-clip-text text-transparent">
              progress and possibilities.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Explore the journey of Reffto, the milestones
            that have shaped its growth and the vision
            that continues to move it forward.
          </p>
        </div>

        {/* Journey layout */}
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* LEFT STICKY PANEL */}
          <div className="lg:sticky lg:top-28">

            <div className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-[#1B1628] sm:min-h-[520px]">

              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-55"
                style={{
                  backgroundImage:
                    "url('/assets/images/background-B.png')",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#100D19] via-[#100D19]/60 to-[#100D19]/20" />

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C000A8]/20 blur-[90px]" />

              {/* Visual content */}
              <div className="relative flex min-h-[430px] flex-col justify-between p-7 sm:min-h-[520px] sm:p-10">

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                    REFFTO
                  </span>

                  <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-white/65 backdrop-blur-lg">
                    Company Timeline
                  </span>
                </div>

                <div>

                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F472B6]/30 bg-[#C000A8]/15">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-8 w-8 text-[#F0A5E0]"
                    >
                      <path d="M3 12h4l3-8 4 16 3-8h4" />
                    </svg>
                  </div>

                  <span className="text-xs uppercase tracking-[0.22em] text-[#F0A5E0]">
                    {milestones[activeIndex].period}
                  </span>

                  <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    {milestones[activeIndex].highlight}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                    Every milestone contributes to a larger
                    journey of learning, creating and moving
                    forward.
                  </p>

                  {/* Active progress */}
                  <div className="mt-10">
                    <div className="mb-3 flex items-center justify-between text-xs text-white/45">
                      <span>JOURNEY PROGRESS</span>

                      <span>
                        {String(activeIndex + 1).padStart(2, "0")}
                        {" / "}
                        {String(milestones.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#C000A8] to-[#F472B6] transition-all duration-700 ease-out"
                        style={{
                          width: `${((activeIndex + 1) / milestones.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  OUR STORY · OUR PROGRESS · OUR FUTURE
                </span>

              </div>
            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">

            {/* Timeline background line */}
            <div className="absolute bottom-10 left-[19px] top-8 w-px bg-white/10 sm:left-[23px]">

              {/* Animated progress */}
              <div
                className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#F472B6] to-[#9C07BC] transition-all duration-700 ease-out"
                style={{
                  height: `${progress}%`,
                }}
              />
            </div>

            <div className="space-y-12 sm:space-y-16">

              {milestones.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <article
                    key={item.id}
                    ref={(element) => {
                      milestoneRefs.current[index] = element;
                    }}
                    data-index={index}
                    className="relative scroll-mt-32 pl-14 sm:pl-16"
                  >

                    {/* Timeline marker */}
                    <div
                      className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 sm:h-12 sm:w-12 ${
                        isActive
                          ? "border-[#F472B6] bg-[#9C07BC] shadow-[0_0_30px_rgba(192,0,168,0.4)]"
                          : "border-white/15 bg-[#1B1628]"
                      }`}
                    >
                      <span className="text-xs font-semibold text-white">
                        {item.id}
                      </span>
                    </div>

                    {/* Milestone card */}
                    <div
                      className={`rounded-2xl border p-6 transition-all duration-500 sm:p-8 ${
                        isActive
                          ? "border-[#C000A8]/35 bg-[#1B1628] shadow-[0_20px_70px_rgba(0,0,0,0.2)]"
                          : "border-white/[0.06] bg-white/[0.02]"
                      }`}
                    >

                      {/* Period and year */}
                      <div className="flex flex-wrap items-center justify-between gap-3">

                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F472B6]">
                          {item.period}
                        </span>

                        <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-medium tracking-[0.12em] text-white/40">
                          {item.year}
                        </span>

                      </div>

                      {/* Title */}
                      <h3
                        className={`mt-6 text-2xl font-semibold leading-tight tracking-tight transition-colors duration-300 sm:text-3xl ${
                          isActive
                            ? "text-white"
                            : "text-white/60"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                        {item.description}
                      </p>

                      {/* Active accent */}
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

export default CompanyJourney;

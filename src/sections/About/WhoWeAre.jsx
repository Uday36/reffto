
import React from "react";

const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-white py-24 text-[#171329] sm:py-28 lg:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F0E9FF]/70 blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT - VISUAL STORY */}
          <div className="relative mx-auto w-full max-w-[620px]">

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#F0E9FF]">
              <img
                src="/assets/images/service-1.webp"
                alt="Reffto technology and innovation"
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[540px]"
                loading="lazy"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171329]/50 via-transparent to-transparent" />
            </div>

            {/* Floating identity card */}
            <div className="absolute -bottom-8 left-4 right-4 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-[0_20px_60px_rgba(23,19,41,0.12)] backdrop-blur-xl sm:-right-8 sm:left-auto sm:w-[260px] sm:p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C07BC]">
                Our Focus
              </span>

              <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-[#171329]">
                Turning curiosity into practical innovation.
              </h3>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#9C07BC] to-[#F472B6]" />
            </div>

            {/* Decorative accent */}
            <div className="absolute -left-5 -top-5 -z-10 h-32 w-32 rounded-3xl border border-[#C000A8]/20 sm:-left-8 sm:-top-8" />

            <div className="absolute -right-4 top-16 -z-10 h-24 w-24 rounded-full bg-[#F0E9FF]" />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="pt-5 lg:pt-0">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#C000A8]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9C07BC]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[3.7rem]">
              We believe technology should be{" "}
              <span className="bg-gradient-to-r from-[#9C07BC] to-[#E04AAE] bg-clip-text text-transparent">
                experienced,
              </span>{" "}
              not just imagined.
            </h2>

            {/* Description */}
            <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-[#171329]/65 sm:text-lg">
              <p>
                Reffto is driven by the idea that technology becomes
                meaningful when people get the opportunity to explore,
                experiment and create with it.
              </p>

              <p>
                We bring together robotics, drone technology, IoT and
                practical technology learning to help connect ideas
                with real-world experiences.
              </p>

              <p>
                Our focus is on creating opportunities for schools,
                colleges, universities and students to engage with
                emerging technologies and discover what they can build.
              </p>
            </div>

            {/* Bottom highlights */}
            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-[#171329]/10 pt-7">

              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E9FF] text-[#9C07BC]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path d="M9 9h6v6H9zM9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3" />
                  </svg>
                </div>

                <h3 className="font-semibold text-[#171329]">
                  Technology
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#171329]/55">
                  Exploring emerging technologies and possibilities.
                </p>
              </div>

              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FCE7F3] text-[#C000A8]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
                    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
                  </svg>
                </div>

                <h3 className="font-semibold text-[#171329]">
                  Practical Learning
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#171329]/55">
                  Learning through exploration and hands-on experiences.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

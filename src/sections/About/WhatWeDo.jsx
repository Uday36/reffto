
import React from "react";
import {
  ArrowUpRight,
  Cpu,
  GraduationCap,
  Lightbulb,
  Layers3,
  MoveUpRight,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    title: "Technology Solutions",
    description:
      "Exploring technology-driven solutions that help transform ideas into useful digital and connected experiences.",
    icon: Cpu,
    tags: ["Technology", "Development", "Innovation"],
  },
  {
    number: "02",
    title: "Robotics & Practical Learning",
    description:
      "Making robotics and emerging technologies easier to explore through practical, hands-on learning experiences.",
    icon: GraduationCap,
    tags: ["Robotics", "Learning", "Skill Building"],
  },
  {
    number: "03",
    title: "Ideas into Innovation",
    description:
      "Encouraging experimentation, creative thinking, and project-based experiences that connect concepts with applications.",
    icon: Lightbulb,
    tags: ["Creativity", "Projects", "Experimentation"],
  },
];

const WhatWeDo = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9C07BC]">
              <span className="h-2 w-2 rounded-full bg-[#F472B6]" />
              What We Do
            </span>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#171329] sm:text-5xl lg:text-6xl">
              Technology is our tool.
              <span className="block bg-gradient-to-r from-[#9C07BC] to-[#F472B6] bg-clip-text text-transparent">
                Possibility is our focus.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#716B7D] lg:pb-2">
            We bring together technology, learning, and creative thinking to
            explore ideas and build experiences with real-world relevance.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          {/* Visual panel */}
          <div className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#171329] p-8 text-white sm:p-10 lg:min-h-full">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#9C07BC]/40 blur-[90px]" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#F472B6]/20 blur-[90px]" />
            </div>

            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:42px_42px]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#F0A5E0]">
                <Layers3 size={26} strokeWidth={1.6} />
              </div>

              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#F0A5E0]">
                Our Approach
              </p>

              <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Learn. Experiment.
                <span className="block text-[#F0A5E0]">Build. Evolve.</span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/65 sm:text-base">
                We believe meaningful progress comes from curiosity,
                exploration, and the courage to turn ideas into action.
              </p>
            </div>

            <div className="relative mt-12 flex items-center justify-between border-t border-white/15 pt-6">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                The Reffto Approach
              </span>
              <ArrowUpRight
                size={22}
                className="text-[#F0A5E0] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </div>

          {/* Focus area cards */}
          <div className="flex flex-col gap-4">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group rounded-[1.7rem] border border-[#EEEAF3] bg-[#FCFBFE] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#9C07BC]/25 hover:bg-white hover:shadow-[0_18px_50px_rgba(56,25,80,0.07)] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0E9FF] text-[#9C07BC] transition-all duration-300 group-hover:rotate-[-6deg] group-hover:bg-[#9C07BC] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="text-sm font-semibold tracking-[0.16em] text-[#B8B1C3]">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight text-[#171329] sm:text-2xl">
                      {item.title}
                    </h3>

                    <MoveUpRight
                      size={20}
                      className="mt-1 shrink-0 text-[#B8B1C3] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#9C07BC]"
                    />
                  </div>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#777184] sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#EAE5F0] bg-white px-3 py-1.5 text-xs font-medium text-[#777184]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

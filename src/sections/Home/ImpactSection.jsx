
import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Microscope,
  School,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const impactAreas = [
  {
    number: "01",
    title: "For institutions",
    description:
      "Create technology learning environments that support practical education and future-ready skills.",
    icon: School,
  },
  {
    number: "02",
    title: "For educators",
    description:
      "Bring classroom concepts to life with guided activities, training and hands-on resources.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "For students",
    description:
      "Build confidence through experimentation, collaborative projects and problem-solving.",
    icon: Lightbulb,
  },
];

const principles = [
  "Practical, experience-led learning",
  "Technology with a clear learning purpose",
  "Solutions shaped around institutional needs",
];

export default function ImpactSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const section = root.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      gsap.from(".impact-intro", {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".impact-area", {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".impact-areas",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".impact-principles", {
        x: 20,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".impact-principles",
          start: "top 88%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="impact"
      aria-labelledby="impact-heading"
      className="relative overflow-hidden bg-white py-16 text-[#171329] sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-28 h-80 w-80 rounded-full bg-[#F0E9FF]/70 blur-[100px]"
      />

      <div className="container-page relative">
        {/* Editorial introduction */}
        <div className="impact-intro grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-[#8000B8] to-[#B026D3]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8000B8] sm:text-xs">
                Impact & achievements
              </p>
            </div>

            <h2
              id="impact-heading"
              className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.065em]"
            >
              Make learning
              <span className="block text-[#8000B8]">
                matter.
              </span>
            </h2>
          </div>

          <div className="max-w-lg lg:pb-2">
            <p className="text-base leading-7 text-[#706B7D] sm:text-lg sm:leading-8">
              The real measure of technology education is what learners
              understand, create and become capable of doing.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#91899C]">
              Reffto focuses on practical experiences that connect
              technology with meaningful learning outcomes.
            </p>
          </div>
        </div>

        {/* Impact audience areas */}
        <div className="impact-areas mt-12 grid grid-cols-1 gap-0 border-y border-[#E9E1F0] sm:mt-16 sm:grid-cols-3">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <article
                key={area.number}
                className={`impact-area group py-7 sm:py-8 lg:py-10 ${
                  index !== 0
                    ? "border-t border-[#E9E1F0] sm:border-l sm:border-t-0 sm:pl-6 lg:pl-8"
                    : "sm:pr-6 lg:pr-8"
                } ${index === 1 ? "sm:px-6 lg:px-8" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tabular-nums text-[#91899C]">
                    {area.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center bg-[#F7F5FC] text-[#8000B8] transition-colors duration-300 group-hover:bg-[#8000B8] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.7} />
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                  {area.title}
                  <span className="text-[#B026D3]">.</span>
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-[#706B7D]">
                  {area.description}
                </p>

                <div className="mt-6 h-px w-full bg-[#E9E1F0]">
                  <div className="h-px w-0 bg-gradient-to-r from-[#8000B8] to-[#B026D3] transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Visual statement and principles */}
        <div className="impact-principles mt-12 grid grid-cols-1 overflow-hidden bg-[#F7F5FC] sm:mt-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative isolate flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#211332] p-6 sm:min-h-[360px] sm:p-9 lg:p-11">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=85"
              alt="Collaborative work on a practical engineering project"
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-br from-[#211332]/75 via-[#211332]/55 to-[#8000B8]/60"
            />

            <div className="flex items-center gap-3 text-white/75">
              <Microscope size={17} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Beyond the numbers
              </span>
            </div>

            <div className="mt-12">
              <p className="max-w-md text-3xl font-medium leading-tight tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                Progress starts with what learners can actually do.
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                Focus on capability, creativity and the confidence to
                explore new ideas.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8000B8] sm:text-xs">
              What guides our work
            </p>

            <h3 className="mt-4 max-w-md text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-3xl">
              Impact that begins with the learning experience.
            </h3>

            <div className="mt-7 space-y-5">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-3 border-b border-[#E9E1F0] pb-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0E9FF] text-[#8000B8]">
                    <CheckCircle2 size={15} />
                  </span>

                  <p className="text-sm leading-6 text-[#514A60]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="group mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#8000B8]"
            >
              Discuss your institution's goals
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Data transparency note */}
        <p className="mt-5 text-xs leading-5 text-[#91899C]">
          Verified statistics and institutional outcomes can be added here
          when official data is available.
        </p>
      </div>
    </section>
  );
}

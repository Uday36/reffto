
import { useLayoutEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const activities = [
  {
    number: "01",
    title: "Build",
    description: "Assemble components and bring ideas to life.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
    alt: "Engineering team working on a practical technology project",
    className: "aspect-[5/4]",
  },
  {
    number: "02",
    title: "Experiment",
    description: "Test concepts, explore sensors and solve challenges.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",
    alt: "Hands-on technical experimentation in a workshop",
    className: "aspect-[5/4]",
  },
];

export default function LearningInActionSection() {
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

      gsap.from(".learning-heading", {
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

      gsap.from(".learning-feature", {
        x: -24,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(".learning-activity", {
        y: 24,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".learning-activity-list",
          start: "top 84%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="learning-in-action"
      aria-labelledby="learning-heading"
      className="overflow-hidden bg-white py-16 text-[#171329] sm:py-24 lg:py-28"
    >
      <div className="container-page">
        {/* Section introduction */}
        <div className="learning-heading mb-10 grid grid-cols-1 gap-5 sm:mb-14 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-[#8000B8] to-[#B026D3]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8000B8] sm:text-xs">
                Learning in action
              </p>
            </div>

            <h2
              id="learning-heading"
              className="mt-5 max-w-3xl text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.06em]"
            >
              Less watching.
              <span className="block text-[#8000B8]">
                More making.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#706B7D] sm:pb-1 sm:text-base">
            Real activities turn technology concepts into experiences
            students can build, test and understand.
          </p>
        </div>

        {/* Asymmetric editorial layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7">
          {/* Featured activity */}
          <article className="learning-feature group relative isolate flex min-h-[440px] flex-col justify-between overflow-hidden bg-[#171329] sm:min-h-[560px] lg:min-h-[650px]">
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=85"
              alt="Learners working together on an engineering project"
              loading="lazy"
              className="absolute inset-0 -z-30 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 -z-20 bg-gradient-to-t from-[#110B20] via-[#171329]/25 to-[#171329]/10"
            />

            <div className="flex items-start justify-between p-5 sm:p-8">
              <span className="border border-white/35 bg-black/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                In the lab
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#8000B8] transition-transform duration-300 group-hover:rotate-45">
                <ArrowDownRight size={20} />
              </span>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              <p className="text-xs font-medium text-white/65">
                Learn through experience
              </p>

              <h3 className="mt-3 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Ideas become real when students build them.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                From assembling components to testing working models,
                every activity creates an opportunity to discover
                something new.
              </p>

              <a
                href="/gallery-and-projects"
                className="mt-7 inline-flex items-center gap-3 bg-white px-5 py-3.5 text-sm font-semibold text-[#171329] transition-colors hover:bg-[#F0E9FF]"
              >
                Explore projects
                <MoveUpRight size={17} />
              </a>
            </div>
          </article>

          {/* Supporting activities */}
          <div className="learning-activity-list flex flex-col gap-5 sm:gap-6">
            {activities.map((activity) => (
              <article
                key={activity.number}
                className="learning-activity group grid grid-cols-[minmax(0,1fr)] gap-4 border-b border-[#E9E1F0] pb-5 sm:grid-cols-[0.95fr_1.05fr] sm:gap-5 sm:pb-6"
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#F0E9FF]">
                  <img
                    src={activity.image}
                    alt={activity.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <span className="absolute left-3 top-3 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-[#8000B8]">
                    {activity.number}
                  </span>
                </div>

                <div className="flex flex-col justify-center py-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#91899C]">
                    Hands-on activity
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                    {activity.title}
                    <span className="text-[#B026D3]">.</span>
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#706B7D]">
                    {activity.description}
                  </p>

                  <a
                    href="/gallery-and-projects"
                    aria-label={`Explore ${activity.title} projects`}
                    className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#8000B8]"
                  >
                    Explore activity
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </article>
            ))}

            {/* Closing statement */}
            <div className="flex flex-col justify-between gap-4 bg-[#F7F5FC] p-5 sm:flex-row sm:items-center sm:p-6">
              <div>
                <p className="text-sm font-semibold">
                  Every experiment teaches something.
                </p>
                <p className="mt-1 text-xs leading-5 text-[#85809A]">
                  Encourage curiosity. Build practical confidence.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-2 text-xs font-semibold text-[#8000B8]"
              >
                Work with Reffto
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useLayoutEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  FlaskConical,
  GraduationCap,
  Layers3,
  Wrench,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    number: "01",
    title: "Practical learning",
    description:
      "Move beyond theory with hands-on experiments, working models and real technology challenges.",
    icon: FlaskConical,
  },
  {
    number: "02",
    title: "Integrated technology",
    description:
      "Bring robotics, drones, electronics and IoT together in one connected learning environment.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Faculty enablement",
    description:
      "Help educators build confidence with practical training, guided activities and learning resources.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Customized lab solutions",
    description:
      "Create technology learning spaces designed around your institution's needs and goals.",
    icon: Wrench,
  },
];

export default function WhyRefftoSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const section = root.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.from(".why-reffto-intro", {
        y: 22,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-reffto-intro",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".why-reffto-visual", {
        y: 24,
        autoAlpha: 0,
        duration: 0.75,
        delay: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-reffto-visual",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".why-reffto-benefit", {
        y: 16,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-reffto-list",
          start: "top 85%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="why-reffto"
      aria-labelledby="why-reffto-heading"
      className="relative overflow-hidden bg-[#F8F5FA] py-16 text-[#21172B] sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-12 h-96 w-96 rounded-full bg-[#EAD7F1]/60 blur-[100px]"
      />

      <div className="container-page relative">
        {/* Main editorial layout */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="why-reffto-intro">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#E6D8EC] bg-white/70 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#9B28CC]" />

              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#7E168F] sm:text-[10px]">
                The Reffto difference
              </p>
            </div>

            <h2
              id="why-reffto-heading"
              className="mt-6 max-w-xl text-[clamp(2.7rem,5.2vw,5rem)] font-semibold leading-[0.98] tracking-[-0.065em]"
            >
              Learning should
              <br />
              go beyond
              <span className="block bg-gradient-to-r from-[#80129A] via-[#9B28CC] to-[#C65ACD] bg-clip-text pb-2 text-transparent">
                the classroom.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#716779] sm:text-base sm:leading-8">
              Institutions need more than equipment. Reffto brings together
              practical experiences, connected technologies and guided
              learning to help turn ideas into real skills.
            </p>

            <a
              href="/about"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#80129A] px-5 py-3 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#681080]"
            >
              Discover the Reffto approach

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <div className="mt-10 flex items-center gap-4 border-t border-[#E3D8E9] pt-6">
              <div className="flex -space-x-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F8F5FA] bg-[#E8D8F1] text-[#80129A]">
                  <FlaskConical size={16} />
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F8F5FA] bg-[#E9E1F8] text-[#6C3AE8]">
                  <GraduationCap size={16} />
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F8F5FA] bg-[#F4DDF7] text-[#9B28CC]">
                  <Layers3 size={16} />
                </span>
              </div>

              <p className="max-w-xs text-xs leading-5 text-[#81758A]">
                Designed around learners, educators and institutional goals.
              </p>
            </div>
          </div>

          {/* Main visual */}
          <div className="why-reffto-visual relative min-w-0 pb-7 sm:pb-9">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#E7DCEB]">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85"
                alt="People working together on practical technology in a laboratory"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#211329]/80 via-[#211329]/10 to-transparent"
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-[10px]">
                  Our philosophy
                </p>

                <p className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-3xl lg:text-4xl">
                  Understand it.
                  <br />
                  Build it. Experience it.
                </p>
              </div>

              <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#80129A] shadow-lg sm:right-6 sm:top-6">
                <ArrowDownRight size={21} />
              </span>
            </div>

            {/* Overlapping information panel */}
            <div className="relative ml-auto mt-4 flex max-w-[320px] items-start gap-3 rounded-2xl border border-[#EEE5F2] bg-white p-4 shadow-[0_16px_45px_rgba(42,19,51,0.08)] sm:absolute sm:-bottom-1 sm:-left-7 sm:mt-0 sm:p-5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2E7F7] text-[#80129A]">
                <Check size={16} strokeWidth={2.5} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[#21172B]">
                  Learning by doing
                </p>

                <p className="mt-1 text-xs leading-5 text-[#81758A]">
                  Purposeful practical experiences—not just equipment on a
                  shelf.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional benefits */}
        <div className="mt-20 border-t border-[#E1D5E8] pt-9 sm:mt-28 sm:pt-12">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#80129A]">
                Built for institutions
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.05em] sm:text-3xl lg:text-4xl">
                Everything you need to make learning practical.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#81758A]">
              One connected approach. Four meaningful ways to create impact.
            </p>
          </div>

          <div className="why-reffto-list">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.number}
                  className="why-reffto-benefit group grid grid-cols-[34px_1fr] gap-x-3 gap-y-3 border-t border-[#E5DCEB] py-5 transition-colors duration-300 hover:border-[#C7A2D5] sm:grid-cols-[54px_minmax(190px,0.8fr)_1.2fr_24px] sm:items-center sm:gap-5 sm:py-6"
                >
                  <span className="pt-1 text-[11px] tabular-nums text-[#9B8EA4] sm:text-xs">
                    {benefit.number}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#80129A] transition-colors duration-300 group-hover:bg-[#80129A] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.7} />
                    </span>

                    <h4 className="text-sm font-semibold tracking-[-0.025em] text-[#21172B] sm:text-base">
                      {benefit.title}
                    </h4>
                  </div>

                  <p className="col-start-2 max-w-xl text-sm leading-6 text-[#716779] sm:col-start-auto">
                    {benefit.description}
                  </p>

                  <span className="hidden text-[#80129A] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 sm:block">
                    <ArrowUpRight size={18} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing action */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#E1D5E8] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#81758A]">
            From the first lab setup to ongoing practical learning.
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#80129A]"
          >
            Discuss your institution's needs

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
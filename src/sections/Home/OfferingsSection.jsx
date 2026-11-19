
import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  Bot,
  Cpu,
  Plane,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offerings = [
  {
    number: "01",
    title: "Drone Lab",
    description:
      "Explore drone technology, flight systems and aerial innovation through hands-on learning.",
    icon: Plane,
  },
  {
    number: "02",
    title: "Robotics Training Kits",
    description:
      "Build and experiment with robots while learning engineering, programming and automation.",
    icon: Bot,
  },
  {
    number: "03",
    title: "IoT Solutions",
    description:
      "Discover sensors, connected devices and smart systems through practical technology projects.",
    icon: Cpu,
  },
];

const focusAreas = [
  { number: "01", label: "Hands-on Learning", width: "92%" },
  { number: "02", label: "Lab Setup & Implementation", width: "80%" },
  { number: "03", label: "Project-Based Learning", width: "87%" },
];

function OfferingItem({ offering }) {
  const Icon = offering.icon;

  return (
    <article className="group flex items-start gap-3">
      <div className="mt-0.5 shrink-0 text-[#A128A8]">
        <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
      </div>

      <div className="min-w-0">
        <span className="mb-1 block text-[9px] font-medium tracking-[0.12em] text-[#A49BAA]">
          {offering.number}
        </span>

        <h3 className="text-sm font-semibold tracking-[-0.02em] text-[#21172B] transition-colors group-hover:text-[#8000B8]">
          {offering.title}
        </h3>

        <p className="mt-2 text-xs leading-[1.8] text-[#777080]">
          {offering.description}
        </p>
      </div>
    </article>
  );
}

export default function OfferingsSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const section = root.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.from(section.querySelectorAll(".offerings-reveal"), {
        y: 18,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(section.querySelectorAll(".focus-line"), {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".offerings-bottom"),
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
      id="offerings"
      aria-labelledby="offerings-heading"
      className="bg-white text-[#21172B]"
    >
      {/* Full-width image banner */}
      <div className="offerings-reveal relative isolate flex min-h-[380px] items-center overflow-hidden bg-[#24152B] sm:min-h-[460px] lg:min-h-[540px]">
        <img
          src="/assets/images/robo-16.jpg"
          alt="Reffto technology and practical learning"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-black/60"
        />

        <div className="container-page relative flex w-full justify-end py-14 sm:py-20">
          <div className="w-full max-w-lg text-right text-white">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-[10px]">
              Reffto · Technology & Innovation
            </p>

            <h2
              id="offerings-heading"
              className="text-xl font-semibold uppercase leading-[1.2] tracking-[-0.025em] sm:text-2xl lg:text-3xl"
            >
              Technology that inspires creation.
            </h2>

            <p className="ml-auto mt-3 max-w-sm text-[11px] leading-5 text-white/80 sm:text-xs sm:leading-6">
              Discover practical technology solutions designed to bring
              innovation into education.
            </p>

            <a
              href="/services"
              className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 border border-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-white hover:text-[#21172B]"
            >
              View Our Services
              <ArrowUpRight size={14} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>

      {/* Offerings overview */}
      <div className="container-page py-12 sm:py-16 lg:py-20">
        <div className="offerings-reveal flex items-center justify-between gap-4">
          <h2
            id="offerings-list-heading"
            className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#30263A] sm:text-xs"
          >
            What We Offer
          </h2>

          <span className="text-right text-[9px] font-medium tracking-[0.1em] text-[#9990A2] sm:text-[10px]">
            LEARN / BUILD / EXPLORE
          </span>
        </div>

        <div className="mt-5 h-px bg-[#EEE9F1]" />

        <div className="grid grid-cols-1 gap-8 py-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:py-11 lg:grid-cols-3 lg:gap-10 lg:py-12">
          {offerings.map((offering) => (
            <div className="offerings-reveal" key={offering.number}>
              <OfferingItem offering={offering} />
            </div>
          ))}
        </div>

        {/* Lower two-column layout */}
        <div className="offerings-bottom grid grid-cols-1 gap-10 border-t border-[#EEE9F1] pt-9 sm:pt-11 lg:grid-cols-2 lg:gap-16 lg:pt-12">
          <div className="offerings-reveal">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#30263A]">
              Learning Beyond Theory
            </h3>

            <p className="mt-5 max-w-xl text-xs leading-[2] text-[#777080] sm:text-sm sm:leading-[2.1]">
              Reffto helps schools and institutions introduce emerging
              technologies through practical labs, training solutions and
              project-based learning experiences.
            </p>

            <a
              href="/services"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#8000B8] transition-colors hover:text-[#5D0088]"
            >
              Explore our services
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </a>
          </div>

          <div className="offerings-reveal">
            <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[0.16em] text-[#30263A]">
              Our Focus
            </h3>

            <div className="space-y-6">
              {focusAreas.map((area) => (
                <div key={area.number}>
                  <div className="mb-2.5 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.07em] text-[#777080] sm:text-[11px]">
                      {area.label}
                    </span>

                    <span className="text-[10px] text-[#A49BAA]">
                      {area.number}
                    </span>
                  </div>

                  <div className="h-[3px] overflow-hidden bg-[#F0ECF3]">
                    <div
                      className="focus-line h-full bg-[#B45AC5]"
                      style={{ width: area.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
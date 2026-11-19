
import { ArrowRight } from "lucide-react";

const heroImage =
"/assets/images/robo-15.jpg";

export default function CareerHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-white px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1268px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_538px] lg:gap-[76px]">
          {/* Left Content */}
          <div className="flex max-w-[520px] flex-col items-start justify-center lg:py-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E9DCEC] bg-[#F8F1FA] px-3.5 py-1.5 text-[11px] sm:text-xs">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#EAB308]" />

              <span className="font-bold tracking-wide text-[#9401AE]">
                CAREERS AT REFFTO
              </span>

              <span className="text-[#C4B5D0]">•</span>

              <span className="font-normal text-gray-500">
                We're Hiring
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-[clamp(3rem,5vw,4.75rem)] font-extrabold leading-[1.05] tracking-[-0.055em] text-[#080808]">
              Come join us!
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[410px] text-base leading-[1.9] text-[#858585] sm:text-lg">
              We're already heads down working hard, but would love to have
              your added expertise on the team.
            </p>

            {/* CTA */}
            <a
              href="#open-roles"
              className="group mt-7 inline-flex min-h-[45px] items-center gap-2 rounded-full bg-[#9401AE] px-7 py-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(148,1,174,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7E0094] hover:shadow-[0_10px_24px_rgba(148,1,174,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9401AE] focus-visible:ring-offset-2"
            >
              <span>See open roles</span>

              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right Image — Always Fills the Entire Container */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative aspect-[538/764] w-full max-w-[538px] overflow-hidden rounded-[23px] bg-[#F1F1F1] shadow-[0_5px_18px_rgba(0,0,0,0.07)]">
              <img
                src={heroImage}
                alt="Engineer working at an electronics workbench"
                fetchPriority="high"
                decoding="async"
                draggable={false}
                className="absolute inset-0 block h-full w-full object-cover object-center grayscale contrast-[1.08] brightness-[0.98]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

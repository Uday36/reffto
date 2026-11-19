
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function LabSetupHero() {
  return (
    <section
      aria-labelledby="lab-hero-title"
      className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-[#171329] text-white sm:min-h-[780px] lg:min-h-[min(900px,100svh)]"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/images/labs/Step2.png')",
        }}
      />

      {/* Image overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#100C1C]/95 via-[#171329]/65 to-[#171329]/10"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#171329] via-transparent to-[#171329]/25"
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 pt-36 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 backdrop-blur-md">
            <Sparkles size={14} className="text-[#DDA4FF]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-xs">
              Reffto Lab Solutions
            </span>
          </div>

          <h1
            id="lab-hero-title"
            className="max-w-4xl text-[clamp(3.25rem,8.5vw,7.5rem)] font-semibold leading-[0.94] tracking-[-0.075em]"
          >
            A space where
            <span className="mt-2 block bg-gradient-to-r from-white via-[#E9C9FF] to-[#C56AF0] bg-clip-text pb-2 text-transparent">
              the future
            </span>
            gets built.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Purpose-built robotics and innovation labs for schools,
            colleges and universities — from the first idea to
            hands-on learning.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lab-enquiry"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#8000B8] to-[#B026D3] px-7 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(176,38,211,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(176,38,211,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Plan Your Lab
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#lab-includes"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-7 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore the lab
              <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/20 pt-5 text-xs text-white/65 sm:mt-24 sm:text-sm">
          <span>Robotics</span>
          <span className="h-1 w-1 rounded-full bg-[#C56AF0]" />
          <span>Drones</span>
          <span className="h-1 w-1 rounded-full bg-[#C56AF0]" />
          <span>AI & IoT</span>
          <span className="h-1 w-1 rounded-full bg-[#C56AF0]" />
          <span>Innovation</span>
        </div>
      </div>
    </section>
  );
}

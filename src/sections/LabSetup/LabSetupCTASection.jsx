import { ArrowUpRight, MoveUpRight } from "lucide-react";

export default function LabSetupCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#171329] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-40 h-[420px] w-[420px] rounded-full bg-[#8000B8]/25 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C48CE0]/60 to-transparent"
      />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#D9B7F0]">
          <span className="h-px w-8 bg-[#C48CE0]" />
          YOUR NEXT STEP STARTS HERE
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="max-w-[800px] text-[clamp(2.7rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.07em]">
              Have a vision for your lab?
              <span className="mt-2 block font-serif italic text-[#D9B7F0]">
                Let's build it together.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Tell us about your institution, your students, and your goals.
              Let's explore how REFFTO can help you create a space for
              hands-on learning and innovation.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#171329] transition-all hover:bg-[#F0E4F8] sm:px-7"
          >
            Contact Our Team
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8000B8] text-white transition-transform group-hover:rotate-45">
              <MoveUpRight size={16} />
            </span>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
          <p className="text-[10px] font-medium tracking-[0.15em] text-white/45">
            PLAN · BUILD · EMPOWER · EVOLVE
          </p>

          <a
            href="#setup-journey"
            className="inline-flex items-center gap-2 text-xs text-white/65 transition-colors hover:text-white"
          >
            Explore the journey
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";

const capabilities = ["Robotics labs", "Drone programmes", "IoT projects"];

export default function HomeCTASection() {
  return (
    <section
      id="contact-cta"
      aria-labelledby="cta-heading"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#21162A] px-6 py-9 text-white shadow-[0_24px_70px_rgba(41,20,57,0.16)] sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-[#C026D3]/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 left-1/3 size-72 rounded-full bg-[#7C3AED]/25 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end lg:gap-16">
            <div className="max-w-3xl">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-200 sm:text-xs">
                Let&apos;s create together
              </p>

              <h2
                id="cta-heading"
                className="max-w-2xl text-[clamp(2.65rem,5.5vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-white"
              >
                Turn curiosity into{" "}
                <span className="text-fuchsia-300">impact.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Have an idea for robotics, drones or IoT? Let&apos;s design a
                meaningful learning experience around it.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-[#21162A] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#21162A]"
              >
                Start a conversation
                <span className="flex size-9 items-center justify-center rounded-full bg-[#9401AE] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
                </span>
              </a>
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur-sm sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                What we build
              </p>
              <ul className="mt-4 divide-y divide-white/10">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-center justify-between py-3 text-sm font-medium text-white/90"
                  >
                    {capability}
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="text-fuchsia-300"
                    />
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="relative mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/55 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
            <span>Robotics · Drones · IoT · Innovation</span>
            <a
              href="/gallery-and-projects"
              className="group inline-flex w-fit items-center gap-1.5 font-medium text-white/75 transition-colors hover:text-white"
            >
              Explore our work
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

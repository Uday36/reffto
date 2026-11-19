
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Wrench,
  Rocket,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Designed around you",
    description:
      "A lab plan based on your space, requirements and institutional goals.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Learning through practice",
    description:
      "Give students opportunities to explore, build, test and improve ideas.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Faculty enablement",
    description:
      "Help educators use the lab confidently for practical learning activities.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Room to grow",
    description:
      "Build a foundation for new projects, technologies and learning experiences.",
    icon: Rocket,
  },
];

export default function InstitutionBenefitsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#171329] px-5 py-20 text-white sm:px-10 sm:py-28 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[380px] w-[380px] rounded-full bg-[#8000B8]/20 blur-[100px]"
      />

      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A0F3]">
            Built for your institution
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-6xl">
            Make practical learning part of the experience.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/65 sm:text-base">
            Create an environment where classroom knowledge meets
            experimentation — with a setup aligned to your institution's
            needs.
          </p>

          <a
            href="#lab-enquiry"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#171329] transition hover:bg-[#F0E1FA]"
          >
            Discuss your lab
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="divide-y divide-white/15 border-y border-white/15">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.number}
                className="group grid grid-cols-[48px_1fr] gap-4 py-7 sm:grid-cols-[60px_1fr] sm:gap-6 sm:py-9"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-[#D9A0F3] transition-colors group-hover:border-[#B026D3]/60 group-hover:bg-[#8000B8]/20">
                  <Icon size={21} strokeWidth={1.6} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-white/40">
                      {benefit.number}
                    </span>

                    <h3 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

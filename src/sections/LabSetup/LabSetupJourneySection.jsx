
import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand your vision",
    description:
      "We discuss your institution's goals, available space, student needs and learning objectives.",
    image: "/assets/images/labs/Step1.png",
    label: "DISCOVER",
  },
  {
    number: "02",
    title: "Design the environment",
    description:
      "Plan the lab layout, equipment, technology mix and infrastructure around your requirements.",
    image: "/assets/images/labs/Step2.png",
    label: "DESIGN",
  },
  {
    number: "03",
    title: "Set up and install",
    description:
      "Bring the planned learning environment together with the relevant equipment and systems.",
    image: "/assets/images/labs/Step3.png",
    label: "BUILD",
  },
  {
    number: "04",
    title: "Train and get started",
    description:
      "Help faculty and learners get comfortable with the equipment, tools and practical activities.",
    image: "/assets/images/labs/Step4.png",
    label: "ENABLE",
  },
  {
    number: "05",
    title: "Keep moving forward",
    description:
      "Explore future projects, evolving learning needs and ongoing assistance for your lab.",
    image: "/assets/images/labs/Step5.png",
    label: "GROW",
  },
];

export default function LabSetupJourneySection() {
  return (
    <section
      id="setup-journey"
      className="bg-white px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8000B8]">
              How we bring it to life
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.06em] text-[#171329] sm:text-6xl">
              From an empty room to
              <span className="text-[#8000B8]"> endless ideas.</span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-[#706B7D] lg:justify-self-end sm:text-base">
            Every institution is different. Our approach helps turn
            your requirements into a practical, ready-to-use learning
            environment.
          </p>
        </div>

        <div className="mt-14 space-y-5 sm:mt-20 sm:space-y-7">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group grid overflow-hidden rounded-[26px] border border-[#EAE4F0] bg-[#FAF9FC] transition-colors duration-300 hover:border-[#D8B4EB] lg:grid-cols-[100px_1fr_0.85fr]"
            >
              <div className="flex items-start p-6 lg:justify-center lg:pt-9">
                <span className="text-sm font-semibold tabular-nums text-[#A09AAC]">
                  {step.number}
                </span>
              </div>

              <div className="flex flex-col justify-center px-6 pb-7 lg:py-9 lg:pl-2">
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#F0E7F8] px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#8000B8]">
                  <CheckCircle2 size={12} />
                  {step.label}
                </span>

                <h3 className="max-w-lg text-2xl font-semibold tracking-[-0.045em] text-[#171329] sm:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#706B7D] sm:text-base sm:leading-7">
                  {step.description}
                </p>

                {index === 0 && (
                  <a
                    href="#lab-enquiry"
                    className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#8000B8]"
                  >
                    Discuss your requirements
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <div className="relative min-h-[220px] overflow-hidden bg-[#EAE3F0] lg:min-h-[280px]">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#171329]/35 to-transparent" />

                <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#8000B8] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
                  <ArrowDownRight size={19} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

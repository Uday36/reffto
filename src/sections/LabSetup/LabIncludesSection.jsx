
import {
  ArrowUpRight,
  Bot,
  Cpu,
  Drone,
  Lightbulb,
} from "lucide-react";

const technologies = [
  {
    number: "01",
    title: "Robotics",
    description: "Build, program and control intelligent machines.",
    image: "/assets/images/labs/Step1.png",
    icon: Bot,
    className: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Drones",
    description: "Explore flight systems, control and aerial technology.",
    image: "/assets/images/labs/Step2.png",
    icon: Drone,
    className: "lg:col-span-5",
  },
  {
    number: "03",
    title: "AI & IoT",
    description: "Connect sensors, data and intelligent applications.",
    image: "/assets/images/labs/Step3.png",
    icon: Cpu,
    className: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Innovation Projects",
    description: "Turn classroom concepts into working prototypes.",
    image: "/assets/images/labs/Step4.png",
    icon: Lightbulb,
    className: "lg:col-span-7",
  },
];

function TechnologyPanel({ item }) {
  const Icon = item.icon;

  return (
    <article
      className={`group relative isolate min-h-[340px] overflow-hidden rounded-[26px] bg-[#171329] sm:min-h-[390px] ${item.className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${item.image}')` }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#100C1C] via-[#171329]/45 to-[#171329]/10"
      />

      <div className="flex h-full min-h-[340px] flex-col justify-between p-6 sm:min-h-[390px] sm:p-8">
        <div className="flex items-start justify-between">
          <span className="text-xs font-medium tracking-[0.15em] text-white/70">
            {item.number}
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md">
            <Icon size={20} strokeWidth={1.6} />
          </span>
        </div>

        <div>
          <h3 className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
            {item.title}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/75 sm:text-base">
            {item.description}
          </p>

          <a
            href="#lab-enquiry"
            aria-label={`Enquire about ${item.title} lab setup`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#E9B7FF]"
          >
            Include in my lab
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function LabIncludesSection() {
  return (
    <section
      id="lab-includes"
      className="bg-[#FAF9FC] px-5 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8000B8]">
              Inside your lab
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.06em] text-[#171329] sm:text-6xl">
              More than equipment.
              <span className="block text-[#8000B8]">
                A place to create.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#706B7D] sm:text-base">
            A practical learning environment shaped around your
            institution, curriculum and ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {technologies.map((item) => (
            <TechnologyPanel key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

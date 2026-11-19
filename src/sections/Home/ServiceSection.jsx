
const services = [
  {
    number: "01",
    title: "Drone Lab",
    tagline: "Flight. Explore. Discover.",
    image: "/assets/images/robo-15.jpg",
    alt: "Drone and educational flight equipment",
    theme: "white",
  },
  {
    number: "02",
    title: "Robotics",
    tagline: "Build. Code. Create.",
    image: "/assets/images/robo-14.jpg",
    alt: "Robotics training equipment",
    theme: "white",
  },
  {
    number: "03",
    title: "IoT Solutions",
    tagline: "Connect. Sense. Automate.",
    image: "/assets/images/robo-16.jpg",
    alt: "IoT electronics and development board",
    theme: "cream",
  },
  {
    number: "04",
    title: "Technology Lab Setup",
    tagline: "A space to innovate.",
    image: "/assets/images/robo-17.jpg",
    alt: "Modern educational technology laboratory",
    theme: "white",
  },
  {
    number: "05",
    title: "Robotics Training Kits",
    tagline: "Learn by building.",
    image: "/assets/images/robo-22.jpg",
    alt: "Robotics components and educational training kit",
    theme: "white",
  },
  {
    number: "06",
    title: "Innovation Projects",
    tagline: "Ideas into reality.",
    image: "/assets/images/robo-15.jpg",
    alt: "Technology project equipment",
    theme: "lavender",
  },
];

const themes = {
  lavender: {
    card: "border-[#e6d9f2] bg-[#f0e7f8]",
    title: "text-[#20172c]",
    description: "text-[#766881]",
    imageBg: "bg-[#e7daf2]",
  },
  white: {
    card: "border-[#eae4ee] bg-[#fffefd]",
    title: "text-[#20172c]",
    description: "text-[#766d80]",
    imageBg: "bg-[#f3eff5]",
  },
  cream: {
    card: "border-[#eee4d7] bg-[#faf5ed]",
    title: "text-[#20172c]",
    description: "text-[#786e7b]",
    imageBg: "bg-[#f2eadf]",
  },
};

function ServiceCard({ service }) {
  const theme = themes[service.theme] ?? themes.white;

  return (
    <article
      className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[20px] border p-2.5 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_45px_-28px_rgba(79,43,112,0.38)] sm:rounded-[24px] sm:p-3.5 lg:p-4 ${theme.card}`}
    >
      {/* Image container: same card layout, responsive image filling */}
      <div
        className={`relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-[13px] border border-white/80 ${theme.imageBg}`}
      >
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />

        {/* Subtle image framing */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[13px] ring-1 ring-inset ring-black/[0.035]"
        />

        {/* Small corner accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 translate-x-5 translate-y-5 rounded-full bg-[#c58be9]/25 blur-xl transition-all duration-500 group-hover:scale-150"
        />
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col px-1 pb-1 pt-3.5 sm:px-1.5 sm:pt-4">
        <h3
          className={`mt-0 text-[15px] font-semibold leading-snug tracking-[-0.035em] sm:text-lg lg:text-xl ${theme.title}`}
        >
          {service.title}
        </h3>

        <p
          className={`mt-1.5 text-xs leading-5 sm:text-[13px] ${theme.description}`}
        >
          {service.tagline}
        </p>

        <div className="mt-auto pt-5">
          <div className="mb-3 h-px w-full bg-[#6f4b8d]/10 transition-colors duration-300 group-hover:bg-[#8e5abd]/30" />

          <a
            href="#contact"
            aria-label={`Explore ${service.title}`}
            className="inline-flex w-full items-center justify-between gap-2 rounded-lg py-1 text-xs font-semibold text-[#34213f] transition-colors duration-200 hover:text-[#813bc0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#813bc0] focus-visible:ring-offset-2"
          >
            <span>Explore service</span>

            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d9c9e7] bg-white/75 text-sm text-[#773ab6] transition-all duration-300 group-hover:border-[#773ab6] group-hover:bg-[#773ab6] group-hover:text-white"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-[#faf8fb] px-4 py-16 text-[#191428] sm:px-7 sm:py-20 lg:px-12 lg:py-28"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-24 -z-10 h-80 w-80 rounded-full bg-[#eadcf8]/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-24 -z-10 h-72 w-72 rounded-full bg-[#f4e6d9]/50 blur-3xl"
      />

      <div className="mx-auto w-full max-w-[1332px]">
        {/* Section heading */}
        <header className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-7 bg-[#9a65cc]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#79638e] sm:text-xs">
              What we make possible
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2
              id="services-heading"
              className="max-w-5xl text-[clamp(1.9rem,4.2vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.055em]"
            >
              Technology built to be{" "}
              <span className="bg-gradient-to-r from-[#7138b9] via-[#9448c7] to-[#c05bbd] bg-clip-text text-transparent">
                experienced.
              </span>
            </h2>

            <span className="hidden shrink-0 pb-1 text-xs tracking-[0.12em] text-[#93869e] lg:block">
              EXPLORE WHAT'S POSSIBLE ↘
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs leading-6 text-[#776d82] sm:text-sm">
              Six ways to bring innovation into the real world.
            </p>

            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#9a8ba7]">
              Learn <span className="mx-1.5 text-[#b78bd5]">·</span>
              Build <span className="mx-1.5 text-[#b78bd5]">·</span>
              Innovate
            </span>
          </div>
        </header>

        {/* Reusable, data-driven service cards */}
        <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-7 flex flex-col gap-3 border-t border-[#e9e1ee] pt-5 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-8 w-1 rounded-full bg-gradient-to-b from-[#7138b9] to-[#c05bbd]"
            />

            <p className="text-xs text-[#81758c] sm:text-sm">
              Have a specific vision?
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#e2d5ed] bg-white px-4 py-2.5 text-xs font-semibold text-[#653991] shadow-sm transition-all duration-300 hover:border-[#c5a4df] hover:bg-[#f4edf9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#813bc0] focus-visible:ring-offset-2"
          >
            Let’s talk

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

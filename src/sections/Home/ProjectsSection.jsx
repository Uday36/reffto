
import { useLayoutEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    category: "ROBOTICS",
    title: "Robotics in action",
    description:
      "Explore how learners turn mechanical components, electronics and code into working robotic systems.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85",
    alt: "Robotics technology prototype",
    size: "featured",
  },
  {
    number: "02",
    category: "ENGINEERING",
    title: "Ideas into prototypes",
    description:
      "From first experiments to functional models, practical work makes ideas tangible.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
    alt: "Engineering prototype and practical development",
    size: "secondary",
  },
  {
    number: "03",
    category: "INNOVATION",
    title: "Technology with purpose",
    description:
      "Bring electronics, sensors and connected technologies together to explore real-world problems.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=85",
    alt: "Technical experimentation and innovation",
    size: "secondary",
  },
];

export default function ProjectsSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const section = root.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      gsap.from(".projects-heading", {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".project-item", {
        y: 26,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-gallery",
          start: "top 82%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="projects"
      aria-labelledby="projects-heading"
      className="overflow-hidden bg-[#171329] py-16 text-white sm:py-24 lg:py-28"
    >
      <div className="container-page">
        {/* Editorial heading */}
        <div className="projects-heading grid grid-cols-1 gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#DCA7F3]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DCA7F3] sm:text-xs">
                Projects & innovation
              </p>
            </div>

            <h2
              id="projects-heading"
              className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.065em]"
            >
              Ideas deserve
              <span className="block text-[#DCA7F3]">
                to be built.
              </span>
            </h2>
          </div>

          <div className="max-w-xs sm:pb-2">
            <p className="text-sm leading-7 text-white/60 sm:text-base">
              Discover the possibilities of hands-on technology,
              experimentation and creative problem-solving.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-white/45">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B026D3]" />
              A glimpse into practical innovation
            </span>
          </div>
        </div>

        {/* Asymmetric project showcase */}
        <div className="projects-gallery mt-12 grid grid-cols-1 gap-x-7 gap-y-10 sm:mt-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-x-10 lg:gap-y-12">
          {projects.map((project, index) => {
            const featured = index === 0;

            return (
              <article
                key={project.number}
                className={`project-item group min-w-0 ${
                  featured ? "lg:row-span-2" : ""
                }`}
              >
                <a
                  href="/gallery-and-projects"
                  aria-label={`Explore ${project.title}`}
                  className="block"
                >
                  <div
                    className={`relative isolate overflow-hidden bg-white/5 ${
                      featured
                        ? "aspect-[4/3] sm:aspect-[5/4] lg:aspect-[0.88/1]"
                        : "aspect-[5/3]"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#171329]/65 via-transparent to-transparent"
                    />

                    <span className="absolute left-4 top-4 border border-white/30 bg-[#171329]/45 px-3 py-2 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-sm sm:left-5 sm:top-5">
                      {project.category}
                    </span>

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#8000B8] transition-transform duration-300 group-hover:rotate-45 sm:bottom-5 sm:right-5 sm:h-12 sm:w-12">
                      <MoveUpRight size={20} />
                    </span>
                  </div>
                </a>

                <div className="mt-5 flex items-start gap-4 sm:mt-6">
                  <span className="pt-1 text-xs tabular-nums text-[#B7A9C9]">
                    {project.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`font-semibold leading-tight tracking-[-0.04em] ${
                        featured
                          ? "text-2xl sm:text-3xl lg:text-4xl"
                          : "text-xl sm:text-2xl"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/55">
                      {project.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-[#DCA7F3] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing strip */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-7 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:pt-9">
          <div>
            <p className="text-lg font-medium tracking-[-0.025em] sm:text-xl">
              Your next idea could be the next project.
            </p>
            <p className="mt-2 text-sm text-white/50">
              Explore projects or discuss an idea with the Reffto team.
            </p>
          </div>

          <a
            href="/gallery-and-projects"
            className="inline-flex w-fit items-center gap-3 border border-white/25 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#DCA7F3] hover:bg-white/5"
          >
            View projects
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-12 flex items-center gap-2 sm:mt-16">
          <span className="h-1 w-10 bg-[#8000B8]" />
          <span className="h-1 w-5 bg-[#9B28CC]" />
          <span className="h-1 w-3 bg-[#B026D3]" />
          <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-white/35">
            Imagine · Experiment · Create
          </span>
        </div>
      </div>
    </section>
  );
}

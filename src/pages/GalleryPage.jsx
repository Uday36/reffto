
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  X,
  Plus,
} from "lucide-react";

const gallery = [
  {
    src: "/assets/images/robo-14.jpg",
    title: "Engineering Tomorrow",
    category: "ROBOTICS",
    number: "01",
    shape: "feature",
  },
  {
    src: "/assets/images/robo-1.jpg",
    title: "Ideas in Motion",
    category: "INNOVATION",
    number: "02",
    shape: "portrait",
  },
  {
    src: "/assets/images/robo-2.jpg",
    title: "Beyond the Blueprint",
    category: "PROTOTYPING",
    number: "03",
    shape: "landscape",
  },
  {
    src: "/assets/images/robo-15.jpg",
    title: "Built to Explore",
    category: "ROBOTICS",
    number: "04",
    shape: "landscape",
  },
  {
    src: "/assets/images/robo-3.jpg",
    title: "Learning by Making",
    category: "LEARNING",
    number: "05",
    shape: "portrait",
  },
  {
    src: "/assets/images/robo-4.jpg",
    title: "A Different Perspective",
    category: "TECHNOLOGY",
    number: "06",
    shape: "landscape",
  },
  {
    src: "/assets/images/robo-16.jpg",
    title: "Creating Possibilities",
    category: "INNOVATION",
    number: "07",
    shape: "landscape",
  },
  {
    src: "/assets/images/robo-5.jpg",
    title: "The Creative Process",
    category: "EXPERIMENTS",
    number: "08",
    shape: "portrait",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const nextImage = () => {
    setSelected((current) => (current + 1) % gallery.length);
  };

  const previousImage = () => {
    setSelected(
      (current) => (current - 1 + gallery.length) % gallery.length
    );
  };

  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBFAFC] text-[#1B1724]">
      {/* Navigation */}
      <header className="px-6 py-7 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2 text-xs font-medium text-[#817A8A] transition-colors hover:text-[#8917B5]"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to website
          </Link>

          <Link
            to="/"
            className="text-sm font-bold tracking-[0.2em]"
          >
            REFFTO<span className="text-[#A21AC8]">.</span>
          </Link>

          <span className="hidden text-[10px] tracking-[0.2em] text-[#A29BA9] sm:block">
            CREATIVE ARCHIVE / 2026
          </span>
        </div>
      </header>

      {/* Intro */}
      <section className="px-6 pb-14 pt-20 sm:px-10 sm:pb-20 sm:pt-28 lg:px-16 lg:pt-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#9218BC]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8917B5]">
                  The Reffto experience
                </span>
              </div>

              <h1 className="text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[0.84] tracking-[-0.09em]">
                Beyond
                <span className="block pl-[12vw] text-[#9417BE] sm:pl-[15vw]">
                  imagination.
                </span>
              </h1>
            </div>

            <div className="lg:pb-3">
              <p className="max-w-[290px] text-sm leading-7 text-[#817A89]">
                A visual journey through ideas, technology and things made
                possible by curiosity.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-8 w-8 rounded-full border border-[#E6D9EC] bg-[#F4EDF8] p-2">
                  <ArrowDownIcon />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B8492]">
                  Scroll to explore
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="px-4 sm:px-8 lg:px-12">
        <div className="group relative mx-auto max-w-[1600px]">
          <button
            type="button"
            onClick={() => setSelected(0)}
            className="relative block h-[350px] w-full overflow-hidden rounded-[4px] bg-[#EDE8F1] text-left sm:h-[500px] lg:h-[660px]"
            aria-label="View featured image"
          >
            <img
              src={gallery[0].src}
              alt={gallery[0].title}
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#160D20]/65 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10">
              <span className="rounded-full border border-white/35 bg-black/10 px-4 py-2 text-[9px] font-semibold tracking-[0.2em] text-white backdrop-blur-md">
                FEATURED PROJECT
              </span>
            </div>

            <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6 text-white sm:p-12">
              <div>
                <span className="text-[10px] tracking-[0.22em] text-white/65">
                  01 / ROBOTICS
                </span>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.045em] sm:text-5xl">
                  Engineering Tomorrow
                </h2>
              </div>

              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#1B1724]">
                <ArrowUpRight size={20} />
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Gallery collection */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 flex items-end justify-between border-b border-[#EAE5ED] pb-6 sm:mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9417BE]">
                A closer look
              </span>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] sm:text-5xl">
                Selected moments
              </h2>
            </div>

            <span className="text-xs tabular-nums text-[#9B94A2]">
              02 — 08
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-24 lg:gap-x-24">
            {gallery.slice(1).map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setSelected(index + 1)}
                className={`group text-left ${
                  index % 2 === 1 ? "sm:mt-32" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-[#EDE8F1] ${
                    item.shape === "portrait"
                      ? "aspect-[4/5]"
                      : "aspect-[5/4]"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.055]"
                  />

                  <div className="absolute inset-0 bg-[#170D20]/0 transition-colors duration-500 group-hover:bg-[#170D20]/10" />

                  <span className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-[#21172B] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#9719BF]">
                      {item.category}
                    </span>

                    <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] transition-colors group-hover:text-[#8917B5] sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <span className="pt-1 text-xs tabular-nums text-[#A39BA9]">
                    {item.number}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Closing strip */}
      <section className="border-t border-[#EAE5ED] px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between">
          <p className="text-[10px] font-medium tracking-[0.16em] text-[#918A99]">
            MADE WITH CURIOSITY.
          </p>

          <Link
            to="/"
            className="group flex items-center gap-2 text-xs font-semibold text-[#4A3D53] transition-colors hover:text-[#8917B5]"
          >
            Explore Reffto
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>

      {/* Image preview */}
      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#120D19]/95 p-5 backdrop-blur-xl sm:p-10"
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close preview"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 sm:left-8"
          >
            <ArrowLeft size={19} />
          </button>

          <div
            className="flex max-h-[85vh] max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={gallery[selected].src}
              alt={gallery[selected].title}
              className="max-h-[72vh] max-w-full object-contain"
            />

            <div className="mt-5 text-center">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#D49AE9]">
                {gallery[selected].category}
              </span>
              <h3 className="mt-2 text-xl font-medium text-white sm:text-2xl">
                {gallery[selected].title}
              </h3>
              <p className="mt-2 text-[10px] tracking-[0.16em] text-white/45">
                {gallery[selected].number} / 08
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 sm:right-8"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      )}
    </main>
  );
}

function ArrowDownIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-full w-full text-[#8917B5]"
      aria-hidden="true"
    >
      <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" />
    </svg>
  );
}

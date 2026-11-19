
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import labs from "../../data/labs";

const AUTOPLAY_DELAY = 4000;

function LabMedia({ lab, active }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (active) {
      video.muted = true;
      const playback = video.play();
      playback?.catch?.(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [active, lab.id]);

  if (lab.type === "video") {
    return (
      <video
        ref={videoRef}
        src={lab.image}
        poster={lab.poster}
        muted
        loop
        playsInline
        autoPlay
        preload={active ? "auto" : "none"}
        aria-label={lab.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <img
      src={lab.image}
      alt={lab.title}
      draggable="false"
      loading={active ? "eager" : "lazy"}
      className="absolute inset-0 h-full w-full object-cover"
      onError={(event) => {
        event.currentTarget.style.visibility = "hidden";
      }}
    />
  );
}

export default function LabSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const total = labs.length;
  const activeLab = labs[activeIndex];

  const goTo = useCallback(
    (index) => {
      setActiveIndex((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    setActiveIndex((index) => (index + 1) % total);
  }, [total]);

  const previous = useCallback(() => {
    setActiveIndex((index) => (index - 1 + total) % total);
  }, [total]);

  // Automatically move to the next lab every four seconds.
  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(next, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [isPaused, next]);

  // Keep keyboard navigation available.
  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const tag = target?.tagName;

      if (
        ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(tag) ||
        target?.isContentEditable ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) {
        return;
      }

      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, previous]);

  // Show only the previous thumbnail and the selected thumbnail.
  const visibleThumbnails = [
    (activeIndex - 1 + total) % total,
    activeIndex,
  ];

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchStartX.current - endX;

    if (Math.abs(distance) > 45) {
      if (distance > 0) next();
      else previous();
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="labs"
      aria-label="Reffto lab showcase"
      className="relative isolate overflow-hidden bg-[#faf9fb] py-20 text-[#21172a] sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-48 -z-10 h-80 w-80 bg-[#e8d4f1]/40 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-96 w-96 bg-[#f1d9ec]/40 blur-[120px]"
      />

      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <header className="mb-10 grid grid-cols-1 items-end gap-7 sm:mb-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#9148b1]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#776b80] sm:text-xs">
                The Reffto Lab Journal
              </p>
            </div>

            <h2 className="text-[clamp(3.3rem,7.4vw,7.3rem)] font-medium leading-[0.91] tracking-[-0.075em]">
              Where ideas
              <span className="block font-serif font-normal italic text-[#9148b1]">
                become real.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:justify-self-end lg:pb-2">
            <p className="max-w-sm text-sm leading-7 text-[#716779] sm:text-base sm:leading-8">
              A closer look at technology, creativity, and hands-on learning
              in action.
            </p>
          </div>
        </header>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main featured showcase */}
          <div
            className="relative isolate h-[520px] overflow-hidden bg-[#21172a] sm:h-[620px] lg:h-[min(76vh,820px)] lg:min-h-[610px]"
            aria-roledescription="carousel"
            aria-label="Featured Reffto labs"
          >
            {labs.map((lab, index) => (
              <div
                key={lab.id}
                aria-hidden={index !== activeIndex}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  index === activeIndex
                    ? "z-10 opacity-100"
                    : "pointer-events-none z-0 opacity-0"
                }`}
              >
                <div
                  className={
                    index === activeIndex
                      ? "lab-media-drift absolute inset-0"
                      : "absolute inset-0"
                  }
                >
                  <LabMedia lab={lab} active={index === activeIndex} />
                </div>
              </div>
            ))}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/65 via-black/15 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-black/20"
            />

            {/* Featured lab category and count */}
            <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-4 p-5 sm:p-8 lg:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-xs">
                {activeLab.category}
              </p>

              <p className="text-xs font-medium tabular-nums text-white sm:text-sm">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="mx-2 text-white/50">/</span>
                {String(total).padStart(2, "0")}
              </p>
            </div>

            {/* Featured lab content */}
            <div
              key={activeLab.id}
              className="absolute inset-x-0 bottom-0 z-30 animate-[labContentIn_650ms_ease-out_both] p-6 text-white sm:p-9 md:p-12 lg:p-14 xl:p-16"
            >
              <div className="max-w-4xl">
                <p className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80 sm:text-sm">
                  <span>{activeLab.institution}</span>

                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} aria-hidden="true" />
                    {activeLab.location}
                  </span>
                </p>

                <h3 className="max-w-4xl text-[clamp(2.5rem,5.6vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.065em]">
                  {activeLab.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                  {activeLab.description}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-8">
                  <Link
                    to={`/labs/${activeLab.id}`}
                    className="group inline-flex min-h-12 items-center justify-center gap-4 bg-[#9148b1] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#783595] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#542667]"
                  >
                    Explore This Lab
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Slim vertical slide indicators */}
            <div className="absolute right-7 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
              {labs.map((lab, index) => (
                <button
                  key={lab.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`View ${lab.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    index === activeIndex
                      ? "w-7 bg-white"
                      : "w-3 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="mt-12 border-b border-[#e4dce9] pb-10 sm:mt-16 sm:pb-12 lg:mt-[4.5rem] lg:pb-14">
            <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-[1fr_auto_1fr]">
              <div className="order-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9148b1]">
                  Explore the collection
                </p>

                <p className="mt-2 text-sm text-[#62566d]">
                  Select a lab to explore
                </p>
              </div>

              <div className="order-2 flex items-center justify-center">
                <div className="lab-thumbnail-track relative flex items-center">
                  {visibleThumbnails.map((labIndex, slotIndex) => {
                    const lab = labs[labIndex];
                    const isSelected = slotIndex === 1;

                    return (
                      <button
                        key={`${activeIndex}-${slotIndex}-${lab.id}`}
                        type="button"
                        onClick={() => goTo(labIndex)}
                        aria-label={`Show ${lab.title}`}
                        aria-pressed={isSelected}
                        className={`lab-thumbnail relative shrink-0 overflow-hidden rounded-md transition-opacity duration-300 focus-visible:z-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9148b1] focus-visible:ring-offset-4 ${
                          isSelected
                            ? "opacity-100"
                            : "opacity-65 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={lab.type === "video" ? lab.poster : lab.image}
                          alt=""
                          loading="lazy"
                          draggable="false"
                          className="block h-full w-full object-cover"
                        />

                        {/* Border belongs to the selected thumbnail itself. */}
                        {isSelected && (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-md border-2 border-[#9148b1]"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="order-3 flex items-center justify-start md:justify-end">
                <p className="text-xs tabular-nums text-[#81748a]">
                  {String(activeIndex + 1).padStart(2, "0")}
                  <span className="mx-1 text-[#c4b5cd]">/</span>
                  {String(total).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>

          {/* Closing call to action */}
          <div className="mt-10 flex flex-col items-start justify-between gap-5 sm:mt-12 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h4 className="text-xl font-medium tracking-[-0.035em] text-[#21172a] sm:text-2xl">
                Your institution. Your next innovation space.
              </h4>

              <p className="mt-2 text-sm leading-6 text-[#716779] sm:text-base">
                Let's explore how a Reffto technology lab could fit your
                institution's learning goals.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-5 bg-gradient-to-r from-[#713a8d] to-[#9148b1] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(113,58,141,0.22)] transition duration-300 hover:-translate-y-1 hover:from-[#59276f] hover:to-[#783595] hover:shadow-[0_16px_34px_rgba(113,58,141,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9148b1] focus-visible:ring-offset-2 sm:w-auto"
            >
              Discuss a lab for your institution
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .lab-thumbnail-track {
          gap: 12px;
          padding: 12px 4px;
        }

        .lab-thumbnail {
          width: 90px;
          height: 70px;
          box-sizing: border-box;
        }

        .lab-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes labContentIn {
          from {
            opacity: 0;
            transform: translate3d(0, 14px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes labMediaDrift {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.045);
          }
        }

        .lab-media-drift {
          animation: labMediaDrift 8s ease-in-out alternate infinite;
          will-change: transform;
        }

        @media (max-width: 639px) {
          .lab-thumbnail-track {
            gap: 8px;
          }

          .lab-thumbnail {
            width: 76px;
            height: 60px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #labs *,
          #labs *::before,
          #labs *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

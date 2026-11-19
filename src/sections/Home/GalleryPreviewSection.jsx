import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";
import gsap from "gsap";

const images = [
  {
    src: "/assets/images/robo-15.jpg",
    alt: "Students exploring robotics technology",
    category: "Robotics",
    title: "Building with curiosity",
  },
  {
    src: "/assets/images/robo-13.jpg",
    alt: "Hands-on technology workshop",
    category: "Workshops",
    title: "Learning by doing",
  },
  {
    src: "/assets/images/robo-14.jpg",
    alt: "Robotics learning session",
    category: "Robotics",
    title: "Ideas in motion",
  },
  {
    src: "/assets/images/robo-15.jpg",
    alt: "Robotics project in progress",
    category: "Projects",
    title: "From ideas to reality",
  },
  {
    src: "/assets/images/robo-15.jpg",
    alt: "Students participating in a technology session",
    category: "Workshops",
    title: "Discovering possibilities",
  },
  {
    src: "/assets/images/robo-16.jpg",
    alt: "Innovation and robotics activity",
    category: "Innovation",
    title: "Creating what's next",
  },
  {
    src: "/assets/images/robo-17.jpg",
    alt: "Student robotics project",
    category: "Projects",
    title: "Made to experiment",
  },
  {
    src: "/assets/images/robo-17.jpg",
    alt: "Collaborative learning experience",
    category: "Workshops",
    title: "Learning together",
  },
  {
    src: "/assets/images/robo-18.jpg",
    alt: "Technology innovation activity",
    category: "Innovation",
    title: "Think beyond limits",
  },
  {
    src: "/assets/images/robo-19.jpg",
    alt: "Robotics demonstration",
    category: "Robotics",
    title: "Technology in action",
  },
  {
    src: "/assets/images/robo-20.jpg",
    alt: "Student innovation project",
    category: "Projects",
    title: "The next generation",
  },
];

const categories = [
  "All",
  "Robotics",
  "Workshops",
  "Projects",
  "Innovation",
];

function GalleryTrack({
  items,
  direction = "left",
  duration = 42,
  onImageClick,
}) {
  const trackRef = useRef(null);
  const firstSetRef = useRef(null);
  const tweenRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;

    if (!track || !firstSet || items.length === 0) return;

    let resizeObserver;
    let animationFrame;
    let currentTween;

    const createAnimation = () => {
      if (!trackRef.current || !firstSetRef.current) return;

      currentTween?.kill();

      const firstSetWidth = firstSetRef.current.getBoundingClientRect().width;
      const trackStyle = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;
      const distance = firstSetWidth + gap;

      if (!distance) return;

      const fromX = direction === "left" ? 0 : -distance;
      const toX = direction === "left" ? -distance : 0;

      gsap.set(trackRef.current, { x: fromX });

      currentTween = gsap.to(trackRef.current, {
        x: toX,
        duration,
        ease: "none",
        repeat: -1,
        paused: isPaused,
      });

      tweenRef.current = currentTween;
    };

    const scheduleAnimation = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(createAnimation);
    };

    scheduleAnimation();

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(scheduleAnimation);
      resizeObserver.observe(firstSet);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      currentTween?.kill();
      tweenRef.current = null;
    };
  }, [items, direction, duration]);

  useEffect(() => {
    if (tweenRef.current) {
      if (isPaused) {
        tweenRef.current.pause();
      } else {
        tweenRef.current.resume();
      }
    }
  }, [isPaused]);

  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="gallery-marquee relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-4 sm:gap-5 lg:gap-6"
      >
        <div
          ref={firstSetRef}
          className="flex shrink-0 gap-4 sm:gap-5 lg:gap-6"
        >
          {items.map((item, index) => (
            <GalleryImage
              key={`${item.src}-${index}`}
              item={item}
              index={index}
              onClick={() => onImageClick(item)}
            />
          ))}
        </div>

        <div
          className="flex shrink-0 gap-4 sm:gap-5 lg:gap-6"
          aria-hidden="true"
        >
          {duplicatedItems.slice(items.length).map((item, index) => (
            <GalleryImage
              key={`duplicate-${item.src}-${index}`}
              item={item}
              index={index}
              onClick={() => onImageClick(item)}
              tabIndex={-1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryImage({ item, index, onClick, tabIndex = 0 }) {
  const sizes = [
    "w-[220px] sm:w-[280px] lg:w-[350px] aspect-[4/5]",
    "w-[260px] sm:w-[340px] lg:w-[420px] aspect-[5/4]",
    "w-[210px] sm:w-[270px] lg:w-[320px] aspect-[4/5]",
    "w-[250px] sm:w-[320px] lg:w-[390px] aspect-[5/4]",
  ];

  return (
    <button
      type="button"
      tabIndex={tabIndex}
      onClick={onClick}
      className={`gallery-image group relative shrink-0 overflow-hidden rounded-2xl bg-[#292331] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#C000A8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#15131E] ${sizes[index % sizes.length]}`}
      aria-label={`View ${item.title}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        draggable="false"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#100D17]/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
          <span className="mb-2 inline-block rounded-full border border-white/25 bg-black/20 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
            {item.category}
          </span>
          <p className="text-sm font-medium tracking-wide text-white sm:text-base">
            {item.title}
          </p>
        </div>

        <span className="flex h-9 w-9 shrink-0 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </span>
      </div>
    </button>
  );
}

export default function GallerySection() {
  const sectionRef = useRef(null);
  const lightboxRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  const firstRow = filteredImages.filter((_, index) => index % 2 === 0);
  const secondRow = filteredImages.filter((_, index) => index % 2 !== 0);

  const rowOne = firstRow.length >= 2 ? firstRow : filteredImages;
  const rowTwo = secondRow.length >= 2 ? secondRow : filteredImages;

  const openImage = useCallback((item) => {
    setSelectedImage(item);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateImage = useCallback(
    (direction) => {
      if (!selectedImage) return;

      const currentIndex = filteredImages.findIndex(
        (item) => item.src === selectedImage.src
      );

      const nextIndex =
        (currentIndex + direction + filteredImages.length) %
        filteredImages.length;

      setSelectedImage(filteredImages[nextIndex]);
    },
    [selectedImage, filteredImages]
  );

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowRight") navigateImage(1);
      if (event.key === "ArrowLeft") navigateImage(-1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, closeImage, navigateImage]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".gallery-intro > *", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".gallery-marquee", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        aria-labelledby="gallery-heading"
        className="relative isolate overflow-hidden bg-[#15131E] py-20 text-white sm:py-24 lg:py-32"
      >
        {/* Ambient background lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#8000B8]/20 blur-[130px] sm:h-[600px] sm:w-[600px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-60 -left-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#C000A8]/10 blur-[140px]"
        />

        <div className="mx-auto max-w-[1600px]">
          {/* Intro */}
          <div className="gallery-intro mx-auto mb-12 flex max-w-[1320px] flex-col justify-between gap-8 px-5 sm:mb-16 sm:px-8 lg:mb-20 lg:flex-row lg:items-end lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-[#9401AE] to-[#E04CC5]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D69AE5] sm:text-xs">
                  Inside our world
                </span>
              </div>

              <h2
                id="gallery-heading"
                className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-white"
              >
                Life @
                <span className="block bg-gradient-to-r from-[#DCA4F0] via-[#C46AE0] to-[#E06AC4] bg-clip-text pb-2 text-transparent">
                  REFFTO.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/55 sm:text-base">
                A glimpse of the ideas, people and experiences shaping what
                comes next.
              </p>
            </div>

            <a
              href="/gallery"
              className="group inline-flex w-fit items-center gap-4 border-b border-white/25 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D69AE5] hover:text-[#D69AE5]"
            >
              Explore the gallery
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Category filters */}
          <div className="mb-8 flex flex-wrap items-center gap-2 px-5 sm:mb-10 sm:px-8 lg:px-12">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2.5 text-[10px] font-semibold tracking-[0.08em] transition-all duration-300 sm:px-5 sm:text-xs ${
                    isActive
                      ? "border-[#C46AE0] bg-[#9401AE] text-white shadow-[0_5px_25px_rgba(148,1,174,0.25)]"
                      : "border-white/15 bg-white/[0.035] text-white/55 hover:border-white/35 hover:bg-white/[0.08] hover:text-white"
                  }`}
                  aria-pressed={isActive}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Moving gallery rows */}
          {filteredImages.length > 0 && (
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <GalleryTrack
                key={`row-one-${activeCategory}`}
                items={rowOne}
                direction="left"
                duration={46}
                onImageClick={openImage}
              />

              <GalleryTrack
                key={`row-two-${activeCategory}`}
                items={rowTwo}
                direction="right"
                duration={54}
                onImageClick={openImage}
              />
            </div>
          )}

          {/* Bottom detail */}
          <div className="mx-5 mt-12 flex items-center justify-between border-t border-white/10 pt-6 sm:mx-8 sm:mt-16 lg:mx-12">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D46BE0] shadow-[0_0_12px_#D46BE0]" />
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
                Moments worth sharing
              </span>
            </div>

            <span className="text-[10px] tabular-nums tracking-[0.12em] text-white/35">
              {String(filteredImages.length).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {/* Image preview */}
      {selectedImage && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0911]/95 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeImage();
          }}
        >
          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X size={21} />
          </button>

          <button
            type="button"
            onClick={() => navigateImage(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8 sm:h-12 sm:w-12"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="flex max-h-[85vh] w-full max-w-5xl flex-col items-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[72vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            <div className="mt-5 flex w-full max-w-3xl items-center justify-between gap-4 px-2">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D69AE5]">
                  {selectedImage.category}
                </p>
                <p className="mt-1 text-sm font-medium text-white sm:text-base">
                  {selectedImage.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigateImage(1)}
                aria-label="Next image"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

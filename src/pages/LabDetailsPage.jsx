
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Images,
  Lightbulb,
  Users,
  Wrench,
  GraduationCap,
  Play,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { labs } from "../data/labs";

gsap.registerPlugin(ScrollTrigger);

const institutionBenefits = [
  {
    number: "01",
    title: "Learn by doing",
    description:
      "Connect classroom concepts with practical experiments and project-based learning.",
    icon: Wrench,
  },
  {
    number: "02",
    title: "Explore technology",
    description:
      "Introduce learners to robotics, engineering and emerging technologies through exploration.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Build confidence",
    description:
      "Encourage students to test ideas, learn from mistakes and improve their solutions.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Create together",
    description:
      "Encourage teamwork, communication and creative thinking through collaborative projects.",
    icon: Users,
  },
];

const isVideoFile = (src = "") =>
  /\.(mp4|webm|ogg|mov)(?:[?#].*)?$/i.test(src);

/*
 * Select unique image assets for the immersive visual and gallery.
 * The hero media is excluded from the gallery.
 * The immersive image is excluded from the gallery as well.
 */
function getUniqueLabMedia(lab) {
  const heroMedia = lab.image || "";
  const poster = lab.poster || "";

  const uniqueGalleryImages = [
    ...new Set(
      (lab.gallery || []).filter(
        (src) => src && !isVideoFile(src)
      )
    ),
  ].filter((src) => src !== heroMedia);

  const immersiveImage =
    uniqueGalleryImages[0] ||
    (poster &&
    poster !== heroMedia &&
    !isVideoFile(poster)
      ? poster
      : "");

  const remainingGalleryImages = uniqueGalleryImages.filter(
    (src) => src !== immersiveImage
  );

  const uniqueGalleryVideos = [
    ...new Set(
      (lab.gallery || []).filter(
        (src) => src && isVideoFile(src) && src !== heroMedia
      )
    ),
  ];

  return {
    immersiveImage,
    gallery: [...uniqueGalleryVideos, ...remainingGalleryImages],
  };
}

function GalleryMedia({ src, poster, alt }) {
  if (isVideoFile(src)) {
    return (
      <video
        src={src}
        poster={poster || undefined}
        controls
        playsInline
        preload="metadata"
        aria-label={alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
    />
  );
}

export default function LabDetailsPage() {
  const { labId } = useParams();
  const pageRef = useRef(null);
  const heroMediaRef = useRef(null);

  const labIndex = labs.findIndex((item) => item.id === labId);
  const lab = labs[labIndex];

  const nextLab =
    labIndex >= 0 && labs.length > 1
      ? labs[(labIndex + 1) % labs.length]
      : null;

  const highlights = lab?.highlights ?? [];
  const videos = (lab?.videos ?? []).filter(Boolean);

  const { immersiveImage, gallery } = lab
    ? getUniqueLabMedia(lab)
    : { immersiveImage: "", gallery: [] };

  useEffect(() => {
    if (!lab || !pageRef.current) return;

    const page = pageRef.current;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.fromTo(
        ".lab-hero-content > *",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.12,
        }
      );

      gsap.to(".lab-hero-media", {
        scale: 1.055,
        ease: "none",
        scrollTrigger: {
          trigger: ".lab-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.utils.toArray(".lab-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".lab-gallery-item",
        { y: 18, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".lab-gallery-grid",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".lab-benefit-item",
        { y: 16, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".lab-benefits-grid",
            start: "top 88%",
            once: true,
          },
        }
      );

      if (heroMediaRef.current) {
        gsap.to(heroMediaRef.current, {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: ".lab-visual-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, page);

    return () => ctx.revert();
  }, [lab]);

  if (!lab) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf9fb] px-6 text-[#21172a]">
        <div className="max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9148b1]">
            Reffto Labs
          </p>

          <h1 className="mt-5 text-4xl font-medium tracking-tight">
            Lab not found.
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#716779]">
            This lab may have moved or is no longer available.
          </p>

          <Link
            to="/#labs"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#8543a3] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#71358d]"
          >
            <ArrowLeft size={17} />
            Back to Reffto Labs
          </Link>
        </div>
      </main>
    );
  }

  const mediaSrc = lab.image;
  const posterSrc = lab.poster || lab.image;

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-white text-[#21172a] antialiased"
    >
      {/* HERO — UI UNCHANGED */}
      <section className="lab-hero relative isolate flex min-h-[88svh] items-end overflow-hidden bg-[#17111e] text-white sm:min-h-[92svh] lg:min-h-screen">
        <div className="lab-hero-media absolute inset-0 -z-20">
          {lab.type === "video" ? (
            <video
              src={mediaSrc}
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={lab.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={mediaSrc}
              alt={lab.title}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#100b16] via-[#100b16]/45 to-black/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#160d20]/65 via-transparent to-[#160d20]/10" />
        <div className="absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full bg-[#9148b1]/20 blur-[110px]" />

        <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 py-6 sm:px-9 lg:px-14 lg:py-9">
          <Link
            to="/#labs"
            className="inline-flex items-center gap-2 text-xs font-medium text-white/85 transition-colors hover:text-white sm:text-sm"
          >
            <ArrowLeft size={16} />
            All Labs
          </Link>

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-xs">
            Reffto / Lab {String(labIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="lab-hero-content mx-auto w-full max-w-[1800px] px-5 pb-12 pt-36 sm:px-9 sm:pb-16 lg:px-14 lg:pb-20">
          <div className="max-w-5xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="h-px w-8 bg-[#d6a4ed]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 sm:text-xs">
                {lab.category || "Technology Lab"}
              </span>
            </div>

            <h1 className="max-w-5xl text-[clamp(3.3rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
              {lab.title}
              <span className="ml-2 text-[#d6a4ed]">.</span>
            </h1>

            {lab.description && (
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:mt-8 sm:text-base sm:leading-8">
                {lab.description}
              </p>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-white/75 sm:text-sm">
              {lab.institution && <span>{lab.institution}</span>}

              {lab.location && (
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} />
                  {lab.location}
                </span>
              )}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                to="/lab-setup"
                className="group inline-flex min-h-12 items-center gap-5 rounded-lg bg-[#8543a3] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#71358d]"
              >
                Discuss This Lab
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          <div className="mt-14 flex items-end justify-between border-t border-white/20 pt-5 sm:mt-20">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
              Designed for hands-on learning
            </p>

            <p className="text-xs tabular-nums text-white/60">
              {String(labIndex + 1).padStart(2, "0")} /{" "}
              {String(labs.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </section>

      {/* MIDDLE 1 — INTRODUCTION */}
      <section
        id="experience"
        className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-9 sm:py-28 lg:px-14 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full bg-[#eee3f7]/60 blur-[100px]"
        />

        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div className="lab-reveal">
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8543a3] sm:text-xs">
              <span className="h-px w-8 bg-[#8543a3]" />
              Inside the Experience
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.04] tracking-[-0.06em] text-[#21172a] sm:text-6xl lg:text-7xl">
              Ideas begin here.
              <span className="mt-1 block font-serif font-normal italic text-[#8543a3]">
                Possibilities follow.
              </span>
            </h2>
          </div>

          <div className="lab-reveal lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-[#716779] sm:text-lg">
              {lab.description ||
                "Explore a purpose-built technology environment designed to bring practical learning and innovation together."}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#716779]">
              {lab.location && (
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-[#8543a3]" />
                  {lab.location}
                </span>
              )}

              {lab.category && (
                <span className="rounded-full border border-[#e9dfef] bg-[#fbf8fd] px-3 py-1.5 text-xs text-[#79518c]">
                  {lab.category}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MIDDLE 2 — IMMERSIVE VISUAL */}
      <section className="lab-visual-section px-3 sm:px-6 lg:px-10">
        <div className="relative isolate mx-auto h-[55vh] min-h-[360px] max-h-[760px] max-w-[1800px] overflow-hidden rounded-2xl bg-[#21172a] sm:h-[68vh] sm:rounded-3xl">
          <div
            ref={heroMediaRef}
            className="absolute -inset-y-[6%] inset-x-0 -z-10"
          >
            {immersiveImage ? (
              <img
                src={immersiveImage}
                alt={`${lab.title} environment`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="h-full w-full bg-gradient-to-br from-[#30213b] via-[#21172a] to-[#8543a3]"
              />
            )}
          </div>

          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#160d20]/75 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-end sm:p-10 lg:p-14">
            <div className="lab-reveal">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-xs">
                Built to explore
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Learn by doing.
                <span className="text-[#e0bfeF]">
                  {" "}Create by exploring.
                </span>
              </h2>
            </div>

            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 text-white sm:flex">
              <ArrowDown size={19} />
            </span>
          </div>
        </div>
      </section>

      {/* MIDDLE 3 — REFINED GALLERY */}
      {gallery.length > 0 && (
        <section className="relative isolate overflow-hidden bg-[#f8f5fa] px-5 py-20 sm:px-9 sm:py-28 lg:px-14 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-[#e8d9f2]/50 blur-[100px]"
          />

          <div className="mx-auto max-w-[1500px]">
            <div className="lab-reveal mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8543a3] sm:text-xs">
                  <Images size={15} />
                  A Closer Look
                </div>

                <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] text-[#21172a] sm:text-6xl">
                  Explore the space.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#716779]">
                A closer look at the environment, ideas and experiences
                that bring this lab to life.
              </p>
            </div>

            <div className="lab-gallery-grid grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12">
              {gallery.map((src, index) => {
                const featured = index === 0;
                const wide = index === 1;

                return (
                  <figure
                    key={`${lab.id}-gallery-${src}-${index}`}
                    className={`lab-gallery-item group relative isolate overflow-hidden rounded-xl bg-[#e9e0ef] ${
                      featured
                        ? "col-span-2 h-[290px] sm:h-[430px] lg:col-span-7 lg:row-span-2 lg:h-[600px]"
                        : wide
                          ? "col-span-2 h-[220px] sm:col-span-1 sm:h-[290px] lg:col-span-5"
                          : "col-span-1 h-[180px] sm:h-[250px] lg:col-span-5"
                    }`}
                  >
                    <GalleryMedia
                      src={src}
                      poster={posterSrc}
                      alt={`${lab.title} gallery view ${index + 1}`}
                    />

                    {!isVideoFile(src) && (
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#21172a]/50 via-transparent to-transparent opacity-70" />
                    )}

                    <figcaption className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white drop-shadow-md sm:bottom-5 sm:left-5">
                      {isVideoFile(src) ? (
                        <Play size={13} />
                      ) : (
                        <Images size={13} />
                      )}
                      {isVideoFile(src)
                        ? "Lab in action"
                        : `View ${String(index + 1).padStart(2, "0")}`}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* MIDDLE 4 — HIGHLIGHTS */}
      {highlights.length > 0 && (
        <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-9 sm:py-28 lg:px-14 lg:py-32">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div className="lab-reveal lg:sticky lg:top-24 lg:self-start">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8543a3] sm:text-xs">
                What You Can Explore
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.06em] text-[#21172a] sm:text-5xl lg:text-6xl">
                Curiosity
                <span className="block font-serif font-normal italic text-[#8543a3]">
                  meets creation.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#716779] sm:text-base">
                Discover the key areas of learning and exploration available
                within this lab.
              </p>
            </div>

            <div className="lab-reveal">
              {highlights.map((highlight, index) => (
                <div
                  key={`${lab.id}-highlight-${index}`}
                  className="group flex items-center gap-5 border-b border-[#eee7f1] py-6 transition-colors first:border-t hover:border-[#d8c4e4] sm:py-8"
                >
                  <span className="text-xs tabular-nums text-[#a18bac]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="flex-1 text-lg font-medium tracking-[-0.03em] text-[#30213b] transition-colors group-hover:text-[#8543a3] sm:text-2xl">
                    {highlight}
                  </h3>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#a58cac] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#8543a3]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MIDDLE 5 — INSTITUTION BENEFITS + LAPTOP VISUAL */}
      <section className="relative isolate overflow-hidden bg-white px-5 pb-20 pt-20 sm:px-9 sm:pb-28 sm:pt-28 lg:px-14 lg:pb-32 lg:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-[#eee3f7]/60 blur-[110px]"
        />

        <div className="relative mx-auto max-w-[1500px]">
          {/* Heading */}
          <div className="lab-reveal mx-auto mb-12 max-w-5xl text-center sm:mb-16">
            <div className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#783595] sm:text-xs">
              <Sparkles size={15} />
              Designed for Education
            </div>

            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.06em] text-[#21172a] sm:text-6xl lg:text-7xl">
              Beyond the classroom.
              <span className="block font-serif font-normal italic text-[#8543a3]">
                Into the real world.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#665571] sm:text-base sm:leading-8">
              A thoughtfully planned technology lab can complement classroom
              teaching and give learners opportunities to explore, collaborate
              and apply their knowledge.
            </p>
          </div>

          {/* Laptop showcase */}
          <div className="lab-reveal relative mx-auto max-w-[1120px]">
            <div className="relative mx-auto w-full max-w-[1000px]">
              {/* Laptop display frame */}
              <div className="relative rounded-t-[18px] border-[5px] border-[#252329] bg-[#111014] p-[6px] shadow-[0_25px_80px_rgba(33,23,42,0.16)] sm:rounded-t-[28px] sm:border-[7px] sm:p-[10px]">
                {/* Screen content */}
                <div className="group relative aspect-[16/9] overflow-hidden rounded-t-[9px] bg-[#21172a] sm:rounded-t-[16px]">
                  {videos.length > 0 ? (
                    <video
                      src={videos[0]}
                      poster={posterSrc}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={`${lab.title} learning experience`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={immersiveImage || mediaSrc}
                      alt={`${lab.title} learning environment`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  )}

                  {/* Screen overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100b16]/70 via-transparent to-black/10" />

                  {/* Screen typography */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-10">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-xs">
                      Reffto Labs · Learn by doing
                    </p>

                    <h3 className="mt-2 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                      Ideas into
                      <span className="font-serif font-normal italic text-[#e0bfef]">
                        {" "}real experiences.
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* Laptop base */}
              <div
                aria-hidden="true"
                className="relative -mx-[5%] h-3 rounded-b-[50%] border-x border-b border-[#a7a6aa] bg-gradient-to-b from-[#e4e4e7] via-[#bfc0c4] to-[#85858b] shadow-[0_12px_22px_rgba(33,23,42,0.12)] sm:h-5"
              >
                <div className="absolute left-[35%] top-0 h-[3px] w-[30%] rounded-b-lg bg-gradient-to-b from-[#a5a5aa] to-[#d4d4d8] sm:h-[5px]" />
              </div>
            </div>

            {/* Caption */}
            <div className="mx-auto mt-7 flex max-w-[1000px] flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-medium tracking-wide text-[#716779] sm:text-sm">
                A space where curiosity becomes capability.
              </p>

              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8543a3] sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8543a3]" />
                Explore · Experiment · Create
              </span>
            </div>
          </div>

          {/* Institution benefits */}
          <div className="lab-benefits-grid mt-16 grid grid-cols-1 gap-x-10 sm:mt-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-x-8">
            {institutionBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.number}
                  className="lab-benefit-item border-t border-[#d9c8e4] py-6 sm:py-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#f0e8f5] bg-[#f7f1fa] text-[#8543a3]">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>

                    <span className="text-xs tabular-nums text-[#9878aa]">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em] text-[#30213b]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#665571]">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPLORE OTHER LAB — UI UNCHANGED */}
      {nextLab && labs.length > 1 && (
        <section className="px-3 pb-3 sm:px-6 sm:pb-6 lg:px-10 lg:pb-10">
          <Link
            to={`/labs/${nextLab.id}`}
            className="group relative isolate flex min-h-[330px] items-end overflow-hidden bg-[#21172a] text-white sm:min-h-[430px] lg:min-h-[520px]"
          >
            <div className="absolute inset-0 -z-20 transition-transform duration-700 ease-out group-hover:scale-[1.035]">
              {nextLab.type === "video" ? (
                <video
                  src={nextLab.image}
                  poster={nextLab.poster || undefined}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-label={nextLab.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={nextLab.image}
                  alt={nextLab.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

            <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#21172a] sm:right-12 sm:top-12">
              <ArrowUpRight size={21} />
            </div>

            <div className="w-full p-6 sm:p-10 lg:p-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-xs">
                Explore Next · {nextLab.category || "Reffto Labs"}
              </p>

              <h2 className="mt-4 max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
                {nextLab.title}
                <span className="text-[#d6a4ed]">.</span>
              </h2>

              <span className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-white/85 transition group-hover:text-white">
                Discover this lab
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* FINAL CTA — UI UNCHANGED */}
      <section className="relative isolate overflow-hidden px-5 py-24 sm:px-9 sm:py-32 lg:px-14 lg:py-40">
        <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8d4f1]/70 blur-[100px] sm:h-96 sm:w-96" />

        <div className="lab-reveal mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9148b1] sm:text-xs">
            Bring Your Vision to Life
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
            Let's build what's{" "}
            <span className="font-serif font-normal italic text-[#9148b1]">
              next.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#716779] sm:text-base sm:leading-8">
            Let's explore the right technology space for your institution.
          </p>

          <Link
            to="/lab-setup"
            className="group mt-9 inline-flex min-h-12 items-center justify-center gap-5 rounded-lg bg-[#8543a3] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#71358d]"
          >
            Discuss Your Lab
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .lab-hero-media,
          .lab-feature-card,
          .lab-reveal,
          .lab-gallery-item,
          .lab-benefit-item {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}

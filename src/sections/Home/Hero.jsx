import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const heroImage = "/assets/images/background-C.png";

const scenes = [
  {
    eyebrow: "ROBOTICS · INNOVATION · EDUCATION",
    title: ["Imagine", "What's Possible."],
    description:
      "A new world of robotics, intelligent technology and hands-on learning.",
  },
  {
    eyebrow: "BUILT FOR THE NEXT GENERATION",
    title: ["Think Beyond", "The Ordinary."],
    description:
      "Explore new ideas, experiment with technology and discover what's possible.",
  },
  {
    eyebrow: "LEARN · EXPERIMENT · CREATE",
    title: ["The Future", "Starts Here."],
    description:
      "Turn your curiosity into practical skills, creative projects and real-world ideas.",
  },
];

export default function Hero() {
  const rootRef = useRef(null);
  const currentSceneRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const isCompletedRef = useRef(false);
  const observerRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const image = root.querySelector(".cinema-image");
      const panels = gsap.utils.toArray(".cinema-panel", root);
      const copies = gsap.utils.toArray(".cinema-copy", root);

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const positions = [
        {
          alignItems: "flex-end",
          justifyContent: "center",
          textAlign: "right",
          paddingTop: "1rem",
          paddingRight: "clamp(2rem, 8vw, 9rem)",
          paddingBottom: "4rem",
          paddingLeft: "1.25rem",
        },
        {
          alignItems: "flex-start",
          justifyContent: "flex-start",
          textAlign: "left",
          paddingTop: "clamp(7rem, 14vh, 10rem)",
          paddingRight: "1.5rem",
          paddingBottom: "2rem",
          paddingLeft: "clamp(1.5rem, 7vw, 7rem)",
        },
        {
          alignItems: "flex-end",
          justifyContent: "flex-end",
          textAlign: "right",
          paddingTop: "2rem",
          paddingRight: "clamp(1.5rem, 7vw, 7rem)",
          paddingBottom: "clamp(5rem, 12vh, 8rem)",
          paddingLeft: "1.5rem",
        },
      ];

      // Initial styles for all copy containers
      copies.forEach((copy, idx) => {
        gsap.set(copy, {
          ...positions[idx],
          autoAlpha: 0,
        });
      });

      // If user navigated with an anchor hash or was already scrolled down:
      const hasInitialScroll = window.scrollY > 40 || !!window.location.hash;

      if (reducedMotion || hasInitialScroll) {
        isCompletedRef.current = true;
        currentSceneRef.current = 2;

        gsap.set(panels, { autoAlpha: 0 });
        gsap.set(panels[2], { autoAlpha: 1 });
        gsap.set(copies, { autoAlpha: 0 });
        gsap.set(copies[2], { autoAlpha: 1, x: 0, y: 0, scale: 1 });
        gsap.set(image, { scale: 1.65, transformOrigin: "50% 50%" });

        window.__lenis?.start();
        return;
      }

      // Initial Scene 0 presentation
      currentSceneRef.current = 0;
      isCompletedRef.current = false;
      isTransitioningRef.current = false;

      gsap.set(panels, { autoAlpha: 0 });
      gsap.set(panels[0], { autoAlpha: 1 });

      gsap.set(copies, { autoAlpha: 0 });
      gsap.set(copies[0], {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
      });

      gsap.set(image, {
        scale: 1,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      // Pause Lenis while inside hero scene progression
      window.__lenis?.stop();

      // Core Scene Transition Engine
      const goToScene = (targetIndex) => {
        if (targetIndex === currentSceneRef.current || isTransitioningRef.current) {
          return;
        }

        const prevIndex = currentSceneRef.current;
        isTransitioningRef.current = true;

        if (targetIndex > prevIndex) {
          // FORWARD STEP
          if (targetIndex === 1) {
            gsap.to(image, {
              scale: 1.32,
              duration: 0.7,
              ease: "power2.out",
            });

            gsap.to(copies[0], {
              autoAlpha: 0,
              scale: 0.96,
              duration: 0.28,
              ease: "power1.in",
            });

            gsap.to(panels[0], {
              autoAlpha: 0,
              duration: 0.2,
              delay: 0.25,
            });

            gsap.set(panels[1], { autoAlpha: 1 });

            gsap.fromTo(
              copies[1],
              { autoAlpha: 0, x: -35, y: -15, scale: 0.98 },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.55,
                ease: "power2.out",
                delay: 0.1,
                onComplete: () => {
                  currentSceneRef.current = 1;
                  setTimeout(() => {
                    isTransitioningRef.current = false;
                  }, 180);
                },
              }
            );
          } else if (targetIndex === 2) {
            gsap.to(image, {
              scale: 1.65,
              duration: 0.7,
              ease: "power2.out",
            });

            gsap.to(copies[1], {
              autoAlpha: 0,
              scale: 0.96,
              duration: 0.28,
              ease: "power1.in",
            });

            gsap.to(panels[1], {
              autoAlpha: 0,
              duration: 0.2,
              delay: 0.25,
            });

            gsap.set(panels[2], { autoAlpha: 1 });

            gsap.fromTo(
              copies[2],
              { autoAlpha: 0, x: 35, y: 20, scale: 0.98 },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.55,
                ease: "power2.out",
                delay: 0.1,
                onComplete: () => {
                  currentSceneRef.current = 2;
                  setTimeout(() => {
                    isTransitioningRef.current = false;
                  }, 180);
                },
              }
            );
          }
        } else {
          // BACKWARD STEP (allowed prior to completion)
          if (targetIndex === 1) {
            gsap.to(image, {
              scale: 1.32,
              duration: 0.65,
              ease: "power2.out",
            });

            gsap.to(copies[2], {
              autoAlpha: 0,
              scale: 0.96,
              duration: 0.26,
              ease: "power1.in",
            });

            gsap.to(panels[2], {
              autoAlpha: 0,
              duration: 0.2,
              delay: 0.24,
            });

            gsap.set(panels[1], { autoAlpha: 1 });

            gsap.fromTo(
              copies[1],
              { autoAlpha: 0, x: 0, y: -10, scale: 0.98 },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.08,
                onComplete: () => {
                  currentSceneRef.current = 1;
                  setTimeout(() => {
                    isTransitioningRef.current = false;
                  }, 180);
                },
              }
            );
          } else if (targetIndex === 0) {
            gsap.to(image, {
              scale: 1.0,
              duration: 0.65,
              ease: "power2.out",
            });

            gsap.to(copies[1], {
              autoAlpha: 0,
              scale: 0.96,
              duration: 0.26,
              ease: "power1.in",
            });

            gsap.to(panels[1], {
              autoAlpha: 0,
              duration: 0.2,
              delay: 0.24,
            });

            gsap.set(panels[0], { autoAlpha: 1 });

            gsap.fromTo(
              copies[0],
              { autoAlpha: 0, x: 0, y: 20, scale: 0.98 },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.08,
                onComplete: () => {
                  currentSceneRef.current = 0;
                  setTimeout(() => {
                    isTransitioningRef.current = false;
                  }, 180);
                },
              }
            );
          }
        }
      };

      // Complete Hero and transition smoothly into normal website scrolling
      const completeHero = (scrollNext = true) => {
        if (isCompletedRef.current) return;
        isCompletedRef.current = true;

        if (observerRef.current) {
          observerRef.current.kill();
          observerRef.current = null;
        }

        // Lock Hero into Scene 2 state permanently for this session
        currentSceneRef.current = 2;
        gsap.set(panels, { autoAlpha: 0 });
        gsap.set(panels[2], { autoAlpha: 1 });
        gsap.set(copies, { autoAlpha: 0 });
        gsap.set(copies[2], { autoAlpha: 1, x: 0, y: 0, scale: 1 });
        gsap.set(image, { scale: 1.65 });

        // Resume standard website smooth scrolling
        window.__lenis?.start();

        if (scrollNext) {
          const nextSection =
            root.nextElementSibling ||
            document.querySelector("main > section:nth-of-type(2)") ||
            document.querySelector("#partners");

          if (nextSection) {
            if (window.__lenis) {
              window.__lenis.scrollTo(nextSection, {
                duration: 1.1,
                offset: 0,
              });
            } else {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      };

      // Expose completion trigger for button click
      root._completeHero = completeHero;

      // GSAP Observer: Captures exact intentional gestures without scroll drift
      observerRef.current = Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        tolerance: 14,
        preventDefault: true,
        onChangeY: (self) => {
          if (isCompletedRef.current || isTransitioningRef.current) return;

          // deltaY > 0 indicates downward user scroll
          if (self.deltaY > 0) {
            if (currentSceneRef.current < 2) {
              goToScene(currentSceneRef.current + 1);
            } else if (currentSceneRef.current === 2) {
              completeHero(true);
            }
          } else if (self.deltaY < 0) {
            // deltaY < 0 indicates upward user scroll
            if (currentSceneRef.current > 0) {
              goToScene(currentSceneRef.current - 1);
            }
          }
        },
      });

      // Keyboard accessibility support
      const handleKeyDown = (e) => {
        if (isCompletedRef.current || window.scrollY > 30) return;

        if (["ArrowDown", "PageDown", " "].includes(e.key)) {
          e.preventDefault();
          if (currentSceneRef.current < 2) {
            goToScene(currentSceneRef.current + 1);
          } else {
            completeHero(true);
          }
        } else if (["ArrowUp", "PageUp"].includes(e.key)) {
          if (currentSceneRef.current > 0) {
            e.preventDefault();
            goToScene(currentSceneRef.current - 1);
          }
        }
      };

      // If user clicks any navigation link on page, complete hero instantly
      const handleNavClick = (e) => {
        const link = e.target.closest("a");
        if (link && !isCompletedRef.current) {
          const href = link.getAttribute("href");
          if (href && (href.startsWith("#") || href.startsWith("/#") || href.startsWith("/"))) {
            completeHero(false);
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown, { passive: false });
      document.addEventListener("click", handleNavClick, { capture: true });

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("click", handleNavClick, { capture: true });
        if (observerRef.current) {
          observerRef.current.kill();
          observerRef.current = null;
        }
        window.__lenis?.start();
      };
    }, root);

    return () => {
      ctx.revert();
      if (observerRef.current) {
        observerRef.current.kill();
        observerRef.current = null;
      }
      window.__lenis?.start();
    };
  }, []);

  const handleExploreClick = (e) => {
    e.preventDefault();
    if (rootRef.current?._completeHero) {
      rootRef.current._completeHero(true);
    } else {
      window.__lenis?.start();
      const target = document.querySelector("#services") || document.querySelector("main > section:nth-of-type(2)");
      if (target) {
        if (window.__lenis) {
          window.__lenis.scrollTo(target, { duration: 1.1 });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <section
      ref={rootRef}
      aria-label="Reffto innovation introduction"
      className="relative bg-[#0b0910]"
    >
      <div className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#0b0910] text-white">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          draggable="false"
          fetchPriority="high"
          className="cinema-image absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/65" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 47%, rgba(109,22,184,.24), transparent 60%)",
          }}
        />

        {scenes.map((scene, index) => (
          <div
            key={scene.eyebrow}
            className="cinema-panel invisible absolute inset-0"
            style={{ zIndex: index + 1 }}
          >
            <div
              className={`cinema-copy invisible absolute inset-0 flex flex-col ${
                index === 0
                  ? "items-center justify-center px-5 text-center sm:px-10"
                  : index === 1
                    ? "items-start justify-start px-6 pb-8 pt-28 text-left sm:px-12 sm:pt-36 lg:px-28"
                    : "items-end justify-end px-6 pb-20 pt-8 text-right sm:px-12 sm:pb-28 lg:px-28"
              }`}
            >
              <p className="mb-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-xs sm:tracking-[0.3em]">
                {index !== 2 && (
                  <span className="h-px w-6 shrink-0 bg-fuchsia-300 sm:w-9" />
                )}
                {scene.eyebrow}
                {index !== 1 && (
                  <span className="h-px w-6 shrink-0 bg-fuchsia-300 sm:w-9" />
                )}
              </p>

              <h1 className="cinema-title max-w-6xl text-[clamp(2.5rem,7.2vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
                {scene.title.map((line, lineIndex) => (
                  <span
                    key={line}
                    className={`block ${
                      lineIndex === 1 ? "text-fuchsia-300" : ""
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-5 max-w-md text-xs leading-6 text-white/80 sm:mt-7 sm:text-base sm:leading-8">
                {scene.description}
              </p>

              {index === 2 && (
                <a
                  href="#services"
                  onClick={handleExploreClick}
                  aria-label="Explore Reffto services"
                  className="hero-explore-button group relative z-50 mt-7 inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-full border border-fuchsia-300/50 bg-[#21102f] px-7 py-4 text-sm font-bold text-fuchsia-100 opacity-100 shadow-[0_0_24px_rgba(168,85,247,0.18)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-fuchsia-200 hover:bg-[#35104b] hover:text-white hover:shadow-[0_0_34px_rgba(217,70,239,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0910] active:translate-y-0"
                  style={{
                    color: "#f5d0fe",
                    backgroundColor: "#21102f",
                    visibility: "visible",
                    opacity: 1,
                    position: "relative",
                    zIndex: 50,
                    whiteSpace: "nowrap",
                    WebkitTextFillColor: "#f5d0fe",
                  }}
                >
                  <span
                    className="relative z-10"
                    style={{
                      color: "#f5d0fe",
                      opacity: 1,
                      visibility: "visible",
                      WebkitTextFillColor: "#f5d0fe",
                    }}
                  >
                    Explore Reffto
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={2.2}
                    aria-hidden="true"
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    color="#f5d0fe"
                  />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-fuchsia-300/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


import { useEffect, useRef } from "react";

const primaryColor = "var(--theme-color-brand-primary, #8000B8)";

export default function RefftoFooterAnimation() {
  const largeTextRef = useRef(null);

  const currentPositionRef = useRef({
    x: 50,
    y: 50,
  });

  const targetPositionRef = useRef({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    let animationFrame;

    const animateGradient = () => {
      const element = largeTextRef.current;

      if (element) {
        const current = currentPositionRef.current;
        const target = targetPositionRef.current;
        const ease = 0.065;

        current.x += (target.x - current.x) * ease;
        current.y += (target.y - current.y) * ease;

        element.style.setProperty("--mouse-x", `${current.x}%`);
        element.style.setProperty("--mouse-y", `${current.y}%`);
      }

      animationFrame = requestAnimationFrame(animateGradient);
    };

    animationFrame = requestAnimationFrame(animateGradient);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handleMouseMove = (event) => {
    const element = largeTextRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    targetPositionRef.current.x = Math.max(0, Math.min(100, x));
    targetPositionRef.current.y = Math.max(0, Math.min(100, y));

    element.style.setProperty("--gradient-opacity", "1");
  };

  const handleMouseEnter = (event) => {
    const element = largeTextRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    currentPositionRef.current.x = x;
    currentPositionRef.current.y = y;

    targetPositionRef.current.x = x;
    targetPositionRef.current.y = y;

    element.style.setProperty("--gradient-opacity", "1");
  };

  const handleMouseLeave = () => {
    const element = largeTextRef.current;

    if (!element) return;

    element.style.setProperty("--gradient-opacity", "0");
  };

  return (
    <div
      className="
        relative
        flex
        w-full
        shrink-0
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-0
        pt-[105px]
        pb-[105px]
        sm:pt-[115px]
        sm:pb-[110px]
        lg:pt-[150px]
        lg:pb-[120px]
      "
    >
      <div
        ref={largeTextRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="
          relative
          w-full
          select-none
          whitespace-nowrap
          text-center
          font-black
          leading-[0.8]
        "
        style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: "clamp(135px, 23.2vw, 445px)",
          letterSpacing: "0.01em",
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--gradient-opacity": "0",
        }}
        aria-label="Reffto"
      >
        {/* BASE OUTLINE */}
        <span
          className="pointer-events-none block"
          style={{
            color: "transparent",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "1.7px rgba(72, 63, 73, 0.7)",
          }}
        >
          Re
          <span
            style={{
              display: "inline-block",
              marginLeft: "0.0em",
            }}
          >
            f
          </span>
          <span
            style={{
              marginLeft: " 0.04em",
              marginRight: " 0.04em",
            }}
          >
            f
          </span>
          to
        </span>

        {/* PURPLE CURSOR-FOLLOWING GRADIENT */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 block"
          style={{
            color: "transparent",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "0px transparent",
            backgroundImage: `
              radial-gradient(
                circle 235px at
                var(--mouse-x)
                var(--mouse-y),
                ${primaryColor} 0%,
                color-mix(in srgb, ${primaryColor} 96%, transparent) 18%,
                color-mix(in srgb, ${primaryColor} 84%, transparent) 38%,
                color-mix(in srgb, ${primaryColor} 58%, transparent) 58%,
                color-mix(in srgb, ${primaryColor} 28%, transparent) 76%,
                transparent 100%
              )
            `,
            backgroundSize: "100% 100%",
            backgroundPosition: "0 0",
            backgroundRepeat: "no-repeat",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            opacity: "var(--gradient-opacity)",
            transition:
              "opacity 1.25s cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "opacity",
          }}
        >
          Re
          <span
            style={{
              display: "inline-block",
              marginLeft: "0.0em",
            }}
          >
            f
          </span>
          <span
            style={{
              marginLeft: " 0.04em",
              marginRight: " 0.04em",
            }}
          >
            f
          </span>
          to
        </span>
      </div>
    </div>
  );
}
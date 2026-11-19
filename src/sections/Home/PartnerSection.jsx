const partners = [
  {
    id: "partner-1",
    image: "/assets/images/partner-1.webp",
    alt: "Partner 1",
  },
  {
    id: "partner-2",
    image: "/assets/images/partner-2.webp",
    alt: "Partner 2",
  },
  {
    id: "partner-3",
    image: "/assets/images/partner-3.webp",
    alt: "Partner 3",
  },
  {
    id: "partner-4",
    image: "/assets/images/partner-4.webp",
    alt: "Partner 4",
  },
  {
    id: "partner-5",
    image: "/assets/images/partner-5.webp",
    alt: "Partner 5",
  },
  {
    id: "partner-6",
    image: "/assets/images/partner-6.webp",
    alt: "Partner 6",
  },
];

function PartnerLogo({ partner }) {
  return (
    <div className="flex h-32 w-52 shrink-0 items-center justify-center px-5 sm:h-40 sm:w-64 sm:px-7 lg:h-44 lg:w-72 lg:px-8">
      <img
        src={partner.image}
        alt={partner.alt}
        loading="lazy"
        draggable="false"
        className="max-h-20 w-auto max-w-full object-contain opacity-100 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-24 lg:max-h-28"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(54%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(89%)",
        }}
      />
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section
      aria-label="Our partners"
      className="relative w-full overflow-hidden bg-[#000000] py-12 sm:py-16 lg:py-20"
    >
      {/* Left edge fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-black to-transparent sm:w-20 lg:w-28"
      />

      {/* Right edge fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-black to-transparent sm:w-20 lg:w-28"
      />

      <div className="partners-marquee relative flex w-max">
        {/* Original logos */}
        <div className="flex shrink-0 items-center">
          {partners.map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} />
          ))}
        </div>

        {/* Duplicate logos for seamless scrolling */}
        <div
          className="flex shrink-0 items-center"
          aria-hidden="true"
        >
          {partners.map((partner) => (
            <PartnerLogo
              key={`duplicate-${partner.id}`}
              partner={partner}
            />
          ))}
        </div>
      </div>

      <style>{`
        .partners-marquee {
          animation: partners-scroll 10s linear infinite;
          will-change: transform;
        }

        @keyframes partners-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-marquee {
            animation: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}
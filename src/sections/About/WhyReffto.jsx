
import React from "react";

const reasons = [
  {
    title: "Learning Through Practice",
    description:
      "Connecting technology concepts with practical exploration and hands-on learning experiences.",
  },
  {
    title: "Innovation & Creativity",
    description:
      "Encouraging new ideas, creative thinking, and experimentation with emerging technologies.",
  },
  {
    title: "Real-World Applications",
    description:
      "Turning technological knowledge into practical solutions through robotics, IoT, and projects.",
  },
  {
    title: "Growing Together",
    description:
      "Building opportunities through collaboration, knowledge sharing, and continuous learning.",
  },
];

const WhyReffto = () => {
  return (
    <section
      id="why-reffto"
      className="w-full bg-white px-6 py-[100px] sm:px-10 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1158px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_371px] lg:gap-[62px]">

        {/* LEFT CONTENT */}
        <div className="w-full">

          {/* Heading */}
          <h2 className="text-[32px] font-normal leading-[1.25] tracking-[-0.7px] text-black sm:text-[36px]">
            Why{" "}
            <span className="font-bold">Reffto</span>
          </h2>

          {/* Underline */}
          <div className="mt-[25px] h-[4px] w-[44px] bg-black" />

          {/* Introduction */}
          <p className="mt-[26px] max-w-[690px] text-[15px] font-normal leading-[1.65] text-[#858585]">
            Inspiring curiosity, creativity, and progress through our
            commitment to practical learning, technology, and innovative
            ideas.
          </p>

          {/* Reasons */}
          <div className="mt-[58px] grid grid-cols-1 gap-x-[55px] gap-y-[72px] sm:grid-cols-2">

            {reasons.map((reason) => (
              <div key={reason.title} className="min-w-0">

                {/* Title with horizontal line */}
                <div className="flex items-center gap-[7px]">
                  <span className="h-[2px] w-[70px] shrink-0 bg-black" />

                  <h3 className="whitespace-nowrap text-[15px] font-bold leading-tight text-[#666666]">
                    {reason.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-[20px] text-[15px] font-normal leading-[1.55] text-[#777777]">
                  {reason.description}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mx-auto w-full max-w-[371px] lg:mx-0">
          <div className="aspect-[371/661] w-full overflow-hidden bg-[#E9E9E9]">
            <img
              src="/assets/images/service-1.webp"
              alt="Reffto technology, creativity and innovation"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyReffto;

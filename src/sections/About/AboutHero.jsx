
import React from "react";

const AboutHero = () => {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* HERO BANNER */}
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#171329] sm:min-h-[480px] lg:min-h-[520px]">

        {/* Background image */}
        <img
          src="/assets/images/background-A.png"
          alt="Reffto technology and innovation"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#111018]/65" />

        {/* Subtle image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111018]/70 via-[#111018]/30 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6 py-20 sm:px-10 lg:px-20">
          <div className="max-w-[650px]">

            <h1 className="text-4xl font-extrabold uppercase leading-[1.18] tracking-tight text-white sm:text-5xl lg:text-[60px]">
              REFFTO
              <span className="block">
                TECHNOLOGIES
              </span>
            </h1>

            <p className="mt-7 max-w-[480px] text-sm font-medium leading-7 text-white/90 sm:text-base sm:leading-8">
              Bringing ideas, technology, and creativity together to explore
              new possibilities and create meaningful experiences.
            </p>

          </div>
        </div>
      </section>

      {/* ABOUT INTRODUCTION */}
      <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">

          {/* Left content */}
          <div>
            <h2 className="text-3xl font-light leading-tight tracking-tight text-[#171329] sm:text-4xl lg:text-[40px]">
              About{" "}
              <span className="font-extrabold uppercase text-black">
                Reffto
              </span>
            </h2>

            <div className="mt-7 h-[4px] w-12 bg-black" />

            <p className="mt-7 max-w-[600px] text-[15px] leading-7 text-[#858585] sm:text-base sm:leading-8">
              We are passionate about technology, creativity, and transforming
              ideas into meaningful possibilities.
            </p>
          </div>

          {/* Right content */}
          <div className="lg:pt-1">
            <p className="text-[15px] leading-[1.85] text-[#858585] sm:text-base sm:leading-[1.9]">
              At Reffto, we believe in exploring the potential of technology
              to create meaningful experiences. Our work brings together
              innovation, practical learning, and creative thinking to
              encourage new ideas and possibilities.
              <br />
              <br />
              From robotics and emerging technologies to technology-driven
              solutions, we aim to connect knowledge with practical
              applications. We believe in creating an environment where
              curiosity leads to exploration, ideas lead to experimentation,
              and learning opens doors to innovation.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default AboutHero;

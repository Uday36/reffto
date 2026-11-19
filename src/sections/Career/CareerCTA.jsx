import { ArrowRight, Mail, ArrowUp } from "lucide-react";

export default function CareerCTA() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white px-5 py-20 text-center sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#EFE5F6] bg-[#FAF5FF] px-3.5 py-1.5 text-xs font-semibold text-[#8000B8] shadow-xs">
          <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
          <span className="tracking-wide">JOIN REFFTO</span>
        </div>

        {/* Heading */}
        <h2 className="mt-7 text-4xl font-extrabold tracking-[-0.04em] text-[#171329] sm:text-5xl lg:text-6xl leading-[1.08]">
          Think you&apos;re the{" "}
          <span className="text-[#9401AE]">right fit?</span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#706B7D] sm:text-lg sm:leading-8">
          We&apos;re building something special at Reffto — a team of dreamers, doers, and disruptors. If you&apos;re passionate about technology and want to make a real impact, we&apos;d love to hear from you.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="mailto:hr@reffto.com?subject=Job Application - Reffto Careers"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#9401AE] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(148,1,174,0.32)] transition-all duration-300 hover:bg-[#7e0094] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(148,1,174,0.42)]"
          >
            <span>Drop us your resume</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Direct Email link */}
        <div className="mt-5">
          <a
            href="mailto:hr@reffto.com"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#9401AE] transition-colors hover:underline"
          >
            <Mail size={14} />
            <span>hr@reffto.com</span>
          </a>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#9401AE] shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-[#FAF5FF] hover:-translate-y-1 hover:shadow-lg focus:outline-none"
      >
        <ArrowUp size={18} />
      </button>
    </section>
  );
}

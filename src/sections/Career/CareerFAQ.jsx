import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "Do you offer any remote work opportunities?",
    answer:
      "Yes, we offer hybrid and remote flexibility for software engineering, design, and curriculum roles. Hardware development, drone flight testing, and campus lab operations are primarily based on-site at our Indore technology hub.",
  },
  {
    id: "faq-2",
    question: "What are some of the challenges and rewards of working at your company?",
    answer:
      "The challenge is operating at the frontier of physical robotics, electronics, and fast-paced product cycles. The reward is unmatched: your circuits, code, and curriculum are put into the hands of tens of thousands of engineering students and researchers across India.",
  },
  {
    id: "faq-3",
    question: "What are some of your milestones and achievements so far?",
    answer:
      "Reffto has empowered more than 50,000 students, successfully deployed 40+ advanced educational technology labs across universities and colleges, and engineered proprietary modular robotics training platforms.",
  },
  {
    id: "faq-4",
    question: "What does the typical hiring timeline look like?",
    answer:
      "Our process is designed to be swift and respectful of your time: initial review within 48 hours, a 30-minute discovery chat, a practical mini-project or portfolio walkthrough, and an offer decision typically within 7 to 10 business days.",
  },
];

export default function CareerFAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading and Badge */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EFE5F6] bg-[#FAF5FF] px-3.5 py-1.5 text-xs font-semibold text-[#8000B8] shadow-xs">
              <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
              <span className="tracking-wide">HIRING FAQ</span>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-[#171329] sm:text-5xl lg:text-6xl leading-[1.08]">
              Questions?
              <span className="mt-1 block text-[#9401AE]">
                We&apos;re glad you asked.
              </span>
            </h2>
          </div>

          {/* Right Column: Accordion List */}
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200 lg:col-span-7">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div key={faq.id} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-center justify-between gap-4 text-left font-semibold text-[#171329] transition-colors hover:text-[#9401AE] focus:outline-none"
                  >
                    <span className="text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-colors group-hover:bg-[#FAF5FF] group-hover:text-[#8000B8]">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 pr-8">
                      <p className="text-sm leading-relaxed text-[#706B7D]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

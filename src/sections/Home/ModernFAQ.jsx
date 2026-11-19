
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    id: "q1",
    question: "WHAT IS REFFTO?",
    answer:
      "Reffto empowers schools, colleges, and universities with hands-on technology solutions, including robotics training kits, drone labs, and IoT projects that help students turn ideas into real-world innovations.",
  },
  {
    id: "q2",
    question: "WHO CAN PARTNER WITH REFFTO?",
    answer:
      "Our solutions are designed for schools, colleges, universities, and educational institutions looking to establish technology labs, enhance practical learning, and prepare students for future technology careers.",
  },
  {
    id: "q3",
    question: "WHAT CAN STUDENTS BUILD WITH REFFTO?",
    answer:
      "Students can explore robotics, drone technology, IoT systems, automation, and hands-on engineering projects while developing practical problem-solving, experimentation, and innovation skills.",
  },
  {
    id: "q4",
    question: "DO STUDENTS NEED PRIOR TECHNICAL EXPERIENCE?",
    answer:
      "Students can begin with foundational concepts and guided hands-on activities, then progress toward more advanced robotics, drone, and IoT projects based on their learning level and experience.",
  },
  {
    id: "q5",
    question: "HOW CAN AN INSTITUTION GET STARTED?",
    answer:
      "Institutions can contact Reffto to discuss their requirements, explore suitable technology solutions, and plan a learning environment aligned with their students' needs and educational goals.",
  },
  {
    id: "q6",
    question: "CAN STUDENTS EXPLORE PROJECTS AND CAREER OPPORTUNITIES?",
    answer:
      "Yes. Students can explore technology projects and practical learning opportunities, while interested candidates can visit Reffto's Careers section to learn about available openings and opportunities.",
  },
];

export function ModernFAQ() {
  const [openId, setOpenId] = useState("q1");

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq-section"
      className="relative isolate w-full overflow-hidden py-[72px] sm:py-[74px]"
      style={{
        background: "var(--theme-color-page)",
        color: "var(--theme-color-foreground)",
      }}
    >
      {/* Subtle purple ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 -z-10 size-[520px] rounded-full opacity-[0.09] blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, var(--theme-color-brand-primary, #9401AE) 0%, transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 -z-10 size-[450px] rounded-full opacity-[0.05] blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, var(--theme-color-brand-secondary, #C000A8) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:pl-[10.65%] lg:pr-[9.95%]">
        {/* Header */}
        <div className="mb-[68px] flex flex-col justify-between gap-6 md:flex-row md:items-start">
          {/* Heading */}
          <div>
            <h2
              className="text-[40px] uppercase leading-[1.16] tracking-[-0.025em] sm:text-[54px] lg:text-[68px]"
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 500,
              }}
            >
              <span
                className="block whitespace-nowrap"
                style={{
                  color: "var(--theme-color-foreground)",
                }}
              >
                GOT A QUESTION?
              </span>

              <span
                className="mt-1 block whitespace-nowrap sm:mt-1.5"
                style={{
                  color: "var(--theme-color-brand-primary, #9401AE)",
                  opacity: 0.58,
                }}
              >
                WE&apos;VE GOT AN ANSWER
              </span>
            </h2>
          </div>

          {/* Supporting text */}
          <div className="md:max-w-[280px] md:pt-[14px] md:text-right lg:max-w-[300px]">
            <p
              className="text-[11px] leading-[1.65] sm:text-[12px]"
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 400,
                color: "var(--theme-color-muted)",
              }}
            >
              Everything you need to know before unleashing the
              AI — so you can explore, create, and scale with
              confidence.
            </p>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="md:ml-[5.5%]">
          <div
            className="border-t"
            style={{
              borderColor: "var(--theme-color-border)",
            }}
          >
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="border-b"
                  style={{
                    borderColor: "var(--theme-color-border)",
                  }}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="group flex w-full cursor-pointer items-center justify-between py-[25px] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-color-brand-primary)] sm:py-[25px]"
                  >
                    <span
                      className="text-[13px] uppercase tracking-[0.015em] transition-colors duration-200 sm:text-[14px] lg:text-[15px]"
                      style={{
                        fontFamily:
                          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        fontWeight: 400,
                        color: isOpen
                          ? "var(--theme-color-brand-primary, #9401AE)"
                          : "var(--theme-color-foreground)",
                      }}
                    >
                      {item.question}
                    </span>

                    {/* Toggle icon */}
                    <span className="flex shrink-0 items-center justify-center pl-6">
                      {isOpen ? (
                        <X
                          size={15}
                          strokeWidth={1.3}
                          className="transition-transform duration-200 group-hover:rotate-90"
                          style={{
                            color:
                              "var(--theme-color-brand-primary, #9401AE)",
                          }}
                          aria-hidden="true"
                        />
                      ) : (
                        <Plus
                          size={15}
                          strokeWidth={1.3}
                          className="transition-transform duration-200 group-hover:scale-110"
                          style={{
                            color:
                              "var(--theme-color-brand-primary, #9401AE)",
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </button>

                  {/* Animated answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          ease: "easeOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-[555px] pb-[29px] pr-12">
                          <p
                            className="text-[11px] leading-[1.7] sm:text-[11.5px]"
                            style={{
                              fontFamily:
                                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                              fontWeight: 400,
                              color: "var(--theme-color-muted)",
                            }}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernFAQ;

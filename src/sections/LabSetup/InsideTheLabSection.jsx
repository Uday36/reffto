
import { useState } from "react";
import { UserRound, Plus, Minus } from "lucide-react";

const questions = [
  {
    question: "What does Reffto offer to educational institutions?",
    answer:
      "Reffto helps schools and colleges explore robotics, drones, IoT, electronics, and practical technology learning. Each lab setup can be planned around the institution's objectives and available space.",
  },
  {
    question: "Can a lab be customised for our institution?",
    answer:
      "Yes. The proposed setup can be adapted to your space, students' learning needs, curriculum, and areas of interest, including robotics, drones, and IoT.",
  },
  {
    question: "How can our institution collaborate with Reffto?",
    answer:
      "Share your institution's requirements with the Reffto team. Together, you can discuss the learning goals, space, and suitable technology solutions.",
  },
];

function LabImage({ src, alt, className = "" }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#ECE9E5] ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F0E9F6]">
          <span className="text-xs text-[#777078]">
            Reffto · Robotics · Innovation
          </span>
        </div>
      )}
    </div>
  );
}

export default function InsideTheLabSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <section
      id="inside-the-lab"
      aria-labelledby="inside-the-lab-heading"
      className="min-h-[100svh] bg-white px-[30px] pb-12 pt-[60px] text-[#242424] max-sm:px-5 max-sm:pb-10 max-sm:pt-10"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Compact two-line heading */}
        <header className="mb-[42px] max-sm:mb-7">
          <h2
            id="inside-the-lab-heading"
            className="text-[20px] font-semibold leading-[1.1] tracking-[-0.055em]"
          >
            Inside Reffto
          </h2>

          <p className="text-[20px] font-medium leading-[1.1] tracking-[-0.055em] text-[#999999]">
            A journey through how we work
          </p>
        </header>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[2.02fr_1fr] lg:gap-[5px]">
          {/* LEFT COLUMN */}
          <div className="min-w-0">
            {/* Main image: reference uses approximately 16:9 */}
            <LabImage
              src="/assets/images/robo-1.webp"
              alt="A robotics and technology workspace"
              className="aspect-[16/9] w-full rounded-[5px]"
            />

            {/* Copy below the image */}
            <div className="pt-[19px]">
              <h3 className="text-[20px] font-semibold leading-[1.12] tracking-[-0.05em]">
                What we offer
              </h3>

              <p className="text-[20px] font-medium leading-[1.12] tracking-[-0.05em] text-[#999999]">
                when working with Reffto
              </p>

              <p className="mt-[17px] max-w-[350px] text-[11px] leading-[1.48] text-[#929292] sm:text-[11.5px]">
                We work with educational institutions to bring technology
                learning to life. Our work spans robotics, drones, IoT, and
                practical innovation. We help institutions explore learning
                spaces where students can experiment, develop new skills,
                and turn their ideas into working projects.
              </p>
            </div>

            {/* Three compact accordion rows */}
            <div className="mt-[18px] max-w-[510px]">
              {questions.map((item, index) => {
                const isOpen = openQuestion === index;
                const answerId = `reffto-lab-answer-${index}`;

                return (
                  <div
                    key={item.question}
                    className="border-b border-[#E4E4E4]"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenQuestion(isOpen ? null : index)
                      }
                      className="flex min-h-[48px] w-full items-center justify-between gap-4 py-[13px] text-left"
                    >
                      <span className="text-[11px] font-medium leading-[1.4] text-[#242424] sm:text-[11.5px]">
                        {item.question}
                      </span>

                      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#242424]">
                        {isOpen ? (
                          <Minus size={14} strokeWidth={1.5} />
                        ) : (
                          <Plus size={14} strokeWidth={1.5} />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <p
                        id={answerId}
                        className="max-w-[440px] pb-4 pr-6 text-[11px] leading-[1.6] text-[#858585]"
                      >
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="flex min-w-0 flex-col gap-[5px] lg:pt-0">
            {/* Spacious icon area */}
            <div className="flex h-[218px] items-center justify-center bg-white max-sm:h-[150px] sm:max-lg:h-[190px]">
              <UserRound
                size={64}
                strokeWidth={2.8}
                className="text-[#222222]"
                aria-hidden="true"
              />
            </div>

            {/* Metric card */}
            <div className="flex h-[124px] shrink-0 flex-col justify-center rounded-[5px] bg-[#FFFBA6] px-[22px]">
              <p className="text-[44px] font-medium leading-none tracking-[-0.065em] text-[#242424]">
                40+
              </p>

              <p className="mt-[19px] text-[11px] leading-[1.4] text-[#37352A]">
                Industry Collaborations
              </p>
            </div>

            {/* Tall image with text overlay */}
            <div className="relative mt-0 h-[376px] overflow-hidden rounded-[5px] bg-[#302D2A] max-sm:h-[390px] sm:max-lg:h-[410px]">
              <LabImage
                src="/assets/images/robo-2.webp"
                alt="Reffto's technology learning environment"
                className="absolute inset-0 h-full w-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-[17px]">
                <p className="max-w-[330px] text-[13px] font-medium leading-[1.4] tracking-[-0.015em] text-white sm:text-[13.5px]">
                  At Reffto, we bring technology and practical learning
                  together, helping institutions create opportunities for
                  students to explore, experiment, and build.
                </p>

                <div className="mt-[14px] flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[10px] font-medium text-white">
                      Learning by doing
                    </p>
                    <p className="mt-[2px] text-[9px] text-white/75">
                      Robotics · Drones · IoT
                    </p>
                  </div>

                  <span className="text-[8px] font-semibold tracking-[0.08em] text-white">
                    REFFTO
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

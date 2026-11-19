
import { company } from "../../data/company.js";

const primaryColor = "var(--theme-color-brand-primary, #C026D3)";

const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Drone Lab", href: "#drone-lab" },
  { label: "Robotics Training Kit", href: "#robotics-training-kit" },
  { label: "IoT Telemetry", href: "#iot-telemetry" },
  { label: "Gallery & Projects", href: "#gallery" },
];

const companyLinks = [
  { label: "About REFFTO", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true" className="size-[17px]">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor"
        aria-hidden="true" className="size-[17px]">
        <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9h3.7v12H3.4V9Zm6 0H13v1.64h.05A4.02 4.02 0 0 1 16.67 8.7c3.87 0 4.59 2.55 4.59 5.87V21h-3.7v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3V21H9.4V9Z" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true" className="size-[17px]">
        <rect x="3" y="5" width="18" height="14" rx="4" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor"
      aria-hidden="true" className="size-[16px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ContactIcon({ type }) {
  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true" className="size-[15px]">
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true" className="size-[15px]">
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" className="size-[15px]">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.18 2 2 0 0 1 4.1 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.08 8.9a16 16 0 0 0 6 6l1.28-1.27a2 2 0 0 1 2.1-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" className="size-[20px]">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center text-[14px] font-normal leading-[1.45] text-white/60"
    >
      <span>{children}</span>

      <span className="ml-[5px] inline-flex w-0 shrink-0 translate-x-[-5px] items-center overflow-hidden text-white opacity-0 transition-all duration-300 ease-out group-hover:w-[20px] group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowUpRight />
      </span>
    </a>
  );
}

function SocialLink({ href, label, type }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-[40px] shrink-0 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.035] text-white transition-colors duration-300 hover:border-[var(--social-accent)] hover:text-[var(--social-accent)]"
      style={{ "--social-accent": primaryColor }}
    >
      <SocialIcon type={type} />
    </a>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="min-w-0">
      <h3 className="!mb-[22px] !text-[18px] !font-medium !uppercase !leading-[1.2] !tracking-[-0.02em] !text-white sm:!text-[19px] lg:!text-[20px]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ContactItem({ type, href, children, muted = false }) {
  const content = (
    <>
      <span className="mt-[1px] shrink-0" style={{ color: primaryColor }}>
        <ContactIcon type={type} />
      </span>
      <span
        className={`min-w-0 text-[13px] leading-[1.55] ${
          muted ? "text-white/60" : "font-medium text-white"
        }`}
      >
        {children}
      </span>
    </>
  );

  return href ? (
    <a href={href} className="flex min-w-0 items-start gap-[11px]">
      {content}
    </a>
  ) : (
    <div className="flex min-w-0 items-start gap-[11px]">
      {content}
    </div>
  );
}

export default function Footer() {
  const cleanPhone = company.contact.phone.replace(/[^0-9+]/g, "");

  const socials = [
    {
      label: "Instagram",
      type: "instagram",
      href: company.social.instagram,
    },
    {
      label: "LinkedIn",
      type: "linkedin",
      href: company.social.linkedin,
    },
    {
      label: "YouTube",
      type: "youtube",
      href: company.social.youtube,
    },
    {
      label: "X",
      type: "x",
      href: company.social.x,
    },
  ];

  return (
    <footer className="relative w-full bg-[#08070B] text-white">
      {/* Main content */}
      <div className="mx-auto w-full max-w-[1456px] px-6 pb-[72px] pt-[82px] sm:px-10 sm:pt-[82px] lg:px-0">
        <div className="grid grid-cols-1 gap-y-11 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:grid-cols-[420px_250px_150px_350px] lg:gap-x-[95px]">
          {/* Brand */}
          <div className="min-w-0">
            <a href="/" aria-label="REFFTO home" className="inline-flex">
              <img
                src="/assets/images/Logo.png"
                alt={company.name}
                className="block h-auto w-[160px] object-contain"
              />
            </a>

            <p className="!mt-[20px] !mb-0 max-w-[365px] !text-[14px] !font-normal !leading-[1.65] !text-white/60">
              Bringing purposeful technology, robotics research, and
              hands-on innovation together to empower institutions and
              students.
            </p>

            <div className="mt-[34px]">
              <p className="!mb-[15px] !text-[11px] !font-medium !uppercase !leading-[1.2] !tracking-normal !text-white/55">
                Connect with us
              </p>

              <div className="flex items-center gap-[12px]">
                {socials.map((social) => (
                  <SocialLink key={social.label} {...social} />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation & Labs */}
          <FooterColumn title="Navigation & Labs">
            <ul className="m-0 flex list-none flex-col items-start gap-[10px] p-0">
              {navigationLinks.map((item) => (
                <li key={item.label} className="!m-0 !p-0">
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Company */}
          <FooterColumn title="Company">
            <ul className="m-0 flex list-none flex-col items-start gap-[10px] p-0">
              {companyLinks.map((item) => (
                <li key={item.label} className="!m-0 !p-0">
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Get in Touch */}
          <FooterColumn title="Get in Touch">
            <div className="flex flex-col gap-[14px]">
              <ContactItem type="location" muted>
                {company.contact.address}
              </ContactItem>

              <ContactItem
                type="email"
                href={`mailto:${company.contact.email}`}
              >
                {company.contact.email}
              </ContactItem>

              <ContactItem
                type="phone"
                href={`tel:${cleanPhone}`}
              >
                {company.contact.phone}
              </ContactItem>
            </div>

            <p className="!mb-0 !mt-[19px] !text-[11px] !font-normal !leading-[1.5] !text-white/45">
              {company.contact.workingHours}
            </p>
          </FooterColumn>
        </div>
      </div>

      {/* Bottom divider and legal links */}
      <div className="border-t border-white/[0.13]">
        <div className="mx-auto flex min-h-[76px] w-full max-w-[1736px] flex-col items-center justify-between gap-4 px-6 py-5 sm:px-10 md:flex-row md:py-0 lg:px-0">
          <p className="!m-0 !text-[12px] !font-normal !leading-[1.5] !text-white/55">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-[14px] text-[12px] text-white/55">
            <a
              href="/privacy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </a>

            <span className="h-[14px] w-px bg-white/15" aria-hidden="true" />

            <a
              href="/terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 z-40 flex size-[44px] items-center justify-center rounded-[13px] border border-white/[0.14] bg-[#151119] text-white shadow-lg transition-colors duration-200 hover:border-[var(--back-top-accent)] hover:text-[var(--back-top-accent)]"
        style={{ "--back-top-accent": primaryColor }}
      >
        <ArrowUpRight />
      </button>
    </footer>
  );
}

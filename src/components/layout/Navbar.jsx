
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";

function Dropdown({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium !text-white transition-colors duration-300 hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
      >
        {item.label}
        <ArrowDown
          size={13}
          className={`!text-white transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-4"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#15111c]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
              {item.children.map((child) => (
                <a
                  key={`${child.label}-${child.href}`}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-3.5 py-3 !text-white transition-colors duration-200 hover:bg-white/10 hover:!text-white"
                >
                  <span className="!text-white">{child.label}</span>
                  <ArrowUpRight
                    size={14}
                    className="!text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const hero = document.querySelector(
          '[aria-label="Reffto innovation introduction"]'
        );

        if (hero) {
          const rect = hero.getBoundingClientRect();

          // Keep the navbar transparent throughout the Hero.
          // Show the dark glass background when the next section reaches it.
          setScrolled(rect.bottom <= 76);
        } else {
          setScrolled(window.scrollY > 60);
        }

        ticking = false;
      });
    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, { passive: true });
    window.addEventListener("resize", updateNavbar);

    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("resize", updateNavbar);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  const headerStyle = {
    backgroundColor: scrolled ? "rgba(13, 11, 18, 0.88)" : "transparent",
    boxShadow: scrolled ? "0 10px 35px rgba(0, 0, 0, 0.22)" : "none",
    backdropFilter: scrolled ? "blur(22px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(22px)" : "none",
  };

  return (
    <>
      <header
        style={{
          ...headerStyle,
          marginBottom: "-76px",
          transition:
            "background-color 350ms ease, box-shadow 350ms ease, backdrop-filter 350ms ease",
        }}
        className="sticky top-0 z-50 border-0"
      >
        <div className="container-page relative flex h-[76px] items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            aria-label="Reffto home"
            className="relative z-10 flex shrink-0 items-center"
          >
            <img
              src="/assets/images/Logo.png"
              alt="Reffto"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) =>
              item.children ? (
                <Dropdown key={item.label} item={item} />
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-[13px] font-medium !text-white transition-colors duration-300 hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-gradient-to-b from-[#8e4be0] to-[#6d16b8] px-5 py-3 text-[12px] font-semibold !text-white shadow-[0_4px_20px_rgba(109,22,184,0.22)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(139,55,214,0.4)] lg:inline-flex"
          >
            <span className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/40" />
            <span className="!text-white">Let's talk</span>
            <ArrowUpRight
              size={15}
              className="!text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 !text-white transition-colors hover:bg-white/15 lg:hidden"
          >
            {mobileOpen ? (
              <X size={20} className="!text-white" />
            ) : (
              <Menu size={20} className="!text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[#100d16]/[0.98] px-5 pb-10 pt-24 text-white backdrop-blur-2xl lg:hidden"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-700/15 blur-[100px]" />

            <nav
              aria-label="Mobile navigation"
              className="relative mx-auto flex max-w-lg flex-col"
            >
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 py-4"
                >
                  {item.children ? (
                    <>
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] !text-white">
                        {item.label}
                      </p>

                      <div className="grid gap-1">
                        {item.children.map((child) => (
                          <a
                            key={`${child.label}-${child.href}`}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className="flex items-center justify-between rounded-xl px-3 py-3 !text-white transition-colors hover:bg-white/10 hover:!text-white"
                          >
                            <span className="!text-white">
                              {child.label}
                            </span>
                            <ArrowUpRight
                              size={16}
                              className="!text-white"
                            />
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between text-xl font-medium !text-white transition-colors hover:!text-white"
                    >
                      {item.label}
                      <ArrowUpRight
                        size={18}
                        className="!text-white"
                      />
                    </a>
                  )}
                </div>
              ))}

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-7 flex items-center justify-center gap-2 rounded-full border border-white/20 bg-gradient-to-b from-[#8e4be0] to-[#6d16b8] px-5 py-4 text-sm font-semibold !text-white shadow-[0_8px_30px_rgba(109,22,184,0.25)]"
              >
                <span className="!text-white">Let's talk</span>
                <ArrowUpRight size={17} className="!text-white" />
              </a>
            </nav>

            <p className="relative mt-10 text-center text-[10px] uppercase tracking-[0.2em] !text-white">
              Robotics · Innovation · Education
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

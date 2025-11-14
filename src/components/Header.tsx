import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Header.jsx
 * - Mobile menu overlays content, same width as header, no top border.
 * - Hamburger -> symmetric cross.
 * - Smooth GPU-friendly animations, will-change for better performance.
 */

export default function Header({
  name = "Savely Karmatsky",
  links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: any) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    const { documentElement } = document;
    if (open) {
      documentElement.classList.add("overflow-hidden", "touch-none");
    } else {
      documentElement.classList.remove("overflow-hidden", "touch-none");
    }
    return () => {
      documentElement.classList.remove("overflow-hidden", "touch-none");
    };
  }, [open]);

  // Hamburger -> symmetric cross variants
  const topVariant = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 4 },
  };
  const middleVariant = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 },
  };
  const bottomVariant = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -4 },
  };

  return (
    <header className="sticky top-0 md:top-4 z-50 overflow-visible">
      <div className="mx-auto max-w-6xl px-6">
        {/* relative контейнер шапки — меню будет абсолютно позиционировано внутри него */}
        <motion.div
          className="relative bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-none md:rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Левый блок: логотип/имя */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-3 focus:outline-none"
            >
              <span className="text-sm font-semibold text-slate-900">
                {name}
              </span>
            </a>
          </div>

          {/* Десктоп-меню */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {links.map((l, index) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                >
                  <a
                    href={l.href}
                    className="text-sm text-slate-700 hover:text-slate-900 transition-colors relative group"
                  >
                    {l.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Мобильный гамбургер */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="rounded-md hover:bg-slate-100 focus:outline-none"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block text-slate-800"
                aria-hidden
              >
                <motion.rect
                  width="18"
                  height="2"
                  rx="1"
                  x="5"
                  y="7"
                  fill="currentColor"
                  variants={topVariant}
                  initial="closed"
                  animate={open ? "open" : "closed"}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  style={{
                    originX: "50%",
                    originY: "50%",
                    willChange: "transform",
                  }}
                />
                <motion.rect
                  width="18"
                  height="2"
                  rx="1"
                  x="5"
                  y="13"
                  fill="currentColor"
                  variants={middleVariant}
                  initial="closed"
                  animate={open ? "open" : "closed"}
                  transition={{ duration: 0.16, ease: "easeInOut" }}
                  style={{
                    originX: "50%",
                    originY: "50%",
                    willChange: "opacity",
                  }}
                />
                <motion.rect
                  width="18"
                  height="2"
                  rx="1"
                  x="5"
                  y="19"
                  fill="currentColor"
                  variants={bottomVariant}
                  initial="closed"
                  animate={open ? "open" : "closed"}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  style={{
                    originX: "50%",
                    originY: "50%",
                    willChange: "transform",
                  }}
                />
              </svg>
            </button>
          </div>

          {/* ===== мобильное меню: полный экран оверлей ===== */}
          <AnimatePresence initial={false}>
            {open && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                  onClick={() => setOpen(false)}
                />

                {/* Menu Panel */}
                <motion.div
                  key="mobile-menu"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 200,
                  }}
                  className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-slate-200">
                    <h2 className="text-lg font-semibold text-slate-900">
                      Menu
                    </h2>
                    <button
                      onClick={() => setOpen(false)}
                      className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                      aria-label="Close menu"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 5l10 10M15 5L5 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 p-6">
                    <ul className="space-y-2">
                      {links.map((l, index) => (
                        <motion.li
                          key={l.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <a
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block text-lg font-medium text-slate-800 py-4 px-4 rounded-xl hover:bg-slate-50 transition-all duration-200 hover:translate-x-2"
                          >
                            {l.label}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  {/* Footer */}
                  <div className="p-6 border-t border-slate-200">
                    <p className="text-sm text-slate-500 text-center">
                      © 2024 Savely Karmatsky
                    </p>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          {/* ===== end mobile menu ===== */}
        </motion.div>
      </div>
    </header>
  );
}

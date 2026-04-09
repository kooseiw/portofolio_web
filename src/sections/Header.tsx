"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Project" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="hidden md:flex justify-center items-center fixed top-3 w-full z-10 px-6">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`nav-item ${
                activeSection === id
                  ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                  : ""
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <Link
          href="/resume.pdf"
          download="Gede Koosei Wibawa CV.pdf"
          className="absolute right-6 flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur text-sm font-semibold text-white/70 hover:bg-white/20 hover:text-white transition duration-300"
        >
          <Download className="size-4" />
          Resume
        </Link>
      </div>

      <Link
        href="/resume.pdf"
        download="Gede Koosei Wibawa CV.pdf"
        className="md:hidden fixed top-3 left-4 z-30 flex items-center gap-1.5 h-10 px-3 rounded-full border border-white/15 bg-white/10 backdrop-blur text-sm font-semibold text-white/70 hover:bg-white/20 hover:text-white transition duration-300"
      >
        <Download className="size-4" />
        Resume
      </Link>

      <div className="md:hidden fixed top-3 right-4 z-30">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="size-10 flex flex-col justify-center items-center gap-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-300 origin-center ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-300 origin-center ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-gray-950/70 backdrop-blur-sm z-20"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-16 left-4 right-4 z-30 rounded-2xl border border-white/15 bg-gray-900/95 backdrop-blur p-3"
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map(({ id, label }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleClick(e, id)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition duration-300 ${
                      activeSection === id
                        ? "bg-white text-gray-900"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

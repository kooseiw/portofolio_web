"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "home")}
          className={`nav-item ${
            activeSection === "home"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={(e) => handleClick(e, "projects")}
          className={`nav-item ${
            activeSection === "projects"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Project
        </a>
        <a
          href="#about"
          onClick={(e) => handleClick(e, "about")}
          className={`nav-item ${
            activeSection === "about"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "contact")}
          className={`nav-item ${
            activeSection === "contact"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

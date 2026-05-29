import { useState, useEffect } from "react";
import { personal } from "../data";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-900/95 backdrop-blur border-b border-dark-600 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "hero")}
          className="font-mono text-xl font-bold text-white hover:text-accent transition-colors"
        >
          NN<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={(e) => handleNav(e, l)}
                className="text-sm text-gray-400 hover:text-accent transition-colors font-medium"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a href={personal.resumeFile} download className="hidden md:inline-flex btn-outline text-sm px-4 py-2">
          Resume ↓
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-dark-800 border-b border-dark-600 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => handleNav(e, l)}
              className="text-gray-300 hover:text-accent transition-colors"
            >
              {l}
            </a>
          ))}
          <a href={personal.resumeFile} download className="btn-outline text-sm self-start">
            Resume ↓
          </a>
        </div>
      )}
    </nav>
  );
}

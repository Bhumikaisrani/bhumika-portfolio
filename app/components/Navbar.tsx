"use client";

import { useState, useEffect, useCallback } from "react";
import FloralMotif from "./FloralMotif";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "nav-glass shadow-sm" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group"
            >
              <FloralMotif className="w-7 h-7 text-maroon transition-transform duration-300 group-hover:rotate-12" />
              <span
                className="font-heading text-xl font-semibold text-maroon-deep tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Bhumika Israni
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-maroon active"
                      : "text-text-muted hover:text-maroon"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-maroon text-parchment rounded-full text-sm font-medium transition-all duration-300 hover:bg-maroon-deep hover:shadow-lg hover:-translate-y-0.5"
            >
              Let&apos;s Connect
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-maroon-deep transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-maroon-deep transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-maroon-deep transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        <div className="flex flex-col h-full pt-24 px-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`py-4 text-lg font-medium border-b border-gold/20 transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-maroon"
                  : "text-text-muted hover:text-maroon"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                fontFamily: "var(--font-heading)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-8 btn-primary justify-center"
          >
            <span>Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </>
  );
}

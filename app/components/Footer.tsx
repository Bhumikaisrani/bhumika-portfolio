"use client";

import FloralMotif from "./FloralMotif";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-maroon-deep text-parchment pt-16 pb-12 overflow-hidden">
      {/* Decorative top border inspired by Rajasthani jali pattern */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

      {/* Traditional palace skyline silhouette in background */}
      <div className="absolute bottom-0 left-0 right-0 opacity-[0.04] pointer-events-none">
        <svg
          viewBox="0 0 1200 80"
          fill="var(--gold)"
          className="w-full"
          preserveAspectRatio="none"
        >
          <rect x="0" y="50" width="1200" height="30" />
          <rect x="60" y="30" width="30" height="50" />
          <rect x="95" y="15" width="40" height="65" rx="20" ry="20" />
          <rect x="150" y="35" width="25" height="45" />
          <rect x="250" y="20" width="60" height="60" rx="30" ry="30" />
          <rect x="360" y="35" width="30" height="45" />
          <rect x="440" y="15" width="50" height="65" rx="25" ry="25" />
          <rect x="580" y="10" width="70" height="70" rx="35" ry="35" />
          <rect x="740" y="18" width="55" height="62" rx="27" ry="27" />
          <rect x="880" y="35" width="30" height="45" />
          <rect x="960" y="22" width="45" height="58" rx="22" ry="22" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Floral motif center accent */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gold/40" />
            <FloralMotif className="w-8 h-8 text-gold" />
            <span className="w-12 h-px bg-gold/40" />
          </div>

          {/* Brand/Signature */}
          <p
            className="text-2xl font-semibold tracking-wide text-parchment"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Bhumika Israni
          </p>

          <p className="text-sm text-parchment/70 mt-2 font-medium tracking-wide">
            Made with love by Bhumika Israni | NST 2030
          </p>

          {/* Decorative Divider */}
          <div className="w-24 h-px bg-gold/30 my-6" />

          {/* Back to top button */}
          <a
            href="#home"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors duration-300 group py-2"
          >
            <span>Back to top</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

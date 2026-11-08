"use client";

import Image from "next/image";
import FloralMotif from "./FloralMotif";

export default function HeroSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[72px] overflow-hidden parchment-texture"
    >
      {/* Subtle decorative floral corners */}
      <div className="absolute top-24 left-8 float-slow opacity-10">
        <FloralMotif className="w-20 h-20 text-maroon" />
      </div>
      <div className="absolute bottom-20 right-12 float-slow-reverse opacity-8">
        <FloralMotif className="w-16 h-16 text-gold" />
      </div>
      <div className="absolute top-40 right-1/3 float-slow opacity-5">
        <FloralMotif className="w-12 h-12 text-sage" />
      </div>

      {/* Decorative arch silhouette - top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[200px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 600 200" fill="var(--maroon)">
          <path d="M0,200 Q150,0 300,0 Q450,0 600,200 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            {/* Greeting */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-parchment-alt/80 border border-gold/20">
                <FloralMotif className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-text-muted tracking-wide">
                  Namaste! Welcome to my digital space.
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className="animate-fade-up animate-delay-100"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="block text-6xl sm:text-7xl lg:text-[5.5rem] font-bold text-maroon-deep leading-[0.95] tracking-tight">
                Bhumika
              </span>
              <span className="block text-6xl sm:text-7xl lg:text-[5.5rem] font-bold text-maroon-deep leading-[0.95] tracking-tight mt-1">
                Israni
              </span>
              <span className="inline-block ml-2 text-gold text-3xl align-middle">✦</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up animate-delay-200 text-base sm:text-lg text-text-muted tracking-wide">
              <span className="font-semibold text-text-main">NST 2030 Batch</span>
              <span className="mx-3 text-gold">•</span>
              <span>Learning, Building, Growing</span>
              <span className="ml-1 text-gold">✨</span>
            </p>

            {/* Description */}
            <p className="animate-fade-up animate-delay-300 text-base sm:text-lg text-text-muted leading-relaxed max-w-lg">
              A curious mind exploring the world of code, blending technology
              with tradition. Currently learning web development and building
              projects one step at a time.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up animate-delay-400 flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="btn-primary"
              >
                <span>Explore My Work</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="btn-secondary"
              >
                About Me
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="animate-fade-up animate-delay-500 flex items-center gap-3 pt-4 text-text-muted">
              <div className="w-6 h-10 rounded-full border-2 border-text-muted/40 flex items-start justify-center p-1.5">
                <div className="w-1 h-2.5 bg-text-muted/60 rounded-full animate-bounce" />
              </div>
              <span className="text-sm tracking-wide">Scroll to explore</span>
            </div>
          </div>

          {/* Right - Hero Image with Arch Frame */}
          <div className="order-1 lg:order-2 relative animate-fade-up animate-delay-200">
            {/* Decorative arch frame */}
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Outer decorative border */}
              <div className="absolute -inset-3 border-2 border-gold/20 rounded-t-[200px] rounded-b-xl pointer-events-none" />

              {/* Inner gold accent line */}
              <div className="absolute -inset-1 border border-gold/10 rounded-t-[196px] rounded-b-lg pointer-events-none" />

              {/* Main image container with arch shape */}
              <div className="relative rounded-t-[190px] rounded-b-lg overflow-hidden shadow-2xl shadow-maroon/10">
                <Image
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=1000&fit=crop&crop=center"
                  alt="Udaipur City Palace and Lake Pichola at golden hour, representing Rajasthani architectural heritage"
                  width={800}
                  height={1000}
                  className="w-full h-[400px] sm:h-[480px] lg:h-[560px] object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment/60 to-transparent pointer-events-none" />
              </div>

              {/* Small floral decoration - top left of arch */}
              <div className="absolute -top-2 -left-6 float-slow">
                <FloralMotif className="w-10 h-10 text-maroon/30" />
              </div>

              {/* Small floral decoration - top right of arch */}
              <div className="absolute -top-2 -right-6 float-slow-reverse">
                <FloralMotif className="w-10 h-10 text-gold/40" />
              </div>

              {/* Small palace silhouette at bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
                <svg
                  width="200"
                  height="40"
                  viewBox="0 0 200 40"
                  fill="var(--maroon-deep)"
                >
                  {/* Simplified palace skyline */}
                  <rect x="0" y="25" width="200" height="15" />
                  <rect x="10" y="18" width="15" height="22" />
                  <rect x="30" y="12" width="20" height="28" rx="10" ry="10" />
                  <rect x="55" y="20" width="12" height="20" />
                  <rect x="72" y="8" width="25" height="32" rx="12" ry="12" />
                  <rect x="102" y="16" width="15" height="24" />
                  <rect x="122" y="10" width="22" height="30" rx="11" ry="11" />
                  <rect x="150" y="20" width="12" height="20" />
                  <rect x="167" y="14" width="18" height="26" rx="9" ry="9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}

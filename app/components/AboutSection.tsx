import FloralMotif from "./FloralMotif";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      {/* Subtle background variation */}
      <div className="absolute inset-0 bg-gradient-to-b from-parchment to-parchment-alt/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <ScrollReveal>
            <div className="space-y-6">
              {/* Section heading */}
              <div className="flex items-center gap-3">
                <FloralMotif className="w-6 h-6 text-gold" />
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-deep section-heading"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  A Little About Me
                </h2>
              </div>

              <p className="text-lg text-text-muted leading-relaxed pt-4">
                I&apos;m Bhumika Israni, a student at Newton School of
                Technology, part of the 2030 batch. I&apos;m currently exploring
                web development, learning HTML and CSS, understanding Python
                basics, and experimenting with the command line.
              </p>

              <p className="text-lg text-text-muted leading-relaxed">
                I enjoy learning by building and turning ideas into real
                projects. Every line of code I write brings me closer to
                understanding how technology can create meaningful experiences.
              </p>

              {/* Decorative quote */}
              <div className="mt-8 pl-6 border-l-3 border-gold relative">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-gold" />
                <p
                  className="text-xl text-maroon italic"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  &ldquo;Every great journey begins with curiosity.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Portrait Placeholder with Heritage Frame */}
          <ScrollReveal delay={200}>
            <div className="flex justify-center">
              <div className="relative">
                {/* Outer decorative ring */}
                <div className="absolute -inset-4 border border-gold/20 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] pointer-events-none" />

                {/* Portrait frame */}
                <div className="portrait-frame w-72 h-80 sm:w-80 sm:h-96 flex items-center justify-center">
                  <div className="w-full h-full rounded-[50%_50%_50%_50%_/_55%_55%_45%_45%] bg-gradient-to-br from-parchment-alt to-parchment flex flex-col items-center justify-center gap-4 overflow-hidden">
                    {/* Placeholder icon */}
                    <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--gold)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <span className="text-sm text-text-muted/60 tracking-wide">
                      Portrait Placeholder
                    </span>
                  </div>
                </div>

                {/* Corner florals */}
                <div className="absolute -top-6 -right-6 float-slow">
                  <FloralMotif className="w-8 h-8 text-maroon/20" />
                </div>
                <div className="absolute -bottom-6 -left-6 float-slow-reverse">
                  <FloralMotif className="w-8 h-8 text-gold/30" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}

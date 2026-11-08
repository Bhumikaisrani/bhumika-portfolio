import FloralMotif from "./FloralMotif";
import ScrollReveal from "./ScrollReveal";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden">
            {/* Rich maroon background */}
            <div className="absolute inset-0 bg-gradient-to-br from-maroon-deep via-maroon to-maroon-deep" />

            {/* Decorative overlay pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(189, 148, 88, 0.3) 20px,
                  rgba(189, 148, 88, 0.3) 21px
                )`
              }} />
            </div>

            {/* Architectural silhouette at bottom */}
            <div className="absolute bottom-0 left-0 right-0 opacity-[0.06] pointer-events-none">
              <svg
                viewBox="0 0 1200 120"
                fill="var(--gold-light)"
                className="w-full"
                preserveAspectRatio="none"
              >
                {/* Palace skyline */}
                <rect x="0" y="80" width="1200" height="40" />
                <rect x="50" y="60" width="40" height="60" />
                <rect x="100" y="40" width="60" height="80" rx="30" ry="30" />
                <rect x="180" y="55" width="35" height="65" />
                <rect x="240" y="30" width="80" height="90" rx="40" ry="40" />
                <rect x="350" y="50" width="45" height="70" />
                <rect x="420" y="35" width="70" height="85" rx="35" ry="35" />
                <rect x="520" y="55" width="40" height="65" />
                <rect x="580" y="25" width="90" height="95" rx="45" ry="45" />
                <rect x="700" y="45" width="50" height="75" />
                <rect x="770" y="30" width="75" height="90" rx="37" ry="37" />
                <rect x="870" y="55" width="40" height="65" />
                <rect x="930" y="40" width="65" height="80" rx="32" ry="32" />
                <rect x="1020" y="50" width="45" height="70" />
                <rect x="1090" y="35" width="60" height="85" rx="30" ry="30" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative px-8 py-16 lg:px-16 lg:py-20">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                {/* Trophy + Text */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    {/* Trophy icon */}
                    <div className="trophy-pulse">
                      <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--gold-light)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                          <path d="M4 22h16" />
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 19.24 7 20h10c0-.76-.85-1.25-2.03-1.79C14.47 17.98 14 17.55 14 17v-2.34" />
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                        </svg>
                      </div>
                    </div>

                    <FloralMotif className="w-6 h-6 text-gold/40" />
                  </div>

                  {/* Heading */}
                  <p className="text-gold-light text-sm tracking-[0.2em] uppercase font-medium mb-3">
                    A Moment to Remember
                  </p>

                  <h3
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-parchment leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Hacktober Fest 2026
                  </h3>

                  <p
                    className="text-2xl sm:text-3xl font-bold mt-2 gold-shimmer"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Winners
                  </p>

                  <p className="text-parchment/80 mt-4 text-lg">
                    <span className="font-medium text-parchment">Team Winner</span>
                    <span className="mx-2 text-gold/60">•</span>
                    Newton School of Technology
                  </p>

                  <p className="text-parchment/60 mt-4 max-w-lg leading-relaxed">
                    Celebrating teamwork, open-source contributions, collaboration
                    and the joy of building together.
                    <span className="ml-1 text-gold/60">✨</span>
                  </p>
                </div>

                {/* Decorative right element */}
                <div className="flex-shrink-0 relative">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full border-2 border-gold/20 flex items-center justify-center relative">
                    <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full border border-gold/10 flex items-center justify-center">
                      <div className="text-center">
                        <p
                          className="text-4xl lg:text-5xl font-bold gold-shimmer"
                          style={{ fontFamily: "var(--font-accent)" }}
                        >
                          Hacktober
                        </p>
                        <p
                          className="text-3xl lg:text-4xl font-bold gold-shimmer mt-1"
                          style={{ fontFamily: "var(--font-accent)" }}
                        >
                          Fest
                        </p>
                      </div>
                    </div>
                    {/* Orbiting dots */}
                    <div className="absolute top-2 right-6 w-2 h-2 rounded-full bg-gold/40" />
                    <div className="absolute bottom-4 left-2 w-1.5 h-1.5 rounded-full bg-gold/30" />
                    <div className="absolute top-1/2 -right-1 w-2.5 h-2.5 rounded-full bg-gold/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4">
              <FloralMotif className="w-8 h-8 text-gold/15" />
            </div>
            <div className="absolute top-4 right-4">
              <FloralMotif className="w-8 h-8 text-gold/15" />
            </div>
            <div className="absolute bottom-4 left-4">
              <FloralMotif className="w-6 h-6 text-gold/10" />
            </div>
            <div className="absolute bottom-4 right-4">
              <FloralMotif className="w-6 h-6 text-gold/10" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

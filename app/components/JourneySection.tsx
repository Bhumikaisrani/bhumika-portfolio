import FloralMotif from "./FloralMotif";
import ScrollReveal from "./ScrollReveal";

const MILESTONES = [
  {
    title: "Discovering the Terminal",
    description: "Started exploring the command line and understanding how computers work under the hood.",
  },
  {
    title: "CLI Workflows",
    description: "Learned basic CLI workflows — navigating directories, running scripts, and managing files.",
  },
  {
    title: "HTML & CSS Foundations",
    description: "Started learning HTML and CSS, building the visual foundations of web development.",
  },
  {
    title: "Python Basics",
    description: "Began exploring Python — understanding variables, loops, functions, and logic.",
  },
  {
    title: "Building with Modern Tools",
    description: "Started building projects using modern web technologies like Next.js and Tailwind CSS.",
  },
  {
    title: "The Journey Continues",
    description: "Continuing my journey at Newton School of Technology — learning, growing, and building every day.",
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 lg:py-28 relative bg-parchment-alt/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FloralMotif className="w-6 h-6 text-gold" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-deep"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                My Learning Journey
              </h2>
              <FloralMotif className="w-6 h-6 text-gold" />
            </div>
            <div className="heritage-divider mt-4">
              <span className="text-gold text-lg">✦</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Central line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-gold/20 md:-translate-x-px" />

          {MILESTONES.map((milestone, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="timeline-dot">
                    <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping" style={{ animationDuration: '3s' }} />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-32px)] ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="heritage-card p-6">
                    <span className="text-xs font-semibold text-gold tracking-widest uppercase">
                      Step {index + 1}
                    </span>
                    <h3
                      className="text-xl font-semibold text-maroon-deep mt-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {milestone.title}
                    </h3>
                    <p className="text-text-muted mt-2 leading-relaxed text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block md:w-[calc(50%-32px)]" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}

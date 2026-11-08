import FloralMotif from "./FloralMotif";
import ScrollReveal from "./ScrollReveal";

const PROJECTS = [
  {
    id: 1,
    title: "Project Title",
    description: "Short description of the project. What it does and what you learned building it.",
    tags: ["Next.js", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Project Title",
    description: "Short description of the project. What it does and what you learned building it.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Project Title",
    description: "Short description of the project. What it does and what you learned building it.",
    tags: ["Python", "CLI"],
    github: "#",
    live: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-parchment-alt/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FloralMotif className="w-6 h-6 text-gold" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-deep section-heading"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Things I&apos;ve Built
              </h2>
            </div>
            <p className="text-text-muted mt-6 max-w-md">
              A few things I&apos;ve built so far...
            </p>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150}>
              <div className="heritage-card group h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-parchment-alt to-parchment flex items-center justify-center overflow-hidden">
                  {/* Decorative pattern background */}
                  <div className="absolute inset-0 dot-pattern opacity-20" />

                  {/* Placeholder icon */}
                  <div className="relative flex flex-col items-center gap-3 text-text-muted/40">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className="text-xs tracking-wider uppercase">
                      Project Image
                    </span>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FloralMotif className="w-5 h-5 text-gold/40" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-xl font-semibold text-maroon-deep"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-text-muted mt-3 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-maroon/80 bg-maroon/5 border border-maroon/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gold/10">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-text-muted hover:text-maroon transition-colors duration-300"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-sm text-text-muted hover:text-maroon transition-colors duration-300"
                      aria-label={`${project.title} live demo`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
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

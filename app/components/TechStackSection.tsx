import FloralMotif from "./FloralMotif";
import ScrollReveal from "./ScrollReveal";

const TECH_ITEMS = [
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#06B6D4">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8 c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8 c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    color: "#06B6D4",
  },
  {
    name: "Bun",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#FBF0DF">
        <circle cx="12" cy="12" r="11" fill="#FBF0DF" stroke="#4B2027" strokeWidth="0.5"/>
        <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#4B2027" fontFamily="sans-serif">B</text>
      </svg>
    ),
    color: "#FBF0DF",
  },
  {
    name: "HTML",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#E34F26">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.757.541-6.03.115-1.248H5.248l.205 2.247.056.614.031.341h7.652l-.313 3.301H7.858l.59 6.494 3.541 1.01.004-.002 3.597-1.003.434-4.847h-2.53l-.222 2.524-1.28.358-1.28-.358-.084-.936z" />
      </svg>
    ),
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#1572B6">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.002l5.355-1.12.564-6.468z" />
      </svg>
    ),
    color: "#1572B6",
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path
          fill="#3776AB"
          d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.25-.02h.13l9.67.02zm-5.29 1.01c-.26 0-.5.1-.69.29-.18.19-.28.43-.28.69 0 .26.1.5.28.69.19.19.43.29.69.29.27 0 .5-.1.69-.29.19-.19.29-.43.29-.69 0-.26-.1-.5-.29-.69-.19-.19-.42-.29-.69-.29z"
        />
        <path
          fill="#FFD43B"
          d="M9.69 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2v-5.03l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h6.79l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V7.94h4.24l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.25.02h-.13l-9.67-.02zm5.29-1.01c.26 0 .5-.1.69-.29.18-.19.28-.43.28-.69 0-.26-.1-.5-.28-.69-.19-.19-.43-.29-.69-.29-.27 0-.5.1-.69.29-.19.19-.29.43-.29.69 0 .26.1.5.29.69.19.19.42.29.69.29z"
        />
      </svg>
    ),
    color: "#3776AB",
  },
  {
    name: "CLI",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#392923" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    color: "#392923",
  },
];

export default function TechStackSection() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FloralMotif className="w-6 h-6 text-gold" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-deep"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tools I&apos;m Exploring
              </h2>
            </div>
            <p className="text-text-muted mt-4 max-w-md mx-auto">
              Technologies and tools I&apos;m currently learning and building with
            </p>
          </div>
        </ScrollReveal>

        {/* Tech Grid */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
            {TECH_ITEMS.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-card"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-text-main tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Learning badge */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <span className="text-sm text-text-muted flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              Currently Learning
            </span>
            {["HTML", "CSS", "Python"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium tracking-wider text-maroon bg-maroon/5 border border-maroon/15 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}

/**
 * FloralMotif — a Rajasthani-inspired decorative floral SVG.
 * Used as the brand icon and section accents.
 */
export default function FloralMotif({
  className = "w-6 h-6",
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Center bloom */}
      <circle cx="20" cy="20" r="4" fill={color || "currentColor"} opacity="0.9" />

      {/* Petals — 8 directions */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 20 20)`}>
          <ellipse
            cx="20"
            cy="10"
            rx="3.5"
            ry="7"
            fill={color || "currentColor"}
            opacity="0.7"
          />
        </g>
      ))}

      {/* Inner ring of small dots */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 20 + 6 * Math.cos(rad);
        const cy = 20 + 6 * Math.sin(rad);
        return (
          <circle
            key={`dot-${angle}`}
            cx={cx}
            cy={cy}
            r="1.2"
            fill={color || "currentColor"}
            opacity="0.5"
          />
        );
      })}
    </svg>
  );
}

export default function PenguinStamp({ size = 56 }) {
  return (
    <svg
      viewBox="0 0 80 100"
      width={size}
      height={size * 1.25}
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <g fill="currentColor">
        {/* Body */}
        <ellipse cx="40" cy="56" rx="26" ry="34" />
        {/* Belly (cut-out via paper colour) */}
        <ellipse cx="40" cy="60" rx="16" ry="24" fill="var(--paper)" />
        {/* Head */}
        <circle cx="40" cy="22" r="16" />
        {/* Face cut-out */}
        <path
          d="M 28 26 Q 28 36 40 36 Q 52 36 52 26 Q 50 20 40 20 Q 30 20 28 26 Z"
          fill="var(--paper)"
        />
        {/* Beak */}
        <path d="M 36 28 L 44 28 L 40 34 Z" fill="var(--ember, #a44523)" />
        {/* Eye */}
        <circle cx="40" cy="22" r="1.6" fill="currentColor" />
        {/* Feet */}
        <ellipse cx="30" cy="92" rx="6" ry="2.4" fill="var(--ember, #a44523)" />
        <ellipse cx="50" cy="92" rx="6" ry="2.4" fill="var(--ember, #a44523)" />
        {/* Wing — slight ink-press feel via opacity */}
        <path
          d="M 16 50 Q 12 64 18 78 Q 22 80 24 72 Q 22 60 22 50 Z"
          opacity="0.78"
        />
      </g>
    </svg>
  );
}

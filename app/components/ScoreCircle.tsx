/**
 * ScoreCircle — mirrors Sherpa's audit score circle.
 * Renders a SVG ring that fills proportional to score (0–100),
 * with a letter grade pill anchored bottom-right.
 */

type Tone = "good" | "warn" | "danger";

function toneFromScore(score: number): Tone {
  if (score >= 80) return "good";
  if (score >= 60) return "warn";
  return "danger";
}

function letterFromScore(score: number): string {
  if (score >= 90) return "A";
  if (score >= 85) return "A-";
  if (score >= 80) return "B+";
  if (score >= 75) return "B";
  if (score >= 70) return "C+";
  if (score >= 65) return "C";
  if (score >= 60) return "C-";
  if (score >= 55) return "D+";
  if (score >= 50) return "D";
  return "F";
}

export function ScoreCircle({
  score,
  size = 96,
  letter,
}: {
  score: number;
  size?: number;
  letter?: string;
}) {
  const tone = toneFromScore(score);
  const letterFinal = letter ?? letterFromScore(score);
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.max(0, Math.min(100, score)) / 100) * circumference;

  const ringColor =
    tone === "good"
      ? "var(--good-text)"
      : tone === "warn"
        ? "var(--warn-text)"
        : "var(--danger-text)";

  const trackColor =
    tone === "good"
      ? "var(--good-fill)"
      : tone === "warn"
        ? "var(--warn-fill)"
        : "var(--danger-fill)";

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={ringColor}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 800ms cubic-bezier(0.2, 0.7, 0.2, 1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="display text-3xl font-medium tabular-nums"
          style={{ color: ringColor }}
        >
          {score}
        </span>
      </div>
      <span
        className="absolute -bottom-1 right-0 inline-flex items-center justify-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold tracking-wide ring-1 ring-inset"
        style={{
          background: trackColor,
          color: ringColor,
          borderColor: ringColor,
        }}
      >
        {letterFinal}
      </span>
    </div>
  );
}

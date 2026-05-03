type Severity = "good" | "warn" | "danger";

const labels: Record<Severity, string> = {
  good: "Doing Well",
  warn: "Should Fix",
  danger: "Must Fix",
};

const styles: Record<Severity, string> = {
  good:
    "bg-[color:var(--good-fill)] text-[color:var(--good-text)] ring-[color:var(--good-rule)]",
  warn:
    "bg-[color:var(--warn-fill)] text-[color:var(--warn-text)] ring-[color:var(--warn-rule)]",
  danger:
    "bg-[color:var(--danger-fill)] text-[color:var(--danger-text)] ring-[color:var(--danger-rule)]",
};

export function SeverityTag({
  severity,
  label,
}: {
  severity: Severity;
  label?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide ring-1 ring-inset ${styles[severity]}`}
    >
      <Dot severity={severity} />
      {label ?? labels[severity]}
    </span>
  );
}

function Dot({ severity }: { severity: Severity }) {
  const fill =
    severity === "good"
      ? "var(--good-text)"
      : severity === "warn"
        ? "var(--warn-text)"
        : "var(--danger-text)";
  return (
    <span
      aria-hidden
      className="h-1.5 w-1.5 rounded-full"
      style={{ background: fill }}
    />
  );
}

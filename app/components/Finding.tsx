import { SeverityTag } from "./SeverityTag";

type Severity = "good" | "warn" | "danger";

/**
 * Finding — the audit-finding card primitive.
 * Mirrors Sherpa's annotated-review card shape:
 * numbered index, title, body, severity tag.
 */
export function Finding({
  index,
  severity,
  title,
  children,
  customLabel,
}: {
  index: number | string;
  severity: Severity;
  title: string;
  children: React.ReactNode;
  customLabel?: string;
}) {
  const indexColor =
    severity === "good"
      ? "var(--good-text)"
      : severity === "warn"
        ? "var(--warn-text)"
        : "var(--danger-text)";
  const indexBg =
    severity === "good"
      ? "var(--good-fill)"
      : severity === "warn"
        ? "var(--warn-fill)"
        : "var(--danger-fill)";

  return (
    <article className="card card-lift p-5">
      <div className="flex items-start gap-4">
        <span
          aria-hidden
          className="mono inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ring-1 ring-inset"
          style={{
            background: indexBg,
            color: indexColor,
            borderColor: indexColor,
          }}
        >
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <h4 className="text-[15px] font-semibold leading-snug text-[color:var(--ink)]">
            {title}
          </h4>
          <div className="mt-1.5 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
            {children}
          </div>
          <div className="mt-3">
            <SeverityTag severity={severity} label={customLabel} />
          </div>
        </div>
      </div>
    </article>
  );
}

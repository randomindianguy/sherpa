export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
        {index}
      </span>
      <span className="h-px flex-1 bg-[color:var(--rule)]" />
      <span className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
        {children}
      </span>
    </div>
  );
}

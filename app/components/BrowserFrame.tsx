export function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={`card overflow-hidden ${className}`}
      style={{ background: "var(--paper)" }}
    >
      <header className="flex items-center gap-3 border-b border-[color:var(--rule-soft)] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
        </div>
        <div className="flex-1">
          <div className="mx-auto max-w-md rounded-md bg-[color:var(--paper-shade)] px-3 py-1 text-center text-xs text-[color:var(--ink-muted)] mono">
            {url}
          </div>
        </div>
        <div className="w-12" aria-hidden />
      </header>
      <div className="bg-[color:var(--paper)]">{children}</div>
    </figure>
  );
}

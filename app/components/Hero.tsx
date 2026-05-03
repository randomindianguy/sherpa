import { Container } from "./Container";

export function Hero() {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32">
      <Container>
        <div className="fade-in-up">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
            For careers@withsherpa.ai · YC P26
          </p>

          <h1 className="display mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-[color:var(--ink)] md:text-6xl">
            Sherpa&rsquo;s audit reads structure.
            <br />
            <span className="text-[color:var(--terracotta)]">
              The contextual layer
            </span>{" "}
            is still
            <br />
            founder time.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            I ran Sherpa on three sites &mdash; my portfolio, your homepage,
            and Pulsent (your P26 batchmate). Three reads, one pattern. The
            audit is right where it has line-of-sight on visual structure, and
            confidently wrong where it needs business context. The layer that
            catches the 30% has no system. It&rsquo;s just two of you.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            This is a pitch for the role that fills it &mdash; AI-augmented
            now, embedded in product later.
          </p>

          <div className="mt-10 flex items-center gap-3 mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
            <span>Sidharth Sundaram</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--rule)]" />
            <span>April 2026</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--rule)]" />
            <a href="#pulsent">Begin &darr;</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

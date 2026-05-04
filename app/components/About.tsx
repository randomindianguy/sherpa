import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

type DeployedWork = {
  label: string;
  url: string;
  note: string;
};

// Eleven deployed artifacts, curated for growth-at-AI-native-B2B relevance.
// Sherpa is the twelfth — this page. (Strava, Fresco, Kana, Socratix cut as off-thesis for this pitch.)
const works: DeployedWork[] = [
  { label: "Clay", url: "https://sid-clay.vercel.app", note: "Marketplace intelligence" },
  { label: "YouTube", url: "https://sid-yt.vercel.app", note: "The Missing Minute" },
  { label: "Warp", url: "https://sid-warp.vercel.app", note: "Compliance-calendar activation" },
  { label: "Kita", url: "https://kita-growth.vercel.app", note: "Growth engine" },
  { label: "Kastle", url: "https://kastle-growth.vercel.app", note: "Growth engine" },
  { label: "CamelAI", url: "https://camelai-activation.vercel.app", note: "Activation audit" },
  { label: "Gusto", url: "https://gusto-pulse.vercel.app", note: "Flywheel thesis" },
  { label: "Toast", url: "https://sid-toast.vercel.app", note: "Toast IQ scaling" },
  { label: "Ramp", url: "https://sid-ramp-pm.vercel.app", note: "Activation & expansion" },
  { label: "Cloudflare", url: "https://cloudflare-pm.sidharth-rama.workers.dev", note: "Developer onboarding" },
  { label: "Structured", url: "https://sid-structured.vercel.app", note: "GTM strategy" },
];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-[color:var(--rule-soft)] py-20 md:py-28"
    >
      <Container>
        <SectionLabel index="§ III">Why me</SectionLabel>

        {/* Capacity-gap pivot — frames the "why me" as a response to a real constraint, not a sales pitch */}
        <div className="border-l-2 border-[color:var(--terracotta)] pl-5 md:pl-6">
          <p className="display text-xl font-medium leading-snug text-[color:var(--ink)] md:text-2xl">
            Your product found three Must Fix issues on{" "}
            <a
              href="https://www.withsherpa.ai/audit/withsherpa.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[color:var(--terracotta)]"
              style={{ backgroundImage: "none" }}
            >
              withsherpa.ai
            </a>{" "}
            itself.
          </p>
          <p className="mt-3 text-base leading-relaxed text-[color:var(--ink-soft)]">
            That tells me you&rsquo;ve been prioritizing customer value over
            your own funnel &mdash; the right call at this stage. It also
            tells me the capacity gap is real.
          </p>
        </div>

        <h2 className="display mt-14 text-3xl font-medium leading-tight tracking-tight text-[color:var(--ink)] md:text-5xl">
          The methodology{" "}
          <span className="text-[color:var(--terracotta)]">is the role</span>.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[color:var(--ink-soft)]">
          <p>
            This is the twelfth time I&rsquo;ve done this work. Eleven
            companies in growth-shaped surfaces &mdash; activation, expansion,
            wedge-creation, AI-native B2B &mdash; every link below clickable
            and live. Each one starts the same way: diving into the
            company&rsquo;s actual product, finding the structural insight
            others have missed, and shipping a deployed artifact that
            demonstrates the work I&rsquo;d do for them.
          </p>
          <p>
            The teardown you just read isn&rsquo;t a sample of work for
            Sherpa. It&rsquo;s a sample of <em>the role</em>. Hire the role,
            you get fifty more like it &mdash; one every five days, each one a
            warm intro, each one a published trust artifact, each one
            surfacing a contextual-gap pattern Norbu can ship into the
            product.
          </p>
        </div>

        {/* Deployed-work grid — 15 receipts, uniform cards, volume IS the message */}
        <div className="mt-12">
          <div className="flex items-baseline justify-between">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--terracotta)]">
              Receipts &middot; {works.length} live, click any
            </p>
            <p className="mono text-[10px] tracking-[0.12em] text-[color:var(--ink-muted)]">
              Sherpa is no. {works.length + 1}
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {works.map((w) => (
              <a
                key={w.label}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-lift group flex flex-col gap-0.5 px-4 py-3 no-underline"
                style={{ backgroundImage: "none" }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="display text-base font-medium text-[color:var(--ink)]">
                    {w.label}
                  </span>
                  <span
                    className="mono text-[10px] text-[color:var(--ink-muted)] transition-colors group-hover:text-[color:var(--terracotta)]"
                    aria-hidden
                  >
                    ↗
                  </span>
                </div>
                <span className="text-[11px] leading-snug text-[color:var(--ink-muted)]">
                  {w.note}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bio strip */}
        <div className="mt-16 max-w-3xl border-t border-[color:var(--rule-soft)] pt-8">
          <h3 className="display text-xl font-medium text-[color:var(--ink)]">
            Sidharth Sundaram
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
            Engineering Management master&rsquo;s, Purdue. Four years of B2B
            product &mdash; learner activation, cohort progression, paywall
            conversion, A/B testing on mid-funnel flows. Built and shipped
            the kind of growth-engineering work this role asks for, against
            real users.
          </p>
        </div>

        {/* Send-off */}
        <div className="mt-16 max-w-3xl">
          <hr className="rule" />
          <p className="display mt-8 text-2xl font-medium leading-snug text-[color:var(--ink)] md:text-3xl">
                If the Pulsent teardown lands a meeting for you, that's teardown one. 
                The role is the next eleven.
          </p>
          <p className="mt-6 text-base text-[color:var(--ink-soft)]">
            <a href="mailto:sidharth.rama@gmail.com" className="mono">
              sidharth.rama@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}

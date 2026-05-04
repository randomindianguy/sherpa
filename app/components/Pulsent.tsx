import { Container } from "./Container";
import { Finding } from "./Finding";
import { ScoreCircle } from "./ScoreCircle";
import { SectionLabel } from "./SectionLabel";

type AuditCard = {
  site: string;
  score: number;
  letter: string;
  auditUrl: string;
  read: string;
  role: string;
};

const audits: AuditCard[] = [
  {
    site: "withsherpa.ai",
    score: 42,
    letter: "F",
    auditUrl: "https://www.withsherpa.ai/audit/withsherpa.ai",
    read: "Three real Must Fix issues caught — and three confident hallucinations alongside: a phantom Google logo, a fabricated +125% lift in a testimonial that actually highlights +30%, and the audit's read of its own subhead returned as gibberish.",
    role: "The capacity-gap exhibit.",
  },
  {
    site: "pulsent.ai",
    score: 76,
    letter: "C+",
    auditUrl: "https://www.withsherpa.ai/audit/pulsent.ai",
    read: "Nails the load-bearing finding (testimonials lack quantified results — Must Fix). Misreads the logo bar. Can't see the headline is a category-claim every PLG analytics tool could make. Never attempts pricing or integration-display judgments.",
    role: "Prospect Zero. The teardown below.",
  },
  {
    site: "sidharthsundaram.com",
    score: 74,
    letter: "C",
    auditUrl: "https://www.withsherpa.ai/audit/sidharthsundaram.com",
    read: "Findings accurate, no hallucinations detected. Simpler site, narrower audience, less room for contextual error.",
    role: "The control. Sub-thesis: hallucinations correlate with prospect sophistication.",
  },
];

export function Pulsent() {
  return (
    <section
      id="pulsent"
      className="border-t border-[color:var(--rule-soft)] bg-[color:var(--paper-shade)] py-20 md:py-28"
    >
      <Container>
        <SectionLabel index="§ I">The teardown</SectionLabel>

        <h2 className="display text-3xl font-medium leading-tight tracking-tight text-[color:var(--ink)] md:text-5xl">
          Three audits.
          <br />
          <span className="text-[color:var(--terracotta)]">
            One predictable shape.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
          I ran Sherpa on three sites &mdash; my portfolio (control), your
          homepage, and Pulsent (your P26 batchmate). Every audit lives on
          your own domain. Every claim below is verifiable in 30 seconds.
        </p>

        {/* Three-audit context strip */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {audits.map((a) => (
            <a
              key={a.site}
              href={a.auditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-lift block p-6 no-underline"
              style={{ backgroundImage: "none" }}
            >
              <div className="flex items-start justify-between gap-4">
                <ScoreCircle score={a.score} letter={a.letter} size={84} />
                <span
                  className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]"
                  aria-hidden
                >
                  audit&nbsp;↗
                </span>
              </div>
              <h3 className="mono mt-5 text-sm font-semibold tracking-tight text-[color:var(--ink)]">
                {a.site}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
                {a.read}
              </p>
              <p className="mt-4 text-[13px] italic text-[color:var(--ink-muted)]">
                {a.role}
              </p>
            </a>
          ))}
        </div>

        {/* Transition into the deep teardown */}
        <div className="mt-16 max-w-3xl border-t border-[color:var(--rule-soft)] pt-10">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
            The deep read &middot; pulsent.ai
          </p>
          <h3 className="display mt-4 text-2xl font-medium leading-tight text-[color:var(--ink)] md:text-4xl">
            What the audit caught, what it missed,
            <br />
            and what it never tried.
          </h3>
          <p className="mt-5 text-base leading-relaxed text-[color:var(--ink-soft)]">
            Pulsent is the deepest read because the audit produces the densest
            gap there &mdash; an in-ICP prospect with a sophisticated buyer.
            Same buyer as Sherpa (Head of Growth at a PLG SaaS company), same
            stack signals (PostHog, Mixpanel, Attio), adjacent funnel zone
            (post-signup vs. your pre-signup).
          </p>
        </div>

        {/* Layer 2 — the strategic finding the audit cannot generate */}
        <div className="mt-14">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
            Layer 2 &middot; The audit can&rsquo;t generate this
          </p>
          <h3 className="display mt-4 text-2xl font-medium leading-tight text-[color:var(--ink)] md:text-3xl">
            The headline <span className="highlight">promises ROI</span>. The
            page <span className="highlight">hides the proof</span>.
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[color:var(--ink-soft)]">
            The headline makes a numbers claim &mdash;{" "}
            <em>&ldquo;Turn free users into revenue, automatically.&rdquo;</em>{" "}
            The page then goes numbers-dark in social proof. Every testimonial
            is qualitative (&ldquo;found upsell opportunities,&rdquo;
            &ldquo;whisper in the ears of our users,&rdquo; &ldquo;conversion
            rates went up&rdquo;). Pulsent&rsquo;s buyer is a growth lead who
            evaluates everything by ROI; the headline opens that frame and the
            page abandons it. The audit catches &ldquo;testimonials lack
            metrics&rdquo; as a Must Fix tactic. It can&rsquo;t see that the
            same finding is also the structural priority across all 13
            findings &mdash; because closing the headline&rsquo;s numbers
            promise is the trust act for this specific buyer.
          </p>
        </div>

        {/* The contextual re-read using Sherpa's own taxonomy — the meta-move, deployed once */}
        <div className="mt-16">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
            The contextual re-read &middot; using your severity language
          </p>
          <h3 className="display mt-4 text-2xl font-medium leading-tight text-[color:var(--ink)] md:text-3xl">
            Six findings the audit didn&rsquo;t make &mdash; in your taxonomy.
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Finding
              index={1}
              severity="good"
              title="Audit nailed the load-bearing finding"
              customLabel="Doing Well · Audit"
            >
              &ldquo;Testimonials lack quantified results&rdquo; flagged as
              Must Fix. Correct &mdash; and it&rsquo;s the single highest-lift
              fix on the page. Closing the numbers promise is the structural
              priority.
            </Finding>

            <Finding
              index={2}
              severity="warn"
              title="Audit hallucinates the logo bar — twice, differently"
              customLabel="Should Fix · Audit"
            >
              The actual logos on Pulsent are{" "}
              <span className="mono">Pletor</span>,{" "}
              <span className="mono">Leadbay</span>,{" "}
              <span className="mono">Basalt</span>. The desktop audit reported{" "}
              <span className="mono">
                Learnair, Plexlr, Softimize, Lengo, Qvirea
              </span>
              . The mobile audit reported{" "}
              <span className="mono">Piet9r, Maaway, Bosah</span>. Eight made-up
              names across two surfaces, zero overlap with each other or the
              page. The agent isn&rsquo;t misreading once &mdash;
              it&rsquo;s generating fresh fakes per surface.
            </Finding>

            <Finding
              index={3}
              severity="warn"
              title="Audit's verdict on the headline flips between desktop and mobile"
              customLabel="Should Fix · Audit"
            >
              Same product. Same headline (&ldquo;Turn free users into
              revenue, automatically.&rdquo;) Desktop audit:{" "}
              <em>&ldquo;nails the value prop&rdquo;</em> &mdash; Doing Well.
              Mobile audit: <em>&ldquo;lacks specificity&rdquo;</em> &mdash;
              Should Fix. The agent&rsquo;s read is internally inconsistent
              because it has no underlying model of what this buyer actually
              needs to see. Two surfaces, two opposite verdicts on identical
              copy.
            </Finding>

            <Finding
              index={4}
              severity="warn"
              title="Audit can't see category-claim vs. differentiation"
              customLabel="Should Fix · Audit"
            >
              Even when the audit praises the headline (desktop), the praise
              is wrong-for-strategy: the same line could appear on Pendo,
              Userpilot, AppCues, HubSpot, or Mixpanel + Iterable. The audit
              reads structure right; it cannot make differentiation
              judgments.
            </Finding>

            <Finding
              index={5}
              severity="danger"
              title="Audit never attempted: pricing presence"
              customLabel="Must Fix · Audit"
            >
              No pricing on the page forces every visitor into the demo
              funnel, which routes through founder time. The audit checks
              what&rsquo;s on the page; it doesn&rsquo;t flag what
              isn&rsquo;t.
            </Finding>

            <Finding
              index={6}
              severity="danger"
              title="Audit never attempted: integrations as logos"
              customLabel="Must Fix · Audit"
            >
              Pulsent lists PostHog, Mixpanel, Amplitude, Snowflake, BigQuery,
              Attio, Intercom, Loops, Customer.io &mdash; all in body copy. For
              a technical buyer scanning &ldquo;is this in my stack,&rdquo;
              logo-grade display converts; prose doesn&rsquo;t. The audit
              reads what&rsquo;s rendered, not what should be.
            </Finding>
          </div>
        </div>

        {/* Pattern closer — distilled from the killed §III */}
        <div className="mt-20 max-w-3xl border-t border-[color:var(--rule-soft)] pt-10">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
            The pattern, distilled
          </p>
          <p className="display mt-5 text-2xl font-medium leading-snug text-[color:var(--ink)] md:text-3xl">
            Right ~70% on structure. Wrong ~30% on context &mdash; and in
            roughly half of those misses, confidently hallucinated.
          </p>
          <p className="mt-5 text-base leading-relaxed text-[color:var(--ink-soft)]">
            Hallucinations correlate with prospect sophistication: the
            portfolio control surfaced none, Pulsent surfaced two, your own
            site surfaced three. The more strategic the buyer, the more
            contextual layer the audit needs &mdash; and the heavier the
            founder load on every call today.
          </p>

          {/* Forward-able standalone — just-in-time placement when "could I send this" thought arrives */}
          <p className="mono mt-8 text-[12px] leading-relaxed text-[color:var(--ink-muted)]">
            Standalone version of this teardown, ready to forward to
            Pulsent &rarr;{" "}
            <a
              href="https://sid-sherpa-pulsent.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sid-sherpa-pulsent.vercel.app
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}

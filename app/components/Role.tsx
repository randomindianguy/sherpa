import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

type Node = {
  index: string;
  name: string;
  body: React.ReactNode;
  humanAt: string;
  progression: { stage: string; detail: string }[];
};

const nodes: Node[] = [
  {
    index: "Node 1",
    name: "Research",
    body: (
      <>
        Claude &mdash; the right prompts, run against the prospect&rsquo;s
        actual surfaces &mdash; pulls positioning, investor profile, stack
        signals, competitive set, and buyer psychology in 20 minutes. The
        skill isn&rsquo;t the research, it&rsquo;s prompt design. A median
        AI user asks <em>&ldquo;tell me about Pulsent.&rdquo;</em> A top-1%
        AI user asks{" "}
        <em>
          &ldquo;what does a Head of Growth at a PLG SaaS company evaluate
          when choosing a conversion tool, and where does Pulsent&rsquo;s
          page fail that evaluation?&rdquo;
        </em>{" "}
        Different question, different output, same model.
      </>
    ),
    humanAt: "Target selection. Which prospect, why now, why this batch.",
    progression: [
      { stage: "T1", detail: "~2 hrs · prompts being written" },
      { stage: "T6", detail: "~30 min · prompts documented and reused" },
      { stage: "T12", detail: "Documented prompt set; research drops into known shape" },
    ],
  },
  {
    index: "Node 2",
    name: "Contextual re-read",
    body: (
      <>
        Feed the audit + research context to Claude, ask it to flag which
        findings are contextually wrong given the buyer. My judgment is
        the filter &mdash; kill bad classifications, catch what the model
        also missed (the <em>numbers-promise / numbers-dark</em> insight
        in §I came from this node), sequence the experiments. Hallucination
        catching lives here too: I open the live page, compare against the
        audit&rsquo;s claims, flag the discrepancies by hand. Manual today
        &mdash; and that&rsquo;s the point. Each diff is a labeled example
        of exactly where the audit hallucinates. By teardown twelve there
        are twelve labeled examples; Norbu builds the gate from them.
      </>
    ),
    humanAt: "Filter on AI re-read. Manual diff on hallucination flags. The 30% of judgments the audit can't yet make — and the labeled data to teach it.",
    progression: [
      { stage: "T1", detail: "~4 hrs · manual re-classification + page-by-page diff" },
      { stage: "T6", detail: "~1 hr · model re-classifies, I filter; diff stays manual" },
      { stage: "T12", detail: "~30 min · concentrated on the 3–4 decisions still mine to make" },
    ],
  },
  {
    index: "Node 3",
    name: "Artifact production",
    body: (
      <>
        Claude Code. Each teardown ships as a deployed URL, not a PDF or a
        deck. The skill isn&rsquo;t writing JSX &mdash; it&rsquo;s knowing
        how to structure a narrative that earns a meeting, and using Claude
        Code to ship it at a speed no traditional intern matches. The
        artifact you&rsquo;re reading right now ran through this exact
        node.
      </>
    ),
    humanAt: "Narrative structure. Prospect-specific sequencing. Voice.",
    progression: [
      { stage: "T1", detail: "~4 hrs · template being designed" },
      { stage: "T6", detail: "~30 min · stable template, prospect-specific edits only" },
      { stage: "T12", detail: "~30 min · only the prospect-specific narrative is bespoke" },
    ],
  },
];

export function Role() {
  return (
    <section
      id="role"
      className="border-t border-[color:var(--rule-soft)] bg-[color:var(--paper-shade)] py-20 md:py-28"
    >
      <Container>
        <SectionLabel index="§ II">The role</SectionLabel>

        <h2 className="display text-3xl font-medium leading-tight tracking-tight text-[color:var(--ink)] md:text-5xl">
          The outbound channel
          <br />
          Sherpa doesn&rsquo;t have yet &mdash;
          <br />
          <span className="text-[color:var(--terracotta)]">AI-augmented</span>,
          training the audit
          <br />
          as a side effect.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
          Sherpa&rsquo;s auto-audit is the inbound machine &mdash; any
          prospect who types their URL gets a free 30-second diagnosis.
          That funnel works. What doesn&rsquo;t exist yet is{" "}
          <em>outbound</em>: a way to land in the inbox of a high-leverage
          prospect who&rsquo;s never asked. The role is
          building that channel, AI-augmented, with each teardown doubling
          as a labeled dataset of where Sherpa&rsquo;s audit needs to
          learn.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--ink-soft)]">
          Each teardown also doubles as a warm intro to a real prospect you
          would already want on the pipeline &mdash; Pulsent is your P26
          batchmate, not just a target. And the motion itself is{" "}
          <em>structurally counter-positioned</em>: Mutiny, Optimizely, and
          VWO can&rsquo;t run an audit-plus-strategic-layer outbound play
          because their products don&rsquo;t produce a prospect-specific
          30-second audit artifact in the first place.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--ink)]">
          Inbound forgives the hallucinations §I documents. Outbound is
          killed by them. That&rsquo;s why the role is outbound, and why
          it&rsquo;s an AI-augmented pipeline with a human at three
          judgment nodes &mdash; not a pure-agent script.
        </p>

        {/* Three outputs per teardown — pulled forward from the strategic prep so the multi-purpose claim is concrete, not abstract */}
        <div className="mt-14">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
            What each teardown produces
          </p>
          <h3 className="display mt-4 text-2xl font-medium leading-tight text-[color:var(--ink)] md:text-3xl">
            Three outputs.
            <br />
            One repeatable workflow.
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "01",
                title: "Pipeline",
                desc: "Each teardown is a warm intro to a real prospect you'd want on the pipeline anyway.",
              },
              {
                label: "02",
                title: "Training signal",
                desc: "Each teardown is a labeled dataset of where the audit hallucinates — the product spec for what Norbu builds next.",
              },
              {
                label: "03",
                title: "Market signal",
                desc: "Each teardown is a data point on whether Sherpa's value holds for this prospect type, this vertical, this buyer profile. Twelve teardowns is a segmentation map of where the confirmed market extends.",
              },
            ].map((d) => (
              <article
                key={d.label}
                className="card p-6"
                style={{ borderTop: "2px solid var(--terracotta)" }}
              >
                <p className="mono text-[11px] tracking-[0.18em] text-[color:var(--terracotta)]">
                  {d.label}
                </p>
                <h4 className="display mt-2 text-lg font-medium text-[color:var(--ink)]">
                  {d.title}
                </h4>
                <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
                  {d.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* The pipeline — three AI-augmented nodes, T1/T6/T12 progression embedded per node */}
        <div className="mt-16">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
            The pipeline
          </p>
          <h3 className="display mt-4 text-2xl font-medium leading-tight text-[color:var(--ink)] md:text-3xl">
            Three AI-augmented nodes.
            <br />
            Human judgment at each.
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[color:var(--ink-soft)]">
            One teardown runs through three nodes. AI does the throughput;
            human does the judgment. The mix shifts every cycle &mdash; by
            teardown six, the prompts are documented and the human
            concentrates on the decisions only judgment can make. The
            10-hour-to-2-hour compression isn&rsquo;t template refinement.
            It&rsquo;s progressive automation.
          </p>

          <ol className="mt-10 space-y-4">
            {nodes.map((n) => (
              <li
                key={n.index}
                className="card p-6 md:p-7"
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--terracotta)]">
                    {n.index}
                  </span>
                  <h4 className="display text-2xl font-medium text-[color:var(--ink)]">
                    {n.name}
                  </h4>
                </div>
                <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-soft)]">
                  {n.body}
                </p>

                <hr className="rule-soft my-6" />

                <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
                  <div>
                    <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                      Human at
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]">
                      {n.humanAt}
                    </p>
                  </div>
                  <div>
                    <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                      Progression
                    </p>
                    <dl className="mt-2 space-y-1">
                      {n.progression.map((p) => (
                        <div
                          key={p.stage}
                          className="grid grid-cols-[40px_1fr] items-baseline gap-2 text-sm"
                        >
                          <dt className="mono text-[11px] tracking-[0.12em] text-[color:var(--terracotta)]">
                            {p.stage}
                          </dt>
                          <dd className="leading-relaxed text-[color:var(--ink-soft)]">
                            {p.detail}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Quality gate — same kill-switch callout, kept */}
          <div
            className="mt-6 flex items-start gap-4 rounded-xl border-l-4 bg-[color:var(--paper)] p-5 shadow-[var(--shadow-card)]"
            style={{ borderLeftColor: "var(--warn-text)" }}
          >
            <span
              aria-hidden
              className="mono shrink-0 text-base"
              style={{ color: "var(--warn-text)" }}
            >
              ⇋
            </span>
            <p className="text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
              <span
                className="mono mr-2 text-[10px] uppercase tracking-[0.18em]"
                style={{ color: "var(--warn-text)" }}
              >
                Quality gate
              </span>
              This only compounds if the meetings are qualified.
              Demo-to-next-step conversion is the kill switch &mdash; drops
              there mean stop, not iterate.
            </p>
          </div>
        </div>

        {/* Metric stack — channel-comparison framing. Three metrics, all asking the same question. */}
        <div className="mt-16">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
            How you&rsquo;d know it&rsquo;s working
          </p>
          <h3 className="display mt-4 text-2xl font-medium leading-tight text-[color:var(--ink)] md:text-3xl">
            One question: does the teardown
            <br />
            outperform the raw audit
            <br />
            as an acquisition channel?
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--ink-soft)]">
            Three metrics, three dimensions of the same question. Each one
            compares the teardown channel against Sherpa&rsquo;s existing
            form-fill audit funnel. None measures my personal
            productivity &mdash; that&rsquo;s the wrong question.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="card p-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--terracotta)]">
                Metric 1 &middot; Channel conversion
              </p>
              <h4 className="display mt-3 text-lg font-medium leading-snug text-[color:var(--ink)]">
                Teardown funnel vs. form-fill audit funnel.
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
                Side-by-side at every stage: sent → reply → demo booked. If
                teardowns convert higher at every stage, the contextual
                layer is adding measurable value. If higher at reply but
                lower at demo-to-pilot, the Layer 2 read needs sharpening.
              </p>
            </article>

            <article className="card p-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--terracotta)]">
                Metric 2 &middot; Quality (kill switch)
              </p>
              <h4 className="display mt-3 text-lg font-medium leading-snug text-[color:var(--ink)]">
                Demo → next-step conversion from teardown-sourced meetings.
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
                The gate. Twelve teardowns producing six dead demos is
                worse than three teardowns producing two real ones. Drops
                here trigger the kill switch above.
              </p>
            </article>

            <article className="card p-6">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--terracotta)]">
                Metric 3 &middot; Founder-time test
              </p>
              <h4 className="display mt-3 text-lg font-medium leading-snug text-[color:var(--ink)]">
                Did the prospect arrive understanding Sherpa, or did you
                explain?
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
                Binary gut-check, one question to Ethan after each
                teardown-sourced demo. Not quantified, not instrumented
                &mdash; the founder&rsquo;s read is the data. The most
                direct test of the thesis: the teardown should do the
                trust-building before the call happens.
              </p>
            </article>
          </div>
        </div>

        {/* Exit signals — strategic now leans on training-signal framing */}
        <div className="mt-16">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
            Exit signals
          </p>
          <h3 className="display mt-4 text-2xl font-medium leading-tight text-[color:var(--ink)] md:text-3xl">
            The role&rsquo;s success condition is its own obsolescence.
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="card p-6 md:p-7">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--terracotta)]">
                Tangible
              </p>
              <h4 className="display mt-3 text-xl font-medium text-[color:var(--ink)]">
                Teardown-as-cold-open beats form-fill audit.
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
                Demo-booking rate from teardowns sent to prospects exceeds
                Sherpa&rsquo;s current rate from the form-fill audit funnel.
                Immediately measurable. No new instrumentation required.
              </p>
            </article>

            <article className="card p-6 md:p-7">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--terracotta)]">
                Strategic
              </p>
              <h4 className="display mt-3 text-xl font-medium text-[color:var(--ink)]">
                The role generates its own training signal.
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-soft)]">
                Each teardown is a labeled dataset of where Sherpa&rsquo;s
                audit needs to learn &mdash; logo verification, category-claim
                detection, missing-pricing flagging, buyer-persona matching.
                Norbu ships those features directly from teardown
                gap-patterns. The role generates Sherpa&rsquo;s product
                roadmap as a side effect of running outbound, then
                automates itself out of existence one feature at a time.
                That is the success condition.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

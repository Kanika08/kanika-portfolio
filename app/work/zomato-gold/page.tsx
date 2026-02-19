import { SectionHeader } from "@/components/section-header";

export default function ZomatoGold() {
  return (
    <article className="max-w-3xl py-10 md:py-12">
      <SectionHeader
        eyebrow="Case study · Zomato Gold"
        title="Designing a restaurant subscription at scale"
        description="Exploring the product, design, and system decisions behind launching Zomato Gold—from incentives and abuse prevention to communication clarity and long-term sustainability."
        as="h1"
      />

      <div className="mt-10 space-y-12 md:space-y-14 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        <section>
          <h2 className="mb-3 text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            The problem
          </h2>
          <p>
            [Rewrite the core business problem here.] What were restaurants and
            diners trying to achieve, and why was a subscription model the right
            lever compared to one-off discounts or loyalty programs?
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            My role
          </h2>
          <p>
            Product designer responsible for shaping the end-to-end experience:
            framing the problem with stakeholders, mapping constraints across
            restaurants, users, and operations, and designing flows that could
            scale across cities without adding operational drag.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Design challenges
          </h2>
          <p>
            Subscription complexity, restaurant constraints, abuse prevention,
            and communication clarity all showed up early. This section should
            unpack how you balanced value for heavy users with sustainable unit
            economics and a model restaurants would willingly opt into.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Outcome &amp; learnings
          </h2>
          <p>
            Outline the impact, the metrics that mattered, and what changed in
            the product strategy as a result. Highlight specific learnings about
            designing subscriptions in a two-sided marketplace and how they
            influenced later work.
          </p>
        </section>
      </div>
    </article>
  );
}

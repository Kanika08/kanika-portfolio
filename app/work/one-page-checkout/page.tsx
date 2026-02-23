export default function OnePageCheckoutCaseStudy() {
  return (
    <article className="max-w-3xl mx-auto pt-8 md:pt-10 pb-16 md:pb-24 space-y-12 md:space-y-14">
      {/* Hero */}
      <section className="space-y-6">
        <span className="text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          Prodigy &middot; Case study
        </span>

        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            One-page checkout experiment (V1 &rarr; V2)
          </h1>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            Designing and running a high-impact membership checkout experiment
            and turning a failed test into a growth playbook
          </p>
        </header>

        <dl className="grid grid-cols-1 gap-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 md:grid-cols-3">
          <div>
            <dt className="uppercase tracking-[0.18em]">Role</dt>
            <dd className="mt-1 text-neutral-900 dark:text-neutral-100">
              Senior Product Designer
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.18em]">Timeline</dt>
            <dd className="mt-1 text-neutral-900 dark:text-neutral-100">
              ~12 weeks (Oct &ndash; Dec 2025)
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.18em]">Area</dt>
            <dd className="mt-1 text-neutral-900 dark:text-neutral-100">
              Growth &middot; Membership &middot; Experimentation
            </dd>
          </div>
        </dl>
      </section>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Overview
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Leadership believed our multi-step membership checkout was causing
          friction and hurting conversion.
        </p>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          My initial recommendation was to streamline the flow while preserving
          plan clarity, separating selection from payment to maintain confidence.
          However, stakeholders chose to test a competitor-inspired single-page
          checkout.
        </p>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          We ran a fast experiment. The result: &ndash;14.9% conversion.
        </p>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Funnel data and session replays confirmed that collapsing steps
          removed reassurance and price control at a critical decision moment.
          These insights informed V2 and strengthened our experimentation
          strategy.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Problem
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Prodigy&apos;s checkout relied on a multi-step flow requiring parents
          to navigate multiple screens before completing purchase. Funnel data
          showed significant drop-offs at each step, particularly around buy now
          and payment step.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-900 dark:text-neutral-100 leading-relaxed max-w-2xl">
          <li>123,844 users landed</li>
          <li>Only ~9.4% progressed to add payment</li>
        </ul>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Too many steps can increase friction, but removing structure too
          aggressively can also reduce confidence.
        </p>
      </section>

      {/* Checkout flow video */}
      <section className="space-y-3">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="rounded-[24px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-2">
              <div className="rounded-[16px] overflow-hidden bg-black">
                <video
                  className="w-full h-auto block"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source
                    src="/videos/current-checkout-flow.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
              Current checkout flow &middot; 7 steps
            </p>
          </div>
        </div>
      </section>

      {/* Flowchart image */}
      <section className="space-y-3">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
              <img
                src="/images/checkout-flowchart.png"
                alt="Checkout flow diagram showing 7 steps"
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
              Checkout flow structure showing step-by-step progression
            </p>
          </div>
        </div>
      </section>

      {/* My Role & Approach */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          My Role &amp; Approach
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          The brief was intentionally open:
        </p>
        <blockquote className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 italic text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-2xl">
          &quot;Reduce checkout friction and improve conversion.&quot;
        </blockquote>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Instead of jumping into solutions, I focused on diagnosing friction.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>Analyzed funnel drop-offs</li>
          <li>Reviewed session replays</li>
          <li>Conducted secondary research on checkout patterns</li>
          <li>Developed multiple low-fidelity concepts</li>
        </ul>
        <p className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed max-w-2xl">
          The goal was to test which friction actually mattered.
        </p>
      </section>

      {/* Concept exploration */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Concept exploration
          </h2>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          I explored three directions to reduce checkout friction, each testing a different balance of speed and clarity.
          </p>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800">
          {/* Concept 1 */}
          <details
            className="group border-b border-neutral-200 dark:border-neutral-800"
          >
            <summary className="flex items-center justify-between cursor-pointer py-5 list-none [&::-webkit-details-marker]:hidden">
              <span className="flex flex-col gap-0.5">
                <span className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Concept 1
                </span>
                <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  Reduce decision making at checkout
                </span>
              </span>
              <svg
                className="w-4 h-4 flex-shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="pb-6 pt-1 space-y-4">
              <div className="space-y-3 max-w-2xl">
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    Approach:
                  </span>{" "}
                  Lock in plan and billing earlier, and present checkout as a
                  focused confirmation and payment step. Users can edit their
                  selection through a dedicated &ldquo;Change plan&rdquo; action
                  rather than inline options.
                </p>
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    Trade-off:
                  </span>{" "}
                  Faster checkout, but increased risk of users navigating back to
                  compare plans.
                </p>
              </div>
              <img
                src="/images/concept-1.png"
                alt="Concept 1 — Reduce decision making at checkout"
                className="w-full h-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
              />
            </div>
          </details>

          {/* Concept 2 */}
          <details className="group border-b border-neutral-200 dark:border-neutral-800">
            <summary className="flex items-center justify-between cursor-pointer py-5 list-none [&::-webkit-details-marker]:hidden">
              <span className="flex flex-col gap-0.5">
                <span className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Concept 2
                </span>
                <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  Consolidate review and payment into a single step
                </span>
              </span>
              <svg
                className="w-4 h-4 flex-shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="pb-6 pt-1 space-y-4">
              <div className="space-y-3 max-w-2xl">
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    Approach:
                  </span>{" "}
                  Remove the explicit review page and automatically calculate
                  taxes and total amount based on the user&apos;s location.
                  Present the final amount within the payment step to enable a
                  direct transition to confirmation.
                </p>
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    Trade-off:
                  </span>{" "}
                  Fewer steps and faster completion, but reduced opportunity for
                  reassurance before payment.
                </p>
              </div>
              <img
                src="/images/concept-2.png"
                alt="Concept 2 — Consolidate review and payment into a single step"
                className="w-full h-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
              />
            </div>
          </details>

          {/* Concept 3 */}
          <details className="group border-b border-neutral-200 dark:border-neutral-800">
            <summary className="flex items-center justify-between cursor-pointer py-5 list-none [&::-webkit-details-marker]:hidden">
              <span className="flex flex-col gap-0.5">
                <span className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Concept 3
                </span>
                <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  Balance speed with confidence
                </span>
              </span>
              <svg
                className="w-4 h-4 flex-shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="pb-6 pt-1 space-y-4">
              <div className="space-y-3 max-w-2xl">
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    Approach:
                  </span>{" "}
                  Lock in plan and billing earlier, while removing the separate
                  review step by calculating totals in real time. Keep plan,
                  pricing, and edit options visible within the payment step to
                  maintain clarity without introducing additional steps.
                </p>
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    Why this mattered:
                  </span>{" "}
                  This approach balanced speed with user confidence and directly
                  informed the V2 direction by reducing friction without removing
                  decision clarity.
                </p>
              </div>
              <img
                src="/images/concept-3.png"
                alt="Concept 3 — Balance speed with confidence"
                className="w-full h-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
              />
            </div>
          </details>
        </div>
      </section>

{/* Stakeholder alignment */}
<section className="space-y-6">
  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
    When stakeholder intuition diverged from exploration
  </h2>

  <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
    
    {/* Left — Text */}
    <div className="space-y-4 max-w-xl">
      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        During early design reviews, leadership pushed to test a single-page checkout, influenced by competitor experiences that appeared shorter at a glance.
      </p>

      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Given the low cost of experimentation and clear success metrics, I supported this direction as a fast validation, while flagging risks around value clarity and price control.
      </p>
    </div>

    {/* Right — Image */}
    <figure className="space-y-2">
      <img
        src="/images/competitor-singlepage-checkout.png"
        alt="Competitor single-page checkout pattern"
        className="w-full h-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
      />
      <figcaption className="text-xs text-neutral-500 dark:text-neutral-400">
        Competitor checkout pattern that influenced stakeholder hypothesis
      </figcaption>
    </figure>

  </div>
</section>

      {/* Hypothesis */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Hypothesis
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
        If checkout friction is the primary driver of drop-off, then consolidating
        the flow into a single-page checkout should reduce time-to-complete a transaction
        and increase conversion by minimising moments of reconsideration.
        </p>
      </section>

      {/* Experiment V1 */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Experiment V1
          </h2>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Testing a one-page checkout
          </p>
        </div>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          We tested a one-page checkout embedded directly on the membership
          landing page, allowing users to select a plan and complete payment
          without leaving the page.
        </p>

        {/* Key changes */}
        <div className="space-y-3">
          <h3 className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Key changes
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            <li>Payment collection embedded on the membership landing page</li>
            <li>Discount code entry available directly on the page</li>
            <li>Existing multi-step checkout flow fully bypassed</li>
          </ul>
        </div>

        {/* Design goal callout */}
        <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-5 py-4 max-w-2xl">
          <h3 className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400 mb-2">
            Design goal
          </h3>
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Eliminate context switching and validate whether checkout friction
            alone was the primary barrier to conversion.
          </p>
        </div>

        {/* Experiment definition grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Target users */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Target users
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <li>
                Parents purchasing a new membership for their child
              </li>
              <li>
                Users entering from the Math Game membership landing page
              </li>
              <li>Excludes existing members</li>
            </ul>
          </div>

          {/* Success metrics */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Success metrics
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-900 dark:text-neutral-100 mb-1.5">
                  Primary
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <li>Checkout conversion rate</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-900 dark:text-neutral-100 mb-1.5">
                  Secondary
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <li>Time to checkout</li>
                  <li>Click-through rate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Experiment V1 image */}
        <figure className="space-y-3">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <img
              src="/images/experiment-v1.png"
              alt="Experiment V1: One-page checkout embedded in membership landing page"
              className="w-full h-auto block"
            />
          </div>
          <figcaption className="text-xs text-neutral-500 dark:text-neutral-400">
            Experiment V1: One-page checkout embedded in membership landing page
          </figcaption>
        </figure>
      </section>

      {/* Results */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Results
        </h2>
        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-2xl">
          Conversion dropped by double digits.
        </div>
      </section>

      {/* Impact & Takeaway */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Impact &amp; Takeaway
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          The failed experiment clarified how to design checkout flows that
          build trust and confidence.
        </p>
      </section>
    </article>
  );
}

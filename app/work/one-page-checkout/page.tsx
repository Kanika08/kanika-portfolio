export default function OnePageCheckoutCaseStudy() {
  return (
    <article className="max-w-3xl mx-auto pt-8 md:pt-10 pb-16 md:pb-24 space-y-12 md:space-y-14">
      {/* Hero */}
      <section className="space-y-6">
        <span className="text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          Prodigy · Case study
        </span>

        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            One-page checkout experiment (V1 → V2)
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
              ~12 weeks (Oct – Dec 2025)
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.18em]">Area</dt>
            <dd className="mt-1 text-neutral-900 dark:text-neutral-100">
              Growth · Membership · Experimentation
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
          We ran a fast experiment. The result: –14.9% conversion.
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
              Current checkout flow · 7 steps
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
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Concept exploration
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          I explored three structural directions to understand how checkout
          friction and confidence interact.
        </p>

        <div className="border-t border-neutral-200 dark:border-neutral-800">
          {/* Concept 1 */}
          <details
            className="group border-b border-neutral-200 dark:border-neutral-800"
            open
          >
            <summary className="flex items-center justify-between cursor-pointer py-5 list-none [&::-webkit-details-marker]:hidden">
              <span className="flex flex-col gap-0.5">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Concept 1
                </span>
                <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  Reduce decision load at checkout
                </span>
              </span>
              <svg
                className="w-4 h-4 flex-shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="pb-6 pt-2 space-y-4">
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
                Locks plan and billing earlier to simplify the final decision
                moment.
              </p>
              <img
                src="/images/concept-1.png"
                alt="Checkout concept 1 — reduced decision load"
                className="w-full h-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
              />
            </div>
          </details>

          {/* Concept 2 */}
          <details className="group border-b border-neutral-200 dark:border-neutral-800">
            <summary className="flex items-center justify-between cursor-pointer py-5 list-none [&::-webkit-details-marker]:hidden">
              <span className="flex flex-col gap-0.5">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Concept 2
                </span>
                <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  Remove review step to accelerate completion
                </span>
              </span>
              <svg
                className="w-4 h-4 flex-shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="pb-6 pt-2 space-y-3">
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
                Assumes users already understand their purchase and the review
                step adds unnecessary friction.
              </p>
              <ul className="list-disc pl-5 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl space-y-1">
                <li>Remove explicit review page</li>
                <li>Calculate totals automatically</li>
                <li>Move directly from payment to confirmation</li>
              </ul>
            </div>
          </details>

          {/* Concept 3 */}
          <details className="group border-b border-neutral-200 dark:border-neutral-800">
            <summary className="flex items-center justify-between cursor-pointer py-5 list-none [&::-webkit-details-marker]:hidden">
              <span className="flex flex-col gap-0.5">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Concept 3
                </span>
                <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  Balance speed with reassurance signals
                </span>
              </span>
              <svg
                className="w-4 h-4 flex-shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="pb-6 pt-2 space-y-3">
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
                Combines speed improvements with confidence-building structure.
              </p>
              <ul className="list-disc pl-5 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl space-y-1">
                <li>Lock selections earlier</li>
                <li>Keep pricing context visible</li>
                <li>Preserve reassurance before payment</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* Hypothesis */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Hypothesis
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>Higher checkout completion</li>
          <li>Reduced confusion</li>
          <li>Stronger experimentation foundation</li>
        </ul>
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

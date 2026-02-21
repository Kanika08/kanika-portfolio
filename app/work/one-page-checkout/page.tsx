export default function OnePageCheckoutCaseStudy() {
  return (
    <article className="max-w-3xl mx-auto pt-8 md:pt-10 pb-16 md:pb-24 space-y-12 md:space-y-14">

      {/* Hero */}
      <section className="space-y-6">
        <div className="text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          Prodigy · Case study
        </div>

        <header className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            One-page checkout experiment (V1 → V2)
          </h1>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            Designing and running a high-impact membership checkout experiment and turning a failed test into a growth playbook
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
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Overview
        </h2>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Leadership believed our multi-step membership checkout was causing friction and hurting conversion.
        </p>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          My initial recommendation was to streamline the flow while preserving plan clarity, separating selection from payment to maintain confidence. However, stakeholders chose to test a competitor-inspired single-page checkout.
        </p>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          We ran a fast experiment. The result: –14.9% conversion.
        </p>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Funnel data and session replays confirmed that collapsing steps removed reassurance and price control at a critical decision moment. These insights informed V2 and strengthened our experimentation strategy.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-4">

        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Problem
        </h2>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Prodigy’s checkout relied on a multi-step flow requiring parents to navigate multiple screens before completing purchase.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          <li>123,844 users landed</li>
          <li>Only ~9.4% progressed to add payment</li>
        </ul>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Too many steps can increase friction — but removing structure too aggressively can also reduce confidence.
        </p>

        {/* Video */}
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-4xl">

            <div className="rounded-2xl bg-neutral-900 p-3 shadow-2xl border border-neutral-800">

              <div className="flex justify-center mb-2">
                <div className="w-16 h-1.5 bg-neutral-700 rounded-full"></div>
              </div>

              <div className="rounded-lg overflow-hidden bg-black">
                <video
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src="/videos/current-checkout-flow.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="h-3 bg-neutral-800 rounded-b-xl mt-2"></div>

            </div>

            <div className="mt-3 flex justify-center">
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-md">
                Current checkout flow · 7 steps
              </span>
            </div>

          </div>
        </div>

      </section>

      {/* My Role & Approach */}
      <section className="space-y-4">

        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          My Role & Approach
        </h2>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          The brief was intentionally open:
        </p>

        <blockquote className="border-l-2 pl-4 italic text-neutral-700 dark:text-neutral-300 max-w-2xl">
          “Reduce checkout friction and improve conversion.”
        </blockquote>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Instead of jumping into UI, I focused on diagnosing friction.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-400 max-w-2xl">
          <li>Analyzed funnel drop-offs</li>
          <li>Reviewed session replays</li>
          <li>Conducted secondary research on checkout patterns</li>
          <li>Developed multiple low-fidelity concepts</li>
        </ul>

        <p className="font-medium max-w-2xl">
          The goal was to test which friction actually mattered.
        </p>

      </section>

      {/* Hypothesis */}
      <section className="space-y-4">

        <h2 className="text-xl md:text-2xl font-semibold">
          Hypothesis
        </h2>

        <ul className="list-disc pl-5 space-y-2 max-w-2xl">
          <li>Higher checkout completion</li>
          <li>Reduced confusion</li>
          <li>Stronger experimentation foundation</li>
        </ul>

      </section>

      {/* Results */}
      <section className="space-y-4">

        <h2 className="text-xl md:text-2xl font-semibold">
          Results
        </h2>

        <div className="bg-neutral-50 dark:bg-neutral-900 border rounded-lg p-4 max-w-2xl">
          Conversion dropped by double digits.
        </div>

      </section>

      {/* Impact */}
      <section className="space-y-4">

        <h2 className="text-xl md:text-2xl font-semibold">
          Impact & Takeaway
        </h2>

        <p className="max-w-2xl">
          The failed experiment clarified how to design checkout flows that build trust and confidence.
        </p>

      </section>

    </article>
  );
}
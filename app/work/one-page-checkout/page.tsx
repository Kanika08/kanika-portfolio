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
            Designing and running a high‑impact membership checkout experiment
            and turning a failed test into a growth playbook
          </p>
        </header>

        {/* Metadata row */}
        <dl className="grid grid-cols-1 gap-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-400 md:grid-cols-3">
          <div>
            <dt className="uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-500">
              Role
            </dt>
            <dd className="mt-1 text-neutral-900 dark:text-neutral-100">
              Senior Product Designer
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-500">
              Timeline
            </dt>
            <dd className="mt-1 text-neutral-900 dark:text-neutral-100">
              ~12 weeks (Oct - Dec 2025)
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-500">
              Area
            </dt>
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
          Funnel data and session replays confirmed the issue — collapsing steps
          removed reassurance and price control at a critical decision moment.
          Those insights informed V2, aligned with my original direction, and
          strengthened our experimentation approach moving forward.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Problem
        </h2>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Prodigy's checkout relied on a multi-step flow that required parents
          to navigate several pages before completing a membership purchase.
          Funnel data showed significant drop-offs at each step, particularly
          around plan selection and payment. From the membership page traffic:
        </p>

        {/* Key stats */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
          <div className="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              123,844
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              users landed on membership page
            </p>
          </div>
          <div className="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              ~9.4%
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              progressed to add payment
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          The team's intuition: too many steps = too much friction. But friction
          at checkout isn't always bad — sometimes it builds confidence.
        </p>

        {/* MacBook video frame */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Lid / display assembly */}
            <div className="relative rounded-t-[14px] md:rounded-t-[18px] bg-[#171717] dark:bg-[#0c0c0c] pt-3 md:pt-4 px-[6px] md:px-2 pb-[6px] md:pb-2 shadow-[0_-2px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_-2px_60px_rgba(0,0,0,0.45)]">
              {/* Camera */}
              <div className="absolute top-[5px] md:top-[7px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] md:w-2 md:h-2 rounded-full bg-[#0c0c0c] dark:bg-[#080808] ring-[0.5px] ring-[#333] dark:ring-[#222]">
                <div className="absolute top-[1px] left-[1px] md:top-[2px] md:left-[2px] w-[2px] h-[2px] md:w-1 md:h-1 rounded-full bg-[#1e293b]/40" />
              </div>

              {/* Screen */}
              <div className="rounded-[4px] md:rounded-md overflow-hidden ring-1 ring-black/30 dark:ring-white/[0.06] bg-black">
                <video
                  className="w-full h-auto block"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="/videos/current-checkout-flow.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            {/* Hinge */}
            <div className="relative mx-auto h-[3px] md:h-1 rounded-b-sm bg-[#2a2a2a] dark:bg-[#161616]" style={{ width: "92%" }} />

            {/* Bottom deck / base */}
            <div className="mx-auto h-[6px] md:h-2 rounded-b-lg bg-gradient-to-b from-[#303030] to-[#282828] dark:from-[#1a1a1a] dark:to-[#141414]" style={{ width: "100%" }}>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[16%] h-[2px] md:h-[3px] rounded-t-sm bg-[#3a3a3a] dark:bg-[#222]" />
            </div>
          </div>
        </div>

        {/* Video caption */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
          Current checkout flow
        </p>

        {/* Flowchart */}
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 p-4 md:p-6 flex flex-col items-center">
          <img
            src="/images/current-checkout-flowchart.png"
            alt="Flowchart showing the 7 sequential steps in the original checkout: landing, plan select, account link, review, payment entry, confirmation, and post-purchase"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Step count label */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            7 steps to complete purchase
          </span>
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
          "Reduce checkout friction and improve conversion."
        </blockquote>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Instead of jumping into UI, I focused on understanding where friction
          was occurring and what was driving it.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>Analyzed funnel drop-offs</li>
          <li>Reviewed session replays</li>
          <li>
            Conducted secondary research on:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Checkout layouts</li>
              <li>Billing term toggles</li>
              <li>Social proof placement</li>
              <li>Plan comparison patterns</li>
            </ul>
          </li>
          <li>
            Developed multiple low-fidelity concepts based on different
            assumptions
          </li>
        </ul>

        <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100 leading-relaxed max-w-2xl font-medium">
          The goal was to test which friction actually mattered — not just remove
          steps blindly.
        </p>
      </section>

      {/* Hypothesis */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Hypothesis
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          If we compress the checkout into a single, well‑structured page that
          clearly communicates plan options, discounts, and renewal details,
          then:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>More parents will complete checkout in one session.</li>
          <li>Confusion‑driven support contacts will decrease.</li>
          <li>
            We'll create a clearer foundation for future pricing and offer
            experiments.
          </li>
        </ul>

        <div className="border-l-2 border-neutral-900 dark:border-neutral-100 pl-4 italic text-neutral-700 dark:text-neutral-300">
          The goal wasn't just a "shorter" flow—it was to reduce cognitive load
          while preserving the signals parents needed to feel confident paying.
        </div>
      </section>

      {/* Experiment design */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Experiment design
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          We framed this as a true experiment, not a redesign launch. Working
          with product, data, and engineering, we defined:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>
            <span className="font-medium">Primary metric:</span> paid
            conversion from pricing view to successful payment.
          </li>
          <li>
            <span className="font-medium">Guardrails:</span> refund rate,
            chargebacks, and support tickets tagged to &quot;billing /
            confusion.&quot;
          </li>
          <li>
            <span className="font-medium">Sample &amp; runtime:</span> Parents
            entering checkout from core web flows over ~3–4 weeks.
          </li>
        </ul>

        <div className="my-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 aspect-[16/10] flex items-center justify-center text-sm text-neutral-400">
          V1 vs V2 experiment design – design concept placeholder
        </div>
      </section>

      {/* Execution */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Execution
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          To keep scope tight, we constrained the first iteration to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>
            A single page combining plan selection, billing details, and order
            summary.
          </li>
          <li>
            Clear, inline explanations for renewals and discounts instead of
            secondary modals.
          </li>
          <li>
            A progressive disclosure pattern for less‑critical information
            (e.g., FAQ, guarantee).
          </li>
        </ul>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          We paired closely with engineering to define a layout system that
          respected existing pricing logic and feature flags. This made the
          experiment easier to ship and, importantly, easier to roll back.
        </p>

        <div className="my-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 aspect-[16/10] flex items-center justify-center text-sm text-neutral-400">
          One‑page checkout V2 layout – design concept placeholder
        </div>
      </section>

      {/* Results */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Results
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          The experiment ran to full significance and the outcome was clear: the
          one‑page variant underperformed.
        </p>

        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-2xl">
          Conversion dropped by double digits relative to control, despite fewer
          steps and clearer content.
        </div>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Support and refund‑related guardrails remained stable, but the primary
          conversion hit meant we rolled the variant back.
        </p>
      </section>

      {/* Why it failed */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Why it failed
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Post‑experiment analysis surfaced three likely contributors:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>
            <span className="font-medium">Perceived commitment:</span> Seeing
            the full billing form and plan details at once may have made the
            decision feel heavier than the stepwise flow.
          </li>
          <li>
            <span className="font-medium">Loss of micro‑affirmations:</span>{" "}
            The previous flow created small moments of progress (&quot;I picked
            a plan&quot;, &quot;I&apos;m almost done&quot;) that the single page
            compressed away.
          </li>
          <li>
            <span className="font-medium">Attention dilution:</span> Even with
            clean hierarchy, more simultaneous information competed for focus.
          </li>
        </ul>

        <div className="border-l-2 border-neutral-900 dark:border-neutral-100 pl-4 italic text-neutral-700 dark:text-neutral-300">
          Simplicity in structure does not always translate into lower perceived
          effort—especially at high‑stakes decision points like payment.
        </div>
      </section>

      {/* Design insight */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Design insight
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          The most valuable outcome was not the new UI—it was a sharper model of
          how parents move through financial decisions in Prodigy:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>
            Parents benefit from pacing: confirming intent before seeing the
            full payment form.
          </li>
          <li>
            Trust is built by layering information, not front‑loading every
            detail at once.
          </li>
          <li>
            &quot;Shorter&quot; flows can still feel heavy if all the complexity
            is visible at a glance.
          </li>
        </ul>

        <div className="border-l-2 border-neutral-900 dark:border-neutral-100 pl-4 italic text-neutral-700 dark:text-neutral-300">
          We shifted from &quot;make checkout one page&quot; to &quot;design a
          sequence that respects how parents decide to subscribe.&quot;
        </div>
      </section>

      {/* Impact and takeaway */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Impact and takeaway
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Even though the variant lost, the experiment elevated how we approached
          growth work:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>
            We established a clearer experimentation ritual: hypothesis,
            guardrails, and agreed‑upon decision rules before design work began.
          </li>
          <li>
            The insights directly informed a subsequent &quot;1.5‑step&quot;
            checkout that kept pacing while tightening copy and reducing
            unnecessary fields.
          </li>
          <li>
            The team gained a shared language for evaluating
            &quot;simplicity&quot; beyond just step count.
          </li>
        </ul>

        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-2xl">
          A failed experiment clarified how to design for trust at checkout—and
          became a reference point for future growth work.
        </div>
      </section>
    </article>
  );
}

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
            Designing and running a high‑impact membership checkout experiment and turning a failed test into a growth playbook
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
        Leadership believed our multi-step membership checkout was causing friction and hurting conversion.
        </p>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
My initial recommendation was to streamline the flow while preserving plan clarity,
separating selection from payment to maintain confidence. However, stakeholders chose
to test a competitor-inspired single-page checkout. </p>
<p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
We ran a fast experiment. The result: –14.9% conversion.
</p>
        
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
        Funnel data and session replays confirmed the issue that collapsing steps removed reassurance
and price control at a critical decision moment. Those insights informed V2, aligned with my original direction,
and strengthened our experimentation approach moving forward.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Problem
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
        Prodigy’s checkout relied on a multi-step flow that required parents to navigate several pages before completing a membership purchase.
        Funnel data showed significant drop-offs at each step, particularly around plan selection and payment. From the membership page traffic:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>123,844 users landed</li>
          <li>
          Only ~9.4% progressed to add payment
          </li>
        </ul>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
        The team’s intuition:

Too many steps = too much friction.

But friction at checkout isn’t always bad, sometimes it builds confidence.
        </p>

        <div className="my-12 flex justify-center">
  <div className="relative w-full max-w-4xl">

    {/* MacBook frame */}
    <div className="rounded-2xl bg-neutral-900 p-3 shadow-2xl border border-neutral-800">
      
      {/* Camera notch */}
      <div className="flex justify-center mb-2">
        <div className="w-16 h-1.5 bg-neutral-700 rounded-full"></div>
      </div>

      {/* Screen */}
      <div className="rounded-lg overflow-hidden bg-black">
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/current-checkout-flow.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Bottom base */}
      <div className="h-3 bg-neutral-800 rounded-b-xl mt-2"></div>

    </div>

  </div>
</div>
      </section>

      {/* My Role & Approach */}
<section className="space-y-4">
  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
    My Role & Approach
  </h2>

  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
    The brief was intentionally open:
  </p>

  <blockquote className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 italic text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-2xl">
    “Reduce checkout friction and improve conversion.”
  </blockquote>

  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
    Instead of jumping into UI, I focused on understanding where friction was occurring and what was driving it.
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
    <li>Developed multiple low-fidelity concepts based on different assumptions</li>
  </ul>

  <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100 leading-relaxed max-w-2xl font-medium">
    The goal was to test which friction actually mattered — not just remove steps blindly.
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
            We’ll create a clearer foundation for future pricing and offer
            experiments.
          </li>
        </ul>

        <div className="border-l-2 border-neutral-900 dark:border-neutral-100 pl-4 italic text-neutral-700 dark:text-neutral-300">
          The goal wasn’t just a “shorter” flow—it was to reduce cognitive load
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
            chargebacks, and support tickets tagged to “billing / confusion.”
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
          The experiment ran to full significance and the outcome was clear:
          the one‑page variant underperformed.
        </p>

        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-2xl">
          Conversion dropped by double digits relative to control, despite
          fewer steps and clearer content.
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
            The previous flow created small moments of progress (“I picked a
            plan”, “I’m almost done”) that the single page compressed away.
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
          The most valuable outcome was not the new UI—it was a sharper model
          of how parents move through financial decisions in Prodigy:
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
            “Shorter” flows can still feel heavy if all the complexity is
            visible at a glance.
          </li>
        </ul>

        <div className="border-l-2 border-neutral-900 dark:border-neutral-100 pl-4 italic text-neutral-700 dark:text-neutral-300">
          We shifted from “make checkout one page” to “design a sequence that
          respects how parents decide to subscribe.”
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
            The insights directly informed a subsequent “1.5‑step” checkout that
            kept pacing while tightening copy and reducing unnecessary fields.
          </li>
          <li>
            The team gained a shared language for evaluating “simplicity” beyond
            just step count.
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


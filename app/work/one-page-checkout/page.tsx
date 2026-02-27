"use client";
import { useState } from "react";
import Link from "next/link";

export default function OnePageCheckoutCaseStudy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="max-w-3xl mx-auto pb-20 space-y-10">


      {/* Breadcrumb */}
      <div>
        <Link
          href="/work"
          className="text-sm text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition"
        >
          ← Work
        </Link>
      </div>

      {/* Hero */}
      <section className="space-y-6">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
          One-page checkout experiment (V1 → V2)
        </h1>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
        Ran a high-impact membership checkout experiment, turning a failed test into a scalable growth playbook.
        </p>

        {/* Meta Grid */}
        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 text-sm">

          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Company
            </dt>
            <dd className="mt-2 text-neutral-900 dark:text-neutral-100">
              Prodigy
            </dd>
          </div>

          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Role
            </dt>
            <dd className="mt-2 text-neutral-900 dark:text-neutral-100">
              Senior Product Designer
            </dd>
          </div>

          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Timeline
            </dt>
            <dd className="mt-2 text-neutral-900 dark:text-neutral-100 whitespace-nowrap">
              ~12 weeks (Oct – Dec 2025)
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
      <div
        className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="/images/checkout-flowchart.png"
          alt="Checkout flow diagram showing 7 steps"
          className="w-full h-auto block transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
      <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
        Checkout flow structure showing step-by-step progression
      </p>
    </div>
  </div>

  {/* Modal */}
  {isOpen && (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 cursor-zoom-out"
      onClick={() => setIsOpen(false)}
    >
      <img
        src="/images/checkout-flowchart.png"
        alt="Expanded checkout flow diagram"
        className="max-w-[95%] max-h-[90%] rounded-lg shadow-2xl"
      />
    </div>
  )}
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

  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

    {/* Left — Text */}
    <div className="flex-1 space-y-4 max-w-xl">
      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        During early design reviews, leadership pushed to test a single-page checkout,
        influenced by competitor experiences that appeared shorter at a glance.
      </p>

      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Given the low cost of experimentation and clear success metrics, I supported
        this direction as a fast validation, while flagging risks around value clarity
        and price control.
      </p>
    </div>

    {/* Right — Image with subtle shadow (no box, no caption) */}
    <div className="flex-shrink-0">
      <img
        src="/images/competitor-single-page-checkout.png"
        alt="Competitor checkout pattern"
        className="
          block
          w-[420px]
          h-auto
          drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]
          dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
        "
      />
    </div>

  </div>
</section>

      {/* Hypothesis */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Hypothesis V1
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          If checkout friction is the primary driver of drop-off, then consolidating
          the flow into a single-page checkout should reduce time-to-complete a transaction
          and increase conversion by minimising moments of reconsideration.
        </p>
      </section>

      {/* Experiment V1 */}
      <section className="space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Experiment V1
          </h2>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Testing a one-page checkout
          </p>
        </div>

        {/* Intro */}
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

        {/* Design goal */}
        <div className="rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/30 px-5 py-5 max-w-2xl space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">
            Design goal
          </p>
          <p className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
            Eliminate context switching and validate whether checkout friction alone
            was the primary barrier to conversion.
          </p>
        </div>

        {/* Experiment setup grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          {/* Target users */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-5 py-5 space-y-3">
            <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Target users
            </div>
            <ul className="space-y-1 text-sm md:text-base text-neutral-700 dark:text-neutral-300 list-disc pl-4">
              <li>Parents purchasing a new membership for their child</li>
              <li>Users entering from the Math Game membership landing page</li>
              <li>Excludes existing members</li>
            </ul>
          </div>

          {/* Success metrics */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-5 py-5 space-y-4">
            <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Success metrics
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
                  Primary
                </div>
                <div className="text-sm md:text-base text-neutral-800 dark:text-neutral-200">
                  Checkout conversion rate
                </div>
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
                  Secondary
                </div>
                <ul className="space-y-1 text-sm md:text-base text-neutral-700 dark:text-neutral-300 list-disc pl-4">
                  <li>Time to checkout</li>
                  <li>Click-through rate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Prototype video */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
             Prototype 
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            A high-fidelity prototype demonstrating embedded one-page checkout on
            the membership landing page, including simulated real-time tax
            calculation and purchase confirmation state.
          </p>
          <div className="mx-auto max-w-5xl flex flex-col items-center">
            <div className="w-full rounded-t-2xl bg-[#1a1a1a] p-2 pb-4 shadow-2xl shadow-black/20">
              <div className="mx-auto mb-2 h-1 w-12 rounded-full bg-[#2a2a2a]" />
              <div className="overflow-hidden rounded-lg bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block"
                >
                  <source src="/videos/checkout-prototype.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="h-2 w-[108%] rounded-b-xl bg-gradient-to-b from-[#d1d1d1] to-[#bdbdbd] shadow-md" />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Results
          </h3>
          <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 space-y-3 max-w-2xl">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              Experiment outcome
            </div>
            <div className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              &ndash;14.9% conversion
            </div>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Conversion declined significantly. Consistent drops at full (&ndash;27%) and partial (&ndash;14.9%) exposure confirmed the experience itself reduced conversion&mdash;not the rollout.
            </p>
          </div>
        </div>
      </section>

      {/* Impact and design direction */}
      <section className="space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Impact &amp; Takeaway
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          At this point, I used evidence and not opinion to resolve
          disagreement and drive a clear decision on next steps.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          <li>Used funnel data and session replays to explain why conversion dropped</li>
          <li>Shifted discussion from &ldquo;shorter checkout&rdquo; to purchase confidence</li>
          <li>Built alignment across design, product and leadership on next steps</li>
        </ul>

        {/* Design principles */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Design principles
          </p>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4 max-w-3xl">
            <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/30 px-4 py-4">
              <div className="text-xs font-medium text-blue-700 dark:text-blue-400 mb-1">
                Confidence
              </div>
              <div className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100">
                Checkout steps build confidence, not just progression
              </div>
            </div>
            <div className="rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50/60 dark:bg-emerald-950/30 px-4 py-4">
              <div className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-1">
                Clarity
              </div>
              <div className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100">
                Friction reduction must preserve price transparency and control
              </div>
            </div>
            <div className="rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50/60 dark:bg-amber-950/30 px-4 py-4">
              <div className="text-xs font-medium text-amber-700 dark:text-amber-400 mb-1">
                Balance
              </div>
              <div className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100">
                Speed matters, but clarity matters more
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hypothesis V2 */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Hypothesis V2
        </h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          If checkout steps are reduced while preserving pricing clarity and
          reinforcing plan value at the point of payment, then users will be
          more likely to complete their purchase, resulting in higher
          conversion.
        </p>
      </section>

     {/* Experiment V2 */}
<section className="space-y-6">

{/* Header */}
<div className="space-y-3">
  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
    Experiment V2
  </h2>
  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
    V1 reduced friction but removed decision clarity. Instead of abandoning the approach, 
    we iterated to reduce steps without sacrificing confidence at purchase.
  </p>
</div>

{/* Key changes */}
<div className="space-y-3">
  <h3 className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
    Key changes
  </h3>
  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
    <li>Reduced checkout steps while keeping tier selection and value visible</li>
    <li>Reinforced plan benefits and pricing context during payment</li>
    <li>Removed redundant confirmation without removing clarity</li>
    <li>Maintained visible value summary throughout checkout</li>
    <li>Auto-attached student for game-driven purchases</li>
    <li>Streamlined post-purchase confirmation</li>
  </ul>
</div>

{/* Prototype */}
<div className="space-y-4 pt-6">
  <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
    Prototype
  </h3>
  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
    A high-fidelity prototype demonstrating a streamlined checkout that reduces steps while
    preserving decision clarity — reinforcing tier benefits, pricing context, and value
    at the moment of payment.
  </p>

  <div className="mx-auto max-w-5xl flex flex-col items-center">
    <div className="w-full rounded-t-2xl bg-[#1a1a1a] p-2 pb-4 shadow-2xl shadow-black/20">
      <div className="mx-auto mb-2 h-1 w-12 rounded-full bg-[#2a2a2a]" />
      <div className="overflow-hidden rounded-lg bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block"
        >
          <source
            src="/videos/checkout-prototype-2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <div className="h-2 w-[108%] rounded-b-xl bg-gradient-to-b from-[#d1d1d1] to-[#bdbdbd] shadow-md" />
  </div>
</div>

</section>

      {/* Component Deep Dive */}
<section className="space-y-8">
  {/* Header */}
  <div className="space-y-3 max-w-2xl">
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
      Component Deep Dive: The Membership Card
    </h2>
    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
      The membership card evolved from a feature-heavy explanation to a structured
      decision surface — reducing cognitive load while reinforcing pricing clarity
      and plan value at checkout.
    </p>
  </div>

  {/* Evolution Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* V1 */}
    <div className="space-y-4">
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
        <img
          src="/images/ideation-membership-card.png"
          alt="Initial membership card design with dense content and heavy text"
          className="w-full h-auto block"
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          V1
        </p>
        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          Feature-heavy & cognitively dense
        </p>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1 list-disc pl-4">
          <li>Paragraph-driven value explanation</li>
          <li>Benefits buried within long-form content</li>
          <li>Icon relied on brand recognition</li>
        </ul>
      </div>
    </div>

    {/* Iteration */}
    <div className="space-y-4">
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
        <img
          src="/images/iteration-membership-card.png"
          alt="Iterated membership card with clearer hierarchy and scannable value"
          className="w-full h-auto block"
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          Iteration
        </p>
        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          Value made scannable
        </p>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1 list-disc pl-4">
          <li>Games surfaced visually at the top</li>
          <li>Bite-sized benefit structure</li>
          <li>Reduced reliance on explanatory text</li>
        </ul>
      </div>
    </div>

    {/* Final */}
    <div className="space-y-4">
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
        <img
          src="/images/final-membership-card.png"
          alt="Final membership card with pricing clarity and structured hierarchy"
          className="w-full h-auto block"
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          Final
        </p>
        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          Designed for confidence & control
        </p>
        <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1 list-disc pl-4">
          <li>Plan identity locked at the top</li>
          <li>Clear monthly vs annual comparison</li>
          <li>Strengthened pricing hierarchy</li>
          <li>User control preserved with “Change plan”</li>
        </ul>
      </div>
    </div>

  </div>
</section>
   {/* Results & Growth Reflection */}
<section className="space-y-10">

{/* Results */}
<div className="space-y-4">
  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
    Results
  </h2>

  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-6 py-6 max-w-2xl space-y-3">
    <h3 className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
      Early directional signal
    </h3>
    <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
      The experiment remained within its evaluation window at the time of my departure.
      Early data indicated a positive directional lift in conversion, with no
      technical regressions or negative behavioral signals observed.
      Statistical significance had not yet been reached, but initial trends
      supported the revised direction.
    </p>
  </div>
</div>

{/* Growth Reflection */}
<div className="space-y-6 max-w-2xl">
  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
    Growth Reflection & Impact
  </h2>

  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
    Reducing friction alone does not drive growth. Increasing confidence at
    critical decision moments does.
  </p>

  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
    V1 accelerated progression but reduced clarity around pricing and value.
    Users moved faster, yet felt less certain — and conversion declined.
  </p>

  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
    V2 reframed checkout as a confidence checkpoint. By reinforcing tier value
    and pricing context at payment, the experience became more deliberate and
    trustworthy.
  </p>

  {/* Strategic Impact Card */}
  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-6 py-6 space-y-4">
    <h3 className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
      Strategic impact
    </h3>
    <ul className="space-y-2 text-sm md:text-base text-neutral-700 dark:text-neutral-300 list-disc pl-5">
      <li>Repositioned clarity as a measurable growth lever</li>
      <li>Aligned stakeholders around evidence over intuition</li>
      <li>Balanced speed with transparency to support long-term value</li>
    </ul>
  </div>

  {/* Closing statement */}
  <div className="pt-4">
    <p className="text-base md:text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
      Sustainable growth is not about fewer steps. It is about stronger conviction.
    </p>
  </div>
</div>
</section>
    </article>
  );
}

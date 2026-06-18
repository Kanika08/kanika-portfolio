"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedPage from "@/components/ProtectedPage";

export default function ParentInsightsCaseStudy() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    if (zoomImage) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [zoomImage]);

  const ZoomableImage = ({
    src,
    alt,
    className = "",
  }: {
    src: string;
    alt: string;
    className?: string;
  }) => (
    <img
      src={src}
      alt={alt}
      onClick={() => setZoomImage(src)}
      className={`w-full h-auto rounded-xl border border-neutral-200 dark:border-neutral-800 cursor-zoom-in transition-transform duration-200 hover:scale-[1.01] ${className}`}
    />
  );

  return (
    <ProtectedPage
      correctPassword="prodigy2025"
      storageKey="parent-insights-access"
    >
      <article className="max-w-3xl mx-auto pb-20 space-y-14">

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
          From Engagement to Trust in Prodigy’s Parent App
          </h1>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          The Insights feature in Prodigy's Parent App was intended to communicate learning progress, but it largely reflected activity metrics instead. When tasked with increasing parent engagement, I pushed past the surface ask and redefined the problem: parents needed to understand whether real learning was taking place. I led the redesign of the Insights experience to transform gameplay data into clear, actionable indicators of where children were thriving and where they needed support, ultimately earning parent trust and sustained return visits.
          </p>

          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Scope
              </dt>
              <dd className="mt-2 text-neutral-900 dark:text-neutral-100">
                Product Strategy, IA, Research
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
                Platform
              </dt>
              <dd className="mt-2 text-neutral-900 dark:text-neutral-100">
                Android + iOS
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Timeline
              </dt>
              <dd className="mt-2 text-neutral-900 dark:text-neutral-100 whitespace-nowrap">
                June 2024-2025
              </dd>
            </div>
          </dl>

        </section>



       {/* Problem Framing */}
<section className="space-y-10 md:space-y-14">
  {/* Section Header */}
  <div className="max-w-3xl space-y-4">
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#44E0C4]">
      Problem Framing
    </p>

    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 max-w-4xl leading-tight">
      The Problem Wasn’t the Dashboard — It Was Trust
    </h2>

    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
      The Parent App’s Insights experience was supposed to make learning visible.
      Instead, it mostly surfaced activity, leaving parents with data, but not much confidence.
    </p>

    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
      The issue wasn’t information density. It was interpretation:
      the product wasn’t clearly answering whether progress was actually happening.
    </p>
  </div>

  {/* Strategic Framing */}
  <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
    {/* Business Context */}
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40 p-6 md:p-8 space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
        Business Context
      </p>

      <h3 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        Insights was a key surface for reinforcing product value
      </h3>

      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        While students generated the learning data, the Parent App was one of the
        main places families evaluated whether that learning felt real, useful, and
        worth returning for.
      </p>

      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        That made Insights more than a reporting surface, it was a trust and
        retention driver.
      </p>
    </div>

    {/* Parent Need */}
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40 p-6 md:p-8 space-y-5">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
        Parent Need
      </p>

      <h3 className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
      They weren’t looking for more data, but more meaningful signals.
      </h3>

      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        The experience surfaced usage metrics, but not the signals they actually needed to understand learning
      </p>

      <ul className="space-y-3 text-sm md:text-base text-neutral-700 dark:text-neutral-300">
        <li className="flex items-center gap-3">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#44E0C4] shrink-0" />
          <span>Is my child improving?</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#44E0C4] shrink-0" />
          <span>What are they learning?</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#44E0C4] shrink-0" />
          <span>Where might they need support?</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Ecosystem + Strategic Takeaway */}
  <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
    <div className="space-y-4">
      <img
        src="/images/prodigy-flywheel.png"
        alt="Prodigy flywheel showing how students, parents, and teachers reinforce product value and learning outcomes"
        className="w-full h-auto block rounded-2xl border border-neutral-200 dark:border-neutral-800"
      />
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        Internal ecosystem model showing how value flows between students, parents,
        and teachers.
      </p>
    </div>

    <div className="space-y-5 max-w-xl">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
        Strategic Takeaway
      </p>

      <div className="border-l-4 border-[#44E0C4] pl-5 py-1">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
          If gameplay created the data, Insights had to create the trust.
        </h3>
      </div>

      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        The opportunity wasn’t to add more information. It was to translate
        learning into something parents could quickly understand, believe, and
        act on.
      </p>
    </div>
  </div>
</section>
 

        {/* Navigating Ambiguity */}
        <section className="space-y-10">
  <div className="max-w-3xl space-y-5">
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
      The ambiguity behind “engagement”
    </h2>

    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
    The initial ask was to “increase parent engagement.”
    But engagement meant different things across the organization, more usage, more interaction, higher retention.
    </p>

    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
      For some teams, it meant more visits or feature usage.
      For others, it meant conversion, retention, or measurable interaction.
      For parents, though, engagement only mattered if the product helped them feel confident that learning was actually happening.
    </p>
  </div>

  {/* Table */}
  <div className="w-full border-t border-neutral-200 dark:border-neutral-800">
    <div className="grid grid-cols-2 gap-6 py-5 border-b border-neutral-200 dark:border-neutral-800">
      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        Team perspective
      </p>
      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        What “engagement” could mean
      </p>
    </div>

    {[
      ["Product", "More sessions / feature usage"],
      ["Business", "Higher conversion and renewal"],
      ["Data", "More measurable interaction events"],
      ["Design", "Faster understanding and return value"],
      ["Parents", "Confidence that learning is happening"],
    ].map(([team, meaning]) => (
      <div
        key={team}
        className="grid grid-cols-2 gap-6 py-6 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
      >
        <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
          {team}
        </p>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
          {meaning}
        </p>
      </div>
    ))}
  </div>

  {/* Strategic takeaway */}
  <div className="max-w-3xl">
    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
      If we optimized for the wrong version of engagement, we risked improving usage metrics
      without improving parent trust or perceived value.
    </p>
  </div>
</section>

  {/* My Role */}
<section className="space-y-12 pt-8">
  <div className="max-w-3xl space-y-6">
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
      My Role: Defining the Product Direction
    </h2>

    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
    I led this work as the product designer for the Parent Insights experience but the core challenge wasn’t just designing a better dashboard. The bigger challenge was defining what engagement should actually mean for this surface, aligning the team around it, and translating that into a clearer product direction.
    </p>

    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
      My role went beyond interface design. I helped define the problem, align stakeholders around
      the right success criteria, and shape the product direction before solutions were explored.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10 md:gap-16 pt-4">
    <div className="space-y-6">
      <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
        Strategic Work
      </p>

      <div className="space-y-5">
        <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
          Reframed the opportunity across Product, Data, and Design
        </p>

        <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
          Aligned Product, data and design on behavioral goals and success metrics
        </p>

        <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
          Synthesized research to define what parents actually founf meaningful
        </p>
      </div>
    </div>

    <div className="space-y-6">
      <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
        Design Leadership
      </p>

      <div className="space-y-5">
        <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
          Defined the experience strategy for surfacing learning progress and struggle
        </p>

        <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
          Led concept exploration and iterative validation
        </p>

        <p className="text-sm md:text-base text-neutral-900 dark:text-neutral-100">
          Designed the final information architecture and interaction model
        </p>
      </div>
    </div>
  </div>

  <div className="pt-12 border-t border-neutral-200 dark:border-neutral-800 space-y-6">
    <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
      The Shift
    </p>

    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
    We shifted engagement from activity to return value.
    </h2>

    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
    For Insights, success wasn’t more taps or more time in app. It was giving parents a compelling reason to come back:
    confidence that learning was happening, and clarity on where support might be needed.
    </p>
</div>

   {/* Pull Quote */}
  <div className="max-w-2xl">
    <div className="border-l-4 border-[#44E0C4] pl-5 py-1">
      <p className="text-base md:text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-relaxed">
      Engagement wasn’t about time spent, it was about making progress feel visible.
      </p>
    </div>
  </div>
</section>

 {/* Existing Experience */}
<section className="space-y-10 md:space-y-12">
  <div className="max-w-4xl space-y-6">
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#44E0C4]">
      Existing Experience
    </p>

    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight max-w-4xl">
      The Existing Experience Raised the Wrong Questions
    </h2>

    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
      Before redesigning the experience, I needed to understand why the existing
      page wasn’t creating stronger parent value.
    </p>

    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
      At a glance, it looked information-rich,surfacing metrics like questions
      answered, time played, and success rate. But those signals seemed more useful
      for reporting activity than helping parents understand learning.
    </p>

    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
      That led to an early hypothesis: the issue wasn’t how much data the product
      surfaced, but whether parents could interpret what it actually meant.
    </p>



    <div className="border-l-4 border-[#44E0C4] pl-5 py-1 max-w-2xl">
      <p className="text-medium md:text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-relaxed">
        The question wasn’t whether data existed, it was whether it created understanding.
      </p>
    </div>
  </div>
</section>

        {/* Product Question */}
        <section className="space-y-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Two Product Directions
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            If interpretation was the core issue, the next question became:
what kind of experience would actually create more parent value? There were two plausible directions, and each would likely increase engagement, but for very different reasons.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Direction A (Expand reporting)
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
              If we exposed more performance and activity data, parents would
              perceive more value and engage more often.
              </p>
          
              <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm font-medium text-neutral-500 mb-4">
                This would emphasize:
              </p>
              </div>

              <ul className="list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>More stats and gameplay activity</li>
                <li>More measurable interactions</li>
                <li>More vissible evidence of usage</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Direction B (Clarifying Leanring)
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
              If we help parents quickly understand learning progress and struggle, they will feel more confident and have a stronger reason to return.
              </p>
              <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm font-medium text-neutral-500 mb-4">
                This would emphasize:
              </p>
              </div>
              <ul className="list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>Skills mastered</li>
                <li>Areas of Struggle</li>
                <li>Curriculum progress</li>
              </ul>
            </div>
          </div>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
  Both directions could increase interaction but only one was likely to build trust and repeat use.
</p>
 {/* Strategic question */}
 <div className="max-w-3xl">
    <div className="border-l-4 border-[#44E0C4] pl-5 py-1 space-y-2">
      <p className="text-base md:text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-relaxed">
        Do parents return for more data or for clearer meaning?
      </p>

      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
      This wasn’t just a design question, it was a strategic product decision. I used research and an audit of the existing experience to determine which direction would create real parent value.
      </p>
    </div>
  </div>

</section>

{/* Research Strategy */}
<section className="space-y-8">
  <div className="space-y-3 max-w-3xl">
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
      Research Strategy
    </h2>
    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
    To determine which direction would actually drive parent trust and return behavior, I used a mix of prioritization, interviews, and early concept testing.
    </p>
    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
    This helped move the team from assumptions to evidence by clarifying what parents found meaningful, motivating, and worth coming back for.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
        Prioritization
      </p>
      <div className="space-y-2">
        <p className="text-base font-medium text-neutral-900 dark:text-neutral-100">
          Open card sorting
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        To identify which learning signals parents found most useful at a glance.
        </p>
      </div>
    </div>

    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
        Interpretation
      </p>
      <div className="space-y-2">
        <p className="text-base font-medium text-neutral-900 dark:text-neutral-100">
          1:1 parent interviews
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        To understand how parents interpreted learning data and what built confidence or prompted action.
        </p>
      </div>
    </div>

    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
        Validation
      </p>
      <div className="space-y-2">
        <p className="text-base font-medium text-neutral-900 dark:text-neutral-100">
          Low-fidelity concept testing
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        To evaluate which direction would actually improve understanding, trust, and perceived value.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Research Insight */}
<section className="space-y-8 pt-10">
  <div className="space-y-4 max-w-3xl">
    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500 dark:text-neutral-400">
      Research Insight
    </p>

    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
      Parents didn’t need more data, they needed clearer meaning.
    </h2>

    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
      The research clarified why the existing experience wasn’t creating stronger
      parent value: the issue wasn’t information scarcity, but interpretation.
    </p>

    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
      Parents were already being shown learning data but not in a way that helped
      them quickly understand progress, identify struggle, or know what mattered.
    </p>
  </div>

  <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6 max-w-6xl items-start">
    <div className="space-y-4">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500 dark:text-neutral-400">
          What parents valued
        </p>

        <ul className="space-y-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <li>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              Visible progress
            </span>{" "}
            — whether learning was moving forward
          </li>
          <li>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              Early signs of struggle
            </span>{" "}
            — where support might be needed
          </li>
          <li>
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              Curriculum context
            </span>{" "}
            — what their child was working on
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500 dark:text-neutral-400">
          What the experience optimized for
        </p>

        <ul className="space-y-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <li>
            Activity and performance metrics that lacked meaning on their own
          </li>
          <li>
            Reporting signals that were hard to interpret in a learning context
          </li>
          <li>
            Evidence of usage, rather than evidence of progress
          </li>
        </ul>
      </div>
    </div>

    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <ZoomableImage
        src="/images/parent-card-sorting.png"
        alt="Card sorting synthesis showing which parent-facing learning signals were most valued"
        className="rounded-none border-0"
      />
    </div>
  </div>

  <div className="max-w-3xl pt-4">
    <div className="border-l-4 border-[#44E0C4] pl-5 py-1">
      <p className="text-base md:text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-relaxed">
        Parents weren’t looking for a dashboard to analyze data they were looking for proof that learning was happening.
      </p>
    </div>
  </div>
</section>

        {/* Parent Mindset */}
        <section className="space-y-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Design tension: one surface, two parent mindsets
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Research showed that parents were not all looking for the same level of detail.

Some wanted a quick sense of reassurance. Others wanted a more diagnostic view of where their child was progressing or struggling.

The challenge was designing an experience that could support both without becoming either too shallow or too overwhelming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-3">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Coach Parent
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Wants detailed breakdown</li>
                <li>Monitors progress closely</li>
                <li>Wants actionable signals</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-3">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Cheerleader Parent
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Wants reassurance</li>
                <li>Wants simple signals</li>
                <li>Prefers encouragement</li>
              </ul>
            </div>
          </div>
        </section>

{/* System Complexity / Curriculum Hierarchy */}
<section className="space-y-12 max-w-6xl">
  {/* Intro */}
  <div className="space-y-4 max-w-3xl">
    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
      System Complexity
    </p>

    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
      Progress only made sense within the learning system
    </h2>

    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
      Before redesigning the experience, I had to understand the underlying
      learning model the product was trying to represent.
    </p>

    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
      Math progress wasn’t a single score. It lived across multiple layers
      from curriculum strands, to topics, to individual skills. That meant
      performance data only became useful when grounded in the right learning
      context.
    </p>
  </div>

  {/* Diagram */}
  <div className="rounded-[28px] border border-neutral-200 dark:border-neutral-800 px-6 py-10 md:px-10 md:py-14 bg-white/50 dark:bg-neutral-900/20">
    {/* Level 1 */}
    <div className="flex flex-col items-center text-center space-y-3">
      <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
        Level 1
      </p>
      <div className="inline-flex rounded-full border border-neutral-200 dark:border-neutral-700 px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-900">
        Grade 1 Curriculum
      </div>
    </div>

    {/* Connector */}
    <div className="flex justify-center py-6">
      <div className="w-px h-10 bg-neutral-300 dark:bg-neutral-700" />
    </div>

    {/* Level 2 — Strands */}
    <div className="space-y-5">
      <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 text-center">
        Level 2 — Strands
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        {[
          "Number & Operations in Base Ten",
          "Operations & Algebraic Thinking",
          "Measurement & Data",
          "Geometry",
          "Patterns & Algebra Foundations",
        ].map((strand, i) => (
          <div
            key={i}
            className={`rounded-2xl border px-4 py-5 min-h-[120px] ${
              i === 0
                ? "border-[#44E0C4] bg-[#F2FFFB] dark:bg-[#0F1E1B]"
                : "border-neutral-200 dark:border-neutral-800"
            }`}
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-neutral-500 mb-3">
              Strand {i + 1}
            </p>
            <p className="text-sm leading-relaxed text-neutral-900 dark:text-neutral-100">
              {strand}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Nested connector from Strand 1 */}
    <div className="hidden md:block relative h-20">
      {/* vertical down from strand 1 */}
      <div className="absolute left-[10%] top-0 h-8 w-px bg-neutral-300 dark:bg-neutral-700" />
      {/* horizontal to topic group */}
      <div className="absolute left-[10%] top-8 h-px w-[18%] bg-neutral-300 dark:bg-neutral-700" />
      {/* label */}
      <p className="absolute left-[10%] top-11 text-xs text-neutral-500 italic">
        Zooming into Strand 1
      </p>
    </div>

    {/* Mobile label */}
    <div className="md:hidden pt-6 pb-2">
      <p className="text-xs text-neutral-500 italic">
        Zooming into Strand 1
      </p>
    </div>

    {/* Level 3 — Topics */}
    <div className="space-y-5">
      <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 text-center">
        Level 3 — Topics within Strand 1
      </p>

      <div className="grid md:grid-cols-3 gap-4 max-w-4xl md:ml-[14%]">
        {[
          "Addition up to 100",
          "Subtraction up to 100",
          "Compare Numbers",
        ].map((topic, i) => (
          <div
            key={i}
            className={`rounded-2xl border px-5 py-5 text-sm leading-relaxed ${
              i === 0
                ? "border-[#44E0C4] bg-[#F2FFFB] dark:bg-[#0F1E1B] text-neutral-900 dark:text-neutral-100"
                : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
            }`}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>

    {/* Nested connector from Addition */}
    <div className="hidden md:block relative h-20">
      {/* vertical down from addition */}
      <div className="absolute left-[20%] top-0 h-8 w-px bg-neutral-300 dark:bg-neutral-700" />
      {/* horizontal to skills */}
      <div className="absolute left-[20%] top-8 h-px w-[18%] bg-neutral-300 dark:bg-neutral-700" />
      {/* label */}
      <p className="absolute left-[20%] top-11 text-xs text-neutral-500 italic">
        Zooming into “Addition up to 100”
      </p>
    </div>

    {/* Mobile label */}
    <div className="md:hidden pt-6 pb-2">
      <p className="text-xs text-neutral-500 italic">
        Zooming into “Addition up to 100”
      </p>
    </div>

    {/* Level 4 — Skills */}
    <div className="space-y-5">
      <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 text-center">
        Level 4 — Skills within “Addition up to 100”
      </p>

      <div className="grid md:grid-cols-3 gap-4 max-w-4xl md:ml-[24%]">
        {[
          "Count forward by 10",
          "Compare two-digit numbers",
          "Identify place value",
        ].map((skill, i) => (
          <div
            key={i}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 px-5 py-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Pull Quote */}
  <div className="max-w-2xl">
    <div className="border-l-4 border-[#44E0C4] pl-5 py-1">
      <p className="text-base md:text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-relaxed">
        The design challenge wasn’t just surfacing data, it was making the learning model legible to parents.
      </p>
    </div>
  </div>
</section>
  

   
{/* Design Challenge */}
<section className="space-y-8 max-w-5xl">
  <div className="space-y-3 max-w-3xl">
    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
      Design challenge
    </p>

    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
      Translating learning data into something parents could actually use
    </h2>

    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
      The challenge was not information density — it was interpretation. We needed
      to help parents understand progress, identify struggle, and feel confident
      about what the data meant.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 px-6 py-6">
      <div className="space-y-3">
        <div className="flex items-baseline gap-3">
         
          <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
           1.  Make progress legible
          </h3>
        </div>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Parents should be able to tell quickly whether learning is moving forward.
        </p>
      </div>
    </div>

    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 px-6 py-6">
      <div className="space-y-3">
        <div className="flex items-baseline gap-3">
          <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
           2. Expose struggle meaningfully
          </h3>
        </div>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Signals of difficulty should feel useful, not alarming or abstract.
        </p>
      </div>
    </div>

    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 px-6 py-6">
      <div className="space-y-3">
        <div className="flex items-baseline gap-3">
          <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
           3. Use curriculum as structure
          </h3>
        </div>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Learning data needed a framework parents could mentally organize around.
        </p>
      </div>
    </div>

    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 px-6 py-6">
      <div className="space-y-3">
        <div className="flex items-baseline gap-3">
          <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
           4. Reduce interpretation effort
          </h3>
        </div>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The experience should help parents understand, not ask them to analyze.
        </p>
      </div>
    </div>
  </div>
</section>




        {/* Concept Evolution */}
        <section className="space-y-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Design Concept Evolution
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I explored two distinct design directions to test how parents best interpret learning progress. One prioritized structure and depth; the other prioritized emotional clarity and motivation.

The goal wasn’t to choose a prettier UI, it was to understand which interaction model best supported parent trust, comprehension, and return value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Structured */}
            <div className="space-y-4">
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                <ZoomableImage
                  src="/images/parent-structured-concept.png"
                  alt="Structured parent insights concept"
                  className="rounded-none border-0"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Concept 1
                </p>
                <p className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  Structured — information-first
                </p>
                <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1 list-disc pl-4">
                  <li>Strong hierarchy and drill-down model</li>
                  <li>Easier to scan by curriculum structure</li>
                  <li>Better for depth, but less emotionally motivating</li>
                </ul>
              </div>
            </div>

            {/* Visual */}
            <div className="space-y-4">
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                <ZoomableImage
                  src="/images/parent-visual-concept.png"
                  alt="Visual parent insights concept"
                  className="rounded-none border-0"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Concept 2
                </p>
                <p className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  Visual — progress-first
                </p>
                <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1 list-disc pl-4">
                  <li>More immediate and emotionally engaging</li>
                  <li>Surfaced progress and struggle faster</li>
                  <li>Less effective for deeper interpretation on its own</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Takeaway */}
<div className="mt-12 max-w-3xl">
  <div className="border-l-4 border-[#44E0C4] pl-5 space-y-3">
    
    <p className="text-base md:text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-relaxed">
      What became clear was that parents needed both: the emotional clarity of visible progress, and the structure to understand what that progress actually meant.
    </p>

    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
      That insight shaped the final direction: a system that felt motivating at a glance, but still grounded in curriculum and learning context.
    </p>

  </div>
</div>

        </section>

        {/* Final Design */}
        <section className="space-y-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Final Design Direction
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I moved forward with a direction that made learning progress immediately understandable, while still allowing parents to drill into the curriculum structure behind it.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                01. Identify struggles early
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
                Parents can quickly see where their child may need support, drill into
                specific skills, and take lightweight action through encouragement.
              </p>
              <ZoomableImage
                src="/images/identify-struggles-early.png"
                alt="Parent insights feature showing struggle detection"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                02. Reinforce learning success
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
                Mastered skills were surfaced not just as completion states, but as
                opportunities for parents to celebrate progress and stay engaged.
              </p>
              <ZoomableImage
                src="/images/reinforce-learning-success.png"
                alt="Parent insights feature showing mastery and encouragement"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Explore curriculum progress
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
                A drill-down structure connected high-level curriculum progress to
                topics and individual skills, helping parents move from overview to detail.
              </p>
              <ZoomableImage
                src="/images/explore-curriculum-progress.png"
                alt="Parent insights curriculum drill-down experience"
              />
            </div>
          </div>
        </section>

        {/* Learning Signal Logic */}
        <section className="space-y-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Learning Signal Logic
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The work didn’t stop at the dashboard. A key part of the design was defining how learning signals should be detected, prioritized, and surfaced across the parent experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                1. Signal Detection
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Mastery and struggle signals were defined using repeat learning patterns and not isolated gameplay events. This made the signals more meaningful and reliable for parents.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                2. Signal Surfacing
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The work didn’t stop at the dashboard. A key part of the design was defining how learning signals should be detected, prioritized, and surfaced across the parent experience.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                3. Product Impact
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The work didn’t stop at the dashboard. A key part of the design was defining how learning signals should be detected, prioritized, and surfaced across the parent experience.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="space-y-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Impact
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            By shifting the experience from passive reporting to meaningful learning signals, the redesign created a stronger reason for parents to return and a clearer path to product value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/60 dark:bg-emerald-950/20 px-6 py-6 space-y-2">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">
                2.56%
              </div>
              <div className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100">
                Feature engagement
              </div>
            </div>

            <div className="rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/60 dark:bg-emerald-950/20 px-6 py-6 space-y-2">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">
                3.11
              </div>
              <div className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100">
                Bi-weekly parent visits
              </div>
            </div>

            <div className="rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/60 dark:bg-emerald-950/20 px-6 py-6 space-y-2">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">
                34%
              </div>
              <div className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100">
                Lift in retention
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-2xl pt-2">
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The biggest shift wasn’t visual,it was strategic.
We moved parent engagement from passive activity checking to meaningful learning understanding.

            </p>

            <p className="text-base md:text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
            That reframing helped turn Insights into a stronger trust and retention surface for the business.
            </p>
          </div>
        </section>

        {/* Zoom modal */}
        {zoomImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setZoomImage(null)}
          >
            <img
              src={zoomImage}
              alt="Zoomed case study visual"
              className="max-w-[95vw] max-h-[90vh] rounded-lg border border-neutral-200 dark:border-neutral-800"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </article>
    </ProtectedPage>
  );
}
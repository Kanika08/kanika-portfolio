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
          Redefining Parent Engagement in Prodigy’s Parent App
          </h1>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Led the redesign of Prodigy’s Parent App Insights experience to help parents understand progress, spot struggles early, and return more often.
          </p>

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

          <div className="grid md:grid-cols-3 gap-4 pt-2 max-w-3xl">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-5 py-5">
              <div className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Engagement
              </div>
              <div className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                +2.56%
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-5 py-5">
              <div className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Parent visits
              </div>
              <div className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                3.11
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-5 py-5">
              <div className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Retention lift
              </div>
              <div className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                +34%
              </div>
            </div>
          </div>
        </section>

        {/* Product Context */}
        <section className="space-y-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            The Problem Wasn’t the Dashboard — It Was Trust
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Prodigy’s business depends on more than student gameplay.
Parents are the ones who decide whether the product is worth paying for — and whether they’ll keep paying for it.

But the Parent App’s Insights page wasn’t helping them answer the questions they actually cared about:

Is my child improving?
What are they learning?
Where might they need support?

Instead, the experience surfaced activity metrics that were academically dense, difficult to interpret, and weak at building trust.

I was asked to “increase parent engagement” — but the harder challenge was that nobody had clearly defined what engagement should mean, or what kind of information would actually drive it.
            </p>
          </div>
          </section>

          <section className="space-y-10">
  <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
    
    {/* Left Content */}
    <div className="max-w-xl space-y-5">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        Why This Surface Mattered to the Business
      </h2>

      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Prodigy’s business depends on more than student gameplay.
        While students generate the learning data, parents are the ones who decide whether the product is valuable enough to subscribe to and keep using.
      </p>

      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        That made the Parent App’s Insights experience strategically important:
        it was one of the main places where parents could evaluate whether learning was actually happening.
      </p>

      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Improving this surface wasn’t just a UX opportunity — it was a trust and retention opportunity.
      </p>
    </div>

    {/* Right Visual */}
    <div className="w-full space-y-3">
      <img
        src="/images/prodigy-flywheel.png"
        alt="Prodigy flywheel showing how students, parents, and teachers reinforce product value and learning outcomes"
        className="w-full h-auto block"
      />
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        Internal ecosystem model showing how value flows between students, parents, and teachers.
      </p>
    </div>
  </div>

  {/* Pull Quote */}
  <div className="max-w-2xl">
    <div className="border-l-4 border-[#44E0C4] pl-5 py-1">
      <p className="text-base md:text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-relaxed">
        If gameplay created the data, Insights had to create the trust.
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
      The ask sounded simple: increase parent engagement.
      But “engagement” meant different things depending on who you asked.
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

        {/* My Approach */}
        function MyRoleSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-6xl">
        {/* Section label */}
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 mb-6">
          My Role
        </p>

        {/* Intro */}
        <div className="max-w-4xl space-y-8">
          <p className="text-2xl md:text-3xl leading-[1.45] tracking-tight text-neutral-900">
            I led this work as the product designer responsible for the Parent App Insights experience.
          </p>

          <p className="text-lg md:text-[1.55rem] leading-[1.7] tracking-tight text-neutral-700">
            My role went beyond interface design. I helped define the problem, align stakeholders around
            the right success criteria, and shape the product direction before solutions were explored.
          </p>
        </div>

        {/* Role breakdown */}
        <div className="mt-20 grid md:grid-cols-2 gap-16 md:gap-20 max-w-5xl">
          {/* Left column */}
          <div>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900 mb-8">
              Framing the opportunity
            </p>

            <div className="space-y-8">
              <p className="text-lg md:text-[1.7rem] leading-[1.55] tracking-tight text-neutral-700">
                Reframed the opportunity across Product, Data, and Design
              </p>

              <p className="text-lg md:text-[1.7rem] leading-[1.55] tracking-tight text-neutral-700">
                Aligned the team on behavioral goals and success metrics
              </p>

              <p className="text-lg md:text-[1.7rem] leading-[1.55] tracking-tight text-neutral-700">
                Synthesized research to define what parents actually value
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900 mb-8">
              Shaping the experience
            </p>

            <div className="space-y-8">
              <p className="text-lg md:text-[1.7rem] leading-[1.55] tracking-tight text-neutral-700">
                Defined the experience strategy for translating gameplay into meaningful learning signals
              </p>

              <p className="text-lg md:text-[1.7rem] leading-[1.55] tracking-tight text-neutral-700">
                Led concept development and iterative testing
              </p>

              <p className="text-lg md:text-[1.7rem] leading-[1.55] tracking-tight text-neutral-700">
                Designed the final interaction model and information architecture
              </p>
            </div>
          </div>
        </div>

        {/* Strategic alignment */}
        <div className="mt-24 pt-12 border-t border-neutral-200 max-w-5xl">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500 mb-6">
            What we aligned around
          </p>

          <p className="text-3xl md:text-5xl leading-[1.2] tracking-tight text-neutral-900 max-w-4xl">
            We redefined engagement as <span className="italic">return value</span> — not activity.
          </p>

          <p className="mt-8 text-lg md:text-[1.55rem] leading-[1.75] tracking-tight text-neutral-700 max-w-4xl">
            For Insights, success wasn’t more taps or more time in app. It was giving parents a compelling
            reason to come back: confidence that learning was happening, and clarity on where their child
            might need support.
          </p>

          {/* Pull quote */}
          <div className="mt-12 max-w-3xl pl-6 border-l-4 border-[#47E6C1]">
            <p className="text-2xl md:text-[2rem] italic leading-[1.45] tracking-tight text-neutral-900">
              Parents don’t return for data — they return for clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
 

        {/* Strategic Reframe */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Strategic Reframe
          </h2>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            We reframed the opportunity from “increase engagement” to creating
            a clearer parent outcome that could drive business impact.
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-5 text-center space-y-3">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Aligned Behavior
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Parents regularly check learning progress
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-5 text-center space-y-3">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Parent Outcome
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Confidence that learning is happening
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-5 text-center space-y-3">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Business Impact
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Conversion, trust, and retention
              </p>
            </div>
          </div>

          <p className="text-base md:text-lg font-medium italic text-emerald-600 dark:text-emerald-400">
            Engagement builds trust — and trust drives retention.
          </p>
        </section>

        {/* Existing Experience */}
        <section className="space-y-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Existing Experience
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              The existing insights page surfaced performance metrics, but didn’t
              translate those numbers into meaningful learning understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-3">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Data surfaced
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Questions answered</li>
                <li>Topics completed</li>
                <li>Weekly activity</li>
                <li>Success rate</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-3">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                What parents still couldn’t answer
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Is my child improving?</li>
                <li>What skills are they learning?</li>
                <li>Where might they need help?</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto w-full max-w-2xl">
            <ZoomableImage
              src="/images/parent-insights-existing.png"
              alt="Existing Parent Insights mobile screen"
            />
          </div>
        </section>

        {/* Product Question */}
        <section className="space-y-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              A key product question
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Do parents engage more when we show more data — or when we show clearer meaning?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Product hypothesis
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                More visible performance metrics will reinforce platform value.
              </p>
              <ul className="list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>Questions answered</li>
                <li>Success rate</li>
                <li>Activity streaks</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Design hypothesis
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Clearer learning signals will make progress easier to understand.
              </p>
              <ul className="list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>Mastered topics</li>
                <li>Struggling skills</li>
                <li>Curriculum progress</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Strategy */}
        <section className="space-y-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Research Strategy
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We validated what drives parent engagement by testing which learning
              signals parents actually found useful and motivating.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-3">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Research questions
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Which learning signals parents find most useful</li>
                <li>Which metrics feel meaningful vs superficial</li>
                <li>What information parents feel is missing</li>
                <li>What prompts parents to take action</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-3">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Research approach
              </div>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Open card sorting</li>
                <li>• Parent interviews</li>
                <li>• Concept validation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Insights */}
        <section className="space-y-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Key Research Insights
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Parents valued learning progress more than performance metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <div className="space-y-4">
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-3">
                <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Questions parents want answered
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>What topics their child has mastered</li>
                  <li>Where their child is struggling</li>
                  <li>How they are progressing through the curriculum</li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-3">
                <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Key takeaways
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>Parents want early signals of struggle</li>
                  <li>Numbers lack meaning without curriculum context</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
              <ZoomableImage
                src="/images/parent-card-sorting.png"
                alt="Card sorting synthesis for parent insights"
                className="rounded-none border-0"
              />
            </div>
          </div>
        </section>

        {/* Parent Mindset */}
        <section className="space-y-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Parent Mindset
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Parents were not all looking for the same level of detail, but both
              mindsets valued clarity over raw activity reporting.
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

        {/* Curriculum Breakdown */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Curriculum Breakdown
          </h2>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            One of the core design challenges was translating Prodigy’s curriculum
            hierarchy into something parents could understand quickly.
          </p>

          <blockquote className="border-l-2 border-emerald-400 pl-4 italic text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-2xl">
            Parents struggle to connect curriculum hierarchy to their child’s learning progress.
          </blockquote>
        </section>

        {/* Design Challenge */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Design Challenge
          </h2>

          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            How might we translate curriculum progress into a view that parents can
            quickly understand and act on?
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
            <div className="rounded-full aspect-square border border-neutral-200 dark:border-neutral-800 flex items-center justify-center p-8 text-center text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Preserve curriculum structure
            </div>
            <div className="rounded-full aspect-square border border-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center p-8 text-center text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Highlight struggling areas
            </div>
            <div className="rounded-full aspect-square border border-neutral-200 dark:border-neutral-800 flex items-center justify-center p-8 text-center text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Stay simple and actionable
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
              The goal wasn’t to choose a visual winner — it was to understand
              which design patterns best helped parents interpret progress and take action.
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
                  <li>Clear hierarchy and drill-down model</li>
                  <li>Easy to scan and compare sections</li>
                  <li>Felt more functional than motivating</li>
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
                  <li>More emotionally engaging and encouraging</li>
                  <li>Surfaced struggling areas quickly</li>
                  <li>Reduced clarity for parents seeking depth</li>
                </ul>
              </div>
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
              The final experience combined the clarity of structured navigation
              with the motivational quality of visual progress signals.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Identify struggles early
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
                Reinforce learning success
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
              One of the most important parts of the work was not just the UI —
              it was defining the product logic that translated gameplay data into
              meaningful parent-facing signals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                1. Signal Detection
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Struggling and mastery signals were defined using repeat behavior patterns
                rather than isolated performance events.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                2. Signal Surfacing
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Signals were surfaced across dashboard highlights, drilldowns, and
                key moments designed to bring parents back into the app.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                3. Product Impact
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                The system prioritized learning progress, early struggle detection,
                and re-engagement rather than passive activity reporting.
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
              Clearer learning insights increased parent confidence and created a
              stronger reason for parents to return to the product.
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
              The biggest product shift was not simply redesigning a dashboard — it
              was redefining what “useful parent engagement” actually meant.
            </p>

            <p className="text-base md:text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
              Better insight design created stronger trust in the learning experience.
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
import { SectionHeader } from "@/components/section-header";

export default function AboutPage() {
  return (
    <section className="max-w-4xl py-10 md:py-12 space-y-12 md:space-y-14">
      {/* 1. Intro */}
      <div className="space-y-6">
        <SectionHeader
          eyebrow="About"
          title="Designing products that scale with clarity and intent."
          description="I’m Kanika, a senior product designer focused on growth, subscriptions, and foundational product experiences. I care about aligning user needs, business goals, and system design to create products that remain coherent as they scale."
          as="h1"
        />

        <div className="grid gap-6 text-sm md:text-base text-neutral-600 leading-relaxed md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          <div className="space-y-3">
            <p>
            I’ve spent the past several years designing for products
            used by millions of people globally, working on subscription platforms,
            activation funnels, and core product foundations.
            My work spans from early exploration and systems thinking to shipping
            production-ready experiences with engineering
            </p>
            <p>
            I’m particularly drawn to ambiguous, high-impact problems—where the right
            structure can unlock clarity for both users and teams.
            I enjoy creating systems and patterns that make products easier to evolve, measure, and scale over time.
            </p>

            <p>
      I work closely with product, engineering, and leadership to connect long-term strategy with thoughtful execution, ensuring decisions are intentional and resilient as products grow.
    </p>

          </div>

          <div className="space-y-1 text-sm text-neutral-600">
            <p className="font-medium text-neutral-900">Currently</p>
            <p>Senior Product Designer</p>
            <p>Designing growth and foundational experiences for a global learning platform..</p>
          </div>
        </div>
      </div>

      {/* 2. Experience highlights */}
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Experience"
          title="Impact and scale"
          description="I’ve spent over a decade designing for products where growth, retention, and operational reality all need to harmonize."
          as="h2"
        />

        <div className="space-y-5 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              Prodigy Education
            </p>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              Designing subscription and parent experiences
            </p>
            <p>
              Led work on subscription flows, experimentation frameworks, and
              parent-facing insights—aligning growth goals with a product used
              by millions of families and educators.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              Zomato
            </p>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              Building marketplace and subscription systems
            </p>
            <p>
              Worked on restaurant and diner experiences including Zomato Gold,
              navigating marketplace incentives, operational constraints, and
              abuse prevention at scale.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Design approach */}
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Approach"
          title="How I think about product design"
          description="I bias toward clarity, shared language, and designing systems that teams can own—not just polished surfaces."
          as="h2"
        />

        <div className="grid gap-6 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed md:grid-cols-2">
          <div className="space-y-3">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">How I think</p>
            <p>
              I start from constraints and incentives: who needs to win, what
              needs to be protected, and where the system is likely to break.
              From there, I map states, edge cases, and feedback loops before
              committing to UI.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              How I work with teams
            </p>
            <p>
              I collaborate closely with PMs, engineers, data, and operations—
              using artifacts like decision docs, diagrams, and design tokens to
              keep teams aligned. I value clear trade-offs, honest constraints,
              and shipping in well-framed iterations.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Personal note */}
      <div className="space-y-4 border-t border-dashed border-neutral-200 dark:border-neutral-800 pt-8 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        <p className="font-medium text-neutral-900 dark:text-neutral-100">A more human note</p>
        <p>
          Outside of product work, I’m often collecting references—from service
          design, architecture, and writing—that influence how I think about
          clarity and pace in digital products. I care about teams that are kind,
          ambitious, and serious about craft.
        </p>
      </div>
    </section>
  );
}


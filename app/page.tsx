import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-4xl py-10 md:py-12">
      <h1 className="mb-8 text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
        I design product systems that simplify complexity and enable meaningful growth.
      </h1>

      <div className="mb-12 max-w-3xl space-y-5 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        <p>
          Over 14+ years at Zomato and Prodigy, I've worked on products used by millions—designing subscription systems, growth experiences, and core product foundations across web and mobile. I've led end-to-end design for mobile apps, from restaurant discovery and ordering at Zomato to parent-facing subscription and progress experiences at Prodigy.
        </p>
        <p>
          I'm drawn to complex, evolving products—where thoughtful design brings clarity to systems and helps teams build experiences people trust over time.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-50 dark:text-neutral-900 shadow-sm transition hover:bg-neutral-800 dark:hover:bg-neutral-200"
        >
          View product case studies
          <span className="text-base">→</span>
        </Link>

        <Link
          href="mailto:kanika.vasudeva@gmail.com"
          className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          Let's connect
        </Link>
      </div>
    </section>
  );
}

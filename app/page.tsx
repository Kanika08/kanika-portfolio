import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-4xl py-10 md:py-12">
      <h1 className="mb-8 text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-primary">
        I design systems behind products people rely on every day.
      </h1>

      <div className="mb-12 max-w-3xl space-y-5 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        <p>
        Over 14+ years at Zomato and Prodigy, I’ve designed products used by millions—across mobile and web, from discovery and ordering to subscriptions and parent experiences.
        </p>
        <p>
        I focus on bringing clarity to complex systems and helping teams build products that scale with intention.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-neutral-100 px-5 py-2.5 text-sm font-medium text-white dark:text-neutral-900 shadow-sm transition hover:bg-neutral-800 dark:hover:bg-neutral-200"
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

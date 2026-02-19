import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-4xl py-10 md:py-12">
      <p className="mb-5 text-[11px] md:text-xs uppercase tracking-[0.22em] text-neutral-500">
        Senior Product Designer · Systems, Subscriptions, Experimentation
      </p>

      <h1 className="mb-8 text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
        I design product systems that simplify complexity and drive growth.
      </h1>

      <div className="mb-12 max-w-3xl space-y-4 text-sm md:text-base text-neutral-600 leading-relaxed">
        <p>
          14+ years designing subscription platforms, experimentation frameworks,
          and scalable design foundations at Zomato and Prodigy.
        </p>
        <p>
          I work at the intersection of business models, product strategy, and
          experience design—shaping systems that compound value over time.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-neutral-50 shadow-sm transition hover:bg-neutral-800"
        >
          View product case studies
          <span className="text-base">→</span>
        </Link>

        <Link
          href="mailto:kanika.vasudeva@gmail.com"
          className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
        >
          Let's connect
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";

type CaseStudyCardProps = {
  href: string;
  product: string;
  focus: string;
  title: string;
  summary: string;
  tags: string[];
};

export function CaseStudyCard({
  href,
  product,
  focus,
  title,
  summary,
  tags,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 md:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
    >
      <div>
        <div className="mb-6 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
          <span className="font-medium">{product}</span>
          <span className="rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
            {focus}
          </span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-3 text-lg md:text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        <p className="text-sm md:text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
          {summary}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm font-medium text-neutral-900 dark:text-neutral-100">
        <span className="inline-flex items-center gap-1">
          View case study
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
        <span className="text-xs text-neutral-400 dark:text-neutral-500">~5 min read</span>
      </div>
    </Link>
  );
}


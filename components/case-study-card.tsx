import Link from "next/link";

type CaseStudyCardProps = {
  href: string;
  product: string;
  title: string;
  summary: string;
  tags: string[];
  readTime: string;
};

export function CaseStudyCard({
  href,
  product,
  title,
  summary,
  tags,
  readTime,
}: CaseStudyCardProps) {
  const allTags = [product, ...tags];

  return (
    <Link href={href} className="group block">
      <article className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors bg-white dark:bg-neutral-900">
        {/* Image container (left) */}
        <div
          className="w-full md:w-[40%] aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 rounded-xl flex-shrink-0"
          aria-hidden
        />

        {/* Text container (right) */}
        <div className="flex flex-col justify-between w-full md:w-[60%]">
          <div>
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              {summary}
            </p>

            {/* Tags row — first tag is company name */}
            <div className="flex flex-wrap gap-2 mb-6">
              {allTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between mt-4">
            <span className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">
              View case study →
            </span>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

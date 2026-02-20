import Link from "next/link";
import type { ReactNode } from "react";

type CaseStudyCardProps = {
  href: string;
  product: string;
  title: string;
  summary: string;
  tags: string[];
  coverImage: string;
  logo: ReactNode;
  readTime: string;
};

export function CaseStudyCard({
  href,
  product,
  title,
  summary,
  tags,
  coverImage,
  logo,
  readTime,
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="grid md:grid-cols-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition">
        {/* Left: Content */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          {/* Company row */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800">
              {logo}
            </div>

            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {product}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            {summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">
              View case study →
            </span>
            <span className="text-xs text-neutral-500">{readTime}</span>
          </div>
        </div>

        {/* Right: Cover image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
          <img
            src={coverImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
}


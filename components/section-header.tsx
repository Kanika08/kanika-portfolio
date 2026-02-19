type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionHeaderProps) {
  const HeadingTag = as;
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
          {eyebrow}
        </p>
      )}
      <HeadingTag className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
        {title}
      </HeadingTag>
      {description && (
        <p className="max-w-2xl text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}


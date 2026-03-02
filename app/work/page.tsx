import Link from "next/link";

const tagStyles: Record<string, string> = {
  // Growth / Experiment
  Experimentation:
    "bg-blue-50 text-blue-700 dark:bg-neutral-800 dark:text-neutral-200",
  "Growth design":
    "bg-blue-50 text-blue-700 dark:bg-neutral-800 dark:text-neutral-200",
  "Growth systems":
    "bg-blue-50 text-blue-700 dark:bg-neutral-800 dark:text-neutral-200",

  // Subscription
  Subscription:
    "bg-purple-50 text-purple-700 dark:bg-neutral-800 dark:text-neutral-200",
  Membership:
    "bg-purple-50 text-purple-700 dark:bg-neutral-800 dark:text-neutral-200",

  // Systems
  "Systems thinking":
    "bg-emerald-50 text-emerald-700 dark:bg-neutral-800 dark:text-neutral-200",
  "Design system":
    "bg-emerald-50 text-emerald-700 dark:bg-neutral-800 dark:text-neutral-200",
  Scale:
    "bg-emerald-50 text-emerald-700 dark:bg-neutral-800 dark:text-neutral-200",
  "Cross-functional":
    "bg-emerald-50 text-emerald-700 dark:bg-neutral-800 dark:text-neutral-200",

  // Engagement
  Engagement:
    "bg-amber-50 text-amber-700 dark:bg-neutral-800 dark:text-neutral-200",
  "Information design":
    "bg-amber-50 text-amber-700 dark:bg-neutral-800 dark:text-neutral-200",

  // Mobile
  "Mobile app design":
    "bg-rose-50 text-rose-700 dark:bg-neutral-800 dark:text-neutral-200",
};

const caseStudies = [
  {
    type: "internal",
    href: "/work/one-page-checkout",
    product: "Prodigy",
    title: (
      <>
        One-page checkout experiment
        <span className="block mt-1">(V1 → V2)</span>
      </>
    ),
    summary:
      "Designing and running a high-impact membership checkout experiment and turning a failed test into a growth playbook.",
    tags: ["Experimentation", "Membership", "Growth design"],
    readTime: "8 min read",
    image: "/images/cover-one-page-checkout.png",
    imageBg: "bg-[#E6F0FF] dark:bg-neutral-900",
    cta: "View case study →",
  },
  {
    type: "internal",
    href: "/work/parent-insights",
    product: "Prodigy",
    title: "Parent Insights Dashboard",
    summary:
      "Redesigned Prodigy’s parent insights experience by replacing vanity metrics with actionable learning signals. Increased app engagement by 2.56% and drove a 34% lift in retention.",
    tags: ["Engagement", "Mobile app design", "Systems thinking"],
    image: "/images/cover_parent_insights.png", 
    imageBg: "bg-[#EAF7F2] dark:bg-neutral-900",
    cta: "Case study in progress 🔒",
  },
  {
    type: "external",
    href: "https://medium.com/user-experience-design-1/building-zomato-gold-design-process-challenges-learnings-from-designing-a-subscription-fcf7cdf5ae17",
    product: "Zomato",
    title: "Scaling Zomato Gold",
    summary:
      "Designed a subscription experience that balanced restaurant constraints, user value, and growth strategy—aligning incentives across a complex ecosystem.",
    tags: ["Subscription", "Mobile app design", "Growth systems"],
    image: "/images/cover_zomato_gold.png",
    imageBg: "bg-[#F3E8FF] dark:bg-neutral-900",
    cta: "View case study on Medium ↗",
  },
  {
    type: "external",
    href: "https://medium.com/user-experience-design-1/developing-the-zomato-design-system-438357188904",
    product: "Zomato",
    title: "Zomato Design System",
    summary:
      "Developed a scalable design system that improved cross-team consistency and increased velocity across product teams.",
    tags: ["Design system", "Scale", "Cross-functional"],
    image: "/images/cover_zomato_design_system.png",
    imageBg: "bg-[#FFF1E6] dark:bg-neutral-900",
    cta: "View case study on Medium ↗",
  },
];

export default function WorkPage() {
  return (
    <section className="max-w-4xl mx-auto pb-10 md:pb-12">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Product case studies
        </h1>

        <p className="mt-3 max-w-2xl text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Design work across subscriptions, growth, and systems, built with clarity, measurable impact, and long-term scalability in mind.
        </p>
      </div>

      <div className="flex flex-col gap-20 md:gap-24 mt-10 md:mt-12">
        {caseStudies.map((study) => {
          const Wrapper = study.type === "external" ? "a" : Link;

          const wrapperProps =
            study.type === "external"
              ? {
                  href: study.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group",
                }
              : {
                  href: study.href,
                  className: "group",
                };

          return (
            <Wrapper key={study.title as string} {...wrapperProps}>
              <article className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image container */}
                <div
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden ${study.imageBg}`}
                >
                  {study.image && (
                    <img
                      src={study.image}
                      alt="Case study cover"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Text content */}
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    {study.product}
                  </div>

                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                    {study.title}
                  </h2>

                  <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-md ${
                          tagStyles[tag] ||
                          "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-200"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className="btn-secondary text-sm font-medium inline-flex items-center gap-1">
                      {study.cta}
                    </span>

                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {study.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
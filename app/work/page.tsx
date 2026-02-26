import Link from "next/link";
const tagStyles: Record<string, string> = {
  // Growth / Experiment
  "Experimentation": "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Growth design": "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Growth systems": "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",

  // Subscription / Marketplace
  "Subscription": "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "Membership": "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "Marketplace": "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",

  // Systems / Design foundations
  "Systems thinking": "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Design system": "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Scale": "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Cross-functional": "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",

  // Engagement / Info
  "Engagement": "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  "Information design": "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
};
const caseStudies = [
  {
    href: "/work/one-page-checkout",
    product: "Prodigy",
    title: (
      <>
        One-page checkout experiment
        <span className="block mt-1">
          (V1 → V2)
        </span>
      </>
    ),
    
    summary:
    "Designing and running a high-impact membership checkout experiment and turning a failed test into a growth playbook.",
    tags: ["Experimentation", "Membership", "Growth design"],
    readTime: "8 min read",
    image: "/images/cover-one-page-checkout.png", 
    imageBg: "bg-[#E6F0FF] dark:bg-neutral-800",
  },
  {
    href: "/work/parent-insights",
    product: "Prodigy",
    title: "Parent insights dashboard",
    summary:
      "Turned raw curriculum progress into an opinionated insights layer that helps parents understand impact, build trust, and stay engaged over time.",
    tags: ["Engagement", "Information design", "Systems thinking"],
    readTime: "6 min read",
    imageBg: "bg-[#EAF7F2] dark:bg-neutral-800",
  },
  {
    href: "/work/zomato-gold",
    product: "Zomato",
    title: "Scaling Zomato Gold",
    summary:
      "Designed a subscription experience that balanced restaurant constraints, user value, and growth strategy—aligning incentives across a complex marketplace.",
    tags: ["Subscription", "Marketplace", "Growth systems"],
    readTime: "5 min read",
    imageBg: "bg-[#F3E8FF] dark:bg-neutral-800",
  },
  {
    href: "/work/design-system",
    product: "Multi-team",
    title: "Design system as product",
    summary:
      "Established a reusable component architecture and governance model that increased velocity while preserving craft across multiple product teams.",
    tags: ["Design system", "Scale", "Cross-functional"],
    readTime: "7 min read",
    imageBg: "bg-[#FFF1E6] dark:bg-neutral-800",
  },
];

export default function WorkPage() {
  return (
    <section className="max-w-4xl mx-auto pb-10 md:pb-12">

      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Product case studies
        </h1>

        <p className="mt-3 max-w-2xl text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Systems-focused work across subscriptions, experimentation, and design
          foundations—focused on clarity, measurable outcomes, and products that
          scale with intention.
        </p>
      </div>

      {/* Case study list */}
      <div className="flex flex-col gap-20 md:gap-24 mt-10 md:mt-12">

        {caseStudies.map((study) => (
          <Link key={study.href} href={study.href} className="group">

            <article className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

              {/* Image container */}
<div
  className={`
    relative
    aspect-[4/3]
    rounded-xl
    overflow-hidden
    ${study.imageBg}
    transition
    duration-300
  `}
>
  {study.image && (
    <img
      src={study.image}
      alt=""
      className="
        w-full
        h-full
        object-cover
      "
    />
  )}
</div>

              {/* Text content */}
              <div>

                {/* Product tag */}
                <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                  {study.product}
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {study.title}
                </h2>

                {/* Summary */}
                <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {study.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`
                        text-xs px-2.5 py-1 rounded-md
                        ${tagStyles[tag] || "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"}
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-6">

                  <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">
                    View case study →
                  </span>

                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {study.readTime}
                  </span>

                </div>

              </div>

            </article>

          </Link>
        ))}

      </div>

    </section>
  );
}

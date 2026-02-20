import { CaseStudyCard } from "@/components/case-study-card";

const caseStudies = [
  {
    href: "/work/one-page-checkout",
    product: "Prodigy",
    title: "One-page checkout experiment (V1 → V2)",
    summary:
      "Redesigned the subscription checkout flow through structured experimentation—improving conversion while documenting failures as reusable learnings for the growth team.",
    tags: ["Experimentation", "Subscription", "Growth design"],
    readTime: "4 min read",
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
    <section className="max-w-4xl mx-auto pt-4 md:pt-6 pb-10 md:pb-12">
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

      <div className="flex flex-col gap-20 md:gap-28 mt-10 md:mt-12">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.href}
            href={study.href}
            product={study.product}
            title={study.title}
            summary={study.summary}
            tags={study.tags}
            readTime={study.readTime}
            imageBg={study.imageBg}
          />
        ))}
      </div>
    </section>
  );
}

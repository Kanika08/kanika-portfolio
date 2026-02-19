import { SectionHeader } from "@/components/section-header";
import { CaseStudyCard } from "@/components/case-study-card";

export default function WorkPage() {
  return (
    <section className="py-10 md:py-12 space-y-10 md:space-y-12">
      <SectionHeader
        eyebrow="Selected work"
        title="Product case studies"
        description="A selection of systems-focused projects across subscriptions, experimentation, and design foundations. Each case study goes beyond UI to unpack problem framing, constraints, and measurable outcomes."
        as="h1"
      />

      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <CaseStudyCard
          href="/work/one-page-checkout"
          product="Prodigy"
          focus="Conversion"
          title="One-page checkout experiment (V1 → V2)"
          summary="Redesigned the subscription checkout flow through structured experimentation—improving conversion while documenting failures as reusable learnings for the growth team."
          tags={["Experimentation", "Subscription", "Growth design"]}
        />

        <CaseStudyCard
          href="/work/parent-insights"
          product="Prodigy"
          focus="Engagement"
          title="Parent insights dashboard"
          summary="Turned raw curriculum progress into an opinionated insights layer that helps parents understand impact, build trust, and stay engaged over time."
          tags={["Engagement", "Information design", "Systems thinking"]}
        />

        <CaseStudyCard
          href="/work/zomato-gold"
          product="Zomato"
          focus="Subscription"
          title="Scaling Zomato Gold"
          summary="Designed a subscription experience that balanced restaurant constraints, user value, and growth strategy—aligning incentives across a complex marketplace."
          tags={["Subscription", "Marketplace", "Growth systems"]}
        />

        <CaseStudyCard
          href="/work/design-system"
          product="Multi-team"
          focus="Design systems"
          title="Design system as product"
          summary="Established a reusable component architecture and governance model that increased velocity while preserving craft across multiple product teams."
          tags={["Design system", "Scale", "Cross-functional"]}
        />
      </div>
    </section>
  );
}
